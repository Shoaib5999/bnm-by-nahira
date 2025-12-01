'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { urlFor } from '@/lib/sanity.client';

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 rounded-2xl border-0">
      <Link href={`/product/${product.slug.current}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100">
          {product.mainImage ? (
            <Image
              src={urlFor(product.mainImage).width(600).height(600).url()}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Image</span>
            </div>
          )}
          {/* {!product.inStock && (
            <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </div>
          )} */}
          {product.featured && (
            <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100 rounded-full">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
        <div className="p-6">
          {product.category && (
            <span className="text-sm text-rose-600 font-medium">
              {product.category.title}
            </span>
          )}
          <h3 className="font-playfair text-xl font-bold text-gray-900 mt-2 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-rose-600">₹{product.price}</span>
            <span className="text-sm text-gray-500">Click to view</span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
