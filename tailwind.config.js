import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Papi Jumbo Cater.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef8525",
          secondary: "#c43c1e",
          accent: "#ffcb65",
          neutral: "#f9f7dc",
          "base-100": "#ffffff",
          info: "#9ECEAB",
          success: "#A6C1ED",
          warning: "#F85B53",
          error: "#F85B53",
        },
      },
    ],
  },
  plugins: [daisyui],
};
