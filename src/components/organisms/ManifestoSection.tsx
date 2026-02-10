import { css } from "../../../styled-system/css";
import { Heading, Text } from "../atoms/Typography";

export const ManifestoSection = () => {
    const sectionStyles = css({
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
    });

    const backgroundStyles = css({
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1494587416117-f10426b7044f?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.2,
        filter: "contrast(150%) grayscale(100%) blur(2px)",
        mixBlendMode: "overlay",
    });

    const gradientOverlayStyles = css({
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, #000 0%, transparent 50%, #000 100%)",
        zIndex: 0,
    });

    const contentStyles = css({
        position: "relative",
        zIndex: 10,
        maxWidth: "1024px",
        paddingX: "sectional",
        textAlign: "center",
    });

    return (
        <section id="manifesto" className={sectionStyles}>
            <div className={backgroundStyles} />
            <div className={gradientOverlayStyles} />

            <div className={contentStyles}>
                <Heading
                    as="h2"
                    className={css({
                        fontSize: { base: "xl", md: "2xl", lg: "2xl" },
                        marginBottom: "sectional",
                        letterSpacing: "tighter",
                        textTransform: "uppercase",
                        lineHeight: "none",
                        mixBlendMode: "lighten",
                    })}
                >
                    Privacy is not a luxury.<br />
                    It is a{" "}
                    <span className="glitch-hover" style={{ cursor: "pointer" }}>
                        defense
                    </span>.
                </Heading>
                <Text className={css({
                    fontSize: { base: "sm", md: "lg" },
                    lineHeight: "relaxed",
                    maxWidth: "768px",
                    marginX: "auto",
                    letterSpacing: "wide",
                    color: "rgb(200, 200, 200)",
                })}>
                    ECLIPSE LOGIC was born from the{" "}
                    <span className={css({
                        color: "white",
                        transition: "color 0.3s",
                        cursor: "pointer",
                        _hover: { color: "accent" }
                    })}>
                        void
                    </span>.
                    {" "}We believe that in the age of total surveillance, the only way to be free is to be{" "}
                    <span className={css({
                        color: "white",
                        transition: "color 0.3s",
                        cursor: "pointer",
                        _hover: { color: "accent" }
                    })}>
                        invisible
                    </span>.
                    {" "}We don't just protect data; we erase the reason for its existence.
                </Text>
            </div>
        </section>
    );
};
