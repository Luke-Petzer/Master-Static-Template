"use client";

import { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import { useScroll, useTransform, motion } from "framer-motion";

export const MorphingDot = () => {
    const { scrollY } = useScroll();
    const [isScrolling, setIsScrolling] = useState(false);

    // Define scroll range (0 to 80vh)
    const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    const scrollLimit = viewportHeight * 0.8;

    // Transform properties based on scroll
    const width = useTransform(scrollY, [0, scrollLimit], [16, typeof window !== "undefined" ? window.innerWidth : 1920]);
    const height = useTransform(scrollY, [0, scrollLimit], [16, 1]);
    const borderRadius = useTransform(scrollY, [0, scrollLimit], ["50%", "0%"]);
    const top = useTransform(scrollY, [0, scrollLimit], ["50%", "0%"]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollProgress = window.scrollY / scrollLimit;
            setIsScrolling(scrollProgress > 0.1 && scrollProgress < 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollLimit]);

    const dotStyles = css({
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, -50%) translateZ(0)",
        bg: "accent.DEFAULT",
        zIndex: 30,
        pointerEvents: "none",
        transition: "box-shadow 0.3s ease-in-out",
        willChange: "transform, width, height, border-radius",
    });

    return (
        <motion.div
            id="morphing-artifact"
            className={dotStyles + (!isScrolling ? " animate-pulse-core" : "")}
            style={{
                width,
                height,
                borderRadius,
                top,
                boxShadow: isScrolling ? "none" : undefined,
            }}
        />
    );
};
