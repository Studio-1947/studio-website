import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split large vendor libraries into separate cacheable chunks
        manualChunks: {
          // React core — changes least often, best for caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation & scroll libraries
          'vendor-gsap': ['gsap'],
          // Analytics
          'vendor-analytics': ['@vercel/analytics'],
        },
      },
    },
  },
});
