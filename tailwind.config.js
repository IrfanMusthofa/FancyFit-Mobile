/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#660033",
          500: "#99005d",
          700: "#090909",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          400: "#858EAD",
          500: "#7B8EC8",
          700: "#DCE3F1",
          800: "#F4F6F8",
          850: "#FDFDFD",
          900: "#FFFFFF",
        },
      },
      borderRadius: {
        2: "8px",
        1.5: "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
        rose: "0px 1px 10px 0px rgba(153, 0, 93, 0.50)",
      },
      backgroundImage: {
        bannerImg1: "url('/img1.jpg')",
        bannerImg2: "url('/img2.jpg')",
        bannerImg3: "url('/img3.jpg')",
        bannerImg4: "url('/img4.jpg')",
        bannerImg5: "url('/img5.jpg')",
        blackOverlay:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
