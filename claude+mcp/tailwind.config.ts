import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#A53DFF",
          900: "#210C33",
        },
        gray: {
          50: "#F0F1F3",
          200: "#C3C7CE",
          300: "#B8BCC2",
          400: "#87909D",
          500: "#697484",
          600: "#556070",
          700: "#424E60",
          800: "#2B384C",
          900: "#132238",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
