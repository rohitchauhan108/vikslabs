import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        heading: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#007bff",
        secondary: "#343a40",
      },
    },
  },
  plugins: [],
};
export default config;
