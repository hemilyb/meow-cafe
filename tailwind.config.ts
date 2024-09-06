import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F7F2E8",
        "text": "#1A1A1A",
        "text-2": "#1A1A1A",
        "text-3": "#000000",
        "text-4": "#282828",
        "pink": "#EB8E8E",
        "pink-2": "#F9C4C4",
        "headings": "#3C0E0E",
        "brand": "#431B1B",
        "brand-2": "#4D1D1D",
        "footer": "rgba(60, 14, 14, 0.68)"
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(to bottom left, #f6c7c5, #c27d7a)',
        'gradient-pink-brown' : 'linear-gradient(to bottom left, #F3C7C4, #541511)',
        'gradient-pink-white-1' : 'linear-gradient(to bottom left, rgba(84, 21, 17, 0.66), #F3C7C4)',
        'gradient-pink-white-2' : 'linear-gradient(to bottom left, #8F423D, #FFFFFF)',
        'gradient-light-brown': 'linear-gradient(to bottom left, #FAFAFA, rgba(84, 21, 17, 0.58))',
        'gradient-dark-brown': 'linear-gradient(to bottom left, #0a0909, #541511)'
      }
    },
  },
  plugins: [],
};
export default config;
