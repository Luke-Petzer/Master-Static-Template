"use client";

import { css } from "../../../styled-system/css";
import { Heading, Code } from "../atoms/Typography";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., trigger CRT shutdown animation)
        console.log("Signal sent:", inputValue);
    };

    const sectionStyles = css({
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 10,
        paddingBottom: "grandeur",
    });

    const containerStyles = css({
        width: "100%",
        maxWidth: "640px",
        paddingX: "sectional",
    });

    const formStyles = css({
        marginTop: "structural",
    });

    const inputGroupStyles = css({
        position: "relative",
        marginBottom: "sectional",
    });

    const labelStyles = css({
        display: "block",
        marginBottom: "hairline",
    });

    const inputStyles = css({
        width: "100%",
        bg: "transparent",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        paddingY: "component",
        fontFamily: "var(--font-jetbrains)",
        fontSize: { base: "lg", md: "xl" },
        color: "white",
        outline: "none",
        transition: "border-color 0.3s ease-in-out",

        _placeholder: {
            color: "text.tertiary",
        },

        _focus: {
            borderColor: "accent",
        }
    });

    const underlineStyles = css({
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "1px",
        bg: "accent",
        width: 0,
        transition: "width 0.5s ease-in-out",
    });

    const submitButtonStyles = css({
        width: "100%",
        paddingY: "component",
        bg: "rgba(255, 255, 255, 0.05)",
        border: "1px solid",
        borderColor: "glass.border",
        color: "white",
        fontFamily: "var(--font-jetbrains)",
        fontSize: "sm",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "component",

        _hover: {
            borderColor: "accent",
            color: "accent",
            bg: "rgba(255, 69, 0, 0.05)",
        }
    });

    const footerStyles = css({
        position: "absolute",
        bottom: "sectional",
        width: "100%",
        textAlign: "center",
    });

    return (
        <section id="contact" className={sectionStyles}>
            <div className={containerStyles}>
                <Heading as="h2" className={css({ fontSize: { base: "lg", md: "xl" }, textAlign: "center", marginBottom: "structural" })}>
                    READY TO <span className={css({ color: "accent" })}>DISAPPEAR</span>?
                </Heading>

                <form onSubmit={handleSubmit} className={formStyles}>
                    <div className={inputGroupStyles + " group"}>
                        <label className={labelStyles}>
                            <Code>ENTER_ENCRYPTED_SIGNAL_DESTINATION:</Code>
                        </label>
                        <input
                            type="text"
                            className={inputStyles}
                            placeholder="@handle or secure_key"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            required
                        />
                        <div className={underlineStyles} style={{ width: inputValue.length > 0 ? '100%' : '0' }} />
                    </div>

                    <button type="submit" className={submitButtonStyles}>
                        <span>[ SEND SIGNAL ]</span>
                        <ArrowRight size={16} className={css({ transition: "transform 0.3s", _groupHover: { transform: "translateX(8px)" } })} />
                    </button>
                </form>
            </div>

            <footer className={footerStyles}>
                <Code className={css({ fontSize: "9px", color: "text.tertiary" })}>
                    LOCATION: CLASSIFIED <span className={css({ marginX: "hairline" })}>//</span> CONNECTION: ENCRYPTED <span className={css({ marginX: "hairline" })}>//</span> ECLIPSE LOGIC © 2024
                </Code>
            </footer>
        </section>
    );
};
