import Image from "./components/SiteImage"

import Link from "next/link"

import { SiteFooter, SiteHeader } from "./components/SiteChrome"

const ministryHighlights = [
  ["Discipleship", "Growing in faith and serving faithfully."],

  ["Children & Youth", "Nurturing the next generation of the Church."],

  ["Worship", "Gathering together to praise and proclaim Christ."],

  ["Community Service", "Sharing Christ's love through practical care."],
]

const developmentPriorities = [
  "Education",

  "Health and social services",

  "Economic empowerment",

  "Care for creation",
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1745852738196-4dfed8cbd691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",

    alt: "A choir gathered in worship",
  },

  {
    src: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",

    alt: "Students learning together",
  },

  {
    src: "https://images.unsplash.com/photo-1509099896299-af46ad97ff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",

    alt: "Community members working together",
  },
]

function ReadMore({
  href,
  children = "Read more",
}: {
  href: string
  children?: string
}) {
  return (
    <Link className="home-read-more" href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

function SummaryCard({
  eyebrow,

  title,

  copy,

  href,
}: {
  eyebrow: string

  title: string

  copy: string

  href: string
}) {
  return (
    <article className="home-summary-card">
      <p className="home-summary-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="home-summary-copy">{copy}</p>
      <ReadMore href={href} />
    </article>
  )
}

export default function HomePage() {
  return (
    <main className="home-page">
      <SiteHeader activeHref="/" />

      <section className="hero" id="home">
        <Image
          alt="Bishop Kwikiriza Robert, Diocesan Bishop"
          className="hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/Bishop_Kwikiriza_Robert.jpeg"
          unoptimized
        />
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="shell hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Diocese of Semuliki</p>
            <h1>Building faith. Transforming lives.</h1>
            <p className="hero-subtitle">
              We are eyewitnesses of Jesus Christ all over the world.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/mission">
                Learn more <span aria-hidden="true">→</span>
              </Link>
              <Link
                className="button button-ghost"
                href="/partnerships-giving#cathedral-project"
              >
                Support the Cathedral
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="welcome-heading" className="home-welcome">
        <div className="shell home-welcome-grid">
          <div>
            <p className="eyebrow">Welcome to the Diocese</p>
            <h2 id="welcome-heading">
              A church rooted in Christ and present in the community.
            </h2>
            <p>
              The Diocese of Semuliki is part of the Worldwide Anglican Church.
              We proclaim the Gospel, form disciples, and serve our neighbours
              with compassion.
            </p>
            <ReadMore href="/about">Read more about the Diocese</ReadMore>
          </div>
          <aside className="home-verse">
            <p>Our calling</p>
            <blockquote>“You are witnesses of these things.”</blockquote>
            <span>Luke 24:48</span>
          </aside>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="home-section">
        <div className="shell home-section-heading">
          <p className="eyebrow">Our mission</p>
          <h2 id="mission-heading">One witness, expressed in daily life.</h2>
          <p>
            Through the Word, lives shaped by Christ, the power of the Holy
            Spirit, and care for our community.
          </p>
        </div>
        <div className="shell home-summary-grid home-summary-grid-four">
          <SummaryCard
            copy="We proclaim the good news of Jesus Christ and teach the Scriptures."
            eyebrow="The Word"
            href="/mission"
            title="Faithful teaching"
          />
          <SummaryCard
            copy="We seek to reflect Christ through integrity, compassion, and service."
            eyebrow="Our lives"
            href="/mission"
            title="Visible witness"
          />
          <SummaryCard
            copy="We depend on the Holy Spirit to guide and strengthen the Church."
            eyebrow="The Spirit"
            href="/mission"
            title="A Spirit-led Church"
          />
          <SummaryCard
            copy="We serve families and neighbours through holistic Christian mission."
            eyebrow="Our community"
            href="/mission"
            title="Love in action"
          />
        </div>
      </section>

      <section
        aria-labelledby="ministries-heading"
        className="home-section home-section-soft"
      >
        <div className="shell home-section-heading">
          <p className="eyebrow">Church & ministry</p>
          <h2 id="ministries-heading">
            There is a place for every generation.
          </h2>
          <p>
            Our ministries help people grow in faith, worship together, and
            share their gifts in service.
          </p>
        </div>
        <div className="shell home-summary-grid home-summary-grid-four">
          {ministryHighlights.map(([title, copy]) => (
            <SummaryCard
              copy={copy}
              eyebrow="Ministry"
              href="/ministries"
              key={title}
              title={title}
            />
          ))}
        </div>
        <div className="shell home-section-action">
          <ReadMore href="/ministries">Explore all ministries</ReadMore>
        </div>
      </section>

      <section aria-labelledby="plan-heading" className="home-plan">
        <div className="shell home-plan-grid">
          <div>
            <p className="eyebrow">Strategic plan · 2027–2031</p>
            <h2 id="plan-heading">A shared plan for lasting service.</h2>
            <p>
              The Diocese’s five-year plan sets out priorities for discipleship,
              church development, education, health, livelihoods, and good
              stewardship. These are planned priorities, not claims of completed
              work.
            </p>
            <ReadMore href="/strategic-plan">Read the strategic plan</ReadMore>
          </div>
          <div className="home-priority-list">
            {[
              "Spiritual growth & discipleship",

              "Infrastructure development",

              "Education",

              "Health & social services",

              "Economic empowerment",

              "Governance & sustainability",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="development-heading" className="home-section">
        <div className="shell home-development-grid">
          <div className="home-section-heading">
            <p className="eyebrow">Community development</p>
            <h2 id="development-heading">
              Faith that serves the whole person.
            </h2>
            <p>
              The Diocese’s development priorities connect Christian witness
              with practical care and opportunity for local communities.
            </p>
            <ReadMore href="/community-development">
              Read more about community development
            </ReadMore>
          </div>
          <div className="home-priority-tags">
            {developmentPriorities.map((priority) => (
              <span key={priority}>{priority}</span>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="leadership-heading"
        className="home-section home-section-soft"
      >
        <div className="shell home-summary-grid home-summary-grid-two">
          <SummaryCard
            copy="Meet the people entrusted with pastoral care, diocesan leadership, and the shared mission. Profiles are provided as confirmed."
            eyebrow="Our Diocese"
            href="/leadership"
            title="Leadership rooted in service"
          />
          <SummaryCard
            copy="Find parish and chapel communities, with directory information available to help you connect and worship together."
            eyebrow="Church directory"
            href="/parishes"
            title="Parishes & chapels"
          />
        </div>
        <span className="sr-only" id="leadership-heading">
          Leadership and parishes
        </span>
      </section>

      <section aria-labelledby="news-heading" className="home-section">
        <div className="shell home-summary-grid home-summary-grid-two">
          <SummaryCard
            copy="Visit the diocesan news and events page for announcements, gatherings, and stories as they are published."
            eyebrow="Stay informed"
            href="/news-events"
            title="News & events"
          />
          <SummaryCard
            copy="Explore images that reflect worship, learning, and community life across the Diocese."
            eyebrow="See our community"
            href="/gallery"
            title="Gallery"
          />
        </div>
        <span className="sr-only" id="news-heading">
          News, events, and gallery
        </span>
      </section>

      <section aria-labelledby="gallery-heading" className="home-gallery">
        <div className="shell home-gallery-heading">
          <div>
            <p className="eyebrow">Diocesan life</p>
            <h2 id="gallery-heading">Faith in worship and community.</h2>
          </div>
          <ReadMore href="/gallery">View the gallery</ReadMore>
        </div>
        <div className="home-gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <Image
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                src={image.src}
              />
            </figure>
          ))}
        </div>
        <p className="shell home-gallery-note">
          Representative photography. Images are illustrative and do not
          represent specific diocesan projects.
        </p>
      </section>

      <section
        aria-labelledby="partnership-heading"
        className="home-partnership"
      >
        <div className="shell home-partnership-grid">
          <div>
            <p className="eyebrow">Partnerships & giving</p>
            <h2 id="partnership-heading">Join us in prayerful partnership.</h2>
            <p>
              Churches, organisations, and individuals are welcome to learn
              about the Diocese’s priorities and explore ways to connect.
            </p>
          </div>
          <div className="home-partnership-actions">
            <ReadMore href="/partnerships-giving">
              Read more about partnership
            </ReadMore>
            <Link
              className="button button-gold"
              href="/partnerships-giving#cathedral-project"
            >
              Support the Cathedral Project
            </Link>
            <ReadMore href="/contact">Contact the Diocese</ReadMore>
          </div>
          <p className="home-giving-note">
            The cathedral fundraising target is UGX 1 billion. Official giving
            details are not yet available; please do not send funds to
            unverified accounts or numbers.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
