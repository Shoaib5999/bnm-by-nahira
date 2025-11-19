import { client } from './sanity.client';

// Get all categories
export async function getCategories() {
  if (!client) return [];
  try {
    const query = `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      image
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Get all products
export async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    price,
    category->{
      _id,
      title,
      slug
    },
    description,
    featured,
    inStock
  }`;
  return await client.fetch(query);
}

// Get featured products
export async function getFeaturedProducts() {
  const query = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    mainImage,
    price,
    category->{
      _id,
      title,
      slug
    },
    description,
    featured,
    inStock
  }`;
  return await client.fetch(query);
}

// Get products by category
export async function getProductsByCategory(categorySlug) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    price,
    category->{
      _id,
      title,
      slug
    },
    description,
    featured,
    inStock
  }`;
  return await client.fetch(query, { categorySlug });
}

// Get single product by slug
export async function getProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    gallery,
    price,
    category->{
      _id,
      title,
      slug
    },
    description,
    featured,
    inStock
  }`;
  return await client.fetch(query, { slug });
}

// Get related products (same category, exclude current product)
export async function getRelatedProducts(categoryId, currentProductId) {
  const query = `*[_type == "product" && category._ref == $categoryId && _id != $currentProductId] [0...4] {
    _id,
    title,
    slug,
    mainImage,
    price,
    category->{
      _id,
      title,
      slug
    }
  }`;
  return await client.fetch(query, { categoryId, currentProductId });
}
