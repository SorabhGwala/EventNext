import nodemailer from "nodemailer";

export const sendOtp = async ({ email, eventTitle, location, otp }) => {
  console.log(`Sending OTP to ${email} for event ${eventTitle} at location ${location}`);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Your ticket for ${eventTitle}`,
    html: `<h2>OTP for ticket registration</h2><p style="font-size: 20px; font-weight: bold;">${otp}</p><p>At ${location}</p>.`,
  };  

  await transporter.sendMail(mailOptions);
};

export const sendEventRegistration = async ({ email, eventTitle, location }) => {
  console.log(`Sending registration confirmation to ${email} for event ${eventTitle} at location ${location}`);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Your ticket for ${eventTitle}`,
    html: `<h2>Registration successful.</h2><p style="font-size: 20px; font-weight: bold;">${eventTitle}</p><p>At ${location}</p>.`,
  };

  await transporter.sendMail(mailOptions);
};
