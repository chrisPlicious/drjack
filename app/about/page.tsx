import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const milestones = [
  {
    era: "Roots",
    title: "Cairo, tradition, and New York",
    description:
      "Born in Cairo, Egypt, Dr. Jack grew up in a family with deep roots in Jewish learning. His education continued at a Sephardic Talmud Torah and Yeshiva University High School in New York.",
  },
  {
    era: "Study",
    title: "Medicine alongside Jewish teaching",
    description:
      "His path through NYU, Harvard, and medical school led to a long medical career, while more than three decades of teaching Jewish studies kept education and service at the center of his life.",
  },
  {
    era: "Mentorship",
    title: "Wisdom made practical",
    description:
      "As a student of Rabbi Avigdor Miller Z’L and a close friend of Rav Shalom Arush, Dr. Jack developed a grounded approach that connects enduring Jewish wisdom with the realities of dating and marriage.",
  },
  {
    era: "Today",
    title: "A life devoted to relationships",
    description:
      "After retiring from medicine, he committed his days to teaching and advising singles and couples around the world—helping people avoid common mistakes and build relationships that can last.",
  },
] as const;

const facts = [
  ["30+", "years teaching Jewish studies"],
  ["500+", "recorded lectures"],
  ["400+", "published articles"],
  ["1,500+", "matches facilitated"],
] as const;

export const metadata: Metadata = {
  title: "About Rabbi Dr. Jack Cohen | Dr. Jack Dating",
  description:
    "Meet Rabbi Dr. Jack Cohen, a New York-based marriage and dating expert, educator, former physician, and trusted guide to Jewish singles and couples worldwide.",
};

export default function AboutPage() {
  return (
    <main className="about-profile-page" id="about-page">
      <section className="about-profile-hero" aria-labelledby="about-title">
        <Image
          src="/images/dr-jack-portrait.png"
          alt="Rabbi Dr. Jack Cohen seated in his New York study"
          fill
          priority
          sizes="100vw"
        />
        <div className="about-profile-hero-shade" aria-hidden="true" />

        <div className="about-profile-hero-copy shell">
          <p className="eyebrow">Rabbi · physician · teacher · matchmaker</p>
          <h1 id="about-title">
            Rabbi Dr.<br />Jack Cohen.
          </h1>
          <div className="about-profile-hero-note">
            <p>Based in New York</p>
            <p>Serving people worldwide</p>
          </div>
        </div>
      </section>

      <section className="about-profile-intro shell reveal" aria-labelledby="about-intro-title">
        <p className="section-index">01 / A personal introduction</p>
        <div>
          <h2 id="about-intro-title">
            Human relationships became the work <em>behind the work.</em>
          </h2>
          <p className="about-profile-lead">
            “I have spent many years studying human relationships, mentoring
            singles in dating and helping couples strengthen their marriages.”
          </p>
        </div>
        <div className="about-profile-intro-copy">
          <p>
            Dr. Jack is an international marriage and dating expert whose unusual
            path brings together medical discipline, Jewish learning, and decades
            spent listening closely to people.
          </p>
          <p>
            During six years with Aish at the University of Miami, he worked with
            people navigating real dating challenges. Today, he specializes in the
            Orthodox dating world while advising singles and couples across many
            communities.
          </p>
          <Link className="text-link" href="/book-a-consultation">
            Speak with Dr. Jack
          </Link>
        </div>
      </section>

      <section className="about-profile-facts" aria-label="Dr. Jack's experience">
        {facts.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="about-journey shell reveal" aria-labelledby="about-journey-title">
        <div className="about-journey-heading">
          <p className="section-index">02 / The journey</p>
          <h2 id="about-journey-title">
            A life shaped by <em>study, service, and people.</em>
          </h2>
        </div>

        <div className="about-journey-list">
          {milestones.map((milestone, index) => (
            <article key={milestone.era}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{milestone.era}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-present" aria-labelledby="about-present-title">
        <div className="about-present-image">
          <Image
            src="/images/dr-jack-speaking.jpg"
            alt="Rabbi Dr. Jack Cohen speaking to an audience"
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
          />
        </div>

        <div className="about-present-copy reveal">
          <p className="section-index">03 / The work today</p>
          <h2 id="about-present-title">
            Teaching in the morning. Guiding people through the <em>rest of the day.</em>
          </h2>
          <p>
            Dr. Jack now devotes the majority of his time to conversations with
            people seeking dating and marriage advice. His lectures and writing
            extend that guidance to a wider audience, but the work remains deeply
            personal: one person, one couple, and one honest conversation at a time.
          </p>
          <div className="about-present-links">
            <a
              className="text-link"
              href="https://www.torahanytime.com/"
            >
              Explore his lectures
            </a>
            <Link className="text-link" href="/testimonials">
              Read client stories
            </Link>
          </div>
        </div>
      </section>

      <section className="about-profile-closing shell reveal" aria-labelledby="about-closing-title">
        <p className="section-index">Begin a conversation</p>
        <h2 id="about-closing-title">
          Thoughtful guidance begins by understanding <em>your story.</em>
        </h2>
        <p>
          Schedule a private consultation about dating, marriage, counseling, or
          matchmaking.
        </p>
        <Link className="button" href="/book-a-consultation">
          Book a consultation
        </Link>
      </section>

      <SiteFooter activePage="About" />
    </main>
  );
}
