import { defineConfig } from 'vite';

export default defineConfig({
  base: '/catalago-emporio/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  }
});