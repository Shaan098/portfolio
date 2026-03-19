# 🚀 Complete Deployment Guide for Shaan's Portfolio

**Estimated Time:** 30 minutes | **Cost:** Free (completely free tier deployments available)

---

## **Phase 1: Database Setup (MongoDB Atlas) - 5 minutes**

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email OR GitHub (recommended - since you have GitHub)
4. Verify your email

### Step 2: Create a Database Cluster
1. After signup, click "Create Deployment"
2. Choose "FREE" tier (M0)
3. Select Region: **Singapore or India** (closest to you for better performance)
4. Click "Create Deployment"
5. Wait 2-5 minutes for cluster to be ready

### Step 3: Get Connection String
1. In MongoDB Atlas dashboard, click "Connect"
2. Choose "Drivers"
3. Select "Node.js" and version "4.x or higher"
4. Copy the connection string - it looks like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dbname?retryWrites=true&w=majority
   ```
5. **Replace `<password>` with your password and `dbname` with `shaan-portfolio`**
6. **Save this string** - you'll need it in 2 places

---

## **Phase 2: Backend Deployment (Render) - 10 minutes**

### Step 1: Prepare Backend for Deployment
Your backend is already ready! It has:
- ✅ server.js configured
- ✅ package.json with all dependencies
- ✅ .gitignore for sensitive files

### Step 2: Deploy to Render
1. Go to: https://render.com
2. Click "Sign up" → Choose "GitHub"
3. Authorize Render to access your GitHub
4. Click "New +" → "Web Service"
5. Select: `Shaan098/portfolio` (your repository)
6. Configure:
   - **Name:** `shaan-portfolio-backend`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
7. Click "Advanced" and add Environment Variables:
   ```
   MONGODB_URI = <your_mongodb_connection_string_here>
   EMAIL_USER = your_gmail@gmail.com
   EMAIL_PASS = your_app_specific_password
   NODE_ENV = production
   PORT = 5000
   ```

### Step 3: Get Your Backend URL
1. After deployment completes, you'll see a URL like:
   ```
   https://shaan-portfolio-backend.render.com
   ```
2. **Save this URL** - you'll need it for the frontend!

---

## **Phase 3: Frontend Deployment (Netlify) - 10 minutes**

### Step 1: Update API Endpoint in Code
1. Open: `frontend/src/config/api.config.js`
2. Change `API_BASE_URL`:
   ```javascript
   const API_BASE_URL = 'https://shaan-portfolio-backend.render.com/api';
   ```
3. Save and commit to GitHub:
   ```bash
   git add .
   git commit -m "Update API URL for production deployment"
   git push
   ```

### Step 2: Deploy Frontend to Netlify
1. Go to: https://netlify.com
2. Click "Sign up" → Choose "GitHub"
3. Authorize Netlify to access your GitHub
4. Click "Import an existing project"
5. Select: `Shaan098/portfolio`
6. Configure:
   - **Base Directory:** `frontend`
   - **Build Command:** `npm run build` (or `CI=false npm run build`)
   - **Publish Directory:** `frontend/build`
7. Click "Advanced" and add Environment Variables:
   ```
   REACT_APP_API_URL = https://shaan-portfolio-backend.render.com/api
   ```
8. Click "Deploy Site"
9. Wait 2-3 minutes for build to complete

### Step 3: Get Your Frontend URL
Once deployed, you'll see:
```
https://your-site-name.netlify.app
```

---

## **Phase 4: Setup Email (Contact Form) - 5 minutes**

For the contact form to send emails, follow these steps:

### Enable Gmail App Password
1. Go to: https://myaccount.google.com
2. Enable 2-Factor Authentication (if not already)
3. Go to: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password
6. In your **Render dashboard**, update environment variable:
   ```
   EMAIL_PASS = <your_16_char_app_password>
   ```

---

## **Phase 5: Testing Your Deployment - 5 minutes**

### Test Frontend
1. Go to your Netlify URL: `https://your-site-name.netlify.app`
2. Check:
   - ✅ All sections load (Hero, About, Skills, Projects, etc.)
   - ✅ Animations work smooth
   - ✅ Dark mode toggle works
   - ✅ Navigation scrolling works
   - ✅ ChatBot button is visible and clickable

### Test Projects
1. Click on "Projects" section
2. Check:
   - ✅ Project cards load
   - ✅ Filter buttons work
   - ✅ GitHub links work
   - ✅ Live link shows (for Compiler only)
   - ✅ CV download button works

### Test Contact Form
1. Scroll to "Contact" section
2. Fill out form with test data
3. Click "Send Message"
4. Check:
   - ✅ Success message appears
   - ✅ You receive email at your gmail account
   - ✅ Form submits without errors

### Test GitHub Stats
1. Scroll to "GitHub Activity" section
2. Check:
   - ✅ GitHub stats load (followers, repos, etc.)
   - ✅ Profile link works

---

## **Troubleshooting**

### Frontend won't load
```
Error: API call fails or components don't render
Solution: Check that your Render backend URL is correctly set in:
- frontend/src/config/api.config.js
- Netlify environment variables
```

### Contact form doesn't send emails
```
Error: 500 error when submitting contact form
Solution 1: Verify MongoDB is connected (check Render logs)
Solution 2: Check EMAIL_USER and EMAIL_PASS are correct in Render
Solution 3: Make sure Gmail app password is used (not regular password)
```

### Backend shows error
```
Solution: Check Render deployment logs:
1. Go to Render.com
2. Click on your service
3. Click "Logs" tab
4. Look for error messages
5. Check MongoDB connection string if MongoDB error appears
```

---

## **Custom Domain (Optional)**

If you want to use your own domain (shaansaurav.dev):

### With Netlify
1. Go to Netlify dashboard → Site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records at your domain provider

### With Render (Backend)
1. Similar process in Render dashboard
2. Add custom domain for your API

---

## **Final Checklist**

- [ ] MongoDB Atlas account created
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] Environment variables set in both services
- [ ] API URL updated in frontend code
- [ ] All sections visible and working
- [ ] Contact form sends emails
- [ ] ChatBot visible and clickable
- [ ] Resume downloads working
- [ ] GitHub stats displaying
- [ ] Mobile responsive on all pages
- [ ] Dark mode toggle working

---

## **Your Deployed Portfolio URLs**

Save these:
```
Frontend: https://your-site-name.netlify.app
Backend:  https://shaan-portfolio-backend.render.com
Database: MongoDB Atlas (no public URL)
```

---

## **What's Next?**

After successful deployment:

1. **Share with recruiters** - Email them your portfolio link
2. **Update portfolio content** - Add real projects when you build them
3. **Keep GitHub updated** - New features auto-deploy to Netlify
4. **Monitor stats** - Check Render/Netlify analytics
5. **Custom domain** - Purchase and connect when ready

---

## **Support Resources**

- Render Docs: https://render.com/docs
- Netlify Docs: https://docs.netlify.com
- MongoDB Docs: https://docs.mongodb.com
- GitHub: https://github.com/Shaan098/portfolio

**Good luck! 🚀**
