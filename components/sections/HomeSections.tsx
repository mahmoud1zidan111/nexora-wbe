"use client";

import { Button } from "@/components/ui/Button";
import { InfoCard } from "@/components/ui/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemVisual } from "@/components/visual/SystemVisual";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  capabilities,
  principles,
  processSteps,
  projects,
  services,
} from "@/data/content";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { CodeXmlIcon } from "@hugeicons/core-free-icons";
export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{t("NEXORA // SOFTWARE & DIGITAL SOLUTIONS")}</p>
        <h1>{t("Technology should make complexity clearer.")}</h1>
        <p className="hero-lede">
          {t(
            "Nexora builds professional websites, web applications, custom software, and scalable digital products-engineered with clarity and reliability.",
          )}
        </p>
        <div className="button-row">
          <Button
            href="/contact"
            className="w-full sm:w-auto auto  !bg-[var(--accent-2)]     !text-[#08111f] "
          >
            {t("Start a Project")}
          </Button>
          <Button
            href="/work"
            variant="secondary"
            className="w-full sm:w-auto auto"
          >
            {t("Explore Our Work")}
          </Button>
        </div>
        <dl className="hero-metrics">
          <div>
            <dt>LATENCY TARGET</dt>
            <dd>&lt; 85ms CORE</dd>
          </div>
          <div>
            <dt>ARCHITECTURE</dt>
            <dd>MODULAR V4.2</dd>
          </div>
          <div>
            <dt>UPTIME SLA</dt>
            <dd>99.98% VERIFIED</dd>
          </div>
        </dl>
      </div>
      <SystemVisual />
    </section>
  );
}

export function Capabilities() {
  const { t } = useLanguage();
  return (
    <section className="page-section">
      <SectionHeading
        eyebrow={t("CAPABILITIES // CORE SPECS")}
        title={t("Engineered Foundations")}
        description={t(
          "Structural rigor engineered into every digital deployment for resilient business operation.",
        )}
      />
      <div className="four-grid">
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
  );
}

export function ServicesPreview() {
  const { t } = useLanguage();
  return (
    <section className="page-section banded">
      <SectionHeading
        eyebrow={t("DISCIPLINES // SERVICE OFFERINGS")}
        title={t("Modular Delivery")}
        description={t(
          "Strict technical standards across core development capabilities.",
        )}
      />
      <div className="four-grid service-preview-grid">
        {services.map((item) => (
          <InfoCard
            key={item.title}
            number={item.code}
            title={t(item.title)}
            description={t(item.description)}
            tags={item.tags.map(t)}
          />
        ))}
      </div>
    </section>
  );
}

export function SelectedWork() {
  const { t } = useLanguage();
  return (
    <section className="page-section">
      <SectionHeading
        eyebrow={t("SELECTED PROJECTS // 01 - 04")}
        title={t("Verified Deployments")}
        marker={t("4 PRODUCTION PROOFS ONLINE")}
      />
      <div className="project-preview-grid">
        {projects.slice(0, 4).map((project) => (
          <article className="project-minicard" key={project.title}>
            <div className="card-topline">
              <span>
                {t("DEPLOYMENT // {number}").replace(
                  "{number}",
                  project.number,
                )}
              </span>
              <span>{t(project.category)}</span>
            </div>
            <h3>{t(project.title)}</h3>
            <p>{t(project.description)}</p>
            <div className="tag-row">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag}>{t(tag)}</span>
              ))}
            </div>
            <div className="button-row">
              <Button
                href="/work"
                className="w-full sm:w-auto auto  !bg-[var(--accent-2)]     !text-[#08111f] "
              >
                {t("View Demo")}
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="align-middle rtl-flip"
                />
              </Button>
              <Button href="/work" variant="secondary">
                <HugeiconsIcon icon={CodeXmlIcon} />
                {t("View Code")}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLanguage();
  return (
    <section className="page-section banded">
      <SectionHeading
        eyebrow={t("METHODOLOGY // EXECUTION PIPELINE")}
        title={t("How We Work")}
        description={t(
          "Deterministic 4-phase execution framework designed to eliminate friction and ensure predictable shipping cadence.",
        )}
      />
      <div className="four-grid">
        {processSteps.map((step) => (
          <InfoCard
            key={step.title}
            number={`${step.number} // 04`}
            title={t(step.title)}
            description={t(step.description)}
            meta={step.code}
          />
        ))}
      </div>
    </section>
  );
}

export function Products() {
  const { t } = useLanguage();
  return (
    <section className={"page-section  "}>
      <SectionHeading
        eyebrow={t("NEXORA PRODUCTS // BUILT IN-HOUSE")}
        title={t("Products built from real business needs.")}
      />
      <article className="product-panel">
        <div className="mt-[-20px]">
          <p className="eyebrow boxed">
            {t("PROPRIETARY ENGINE")}&nbsp;&nbsp; SYS_ID // NEX-SC-01
          </p>
          <h3>{t("Smart Cafe")}</h3>
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
          <Button
            href="/products/smart-cafe"
            className={
              "mt-5 align-middle !bg-[var(--accent-2)]     !text-[#08111f] "
            }
          >
            {t("Explore Product Overview")}
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="align-middle rtl-flip "
            />
          </Button>
        </div>
        <div className="terminal-card">
          <span>
            {t("TERMINAL STATUS")} <b>ACTIVE // 0.04s</b>
          </span>
          <span>
            {t("ORDER SYNC ENGINE")} <b>100% ONLINE</b>
          </span>
          <span>
            {t("KDS DISPATCH QUEUE")} <b>0 PENDING</b>
          </span>
          <span>
            {t("PAYMENT TERMINAL API")} <b>READY</b>
          </span>
        </div>
      </article>
    </section>
  );
}

export function WhyNexora() {
  const { t } = useLanguage();
  return (
    <section className="page-section banded">
      <SectionHeading
        eyebrow={t("PILLARS // VALUE DISCIPLINE")}
        title={t("Why Nexora")}
        description={t(
          "Structural advantages designed for teams who value engineered integrity over superficial speed.",
        )}
      />
      <div className="principle-grid">
        {principles.map((item) => (
          <InfoCard
            key={item.title}
            number={item.number}
            title={t(item.title)}
            description={t(item.description)}
            meta={`AXIS // ${item.code}`}
          />
        ))}
      </div>
    </section>
  );
}
