import Image from "next/image";
import Link from "next/link";
import { CardFanCarousel } from "@/components/ui/card-fan-carousel";
import { SiteFooter } from "@/components/site-footer";

const consultationUrl = "/book-a-consultation";

const recentMatches = [
  {
    src: "/images/matches/match-1.webp",
    alt: "Mazal tov announcement for Chosson and Natali Saba",
    name: "Chosson & Natali Saba",
    width: 1000,
    height: 1404,
  },
  {
    src: "/images/matches/match-2.webp",
    alt: "Mazal tov announcement for Yishai Ashman and Leah Brodt",
    name: "Yishai Ashman & Leah Brodt",
    width: 1000,
    height: 1404,
  },
  {
    src: "/images/matches/match-3.webp",
    alt: "Mazal tov announcement for Benyamin Finkelstein and his kallah",
    name: "Benyamin Finkelstein & Kallah",
    width: 1000,
    height: 1404,
  },
  {
    src: "/images/matches/match-4.webp",
    alt: "Mazal tov announcement for Yosef Gestetner and Rikki Yarmish",
    name: "Yosef Gestetner & Rikki Yarmish",
    width: 1000,
    height: 1404,
  },
  {
    src: "/images/matches/match-5.webp",
    alt: "Mazal tov announcement for Mr. Solomon and his kallah",
    name: "Mr. Solomon & Kallah",
    width: 819,
    height: 1024,
  },
  {
    src: "/images/matches/match-6.webp",
    alt: "Mazal tov announcement for Danny Hekmat and Sara Green",
    name: "Danny Hekmat & Sara Green",
    width: 1000,
    height: 1404,
  },
  {
    src: "/images/matches/match-7.webp",
    alt: "Mazal tov announcement for Chosson and Aliza Lefkowitz",
    name: "Chosson & Aliza Lefkowitz",
    width: 1000,
    height: 1404,
  },
] as const;

export default function Home() {
  return (
    <main id="home">

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
            <Link className="button" href={consultationUrl}>
              Book a consultation
            </Link>
            <Link className="text-link" href="/about">
              Meet Dr. Jack
            </Link>
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
              <Link className="text-link" href="/counseling">
                Learn about counseling
              </Link>
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
              <Link className="text-link" href="/matchmaking">
                Find your beshert
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials shell reveal" id="testimonials" aria-labelledby="testimonials-title">
        <div className="section-heading testimonial-heading">
          <span className="testimonial-mark" aria-hidden="true">“</span>
          <h2 id="testimonials-title">
            Words from people <em>he has helped.</em>
          </h2>
        </div>
        <div className="quote-grid">
          <figure className="quote-card quote-left">
            <blockquote>
              Dr. Jack helped me see the patterns holding me back and gave me the
              clarity to move forward.
            </blockquote>
            <figcaption>N.R.</figcaption>
          </figure>
          <figure className="quote-main">
            <blockquote>“We really would not be where we are without you.”</blockquote>
          </figure>
          <figure className="quote-card quote-right">
            <blockquote>
              Insightful, practical, and genuinely invested in our growth as a couple.
            </blockquote>
            <figcaption>David</figcaption>
          </figure>
          <figure className="quote-card quote-bottom">
            <blockquote>
              I felt truly understood and supported at every step of the process.
            </blockquote>
            <figcaption>Tziporah</figcaption>
          </figure>
        </div>
      </section>

      <section className="recent-matches reveal" aria-labelledby="recent-matches-title">
        <div className="recent-matches-heading shell">
          <p className="eyebrow">Recent matches</p>
          <h2 id="recent-matches-title">
            Introductions that became something <em>lasting.</em>
          </h2>
        </div>
        <CardFanCarousel cards={recentMatches} />
      </section>

      <section className="closing shell reveal" aria-labelledby="closing-title">
        <h2 id="closing-title">
          A clearer next step can begin<br />with <em>one conversation.</em>
        </h2>
        <p>Private consultations for dating, marriage, and matchmaking.</p>
        <Link className="button" href={consultationUrl}>
          Book a consultation
        </Link>
        <a className="email-link" href="mailto:jcohen.dating@gmail.com">
          Prefer email? <span>jcohen.dating@gmail.com</span>
        </a>
      </section>

      <SiteFooter activePage="Home" />
    </main>
  );
}
