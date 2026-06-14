import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--cream) / <alpha-value>)",
        "cream-dark": "rgb(var(--cream-dark) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        orange: "rgb(var(--orange) / <alpha-value>)",
        paper: "rgb(var(--white) / <alpha-value>)",
        accent: {
          1: "rgb(var(--blue) / <alpha-value>)",
          2: "rgb(var(--orange) / <alpha-value>)",
          3: "rgb(var(--ink) / <alpha-value>)",
          4: "rgb(var(--blue) / <alpha-value>)"
        },
        line: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--ink) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        "serif-accent": ["var(--font-serif-accent)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(22,21,15,0.06), 0 24px 100px rgba(22,21,15,0.12)",
        card: "0 18px 70px rgba(22, 21, 15, 0.08)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(22,21,15,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(600px 320px at 20% 10%, rgba(39,66,206,.10), transparent 60%), radial-gradient(700px 340px at 85% 0%, rgba(255,106,26,.08), transparent 65%), radial-gradient(900px 500px at 50% 80%, rgba(39,66,206,.06), transparent 70%)"
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
        },
        heroIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "none" }
        },
        marqueeScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        pipeDot: {
          "0%": { left: "0%", opacity: "0" },
          "6%": { opacity: "1" },
          "94%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" }
        },
        softPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" }
        },
        botBlink: {
          "0%, 91%, 100%": { transform: "translateX(-50%) scaleY(1)" },
          "94%": { transform: "translateX(-50%) scaleY(0.12)" },
          "97%": { transform: "translateX(-50%) scaleY(1)" }
        }
      },
      transitionDuration: {
        400: "400ms"
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
        sheen: "sheen 1.6s ease-out",
        "hero-in": "heroIn 0.9s cubic-bezier(0.2,0.7,0.2,1) both",
        marquee: "marqueeScroll 36s linear infinite",
        "pipe-dot": "pipeDot 5.5s linear infinite",
        "soft-pulse": "softPulse 2.4s ease-in-out infinite",
        "bot-blink": "botBlink 4.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
