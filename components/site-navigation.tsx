"use client";

import { usePathname } from "next/navigation";
import { FullscreenNav } from "@/components/fullscreen-nav";

const primaryNavItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Counseling", "/counseling"],
  ["Matchmaking", "/matchmaking"],
  ["Testimonials", "/testimonials"],
] as const;

const secondaryNavItems = [
  ["Our approach", "/#approach"],
  ["Recent matches", "/#recent-matches"],
  ["Invite Dr. Jack", "https://www.drjackdating.com/invite-dr-jack"],
  ["Discover", "https://www.drjackdating.com/discover"],
  ["Contact", "https://www.drjackdating.com/contact"],
] as const;

const consultationUrl = "/book-a-consultation";

function getActiveLabel(pathname: string) {
  if (pathname === "/about") return "About";
  if (pathname === "/counseling") return "Counseling";
  if (pathname === "/matchmaking") return "Matchmaking";
  if (pathname === "/testimonials") return "Testimonials";
  if (pathname === "/book-a-consultation") return "Consultation";
  return "Home";
}

export function SiteNavigation() {
  const pathname = usePathname();
  const activeLabel = getActiveLabel(pathname);

  return (
    <FullscreenNav
      primaryItems={primaryNavItems}
      secondaryItems={secondaryNavItems}
      consultationUrl={consultationUrl}
      activeLabel={activeLabel}
      homeHref="/"
    />
  );
}
