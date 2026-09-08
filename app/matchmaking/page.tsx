import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const consultationUrl = "/book-a-consultation";

const principles = [
  {
    title: "Personal matchmaking",
    description:
      "Dr. Jack gets to know your personality, goals, religious observance, and what you truly want in a partner.",
  },
  {
    title: "Rooted in Jewish values",
    description:
      "Shared values, tradition, and the vision for a strong Jewish home remain central to every introduction.",
  },
  {
    title: "Discreet and confidential",
    description:
      "Every conversation and introduction is handled privately, thoughtfully, and with care.",
  },
  {
    title: "A proven perspective",
    description:
      "Decades spent studying relationships and guiding Jewish singles inform each considered match.",
  },
  {
    title: "Support beyond the introduction",
    description:
      "You receive practical guidance as you date, reflect, decide, and build confidence in the process.",
  },
] as const;

const processSteps = [
  {
    title: "Initial consultation",
    description:
      "A private conversation about your background, dating experiences, goals, and what you are looking for.",
  },
  {
    title: "Personalized matching",
    description:
      "Dr. Jack carefully considers potential matches from his network of eligible Jewish singles.",
  },
  {
    title: "Introduction and coaching",
    description:
      "The introduction is facilitated with guidance available as you begin getting to know one another.",
  },
  {
    title: "Ongoing support",
    description:
      "Advice, perspective, and encouragement continue as the relationship develops and important decisions arise.",
  },
] as const;

export const metadata: Metadata = {
  title: "Jewish Matchmaking | Find Your Beshert with Dr. Jack Cohen",
  description:
    "Personalized, confidential Jewish matchmaking with Rabbi Dr. Jack Cohen, focused on shared values and meaningful relationships.",
};

export default function MatchmakingPage() {
  return (
    <main className="matchmaking-page" id="matchmaking-page">
      <section className="matchmaking-hero" aria-labelledby="matchmaking-title">
        <div className="matchmaking-hero-copy">
          <p className="eyebrow">Jewish matchmaking</p>
          <h1 id="matchmaking-title">
            Finding your beshert starts with being truly <em>known.</em>
          </h1>
          <p className="matchmaking-hero-intro">
            A personal, values-led alternative to endless swiping—guided by someone
            who takes the time to understand who you are and what can last.
          </p>
          <div className="hero-actions">
            <Link className="button" href={consultationUrl}>
              Begin with a consultation
            </Link>
            <a className="text-link" href="#how-matchmaking-works">
              See how it works
            </a>
          </div>
        </div>

        <aside className="matchmaking-hero-aside" aria-label="Matchmaking experience">
          <p className="section-index">Personal, not algorithmic</p>
          <div className="matchmaking-hero-stat">
            <strong>500+</strong>
            <p>
              successful shidduchim shaped by experience, intuition, and a deep
              understanding of relationships.
            </p>
          </div>
          <ul aria-label="How Dr. Jack approaches matchmaking">
            <li>Known personally</li>
            <li>Matched thoughtfully</li>
            <li>Guided confidentially</li>
          </ul>
        </aside>
      </section>

      <section className="matchmaking-intro shell reveal" aria-labelledby="matchmaking-intro-title">
        <div>
          <p className="section-index">01 / Beyond the algorithm</p>
          <h2 id="matchmaking-intro-title">
            A match should reflect more than a <em>profile.</em>
          </h2>
        </div>
        <div className="matchmaking-intro-copy">
          <p className="intro-lead">
            Meaningful introductions begin with a real understanding of the person
            behind the preferences.
          </p>
          <p>
            Dr. Jack takes time to learn about your personality, relationship goals,
            religious observance, family values, and the kind of life you hope to
            build. That human context allows him to look beyond surface-level
            compatibility and consider what may genuinely work.
          </p>
          <p>
            The process is thoughtful, confidential, and grounded in the values and
            traditions that matter in a Jewish relationship.
          </p>
        </div>
      </section>

      <section className="matchmaking-principles" aria-labelledby="matchmaking-principles-title">
        <div className="shell">
          <div className="matchmaking-section-heading reveal">
            <p className="section-index">02 / Why Dr. Jack Dating</p>
            <h2 id="matchmaking-principles-title">
              Matchmaking with <em>judgment, discretion, and care.</em>
            </h2>
          </div>

          <div className="matchmaking-principle-list reveal">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="matchmaking-process shell reveal"
        id="how-matchmaking-works"
        aria-labelledby="matchmaking-process-title"
      >
        <div className="matchmaking-process-heading">
          <p className="section-index">03 / The process</p>
          <h2 id="matchmaking-process-title">
            Four considered steps.<br />One <em>human</em> process.
          </h2>
          <p>
            From the first conversation onward, you are supported with direct,
            practical guidance.
          </p>
        </div>

        <div className="matchmaking-process-list">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="matchmaking-story" aria-labelledby="matchmaking-story-title">
        <div className="matchmaking-story-image">
          <Image
            src="/images/couple-conversation.png"
            alt="A Jewish couple talking and listening closely to one another"
            fill
            sizes="(max-width: 820px) 100vw, 52vw"
          />
        </div>
        <div className="matchmaking-story-copy reveal">
          <span aria-hidden="true">“</span>
          <blockquote id="matchmaking-story-title">
            I feel every day that Hashem crafted her for me, and that we work very
            well together.
          </blockquote>
          <p>David / Matchmaking client</p>
          <Link className="text-link" href="/testimonials">
            Read more stories
          </Link>
        </div>
      </section>

      <section className="matchmaking-closing shell reveal" aria-labelledby="matchmaking-closing-title">
        <p className="section-index">Ready to find your beshert?</p>
        <h2 id="matchmaking-closing-title">
          Stop swiping. Start connecting <em>with intention.</em>
        </h2>
        <p>
          Begin with a confidential conversation about who you are, what matters to
          you, and the relationship you hope to build.
        </p>
        <Link className="button" href={consultationUrl}>
          Book a consultation
        </Link>
        <a className="email-link" href="mailto:jcohen.dating@gmail.com">
          Prefer email? <span>jcohen.dating@gmail.com</span>
        </a>
      </section>

      <SiteFooter activePage="Matchmaking" />
    </main>
  );
}
