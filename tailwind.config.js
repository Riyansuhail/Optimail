/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#E63946", dark: "#C0392B", light: "#FEF2F2", border: "#FECACA" },
        ink: { DEFAULT: "#0B0B0F", 2: "#141420", 3: "#1E1E2F" },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
