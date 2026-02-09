import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            black: { value: "#121212" },
            gold: { value: "#FFD700" },
            white: { value: "#FFFFFF" },
            gray: { value: "#AAAAAA" },
          },
        },
        spacing: {
          "base": { value: "8px" },
          "component": { value: "16px" },
          "sectional": { value: "24px" },
          "atmospheric": { value: "32px" },
          "structural": { value: "48px" },
          "grandeur": { value: "64px" },
          "hairline": { value: "4px" },
        },
      },
      semanticTokens: {
        colors: {
          bg: { value: "{colors.brand.black}" },
          text: {
            primary: { value: "{colors.brand.white}" },
            secondary: { value: "{colors.brand.gray}" },
          },
          accent: {
            DEFAULT: { value: "{colors.brand.gold}" },
            glow: { value: "rgba(255, 215, 0, 0.3)" },
            high: { value: "rgba(255, 215, 0, 0.6)" },
          },
          glass: {
            bg: { value: "rgba(255, 255, 255, 0.03)" },
            border: { value: "rgba(255, 255, 255, 0.08)" },
            glow: { value: "rgba(255, 215, 0, 0.15)" },
          }
        },
        shadows: {
          goldGlow: { value: "0 0 20px {colors.accent.glow}" },
          goldGlowStrong: { value: "0 0 40px {colors.accent.high}" },
        },
        blurs: {
          glass: { value: "16px" },
        },
        fontSizes: {
          // Implementing fluid typography using Golden Ratio (1.618)
          // formula: clamp(min, preferred, max)
          xs: { value: "clamp(0.75rem, 0.5vw + 0.6rem, 0.875rem)" },
          sm: { value: "clamp(0.875rem, 0.75vw + 0.75rem, 1rem)" },
          base: { value: "clamp(1rem, 1vw + 0.8rem, 1.125rem)" },
          lg: { value: "clamp(1.618rem, 2vw + 1.2rem, 2rem)" }, // ~26px to 32px
          xl: { value: "clamp(2.618rem, 4vw + 1.8rem, 3.5rem)" }, // ~42px to 56px
          "2xl": { value: "clamp(4.236rem, 6vw + 3rem, 5.5rem)" }, // ~68px to 88px
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
