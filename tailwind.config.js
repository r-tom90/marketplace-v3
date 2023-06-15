/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: "#00FFFF",
        twitterBlue: "#26a7de",
        darkBrown: "#4C2B0F",
        brightYellow: "#FFD700",
        brightOrange: "#FF4500",
        lightGray: "#D3D3D3",
        primaryBgDark: "#006575",
        white: "#fff",
        darkGray: "#333333",
        charcoal: "#4A4A4A",
        discordPurple: "#7289DA",
        telegramBlue: "#27A7E7",
      },
    },
  },
  plugins: [],
};
