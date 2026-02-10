"use client";

import { css } from "../../../styled-system/css";
import { Code } from "../atoms/Typography";

export const Navigation = () => {
    const navStyles = css({
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 40,
        paddingX: "sectional",
        paddingY: "component",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mixBlendMode: "difference",
        opacity: 0,
        animation: "fadeIn 2s 1s forwards",
    });

    const logoStyles = css({
        fontFamily: "var(--font-michroma)",
        fontSize: "xs",
        letterSpacing: "0.2em",
        color: "white",
        opacity: 0.7,
    });

    const linksStyles = css({
        display: "flex",
        gap: "sectional",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "10px",
        letterSpacing: "widest",
        color: "#AAA",
    });

    const linkStyles = css({
        transition: "color 0.2s ease-in-out",
        cursor: "pointer",
        _hover: {
            color: "accent",
        }
    });

    return (
        <nav className={navStyles} style={{ viewTransitionName: "main-nav" }}>
            <div className={logoStyles}>
                ECLIPSE LOGIC <span className={css({ color: "accent" })}>//</span> V.9.0
            </div>
            <div className={linksStyles}>
                <a href="#home" className={linkStyles}>GATEWAY</a>
                <a href="#capabilities" className={linkStyles}>CAPABILITIES</a>
                <a href="#protocol" className={linkStyles}>PROTOCOL</a>
                <a href="#manifesto" className={linkStyles}>MANIFESTO</a>
                <a href="#contact" className={linkStyles}>SECURE_LINK</a>
            </div>
        </nav>
    );
};
