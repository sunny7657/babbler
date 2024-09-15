import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "#A8A8A9",
        foreground: "hsl(var(--foreground))",
        bg_light_grey: "#F6F7FF",
        dark_violet: "#1F2749",
        black: "#191919",
        text_dark_grey: "#797979",
        grey_disabled: "#C5C5C5",
        white: "#FFFFFF",
        blue_sky: "#E6F2FC",
        bg_blue: "#A0A4F6",
        light_lavender: "#D9DAFB",
        medium_lavender: "#8487E9",
        dark_lavender: "#7378F5",
        blue: "#4148EA",
        dark_blue: "#292EB1",
        mint: "#91E0C8",
        yellow: "#FCEA87",
        peach: "#F9BB9C",
        red: "#EA7281",
        transparent: "transparent",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
      },
      keyframes: {
        openmenu: {
          "0%": { left: "-310px" },
          "100%": { left: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
