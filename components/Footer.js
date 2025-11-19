'use client'

import Link from 'next/link';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="font-playfair text-2xl font-bold">
                {process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Blooms & Gifts'}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {process.env.NEXT_PUBLIC_BUSINESS_TAGLINE || 'Handcrafted Bouquets & Personalized Gifts'}
            </p>
            <div className="flex space-x-4">
              {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {process.env.NEXT_PUBLIC_FACEBOOK_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE?.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                  {process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1 (234) 567-8900'}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`} className="text-gray-300 hover:text-white transition-colors">
                  {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@bloomsandgifts.com'}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '123 Flower Street, Garden City'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} {process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Blooms & Gifts'}. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with <Heart className="inline w-4 h-4 text-rose-400 fill-rose-400" /> for beautiful moments</p>
        </div>
      </div>
    </footer>
  );
}
