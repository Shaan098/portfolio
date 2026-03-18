require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shaan-portfolio';
const EMAIL_USER = process.env.EMAIL_USER || 'your-email@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'your-app-password';

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Models
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Contact Form - SEND MESSAGE
app.post(
  '/api/contact',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;

      // Save to Database
      const contact = new Contact({ name, email, message });
      await contact.save();

      // Send Email to Admin
      await transporter.sendMail({
        from: EMAIL_USER,
        to: 'shaansaurav633@gmail.com',
        subject: `New Contact Message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // Send Confirmation Email to User
      await transporter.sendMail({
        from: EMAIL_USER,
        to: email,
        subject: 'Portfolio Contact Confirmation',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I have received your message and will get back to you soon.</p>
          <p>Best regards,<br/>Shaan Saurav</p>
        `,
      });

      res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  }
);

// Projects API - GET ALL PROJECTS
app.get('/api/projects', async (req, res) => {
  try {
    const projects = [
      {
        id: 1,
        title: 'Online Multi-Language Compiler',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        description: 'A full-stack IDE for executing code in multiple languages',
        github: 'https://github.com/Shaan098/multi-language-compiler',
      },
      {
        id: 2,
        title: 'AR Educational Content Viewer',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'MongoDB', '3D Models'],
        description: 'Interactive AR platform for educational content',
        github: 'https://github.com/Shaan098/ar-viewer',
      },
      {
        id: 3,
        title: 'Appointment Scheduling System',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
        description: 'Complete appointment management system',
        github: 'https://github.com/Shaan098/appointment-system',
      },
    ];
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Skills API - GET ALL SKILLS
app.get('/api/skills', async (req, res) => {
  try {
    const skills = {
      languages: ['C++', 'JavaScript', 'C', 'PHP'],
      frontend: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT'],
      tools: ['Git', 'VS Code', 'Thunder Client', 'Postman', 'AWS'],
      softSkills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Communication'],
    };
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
