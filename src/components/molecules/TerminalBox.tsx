import { css, cx } from "../../../styled-system/css";
import { ReactNode } from "react";

interface TerminalBoxProps {
    header?: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
    className?: string;
}

export const TerminalBox = ({ header, footer, children, className }: TerminalBoxProps) => {
    const outerFrameStyles = css({
        width: "100%",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        bg: "rgba(0, 0, 0, 0.8)",
        padding: { base: "4px", md: "8px" },
    });

    const innerFrameStyles = css({
        width: "100%",
        height: "100%",
        border: "1px solid",
        borderColor: "glass.border",
        padding: { base: "sectional", md: "structural" },
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(glass)",
    });

    const headerStyles = css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "structural",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 69, 0, 0.3)",
        paddingBottom: "hairline",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "xs",
        color: "accent.DEFAULT",
    });

    const footerStyles = css({
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        bg: "bg-elevated",
        padding: "component",
        borderTop: "1px solid",
        borderColor: "glass.border",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "10px",
        color: "accent.DEFAULT",
        whiteSpace: "nowrap",
        overflow: "hidden",
    });

    return (
        <div className={cx(outerFrameStyles, className)}>
            <div className={innerFrameStyles}>
                {header && <div className={headerStyles}>{header}</div>}
                {children}
                {footer && <div className={footerStyles}>{footer}</div>}
            </div>
        </div>
    );
};
