"use client";

import { useEffect, useRef } from "react";
import { css, cx } from "../../../styled-system/css";

interface TurnstileProps {
    onVerify: (token: string) => void;
    className?: string;
}

export const Turnstile = ({ onVerify, className }: TurnstileProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamically load Cloudflare Turnstile script
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.turnstile && containerRef.current) {
                window.turnstile.render(containerRef.current, {
                    sitekey: "1x00000000000000000000AA", // Testing sitekey
                    callback: (token: string) => {
                        onVerify(token);
                    },
                });
            }
        };

        return () => {
            document.head.removeChild(script);
        };
    }, [onVerify]);

    const styles = css({
        marginTop: "base",
        display: "flex",
        justifyContent: "center",
    });

    return (
        <div className={cx(styles, className)}>
            <div ref={containerRef} />
        </div>
    );
};

// Type definition for window.turnstile
declare global {
    interface Window {
        turnstile: any;
    }
}
