import { configs } from "./node_modules/eslint-plugin-prettier/eslint-plugin-prettier";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tod: "rgba(var(--tod))",
        ttd: "rgba(var(--ttd))",
        blo: "rgba(var(--blo))",
        blt: "rgba(var(--blt))",
      },
    },
  },
  plugins: [],
};
