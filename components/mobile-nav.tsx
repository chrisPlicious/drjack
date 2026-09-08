"use client";

import { useState } from "react";

type NavItem = readonly [label: string, href: string];

export function MobileNav({
  items,
  consultationUrl,
}: {
  items: readonly NavItem[];
  consultationUrl: string;
}) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {items.map(([label, href]) => (
          <a key={label} href={href} onClick={close}>
            {label}
          </a>
        ))}
        <a className="button" href={consultationUrl} onClick={close}>
          Book a consultation
        </a>
      </nav>
    </div>
  );
}
