/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.26)",
      },
      fontWeight: {
        important: "1000",
      },
      textColor: {
        important: "black",
      },
    },
  },
  plugins: [],
};
