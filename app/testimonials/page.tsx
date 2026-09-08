import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const consultationUrl = "/book-a-consultation";

const relationshipStories = [
  {
    quote:
      "Thank you again so much for sending my way such an amazing and quality girl.",
    name: "David",
    detail: "Matchmaking client",
    size: "wide",
  },
  {
    quote: "Thank you very much for the right words at the right time.",
    name: "Malka",
    detail: "Recently engaged",
    size: "standard",
  },
  {
    quote: "The help and guidance that you gave me was priceless.",
    name: "Tziporah",
    detail: "Recently engaged",
    size: "tall",
  },
  {
    quote: "I listen to your speeches every week and they helped me a lot.",
    name: "Shanee",
    detail: "Recently engaged",
    size: "standard",
  },
  {
    quote:
      "I’ve met a wonderful girl thanks to your advice and everything is going amazing.",
    name: "Anonymous",
    detail: "Dating guidance client",
    size: "wide",
  },
] as const;

const communityStories = [
  {
    quote:
      "The students were amazed by how invested they were in what you were saying.",
    name: "Nechama",
    location: "New York",
  },
  {
    quote: "Your words have an impact far beyond what you may know.",
    name: "Anonymous educator",
    location: "High school faculty",
  },
  {
    quote: "Thank you so much for sharing dating tips. I really enjoyed and gained a lot.",
    name: "Miriam",
    location: "New York",
  },
  {
    quote:
      "You answered every question with the utmost respect and stayed directly to the point.",
    name: "N.L.",
    location: "Canada",
  },
  {
    quote: "His caring and patience explain why he has become so popular.",
    name: "Sharon Ganz",
    location: "New York",
  },
  {
    quote: "The talk was absolutely incredible, and I’d love to keep in touch.",
    name: "Robbie",
    location: "Tel Aviv, Israel",
  },
] as const;

export const metadata: Metadata = {
  title: "Testimonials | Dr. Jack Dating",
  description:
    "Read what clients, couples, students, and community members say about Rabbi Dr. Jack Cohen’s relationship guidance and lectures.",
};

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page" id="testimonials-page">
      <section className="testimonials-page-hero" aria-labelledby="testimonials-page-title">
        <div className="testimonials-page-hero-inner shell">
          <div className="testimonials-page-heading">
            <p className="eyebrow">Client stories</p>
            <h1 id="testimonials-page-title">
              What people are <em>saying.</em>
            </h1>
            <p>
              Notes from people Dr. Jack has guided, introduced, taught, and supported
              through meaningful moments in their lives.
            </p>
          </div>

          <figure className="testimonials-page-featured">
            <span aria-hidden="true">“</span>
            <blockquote>
              Gabi and I really wouldn’t be where we are without you.
            </blockquote>
            <figcaption>N.R. / Engagement celebration</figcaption>
          </figure>
        </div>
      </section>

      <section className="relationship-stories" aria-labelledby="relationship-stories-title">
        <div className="shell">
          <div className="testimonial-page-section-heading reveal">
            <p className="section-index">01 / Relationships</p>
            <h2 id="relationship-stories-title">
              Guidance that helped something <em>meaningful begin.</em>
            </h2>
          </div>

          <div className="relationship-story-grid reveal">
            {relationshipStories.map((story, index) => (
              <figure
                className={`testimonial-story testimonial-story-${story.size}`}
                key={story.name + story.quote}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <blockquote>“{story.quote}”</blockquote>
                <figcaption>
                  <strong>{story.name}</strong>
                  <small>{story.detail}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-interlude" aria-labelledby="testimonial-interlude-title">
        <div className="testimonial-interlude-image">
          <Image
            src="/images/dr-jack-speaking.jpg"
            alt="Rabbi Dr. Jack Cohen speaking to a community audience"
            fill
            sizes="(max-width: 820px) 100vw, 44vw"
          />
        </div>

        <div className="testimonial-interlude-copy reveal">
          <p className="section-index">In the room</p>
          <blockquote id="testimonial-interlude-title">
            “Thank you so much for a wonderful lecture. I really took a lot from
            tonight.”
          </blockquote>
          <p>Tammy / New York</p>
        </div>
      </section>

      <section className="community-stories" aria-labelledby="community-stories-title">
        <div className="shell">
          <div className="testimonial-page-section-heading community-heading reveal">
            <p className="section-index">02 / Talks &amp; community</p>
            <h2 id="community-stories-title">
              Words that stayed with them <em>after the room went quiet.</em>
            </h2>
          </div>

          <div className="community-story-list reveal">
            {communityStories.map((story, index) => (
              <figure key={story.name + story.quote}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <blockquote>“{story.quote}”</blockquote>
                <figcaption>
                  <strong>{story.name}</strong>
                  <small>{story.location}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-page-closing shell reveal" aria-labelledby="testimonials-closing-title">
        <p className="section-index">Your next chapter</p>
        <h2 id="testimonials-closing-title">
          One honest conversation can <em>change the direction.</em>
        </h2>
        <p>
          Begin with a private consultation about dating, marriage, counseling, or
          matchmaking.
        </p>
        <Link className="button" href={consultationUrl}>
          Book a consultation
        </Link>
        <a className="email-link" href="mailto:jcohen.dating@gmail.com">
          Prefer email? <span>jcohen.dating@gmail.com</span>
        </a>
      </section>

      <SiteFooter activePage="Testimonials" />
    </main>
  );
}
