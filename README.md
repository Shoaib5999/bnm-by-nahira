# Blooms & Gifts - Flower Shop Website

A beautiful, modern, mobile-responsive website for a flower bouquet and custom gifts business. Built with Next.js 14, Tailwind CSS, and Sanity.io CMS.

## 🌸 Features

- **Beautiful UI**: Modern design with soft pink, rose, emerald, and gold color palette
- **Headless CMS**: Sanity.io for easy product management
- **Admin Panel**: Professional Sanity Studio for managing products and categories
- **Responsive**: Fully mobile-responsive design
- **Fast**: Optimized with Next.js 14 App Router
- **SEO-Friendly**: Built-in Next.js SEO optimization
- **WhatsApp Integration**: Direct inquiry buttons for each product
- **Contact Form**: Free Web3Forms integration
- **Image Galleries**: Multiple images and videos per product
- **Category Filtering**: Easy product browsing by category
- **Animations**: Smooth Framer Motion animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18
- **Styling**: Tailwind CSS with custom color palette
- **CMS**: Sanity.io (Free tier)
- **Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Web3Forms
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Deployment**: Vercel (Free)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /app
yarn install
```

### 2. Set Up Sanity.io CMS

#### Create a Sanity Project:

1. Go to [sanity.io](https://www.sanity.io) and sign up/login
2. Click "Create Project"
3. Choose "Blank" template
4. Give it a name (e.g., "blooms-and-gifts")
5. Choose dataset name: `production`
6. Copy your Project ID

#### Install Sanity CLI globally:

```bash
npm install -g @sanity/cli
```

#### Initialize Sanity Studio:

```bash
cd /app/sanity
sanity init
```

- Choose "Use existing project"
- Select your project
- Use default dataset: `production`
- Output path: `./` (current directory)

#### Update Sanity Config:

Replace `YOUR_PROJECT_ID` in these files with your actual Sanity Project ID:
- `/app/sanity/sanity.config.js`
- `/app/sanity/sanity.cli.js`

### 3. Configure Environment Variables

Update `/app/.env.local` with your actual values:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Contact Form (Get free key from https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Blooms & Gifts
NEXT_PUBLIC_BUSINESS_TAGLINE=Handcrafted Bouquets & Personalized Gifts
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_BUSINESS_EMAIL=hello@bloomsandgifts.com
NEXT_PUBLIC_BUSINESS_PHONE=+1 (234) 567-8900
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Flower Street, Garden City, GC 12345
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/bloomsandgifts
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/bloomsandgifts
```

### 4. Start Sanity Studio (Admin Panel)

In a new terminal:

```bash
cd /app/sanity
sanity dev
```

This will start Sanity Studio at `http://localhost:3333`

### 5. Deploy Sanity Studio (Free)

```bash
cd /app/sanity
sanity deploy
```

Choose a hostname (e.g., `blooms-and-gifts`). Your admin panel will be available at:
`https://blooms-and-gifts.sanity.studio`

### 6. Add Sample Data

1. Open Sanity Studio (locally or deployed)
2. Create Categories:
   - Bouquets
   - Custom Cakes
   - Gift Hampers
   - Personalized Gifts
3. Create Products:
   - Add title, slug, images, price, category, description
   - Mark some as "Featured" to show on homepage

### 7. Start Next.js Development Server

```bash
cd /app
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Vercel (Free):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add all environment variables from `.env.local`
6. Click "Deploy"

Your site will be live at: `https://your-site.vercel.app`

## 📝 Get Web3Forms Key (Free)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email
3. Copy the Access Key
4. Add it to your `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

## 📱 Pages

- **Home** (`/`) - Hero, featured products, categories, testimonials
- **Collections** (`/collections`) - All products with category filtering
- **Product Detail** (`/product/[slug]`) - Product details, gallery, WhatsApp inquiry
- **About** (`/about`) - Business story and values
- **Contact** (`/contact`) - Contact form, WhatsApp, Google Maps

## 🎨 Customization

### Colors:
Edit `/app/tailwind.config.js` to change the color palette

### Fonts:
Edit `/app/app/layout.js` to change fonts

### Business Info:
Update `.env.local` with your business details

### Content:
Manage all products and categories through Sanity Studio

## 📚 Project Structure

```
/app
├── app/
│   ├── page.js              # Homepage
│   ├── layout.js            # Root layout
│   ├── globals.css          # Global styles
│   ├── about/page.js        # About page
│   ├── contact/page.js      # Contact page
│   ├── collections/page.js  # Products page
│   └── product/[slug]/page.js # Product detail
├── components/
│   ├── Navigation.js        # Navigation bar
│   ├── Footer.js            # Footer
│   ├── ProductCard.js       # Product card component
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── sanity.client.js     # Sanity client setup
│   └── sanity.queries.js    # Sanity data queries
├── sanity/
│   ├── schemas/
│   │   ├── product.js       # Product schema
│   │   ├── category.js      # Category schema
│   │   └── index.js         # Schema exports
│   ├── sanity.config.js     # Sanity Studio config
│   └── sanity.cli.js        # Sanity CLI config
├── .env.local               # Environment variables
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## ✅ 100% Free Services Used

- **Hosting**: Vercel (Free tier)
- **CMS**: Sanity.io (Free tier - 100k requests/month)
- **Contact Form**: Web3Forms (Free tier - 250 submissions/month)
- **Domain**: Vercel provides free .vercel.app domain

## 👥 Admin Access

1. Deploy Sanity Studio: `cd /app/sanity && sanity deploy`
2. Your admin panel: `https://your-studio-name.sanity.studio`
3. Share this URL with your client
4. They can manage products, upload images, edit content

## 📞 Support

For help with:
- **Sanity**: [sanity.io/help](https://www.sanity.io/help)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/support](https://vercel.com/support)

## 🚀 Going Live Checklist

- [ ] Set up Sanity project and get Project ID
- [ ] Update all environment variables
- [ ] Deploy Sanity Studio
- [ ] Add categories and products in Sanity Studio
- [ ] Get Web3Forms access key
- [ ] Update business information (name, phone, address, socials)
- [ ] Deploy to Vercel
- [ ] Test contact form
- [ ] Test WhatsApp integration
- [ ] Verify all pages work correctly
- [ ] Add Google Maps location
- [ ] Connect custom domain (optional)

---

Built with ❤️ using Next.js, Sanity.io, and Tailwind CSS
