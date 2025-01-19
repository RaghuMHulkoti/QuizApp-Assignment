/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'quiz-bg': "url('./assets/quiz-background.png')",
      },
    },
  },
  plugins: [],
};
