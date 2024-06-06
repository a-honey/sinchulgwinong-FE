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
        gray2: "#B8B8B8",
        gray3: "#A0A0A0",
        black: "#343434",
        white: "#FFFFFF",
      },
      gridTemplateColumns: {
        "1-1-2": "1fr 1fr 2fr",
      },
      gridTemplateRows: {
        "1-1": "1fr 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
