# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Clone or Extract Project
```bash
cd myportfolio
```

### 2. Run Setup Script

**Windows:**
```bash
setup.bat
```

**Mac/Linux:**
```bash
bash setup.sh
```

### 3. Configure Environment

Edit `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
NODE_ENV=development
```

### 4. Start Development Servers

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

### 5. Open Portfolio
Go to `http://localhost:3000`

---

## 📝 Customize Your Portfolio

### Add Your Information

1. **Update `frontend/src/config/portfolio.config.js`**
   - Change name, email, phone
   - Update skills and projects
   - Add your experiences

2. **Update `frontend/src/components/Hero.jsx`**
   - Change the profile image
   - Update title and tagline

3. **Update `frontend/src/components/Contact.jsx`**
   - Update contact email
   - Add your social links

### Add Your Projects

Edit `frontend/src/components/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project',
    tech: ['React', 'Node.js'],
    description: 'Your project description',
    github: 'https://github.com/you/project',
  },
  // Add more...
];
```

---

## 🌐 Deploy

### Deploy Frontend (Free)
```bash
cd frontend
npm run build

# Then:
# 1. Go to Vercel.com
# 2. Connect GitHub or upload build folder
```

### Deploy Backend (Free)
```bash
# 1. Go to Railway.app
# 2. Connect GitHub repository
# 3. Select backend folder
# 4. Add environment variables
```

---

## 📚 Resources

- [Setup Guide](SETUP_GUIDE.md)
- [Component Documentation](COMPONENTS.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Full README](README.md)

---

## 🆘 Having Issues?

1. Check if MongoDB is running
2. Verify `.env` file is configured
3. Check terminal for error messages
4. Restart development servers
5. Clear npm cache: `npm cache clean --force`

---

## 💡 Tips

- Use `npm run dev` for backend auto-reload
- Changes to React auto-reload frontend
- Open DevTools (F12) to debug
- Check console for error messages

---

**Happy coding! 🎉**
