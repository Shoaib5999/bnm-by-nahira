'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getCategories } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity.client';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const isWhatsappAvailable =
    process.env.NEXT_PUBLIC_WHATSAPP_AVAILABLE === 'true' &&
    !!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const isInstagramAvailable =
    process.env.NEXT_PUBLIC_INSTAGRAM_AVAILABLE === 'true' &&
    !!process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const [products, cats] = await Promise.all([
          getFeaturedProducts(),
          getCategories()
        ]);
        setFeaturedProducts(products || []);
        setCategories(cats || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const testimonials = [
    {
      name: 'Zuhaib Khan',
      text: 'Absolutely stunning bouquet! The flowers were fresh and the arrangement was breathtaking.',
      rating: 5
    },
    {
      name: 'Sana Jameel',
      text: 'The custom cake exceeded all expectations. Perfect for our anniversary celebration!',
      rating: 5
    },
    {
      name: 'Kaustub Singh',
      text: 'Beautiful personalized gift hamper. The attention to detail is incredible!',
      rating: 4.2
    }
  ];

  return (
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative w-full mt-5  md:h-[110vh] overflow-hidden bg-[#f5c9d9] h-[90vh]">
{/* Background Image */}
<div className="absolute inset-0 md:h-[70vh] md:top-[15%] h-[90vh] mt-5">
<Image
  src="https://res.cloudinary.com/dei1kplrb/image/upload/v1764773909/file_00000000e8f47206a2c452c18c4b1198_pltl29.png"
  alt="Bare Minimum by Nahira"
  fill
  priority
  className="
      /* DESKTOP */
    object-contain
    !scale-[1.5]
    lg:scale-1
    !left-8 lg:!top-5
     lg:object-contain
    lg:!left-10 
    lg:!h-full lg:!w-full lg:text-inherit
  "
/>

{/* <div className="absolute inset-0 bg-pink-200/20" /> */}
</div>
{/* <div className="absolute inset-x-0 top-[100%] md:top-[100%] bottom-0 lg:top-40 z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/collections">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  View Collections
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-6 text-lg rounded-full">
                  Get in Touch
                </Button>
              </Link>
            </div> */}


{/* Content */}
{/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
<h1 className="text-4xl md:text-6xl font-bold tracking-wide text-gray-800 drop-shadow-lg">
Bare Minimum
</h1>
<p className="mt-2 text-lg md:text-2xl text-gray-700 font-light">
by Nahira
</p>
<p className="mt-6 max-w-2xl text-gray-700 text-sm md:text-lg">
You buy for love, we make with love.
</p>
<p className="text-gray-700 text-sm md:text-lg mt-1">We provide everything handmade!</p>
</div> */}
</section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover our handpicked collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
              ))
            ) : categories.length > 0 ? (
              categories.map((category, index) => (
                <motion.div
                  key={category._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/collections?category=${category.slug.current}`}>
                    <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 rounded-2xl border-0">
                      <div className="relative h-64 overflow-hidden">
                        {category.image ? (
                          <Image
                            src={urlFor(category.image).width(400).height(400).url()}
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-300" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-playfair text-2xl font-bold text-white">{category.title}</h3>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>No categories available yet. Please set up your Sanity CMS.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Our most loved creations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-96 bg-white rounded-2xl animate-pulse" />
              ))
            ) : featuredProducts.length > 0 ? (
              featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>No products available yet. Please add products in Sanity Studio.</p>
              </div>
            )}
          </div>

          {featuredProducts.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/collections">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Love from our happy customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow rounded-2xl border-0 bg-white">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Make Someone's Day Special</h2>
          <p className="text-xl mb-8 opacity-90">Order now and get your custom gift delivered with love</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Shop Now
              </Button>
            </Link>
            {isWhatsappAvailable && (
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-2 border-white text--rose-600 bg-white/10 px-8 py-6 text-lg rounded-full">
                  WhatsApp Us
                </Button>
              </a>
            )}
            {isInstagramAvailable && (
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-white/10 px-8 py-6 text-lg rounded-full"
                >
                  DM on Instagram
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
