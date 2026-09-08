import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";

const focusAreas = [
  {
    title: "Dating guidance",
    description:
      "Understand recurring patterns, approach dating with greater confidence, and make decisions with more clarity.",
  },
  {
    title: "Marriage counseling",
    description:
      "Work through communication, conflict, or distance with practical guidance shaped around your relationship.",
  },
  {
    title: "Matchmaking perspective",
    description:
      "Clarify what matters in a partner and how to pursue a meaningful relationship with intention.",
  },
] as const;

const conversationSteps = [
  {
    title: "Share what is happening",
    description:
      "Begin with the situation as you understand it—what feels difficult, uncertain, or ready to change.",
  },
  {
    title: "Look beneath the pattern",
    description:
      "Together, identify the beliefs, habits, and relationship dynamics shaping the present moment.",
  },
  {
    title: "Leave with a clear next step",
    description:
      "Turn insight into a practical direction you can carry into dating, marriage, or the next conversation.",
  },
] as const;

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Jack Cohen",
  description:
    "Schedule a private one-on-one consultation with Rabbi Dr. Jack Cohen for dating, marriage, counseling, or matchmaking guidance.",
};

export default function ConsultationPage() {
  return (
    <main className="consultation-page" id="consultation-page">
      <section className="consultation-hero" aria-labelledby="consultation-title">
        <div className="consultation-hero-copy">
          <p className="eyebrow">Private one-on-one guidance</p>
          <h1 id="consultation-title">
            One honest conversation can bring the next step into <em>focus.</em>
          </h1>
          <p className="consultation-hero-intro">
            Speak directly with Dr. Jack about dating, marriage, counseling, or
            matchmaking in a thoughtful and confidential setting.
          </p>
          <a className="text-link" href="#begin-consultation">
            Begin the conversation
          </a>
        </div>

        <aside className="consultation-contact-card" id="begin-consultation">
          <div>
            <p className="section-index">Direct contact</p>
            <h2>Choose the way that feels most comfortable.</h2>
          </div>

          <div className="consultation-contact-list">
            <a href="tel:+13052061916">
              <span>Call Dr. Jack</span>
              <strong>305 206 1916</strong>
              <b aria-hidden="true">↗</b>
            </a>
            <a href="mailto:jcohen.dating@gmail.com?subject=Private%20consultation%20request">
              <span>Send an email</span>
              <strong>jcohen.dating@gmail.com</strong>
              <b aria-hidden="true">↗</b>
            </a>
          </div>

          <p className="consultation-privacy-note">
            Every inquiry is handled personally and with discretion.
          </p>
        </aside>
      </section>

      <section className="consultation-statement shell reveal" aria-labelledby="consultation-statement-title">
        <p className="section-index">01 / The conversation</p>
        <h2 id="consultation-statement-title">
          Come with the question that has been <em>weighing on you.</em>
        </h2>
        <p>
          Dr. Jack brings decades of relationship insight, Jewish wisdom, and a
          deeply human perspective to each conversation. The goal is not a generic
          answer. It is a clearer understanding of your situation and what to do
          next.
        </p>
      </section>

      <section className="consultation-focus" aria-labelledby="consultation-focus-title">
        <div className="shell">
          <div className="consultation-section-heading reveal">
            <p className="section-index">02 / Areas of guidance</p>
            <h2 id="consultation-focus-title">
              Personal guidance for the relationship <em>in front of you.</em>
            </h2>
          </div>

          <div className="consultation-focus-list reveal">
            {focusAreas.map((area, index) => (
              <article key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-guidance" aria-labelledby="consultation-guidance-title">
        <div className="consultation-guidance-image">
          <Image
            src="/images/dr-jack-speaking.jpg"
            alt="Rabbi Dr. Jack Cohen speaking with warmth and clarity"
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
          />
        </div>

        <div className="consultation-guidance-copy reveal">
          <p className="section-index">03 / What to expect</p>
          <h2 id="consultation-guidance-title">
            A practical conversation, shaped around <em>your life.</em>
          </h2>

          <div className="consultation-step-list">
            {conversationSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-closing shell reveal" aria-labelledby="consultation-closing-title">
        <p className="section-index">Start here</p>
        <h2 id="consultation-closing-title">
          You do not have to figure out the next step <em>alone.</em>
        </h2>
        <p>
          Reach out directly to begin a private conversation with Dr. Jack.
        </p>
        <div className="consultation-closing-actions">
          <a className="button" href="tel:+13052061916">
            Call 305-206-1916
          </a>
          <a className="email-link" href="mailto:jcohen.dating@gmail.com?subject=Private%20consultation%20request">
            Or email <span>jcohen.dating@gmail.com</span>
          </a>
        </div>
      </section>

      <SiteFooter activePage="Consultation" />
    </main>
  );
}
