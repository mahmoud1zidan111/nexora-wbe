"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function WorkPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          <section className="page-hero split-hero">
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
              <span>REGISTRY STATE</span>
              <b>INDEXED // 05 ACTIVE</b>
              <span>DEPLOYMENT PROTOCOL</span>
              <b>HIGH DENSITY PROD</b>
            </div>
          </section>
          <section className="work-grid">
            {projects.map((project, index) => (
              <article
                className={`work-card ${index < 2 ? "work-card--wide" : ""}`}
                key={project.title}
              >
                <div className="project-screen">
                  <span>SYS_ID // {project.number}</span>
                  <div className="screen-lines" />
                </div>
                <div className="card-topline">
                  <span>SYS_ID // {project.number} • PRODUCTION</span>
                  <span>{project.category}</span>
                </div>
                <h2>{t(project.title)}</h2>
                <p>{t(project.description)}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{t(tag)}</span>
                  ))}
                </div>
                <div className="button-row">
                  <Button href="/work">View Demo ↗</Button>
                  <Button href="/work" variant="secondary">
                    View Code ‹›
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
