"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function FinalCTA({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <section className={`final-cta ${compact ? "final-cta--compact" : ""}`}>
      <p className="eyebrow">{t("SYSTEM READY FOR INGESTION")}</p>
      <h2>{t("Have a complex idea? Let's build it.")}</h2>
      <p>
        {t(
          "Engage with Nexora systems architects to evaluate requirements, establish technical roadmaps, and deploy with confidence.",
        )}
      </p>
      <div className="button-row">
        <Button
          href="/contact"
          className="w-full sm:w-auto auto !bg-[var(--accent-2)] !text-[#08111f] "
        >
          {t("Start a Project")}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="align-middle rtl-flip"
          />
        </Button>
        <Button
          className="w-full sm:w-auto auto !bg-gray-900"
          href="/work"
          variant="secondary"
        >
          {t("Explore Our Work")}
        </Button>
      </div>
      <span className="terminal-line">
        {t("SYS_STATUS // ACTIVE DISPATCH")}
      </span>
    </section>
  );
}
