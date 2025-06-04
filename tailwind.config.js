/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A951',
          light: '#D4BC76',
          dark: '#B69842',
        },
        brown: {
          DEFAULT: '#3C2F2F',
          light: '#4D3D3D',
          dark: '#2B2222',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px rgba(200, 169, 81, 0.15)',
      },
    },
  },
  plugins: [],
};