"use client";

import { css, cx } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { TrustBadge } from "../molecules/TrustBadge";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

export const Hero = () => {
    const heroStyles = css({
        paddingX: "grandeur",
        paddingY: "grandeur",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        textAlign: "center",
        bg: "bg",
        position: "relative",
        overflow: "hidden",
    });

    // Industrial Grid Pattern
    const gridPattern = css({
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        pointerEvents: "none",
    });

    const contentStyles = css({
        maxWidth: "1100px",
        zIndex: 1,
    });

    const badgeContainer = css({
        display: "flex",
        gap: "base",
        justifyContent: "center",
        marginBottom: "sectional",
    });

    return (
        <section className={heroStyles}>
            <div className={gridPattern} />

            {/* Background Gradient Detail */}
            <div className={css({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80vw",
                height: "60vh",
                background: "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
            })} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1.5
                }}
                className={contentStyles}
            >
                <div className={badgeContainer}>
                    <TrustBadge icon={<Zap size={14} />} label="Industrial Speed" />
                    <TrustBadge icon={<ShieldCheck size={14} />} label="Zero-Trust Secure" />
                    <TrustBadge icon={<BarChart3 size={14} />} label="99.9% Up-time" />
                </div>

                <Heading as="h1" className={css({
                    fontSize: "2xl",
                    lineHeight: 1.05,
                    letterSpacing: "tighter",
                    marginBottom: "component",
                    textTransform: "uppercase",
                })}>
                    The Golden Engine <br />
                    <span className={css({
                        color: "accent.DEFAULT",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.2)"
                    })}>Sovereign Automation</span>
                </Heading>

                <Text className={css({
                    fontSize: "lg",
                    maxWidth: "800px",
                    marginX: "auto",
                    marginBottom: "structural",
                    color: "text.primary"
                })}>
                    Deploy high-stakes digital infrastructure optimized for the South African industrial market.
                    10x faster than legacy WordPress. Zero-runtime CSS. PPR-first.
                </Text>

                <div className={css({ display: "flex", gap: "component", justifyContent: "center" })}>
                    <Button variant="primary" size="lg">Initialize Infrastructure</Button>
                    <Button variant="outline" size="lg">Review ROI Analysis</Button>
                </div>
            </motion.div>
        </section>
    );
};
