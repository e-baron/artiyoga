const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)', //'#85d7ff',
          DEFAULT: 'var(--color-primary-DEFAULT)',
          dark: 'var(--color-primary-dark)', 
        },
        secondary: colors.teal,
        tertiary: colors.white,
        primaryTwin: colors.white,
        secondaryTwin: colors.black,
        tertiaryTwin: colors.warmGray,
        neutral: colors.gray,
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      display: ["responsive", "group-hover", "group-focus", "focus-within"],
    },
  },
  plugins: [],
};
