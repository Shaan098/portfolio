# Quick Start Guide for Shaan's Portfolio

## Installation Steps

### Step 1: Open Terminal/PowerShell
Navigate to your project folder:
```bash
cd c:\Users\DELL\Desktop\myportfolio
```

### Step 2: Install Dependencies
```bash
npm install
```
This will download all required packages (takes 2-3 minutes)

### Step 3: Start Development Server
```bash
npm start
```
The website will automatically open in your browser at http://localhost:3000

## What's Inside?

✅ **Responsive Portfolio Design**
- Works perfectly on phone, tablet, and desktop
- Beautiful glassmorphism effects
- Smooth animations and transitions

✅ **All Sections Included**
- Hero section with typing animation
- About me section
- Skills with progress bars
- Projects showcase with filtering
- Experience timeline
- Achievements & badges
- Certifications
- Education
- Contact form
- AI ChatBot (floating button)

✅ **Features**
- Dark mode toggle
- Scroll progress bar
- Back to top button
- Resume download
- Social media links
- Mobile responsive menu

## Project Organization

All your content is organized in:
- `/src/sections/` - Main page sections
- `/src/components/` - Reusable UI components
- `/src/hooks/` - Custom React hooks
- `/public/` - Static files (your resume PDF)

## Making Changes

### Update Your Information
1. Edit `src/sections/HeroSection.jsx` for hero content
2. Edit `src/sections/AboutSection.jsx` for about me
3. Edit `src/sections/SkillsSection.jsx` for skills
4. Edit `src/sections/ProjectsSection.jsx` for projects

### Update Resume
Your resume "my final cv.pdf" is in the `/public/` folder. To use a new resume:
1. Replace the file but keep the same name
2. The download button will automatically work

### Customize Colors
Edit `tailwind.config.js` to change:
- Color scheme
- Animations
- Typography
- Spacing

## Build for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `/build` folder.

## Common Issues

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```

**Dependencies not installing?**
```bash
npm cache clean --force
npm install
```

**Need help?**
Check the README.md file for more details!

---

**Ready to showcase your portfolio? Run `npm start` and enjoy! 🚀**
