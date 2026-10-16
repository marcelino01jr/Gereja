import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - Modern Catholic Church + Warm Community + Elegant
        cream: {
          DEFAULT: "#FAF7F0", // Off-white background
          50: "#FCFAF5",
          100: "#FAF7F0",
        },
        navy: {
          DEFAULT: "#1F2A44", // Deep navy for contrast
          50: "#E5E7EC",
          100: "#B8BCC8",
          200: "#8A91A4",
          300: "#5C6680",
          400: "#3E4A68",
          500: "#1F2A44",
          600: "#1B253D",
          700: "#161E33",
          800: "#121729",
          900: "#0D101E",
        },
        gold: {
          DEFAULT: "#C9A24B", // Elegant gold accent
          50: "#F7F3E8",
          100: "#EDE2C5",
          200: "#E2D09F",
          300: "#D7BE78",
          400: "#CFB05C",
          500: "#C9A24B",
          600: "#B89443",
          700: "#A3823B",
          800: "#8E7033",
          900: "#6B5325",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce": "bounce 2s infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
