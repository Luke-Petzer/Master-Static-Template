# UI Component Inventory

Framework: **Next.js 16 (App Router) + React 19 + Panda CSS**

## Atoms

### Button
**Path:** `src/components/atoms/Button.tsx`  
**Description:** Interactive button with variants (primary/outline/ghost) and spring-physics animation  
**Props:** variant, size, onClick, className, children

```tsx
"use client";

import { css, cx } from "../../../styled-system/css";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = ({
    children,
    onClick,
    className,
    variant = "primary",
    size = "md",
}: ButtonProps) => {
    const buttonStyles = css({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "border-color 0.2s ease-in-out",
        fontFamily: "var(--font-outfit)",
        textTransform: "uppercase",
        letterSpacing: "wider",

        // Size-based heights (multiples of 8)
        height: {
            sm: "40px",
            md: "48px",
            lg: "56px",
        }[size],

        paddingX: {
            sm: "component",
            md: "sectional",
            lg: "atmospheric",
        }[size],

        // Variants
        bg: {
            primary: "accent.DEFAULT",
            outline: "transparent",
            ghost: "transparent",
        }[variant],

        color: {
            primary: "bg",
            outline: "accent.DEFAULT",
            ghost: "text.primary",
        }[variant],

        border: variant === "outline" ? "1px solid" : "none",
        borderColor: variant === "outline" ? "accent.DEFAULT" : "transparent",

        _hover: {
            opacity: 1,
            bg: variant === "primary" ? "accent.DEFAULT" : "rgba(255, 215, 0, 0.1)",
            color: variant === "outline" ? "accent.DEFAULT" : undefined,
            borderColor: "accent.DEFAULT",
            boxShadow: "goldGlow",
        },

        _active: {
            boxShadow: "goldGlowStrong",
        }
    });

    // Luxury Motion Profile: Critically Damped
    const luxurySpring = {
        stiffness: 150,
        damping: 25,
        mass: 1
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", ...luxurySpring }}
            className={cx(buttonStyles, className)}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};
```

### Input
**Path:** `src/components/atoms/Input.tsx`  
**Description:** Form input with label and error state support  
**Props:** label, error, className, ...standard HTML input props

```tsx
import { css, cx } from "../../../styled-system/css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
    const containerStyles = css({
        display: "flex",
        flexDirection: "column",
        gap: "hairline",
        width: "100%",
    });

    const labelStyles = css({
        fontSize: "xs",
        color: "text.secondary",
        fontFamily: "var(--font-outfit)",
        textTransform: "uppercase",
    });

    const inputStyles = css({
        height: "48px",
        bg: "rgba(255, 255, 255, 0.05)",
        border: "1px solid",
        borderColor: error ? "red.500" : "rgba(255, 255, 255, 0.1)",
        paddingX: "component",
        color: "text.primary",
        fontFamily: "var(--font-inter)",
        fontSize: "base",
        outline: "none",
        transition: "all 0.2s ease-in-out",

        _focus: {
            borderColor: "accent",
            bg: "rgba(255, 255, 255, 0.08)",
        },

        _placeholder: {
            color: "rgba(255, 255, 255, 0.3)",
        }
    });

    return (
        <div className={containerStyles}>
            {label && <label className={labelStyles}>{label}</label>}
            <input className={cx(inputStyles, className)} {...props} />
            {error && <span className={css({ color: "red.500", fontSize: "xs" })}>{error}</span>}
        </div>
    );
};
```

### Typography (Heading, Text)
**Path:** `src/components/atoms/Typography.tsx`  
**Description:** Heading and Text components with semantic HTML support  
**Props:** as (semantic tag), className, children

```tsx
import { css, cx } from "../../../styled-system/css";
import { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const Heading = ({ children, className, as: Component = "h1" }: TypographyProps) => {
    const styles = css({
        fontFamily: "var(--font-outfit)",
        fontWeight: "bold",
        lineHeight: "tight",
        color: "text.primary",
        fontSize: {
            base: "xl",
            h1: "2xl",
            h2: "xl",
            h3: "lg",
            h4: "base",
            h5: "sm",
            h6: "xs",
        }[Component === "p" || Component === "span" || Component === "div" ? "base" : Component] || "xl",
    });

    return <Component className={cx(styles, className)}>{children}</Component>;
};

export const Text = ({ children, className, as: Component = "p" }: TypographyProps) => {
    const styles = css({
        fontFamily: "var(--font-inter)",
        fontWeight: "normal",
        lineHeight: "relaxed",
        color: "text.secondary",
        fontSize: "base",
    });

    return <Component className={cx(styles, className)}>{children}</Component>;
};
```

## Molecules

### MetricCard
**Path:** `src/components/molecules/MetricCard.tsx`  
**Description:** Glass-morphism card for displaying metrics with icon, value, label, and description  
**Props:** value, label, icon, description, className

```tsx
import { css, cx } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { ReactNode } from "react";

interface MetricCardProps {
    value: string;
    label: string;
    icon?: ReactNode;
    description?: string;
    className?: string;
}

export const MetricCard = ({ value, label, icon, description, className }: MetricCardProps) => {
    const containerStyles = css({
        padding: "sectional", // 24px internal
        bg: "glass.bg",
        backdropFilter: "blur(glass)",
        border: "1px solid",
        borderColor: "glass.border",
        display: "flex",
        flexDirection: "column",
        gap: "base", // 8px
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden",

        _hover: {
            bg: "rgba(255, 255, 255, 0.05)",
            borderColor: "accent.DEFAULT",
            boxShadow: "goldGlow",
            transform: "translateY(-4px)",
        }
    });

    return (
        <div className={cx(containerStyles, className)}>
            {icon && <div className={css({ color: "accent", fontSize: "xl" })}>{icon}</div>}
            <div>
                <Heading as="h3" className={css({ color: "accent", fontSize: "xl", marginBottom: "hairline" })}>
                    {value}
                </Heading>
                <Heading as="h4" className={css({ fontSize: "base", fontWeight: "semibold", textTransform: "uppercase" })}>
                    {label}
                </Heading>
            </div>
            {description && <Text className={css({ fontSize: "sm" })}>{description}</Text>}
        </div>
    );
};
```

### TrustBadge
**Path:** `src/components/molecules/TrustBadge.tsx`  
**Description:** Small badge component with icon and label  
**Props:** icon, label, className

```tsx
import { css, cx } from "../../../styled-system/css";
import { ReactNode } from "react";

interface TrustBadgeProps {
    icon: ReactNode;
    label: string;
    className?: string;
}

export const TrustBadge = ({ icon, label, className }: TrustBadgeProps) => {
    const styles = css({
        display: "inline-flex",
        alignItems: "center",
        gap: "hairline",
        padding: "hairline",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "sm",
        bg: "rgba(255, 255, 255, 0.02)",
        fontSize: "xs",
        color: "text.secondary",
        textTransform: "uppercase",
        letterSpacing: "widest",
        filter: "grayscale(100%)",
        opacity: 0.6,
        transition: "all 0.3s ease-in-out",

        _hover: {
            filter: "grayscale(0%)",
            opacity: 1,
            borderColor: "accent",
            color: "accent",
        }
    });

    return (
        <div className={cx(styles, className)}>
            <div className={css({ color: "accent" })}>{icon}</div>
            <span>{label}</span>
        </div>
    );
};
```
