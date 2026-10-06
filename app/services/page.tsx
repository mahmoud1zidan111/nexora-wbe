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
              eyebrow={t("01 // ARCHITECTURAL OFFERINGS")}
              title=""
              marker={t("4 Systems Ready")}
            />
            <div className="two-grid">
              {services.map((service) => (
                <InfoCard key={service.title} {...service} title={t(service.title)} description={t(service.description)} tags={service.tags.map(t)} />
              ))}
            </div>
          </section>
          <section className="feature-strip">
            <div className="m-visual">
              <img
                src="https://res.cloudinary.com/dricl4jwn/image/upload/v1790393554/ChatGPT_Image_26_%D8%B3%D8%A8%D8%AA%D9%85%D8%A8%D8%B1_2026_06_30_31_%D8%B5_zmqvbj.png"
                alt="Nexora software architecture and web development systems overview"
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
              eyebrow={t("02 // DELIVERABLES SPECIFICATION")}
              title=""
              marker={t("SPEC_VER: 2025.1")}
            />
            <div className="two-grid deliverable-grid">
              {deliverables.map(([title, description]) => (
                <InfoCard key={title} title={t(title)} description={t(description)} />
              ))}
            </div>
          </section>
          <section className="page-section">
            <SectionHeading
              eyebrow={t("03 // ENGAGEMENT PROTOCOLS")}
              title=""
              marker={t("Structured Collaboration")}
            />
            <div className="two-grid">
              <InfoCard
                number={t("MODEL 01 // MILESTONE PROTOCOL")}
                title={t("Project-Based Execution")}
                description={t("Scoped milestone delivery for well-defined technical specifications and product builds.")}
                tags={[
                  t("Explicit deliverables mapped to verification criteria"),
                  t("Fixed timeline windows"),
                  t("Formal release signoffs"),
                ]}
              >
                <span className="w-full sm:w-auto auto !pt-4 "></span>

                <Button
                  href="/contact"
                  className="w-full sm:w-auto auto !bg-[var(--accent-2)] !text-[#08111f]  "
                >
                  {t("Engage Milestones")}
                </Button>
              </InfoCard>
              <InfoCard
                number={t("MODEL 02 // RETAINER PROTOCOL")}
                title={t("Dedicated Retainer")}
                description={t("Ongoing architectural leadership, sprint-based feature development, and continuous platform evolution.")}
                tags={[
                  t("Sprint priority"),
                  t("Direct executive advisory"),
                  t("Emergency incident response"),
                ]}
              >
                <span className="w-full sm:w-auto auto !pt-4 "></span>
                <Button
                  href="/contact"
                  className="w-full sm:w-auto auto !bg-[var(--accent-2)] !text-[#08111f]  "
                >
                  {t("Retain Advisory")}
                </Button>
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
