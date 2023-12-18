/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "black",
        accent: "#d4b39a",
        p: "white",
      },
      backgroundImage: {
        site: "url('/bgMada2.jpg')",
        micropigmentare: "url('/backgrounds/micropigmentare.webp')",
        micropigmentare2: "url('/backgrounds/micropigmentare2.webp')",
        despre: "url('/backgrounds/despre.webp')",
        tatuaje: "url('/backgrounds/tatuaje.webp')",
        servicii: "url('/backgrounds/servicii.webp')",
        laser: "url('/backgrounds/laser.webp')",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
