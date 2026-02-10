"use client";

import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { TerminalBox } from "../molecules/TerminalBox";
import { useEffect, useState } from "react";

const SYSTEM_MESSAGES = [
    "Scanning local ports...",
    "De-indexing cache entry 0x992... SUCCESS",
    "Repelling crawler bot [GoogleBot]...",
    "Encrypting session...",
    "Masking IP address...",
    "Deleting browser history...",
    "Establishing shadow tunnel...",
];

export const ProtocolSection = () => {
    const [logMessage, setLogMessage] = useState("SYSTEM_LOG: Initializing... Waiting for input.");

    useEffect(() => {
        const interval = setInterval(() => {
            const msg = SYSTEM_MESSAGES[Math.floor(Math.random() * SYSTEM_MESSAGES.length)];
            setLogMessage(`SYSTEM_LOG: ${msg}`);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const sectionStyles = css({
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: { base: "component", md: "structural" },
        paddingY: "grandeur",
        zIndex: 10,
    });

    const contentStyles = css({
        width: "100%",
        maxWidth: "1024px",
        marginX: "auto",
    });

    const phasesStyles = css({
        fontFamily: "var(--font-jetbrains)",
        fontSize: { base: "sm", md: "base" },
    });

    const phaseStyles = (opacity: number) => css({
        display: "flex",
        gap: "component",
        marginBottom: "base",
        opacity,
        transition: "opacity 0.3s ease-in-out",
        _hover: {
            opacity: 1,
        }
    });

    const arrowStyles = (color: string) => css({
        color,
    });

    const header = (
        <>
            <span className={css({ color: "accent" })}>ROOT_ACCESS_GRANTED</span>
            <span className={css({ color: "text.secondary", fontSize: "xs" })}>PID: 9942</span>
        </>
    );

    const footer = logMessage;

    return (
        <section id="protocol" className={sectionStyles}>
            <div className={contentStyles}>
                <TerminalBox header={header} footer={footer}>
                    <div className={phasesStyles}>
                        <div className={phaseStyles(1)}>
                            <span className={arrowStyles("#FF4500")}>&gt;</span>
                            <div>
                                <Heading as="h4" className={css({ marginBottom: "4px", fontSize: "base", letterSpacing: "widest" })}>
                                    PHASE I: IDENTIFICATION
                                </Heading>
                                <Text className={css({ fontSize: "sm" })}>
                                    Mapping the sprawl of your digital existence across visible and dark nodes.
                                </Text>
                            </div>
                        </div>

                        <div className={phaseStyles(0.5)}>
                            <span className={arrowStyles("#666")}>&gt;</span>
                            <div>
                                <Heading as="h4" className={css({ marginBottom: "4px", fontSize: "base", letterSpacing: "widest" })}>
                                    PHASE II: NEUTRALIZATION
                                </Heading>
                                <Text className={css({ fontSize: "sm" })}>
                                    Targeted strikes on data clusters holding your metadata. Forceful deletion.
                                </Text>
                            </div>
                        </div>

                        <div className={phaseStyles(0.3)}>
                            <span className={arrowStyles("#333")}>&gt;</span>
                            <div>
                                <Heading as="h4" className={css({ marginBottom: "4px", fontSize: "base", letterSpacing: "widest" })}>
                                    PHASE III: OBFUSCATION
                                </Heading>
                                <Text className={css({ fontSize: "sm" })}>
                                    Implementing the permanent "Shadow Layer" around your active hardware.
                                </Text>
                            </div>
                        </div>
                    </div>
                </TerminalBox>
            </div>
        </section>
    );
};
