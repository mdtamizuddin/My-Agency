/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#DD4242",

          "secondary": "#191C26",

          "accent": "#A9AFC3",

          "neutral": "#080A12",

          "base-100": "#FFFFFF",

          "info": "#2563eb",

          "success": "#16a34a",

          "warning": "#facc15",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
