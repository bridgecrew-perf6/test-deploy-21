module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        blue: {
          teal: "#075384",
          light: "#07528431",
          dark: "#104B71",
          extraLight: "#69B9ED",
          badge: "#C1D4E0",
        },
        red: {
          main: "#EE2346",
          light: "#E26562",
        },
        gray: {
          main: "#414141",
          light: "#9A9A9A",
          form: "#F7F7F7",
          more: "#979797",
          bg: "#F2F5F8",
        },
        yellow: {
          main: "#F2B731",
          light: "#FEBE10",
        },
      },
      gridTemplateColumns: {
        form: "45% 45% 10%",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
