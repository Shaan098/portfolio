# Shaan Saurav - Modern Portfolio Website

A stunning, responsive, and fully interactive personal portfolio website built with React, Tailwind CSS, Node.js, and MongoDB.

## 🌟 Features

### Core Features
- ✨ **Modern Design**: Premium UI with glassmorphism effects and smooth animations
- 🎨 **Dark Mode**: Beautiful dark theme optimized for minimal eye strain
- 📱 **Fully Responsive**: Perfect on mobile, tablet, and desktop devices
- ⚡ **Fast Performance**: Optimized for speed and smooth interactions
- 🎯 **Interactive Elements**: Hover effects, micro-interactions, and smooth scrolling

### Sections Included
1. **Hero Section**: Animated typing effect, CTA buttons, social links
2. **About Me**: Professional summary with tech stack showcase
3. **Skills**: Categorized skills with beautiful card layout
4. **Projects**: Filterable project cards with tech stack and GitHub links
5. **Experience**: Timeline-style experience section
6. **Achievements**: Highlighted accomplishments and milestones
7. **Certifications**: Professional certifications display
8. **Education**: Education background and coursework
9. **Contact**: Contact form with email integration

### Bonus Features
- 🤖 **AI Chatbot**: Floating chatbot with quick replies
- 🔄 **Project Filtering**: Filter projects by category
- 📊 **GitHub Stats** (Optional): Show GitHub contributions
- 📥 **Resume Download**: One-click resume download
- 🌓 **Dark/Light Toggle**: Switch between themes
- 📈 **Scroll Progress Bar**: Visual scroll indicator
- ⬆️ **Back to Top Button**: Quick navigation
- ⏳ **Loading Screen**: Beautiful loading animation

## 🛠️ Tech Stack

### Frontend
- **React 18**: Latest React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Nodemailer**: Email sending
- **JWT**: Authentication

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd myportfolio
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

### 4. Configure Environment Variables

**Backend (.env)**
```
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
NODE_ENV=development
```

### 5. Start the Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
myportfolio/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ChatBot.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   └── LoadingScreen.jsx
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit the following files to personalize your portfolio:

1. **Hero Section**: `frontend/src/components/Hero.jsx`
   - Update name, title, and tagline

2. **About Section**: `frontend/src/components/About.jsx`
   - Update professional summary

3. **Projects Section**: `frontend/src/components/Projects.jsx`
   - Add your own projects with details

4. **Contact Information**: `frontend/src/components/Contact.jsx`
   - Update email, phone, and social links

### Customize Colors
Edit `frontend/tailwind.config.js` to change the color scheme. Look for the `theme.extend.colors` section.

### Modify Animations
Framer Motion animations are used throughout. To customize:
- Adjust `transition` durations
- Modify `initial` and `animate` states
- Change `whileHover` and `whileTap` effects

## 📧 Email Configuration

To enable contact form emails:

1. Generate a Gmail App Password:
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Create an "App Password" for Gmail

2. Update `.env` file:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

## 🌐 Deployment

### Deploy Frontend (Vercel)
```bash
cd frontend
npm run build
# Upload to Vercel
```

### Deploy Backend (Heroku/Railway)
```bash
cd backend
# Configure for chosen platform
git push heroku main
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and interactions
- Optimized images and lazy loading
- Flexible grid layouts

## 🔒 Security

- Input validation on contact form
- CORS enabled for security
- Environment variables for sensitive data
- MongoDB connection security

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port in .env
PORT=5001
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify database credentials

### CORS Issues
- Backend CORS is configured in `server.js`
- Verify frontend URL matches CORS settings

## 📈 Performance Tips

- Use React DevTools Profiler to identify bottlenecks
- Implement code splitting for better load times
- Consider using next/image for optimized images
- Enable gzip compression on server

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Shaan Saurav**
- Email: shaansaurav633@gmail.com
- GitHub: https://github.com/Shaan098
- LinkedIn: https://linkedin.com/in/shaan-saurav

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 💡 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Dark/Light theme persistence
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA support
- [ ] Multi-language support

## 📞 Support

For issues or questions, feel free to create an issue or contact me directly.

---

**Made with ❤️ by Shaan Saurav**
