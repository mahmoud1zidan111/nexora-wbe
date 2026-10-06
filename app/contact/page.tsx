"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const specs = [
  [
    "Architecture SLA",
    "24 Hours Guaranteed",
    "Technical feasibility review and preliminary structural telemetry returned by a senior lead.",
  ],
  [
    "Protocol",
    "TLS 1.3 / E2E",
    "Cryptographic forward secrecy enabled for secure project inquiry transmission.",
  ],
  [
    "NDA Provision",
    "Auto-Executable",
    "Submission immediately triggers standard mutual non-disclosure protections.",
  ],
  [
    "Lead System Architect",
    "Assigned Post-Receipt",
    "A domain-specialized platform director leads initial technical scoping.",
  ],
];
export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16 lg:pb-0">
        <PageContainer>
          <section className="grid items-center gap-x-[clamp(18px,2.5vw,48px)] gap-y-6 border-b border-[var(--line)] py-[clamp(34px,4.5vw,64px)] lg:grid-cols-[minmax(180px,.72fr)_minmax(220px,.78fr)_minmax(280px,1.2fr)_minmax(230px,.75fr)] lg:py-[clamp(42px,4vw,70px)]">
            <p className="m-0 w-fit max-w-full rounded-[4px] bg-[var(--accent-soft)] px-2.5 py-1.5 font-[var(--font-mono)] text-[10px] font-bold leading-[1.5] tracking-[0.13em] text-[var(--accent-2)] sm:text-[11px] md:text-[12px]">
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent-2)] align-[-1px] shadow-[0_0_18px_rgba(105,215,255,.55)]" />
              {t("PROJECT INQUIRY // INITIATE")}
            </p>

            <h2
              className=" m-0
    w-full
    max-w-none
    whitespace-nowrap
    font-[var(--font-sans)]
    text-[clamp(28px,4.5vw,74px)]
    font-medium
    leading-[.98]
    tracking-[-0.06em] text-[var(--text-strong)] "
            >
              {t("Start a Project")}
            </h2>

            <p className="m-0 max-w-[46ch] text-[clamp(15px,1.15vw,20px)] leading-[1.65] text-[var(--muted)]">
              {t(
                "Share your system requirements, platform scope, or development objectives.",
              )}
            </p>

            <span className="inline-flex w-full max-w-[340px] items-center rounded-[8px] border border-[var(--line)] bg-[var(--surface)] px-4 py-4 font-[var(--font-mono)] text-[10px] font-bold leading-[1.5] tracking-[0.12em] text-[var(--accent-2)] sm:px-5 sm:py-5 sm:text-[11px] md:text-[12px] lg:justify-self-end">
              {t("TRANSMISSION_NODE: DIRECT_ONLINE")}
            </span>
          </section>

          <section className="grid min-w-0 grid-cols-1 items-start gap-[clamp(20px,2.5vw,38px)] py-[clamp(28px,4vw,52px)] xl:grid-cols-[minmax(0,1.78fr)_minmax(320px,.9fr)]">
            <div className="min-w-0">
              <ContactForm />

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:mt-6">
                <span className="rounded-[6px] border border-[var(--line-soft)] bg-[rgba(128,146,171,.06)] px-4 py-3.5 font-[var(--font-mono)] text-[10px] font-bold leading-[1.45] tracking-[0.11em] text-[var(--faint)] sm:px-3 sm:py-4">
                  <HugeiconsIcon
                    className="inline align-[-1px]   mr-2  rtl-flip"
                    icon={ArrowRight01Icon}
                    size={20}
                    color="#69D7FF"
                    strokeWidth={1.5}
                  />{" "}
                  <b className="block !text-[15px] !leading-[1.2] !text-[var(--accent-2)]">
                    24h
                  </b>
                  {t("Response_Velocity")}
                </span>
                <span className="rounded-[6px] border border-[var(--line-soft)] bg-[rgba(128,146,171,.06)] px-4 py-3.5 font-[var(--font-mono)] text-[10px] font-bold leading-[1.45] tracking-[0.11em] text-[var(--faint)] sm:px-3 sm:py-4">
                  <b className="block !text-[15px] !leading-[1.2] !text-[var(--accent-2)]">
                    Tier IV
                  </b>
                  {t("Security_Grade")}
                </span>
                <span className="rounded-[6px] border border-[var(--line-soft)] bg-[rgba(128,146,171,.06)] px-4 py-3.5 font-[var(--font-mono)] text-[10px] font-bold leading-[1.45] tracking-[0.11em] text-[var(--faint)] sm:px-3 sm:py-4">
                  <b className="block !text-[15px] !leading-[1.2] !text-[var(--accent-2)]">
                    L6_ARCH
                  </b>
                  {t("Routing_Target")}
                </span>
              </div>
            </div>

            <aside className="grid min-w-0 gap-[clamp(20px,2.5vw,34px)]">
              <div className="min-w-0 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-[clamp(18px,2.4vw,38px)]">
                <h2 className="m-0 font-[var(--font-mono)] text-[clamp(14px,1.2vw,18px)] font-bold leading-[1.25] tracking-[0.14em] text-[var(--text)]">
                  {t("System Engagement Spec")}
                </h2>

                <div className="mt-6 grid gap-4 sm:mt-7 lg:gap-5">
                  {specs.map(([k, v, d]) => (
                    <article
                      key={k}
                      className="min-w-0 rounded-[6px] bg-[#08111f] px-[clamp(16px,1.7vw,24px)] py-[clamp(18px,1.9vw,26px)]"
                    >
                      <span className="block font-[var(--font-mono)] text-[10px] font-bold leading-[1.4] tracking-[0.12em] text-[var(--faint)] sm:text-[11px]">
                        {t(k)}
                      </span>
                      <h3 className="m-0 mt-3 font-[var(--font-sans)] text-[clamp(20px,1.8vw,28px)] font-medium leading-[1.18] tracking-[-0.02em] text-[var(--text-strong)]">
                        {t(v)}
                      </h3>
                      <p className="m-0 mt-3 text-[clamp(14px,1.08vw,17px)] leading-[1.65] text-[var(--muted)]">
                        {t(d)}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}
