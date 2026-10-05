"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { InfoCard } from "@/components/ui/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const deliverables = [
  [
    "Technical Specifications & System Schemas",
    "End-to-end entity relationship graphs, network topologies, API contractual definitions, and modular boundary maps.",
  ],
  [
    "Production React / TypeScript Implementations",
    "Strict typing, modular architectural encapsulation, unit test suites, and deterministic client state containers.",
  ],
  [
    "Design Systems & Component Libraries",
    "Token-based primitive engines, WCAG AA compliant contrast mechanics, dynamic theming, and layout guidelines.",
  ],
  [
    "Performance & Security Optimization Audits",
    "Core Web Vitals tuning, payload serialization compression, zero-trust token handshakes, and asset tree-shaking.",
  ],
];

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          <section className="page-hero panel-hero">
            <div>
              <p className="eyebrow">{t("CAPABILITIES & DISCIPLINES // 03")}</p>
              <h1>{t("Core Services")}</h1>
              <p>
                {t(
                  "Targeted software engineering and technical architecture built to scale.",
                )}
              </p>
            </div>
            <div className="terminal-card compact">
              <span>NODE_ACTIVE</span>
              <b>SYS_LAYER_CORE // ONLINE</b>
            </div>
          </section>
          <section className="page-section">
            <SectionHeading
              eyebrow="01 // ARCHITECTURAL OFFERINGS"
              title=""
              marker="4 Systems Ready"
            />
            <div className="two-grid">
              {services.map((service) => (
                <InfoCard key={service.title} {...service} />
              ))}
            </div>
          </section>
          <section className="feature-strip">
            <div className="m-visual">
              <img
                src="https://res.cloudinary.com/dricl4jwn/image/upload/v1790393554/ChatGPT_Image_26_%D8%B3%D8%A8%D8%AA%D9%85%D8%A8%D8%B1_2026_06_30_31_%D8%B5_zmqvbj.png"
                alt=""
              />
            </div>
            <div>
              <p className="eyebrow">{t("HARDWARE & LOGIC TOPOLOGY")}</p>
              <h2>{t("Deterministic Execution by Design")}</h2>
              <p>
                {t(
                  "Every layer from network ingress to database indexing is modeled strictly before construction, guaranteeing verifiable operational integrity and resilient zero-downtime rollouts.",
                )}
              </p>
            </div>
          </section>
          <section className="page-section">
            <SectionHeading
              eyebrow="02 // DELIVERABLES SPECIFICATION"
              title=""
              marker="SPEC_VER: 2025.1"
            />
            <div className="two-grid deliverable-grid">
              {deliverables.map(([title, description]) => (
                <InfoCard key={title} title={title} description={description} />
              ))}
            </div>
          </section>
          <section className="page-section">
            <SectionHeading
              eyebrow="03 // ENGAGEMENT PROTOCOLS"
              title=""
              marker="Structured Collaboration"
            />
            <div className="two-grid">
              <InfoCard
                number="MODEL 01 // MILESTONE PROTOCOL"
                title="Project-Based Execution"
                description="Scoped milestone delivery for well-defined technical specifications and product builds."
                tags={[
                  "Explicit deliverables mapped to verification criteria",
                  "Fixed timeline windows",
                  "Formal release signoffs",
                ]}
              >
                <Button href="/contact">Engage Milestones</Button>
              </InfoCard>
              <InfoCard
                number="MODEL 02 // RETAINER PROTOCOL"
                title="Dedicated Retainer"
                description="Ongoing architectural leadership, sprint-based feature development, and continuous platform evolution."
                tags={[
                  "Sprint priority",
                  "Direct executive advisory",
                  "Emergency incident response",
                ]}
              >
                <Button href="/contact">Retain Advisory</Button>
              </InfoCard>
            </div>
          </section>
          <FinalCTA compact />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
