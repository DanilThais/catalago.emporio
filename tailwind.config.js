/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        // Nova paleta de cores principal
        cream: {
          DEFAULT: '#f2deaf',
          light: '#f5e5c4',
          dark: '#efd49a',
        },
        charcoal: {
          DEFAULT: '#373737',
          light: '#4a4a4a',
          dark: '#242424',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFED4E',
          dark: '#E6C200',
        },
        // Mantendo algumas cores de apoio
        white: '#ffffff',
        black: '#000000',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'cream': '0 4px 20px rgba(242, 218, 175, 0.25)',
        'gold': '0 4px 20px rgba(255, 215, 0, 0.15)',
      },
    },
  },
  plugins: [],
};