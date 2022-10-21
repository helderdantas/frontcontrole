/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],

darkMode:'media',
theme: {
  extend: {},
},
plugins: [],
}
