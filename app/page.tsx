import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const projects = [
  {
    number: "01",
    name: "Mvula",
    discipline: "Brand identity · Digital",
    description:
      "A grounded identity system built to make a climate-smart agriculture platform feel clear, useful, and distinctly local.",
    visual: "mvula",
  },
  {
    number: "02",
    name: "Soko",
    discipline: "Product design · Strategy",
    description:
      "A simpler path from discovery to checkout for a new generation of independent Malawian businesses.",
    visual: "soko",
  },
  {
    number: "03",
    name: "Tiyeni",
    discipline: "Campaign · Creative direction",
    description:
      "A bold, human campaign designed to turn a public message into an invitation people could act on.",
    visual: "tiyeni",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ProjectArtwork({ project }: { project: string }) {
  if (project === "mvula") {
    return (
      <div className="artwork artwork-mvula" aria-hidden="true">
        <span className="rain rain-one" />
        <span className="rain rain-two" />
        <span className="rain rain-three" />
        <div className="mvula-word">MVULA</div>
        <div className="mvula-note">Grow with the weather.</div>
      </div>
    );
  }

  if (project === "soko") {
    return (
      <div className="artwork artwork-soko" aria-hidden="true">
        <div className="soko-card soko-card-one">
          <span>Fresh</span>
          <strong>MK 8,500</strong>
        </div>
        <div className="soko-card soko-card-two">
          <span>Local</span>
          <strong>Made here</strong>
        </div>
        <div className="soko-mark">S</div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-tiyeni" aria-hidden="true">
      <div className="tiyeni-ring" />
      <div className="tiyeni-copy">
        <span>MOVE</span>
        <span>WITH</span>
        <span>US.</span>
      </div>
      <div className="tiyeni-label">TIYENI / LET&apos;S GO</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="eyebrow reveal reveal-one">
            <span className="signal-dot" /> Independent creative company · Malawi
          </div>
          <h1 className="reveal reveal-two">
            We make brands
            <br />
            <span>move with purpose.</span>
          </h1>
          <div className="hero-bottom reveal reveal-three">
            <p>
              265Integrated brings strategy, design, and technology together to
              build identities and digital experiences that feel inevitable.
            </p>
            <a className="text-link" href="#work">
              See selected work <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="work shell" id="work">
          <div className="section-heading">
            <p>Selected work</p>
            <p>2024—26</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <ProjectArtwork project={project.visual} />
                <div className="project-meta">
                  <span>{project.number}</span>
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.discipline}</p>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement shell">
          <p className="section-kicker">One integrated practice</p>
          <div className="statement-grid">
            <h2>From the first thought to the final touchpoint.</h2>
            <div>
              <p>
                We work across brand strategy, identity, campaigns, and digital
                products—connecting every part so the whole idea lands.
              </p>
              <Link className="button-link" href="/about">
                More about us <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <p>Have something in mind?</p>
          <a href="mailto:hello@265integrated.com">
            Let&apos;s make it real.
            <ArrowIcon />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
