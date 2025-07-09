// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///home/project/node_modules/vite-plugin-pwa/dist/index.js";
import { loadEnv } from "file:///home/project/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const getBasePath = () => {
    if (process.env.DEPLOY_TARGET === "github") return "/catalago.emporio/";
    if (process.env.DEPLOY_TARGET === "netlify") return "./";
    if (command === "build" && process.argv.includes("--base=/catalago.emporio/")) return "/catalago.emporio/";
    if (command === "build" && process.argv.includes("--base=./")) return "./";
    return "./";
  };
  const basePath = getBasePath();
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "pwa-64x64.png", "pwa-192x192.png"],
        manifest: {
          name: "Emp\xF3rio Dubai Perfumaria - Cat\xE1logos",
          short_name: "Emp\xF3rio Dubai",
          description: "Cat\xE1logos digitais da Emp\xF3rio Dubai Perfumaria",
          theme_color: "#E91E63",
          background_color: "#ffffff",
          display: "standalone",
          start_url: basePath,
          scope: basePath,
          icons: [
            {
              src: basePath === "./" ? "pwa-64x64.png" : "/catalago.emporio/pwa-64x64.png",
              sizes: "64x64",
              type: "image/png"
            },
            {
              src: basePath === "./" ? "pwa-192x192.png" : "/catalago.emporio/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: basePath === "./" ? "pwa-192x192.png" : "/catalago.emporio/pwa-192x192.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any"
            },
            {
              src: basePath === "./" ? "pwa-192x192.png" : "/catalago.emporio/pwa-192x192.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable"
            }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
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
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
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
              handler: "CacheFirst",
              options: {
                cacheName: "images-cache",
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
      exclude: ["lucide-react"]
    },
    base: basePath,
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      minify: "terser",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
            motion: ["framer-motion"],
            icons: ["lucide-react"]
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKTtcbiAgXG4gIC8vIERldGVybWluYSBvIGJhc2UgcGF0aCBiYXNlYWRvIG5vIGFtYmllbnRlIG91IGNvbWFuZG9cbiAgY29uc3QgZ2V0QmFzZVBhdGggPSAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFUExPWV9UQVJHRVQgPT09ICdnaXRodWInKSByZXR1cm4gJy9jYXRhbGFnby5lbXBvcmlvLyc7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFUExPWV9UQVJHRVQgPT09ICduZXRsaWZ5JykgcmV0dXJuICcuLyc7XG4gICAgaWYgKGNvbW1hbmQgPT09ICdidWlsZCcgJiYgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWJhc2U9L2NhdGFsYWdvLmVtcG9yaW8vJykpIHJldHVybiAnL2NhdGFsYWdvLmVtcG9yaW8vJztcbiAgICBpZiAoY29tbWFuZCA9PT0gJ2J1aWxkJyAmJiBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tYmFzZT0uLycpKSByZXR1cm4gJy4vJztcbiAgICByZXR1cm4gJy4vJzsgLy8gRGVmYXVsdCBwYXJhIGRlc2Vudm9sdmltZW50byBlIE5ldGxpZnlcbiAgfTtcblxuICBjb25zdCBiYXNlUGF0aCA9IGdldEJhc2VQYXRoKCk7XG4gIFxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ3B3YS02NHg2NC5wbmcnLCAncHdhLTE5MngxOTIucG5nJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnRW1wXHUwMEYzcmlvIER1YmFpIFBlcmZ1bWFyaWEgLSBDYXRcdTAwRTFsb2dvcycsXG4gICAgICAgIHNob3J0X25hbWU6ICdFbXBcdTAwRjNyaW8gRHViYWknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhdFx1MDBFMWxvZ29zIGRpZ2l0YWlzIGRhIEVtcFx1MDBGM3JpbyBEdWJhaSBQZXJmdW1hcmlhJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjRTkxRTYzJyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIHN0YXJ0X3VybDogYmFzZVBhdGgsXG4gICAgICAgIHNjb3BlOiBiYXNlUGF0aCxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IGJhc2VQYXRoID09PSAnLi8nID8gJ3B3YS02NHg2NC5wbmcnIDogJy9jYXRhbGFnby5lbXBvcmlvL3B3YS02NHg2NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2NHg2NCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBiYXNlUGF0aCA9PT0gJy4vJyA/ICdwd2EtMTkyeDE5Mi5wbmcnIDogJy9jYXRhbGFnby5lbXBvcmlvL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogYmFzZVBhdGggPT09ICcuLycgPyAncHdhLTE5MngxOTIucG5nJyA6ICcvY2F0YWxhZ28uZW1wb3Jpby9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogYmFzZVBhdGggPT09ICcuLycgPyAncHdhLTE5MngxOTIucG5nJyA6ICcvY2F0YWxhZ28uZW1wb3Jpby9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLHdlYm1hbmlmZXN0fSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dzdGF0aWMtZm9udHMtY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvaW1hZ2VzXFwucGV4ZWxzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnaW1hZ2VzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDMwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBiYXNlOiBiYXNlUGF0aCxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIHJvdXRlcjogWydyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgbW90aW9uOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtcmVhY3QnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FB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
