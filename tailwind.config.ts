import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: {
          50: "#27272a",
          100: "#1f1f23",
          200: "#18181b",
          300: "#121215",
          400: "#0d0d0f",
        },
        brand: {
          light: "#fef3c7",
          gold: "#fbbf24",
          amber: "#f59e0b",
          dark: "#b45309",
          glow: "rgba(245, 158, 11, 0.15)",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(245, 158, 11, 0.15)",
        "glow-lg": "0 0 40px -10px rgba(245, 158, 11, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

