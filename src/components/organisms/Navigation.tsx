import { css, cx } from "../../../styled-system/css";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Typography";

export const Navigation = () => {
    const navStyles = css({
        width: "100%",
        height: "10vh",
        maxHeight: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "grandeur",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        bg: "rgba(18, 18, 18, 0.8)",
    });

    const logoStyles = css({
        fontSize: "lg",
        color: "accent",
        letterSpacing: "0.2em",
    });

    const linksStyles = css({
        display: { base: "none", md: "flex" },
        gap: "atmospheric",
        alignItems: "center",
    });

    const linkItemStyles = css({
        fontSize: "xs",
        color: "text.secondary",
        textTransform: "uppercase",
        letterSpacing: "widest",
        cursor: "pointer",
        transition: "color 0.2s",
        _hover: { color: "accent" },
    });

    return (
        <nav className={navStyles}>
            <div className={logoStyles}>
                <Heading as="h2" className={css({ fontSize: "lg", m: 0 })}>GOLDEN ENGINE</Heading>
            </div>

            <div className={linksStyles}>
                <span className={linkItemStyles}>Solutions</span>
                <span className={linkItemStyles}>Performance</span>
                <span className={linkItemStyles}>Security</span>
                <span className={linkItemStyles}>ROI</span>
            </div>

            <div>
                <Button variant="primary" size="sm">Get Audited</Button>
            </div>
        </nav>
    );
};
