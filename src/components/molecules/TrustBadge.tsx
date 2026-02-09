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
