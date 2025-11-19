# ✅ Deployment Checklist

Use this checklist to ensure everything is configured correctly before going live.

---

## 📋 Pre-Deployment Checklist

### 1. Sanity.io Setup

- [ ] Created Sanity account at [sanity.io](https://www.sanity.io)
- [ ] Created new Sanity project
- [ ] Copied Project ID
- [ ] Updated `.env.local` with Project ID
- [ ] Updated `sanity/sanity.config.js` with Project ID
- [ ] Updated `sanity/sanity.cli.js` with Project ID
- [ ] Installed Sanity CLI: `npm install -g @sanity/cli`
- [ ] Logged in: `sanity login`
- [ ] Installed dependencies: `cd /app/sanity && npm install`
- [ ] Deployed Sanity Studio: `sanity deploy`
- [ ] Can access Studio at: `https://your-hostname.sanity.studio`

### 2. Content Setup

- [ ] Created at least 3 categories in Sanity Studio
- [ ] Created at least 5 products in Sanity Studio
- [ ] Uploaded product images
- [ ] Marked 2-3 products as "Featured"
- [ ] All products have prices
- [ ] All products are marked "In Stock"
- [ ] All content is Published (not draft)

### 3. Web3Forms Configuration

- [ ] Got access key from [web3forms.com](https://web3forms.com)
- [ ] Added key to `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- [ ] Tested contact form submission
- [ ] Received test email

### 4. Business Information

Updated all fields in `.env.local`:

- [ ] `NEXT_PUBLIC_BUSINESS_NAME`
- [ ] `NEXT_PUBLIC_BUSINESS_TAGLINE`
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` (format: +1234567890)
- [ ] `NEXT_PUBLIC_BUSINESS_EMAIL`
- [ ] `NEXT_PUBLIC_BUSINESS_PHONE`
- [ ] `NEXT_PUBLIC_BUSINESS_ADDRESS`
- [ ] `NEXT_PUBLIC_INSTAGRAM_URL` (optional)
- [ ] `NEXT_PUBLIC_FACEBOOK_URL` (optional)

### 5. GitHub Setup

- [ ] Created GitHub repository
- [ ] Initialized git: `git init`
- [ ] Added all files: `git add .`
- [ ] Made initial commit: `git commit -m "Initial commit"`
- [ ] Connected to GitHub: `git remote add origin [URL]`
- [ ] Pushed to GitHub: `git push -u origin main`
- [ ] Verified repository is public or accessible to Vercel

### 6. Vercel Deployment

- [ ] Created Vercel account at [vercel.com](https://vercel.com)
- [ ] Connected GitHub account
- [ ] Imported project from GitHub
- [ ] Framework detected as Next.js
- [ ] Added ALL environment variables from `.env.local`
- [ ] Started deployment
- [ ] Deployment succeeded
- [ ] Got deployment URL: `https://your-project.vercel.app`

---

## 🧪 Post-Deployment Testing

### Homepage Testing

Visit: `https://your-project.vercel.app`

- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Business name appears in header
- [ ] Featured products display (if any)
- [ ] Categories display (if any)
- [ ] Testimonials section shows
- [ ] Footer displays with contact info
- [ ] All links work
- [ ] Mobile menu works on phone

### Collections Page Testing

Visit: `https://your-project.vercel.app/collections`

- [ ] Products display in grid
- [ ] Category filter sidebar works
- [ ] Can filter by category
- [ ] Product cards show images, titles, prices
- [ ] Clicking product card goes to detail page
- [ ] Works on mobile

### Product Detail Page Testing

Click any product:

- [ ] Product details display
- [ ] Main image shows
- [ ] Gallery thumbnails work (if multiple images)
- [ ] Price displays correctly
- [ ] Description shows
- [ ] Category badge displays
- [ ] WhatsApp button works
- [ ] Opens WhatsApp with pre-filled message
- [ ] Share button works
- [ ] Related products show (if any)

### About Page Testing

Visit: `https://your-project.vercel.app/about`

- [ ] Content displays correctly
- [ ] All sections render
- [ ] Links work

### Contact Page Testing

Visit: `https://your-project.vercel.app/contact`

- [ ] Contact form displays
- [ ] All fields work
- [ ] Form submits successfully
- [ ] Received email notification
- [ ] WhatsApp button works
- [ ] Google Maps displays
- [ ] Contact info cards show correct information

### Mobile Testing

Test on actual mobile device:

- [ ] Homepage responsive
- [ ] Navigation menu works
- [ ] Product cards display correctly
- [ ] Forms are usable
- [ ] WhatsApp buttons work
- [ ] Images load properly
- [ ] Text is readable
- [ ] Buttons are touch-friendly

### Cross-Browser Testing

- [ ] Chrome ✓
- [ ] Safari ✓
- [ ] Firefox ✓
- [ ] Edge ✓

---

## 🔧 Sanity Studio Access

### Admin Access

- [ ] Can login to Sanity Studio
- [ ] Can create new products
- [ ] Can upload images
- [ ] Can edit existing products
- [ ] Can delete products
- [ ] Can create categories
- [ ] Changes appear on website immediately

### Client Access

- [ ] Invited client to Sanity project
- [ ] Client received invitation email
- [ ] Client can login
- [ ] Client knows how to add products
- [ ] Provided basic tutorial/documentation

---

## 🎨 Customizations Done

### Design

- [ ] Color palette matches brand (or default looks good)
- [ ] Fonts are appropriate
- [ ] Images are high quality
- [ ] Layout is clean and professional

### Content

- [ ] Testimonials updated (or removed if not ready)
- [ ] About page content customized
- [ ] Contact information accurate
- [ ] Google Maps shows correct location

### Functionality

- [ ] WhatsApp number tested and works
- [ ] Contact form sends to correct email
- [ ] All external links open in new tab
- [ ] No broken links

---

## 📱 Social Media Integration

- [ ] Instagram link added (if applicable)
- [ ] Facebook link added (if applicable)
- [ ] Links verified and working
- [ ] Social icons display in footer

---

## 🔍 SEO & Performance

### SEO Basics

- [ ] Page titles are descriptive
- [ ] Meta descriptions added
- [ ] Images have alt text
- [ ] URLs are clean and readable
- [ ] Site is HTTPS (automatic with Vercel)

### Performance

- [ ] Images are optimized (Next.js does this automatically)
- [ ] Pages load quickly
- [ ] No console errors
- [ ] Lighthouse score is good (optional check)

---

## 🎯 Final Checks

### Security

- [ ] `.env.local` is NOT pushed to GitHub
- [ ] All API keys are in environment variables
- [ ] HTTPS is working (automatic with Vercel)

### Documentation

- [ ] Client has Sanity Studio URL
- [ ] Client has admin login credentials
- [ ] Client knows how to add products
- [ ] Client has support contact info

### Backup

- [ ] Code is on GitHub
- [ ] Environment variables documented
- [ ] Sanity project ID noted somewhere safe

---

## 🚀 Go Live!

Once ALL items above are checked:

### Final Steps

1. **Test everything one more time**
   - Browse entire site as a customer would
   - Try to break things
   - Test on mobile

2. **Announce Launch**
   - Share URL with client
   - Client can share with customers
   - Promote on social media

3. **Monitor**
   - Check contact form submissions
   - Monitor WhatsApp inquiries
   - Watch for any errors

---

## 📞 Post-Launch Support

### Client Training

- [ ] Showed client how to login to Sanity
- [ ] Demonstrated adding a product
- [ ] Showed how to edit products
- [ ] Explained how to upload images
- [ ] Showed how to mark products out of stock

### Documentation Provided

- [ ] Sanity Studio URL
- [ ] Login credentials
- [ ] Basic usage guide
- [ ] Your contact info for support

---

## 🎊 Success Indicators

Your launch is successful when:

- ✅ Website is live and accessible
- ✅ All pages work without errors
- ✅ Products display correctly
- ✅ Contact form receives submissions
- ✅ WhatsApp integration works
- ✅ Client can manage content independently
- ✅ Mobile experience is smooth
- ✅ Load times are fast
- ✅ Client is happy! 😊

---

## 📈 Next Steps (Optional)

After successful launch:

### Week 1
- [ ] Monitor analytics (if set up)
- [ ] Check for any error reports
- [ ] Ensure contact inquiries are being received

### Week 2-4
- [ ] Client adds more products
- [ ] Optimize product descriptions
- [ ] Add more categories if needed

### Month 2+
- [ ] Consider custom domain
- [ ] Set up Google Analytics
- [ ] Add Google Search Console
- [ ] Collect customer testimonials
- [ ] Consider blog section
- [ ] Plan seasonal collections

---

## 🆘 Troubleshooting Reference

### If products don't show:
1. Check Sanity Project ID in environment variables
2. Verify products are Published (not draft)
3. Redeploy on Vercel

### If contact form doesn't work:
1. Check Web3Forms key in environment variables
2. Verify email address
3. Check spam folder
4. Test on deployed site (not localhost)

### If images don't load:
1. Verify images uploaded in Sanity
2. Check products are published
3. Clear browser cache
4. Check Sanity Project ID

### If build fails on Vercel:
1. Check build logs for specific error
2. Verify all environment variables added
3. Check for typos in environment values
4. Ensure dependencies are in package.json

---

## ✨ You're Live!

Congratulations! Your beautiful flower shop website is now live and ready to serve customers! 🎉

**Share it with the world! 🌸**

---

**Need help?** Check the other documentation files:
- `README.md` - Full project overview
- `QUICK_START.md` - Quick setup guide
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps
- `SANITY_SETUP_GUIDE.md` - Sanity configuration
- `PROJECT_SUMMARY.md` - Technical overview
