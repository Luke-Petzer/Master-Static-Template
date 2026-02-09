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
