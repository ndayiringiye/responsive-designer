/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "thin":"260px",
        "iphone": "400px",
        "tablet": "640px", 
        "sm": "480px", 
        "md": "768px", 
      },
    },
  },
  plugins: [],
}
