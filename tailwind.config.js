/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        'small': '640px',    // Custom name for small screens
        'medium': '786px',   // Custom name for medium screens
        'large': '1024px',   // Custom name for large screens
        'xlarge': '1280px',  // Custom name for extra large screens
        '2xlarge': '1536px', // Custom name for 2x extra large screens
        'custom-1024': '1024px', // Another custom screen size
      },
    },
  },
  plugins: [],
}
