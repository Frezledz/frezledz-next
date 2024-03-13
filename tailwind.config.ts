import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"media",
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans', 'sans-serif'],
        Roboto:['Roboto']
        // Add more custom font families as needed
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;
