// File: routes/emailRouter.js
import express from "express";
import { sendOtp, sendEventRegistration } from "../controllers/emailController.js";
import { otpStore } from "../config/otpStore.js";

const router = express.Router();


router.post('/send-otp', async (req, res) => {
  try {
    const { email, eventTitle, location, dob } = req.body;

    console.log('Incoming /send-otp request:', { email, eventTitle, location, dob });

    if (!email || !eventTitle || !location || !dob) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = {
      otp,
      dob,
      eventTitle,
      location,
      expiresAt: Date.now() + 5 * 60 * 1000,
    };

    await sendOtp({ email, otp, eventTitle, location, dob });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in /send-otp:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /verify-otp
router.post("/verify-otp", async (req, res) => {
  const { email, otp, dob, eventTitle, location } = req.body;

  console.log("Verifying OTP with:", { email, otp, dob, eventTitle, location });

  if (!email || !otp || !dob || !eventTitle || !location) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const otpData = otpStore[email];

    if (!otpData) {
      return res.status(400).json({ success: false, message: "OTP not found or expired" });
    }

    if (Date.now() > otpData.expiresAt) {
      delete otpStore[email];
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (otp !== otpData.otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (dob !== otpData.dob) {
      return res.status(400).json({ success: false, message: "DOB does not match" });
    }

    if (eventTitle !== otpData.eventTitle) {
      return res.status(400).json({ success: false, message: "Event title does not match" });
    }

    if (location !== otpData.location) {
      return res.status(400).json({ success: false, message: "Location does not match" });
    }

    // ✅ OTP is valid
    delete otpStore[email];
    await sendEventRegistration({ email, eventTitle, location, dob });

    return res.status(200).json({
      success: true,
      message: `OTP Verified! Registered for "${eventTitle}" at "${location}" with DOB "${dob}".`,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).json({ success: false, message: "OTP verification failed" });
  }
});

export default router;
