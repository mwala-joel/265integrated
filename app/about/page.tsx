import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet 265Integrated, an independent creative company in Malawi working across strategy, design, and technology.",
};

const services = [
  "Brand strategy",
  "Visual identity",
  "Creative direction",
  "Campaigns",
  "Web design",
  "Digital products",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-hero shell">
          <p className="eyebrow reveal reveal-one">About 265Integrated</p>
          <h1 className="reveal reveal-two">
            Small by design.
            <br />
            <span>Wide in perspective.</span>
          </h1>
          <p className="about-intro reveal reveal-three">
            We are an independent creative company in Malawi, built to close
            the distance between a good idea and a well-made experience.
          </p>
        </section>

        <section className="about-body shell">
          <div className="about-copy">
            <p className="section-kicker">How we work</p>
            <div>
              <h2>Clarity first. Craft all the way through.</h2>
              <p>
                We begin by finding the clearest version of the problem. Then
                we bring the right mix of strategy, writing, design, and
                technology around it. Fewer handoffs. Stronger outcomes.
              </p>
              <p>
                Our model is deliberately collaborative: a focused core team,
                joined by trusted specialists when the work calls for them.
              </p>
            </div>
          </div>

          <div className="services">
            <p className="section-kicker">What we do</p>
            <ol>
              {services.map((service, index) => (
                <li key={service}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {service}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="principle shell">
          <div className="principle-mark">265</div>
          <p>
            The country code is in our name because where we come from shapes
            how we see: resourceful, open, and always connected to the wider
            world.
          </p>
        </section>

        <section className="contact shell">
          <p>Ready when you are.</p>
          <a href="mailto:hello@265integrated.com">
            hello@265integrated.com
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
