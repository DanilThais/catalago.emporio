import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Determina o base path baseado no ambiente ou comando
  const getBasePath = () => {
    if (process.env.DEPLOY_TARGET === 'github') return '/catalago.emporio/';
    if (process.env.DEPLOY_TARGET === 'netlify') return './';
    if (command === 'build' && process.argv.includes('--base=/catalago.emporio/')) return '/catalago.emporio/';
    if (command === 'build' && process.argv.includes('--base=./')) return './';
    return './'; // Default para desenvolvimento e Netlify
  };

  const basePath = getBasePath();
  
  return {
    plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'pwa-64x64.png', 'pwa-192x192.png'],
      manifest: {
        name: 'Empório Dubai Perfumaria - Catálogos',
        short_name: 'Empório Dubai',
        description: 'Catálogos digitais da Empório Dubai Perfumaria',
        theme_color: '#E91E63',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: basePath,
        scope: basePath,
        icons: [
          {
            src: basePath === './' ? 'pwa-64x64.png' : '/catalago.emporio/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: basePath === './' ? 'pwa-192x192.png' : '/catalago.emporio/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: basePath === './' ? 'pwa-192x192.png' : '/catalago.emporio/pwa-192x192.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: basePath === './' ? 'pwa-192x192.png' : '/catalago.emporio/pwa-192x192.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: basePath,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
}
)