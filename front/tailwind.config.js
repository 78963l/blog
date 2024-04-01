/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_1000,
      lineHeight: px0_100,
      fontSize: px0_200,
      minWidth: px0_500,
      minHeight: px0_500,
      spacing: px0_2000,
    },
  },
  plugins: [],
};
