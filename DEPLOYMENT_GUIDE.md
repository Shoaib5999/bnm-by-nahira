# 🚀 Complete Deployment Guide

## Overview

This guide will help you deploy your flower shop website completely FREE using:
- **Frontend**: Vercel (free hosting)
- **CMS**: Sanity.io (free admin panel)
- **Contact Form**: Web3Forms (free email service)

Total cost: **$0/month** ✨

---

## Part 1: Sanity.io Setup (CMS & Admin Panel)

### Step 1: Create Sanity Account

1. Go to [https://www.sanity.io](https://www.sanity.io)
2. Click "Get Started" and sign up (Google/GitHub/Email)
3. Verify your email if required

### Step 2: Create New Project

1. Click "Create Project" button
2. Fill in:
   - **Name**: `blooms-and-gifts` (or your business name)
   - **Template**: Choose "Clean project with no predefined schemas"
3. Click "Create Project"
4. **IMPORTANT**: Copy your **Project ID** (looks like: `abc123xyz`)

### Step 3: Install Sanity CLI

Open terminal on your computer:

```bash
npm install -g @sanity/cli
```

Login to Sanity:

```bash
sanity login
```

### Step 4: Configure Your Project

Update these files with your Sanity Project ID:

**1. Update `/app/.env.local`:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id-here
```

**2. Update `/app/sanity/sanity.config.js`:**
Replace `YOUR_PROJECT_ID` with your actual project ID

**3. Update `/app/sanity/sanity.cli.js`:**
Replace `YOUR_PROJECT_ID` with your actual project ID

### Step 5: Install Sanity Studio Dependencies

```bash
cd /app/sanity
npm install sanity @sanity/vision
```

### Step 6: Deploy Sanity Studio

```bash
cd /app/sanity
sanity deploy
```

Choose a hostname (e.g., `blooms-and-gifts`). Your admin panel will be at:
**https://blooms-and-gifts.sanity.studio**

### Step 7: Add Products & Categories

1. Open your Sanity Studio URL
2. Login with your Sanity account

**Add Categories First:**
- Click "Category" → "+ Create"
- Add: Bouquets, Custom Cakes, Gift Hampers, Personalized Gifts
- For each: add title, click "Generate" for slug, optionally add image
- Click "Publish"

**Add Products:**
- Click "Product" → "+ Create"
- Fill in:
  - Title (e.g., "Premium Rose Bouquet")
  - Slug (auto-generated)
  - Main Image (upload photo)
  - Gallery (add more photos/videos - optional)
  - Price (e.g., 49.99)
  - Category (select one)
  - Description
  - Featured (check to show on homepage)
  - In Stock (checked by default)
- Click "Publish"

**Tip**: Add 6-10 products for a good looking website!

---

## Part 2: Web3Forms Setup (Contact Form)

### Step 1: Get Free API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address
3. Click "Get Access Key"
4. Check your email and copy the Access Key

### Step 2: Add to Environment

Update `/app/.env.local`:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

---

## Part 3: Configure Business Information

Update `/app/.env.local` with your actual business details:

```env
# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Your Business Name
NEXT_PUBLIC_BUSINESS_TAGLINE=Your Tagline Here
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_BUSINESS_EMAIL=youremail@domain.com
NEXT_PUBLIC_BUSINESS_PHONE=+1 (234) 567-8900
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Your Street, Your City
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourusername
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
```

---

## Part 4: Deploy to Vercel (Free Hosting)

### Step 1: Push to GitHub

If not already done:

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Flower shop website"
```

Create a new repository on [GitHub.com](https://github.com/new), then:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/login (use GitHub account)
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Add Environment Variables

In Vercel dashboard, add ALL variables from your `.env.local`:

Click "Environment Variables" and add each one:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = your-web3forms-key
NEXT_PUBLIC_BUSINESS_NAME = Your Business Name
NEXT_PUBLIC_BUSINESS_TAGLINE = Your Tagline
NEXT_PUBLIC_WHATSAPP_NUMBER = +1234567890
NEXT_PUBLIC_BUSINESS_EMAIL = your@email.com
NEXT_PUBLIC_BUSINESS_PHONE = +1 234 567 8900
NEXT_PUBLIC_BUSINESS_ADDRESS = Your Address
NEXT_PUBLIC_INSTAGRAM_URL = https://instagram.com/yourhandle
NEXT_PUBLIC_FACEBOOK_URL = https://facebook.com/yourpage
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://your-project.vercel.app`

---

## Part 5: Custom Domain (Optional)

### Free Vercel Domain

You get: `https://your-project.vercel.app` for free!

### Custom Domain Setup

If you own a domain (e.g., `bloomsandgifts.com`):

1. In Vercel dashboard → Settings → Domains
2. Enter your domain name
3. Follow DNS configuration instructions
4. Add the provided DNS records to your domain provider
5. Wait for verification (can take 24-48 hours)

---

## Part 6: Post-Deployment Checklist

### ✅ Verify Everything Works

1. **Homepage**
   - [ ] Hero section displays correctly
   - [ ] Featured products show up (if you marked any as featured)
   - [ ] Categories display
   - [ ] All buttons work

2. **Collections Page**
   - [ ] Products display in grid
   - [ ] Category filtering works
   - [ ] Product cards link to detail pages

3. **Product Detail Pages**
   - [ ] Images display correctly
   - [ ] Gallery works (if multiple images)
   - [ ] WhatsApp button opens with pre-filled message
   - [ ] Related products show

4. **Contact Page**
   - [ ] Form submits successfully
   - [ ] You receive email notification
   - [ ] WhatsApp button works
   - [ ] Google Maps displays (update coordinates if needed)

5. **About Page**
   - [ ] Content displays correctly
   - [ ] All sections render

6. **Navigation**
   - [ ] All menu links work
   - [ ] Mobile menu works on phone
   - [ ] Logo links to homepage

### 🔧 Configure Google Maps

Update the Google Maps embed in `/app/app/contact/page.js`:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the existing maps URL in the contact page

---

## Part 7: Give Access to Your Client

### Sanity Studio Access

1. Go to [https://sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "Settings" → "Members"
4. Click "Invite members"
5. Enter client's email
6. Choose role: **Editor** (can manage content) or **Administrator** (full access)
7. They'll receive an email invitation

### Share Admin Panel URL

Give your client this URL:
**https://your-studio-name.sanity.studio**

They can login and:
- Add/edit/delete products
- Upload images and videos
- Manage categories
- Change product availability
- Update prices

---

## 📱 Mobile Responsiveness

Your website is fully responsive! Test on:
- Phone (iOS/Android)
- Tablet
- Desktop
- Different browsers (Chrome, Safari, Firefox)

---

## 🔄 Making Updates

### Content Updates (Client)

**Products, Categories, Images** → Use Sanity Studio
- Changes appear instantly on the website
- No code changes needed

### Design/Feature Updates (Developer)

1. Make changes locally in `/app`
2. Test: `cd /app && yarn dev`
3. Commit changes: `git add . && git commit -m "Update XYZ"`
4. Push to GitHub: `git push`
5. Vercel auto-deploys (usually takes 2-3 minutes)

---

## 🆘 Troubleshooting

### Products Not Showing

**Problem**: No products on homepage/collections
**Solution**:
- Make sure products are **Published** in Sanity (not draft)
- Check that featured products have "Featured" checkbox enabled
- Verify Sanity Project ID in `.env.local` is correct
- Redeploy on Vercel

### Contact Form Not Working

**Problem**: Form submits but no email received
**Solution**:
- Check Web3Forms access key in environment variables
- Verify email used to get Web3Forms key
- Check spam folder
- Test on deployed site (may not work on localhost)

### Images Not Loading

**Problem**: Products show but images are blank
**Solution**:
- Verify images are uploaded in Sanity Studio
- Check products are published (not draft)
- Clear browser cache
- Check Sanity Project ID is correct

### WhatsApp Button Not Working

**Problem**: WhatsApp button doesn't open chat
**Solution**:
- Verify phone number format: `+1234567890` (no spaces, dashes)
- Include country code with `+`
- Test on mobile device (works best)

### Build Failed on Vercel

**Problem**: Deployment fails
**Solution**:
- Check build logs for errors
- Verify all environment variables are added
- Make sure `.env.local` is not pushed to GitHub
- Check Node.js version compatibility

---

## 📊 Analytics & SEO (Optional Free Upgrades)

### Google Analytics (Free)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `/app/app/layout.js`
3. Redeploy

### Google Search Console (Free)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your Vercel domain
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

---

## 💰 Cost Breakdown

| Service | Plan | Cost | Limits |
|---------|------|------|--------|
| Vercel Hosting | Free | $0 | 100GB bandwidth |
| Sanity.io CMS | Free | $0 | 100k API requests/month |
| Web3Forms | Free | $0 | 250 submissions/month |
| **Total** | | **$0/month** | Perfect for small business! |

---

## 🎉 You're Done!

Your beautiful flower shop website is now live! 🌸

**URLs to bookmark:**
- 🌐 Website: `https://your-project.vercel.app`
- 🔧 Admin Panel: `https://your-studio.sanity.studio`
- 📊 Vercel Dashboard: `https://vercel.com/dashboard`
- 📝 Sanity Dashboard: `https://sanity.io/manage`

**Share with your client:**
1. Website URL
2. Admin panel URL and login credentials
3. Brief tutorial on adding products (very intuitive!)

---

## 📞 Support Resources

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Sanity**: [sanity.io/help](https://www.sanity.io/help)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Built with ❤️ for small businesses**
