/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        "azure-radiance": {
          50: "#eef8ff",
          100: "#daefff",
          200: "#bde3ff",
          300: "#8fd3ff",
          400: "#5ab8ff",
          500: "#3499fd",
          600: "#1877f2",
          700: "#1664df",
          800: "#1950b4",
          900: "#1a468e",
          950: "#152c56",
        },
        laurel: {
          50: "#f3f6f3",
          100: "#e4eae1",
          200: "#c8d5c5",
          300: "#a1b79e",
          400: "#72916f",
          500: "#557653",
          600: "#3f5d3e",
          700: "#324a32",
          800: "#293c29",
          900: "#233124",
          950: "#131b13",
        },
      },
    },
  },
  plugins: [],
};
