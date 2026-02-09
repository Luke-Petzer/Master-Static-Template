import { css, cx } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { MetricCard } from "../molecules/MetricCard";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

export const ServiceGrid = () => {
    const sectionStyles = css({
        paddingX: "grandeur",
        paddingY: "grandeur",
        bg: "bg",
        borderBottom: "1px solid",
        borderColor: "glass.border",
    });

    const gridStyles = css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
        gap: "sectional",
        marginTop: "grandeur",
    });

    return (
        <section className={sectionStyles}>
            <div className={css({ maxWidth: "800px", marginBottom: "structural" })}>
                <Heading as="h2" className={css({ fontSize: "xl", color: "accent" })}>
                    INDUSTRIAL PERFORMANCE LAYERS
                </Heading>
                <Text className={css({ fontSize: "lg" })}>
                    We deploy specialized infrastructure modules that eliminate performance debt
                    and secure your digital sovereignty.
                </Text>
            </div>

            <div className={gridStyles}>
                <MetricCard
                    icon={<Zap />}
                    value="< 0.8s"
                    label="FCP Standard"
                    description="Ultra-fast First Contentful Paint on 4G networks across South Africa."
                />
                <MetricCard
                    icon={<ShieldCheck />}
                    value="Zero-Trust"
                    label="Security Layer"
                    description="Cloudflare Turnstile and phising-resistant MFA logic by default."
                />
                <MetricCard
                    icon={<Cpu />}
                    value="1/10th"
                    label="Resource Load"
                    description="Optimized AVIF assets and Zero-runtime CSS for maximum efficiency."
                />
            </div>
        </section>
    );
};
