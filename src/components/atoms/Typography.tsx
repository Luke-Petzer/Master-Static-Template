import { css, cx } from "../../../styled-system/css";
import { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const Heading = ({ children, className, as: Component = "h1" }: TypographyProps) => {
    const styles = css({
        fontFamily: "var(--font-michroma)",
        fontWeight: "normal",
        lineHeight: "tight",
        color: "text.primary",
        letterSpacing: "widest",
        textTransform: "uppercase",
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
        fontFamily: "var(--font-rajdhani)",
        fontWeight: "normal",
        lineHeight: "relaxed",
        color: "text.secondary",
        fontSize: "base",
    });

    return <Component className={cx(styles, className)}>{children}</Component>;
};

export const Code = ({ children, className, as: Component = "span" }: TypographyProps) => {
    const styles = css({
        fontFamily: "var(--font-jetbrains)",
        fontWeight: "400",
        lineHeight: "relaxed",
        color: "accent.DEFAULT",
        fontSize: "xs",
        letterSpacing: "widest",
        textTransform: "uppercase",
    });

    return <Component className={cx(styles, className)}>{children}</Component>;
};
