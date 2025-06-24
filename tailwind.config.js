/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'golden': {
          DEFAULT: '#D4AF37',
          light: '#F5E6A8',
          dark: '#B8860B',
          cream: '#F7F3E9',
        },
        'brown': {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
          darker: '#3E2723',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'golden': '0 4px 20px rgba(212, 175, 55, 0.15)',
      },
    },
  },
  plugins: [],
};