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
        primary1: "#FFFAEE",
        primary2: "#FFD880",
        primary3: "#FFB600",
        primary4: "#E88900",
        point1: "#7C3B00",
        gray1: "#F4F4F4",
        gray2: "#F4F4F4",
        gray3: "#F4F4F4",
        black: "#343434",
      },
    },
  },
  plugins: [],
};
export default config;
