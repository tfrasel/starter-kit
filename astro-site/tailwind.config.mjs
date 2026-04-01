/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "rgba(241, 238, 230, 1)",
        black: "rgba(35, 35, 35, 1)",
        dark: "rgba(18, 18, 18, 1)",
        "section-bg": "rgba(235, 233, 226, 1)",
      },
      fontFamily: {
        inter: ["Inter", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
