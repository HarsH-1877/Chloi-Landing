import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          elevated: "#0E0F13",
          card: "#111318",
          line: "rgba(255,255,255,0.10)",
        },
        accent: {
          DEFAULT: "#3B82F6",
          bright: "#2F6BFF",
          muted: "rgba(59,130,246,0.14)",
        },
        board: {
          red: "#E05B5B",
          blue: "#5B8DE0",
          green: "#5BE07F",
          amber: "#E0B35B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(47,107,255,0.45)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
