# Shaan Saurav - Modern Portfolio Website

A stunning, responsive, and feature-rich personal portfolio website built with **React** and **Tailwind CSS**. Showcasing projects, skills, and experience in an elegant glassmorphic design.

## 🎯 Features

✨ **Modern Design**
- Glassmorphism UI with smooth animations
- Dark mode with gradient accents
- Fully responsive (mobile, tablet, desktop)
- Animated typing effects and transitions

🚀 **Key Sections**
- Hero Section with typing animation
- About Me with professional summary
- Skills with progress bars and filtering
- Featured Projects with tech stack
- Experience timeline
- Achievements & Certifications
- Education details
- Contact form
- Interactive AI ChatBot

🛠️ **Technical Features**
- Scroll progress bar
- Back to Top button
- Project filtering system
- Animated counters
- Smooth scroll navigation
- Resume download button
- Social media links
- GitHub stats section ready
- Dark/Light mode toggle

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🚀 Installation & Setup

### 1. Clone or download the project
```bash
cd myportfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
myportfolio/
├── public/
│   ├── index.html                 # Main HTML file
│   └── my final cv.pdf            # Resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── ChatBot.jsx            # AI ChatBot
│   │   └── common.jsx             # Reusable components
│   ├── sections/
│   │   ├── HeroSection.jsx        # Hero/Landing section
│   │   ├── AboutSection.jsx       # About me
│   │   ├── SkillsSection.jsx      # Skills showcase
│   │   ├── ProjectsSection.jsx    # Projects portfolio
│   │   ├── ExperienceSection.jsx  # Experience
│   │   ├── AchievementsSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── EducationSection.jsx
│   │   └── ContactSection.jsx     # Contact form
│   ├── hooks/
│   │   └── useCustomHooks.js      # Custom React hooks
│   ├── styles/
│   │   └── index.css              # Global styles
│   ├── App.jsx                    # Main App component
│   └── index.js                   # Entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize colors and animations:
```javascript
colors: {
  sky: { ... },
  purple: { ... },
  // Add your custom colors
}
```

### Content Updates
Update your information in the respective section components:
- `HeroSection.jsx` - Name, title, tagline
- `AboutSection.jsx` - Bio and highlights
- `SkillsSection.jsx` - Add/remove skills
- `ProjectsSection.jsx` - Add your projects
- `ContactSection.jsx` - Contact information

### Resume Download
Your resume PDF is located at `/public/my final cv.pdf`. Replace it with your updated resume while keeping the same filename.

## 📞 Contact Information
- **Email**: shaansaurav633@gmail.com
- **Phone**: +91 6204566381
- **GitHub**: https://github.com/Shaan098
- **LinkedIn**: linkedin.com/in/shaan-saurav

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Then add to `package.json`:
```json
"homepage": "https://yourusername.github.io/myportfolio"
```

## 📚 Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **React Intersection Observer** - Scroll animations
- **Axios** - HTTP client
- **PostCSS** - CSS processing

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- Customize the ChatBot responses in `ChatBot.jsx`
- Update project details in `ProjectsSection.jsx`
- Modify animations in `tailwind.config.js`
- Add more skills in `SkillsSection.jsx`

## 💡 Tips

- Use React Developer Tools browser extension for debugging
- Monitor performance using Chrome DevTools
- Test responsiveness in different screen sizes
- Update content regularly with new projects

## 📄 License

This portfolio is open source. Feel free to use it as a template for your own portfolio!

## 🙏 Credits

Built with ❤️ using React and Tailwind CSS

---
**Happy Coding! 🚀**
