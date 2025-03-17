/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./FE/src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
