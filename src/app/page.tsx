import { Navigation } from "../components/organisms/Navigation";
import { EclipseHero } from "../components/organisms/EclipseHero";
import { CapabilitiesGrid } from "../components/organisms/CapabilitiesGrid";
import { ProtocolSection } from "../components/organisms/ProtocolSection";
import { ManifestoSection } from "../components/organisms/ManifestoSection";
import { ContactSection } from "../components/organisms/ContactSection";
import { DataNodesBackground } from "../components/organisms/DataNodesBackground";
import { MorphingDot } from "../components/organisms/MorphingDot";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({
      minHeight: "100vh",
      bg: "radial-gradient(circle at center, #0d0d0d 0%, #000000 100%)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
    })}>
      {/* Global scanlines overlay is added via globals.css body::before */}

      {/* Background Data Nodes */}
      <DataNodesBackground />

      {/* Navigation */}
      <Navigation />

      {/* Morphing Dot/Line Artifact */}
      <MorphingDot />

      {/* Main Content */}
      <main style={{ viewTransitionName: "main-content" }} className={css({ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" })}>
        <EclipseHero />
        <CapabilitiesGrid />
        <ProtocolSection />
        <ManifestoSection />
        <ContactSection />
      </main>
    </div>
  );
}
