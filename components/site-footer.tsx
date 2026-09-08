import Image from "next/image";
import Link from "next/link";

type FooterPage =
  | "Home"
  | "About"
  | "Counseling"
  | "Matchmaking"
  | "Testimonials"
  | "Consultation";

const footerLinks = [
  ["About", "/about"],
  ["Counseling", "/counseling"],
  ["Matchmaking", "/matchmaking"],
  ["Testimonials", "/testimonials"],
  ["Recent matches", "/#recent-matches"],
  ["Consultation", "/book-a-consultation"],
] as const;

const socialLinks = [
  ["Facebook", "https://www.facebook.com/search/top?q=dr%20jack%20dating", "facebook"],
  ["Instagram", "https://www.instagram.com/explore/search/keyword/?q=dr%20jack%20dating", "instagram"],
  ["YouTube", "https://www.youtube.com/results?search_query=Dr+Jack+Dating", "youtube"],
  ["Podcasts", "https://podcasts.apple.com/us/search?term=Dr%20Jack%20Cohen", "podcast"],
  ["Spotify", "https://open.spotify.com/search/Dr%20Jack%20Cohen", "spotify"],
] as const;

function SocialMark({ name }: { name: (typeof socialLinks)[number][2] }) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path className="social-mark-fill" d="M14 8.5V6.8c0-1 .7-1.3 1.3-1.3H18V2h-3.1C11.6 2 10 4 10 6.5v2H7V12h3v10h4V12h3.2l.5-3.5H14Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.7" r="1" className="social-mark-fill" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" />
        <path d="m10 15 5-3-5-3Z" className="social-mark-fill" />
      </svg>
    );
  }

  if (name === "podcast") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="11" r="2.2" />
        <path d="M8.1 15a5.5 5.5 0 1 1 7.8 0M5.7 17.4a9 9 0 1 1 12.6 0M10.5 15.6h3L15 22H9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M6.8 9.2c3.5-1 7.3-.8 10.5.8M7.5 12.6c2.9-.8 6.2-.5 8.9.7M8.4 15.7c2.2-.5 4.6-.3 6.6.6" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "phone" | "email" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M10.5 18h3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SiteFooter({ activePage }: { activePage?: FooterPage }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-main shell">
        <div className="site-footer-brand-block">
          <Link className="footer-brand" href="/" aria-label="Dr. Jack Dating home">
            <Image
              src="/images/dr-jack-logo.png"
              alt="Dr. Jack Dating"
              width={300}
              height={144}
            />
          </Link>
          <p>Thoughtful guidance. Meaningful connection.</p>
        </div>

        <div className="site-footer-message">
          <p>
            Dr. Jack Cohen helps with dating, improving your marriage, and offers
            counseling. His guidance prepares people to build meaningful,
            successful relationships.
          </p>
          <nav aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                aria-current={activePage === label ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer-contact">
          <p className="site-footer-label">Contact</p>
          <div className="site-footer-contact-list">
            <a href="tel:+13052061916">
              <ContactIcon type="phone" />
              <span>305-206-1916</span>
            </a>
            <a href="mailto:jcohen.dating@gmail.com">
              <ContactIcon type="email" />
              <span>jcohen.dating@gmail.com</span>
            </a>
          </div>

          <nav className="site-footer-socials" aria-label="Find Dr. Jack online">
            {socialLinks.map(([label, href, icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Find Dr. Jack on ${label}`}
              >
                <SocialMark name={icon} />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="site-footer-bottom shell">
        <p>© 2026 Dr. Jack Dating. All rights reserved.</p>
        <p>New York · Serving people worldwide</p>
      </div>
    </footer>
  );
}
