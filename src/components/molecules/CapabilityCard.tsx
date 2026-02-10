import { css, cx } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { ReactNode } from "react";

interface CapabilityCardProps {
    title: string;
    description: string;
    hoverText: string;
    isActive?: boolean;
    className?: string;
}

export const CapabilityCard = ({
    title,
    description,
    hoverText,
    isActive = false,
    className
}: CapabilityCardProps) => {
    const containerStyles = css({
        position: "relative",
        padding: { base: "sectional", md: "structural" },
        borderRight: "1px solid",
        borderBottom: "1px solid",
        borderColor: "glass.border",
        overflow: "hidden",
        transition: "background 0.3s ease-in-out",

        _hover: {
            bg: "rgba(255, 255, 255, 0.05)",
        }
    });

    const statusDotStyles = css({
        position: "absolute",
        top: "component",
        right: "component",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        bg: isActive ? "accent.DEFAULT" : "text.tertiary",
        transition: "background 0.3s ease-in-out",

        _groupHover: {
            bg: "accent.DEFAULT",
        }
    });

    const hoverTextStyles = css({
        fontFamily: "var(--font-jetbrains)",
        fontSize: "10px",
        color: "accent.DEFAULT",
        marginTop: "base",
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
        letterSpacing: "widest",

        _groupHover: {
            opacity: 1,
        }
    });

    return (
        <div className={cx("group", containerStyles, className)}>
            <div className={statusDotStyles} />
            <Heading as="h3" className={css({ fontSize: "lg", marginBottom: "component", letterSpacing: "wide" })}>
                {title}
            </Heading>
            <Text className={css({ fontSize: "sm", lineHeight: "relaxed", letterSpacing: "wide" })}>
                {description}
            </Text>
            <div className={hoverTextStyles}>
                &gt; {hoverText}
            </div>
        </div>
    );
};
