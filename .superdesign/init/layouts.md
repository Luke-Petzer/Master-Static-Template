# Layout Components

Framework: **Next.js 16 (AppRouter Assembly Router) + Panda CSS**

## Root Layout
**Path:** `src/app/layout.tsx`  
**Description:** Root HTML wrapper with font loading and metadata

```tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Engine | B2B Industrial Mastery",
  description: "High-performance industrial-grade Next.js 16 boilerplate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
```

## Navigation
**Path:** `src/components/organisms/Navigation.tsx`  
**Description:** Sticky top navigation bar with logo, nav links, and CTA button

```tsx
import { css, cx } from "../../../styled-system/css";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Typography";

export const Navigation = () => {
    const navStyles = css({
        width: "100%",
        height: "10vh",
        maxHeight: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "grandeur",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        bg: "rgba(18, 18, 18, 0.8)",
    });

    const logoStyles = css({
        fontSize: "lg",
        color: "accent",
        letterSpacing: "0.2em",
    });

    const linksStyles = css({
        display: { base: "none", md: "flex" },
        gap: "atmospheric",
        alignItems: "center",
    });

    const linkItemStyles = css({
        fontSize: "xs",
        color: "text.secondary",
        textTransform: "uppercase",
        letterSpacing: "widest",
        cursor: "pointer",
        transition: "color 0.2s",
        _hover: { color: "accent" },
    });

    return (
        <nav className={navStyles}>
            <div className={logoStyles}>
                <Heading as="h2" className={css({ fontSize: "lg", m: 0 })}>GOLDEN ENGINE</Heading>
            </div>

            <div className={linksStyles}>
                <span className={linkItemStyles}>Solutions</span>
                <span className={linkItemStyles}>Performance</span>
                <span className={linkItemStyles}>Security</span>
                <span className={linkItemStyles}>ROI</span>
            </div>

            <div>
                <Button variant="primary" size="sm">Get Audited</Button>
            </div>
        </nav>
    );
};
```

## Footer
**Path:** `src/components/organisms/Footer.tsx`  
**Description:** Footer with branding and CTA

```tsx
import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { Button } from "../atoms/Button";

export const Footer = () => {
    const footerStyles = css({
        paddingX: "grandeur",
        paddingY: "structural",
        bg: "bg",
        borderTop: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.05)",
    });

    const gridStyles = css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
        gap: "grandeur",
        alignItems: "center",
    });

    return (
        <footer className={footerStyles}>
            <div className={gridStyles}>
                <div>
                    <Heading as="h3" className={css({ color: "accent", fontSize: "lg", marginBottom: "base" })}>
                        SOVEREIGN ENGINEERING PROTOCOL
                    </Heading>
                    <Text className={css({ maxWidth: "500px" })}>
                        Building high-stakes digital infrastructure for the leaders of the
                        South African industrial market. Zero-runtime CSS, PPR-first,
                        and phising-resistant security.
                    </Text>
                </div>

                <div className={css({ textAlign: { base: "left", md: "right" } })}>
                    <Heading as="h4" className={css({ fontSize: "base", marginBottom: "base" })}>
                        READY TO OUTPERFORM?
                    </Heading>
                    <Button variant="primary" size="lg">Request Performance Audit</Button>
                    <div className={css({ marginTop: "component", color: "text.secondary", fontSize: "xs" })}>
                        © 2026 LP WEB STUDIO. CAPE TOWN, ZA.
                    </div>
                </div>
            </div>
        </footer>
    );
};
```
