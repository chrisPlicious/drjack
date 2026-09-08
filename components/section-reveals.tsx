"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const isNumericText = (element: Element) =>
  /^(?:\d[\d,.]*\+?|\d{2}\s*\/.*)$/u.test(element.textContent?.trim() ?? "");

const unique = <T extends Element>(elements: T[]) => [...new Set(elements)];

export function SectionReveals() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("motion-enhanced");

    return () => document.documentElement.classList.remove("motion-enhanced");
  }, []);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const sections = gsap.utils.toArray<HTMLElement>("main > section");

        sections.forEach((section) => {
          if (section.className.includes("hero")) return;

          const own = <T extends Element>(selector: string) =>
            Array.from(section.querySelectorAll<T>(selector)).filter(
              (element) =>
                element.closest("section") === section &&
                !element.closest(".fan-carousel"),
            );

          const groups = unique([
            ...own<HTMLElement>("article, figure"),
            ...own<HTMLElement>(".proof-band > div, .about-profile-facts > div"),
          ]).filter(
            (group) =>
              !groupsContainCandidate(group, section, "article, figure"),
          );

          const isInsideGroup = (element: Element) =>
            groups.some((group) => group !== element && group.contains(element));

          const labels = own<HTMLElement>(".eyebrow, .section-index").filter(
            (element) => !isInsideGroup(element),
          );
          const headings = own<HTMLElement>("h1, h2").filter(
            (element) => !isInsideGroup(element),
          );
          const copy = own<HTMLElement>("p, blockquote").filter(
            (element) =>
              !element.matches(".eyebrow, .section-index") &&
              !isInsideGroup(element),
          );
          const numbers = own<HTMLElement>("strong, article > span, figure > span").filter(
            isNumericText,
          );
          const actions = own<HTMLElement>(".button, .text-link, .email-link").filter(
            (element) => !isInsideGroup(element),
          );
          const images = own<HTMLImageElement>("img").filter(
            (image) => !image.closest(".fan-carousel"),
          );

          const targets = unique([
            ...labels,
            ...headings,
            ...copy,
            ...groups,
            ...numbers,
            ...actions,
          ]);

          if (targets.length > 0) {
            const timeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: section,
                start: "top 92%",
                end: "top 58%",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
              onComplete: () => {
                gsap.set(targets, {
                  clearProps: "opacity,visibility,transform,filter,clipPath,willChange",
                });
              },
            });

            if (labels.length > 0) {
              timeline.fromTo(
                labels,
                { autoAlpha: 0, y: 16, filter: "blur(5px)", willChange: "transform,opacity,filter" },
                { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.38, stagger: 0.04 },
                0,
              );
            }

            if (headings.length > 0) {
              timeline.fromTo(
                headings,
                {
                  autoAlpha: 0,
                  y: 48,
                  clipPath: "inset(0 0 100% 0)",
                  filter: "blur(7px)",
                  willChange: "transform,opacity,filter,clip-path",
                },
                {
                  autoAlpha: 1,
                  y: 0,
                  clipPath: "inset(0 0 0% 0)",
                  filter: "blur(0px)",
                  duration: 0.9,
                  stagger: 0.06,
                },
                0.08,
              );
            }

            if (copy.length > 0) {
              timeline.fromTo(
                copy,
                { autoAlpha: 0.12, y: 24, willChange: "transform,opacity" },
                { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.055 },
                0.2,
              );
            }

            if (groups.length > 0) {
              timeline.fromTo(
                groups,
                { autoAlpha: 0, y: 40, scale: 0.985, willChange: "transform,opacity" },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.72,
                  stagger: 0.09,
                },
                0.26,
              );
            }

            if (numbers.length > 0) {
              timeline.fromTo(
                numbers,
                { autoAlpha: 0, x: -14, willChange: "transform,opacity" },
                { autoAlpha: 1, x: 0, duration: 0.48, stagger: 0.06 },
                0.34,
              );
            }

            if (actions.length > 0) {
              timeline.fromTo(
                actions,
                { autoAlpha: 0, y: 16, willChange: "transform,opacity" },
                { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 },
                0.42,
              );
            }
          }

          images.forEach((image) => {
            gsap.fromTo(
              image,
              { scale: 0.94, autoAlpha: 0.72 },
              {
                scale: 1,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement ?? image,
                  start: "top 96%",
                  end: "center 58%",
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                },
              },
            );
          });
        });

        const footer = document.querySelector<HTMLElement>(".site-footer");
        if (footer) {
          const footerGroups = Array.from(
            footer.querySelectorAll<HTMLElement>(
              ".site-footer-brand-block, .site-footer-message, .site-footer-contact, .site-footer-bottom > *",
            ),
          );

          gsap.fromTo(
            footerGroups,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footer,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        }

        const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => window.cancelAnimationFrame(refresh);
      });

      motion.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "main h1, main h2, main h3, main p, main blockquote, main figure, main article, main strong, main img, .site-footer *",
          { clearProps: "all" },
        );
      });

      return () => motion.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}

function groupsContainCandidate(
  candidate: HTMLElement,
  section: HTMLElement,
  selector: string,
) {
  const parentCandidate = candidate.parentElement?.closest<HTMLElement>(selector);
  return parentCandidate?.closest("section") === section;
}
