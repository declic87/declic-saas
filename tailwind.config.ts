import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette DÉCLIC Entrepreneurs - Bleu Marine + Orange Ambre
        primary: {
          DEFAULT: "#1e3a5f",
          light: "#2d5a87",
          dark: "#152a45",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2d5a87",
          600: "#1e3a5f",
          700: "#152a45",
          800: "#0f1f33",
          900: "#0a1525",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Alias orange -> accent pour compatibilité
        orange: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Alias blue -> primary
        blue: {
          DEFAULT: "#1e3a5f",
          dark: "#1e3a5f",
          darker: "#152a45",
          light: "#2d5a87",
        },
        // Couleurs système
        success: {
          DEFAULT: "#059669",
          light: "#10b981",
          dark: "#047857",
        },
        danger: {
          DEFAULT: "#dc2626",
          light: "#ef4444",
          dark: "#b91c1c",
        },
        warning: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        // Palette Slate
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Gris (alias slate)
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Variables shadcn/ui
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08)',
        'btn': '0 4px 12px rgba(245,158,11,0.3)',
        'btn-hover': '0 6px 20px rgba(245,158,11,0.4)',
        'sidebar': '2px 0 8px rgba(0,0,0,0.1)',
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(245,158,11,0.4)" },
          "50%": {
            boxShadow: "0 0 15px rgba(245,158,11,0.8), 0 0 25px rgba(245,158,11,0.4)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #1e3a5f 0%, #2d5a87 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #1e3a5f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
