import { css, cx } from "../../../styled-system/css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
    const containerStyles = css({
        display: "flex",
        flexDirection: "column",
        gap: "hairline",
        width: "100%",
    });

    const labelStyles = css({
        fontSize: "xs",
        color: "text.secondary",
        fontFamily: "var(--font-outfit)",
        textTransform: "uppercase",
    });

    const inputStyles = css({
        height: "48px",
        bg: "rgba(255, 255, 255, 0.05)",
        border: "1px solid",
        borderColor: error ? "red.500" : "rgba(255, 255, 255, 0.1)",
        paddingX: "component",
        color: "text.primary",
        fontFamily: "var(--font-inter)",
        fontSize: "base",
        outline: "none",
        transition: "all 0.2s ease-in-out",

        _focus: {
            borderColor: "accent",
            bg: "rgba(255, 255, 255, 0.08)",
        },

        _placeholder: {
            color: "rgba(255, 255, 255, 0.3)",
        }
    });

    return (
        <div className={containerStyles}>
            {label && <label className={labelStyles}>{label}</label>}
            <input className={cx(inputStyles, className)} {...props} />
            {error && <span className={css({ color: "red.500", fontSize: "xs" })}>{error}</span>}
        </div>
    );
};
