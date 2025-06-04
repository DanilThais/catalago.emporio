/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E0C158',
          dark: '#BF9B2F',
        },
        brown: {
          DEFAULT: '#2C1810',
          light: '#3D251C',
          dark: '#1B0F0A',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.15)',
      },
    },
  },
  plugins: [],
};