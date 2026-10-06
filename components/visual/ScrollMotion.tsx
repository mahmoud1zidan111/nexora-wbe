"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const hero = document.querySelector<HTMLElement>(
          "main .hero-section, main .page-hero, main .smart-hero",
        );

        if (hero) {
          const heroItems = hero.querySelectorAll<HTMLElement>(
            ".hero-copy > *, .page-hero > *, .smart-hero > *",
          );

          if (heroItems.length) {
            gsap.fromTo(
              heroItems,
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.09,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
            );
          }

          const heroVisual = hero.querySelector<HTMLElement>(
            ".system-visual, .cafe-console, .registry-card",
          );
          const visualAlreadyIncluded =
            heroVisual &&
            Array.from(heroItems).some(
              (item) => item === heroVisual || item.contains(heroVisual),
            );
          if (heroVisual && !visualAlreadyIncluded) {
            gsap.fromTo(
              heroVisual,
              { autoAlpha: 0, y: 16 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                delay: 0.12,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
            );
          }
        }

        const sections = gsap.utils.toArray<HTMLElement>("main section");
        sections.forEach((section) => {
          const heading =
            section.querySelector<HTMLElement>(".section-heading") ??
            section.querySelector<HTMLElement>(":scope > h1") ??
            section.querySelector<HTMLElement>(":scope > h2") ??
            section.querySelector<HTMLElement>(":scope > div > h1");
          if (heading && !heading.closest(".hero-section, .page-hero, .smart-hero")) {
            gsap.fromTo(
              heading,
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }

          const revealSelector =
            ".info-card, .project-minicard, .work-card, .profile-card, .product-panel, .feature-strip, .final-cta, form, .spec-card";
          const items = [
            ...(section.matches(revealSelector) ? [section] : []),
            ...section.querySelectorAll<HTMLElement>(revealSelector),
          ];
          if (items.length) {
            gsap.fromTo(
              items,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.075,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: items[0],
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }
        });

        ScrollTrigger.refresh();
      });

      return () => context.revert();
    });

    return () => media.revert();
  }, [pathname]);

  return null;
}
