import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";
import { Button } from "../atoms/Button";

export const Footer = () => {
    const footerStyles = css({
        paddingX: "grandeur",
        paddingY: "structural",
        bg: "bg",
        borderTop: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.05)",
    });

    const gridStyles = css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
        gap: "grandeur",
        alignItems: "center",
    });

    return (
        <footer className={footerStyles}>
            <div className={gridStyles}>
                <div>
                    <Heading as="h3" className={css({ color: "accent", fontSize: "lg", marginBottom: "base" })}>
                        SOVEREIGN ENGINEERING PROTOCOL
                    </Heading>
                    <Text className={css({ maxWidth: "500px" })}>
                        Building high-stakes digital infrastructure for the leaders of the
                        South African industrial market. Zero-runtime CSS, PPR-first,
                        and phising-resistant security.
                    </Text>
                </div>

                <div className={css({ textAlign: { base: "left", md: "right" } })}>
                    <Heading as="h4" className={css({ fontSize: "base", marginBottom: "base" })}>
                        READY TO OUTPERFORM?
                    </Heading>
                    <Button variant="primary" size="lg">Request Performance Audit</Button>
                    <div className={css({ marginTop: "component", color: "text.secondary", fontSize: "xs" })}>
                        © 2026 LP WEB STUDIO. CAPE TOWN, ZA.
                    </div>
                </div>
            </div>
        </footer>
    );
};
