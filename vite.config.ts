import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Reduce chunk size for better caching and loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['lucide-react'],
          'meta-vendor': ['react-helmet-async']
        }
      }
    },
    // Optimize for performance
    target: 'esnext',
    minify: 'esbuild',
    // Reduce CSS bundle size
    cssMinify: true,
  },
  // Enable CSS code splitting
  css: {
    codesSplit: true
  },
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `import('${filename}')` }
      }
      return { relative: true }
    }
  }
});
