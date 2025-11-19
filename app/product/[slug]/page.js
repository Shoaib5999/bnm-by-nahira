'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Share2, Heart, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity.client';
import toast from 'react-hot-toast';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const productData = await getProductBySlug(params.slug);
        setProduct(productData);
        
        if (productData && productData.category) {
          const related = await getRelatedProducts(
            productData.category._id,
            productData._id
          );
          setRelatedProducts(related || []);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.slug]);

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in: ${product?.title}`;
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.title,
          text: product?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-96 lg:h-[600px] bg-gray-100 rounded-2xl animate-pulse" />
            <div className="space-y-6">
              <div className="h-12 bg-gray-100 rounded animate-pulse" />
              <div className="h-8 bg-gray-100 rounded animate-pulse w-1/3" />
              <div className="h-32 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/collections">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">
              Browse Collections
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = product.gallery && product.gallery.length > 0 
    ? [product.mainImage, ...product.gallery.filter(img => img._type === 'image')]
    : [product.mainImage];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/collections" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
          <ChevronLeft className="w-5 h-5" />
          <span className="ml-1">Back to Collections</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden mb-4 bg-gray-100"
            >
              {allImages[selectedImage] && (
                <Image
                  src={urlFor(allImages[selectedImage]).width(800).height(800).url()}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-rose-500' : ''
                    }`}
                  >
                    <Image
                      src={urlFor(image).width(200).height(200).url()}
                      alt={`${product.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.category && (
                <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {product.category.title}
                </span>
              )}

              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-rose-600">${product.price}</span>
                {product.inStock ? (
                  <span className="text-green-600 text-sm font-medium">In Stock</span>
                ) : (
                  <span className="text-gray-500 text-sm font-medium">Out of Stock</span>
                )}
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  onClick={handleWhatsAppInquiry}
                  size="lg"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-full"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Inquire on WhatsApp
                </Button>
                <Button
                  onClick={handleShare}
                  size="lg"
                  variant="outline"
                  className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 py-6 rounded-full"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border-0">
                <h3 className="font-semibold text-gray-900 mb-2">Need something special?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We offer custom designs and personalization for all our products. Contact us to discuss your vision!
                </p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Contact for Custom Orders
                  </Button>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct._id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
