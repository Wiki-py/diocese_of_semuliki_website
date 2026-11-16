import Image from "./SiteImage"
import Link from "next/link"
import { SiteFooter, SiteHeader } from "./SiteChrome"

const missionDimensions = [
  {
    label: "1 John 1:1–3",
    title: "Witness Christ in the Word",
    copy: "Proclaiming the truth we have heard, seen and experienced, so that all may share in fellowship with Christ. The Word is the foundation of our witness — we proclaim Jesus Christ as Lord, teaching the Scriptures and making disciples who know and love the truth.",
    icon: "book",
  },
  {
    label: "Luke 24:48",
    title: "Witness Christ in our Lives",
    copy: "Living as faithful witnesses whose character, service and compassion make the Gospel visible in everyday life. Our lives are the evidence of the Gospel — through integrity, humility and love, we show the world what Christ is like.",
    icon: "heart",
  },
  {
    label: "Acts 1:8",
    title: "Witness Christ in Power",
    copy: "Trusting the Holy Spirit to equip the Church for bold, faithful witness from Semuliki to the ends of the earth. We do not rely on our own strength but on the power of the Spirit who empowers, guides and sustains the mission.",
    icon: "flame",
  },
  {
    label: "Mark 16:15",
    title: "Witness Christ in Community",
    copy: "Going into all the world through holistic mission that strengthens families and serves the whole community. The Gospel is not only spoken — it is lived out in service, justice, education, health and care for creation.",
    icon: "people",
  },
]

const missionStatement =
  "To establish a vibrant Anglican Diocese that nurtures disciples, builds sustainable infrastructure, and serves the community through education, healthcare, and outreach."

const missionValues = [
  {
    title: "Proclamation",
    copy: "Making Jesus Christ known through faithful preaching and teaching of the Scriptures.",
  },
  {
    title: "Discipleship",
    copy: "Equipping believers to grow in faith, character and service.",
  },
  { title: "Service", copy: "Meeting real needs with compassion and dignity." },
  {
    title: "Empowerment",
    copy: "Strengthening communities economically, socially and spiritually.",
  },
  {
    title: "Partnership",
    copy: "Walking together with churches, organisations and individuals.",
  },
  {
    title: "Stewardship",
    copy: "Caring wisely for people, resources and creation.",
  },
]

export function MissionPage() {
  return (
    <main className="inner-page bg-ivory text-navy">
      <SiteHeader activeHref="/mission" />
      <section className="inner-hero">
        <Image
          alt="A choir gathered in Christian worship"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1745852738196-4dfed8cbd691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800"
        />
        <div />
        <div className="shell">
          <p>Mission</p>
          <h1>Witnessing Christ in every dimension of life.</h1>
          <Link href="/">Home</Link>
          <span> / Mission</span>
        </div>
      </section>
      <section className="inner-intro">
        <div className="shell">
          <div>
            <p className="eyebrow">Diocese of Semuliki</p>
            <h2>
              Called by the Great Commission and empowered by the Holy Spirit to
              make Jesus Christ known.
            </h2>
          </div>
          <p>
            The mission is expressed through Word, Life, Power, and Community —
            four dimensions of a single calling to bear witness to Jesus Christ
            in every sphere of life.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="mission-statement-section">
        <div className="shell">
          <div className="mission-statement">
            <span className="quote-mark">“</span>
            <p>{missionStatement}</p>
          </div>
        </div>
      </section>

      {/* Four dimensions */}
      <section className="mission-dimensions-section">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">Our calling</p>
            <h2>One witness. Four expressions.</h2>
            <p>
              We bear witness to Jesus Christ through Word, Life, Power, and
              Community — uniting proclamation with faithful presence and
              practical service.
            </p>
          </div>
          <div className="mission-dimensions-grid">
            {missionDimensions.map((dim, index) => (
              <article className="mission-dimension-card" key={dim.title}>
                <div className="mission-dimension-card__header">
                  <span className="mission-dimension-card__number">
                    0{index + 1}
                  </span>
                  <span className="mission-dimension-card__scripture">
                    {dim.label}
                  </span>
                </div>
                <h3>{dim.title}</h3>
                <p>{dim.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission values */}
      <section className="mission-values-section">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">How we live it out</p>
            <h2>Six commitments that carry the mission forward.</h2>
            <p>
              These commitments shape how the Diocese proclaims, serves, and
              empowers across the Semuliki region.
            </p>
          </div>
          <div className="mission-values-grid">
            {missionValues.map((value, index) => (
              <article className="mission-value-item" key={value.title}>
                <span className="mission-value-item__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="shell">
          <p>Our shared witness</p>
          <h2>Building Faith, Transforming Lives.</h2>
          <div>
            <Link
              className="button button-gold"
              href="/partnerships-giving#cathedral-project"
            >
              Support the Cathedral Project
            </Link>
            <Link className="button button-ghost" href="/contact">
              Contact the Diocese
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
