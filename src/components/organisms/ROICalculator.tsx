"use client";

import { useState } from "react";
import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";

export const ROICalculator = () => {
    const [revenue, setRevenue] = useState(1000000);
    const [conversion, setConversion] = useState(2);

    const projectedConversion = conversion * 1.5; // 50% increase
    const currentROI = (revenue * (conversion / 100));
    const projectedROI = (revenue * (projectedConversion / 100));
    const lift = projectedROI - currentROI;

    const containerStyles = css({
        paddingX: "grandeur",
        paddingY: "grandeur",
        bg: "rgba(255, 215, 0, 0.01)",
        borderY: "1px solid",
        borderColor: "glass.border",
    });

    const gridStyles = css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
        gap: "grandeur",
        alignItems: "center",
    });

    const formStyles = css({
        bg: "glass.bg",
        backdropFilter: "blur(glass)",
        padding: "atmospheric",
        border: "1px solid",
        borderColor: "glass.border",
        display: "flex",
        flexDirection: "column",
        gap: "component",
        transition: "border-color 0.3s ease",
        _hover: {
            borderColor: "accent.DEFAULT",
        }
    });

    const resultStyles = css({
        textAlign: { base: "center", lg: "left" },
    });

    return (
        <section className={containerStyles}>
            <div className={gridStyles}>
                <div className={formStyles}>
                    <Heading as="h3" className={css({ color: "accent", fontSize: "lg" })}>
                        PERFORMANCE LIFT CALCULATOR
                    </Heading>
                    <Text>Input your current B2B metrics to see the Golden Engine impact.</Text>

                    <Input
                        label="Annual Revenue (R)"
                        type="number"
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                    />
                    <Input
                        label="Current Conversion Rate (%)"
                        type="number"
                        value={conversion}
                        onChange={(e) => setConversion(Number(e.target.value))}
                    />

                    <Button variant="primary">Generate Full Report</Button>
                </div>

                <div className={resultStyles}>
                    <Heading as="h2" className={css({ fontSize: "2xl", marginBottom: "base" })}>
                        R{lift.toLocaleString()} <span className={css({ color: "accent" })}>ANNUAL LIFT</span>
                    </Heading>
                    <Text className={css({ fontSize: "lg", color: "text.primary" })}>
                        By optimizing LCP and INP, industrial leaders see an average
                        <span className={css({ color: "accent", fontWeight: "bold" })}> 50% lift </span>
                        in conversion efficiency.
                    </Text>
                    <div className={css({
                        marginTop: "sectional",
                        padding: "component",
                        bg: "rgba(255, 215, 0, 0.1)",
                        color: "accent",
                        fontSize: "sm",
                        fontWeight: "bold",
                        display: "inline-block"
                    })}>
                        ESTIMATED TTFB REDUCTION: 85%
                    </div>
                </div>
            </div>
        </section>
    );
};
