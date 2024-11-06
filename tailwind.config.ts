/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './componentsLibrary/**/*.{js,ts,jsx,tsx,mdx}', // Add this line if your components are in this directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'sfpro': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}