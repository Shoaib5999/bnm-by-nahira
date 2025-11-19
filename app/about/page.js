'use client'

import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Every product is carefully crafted by our skilled artisans with attention to detail and love.'
    },
    {
      icon: Sparkles,
      title: 'Fresh & Quality',
      description: 'We source only the freshest flowers and highest quality materials for all our creations.'
    },
    {
      icon: Award,
      title: 'Custom Designs',
      description: 'We specialize in creating personalized gifts that perfectly match your vision and occasion.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure your special moments are never missed with our reliable delivery service.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-rose-100 via-pink-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At {process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Blooms & Gifts'}, we believe every moment deserves to be celebrated with beauty and thoughtfulness. 
              Founded with a passion for creating memorable experiences, we specialize in handcrafted flower bouquets, 
              custom-made cakes, and personalized gifts that speak from the heart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We transform ordinary moments into extraordinary memories through our carefully curated selection of products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center hover:shadow-xl transition-shadow rounded-2xl border-0 bg-white h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-2xl border-0 bg-white">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">🌸 Flower Bouquets</h3>
              <p className="text-gray-600 mb-4">
                From classic roses to exotic tropical arrangements, our bouquets are designed to convey your emotions perfectly. 
                Each arrangement is created with fresh, premium flowers sourced from the best growers.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl border-0 bg-white">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">🎂 Custom Cakes</h3>
              <p className="text-gray-600 mb-4">
                Celebrate life's sweetest moments with our custom-designed cakes. From birthdays to weddings, 
                we create delicious masterpieces that are as beautiful as they are tasty.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl border-0 bg-white">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">🎁 Gift Hampers</h3>
              <p className="text-gray-600 mb-4">
                Thoughtfully curated gift hampers filled with premium goodies, perfect for any occasion. 
                We customize each hamper to match your recipient's preferences.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl border-0 bg-white">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">✨ Personalized Gifts</h3>
              <p className="text-gray-600 mb-4">
                Add a personal touch with our range of customizable gifts. From engraved items to photo gifts, 
                we help you create something truly unique and memorable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's work together to make your vision come to life. Browse our collections or get in touch for custom orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full">
                Browse Collections
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
