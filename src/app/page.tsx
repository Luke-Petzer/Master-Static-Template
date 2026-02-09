import { Suspense } from "react";
import { Navigation } from "../components/organisms/Navigation";
import { Hero } from "../components/organisms/Hero";
import { ServiceGrid } from "../components/organisms/ServiceGrid";
import { ROICalculator } from "../components/organisms/ROICalculator";
import { PerformanceMetrics } from "../components/organisms/PerformanceMetrics";
import { Footer } from "../components/organisms/Footer";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({ bg: "bg", minHeight: "100vh" })}>
      {/* Static Shell Components */}
      <Navigation />

      <main>
        <Hero />

        <ServiceGrid />

        {/* Dynamic / Streaming Layer (PPR) */}
        <section className={css({ paddingX: "grandeur" })}>
          <Suspense fallback={<div className={css({
            height: "100px",
            width: "100%",
            bg: "rgba(255,255,255,0.02)",
            opacity: 0.5
          })} />}>
            <PerformanceMetrics />
          </Suspense>
        </section>

        <ROICalculator />
      </main>

      <Footer />
    </div>
  );
}
