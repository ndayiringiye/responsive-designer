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
        "iphone": "400px", // Smallest larger device
        "tablet": "640px", 
        "sm": "480px", // Standard small device breakpoint
        "md": "768px", // Standard medium device
      },
    },
  },
  plugins: [],
}
