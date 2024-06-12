import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-blur": "0 0 rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, transparent, grey, transparent)",
      },
      fontFamily: {
        "ClashDisplay-Regular": "ClashDisplay-Regular",
        "ClashDisplay-Bold": "ClashDisplay-Bold",
        "ClashDisplay-Medium": "ClashDisplay-Medium",
        "ClashDisplay-Semibold": "ClashDisplay-Semibold",
        "ClashDisplay-Light": "ClashDisplay-Light",
        "ClashDisplay-Extralight": "ClashDisplay-Extralight",
      }
    },
  },
  plugins: [],
};
export default config;
