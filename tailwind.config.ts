import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        club: {
          yellow: "#FFD400",
          black: "#0B0B0B",
          ink: "#111111",
          muted: "#6B7280",
          surface: "#FFFFFF",
          canvas: "#F6F7F9"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
