"use client";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { InfoCard } from "@/components/ui/Cards";
import { smartCafeFeatures, smartCafeImages } from "@/data/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function SmartCafePage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          {/* Smart Cafe Hero */}
          <section className="smart-hero">
            <div>
              <p className="eyebrow">
                {t("NEXORA PRODUCTS // IN-HOUSE PLATFORM")}
              </p>

              <h1>{t("Smart Cafe")}</h1>

              <p>
                {t(
                  "A streamlined ordering and operations experience engineered for modern cafes, live counters, kitchen teams, and reliable service flow.",
                )}
              </p>

              <div className="tag-row">
                <span>{t("Real-time Sync")}</span>
                <span>{t("Kitchen Display")}</span>
                <span>{t("Contactless Pay")}</span>
              </div>

              <div className="button-row mt-6">
                <Button
                  href="/contact"
                  className="w-full sm:w-auto auto !bg-[var(--accent-2)] !text-[#08111f]"
                >
                  {t("Deploy Smart Cafe")}
                </Button>

                <Button
                  href="/work"
                  variant="secondary"
                  className="w-full sm:w-auto auto !bg-gray-900"
                >
                  {t("View Product Systems")}
                </Button>
              </div>
            </div>

            {/* Smart Cafe Visual */}
            <div className="cafe-console">
              <img
                src={smartCafeImages.image1}
                alt={t("Smart Cafe dashboard")}
                className="cafe-console-image"
              />

              <div className="cafe-console-overlay">
                <div className="terminal-card">
                  <span>
                    {t("PAYMENT API")} <b>READY</b>
                  </span>

                  <span>
                    {t("KDS QUEUE")} <b>0 PENDING</b>
                  </span>

                  <span>
                    {t("MENU STATE")} <b>ONLINE</b>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Stack */}
          <section className="page-section">
            <div className="section-heading">
              <p className="eyebrow">{t("OPERATIONS // FEATURE STACK")}</p>

              <h2>{t("Built for cafe throughput.")}</h2>

              <p className="section-lede">
                {t(
                  "Smart Cafe keeps ordering, preparation, payments, and operational visibility inside one precise Nexora product system.",
                )}
              </p>
            </div>

            <div className="two-grid">
              {smartCafeFeatures.map((feature, index) => (
                <InfoCard
                  key={feature}
                  number={`0${index + 1}`}
                  title={t(feature)}
                  description={t(
                    "A focused production capability aligned with cafe operators, counter staff, and kitchen dispatch reliability.",
                  )}
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
