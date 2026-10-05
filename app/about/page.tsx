"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SystemVisual } from "@/components/visual/SystemVisual";
import { InfoCard } from "@/components/ui/Cards";
import { capabilities, principles } from "@/data/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          <section className="page-hero about-hero">
            <p className="eyebrow">{t("ABOUT // ARCHITECTURE & SYSTEMS")}</p>
            <h1>{t("Engineered for technical precision.")}</h1>
            <p>
              {t(
                "We design and build resilient digital foundations for enterprises and forward-thinking platforms.",
              )}
            </p>
            <div className="hero-status">
              <span>LOC: SFO // GLOBAL</span>
              <b>SYS_STATUS: ACTIVE</b>
            </div>
          </section>
          <section className="two-grid profile-grid">
            <article className="profile-card">
              <p className="eyebrow">PROFILE // 01</p>
              <p>
                {t(
                  "Nexora is a digital architecture and software engineering studio dedicated to eliminating friction from digital complexity. We specialize in robust system design, scalable web infrastructure, and high-fidelity product engineering that withstands demanding real-world conditions.",
                )}
              </p>
              <div className="mini-stats">
                <span>
                  PARADIGM <b>Deterministic</b>
                </span>
                <span>
                  COMPLIANCE <b>ISO/IEC 27001</b>
                </span>
                <span>
                  FAULT MATRIX <b>Zero Leakage</b>
                </span>
              </div>
            </article>
            <article className="profile-card">
              <h2>System Geometry</h2>
              <SystemVisual label="NODE_M" />
            </article>
          </section>
          <section className="page-section">
            <div className="section-heading">
              <p className="eyebrow">{t("CAPABILITIES // CORE STACK")}</p>
              <h2>{t("High-density computing engines.")}</h2>
              <p className="section-lede">
                {t(
                  "Structured protocols engineered for enterprise-grade execution under volatile concurrency.",
                )}
              </p>
            </div>
            <div className="two-grid">
              {capabilities.map((item) => (
                <InfoCard
                  key={item.title}
                  {...item}
                  title={t(item.title)}
                  description={t(item.description)}
                />
              ))}
            </div>
          </section>
          <section className="page-section banded">
            <div className="section-heading">
              <p className="eyebrow">METHODOLOGY // PHILOSOPHY</p>
              <h2>Systemic principles for faultless delivery.</h2>
            </div>
            <div className="principle-grid">
              {principles.map((item) => (
                <InfoCard
                  key={item.title}
                  number={`PRINCIPLE ${item.number}`}
                  title={item.title}
                  description={item.description}
                  meta={`CRIT_${item.number}`}
                />
              ))}
            </div>
          </section>
          <FinalCTA compact />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
