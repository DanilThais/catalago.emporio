/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#E91E63',
          light: '#F06292',
          dark: '#C2185B',
        },
        'deep-brown': {
          DEFAULT: '#3E2723',
          light: '#5D4037',
          dark: '#2E1A17',
        },
        'brown': '#8B4513', // Cor marrom personalizada
        'gold': '#FFD700',  // Cor ouro personalizada
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'rose': '0 4px 20px rgba(233, 30, 99, 0.15)',
      },
    },
  },
  plugins: [],
};