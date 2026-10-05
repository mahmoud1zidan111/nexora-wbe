"use client";

import Link from "next/link";
import { navItems } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Navbar";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const disciplines = [
  "Systems Architecture",
  "Product Engineering",
  "Web Platforms",
  "Custom Software",
  "SaaS Products",
];

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            {t(
              "Engineering resilient digital systems, high-performance web platforms, and mission-critical software architectures.",
            )}
          </p>
          <Button
            href="/contact"
            className="w-full sm:w-auto auto !rounded-[6px] !bg-[var(--accent-2)] !px-4 !py-3.5 !font-[var(--font-mono)] !text-[12px] !font-bold !leading-[1.45] !tracking-[0.11em] !text-[#08111f] sm:!px-5 sm:!py-4 sm:!text-[13px] md:!text-[14px] lg:!px-6 lg:!py-4"
          >
            {t("START A PROJECT")}
            <HugeiconsIcon icon={ArrowRight01Icon} className="align-middle" />
          </Button>
        </div>
        <div>
          <p className="footer-heading">{t("NAVIGATION //")}</p>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">{t("DISCIPLINES //")}</p>
          <ul>
            {disciplines.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <span>© 2025 NEXORA SYSTEMS ARCHITECTURE. SYS_VER 4.2.0</span>
        <span>
          <i /> OPERATIONAL CLUSTER STABLE
        </span>
      </div>
    </footer>
  );
}
