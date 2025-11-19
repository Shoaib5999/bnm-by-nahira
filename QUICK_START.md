# ⚡ Quick Start Guide - Get Your Site Live in 30 Minutes!

## 🎯 Goal
Get your beautiful flower shop website live with CMS in under 30 minutes!

---

## ✅ Step-by-Step Checklist

### 1️⃣ Sanity Setup (10 minutes)

- [ ] **Create Sanity account**: [sanity.io](https://www.sanity.io) → Sign up
- [ ] **Create project**: Click "Create Project" → Name it → Copy Project ID
- [ ] **Update config files**: 
  - Replace `not-configured-yet` with your Project ID in `/app/.env.local`
  - Replace `YOUR_PROJECT_ID` in `/app/sanity/sanity.config.js`
  - Replace `YOUR_PROJECT_ID` in `/app/sanity/sanity.cli.js`
- [ ] **Install Sanity CLI**: 
  ```bash
  npm install -g @sanity/cli
  sanity login
  ```
- [ ] **Install dependencies**:
  ```bash
  cd /app/sanity
  npm install sanity @sanity/vision
  ```
- [ ] **Deploy Studio**:
  ```bash
  cd /app/sanity
  sanity deploy
  ```
  (Choose hostname like: `blooms-and-gifts`)

### 2️⃣ Add Content (5 minutes)

- [ ] **Open Sanity Studio**: Go to `https://your-hostname.sanity.studio`
- [ ] **Add 4 Categories**:
  1. Bouquets
  2. Custom Cakes
  3. Gift Hampers
  4. Personalized Gifts
  
  For each: Title → Generate Slug → (Optional: Add Image) → Publish

- [ ] **Add 3-6 Products**:
  - Title, Slug, Main Image, Price, Category, Description
  - ✅ Check "Featured" for 2-3 products (shows on homepage)
  - ✅ Check "In Stock"
  - Click "Publish"

### 3️⃣ Configure Contact Form (2 minutes)

- [ ] **Get Web3Forms key**: [web3forms.com](https://web3forms.com) → Enter email → Copy key
- [ ] **Add to config**: Update `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `/app/.env.local`

### 4️⃣ Update Business Info (3 minutes)

Edit `/app/.env.local`:

```env
NEXT_PUBLIC_BUSINESS_NAME=Your Business Name
NEXT_PUBLIC_BUSINESS_TAGLINE=Your Amazing Tagline
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_BUSINESS_EMAIL=hello@yourbusiness.com
NEXT_PUBLIC_BUSINESS_PHONE=+1 (234) 567-8900
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Main St, Your City, State 12345
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourhandle
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
```

### 5️⃣ Deploy to Vercel (10 minutes)

- [ ] **Push to GitHub**:
  ```bash
  cd /app
  git init
  git add .
  git commit -m "Initial commit"
  ```
  Create repo on GitHub.com, then:
  ```bash
  git remote add origin https://github.com/username/repo.git
  git push -u origin main
  ```

- [ ] **Deploy on Vercel**:
  1. Go to [vercel.com](https://vercel.com) → Login with GitHub
  2. Click "New Project" → Import your repository
  3. **Add ALL environment variables** from `.env.local`:
     - Click "Environment Variables"
     - Add each one (copy from your `.env.local`)
  4. Click "Deploy"
  5. Wait 2-3 minutes ⏳

- [ ] **🎉 Your site is LIVE!** at `https://your-project.vercel.app`

---

## 🧪 Test Your Site

Visit your deployed site and check:

- [ ] Homepage loads with hero section
- [ ] Featured products display (if you marked any as featured)
- [ ] Categories show up
- [ ] Click "Collections" → Products display
- [ ] Click a product → Detail page works
- [ ] WhatsApp button opens chat
- [ ] Contact form submits (check email)
- [ ] Mobile responsive (test on phone)

---

## 📤 Share with Your Client

### Give them:

1. **Website URL**: `https://your-project.vercel.app`
2. **Admin Panel**: `https://your-studio.sanity.studio`
3. **Instructions**: "Login with your Sanity account to manage products"

### Invite them to Sanity:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project → Settings → Members
3. Click "Invite members"
4. Enter their email → Choose "Editor" role
5. They'll receive invitation email

---

## 🎨 Customize Later (Optional)

### Colors
Edit `/app/tailwind.config.js` to change color palette

### Content
- Edit testimonials in `/app/app/page.js`
- Update About page content in `/app/app/about/page.js`

### Google Maps
- Get embed code from Google Maps
- Replace iframe src in `/app/app/contact/page.js`

---

## 🆘 Quick Troubleshooting

### "Products not showing"
→ Make sure products are **Published** in Sanity (not draft)
→ Check Sanity Project ID is correct in `.env.local`

### "Contact form not working"
→ Verify Web3Forms key in environment variables
→ Check spam folder for emails

### "Images not loading"
→ Ensure images are uploaded and products are published in Sanity
→ Clear browser cache

### "Build failed on Vercel"
→ Check all environment variables are added
→ Make sure all values are correct (no typos)

---

## 📚 Full Documentation

For detailed guides, see:
- `README.md` - Complete project overview
- `DEPLOYMENT_GUIDE.md` - Comprehensive deployment steps
- `SANITY_SETUP_GUIDE.md` - Detailed Sanity configuration

---

## 🎊 You Did It!

Your professional flower shop website is now live!

**It has:**
- ✨ Beautiful, modern design
- 📱 Mobile responsive
- 🔧 Easy-to-use admin panel
- 💰 100% FREE hosting
- 🚀 Fast and SEO-friendly
- 📧 Contact form
- 💬 WhatsApp integration

**Next steps:**
1. Add more products
2. Share with customers
3. Get custom domain (optional)
4. Set up Google Analytics (optional)

---

**Need help?** Check the troubleshooting section or full guides!

**Enjoy your new website! 🌸🎉**
