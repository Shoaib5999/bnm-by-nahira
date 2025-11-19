import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Check if Sanity is properly configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const isConfigured = projectId && 
                     projectId !== 'your_project_id' && 
                     projectId !== 'not-configured-yet' &&
                     /^[a-z0-9-]+$/.test(projectId);

export const client = isConfigured ? createClient({
  projectId: projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
}) : null;

const builder = isConfigured && client ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (!builder || !source) {
    return { url: () => '' };
  }
  return builder.image(source);
}
