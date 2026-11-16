import Image from "next/image"
import Link from "next/link"
import { SiteFooter, SiteHeader } from "./SiteChrome"

const storyParagraphs = [
  "The Diocese of Semuliki is part of the Worldwide Anglican Church, born out of a deep conviction that the Gospel of Jesus Christ must reach every corner of the Semuliki region — not only in word, but in life, in power, and in community.",
  "Rooted in the Great Commission and empowered by the Holy Spirit, the Diocese exists to proclaim Christ, to form disciples, and to serve the whole person. From its earliest vision, the Church in Semuliki has been shaped by the belief that faith must take root in everyday life — in families, schools, clinics, farms, and marketplaces.",
  "The name “Semuliki” carries the identity of a people and a land: a region rich in culture, resilience, and hope, yet also carrying real needs in education, health, and economic opportunity. The Diocese was envisioned to stand at the intersection of spiritual vitality and practical service — a Church that does not retreat from the world, but witnesses Christ within it.",
  "Guided by the 2027–2031 Strategic Plan, the Diocese is laying foundations across six pillars: spiritual growth and discipleship, infrastructure development, education, health and social services, economic empowerment, and governance and sustainability. Each pillar reflects a commitment to walk alongside communities — not as an outsider, but as a neighbour.",
  "Leadership in the Diocese is entrusted to servant-hearted men and women called to steward the mission with integrity, accountability, and pastoral care. The Diocesan Bishop, the Diocesan Secretary, and the wider leadership team are committed to building a Church that is both deeply Anglican and profoundly local.",
  "Today, the Diocese of Semuliki is a growing family of parishes, chapels, and ministries — a witness of hope in the heart of the region. Every gathering, every act of service, and every prayer is offered to the glory of God and the flourishing of the people He loves.",
]

const values = [
  {
    title: "Faithfulness",
    copy: "Steadfast devotion to Christ and His Word in every season.",
  },
  {
    title: "Integrity",
    copy: "Honest, accountable leadership that earns trust.",
  },
  {
    title: "Community",
    copy: "A Church that belongs to and serves its people.",
  },
  { title: "Excellence", 
    copy: "Quality in worship, teaching, and service." },
  {
    title: "Sustainability",
    copy: "Building institutions that endure for generations.",
  },
  {
    title: "Compassion",
    copy: "Love expressed in practical, dignifying care.",
  },
]

export function AboutPage() {
  return (
    <main className="inner-page bg-ivory text-navy">
      <SiteHeader activeHref="/about" />
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
          <p>About Us</p>
          <h1>Rooted in Christ. Called to witness.</h1>
          <Link href="/">Home</Link>
          <span> / About Us</span>
        </div>
      </section>
      <section className="inner-intro">
        <div className="shell">
          <div>
            <p className="eyebrow">Diocese of Semuliki</p>
            <h2>
              A Christ-centered Diocese envisioned to transform the Semuliki
              region through the love of Jesus Christ.
            </h2>
          </div>
          <p>
            Formal history, canonical details and institutional milestones will
            be added only after verification. What follows is the verified
            vision, mission and values that guide diocesan life.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="shell">
          <div className="story-heading">
            <p className="eyebrow">Our story</p>
            <h2>The witness that became a Diocese.</h2>
            <p className="story-lead">
              How a shared calling to bear witness to Jesus Christ took root in
              the Semuliki region and grew into a diocesan family.
            </p>
          </div>
          <div className="story-body">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="story-pullquote">
            <span className="quote-mark">“</span>
            <blockquote>
              We are eye witnesses of Jesus Christ all over the world — called
              to bear witness through Word, Life, Power, and Community.
            </blockquote>
            <cite>Acts 1:8 · 1 John 1:1–3 · Luke 24:48</cite>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-values-section">
        <div className="shell">
          <div className="about-values-grid">
            <article className="about-value-card about-value-card--vision">
              <p className="eyebrow text-gold">Our vision</p>
              <h3>
                A Christ-centered Diocese transforming the Semuliki region.
              </h3>
              <p>
                Spiritually, socially, and economically through the love of
                Jesus Christ — a diocese where faith takes root and love reaches
                out.
              </p>
            </article>
            <article className="about-value-card about-value-card--mission">
              <p className="eyebrow text-gold">Our mission</p>
              <h3>To establish a vibrant Anglican Diocese.</h3>
              <p>
                Nurturing disciples, building sustainable infrastructure, and
                serving the community through education, healthcare, and
                outreach.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="about-values-list-section">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">Our values</p>
            <h2>Six commitments that shape diocesan life.</h2>
            <p>
              These values guide leadership, ministry, and service across every
              parish and chapel in the Diocese.
            </p>
          </div>
          <div className="about-values-list">
            {values.map((value, index) => (
              <article className="about-value-item" key={value.title}>
                <span className="about-value-item__index">
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
            <Link className="button button-gold" href="/partnerships-giving">
              Partner With Us
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
