"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type TransitionEvent,
} from "react";

type NavItem = readonly [label: string, href: string];

export function FullscreenNav({
  primaryItems,
  secondaryItems,
  consultationUrl,
  activeLabel,
  homeHref = "#home",
}: {
  primaryItems: readonly NavItem[];
  secondaryItems: readonly NavItem[];
  consultationUrl: string;
  activeLabel?: string;
  homeHref?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pendingHrefRef = useRef<string | null>(null);
  const navigationFallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (navigationFallbackRef.current) {
        clearTimeout(navigationFallbackRef.current);
      }
    },
    [],
  );

  const linkStyle = (index: number) =>
    ({ "--link-index": index } as CSSProperties);

  const finishPendingNavigation = () => {
    const href = pendingHrefRef.current;
    if (!href) return;

    pendingHrefRef.current = null;
    if (navigationFallbackRef.current) {
      clearTimeout(navigationFallbackRef.current);
      navigationFallbackRef.current = null;
    }

    if (href.startsWith("/") || href.startsWith("#")) {
      router.push(href);
      return;
    }

    window.location.assign(href);
  };

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      !open ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (href.startsWith("/")) {
      const [pagePath] = href.split("#");
      router.prefetch(pagePath || "/");
    }

    if (href.startsWith("/") || href.startsWith("#")) {
      pendingHrefRef.current = null;
      setOpen(false);
      router.push(href);
      return;
    }

    pendingHrefRef.current = href;
    setOpen(false);

    navigationFallbackRef.current = setTimeout(finishPendingNavigation, 1650);
  };

  const handleOverlayTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.target === event.currentTarget &&
      event.propertyName === "clip-path" &&
      !open
    ) {
      finishPendingNavigation();
    }
  };

  return (
    <div className={`fullscreen-nav${open ? " is-open" : ""}`}>
      <a
        className="floating-brand"
        href={homeHref}
        aria-label="Dr. Jack Dating home"
        onClick={(event) => handleNavigation(event, homeHref)}
      >
        <Image
          className="floating-brand-logo"
          src="/images/dr-jack-logo.png"
          alt="Dr. Jack Dating"
          width={150}
          height={72}
          priority
        />
        <span className="floating-brand-mark" aria-hidden="true">
          J<span />
        </span>
      </a>

      <div
        className="nav-overlay"
        id="site-navigation"
        aria-hidden={!open}
        onTransitionEnd={handleOverlayTransitionEnd}
      >
        <div className="nav-portrait" aria-hidden="true">
          <Image
            src="/images/dr-jack-portrait.png"
            alt=""
            fill
            priority
            sizes="(max-width: 820px) 0px, 42vw"
          />
          <div className="nav-image-wipe" />
          <p>
            Thoughtful guidance.
            <br />
            Meaningful connection.
          </p>
        </div>

        <div className="nav-panel">
          <p className="nav-kicker">Explore</p>

          <nav className="nav-primary" aria-label="Primary navigation">
            {primaryItems.map(([label, href], index) => (
              <div className="nav-link-mask" key={label}>
                <a
                  href={href}
                  onClick={(event) => handleNavigation(event, href)}
                  tabIndex={open ? 0 : -1}
                  aria-current={activeLabel === label ? "page" : undefined}
                  style={linkStyle(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              </div>
            ))}

            <div className="nav-link-mask">
              <a
                href={consultationUrl}
                onClick={(event) => handleNavigation(event, consultationUrl)}
                tabIndex={open ? 0 : -1}
                aria-current={activeLabel === "Consultation" ? "page" : undefined}
                style={linkStyle(primaryItems.length)}
              >
                <span>{String(primaryItems.length + 1).padStart(2, "0")}</span>
                Consultation
              </a>
            </div>
          </nav>

          <div className="nav-secondary">
            {secondaryItems.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                onClick={(event) => handleNavigation(event, href)}
                tabIndex={open ? 0 : -1}
                aria-current={activeLabel === label ? "page" : undefined}
                style={linkStyle(primaryItems.length + index + 1)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        ref={toggleRef}
        className="nav-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-toggle-icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
    </div>
  );
}
