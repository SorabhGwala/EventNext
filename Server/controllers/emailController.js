import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send OTP Email
 */
export const sendOtp = async ({ email, eventTitle, location, otp, dob }) => {
  try {

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your OTP for ${eventTitle}`,
    html: `
  <div>
    <h2>OTP for Ticket Registration</h2>
    <p><strong>OTP:</strong> ${otp}</p>
    <p><strong>Event:</strong> ${eventTitle}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Location:</strong> ${location}</p>
  </div>
`,

    };

    await transporter.sendMail(mailOptions);
    console.log(`[EMAIL SENT] OTP email sent to ${email}`);
  } catch (error) {
    console.error('[EMAIL ERROR - sendOtp]', error);
    throw new Error('Failed to send OTP email');
  }
};

/**
 * Send Registration Confirmation Email
 */
export const sendEventRegistration = async ({ email, eventTitle, location, dob }) => {
  try {
    console.log(`[CONFIRM REGISTRATION] Email: ${email}, Event: ${eventTitle}, Location: ${location}, DOB: ${dob}`);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Ticket Confirmed for ${eventTitle}`,
      html: `
        <h2>Registration Successful</h2>
        <p><strong>Event:</strong> ${eventTitle}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>Thank you for registering. Please bring this confirmation with you to the event.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[EMAIL SENT] Confirmation email sent to ${email}`);
  } catch (error) {
    console.error('[EMAIL ERROR - sendEventRegistration]', error);
    throw new Error('Failed to send confirmation email');
  }
};
