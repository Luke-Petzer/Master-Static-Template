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
