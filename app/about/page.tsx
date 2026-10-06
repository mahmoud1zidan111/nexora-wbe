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
          </section>
          <section className="  !w-full sm:w-auto auto">
            <article className="profile-card !w-full sm:w-auto auto">
              <p className="eyebrow">{t("PROFILE // 01")}</p>
              <p>
                {t(
                  "Nexora is a digital architecture and software engineering studio dedicated to eliminating friction from digital complexity. We specialize in robust system design, scalable web infrastructure, and high-fidelity product engineering that withstands demanding real-world conditions.",
                )}
              </p>
              <div className="mini-stats">
                <span>
                  {t("PARADIGM")} <b>{t("Deterministic")}</b>
                </span>
                <span>
                  {t("COMPLIANCE")} <b>ISO/IEC 27001</b>
                </span>
                <span>
                  {t("FAULT MATRIX")} <b>{t("Zero Leakage")}</b>
                </span>
              </div>
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
              <p className="eyebrow">{t("METHODOLOGY // PHILOSOPHY")}</p>
              <h2>{t("Systemic principles for faultless delivery.")}</h2>
            </div>
            <div className="principle-grid bordered 1px border-white/10">
              {principles.map((item) => (
                <InfoCard
                  key={item.title}
                  number={`PRINCIPLE ${item.number}`}
                  title={t(item.title)}
                  description={t(item.description)}
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
