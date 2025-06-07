/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#8B4513', // Cor marrom personalizada
        'gold': '#FFD700',  // Cor ouro personalizada
      },
    },
  },
  plugins: [],
}