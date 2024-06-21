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
        primary: "#E5E298",
        transparentBlue: "rgba(4, 159, 255, 0.125)"
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
};
export default config;
