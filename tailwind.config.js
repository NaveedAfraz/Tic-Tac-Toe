module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",      // For Vite projects, make sure to include index.html in the root
    "./main.jsx"          // If your main file is directly in the project root
  ],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
