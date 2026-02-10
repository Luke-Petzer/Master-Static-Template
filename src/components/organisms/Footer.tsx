import { css } from "../../../styled-system/css";
import { Code } from "../atoms/Typography";

export const Footer = () => {
    const footerStyles = css({
        position: "absolute",
        bottom: "sectional",
        width: "100%",
        textAlign: "center",
    });

    return (
        <footer className={footerStyles}>
            <Code className={css({ fontSize: "9px", color: "text.tertiary", letterSpacing: "widest" })}>
                LOCATION: CLASSIFIED <span className={css({ marginX: "hairline" })}>//</span> CONNECTION: ENCRYPTED <span className={css({ marginX: "hairline" })}>//</span> ECLIPSE LOGIC © 2024
            </Code>
        </footer>
    );
};
