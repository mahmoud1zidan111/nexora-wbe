"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/i18n/LanguageProvider";
// import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
// import images from "../../imgs/imges.json";
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand bg-none" href="/" aria-label="Nexora home">
      <span className="brand-mark bg-none" aria-hidden="true">
        <img
          src="https://res.cloudinary.com/dricl4jwn/image/upload/v1790389289/layer-3d-letter-n-logo_toqni0.png"
          alt="Nexora logo"
        />
      </span>
      <span className="brand-copy">
        <strong>Nexora</strong>
        <em>{compact ? "SYS_LAYER" : "Build Your Digital Future."}</em>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Logo compact />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={pathname === item.href ? "is-active" : ""}
                href={item.href}
                key={item.href}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="language-toggle"
              type="button"
              aria-label={
                locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
              }
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <Button
              href="/contact"
              className=" w-full sm:w-auto auto !rounded-[5px] !bg-[var(--accent-2)] !px-4 !py-3.5 !font-[var(--font-mono)] !text-[12px] !font-bold !leading-[1.45] !tracking-[0.11em] !text-[#08111f] sm:!px-5 sm:!py-4 sm:!text-[13px] md:!text-[14px] lg:!px-6 lg:!py-4"
            >
              {t("Start a Project")}
              <HugeiconsIcon icon={ArrowRight01Icon} className="align-middle" />
            </Button>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* start  mobile navigation  */}
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className={pathname === item.href ? "is-active" : ""}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              <span>{t(item.label)}</span>
              <span>0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <button
          className="language-toggle"
          type="button"
          aria-label={
            locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
          }
          onClick={() => setLocale(locale === "en" ? "ar" : "en")}
        >
          {locale === "en" ? "AR" : "EN"}
        </button>
        <Button
          href="/contact"
          onClick={() => setOpen(false)}
          className="w-full sm:w-auto auto !rounded-[5px] !bg-[var(--accent-2)] !px-4 !py-3.5 !font-[var(--font-mono)] !text-[12px] !font-bold !leading-[1.45] !tracking-[0.11em] !text-[#08111f] sm:!px-5 sm:!py-4 sm:!text-[13px] md:!text-[14px] lg:!px-6 lg:!py-4"
        >
          {t("Start a Project")}
          <HugeiconsIcon icon={ArrowRight01Icon} className="align-middle" />
        </Button>
      </div>
      <nav className="bottom-nav" aria-label="Mobile quick navigation">
        {navItems.map((item) => (
          <Link
            className={pathname === item.href ? "is-active" : ""}
            href={item.href}
            key={item.href}
          >
            <HugeiconsIcon icon={item.icon} />
            {t(item.label)}
          </Link>
        ))}
      </nav>
    </>
  );
}
