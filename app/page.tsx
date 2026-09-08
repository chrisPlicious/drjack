import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

const navItems = [
  ["Home", "#home"],
  ["Counseling", "#counseling"],
  ["Matchmaking", "#matchmaking"],
  ["Invite Dr. Jack", "https://www.drjackdating.com/invite-dr-jack"],
  ["Testimonials", "#testimonials"],
  ["Discover", "https://www.drjackdating.com/discover"],
] as const;

const consultationUrl = "https://www.drjackdating.com/book-a-consultation";

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Dr. Jack Dating home">
          <Image
            src="/images/dr-jack-logo.png"
            alt="Dr. Jack Dating"
            width={150}
            height={72}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-small header-cta" href={consultationUrl}>
          Book a consultation
        </a>

        <MobileNav items={navItems} consultationUrl={consultationUrl} />
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-portrait" aria-hidden="true">
          <Image
            src="/images/dr-jack-portrait.png"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">
            Experience,<br />guided by <em>care.</em>
          </h1>
          <p className="hero-subtitle">
            Rabbi Dr. Jack Cohen brings decades of study, mentorship, and practical
            relationship guidance to every conversation.
          </p>
          <div className="hero-actions">
            <a className="button" href={consultationUrl}>
              Book a consultation
            </a>
            <a className="text-link" href="https://www.drjackdating.com/about">
              Meet Dr. Jack
            </a>
          </div>
        </div>
      </section>

      <section className="approach-band" id="approach" aria-label="Dr. Jack's approach">
        <article>
          <h2>Listen deeply</h2>
          <p>We create a safe space to understand your story, values, and what truly matters.</p>
        </article>
        <article>
          <h2>Find the pattern</h2>
          <p>We uncover the dynamics and patterns shaping your relationships and choices.</p>
        </article>
        <article>
          <h2>Move with clarity</h2>
          <p>We develop a clear, practical plan and take meaningful steps forward together.</p>
        </article>
      </section>

      <section className="proof-band" aria-label="Experience and outcomes">
        <div>
          <strong>20+</strong>
          <span>years helping singles and couples</span>
        </div>
        <div>
          <strong>500+</strong>
          <span>successful shidduchim</span>
        </div>
      </section>

      <section className="services shell reveal" id="counseling" aria-labelledby="services-title">
        <div className="section-heading">
          <h2 id="services-title">
            What brings <em>you</em> here?
          </h2>
          <p>Every relationship deserves a more thoughtful next step.</p>
        </div>

        <div className="service-grid">
          <article className="service-feature">
            <div className="service-image">
              <Image
                src="/images/couple-conversation.png"
                alt="A couple having a thoughtful private conversation"
                fill
                sizes="(max-width: 767px) 100vw, 62vw"
              />
            </div>
            <div className="service-feature-copy">
              <h3>Couples Counseling</h3>
              <p>Practical support for deeper connection, lasting trust, and real change.</p>
              <a className="text-link" href="https://www.drjackdating.com/counseling">
                Learn about counseling
              </a>
            </div>
          </article>

          <div className="service-list">
            <article>
              <h3>Dating Guidance</h3>
              <p>Personal guidance to date with clarity and confidence.</p>
              <a className="text-link" href="https://www.drjackdating.com/services">
                Explore dating guidance
              </a>
            </article>
            <article id="matchmaking">
              <h3>Jewish Matchmaking</h3>
              <p>Thoughtful introductions rooted in values that last.</p>
              <a className="text-link" href="https://www.drjackdating.com/matchmaking">
                Find your beshert
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials shell reveal" id="testimonials" aria-labelledby="testimonials-title">
        <div className="section-heading testimonial-heading">
          <h2 id="testimonials-title">Words from people he has helped.</h2>
        </div>
        <div className="quote-grid">
          <figure className="quote-main">
            <blockquote>“We really wouldn’t be where we are without you.”</blockquote>
            <figcaption>N.R.</figcaption>
          </figure>
          <figure>
            <blockquote>
              “Thank you for sending my way such an amazing and quality girl.”
            </blockquote>
            <figcaption>David</figcaption>
          </figure>
          <figure>
            <blockquote>“The help and guidance that you gave me was priceless.”</blockquote>
            <figcaption>Tziporah</figcaption>
          </figure>
        </div>
        <a className="text-link testimonials-link" href="https://www.drjackdating.com/testimonials">
          Read more success stories
        </a>
      </section>

      <section className="closing shell reveal" aria-labelledby="closing-title">
        <h2 id="closing-title">A clearer next step can begin with one conversation.</h2>
        <p>Private consultations for dating, marriage, and matchmaking.</p>
        <a className="button" href={consultationUrl}>
          Book a consultation
        </a>
        <a className="email-link" href="mailto:jcohen.dating@gmail.com">
          Prefer email? jcohen.dating@gmail.com
        </a>
      </section>

      <footer className="site-footer shell">
        <a className="footer-brand" href="#home">DR. JACK <span>DATING</span></a>
        <nav aria-label="Footer navigation">
          {navItems.slice(1).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a href="https://www.drjackdating.com/contact">Contact</a>
        </nav>
        <p>Private guidance for meaningful relationships.</p>
      </footer>
    </main>
  );
}
