import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Prefer env var, but fall back to the known project ID for this starter
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qwsy32e7';

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) {
    return { url: () => '' };
  }
  return builder.image(source);
}
