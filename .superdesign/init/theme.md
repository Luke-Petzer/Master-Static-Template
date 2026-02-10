# Design System & Theme Tokens

Framework: **Panda CSS** (Zero-runtime CSS-in-JS)

## Panda CSS Configuration

**Path:** `panda.config.ts`

```ts
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
```

## Global CSS

**Path:** `src/app/globals.css`

```css
@layer reset, base, tokens, recipes, utilities;

@layer base {
  :root {
    /* Brand Design Tokens for 15-Minute Re-skinning */
    --brand-black: #121212;
    --brand-black-deep: #080808;
    --brand-gold: #FFD700;
    --brand-white: #FFFFFF;
    --brand-gray: #AAAAAA;

    /* Spacing Scale (8px Grid) */
    --spacing-base: 8px;
    --spacing-component: 16px;
    --spacing-sectional: 24px;
    --spacing-atmospheric: 32px;
    --spacing-structural: 48px;
    --spacing-grandeur: 64px;
  }

  body {
    background: radial-gradient(circle at 50% 50%, var(--brand-black) 0%, var(--brand-black-deep) 100%);
    color: var(--brand-white);
    font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
  }

  /* Tactile SVG Noise Filter */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    pointer-events: none;
    z-index: 9999;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-outfit), sans-serif;
  }

  * {
    box-sizing: border-box;
  }
}
```

## Typography

- **Headings:** Outfit (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Sizing:** Fluid typography using `clamp()` with Golden Ratio (1.618)

## Color Palette

### Brand Colors
- **Black:** `#121212` (Background)
- **Deep Black:** `#080808` (Gradient endpoint)
- **Gold:** `#FFD700` (Primary accent)
- **White:** `#FFFFFF` (Primary text)
- **Gray:** `#AAAAAA` (Secondary text)

### Semantic Tokens
- **bg:** Brand black
- **text.primary:** White
- **text.secondary:** Gray
- **accent.DEFAULT:** Gold
- **glass.bg:** Transparent white overlay (3% opacity)
- **glass.border:** Transparent white border (8% opacity)

## Spacing System (8px Grid)

- **hairline:** 4px
- **base:** 8px
- **component:** 16px
- **sectional:** 24px
- **atmospheric:** 32px
- **structural:** 48px
- **grandeur:** 64px

## Motion Profile (Sovereign Protocol)

### Luxury Subtle Spring
- stiffness: 150
- damping: 25
- mass: 1

### Heavy Organic Spring
- stiffness: 80
- damping: 20
- mass: 2
