import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        accent: {
          1: "rgb(var(--accent-1) / <alpha-value>)",
          2: "rgb(var(--accent-2) / <alpha-value>)",
          3: "rgb(var(--accent-3) / <alpha-value>)"
        },
        line: "rgb(var(--line) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 100px rgba(0,0,0,0.45)",
        card: "0 18px 70px rgba(7, 5, 24, 0.25)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(600px 320px at 20% 10%, rgba(64,214,255,.18), transparent 60%), radial-gradient(700px 340px at 85% 0%, rgba(255,140,66,.18), transparent 65%), radial-gradient(900px 500px at 50% 80%, rgba(161,107,255,.12), transparent 70%)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.04)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.65" },
          "100%": { transform: "scale(1.25)", opacity: "0" }
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(140%)" }
        }
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
        sheen: "sheen 1.6s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
