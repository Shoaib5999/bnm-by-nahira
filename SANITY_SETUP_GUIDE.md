# Sanity.io Setup Guide for Blooms & Gifts

## Step-by-Step Instructions

### 1. Create a Sanity Account and Project

1. Visit [https://www.sanity.io](https://www.sanity.io)
2. Click "Get Started" or "Sign Up"
3. Sign up with Google, GitHub, or email
4. Once logged in, click "Create Project" or "New Project"
5. Fill in project details:
   - **Project Name**: `Blooms & Gifts` (or your business name)
   - **Template**: Select "Clean project with no predefined schemas"
   - **Dataset**: `production` (default)
6. Click "Create Project"
7. **IMPORTANT**: Copy your **Project ID** - you'll need this!

### 2. Install Sanity CLI

Open your terminal and run:

```bash
npm install -g @sanity/cli
```

Or with yarn:

```bash
yarn global add @sanity/cli
```

Verify installation:

```bash
sanity --version
```

### 3. Authenticate Sanity CLI

```bash
sanity login
```

This will open a browser window. Authorize the CLI with your Sanity account.

### 4. Update Configuration Files

Replace `YOUR_PROJECT_ID` with your actual Sanity Project ID in these files:

**File 1: `/app/sanity/sanity.config.js`**
```javascript
projectId: 'qwsy32e7', // Replace with your actual project ID
```

**File 2: `/app/sanity/sanity.cli.js`**
```javascript
projectId: 'qwsy32e7', // Replace with your actual project ID
```

**File 3: `/app/.env.local`**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=qwsy32e7
```

### 5. Initialize and Deploy Sanity Studio

```bash
cd /app/sanity

# Install Sanity dependencies
npm install sanity @sanity/vision

# Or with yarn
yarn add sanity @sanity/vision
```

### 6. Start Sanity Studio Locally

```bash
cd /app/sanity
sanity dev
```

This will start Sanity Studio at: `http://localhost:3333`

Open it in your browser and you should see your admin panel!

### 7. Add Sample Data

#### Create Categories:

1. In Sanity Studio, click "Category" in the sidebar
2. Click "Create new document" (+ icon)
3. Add these categories:

**Category 1: Bouquets**
- Title: `Bouquets`
- Click "Generate" next to Slug (it will create `bouquets`)
- Upload a category image (optional)
- Description: `Beautiful handcrafted flower bouquets for every occasion`
- Click "Publish"

**Category 2: Custom Cakes**
- Title: `Custom Cakes`
- Slug: `custom-cakes` (auto-generated)
- Description: `Delicious custom-designed cakes`
- Click "Publish"

**Category 3: Gift Hampers**
- Title: `Gift Hampers`
- Slug: `gift-hampers`
- Description: `Thoughtfully curated gift hampers`
- Click "Publish"

**Category 4: Personalized Gifts**
- Title: `Personalized Gifts`
- Slug: `personalized-gifts`
- Description: `Unique personalized gifts`
- Click "Publish"

#### Create Products:

1. Click "Product" in the sidebar
2. Click "Create new document"
3. Add sample products:

**Product 1: Rose Bouquet**
- Title: `Premium Rose Bouquet`
- Slug: `premium-rose-bouquet` (auto-generated)
- Main Image: Upload an image
- Gallery: Add 2-3 more images (optional)
- Price: `49.99`
- Category: Select "Bouquets"
- Description: `Elegant bouquet of fresh red roses, perfect for any romantic occasion.`
- Featured: Check this box (to show on homepage)
- In Stock: Check this box
- Click "Publish"

**Product 2: Birthday Cake**
- Title: `Custom Birthday Cake`
- Slug: `custom-birthday-cake`
- Main Image: Upload image
- Price: `75.00`
- Category: Select "Custom Cakes"
- Description: `Delicious custom-designed birthday cake with your choice of flavors and decorations.`
- Featured: Check this box
- In Stock: Checked
- Click "Publish"

Repeat for more products!

### 8. Deploy Sanity Studio (Make it Live)

```bash
cd /app/sanity
sanity deploy
```

You'll be asked to choose a hostname:

```
Studio hostname (<value>.sanity.studio): blooms-and-gifts
```

Your admin panel will be available at:
**https://blooms-and-gifts.sanity.studio**

### 9. Add Team Members (Optional)

To give your client access:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "Settings" > "Members"
4. Click "Invite members"
5. Enter their email
6. Choose role: "Editor" or "Administrator"
7. They'll receive an email invitation

### 10. Sanity Schema Explanation

#### Product Schema (`/app/sanity/schemas/product.js`):

- **title**: Product name (required)
- **slug**: URL-friendly identifier (auto-generated from title)
- **mainImage**: Main product photo (required)
- **gallery**: Array of additional images/videos (optional)
- **price**: Product price in dollars (required)
- **category**: Link to a category (required)
- **description**: Product description (required)
- **featured**: Boolean - show on homepage (default: false)
- **inStock**: Boolean - product availability (default: true)

#### Category Schema (`/app/sanity/schemas/category.js`):

- **title**: Category name (required)
- **slug**: URL-friendly identifier (auto-generated)
- **image**: Category image (optional)
- **description**: Category description (optional)

### 11. Verify Everything Works

1. Check that your Next.js site is running: `http://localhost:3000`
2. You should see:
   - Categories on the homepage
   - Featured products (if you marked any as featured)
   - Products on the Collections page
3. Click on a product to see its detail page
4. Test category filtering on Collections page

## Troubleshooting

### "Invalid project ID"
- Make sure you replaced `YOUR_PROJECT_ID` in all config files
- Check that the project ID matches exactly (no spaces)

### "No products showing"
- Make sure you published your products in Sanity Studio (not just saved as draft)
- Check that products have all required fields filled in
- Restart your Next.js dev server: `yarn dev`

### "Images not loading"
- Verify that you uploaded images in Sanity Studio
- Check that your Sanity project ID is correct
- Images must be published (not in draft state)

### "Sanity Studio won't start"
- Make sure you're in the `/app/sanity` directory
- Run `npm install` or `yarn install` in the sanity folder
- Check that you have the latest Sanity CLI: `npm install -g @sanity/cli`

## Important URLs

- **Sanity Dashboard**: https://www.sanity.io/manage
- **Your Sanity Studio** (local): http://localhost:3333
- **Your Sanity Studio** (deployed): https://your-hostname.sanity.studio
- **Next.js Site** (local): http://localhost:3000
- **Sanity Documentation**: https://www.sanity.io/docs

## Free Tier Limits

- **API Requests**: 100,000 per month (more than enough)
- **Bandwidth**: 10 GB per month
- **Users**: 3 admin users included
- **Datasets**: 2 datasets (production + development)
- **All features included** - no restrictions!

## Next Steps

1. ✅ Set up Sanity project
2. ✅ Add categories and products
3. ✅ Deploy Sanity Studio
4. ➡️ Set up Web3Forms for contact form
5. ➡️ Update business information in `.env.local`
6. ➡️ Deploy your Next.js site to Vercel

---

**Need Help?**
- Sanity Support: https://www.sanity.io/help
- Community Slack: https://slack.sanity.io
