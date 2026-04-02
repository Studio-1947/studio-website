import { createClient } from '@sanity/client'

// Initialize Sanity client for your React app
export const sanityClient = createClient({
  projectId: (import.meta.env.VITE_SANITY_PROJECT_ID || 'wn1gjhox').trim(),
  dataset: (import.meta.env.VITE_SANITY_DATASET || 'production').trim(),
  apiVersion: '2024-01-01',
  // Keep fresh reads so newly published posts appear immediately on the site.
  useCdn: false,
})
