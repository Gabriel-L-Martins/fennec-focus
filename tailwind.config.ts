import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#855aaa",
          "secondary": "#b590d5",
          "accent": "#a266d6",
          "neutral": "#291f2e",
          "base-100": "#f8f6f9",
          "primary-content": "#0f0e10", // Text color for primary elements
          "base-content": "#0f0e10",   // Text color for base elements
        },
        dark: {
          "primary": "#8055a5",
          "secondary": "#4f2a6f",
          "accent": "#652999",
          "neutral": "#291f2e",
          "base-100": "#080609",
          "primary-content": "#f0eff1", // Text color for primary elements
          "base-content": "#f0eff1",   // Text color for base elements
        },
      },
    ],
  },
};
export default config;
