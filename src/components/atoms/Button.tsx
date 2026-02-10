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
        transition: "all 0.3s ease-in-out",
        fontFamily: "var(--font-jetbrains)",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        fontSize: "xs",

        // Size-based heights (multiples of 8)
        height: {
            sm: "40px",
            md: "48px",
            lg: "56px",
        }[size],

        paddingX: {
            sm: "sectional",
            md: "atmospheric",
            lg: "structural",
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
            bg: variant === "primary" ? "accent.DEFAULT" : "rgba(255, 69, 0, 0.1)",
            color: variant === "outline" ? "accent.DEFAULT" : variant === "primary" ? "bg" : undefined,
            borderColor: "accent.DEFAULT",
            boxShadow: variant === "outline" ? "eclipseGlow" : undefined,
            transform: "scale(1.05)",
        },

        _active: {
            transform: "scale(0.98)",
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
