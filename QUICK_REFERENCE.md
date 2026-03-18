# ⚡ Quick Reference Card

## 🚀 Setup in 60 Seconds

```bash
# 1. Run setup
setup.bat              # Windows
bash setup.sh          # Mac/Linux

# 2. Configure
nano backend/.env      # Edit:
# MONGODB_URI=...
# EMAIL_USER=...
# EMAIL_PASS=...

# 3. Start servers
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm start

# 4. Open
http://localhost:3000
```

---

## 📁 Key File Locations

| What I Need | File | Location |
|-------------|------|----------|
| Change name | App.jsx | `frontend/src/` |
| Edit bio | About.jsx | `frontend/src/components/` |
| Add projects | Projects.jsx | `frontend/src/components/` |
| Update skills | Skills.jsx | `frontend/src/components/` |
| Change colors | tailwind.config.js | `frontend/` |
| Add animations | global.css | `frontend/src/styles/` |
| Config API | api.config.js | `frontend/src/config/` |
| All content | portfolio.config.js | `frontend/src/config/` |
| Email setup | server.js | `backend/` |

---

## 🛠️ Common Commands

```bash
# Install dependencies
npm install

# Start development
npm start
npm run dev

# Build for production
npm run build

# Clear cache
npm cache clean --force

# Install specific package
npm install package-name

# Check Node version
node --version

# Check npm version
npm --version
```

---

## 📖 Documentation Map

```
START → START_HERE.md
        ├─ QUICKSTART.md (Need to run now?)
        ├─ SETUP_GUIDE.md (Need detailed steps?)
        ├─ README.md (Want full overview?)
        ├─ COMPONENTS.md (Need code reference?)
        ├─ API_DOCS.md (Need API details?)
        ├─ DEPLOYMENT.md (Ready to deploy?)
        ├─ PROJECT_SUMMARY.md (Want stats?)
        ├─ FILE_INVENTORY.md (Want file list?)
        └─ VISUAL_ROADMAP.md (Visual guide?)
```

---

## 🔧 Configuration Quick Links

### backend/.env
```
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

### tailwind.config.js Colors
```javascript
colors: {
  'primary': '#60a5fa',
  'secondary': '#a78bfa',
  'accent': '#f59e0b',
}
```

### portfolio.config.js Structure
```javascript
PORTFOLIO_CONFIG = {
  personal: { name, email, phone },
  skills: { languages, frontend, backend },
  projects: [ { id, title, tech, github } ],
  experience: [ { title, company, highlights } ],
}
```

---

## 🎯 Component Guide

| Component | Purpose | File |
|-----------|---------|------|
| Navbar | Navigation | navbar.jsx |
| Hero | Welcome | hero.jsx |
| About | Bio | about.jsx |
| Skills | Skills | skills.jsx |
| Projects | Portfolio | projects.jsx |
| Experience | Timeline | experience.jsx |
| Achievements | Stats | achievements.jsx |
| Certifications | Certs | certifications.jsx |
| Education | School | education.jsx |
| Contact | Form | contact.jsx |
| ChatBot | AI | chatbot.jsx |
| ScrollProgress | Scroll bar | scrollprogress.jsx |
| BackToTop | Jump | backtotop.jsx |
| LoadingScreen | Wait | loadingscreen.jsx |

---

## 🔗 API Reference

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/health | Server check |
| POST | /api/contact | Send message |
| GET | /api/projects | Get projects |
| GET | /api/skills | Get skills |

### POST /api/contact
```javascript
{
  name: "string",
  email: "email@example.com",
  message: "string"
}
```

---

## 🌐 Deployment Checklist

```
Frontend
├─ [ ] Commit to GitHub
├─ [ ] Go to Vercel.com
├─ [ ] Connect GitHub
├─ [ ] Deploy
└─ [ ] Set custom domain

Backend
├─ [ ] Commit to GitHub
├─ [ ] Go to Railway.app
├─ [ ] Connect GitHub
├─ [ ] Set env variables
├─ [ ] Deploy
└─ [ ] Update API URL

Database
├─ [ ] Create MongoDB Atlas account
├─ [ ] Create cluster
├─ [ ] Get connection string
├─ [ ] Update MONGODB_URI
└─ [ ] Whitelist your IP

Final
├─ [ ] Test all features
├─ [ ] Check performance
├─ [ ] Submit domain
└─ [ ] Celebrate! 🎉
```

---

## ⚠️ Troubleshooting

| Error | Solution |
|-------|----------|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` |
| MongoDB error | Check if mongod is running |
| Email not sending | Verify Gmail App Password |
| CORS error | Check frontend URL in backend |
| Build fails | `npm cache clean --force` |
| Components not showing | Check import statements |
| Styling not working | Check Tailwind classes |
| API not responding | Check backend is running |

---

## 💾 Backup Commands

```bash
# Backup database
mongodump --out ./backup

# Restore database
mongorestore ./backup

# Export projects
npm export projects > projects.json

# Git backup
git branch backup
git push origin backup
```

---

## 🎨 Customization Snippets

### Change Primary Color
```javascript
// tailwind.config.js
'primary': '#your-hex-color'

// In component
className="bg-primary"
```

### Add New Project
```javascript
// frontend/src/components/Projects.jsx
{
  id: 4,
  title: 'New Project',
  tech: ['Tech1', 'Tech2'],
  description: 'Description',
  github: 'https://github.com/...'
}
```

### Update Contact Info
```javascript
// frontend/src/config/portfolio.config.js
email: 'newemail@gmail.com',
phone: '+91 XXXX XXXX',
```

---

## 📊 Performance Tips

```
✅ Enable gzip compression
✅ Lazy load images
✅ Code split bundle
✅ Cache static files
✅ Minify CSS/JS
✅ Optimize database queries
✅ Use CDN for assets
✅ Monitor with Analytics
```

---

## 🔐 Security Checklist

```
✅ Don't commit .env
✅ Use strong passwords
✅ Validate all inputs
✅ Use HTTPS
✅ Enable CORS for domain only
✅ Hash sensitive data
✅ Rate limit API
✅ Keep packages updated
```

---

## 📱 Responsive Styles

```javascript
// Mobile first approach
// xs: 320px (default)
// sm: 640px (sm:)
// md: 768px (md:)
// lg: 1024px (lg:)
// xl: 1280px (xl:)
// 2xl: 1536px (2xl:)

// Example
className="text-sm md:text-lg lg:text-xl"
```

---

## 🧩 Import Guide

```javascript
// React
import React, { useState, useEffect } from 'react';

// Components
import Hero from './components/Hero';

// Config
import { PORTFOLIO_CONFIG } from './config/portfolio.config';

// Utils
import { scrollToElement } from './utils/helpers';

// Framer Motion
import { motion } from 'framer-motion';

// React Icons
import { FiGithub } from 'react-icons/fi';
```

---

## 🎬 Animation Quick Start

```javascript
// Fade in
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.6 }}

// Slide up
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}

// Scale
initial={{ scale: 0.9 }}
whileInView={{ scale: 1 }}

// Hover
whileHover={{ scale: 1.05 }}
```

---

## 🔌 Plugin Management

```bash
# Add package
npm install package-name

# Remove package
npm uninstall package-name

# Update packages
npm update

# Check outdated
npm outdated

# List installed
npm list
```

---

## 🚀 Deployment Servers

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push
4. Add custom domain

### Backend (Railway)
1. Push to GitHub
2. Connect to Railway
3. Add env variables
4. Deploy

### Database (MongoDB Atlas)
1. Sign up
2. Create cluster
3. Whitelist IP
4. Get connection string

---

## 📞 Support Resources

| Resource | URL |
|----------|-----|
| React | react.dev |
| Tailwind | tailwindcss.com |
| Node.js | nodejs.org |
| Express | expressjs.com |
| MongoDB | mongodb.com |
| Git | git-scm.com |

---

## ✅ Pre-Launch Checklist

```
CODE
├─ [ ] All components created
├─ [ ] All content added
├─ [ ] No console errors
├─ [ ] Animations smooth
└─ [ ] All links working

TESTING
├─ [ ] Mobile responsive
├─ [ ] Desktop view
├─ [ ] Tablet view
├─ [ ] Input validation
└─ [ ] Email sending

DEPLOYMENT
├─ [ ] GitHub committed
├─ [ ] Frontend deployed
├─ [ ] Backend deployed
├─ [ ] Domain configured
└─ [ ] HTTPS enabled

MONITORING
├─ [ ] Analytics set up
├─ [ ] Error tracking
├─ [ ] Performance check
├─ [ ] Uptime monitoring
└─ [ ] Backups automated
```

---

## 🎉 You're Ready!

```
✅ 60+ files created
✅ All features implemented
✅ Full documentation provided
✅ Ready for production

NEXT STEP: Read START_HERE.md
```

---

**Quick Reference v1.0**  
Keep this handy during development!
