/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors: {
        ink: "#05060a",
        panel: "#0b0d16",
        line: "#20243a",
        neon: "#5ee7ff",
        violet: "#8b5cf6",
        charcoal: "#353840",
        blush: "#c58f9d"
      },
      maxWidth: {
        site: "1700px"
      }
    }
  },
  plugins: []
};
