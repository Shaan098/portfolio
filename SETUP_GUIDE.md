# Setup Guide for Shaan Saurav Portfolio

## Step-by-Step Installation Guide

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB** (optional, can use MongoDB Atlas cloud)

### Step 1: Project Setup

```bash
# Clone the repository or extract the folder
cd myportfolio

# Install root dependencies
npm install
```

### Step 2: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will open at `http://localhost:3000`

### Step 3: Backend Setup

Open a new terminal:

```bash
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

## Configuration

### Email Setup (For Contact Form)

1. **Enable 2FA on Gmail:**
   - Go to myaccount.google.com
   - Click Security in the left panel
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to myaccount.google.com/apppasswords
   - Select Mail and Windows Computer
   - Copy the generated 16-character password

3. **Update .env file:**

```bash
# backend/.env
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
NODE_ENV=development
```

### MongoDB Setup

#### Option 1: Local MongoDB
```bash
# Install MongoDB Community Edition
# Then start the service

# Linux/Mac
mongod

# Windows
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
```

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env`:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shaan-portfolio
```

## Customization Guide

### 1. Update Personal Information

**Hero Section** - `frontend/src/components/Hero.jsx`
```jsx
// Change name and title
<h1>Your Name</h1>
<h2>Your Title | Your Profession</h2>
```

**About Section** - `frontend/src/components/About.jsx`
```jsx
// Update bio and highlights
<p>Your professional summary here...</p>
```

**Contact Section** - `frontend/src/components/Contact.jsx`
```jsx
// Update contact information
const contactInfo = [
  { label: 'Email', value: 'your-email@gmail.com' },
  { label: 'Phone', value: '+91 XXXXXXXXXX' },
];
```

### 2. Add Your Projects

**Projects Section** - `frontend/src/components/Projects.jsx`

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'fullstack',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Project description',
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/yourname/project',
    live: 'https://project.com',
  },
  // Add more projects
];
```

### 3. Update Skills

**Skills Config** - `frontend/src/config/portfolio.config.js`

```javascript
skills: {
  languages: ['Your Languages'],
  frontend: ['Your Frontend Skills'],
  backend: ['Your Backend Skills'],
  tools: ['Your Tools'],
},
```

### 4. Change Color Theme

**Tailwind Config** - `frontend/tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#your-color',
      'secondary': '#your-color',
    },
  },
}
```

**Global CSS** - `frontend/src/styles/global.css`

```css
/* Update gradient colors */
.gradient-text {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

## Build & Deploy

### Build Frontend

```bash
cd frontend
npm run build
```

This creates an optimized build in `frontend/build/` folder.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd frontend
vercel
```

### Deploy Backend to Heroku

```bash
# Install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Push code
git push heroku main
```

## Troubleshooting

### Issue: Port 3000 already in use

```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
REACT_APP_PORT=3001 npm start
```

### Issue: MongoDB connection error

- Check if MongoDB is running
- Verify connection string in `.env`
- Check firewall settings for MongoDB port (27017)
- If using Atlas, whitelist your IP

### Issue: CORS error

Ensure backend `.env` has correct frontend URL:

```javascript
// backend/server.js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
```

### Issue: Email not sending

1. Check if 2FA and App Password are set up correctly
2. Verify exact app password in `.env`
3. Check email spam folder
4. Ensure backend server is running

## Performance Optimization

1. **Enable Gzip Compression:**

```javascript
// backend/server.js
const compression = require('compression');
app.use(compression());
```

2. **Optimize Images:**

```bash
# Install imagemin
npm install imagemin

# Compress images in public folder
```

3. **Use CDN for Assets:**

Update Tailwind CDN in production if needed.

## Security Best Practices

1. **Never commit .env files**
2. **Use strong JWT secrets**
3. **Validate all input on backend**
4. **Use HTTPS in production**
5. **Implement rate limiting**

## Environment Variables Reference

```
# Frontend (.env)
REACT_APP_API_URL=http://localhost:5000/api

# Backend (.env)
MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

## Next Steps

1. Customize the portfolio with your information
2. Test locally before deployment
3. Deploy frontend to Vercel
4. Deploy backend to hosting service
5. Update domain DNS records
6. Monitor and maintain

## Support Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)

## Get Help

If you encounter issues:
1. Check the troubleshooting section
2. Review console errors (F12 → Console)
3. Check backend logs
4. Search similar issues online
5. Create an issue on GitHub

---

Happy coding! 🚀
