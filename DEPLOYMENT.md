# Deployment Guide

## Deploying to Production

### Frontend Deployment Options

#### Option 1: Vercel (Recommended)

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/myportfolio.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select `frontend` folder as root directory

3. **Set environment variables in Vercel**
   - Add `REACT_APP_API_URL=https://your-backend.com/api`

4. **Deploy**
   - Vercel will automatically deploy on every push

#### Option 2: Netlify

1. **Build the project**
```bash
cd frontend
npm run build
```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect GitHub for automatic deploys

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `build`

#### Option 3: GitHub Pages

```bash
# Update package.json
"homepage": "https://your-username.github.io/myportfolio",

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Backend Deployment Options

#### Option 1: Heroku

1. **Install Heroku CLI**
   - Download from [Heroku Dev Center](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku app**
```bash
cd backend
heroku create your-app-name
```

4. **Set environment variables**
```bash
heroku config:set MONGODB_URI="your-mongodb-uri"
heroku config:set EMAIL_USER="your-email@gmail.com"
heroku config:set EMAIL_PASS="your-app-password"
```

5. **Deploy**
```bash
git push heroku main
```

#### Option 2: Railway

1. **Login to Railway**
   - Go to [Railway](https://railway.app)
   - Connect GitHub account

2. **Create new project**
   - Select your repository
   - Select `backend` folder

3. **Configure environment**
   - Add environment variables in Project Settings

4. **Deploy**
   - Railway deploys automatically on every push

#### Option 3: Render

1. **Go to Render**
   - Visit [Render](https://render.com)
   - Create new Web Service

2. **Connect repository**
   - Select your repository
   - Choose `backend` folder

3. **Configure build and start commands**
   - Build: `npm install`
   - Start: `node server.js`

4. **Add environment variables**

#### Option 4: AWS

1. **Using AWS Elastic Beanstalk**
```bash
pip install awsebcli --upgrade --user

# Initialize application
eb init -p node.js-20 my-app

# Create environment
eb create production

# Deploy
eb deploy
```

### Database Deployment

#### MongoDB Atlas (Cloud)

1. **Create account at MongoDB Atlas**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free tier

2. **Create cluster**
   - Click "Create Cluster"
   - Choose free tier
   - Select your region

3. **Get connection string**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string

4. **Update .env**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shaan-portfolio
```

### Full Stack Production Setup

1. **Frontend**
   - Deploy to Vercel or Netlify
   - Update API URL to production backend

2. **Backend**
   - Deploy to Railway or Render
   - Update MongoDB URI to Atlas
   - Update CORS settings for production domain

3. **Environment Variables**
   - Never commit .env files
   - Set all variables in hosting platform

### Domain Configuration

1. **Buy a domain**
   - GoDaddy, Namecheap, Route53, etc.

2. **Point to hosting**
   
   **For Vercel (Frontend)**:
   - Add domain in Vercel settings
   - Update DNS records from domain registrar

   **For backend**:
   - Create subdomain (api.yourdomain.com)
   - Point to backend server

3. **Update API URL in frontend**
```javascript
// frontend/src/config/api.config.js
const API_BASE_URL = 'https://api.yourdomain.com/api';
```

### SSL Certificate

- Vercel: Automatic
- Netlify: Automatic
- Heroku: Included in paid plans
- AWS: Use AWS Certificate Manager
- Railway/Render: Automatic

### Monitoring & Maintenance

1. **Set up error tracking**
   - Sentry for error monitoring
   - LogRocket for user session replay

2. **Performance monitoring**
   - Google Analytics
   - Vercel Analytics

3. **Uptime monitoring**
   - UptimeRobot
   - Freshping

### Continuous Integration/Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

### Backup Strategy

1. **Database backups**
   - Enable MongoDB Atlas automatic backups
   - Regular exports to cloud storage

2. **Code backups**
   - GitHub as primary backup
   - Regular exports

### Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables set
- [ ] API keys rotated
- [ ] MongoDB firewall configured
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation enabled
- [ ] Sensitive data not in git

### Performance Optimization

1. **Frontend**
   - Enable gzip compression
   - CDN for static assets
   - Image optimization
   - Code splitting

2. **Backend**
   - Database indexing
   - Caching strategy
   - Load balancing

### Troubleshooting Deployments

#### Common Issues

**"Build failed"**
- Check Node version compatibility
- Verify all dependencies installed
- Check build scripts in package.json

**"Connection refused"**
- Verify API URL in frontend
- Check backend server is running
- Check firewall settings

**"Database connection error"**
- Verify connection string
- Check VPC/IP whitelist
- Verify credentials

**"Out of memory"**
- Upgrade server plan
- Optimize database queries
- Implement caching

---

For detailed platform-specific guides:
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com/)
- [Heroku Deployment](https://devcenter.heroku.com/)
- [Railway.app](https://docs.railway.app/)
- [Render](https://render.com/docs)
