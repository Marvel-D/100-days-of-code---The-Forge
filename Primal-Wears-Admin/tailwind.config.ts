import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "p/100": "#dc2626",

        "pri-100": "#5570F1",
        "pri-80": "#6D83EC",
        "sec-100": "#FFCC91",
        "sec-20": "#FEF5EA",
        "suc-100": "#519C66",
        "err-100": "#CC5F5F",
      },
    },
  },
  plugins: [],
};
export default config;
