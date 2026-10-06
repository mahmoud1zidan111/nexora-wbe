"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { CodeXmlIcon } from "@hugeicons/core-free-icons";
export default function WorkPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          {/* Hero */}
          <section className="page-hero split-hero ">
            <div>
              <p className="eyebrow">
                {t("ARCHIVE // SELECTED CODE & PRODUCTS")}
              </p>

              <h1>{t("Engineered Projects")}</h1>

              <p>
                {t(
                  "Verified frontend implementations, applications, and system platforms.",
                )}
              </p>
            </div>

            <div className="registry-card">
              <span>{t("REGISTRY STATE")}</span>
              <b>{t("INDEXED // 05 ACTIVE")}</b>

              <span>{t("DEPLOYMENT PROTOCOL")}</span>
              <b>{t("HIGH DENSITY PROD")}</b>
            </div>
          </section>

          {/* Projects */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-4">
            {projects.map((project) => (
              <article className="work-card min-w-0" key={project.title}>
                {/* Project Image */}
                {project.imgUrl && (
                  <div className="group relative mb-6 aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#080b14]">
                    <img
                      src={project.imgUrl}
                      alt={t(project.title)}
                      className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                    {/* System ID */}
                    <span className="absolute left-4 top-4 z-10 font-mono text-[10px] tracking-[0.15em] text-white/70">
                      SYS_ID // {project.number}
                    </span>
                  </div>
                )}

                {/* Card Topline */}
                <div className="card-topline">
                  <span>
                    {t("SYS_ID // {number} • PRODUCTION").replace(
                      "{number}",
                      project.number,
                    )}
                  </span>

                  <span>{t(project.category)}</span>
                </div>

                {/* Title */}
                <h2>{t(project.title)}</h2>

                {/* Description */}
                <p>{t(project.description)}</p>

                {/* Tags */}
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{t(tag)}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="button-row pt-5">
                  <Button href={project.link.liveDemo} target="_blank">
                    {t("View Demo")}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="align-middle rtl-flip"
                    />
                  </Button>

                  <Button
                    href={project.link.code}
                    target="_blank"
                    variant="secondary"
                  >
                    {t("View Code")}
                    <HugeiconsIcon
                      icon={CodeXmlIcon}
                      className="align-middle rtl-flip"
                    />
                  </Button>
                </div>
              </article>
            ))}
          </section>

          <FinalCTA compact />
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}
