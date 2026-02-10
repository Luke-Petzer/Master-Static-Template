import { css, cx } from "../../../styled-system/css";
import { ReactNode } from "react";

interface BadgeProps {
    children?: ReactNode;
    className?: string;
    variant?: "dot" | "text";
}

export const Badge = ({ children, className, variant = "text" }: BadgeProps) => {
    const badgeStyles = css({
        display: "inline-flex",
        alignItems: "center",
        gap: "hairline",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "xs",
        color: "accent.DEFAULT",
        textTransform: "uppercase",
        letterSpacing: "0.3em",
        fontWeight: "400",
    });

    const dotStyles = css({
        width: "4px",
        height: "4px",
        bg: "accent.DEFAULT",
        borderRadius: "50%",
    });

    return (
        <div className={cx(badgeStyles, className)}>
            {variant === "dot" && <div className={dotStyles} />}
            {children}
        </div>
    );
};
