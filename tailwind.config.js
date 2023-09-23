/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Roboto, sans-serif",
      },
    },
    spacing: {
      0: "0",
      0.5: "0.25rem",
      1: "0.5rem",
      1.5: "0.75rem",
      2: "1rem",
      2.5: "1.25rem",
      3: "1.5rem",
      3.5: "1.75rem",
      4: "2rem",
      5: "2.25rem",
      6: "2.5rem",
      7: "2.75rem",
      8: "3rem",
      9: "3.25rem",
      10: "3.5rem",
      11: "3.75rem",
      12: "4rem",
    },
  },
};
