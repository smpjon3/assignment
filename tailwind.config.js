/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6a38eb",
        gray: {
          "01": "#505D68",
          0: "#5b6270",
          1: "#849dab",
          2: "#788091",
          3: "#8c94ab",
          4: "#dbdde4",
          5: "#ececf4",
          6: "#fafafc",
        },
        grey: {
          "01": "#505D68",
          0: "#5b6270",
          1: "#849dab",
          2: "#788091",
          3: "#8c94ab",
          4: "#dbdde4",
          5: "#ececf4",
          6: "#fafafc",
        },
        grayscale: {
          100: "#f0f0f6",
          300: "#b9bdc8",
          500: "#787e8c",
          600: "#586070",
          900: "#1b2230",
        },
        greyscale: {
          100: "#f0f0f6",
          300: "#b9bdc8",
          500: "#787e8c",
          600: "#586070",
          900: "#1b2230",
        },
      },
    },
  },
  plugins: [],
};
