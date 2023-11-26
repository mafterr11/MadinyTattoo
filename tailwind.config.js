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
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "black",
        secondary: "#393A47",
        accent: "#d4b39a",
        p: "white",
        // site: '#FDF7E4',
        // #976252
        // 1AACAC turquoise
        // gold cdab85  d4b39a
      },
      backgroundImage: {
        explosion: "url('/bg-explosion.png')",
        circles: "url('/bg-circles.png')",
        circleStar: "url('/circle-star.svg')",
        site: "url('/bgMada2.jpg')",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
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
