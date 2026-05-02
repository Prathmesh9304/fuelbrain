const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health check route
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'FuelBrain Backend API is running' });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, inquiryType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
      subject: `New FuelBrain Inquiry: ${inquiryType || 'General'} - from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Inquiry Type: ${inquiryType || 'N/A'}

        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || 'N/A'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
});

// Only listen if not running in a Vercel serverless environment
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export for Vercel Serverless
