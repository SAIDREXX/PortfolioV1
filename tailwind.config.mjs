/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      colors: {
        goodWhite: "#e7e7e7",
        goodDark: "#13151a",
      },
      fontFamily: {
        Geist: ["Geist"],
      },
    },
  },
  plugins: [],
};
