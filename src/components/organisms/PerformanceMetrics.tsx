import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const PerformanceMetrics = async () => {
    // Simulate industrial data streaming / dynamic calculation
    await sleep(1500);

    const containerStyles = css({
        padding: "sectional",
        bg: "glass.bg",
        backdropFilter: "blur(glass)",
        border: "1px dashed",
        borderColor: "glass.border",
        marginTop: "component",
        display: "flex",
        gap: "structural",
        justifyContent: "space-around",
        transition: "border-color 0.3s ease",
        _hover: {
            borderColor: "accent.DEFAULT",
        }
    });

    return (
        <div className={containerStyles}>
            <div className={css({ textAlign: "center" })}>
                <div className={css({ color: "accent", fontSize: "lg", fontWeight: "bold" })}>2.4ms</div>
                <div className={css({ fontSize: "xs", color: "text.secondary" })}>AVG LATENCY (CPT)</div>
            </div>
            <div className={css({ textAlign: "center" })}>
                <div className={css({ color: "accent", fontSize: "lg", fontWeight: "bold" })}>0.02</div>
                <div className={css({ fontSize: "xs", color: "text.secondary" })}>CLS VARIANCE</div>
            </div>
            <div className={css({ textAlign: "center" })}>
                <div className={css({ color: "accent", fontSize: "lg", fontWeight: "bold" })}>100.0</div>
                <div className={css({ fontSize: "xs", color: "text.secondary" })}>LIGHTHOUSE CORE</div>
            </div>
        </div>
    );
};
