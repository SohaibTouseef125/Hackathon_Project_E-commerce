import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Matches all files in pages folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Matches all files in components folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Matches all files in app folder
    "!./node_modules/**/*", // Explicitly exclude node_modules for performance
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        customHeader: "#FBEBB5",
        foreground: "#000000",
        customShop: "#FAF4F4",
        customProucts: "#FFF9E5",
        customInput: "#9F9F9F",
        customSideTable: "#FAF4F4",
        custom: "#D9D9D9",
      },
      
    },
  },
  plugins: [],
};

export default config;
