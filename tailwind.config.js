module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "medium-blue": "#093F68",
        "dark-blue": "#080C20",
        "error-red": "#FF2965",
        "light-blue": "#3EE9E5",
        "text-gray": "#777F98",
      },
      font: {
        Manrope: ["Manrope"],
      },
      backgroundImage: {
        "email-pattern": "url('/assets/bg-footer-squiggle.svg')",
        "hero-pattern": "url('/assets/bg-hero-squiggle.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
