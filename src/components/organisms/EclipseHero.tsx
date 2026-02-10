"use client";

import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const EclipseHero = () => {
    const heroStyles = css({
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        paddingX: "component",
    });

    const contentStyles = css({
        textAlign: "center",
        maxWidth: "1280px",
        marginX: "auto",
        marginTop: "structural",
    });

    const badgeContainerStyles = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "component",
        marginTop: "component",
        flexWrap: "wrap",
    });

    const scrollIndicatorStyles = css({
        position: "absolute",
        bottom: "structural",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "hairline",
        opacity: 0.5,
    });

    const lineStyles = css({
        width: "1px",
        height: "48px",
        background: "linear-gradient(to bottom, #FF4500, transparent)",
    });

    // Reveal animation on mount
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal-up');
        setTimeout(() => {
            elements.forEach((el, index) => {
                if (index < 3) el.classList.add('active');
            });
        }, 100);
    }, []);

    return (
        <section id="home" className={heroStyles}>
            <div className={contentStyles}>
                <Heading
                    as="h1"
                    className={css({
                        fontSize: { base: "xl", md: "2xl", lg: "2xl" },
                        lineHeight: "tight",
                        letterSpacing: "widest",
                        marginBottom: "base",
                        textTransform: "uppercase",
                    }) + " reveal-up"}
                >
                    IN A WORLD THAT NEVER FORGETS,<br />
                    WE HELP YOU{" "}
                    <span className={css({
                        background: "linear-gradient(to right, white, white, #888)",
                        backgroundClip: "text",
                        color: "transparent",
                    })}>
                        STAY IN THE SHADOWS
                    </span>.
                </Heading>

                <div className={badgeContainerStyles + " reveal-up"}>
                    <Badge variant="text">DATA AUTONOMY</Badge>
                    <Badge variant="dot" />
                    <Badge variant="text">NEURAL PRIVACY</Badge>
                    <Badge variant="dot" />
                    <Badge variant="text">DIGITAL GHOSTING</Badge>
                </div>

                <div className={css({ paddingTop: "grandeur" }) + " reveal-up"}>
                    <Button variant="outline" size="lg">
                        [ INITIALIZE PROTOCOL ]
                    </Button>
                </div>
            </div>

            <div className={scrollIndicatorStyles}>
                <Text className={css({ fontFamily: "var(--font-jetbrains)", fontSize: "10px", letterSpacing: "widest" })}>
                    SCROLL TO PROCEED
                </Text>
                <div className={lineStyles} />
            </div>
        </section>
    );
};
