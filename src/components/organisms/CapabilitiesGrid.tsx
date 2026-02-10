import { css } from "../../../styled-system/css";
import { Heading, Code } from "../atoms/Typography";
import { CapabilityCard } from "../molecules/CapabilityCard";

export const CapabilitiesGrid = () => {
    const sectionStyles = css({
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingX: { base: "component", md: "structural", lg: "grandeur" },
        paddingY: "grandeur",
        zIndex: 10,
        bg: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(2px)",
    });

    const containerStyles = css({
        width: "100%",
        maxWidth: "1800px",
        marginX: "auto",
    });

    const headerStyles = css({
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "grandeur",
        borderBottom: "1px solid",
        borderColor: "glass.borderDim",
        paddingBottom: "component",
        flexWrap: "wrap",
        gap: "component",
    });

    const gridStyles = css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
        gap: 0,
        borderTop: "1px solid",
        borderLeft: "1px solid",
        borderColor: "glass.border",
    });

    return (
        <section id="capabilities" className={sectionStyles}>
            <div className={containerStyles}>
                <div className={headerStyles}>
                    <Heading as="h2" className={css({ fontSize: { base: "lg", md: "xl" }, letterSpacing: "widest" })}>
                        CAPABILITIES
                    </Heading>
                    <Code>[ STATUS: ACTIVE ]</Code>
                </div>

                <div className={gridStyles}>
                    <CapabilityCard
                        title="TRACE ERASURE"
                        description="Permanent removal of historical digital footprints across indexed databases, cached archives, and deep web directories. We don't just hide data; we incinerate the record."
                        hoverText="EXECUTING PURGE..."
                        isActive
                    />
                    <CapabilityCard
                        title="SCRAPER BLACKOUT"
                        description="Deployment of neural noise to confuse and repel invasive AI training bots. Your data becomes poison to their models, rendering it statistically useless."
                        hoverText="DEPLOYING NOISE..."
                        isActive
                    />
                    <CapabilityCard
                        title="IDENTITY SYNTHESIS"
                        description="Creation of &quot;digital decoys&quot; and phantom signals to mask your true neural signature. Move through the network while appearing to be someone else entirely."
                        hoverText="GENERATING GHOST..."
                        isActive
                    />
                </div>
            </div>
        </section>
    );
};
