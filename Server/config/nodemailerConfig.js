import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables from .env

// Create transporter object with Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,      // Your Gmail address
    pass: process.env.EMAIL_PASS       // Your App Password (not regular password!)
  }
});

// Optional: verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('Email server error:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

export default transporter;
