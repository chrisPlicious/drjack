import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const consultationUrl = "/book-a-consultation";

const counselingServices = [
  {
    title: "Individual counseling",
    description:
      "Private sessions focused on self-awareness, confidence, and the communication patterns shaping your relationships.",
  },
  {
    title: "Couples counseling",
    description:
      "Practical guidance to work through conflict, rebuild trust, and create a deeper understanding of one another.",
  },
  {
    title: "Online dating support",
    description:
      "Thoughtful help with profiles, platforms, and the choices that lead to more meaningful introductions.",
  },
  {
    title: "Workshops and seminars",
    description:
      "Interactive sessions on dating etiquette, body language, communication, and maintaining healthy relationships.",
  },
] as const;

const reasons = [
  {
    title: "Depth of experience",
    description:
      "More than two decades of practical relationship work informed by study at NYU, Harvard, and medical school.",
  },
  {
    title: "Personal attention",
    description:
      "Every person and relationship is different. Sessions respond to your story, needs, and goals.",
  },
  {
    title: "Complete confidentiality",
    description:
      "Conversations take place in a private, respectful setting where honesty can come first.",
  },
  {
    title: "Guidance you can use",
    description:
      "Insight is paired with clear, practical next steps you can carry into daily life and relationships.",
  },
] as const;

export const metadata: Metadata = {
  title: "Couples Counseling & Relationship Coaching | Dr. Jack Cohen",
  description:
    "Private, practical counseling and relationship coaching for individuals and couples with Rabbi Dr. Jack Cohen.",
};

export default function CounselingPage() {
  return (
    <main className="counseling-page" id="counseling-page">
        <section className="counseling-hero" aria-labelledby="counseling-title">
          <div className="counseling-hero-copy">
            <p className="eyebrow">Counseling &amp; relationship coaching</p>
            <h1 id="counseling-title">
              Build a love that stands the <em>test of time.</em>
            </h1>
            <p className="counseling-hero-intro">
              Private, practical guidance for individuals and couples who want to
              understand what is getting in the way—and move forward together.
            </p>
            <div className="hero-actions">
              <Link className="button" href={consultationUrl}>
                Book a consultation
              </Link>
              <a className="text-link" href="#counseling-services">
                Explore counseling
              </a>
            </div>
          </div>

          <div className="counseling-hero-image">
            <Image
              src="/images/couple-conversation.png"
              alt="A couple listening to one another during a private conversation"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 48vw"
            />
            <p aria-hidden="true">Listen closely. Speak honestly.</p>
          </div>
        </section>

        <section className="counseling-intro shell reveal" aria-labelledby="counseling-intro-title">
          <div className="counseling-intro-image">
            <Image
              src="/images/dr-jack-portrait.png"
              alt="Rabbi Dr. Jack Cohen seated in his study"
              fill
              sizes="(max-width: 767px) 100vw, 38vw"
            />
          </div>

          <div className="counseling-intro-copy">
            <p className="section-index">01 / A personal approach</p>
            <h2 id="counseling-intro-title">
              Experience meets you <em>where you are.</em>
            </h2>
            <p className="intro-lead">
              For more than 20 years, Dr. Jack Cohen has helped individuals and
              couples navigate the complexities of dating, marriage, and modern
              relationships.
            </p>
            <p>
              Drawing on education from NYU, Harvard, and medical school, he combines
              deep expertise with a warm, personalized approach. The goal is not a
              one-size-fits-all answer, but greater clarity, stronger communication,
              and meaningful change that lasts.
            </p>
          </div>
        </section>

        <section
          className="counseling-services"
          id="counseling-services"
          aria-labelledby="counseling-services-title"
        >
          <div className="shell">
            <div className="counseling-section-heading reveal">
              <p className="section-index">02 / Ways to work together</p>
              <h2 id="counseling-services-title">
                Support shaped around <em>your relationship.</em>
              </h2>
            </div>

            <div className="counseling-service-list reveal">
              {counselingServices.map((service, index) => (
                <article key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="counseling-reasons shell reveal" aria-labelledby="reasons-title">
          <div className="counseling-reasons-heading">
            <p className="section-index">03 / Why Dr. Jack</p>
            <h2 id="reasons-title">
              Serious guidance,<br />offered with <em>care.</em>
            </h2>
            <p>
              A steady, confidential space to understand the pattern—and choose a
              better next step.
            </p>
          </div>

          <div className="counseling-reason-grid">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="counseling-closing shell reveal" aria-labelledby="counseling-closing-title">
          <p className="section-index">Begin with a conversation</p>
          <h2 id="counseling-closing-title">
            Your relationship can feel<br />clearer from <em>here.</em>
          </h2>
          <p>
            Schedule a private consultation to discuss what you are facing and what
            meaningful progress could look like.
          </p>
          <Link className="button" href={consultationUrl}>
            Book a consultation
          </Link>
          <a className="email-link" href="mailto:jcohen.dating@gmail.com">
            Prefer email? <span>jcohen.dating@gmail.com</span>
          </a>
        </section>

        <SiteFooter activePage="Counseling" />
    </main>
  );
}
