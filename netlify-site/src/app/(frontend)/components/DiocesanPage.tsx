import Image from "./SiteImage"
import Link from "next/link"
import { ContactForm } from "./ContactForm"
import { SiteFooter, SiteHeader } from "./SiteChrome"

export const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Mission", "/mission"],
  ["Leadership", "/leadership"],
  ["Parishes", "/parishes"],
  ["Ministries", "/ministries"],
  ["Strategic Plan", "/strategic-plan"],
  ["Development", "/community-development"],
  ["News & Events", "/news-events"],
  ["Gallery", "/gallery"],
  ["Partnerships", "/partnerships-giving"],
  ["Contact", "/contact"],
] as const

type Card = {
  title: string
  copy: string
  label?: string
}
type PageData = {
  path: string
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  notice: string
  cards: Card[]
  variant?:
    | "leaders"
    | "parishes"
    | "timeline"
    | "gallery"
    | "contact"
    | "ministries"
}

const ministryAreas = [
  {
    number: "01",
    icon: "mission",
    title: "Evangelism, Mission and Church Growth",
    copy: "Gospel outreach, crusades, church planting and mission work that reaches communities with limited access to the Gospel.",
  },
  {
    number: "02",
    icon: "formation",
    title: "Discipleship and Spiritual Formation",
    copy: "Bible teaching, prayer, Christian leadership development and pastoral care to nurture believers in their faith.",
  },
  {
    number: "03",
    icon: "family",
    title: "Youth, Children and Family Ministry",
    copy: "Sunday school, youth fellowships, mentorship, skills development, family support and child safeguarding.",
  },
  {
    number: "04",
    icon: "fellowship",
    title: "Women and Men's Ministries",
    copy: "Fellowship, leadership development, family strengthening, economic empowerment and meaningful community participation.",
  },
  {
    number: "05",
    icon: "care",
    title: "Health, Education and Social Welfare",
    copy: "Health awareness, education initiatives, poverty alleviation, support for vulnerable people and compassionate community care.",
  },
  {
    number: "06",
    icon: "creation",
    title: "Environmental Stewardship and Community Development",
    copy: "Tree planting, conservation, climate awareness, sustainable livelihoods and community disaster preparedness.",
  },
  {
    number: "07",
    icon: "leadership",
    title: "Leadership, Governance and Institutional Development",
    copy: "Clergy training, sound church administration, accountability, financial sustainability and stronger parishes and archdeaconries.",
  },
  {
    number: "08",
    icon: "communication",
    title: "Communication, Media and Digital Evangelism",
    copy: "Livestreaming, website development, social media outreach, digital discipleship and sharing testimonies of God's work.",
  },
] as const

const ministryStages = [
  {
    year: "2027",
    name: "Foundation",
    copy: "Establish shared priorities, relationships and foundations for the strategic journey.",
  },
  {
    year: "2028",
    name: "Construct",
    copy: "Build ministry capacity, systems and structures that support diocesan service.",
  },
  {
    year: "2029",
    name: "Expand",
    copy: "Extend the reach of ministry and strengthen participation across communities.",
  },
  {
    year: "2030",
    name: "Consolidate",
    copy: "Bring learning together and reinforce effective ministry and institutional practices.",
  },
  {
    year: "2031",
    name: "Sustain",
    copy: "Support continuity and long-term stewardship of the Diocese's mission.",
  },
] as const

const ministryIcons = {
  mission: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  formation: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M9 7h7M9 11h7" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a6 6 0 0 1 12 0v1M17 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20" />
    </>
  ),
  fellowship: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 20v-1a5.5 5.5 0 0 1 11 0v1M14 16a4.5 4.5 0 0 1 7.5 3.3v.7" />
    </>
  ),
  care: (
    <>
      <path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
      <path d="M12 9v5M9.5 11.5h5" />
    </>
  ),
  creation: (
    <>
      <path d="M20 4c-7 0-12 2-12 8a4 4 0 0 0 4 4c6 0 8-5 8-12Z" />
      <path d="M4 21c2-5 5-8 11-11M5 8a3 3 0 0 1 3-3M4 13a3 3 0 0 1 3 3" />
    </>
  ),
  leadership: (
    <>
      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6M8 10h.01M16 10h.01" />
    </>
  ),
  communication: (
    <>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
} as const

function PlannedMinistrySection() {
  return (
    <div className="planned-ministry">
      <div className="planned-ministry__intro">
        <p className="eyebrow">Our shared calling</p>
        <h2 id="section-focus-heading">
          A Planned Area of Diocesan Ministry and Service
        </h2>
        <p>
          Across its 2027 – 2031 strategic journey, the Diocese of Semuliki plans
          to proclaim the Gospel, strengthen the Church and serve communities.
          These ministry areas describe a shared direction for prayer, planning
          and participation.
        </p>
      </div>

      <div className="planned-ministry__grid">
        {ministryAreas.map((area) => (
          <article className="planned-ministry-card" key={area.number}>
            <div className="planned-ministry-card__top">
              <span className="planned-ministry-card__number">
                {area.number}
              </span>
              <span aria-hidden="true" className="planned-ministry-card__icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  {ministryIcons[area.icon]}
                </svg>
              </span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.copy}</p>
          </article>
        ))}
      </div>

      <section
        aria-labelledby="ministry-journey-heading"
        className="ministry-journey"
      >
        <div className="ministry-journey__heading">
          <p className="eyebrow">A shared path forward</p>
          <h2 id="ministry-journey-heading">
            Our Five-Year Strategic Ministry Journey: 2027–2031
          </h2>
          <p>
            These are strategic stages for the journey ahead, not a report of
            completed activities or outcomes.
          </p>
        </div>
        <ol className="ministry-journey__stages">
          {ministryStages.map((stage) => (
            <li className="ministry-journey__stage" key={stage.year}>
              <span className="ministry-journey__year">{stage.year}</span>
              <h3>{stage.name}</h3>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="ministry-invitation">
        <div>
          <p className="eyebrow">Join the mission</p>
          <h2>There is a place for you in this shared calling.</h2>
          <p>
            Churches, clergy, youth, volunteers, development partners and
            community members are invited to take part through prayer, service
            and collaboration.
          </p>
        </div>
        <Link className="button button-gold" href="/contact">
          Connect with the Diocese <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </div>
  )
}

const images = {
  worship:
    "https://images.unsplash.com/photo-1745852738196-4dfed8cbd691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
  community:
    "https://images.unsplash.com/photo-1656278345229-317f16358cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
  education:
    "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
  outreach:
    "https://images.unsplash.com/photo-1509099896299-af46ad97ff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
  children:
    "https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
}

const gallery = [
  images.community,
  images.worship,
  images.education,
  images.outreach,
  images.children,
]

function Special({ variant }: { variant: PageData["variant"] }) {
  if (variant === "leaders")
    return (
      <div className="inner-profiles">
        {[
          {
            role: "Diocesan Bishop",
            name: "Bishop Kwikiriza Robert",
            image: "/images/Bishop_Kwikiriza_Robert.jpeg",
            imageAlt: "Bishop Kwikiriza Robert",
          },
          {
            role: "Diocesan Secretary",
            name: "Kule Gerald",
            image: "/images/Secretary_of_the_dioces_%20Gerald.jpeg",
            imageAlt: "Kule Gerald, Diocesan Secretary",
          },
          {
            role: "Projects and Development Officer",
            name: "Kyomugisha Damali",
            image: "/images/project development officer.jpeg",
            imageAlt: "Kyomugisha Damali, Projects and Development Officer",
          },
          { role: "Mission & Ministry Lead" },
          { role: "Education Lead" },
        ].map(({ role, name, image, imageAlt }) => (
          <article key={role}>
            <div className="inner-portrait">
              {image ? (
                <Image
                  alt={imageAlt ?? ""}
                  className="leader-photo"
                  fill
                  priority
                  sizes="(max-width: 900px) 50vw, 25vw"
                  src={image}
                />
              ) : (
                "Profile"
              )}
            </div>
            <p>{name ? "Diocesan leadership" : "Details forthcoming"}</p>
            <h3>{name ?? role}</h3>
            <span>
              {name
                ? role
                : "Name, photograph, biography and contacts to be confirmed."}
            </span>
          </article>
        ))}
      </div>
    )
  if (variant === "parishes")
    return (
      <div className="inner-directory">
        <div>
          <label htmlFor="parish-query">Search future parish directory</label>
          <input
            disabled
            id="parish-query"
            placeholder="Parish name or location"
          />
        </div>
        <section>
          <p>Verified information forthcoming</p>
          <h3>Parish records will be published here.</h3>
          <span>
            Locations, service times, contacts and directions will be added
            after confirmation.
          </span>
        </section>
      </div>
    )
  if (variant === "timeline")
    return (
      <>
        <div className="inner-warning">
          <strong>Planned targets—not achieved results</strong>
          <span>All figures are goals for the 2027–2031 period.</span>
        </div>
        <div className="inner-timeline">
          {[
            ["2027", "Foundation", "3 parishes"],
            ["2028", "Construction", "6 parishes"],
            ["2029", "Expansion", "10 parishes"],
            ["2030", "Consolidation", "13 parishes"],
            ["2031", "Sustainability", "15 parishes"],
          ].map(([year, phase, target]) => (
            <article key={year}>
              <strong>{year}</strong>
              <h3>{phase}</h3>
              <p>{target}</p>
            </article>
          ))}
        </div>
        <div className="inner-targets">
          {[
            ["15", "Parishes"],
            ["5,000", "Baptized members"],
            ["3", "Schools"],
            ["1,000", "Students"],
            ["1", "Health centre"],
            ["10,000", "Patients served annually"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </>
    )
  if (variant === "gallery")
    return (
      <>
        <div className="inner-warning">
          <strong>Representative photography</strong>
          <span>Official diocesan media can replace these images later.</span>
        </div>
        <div className="inner-gallery">
          {gallery.map((src, index) => (
            <figure key={src}>
              <Image
                alt={
                  [
                    "Community gathering",
                    "Worship gathering",
                    "Classroom education",
                    "Community outreach",
                    "Children in community",
                  ][index]
                }
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                src={src}
              />
            </figure>
          ))}
        </div>
      </>
    )
  if (variant === "contact")
    return (
      <div className="inner-contact">
        <section>
          <p className="inner-contact__eyebrow">Get in touch</p>
          <h3>Contact the Diocese</h3>
          <p className="inner-contact__intro">
            We welcome your questions and messages. Reach out using the contact
            details below.
          </p>
          <div className="inner-contact__details">
            <a href="tel:+256791106785">
              <span>Phone</span>
              <strong>(+256) 791106785</strong>
            </a>
            <a href="mailto:wac.semulikidiocese@gmail.com">
              <span>Email</span>
              <strong>wac.semulikidiocese@gmail.com</strong>
            </a>
          </div>
          <p className="inner-contact__note">
            Official address, telephone, email, social links and map will be
            updated as details are confirmed.
          </p>
        </section>
        <ContactForm />
      </div>
    )
  return null
}

export function DiocesanPage({ data }: { data: PageData }) {
  return (
    <main className="inner-page bg-ivory text-navy">
      <SiteHeader activeHref={data.path} />
      <section
        className={
          data.variant === "ministries"
            ? "inner-hero inner-hero--planned"
            : "inner-hero"
        }
      >
        {data.variant !== "ministries" && (
          <Image
            alt={data.imageAlt}
            fill
            priority
            sizes="100vw"
            src={data.image}
          />
        )}
        <div />
        <div className="shell">
          <p>{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <Link href="/">Home</Link>
          <span> / {data.eyebrow}</span>
        </div>
      </section>
      <section className="inner-intro">
        <div className="shell">
          <div>
            <p className="eyebrow">Diocese of Semuliki</p>
            <h2>{data.intro}</h2>
          </div>
          <p>{data.notice}</p>
        </div>
      </section>
      {data.path === "/partnerships-giving" && (
        <section
          className="giving-details"
          aria-labelledby="giving-details-title"
        >
          <div className="shell">
            <div className="giving-details-heading">
              <p className="eyebrow">Giving to the Diocese</p>
              <h2 id="giving-details-title">Give with confidence.</h2>
              <p>
                Verified giving instructions are being prepared. Official bank
                and mobile-money details will be published here once confirmed.
              </p>
            </div>
            <article
              aria-labelledby="cathedral-project-title"
              className="cathedral-campaign"
              id="cathedral-project"
            >
              <div>
                <p className="eyebrow">Cathedral building campaign</p>
                <h3 id="cathedral-project-title">
                  Help build a cathedral for Semuliki.
                </h3>
                <p>
                  The Diocese is raising support toward a new cathedral, with a
                  fundraising target of UGX 1 billion. Contact us to discuss a
                  pledge or learn how you can support the project.
                </p>
                <Link className="button button-gold" href="/contact">
                  Contact us to support the project
                </Link>
              </div>
              <div className="cathedral-campaign-target">
                <span>Fundraising target</span>
                <strong>UGX 1 billion</strong>
              </div>
            </article>
            <div className="giving-options">
              <article>
                <span>Bank transfer</span>
                <h3>Bank account</h3>
                <p>Official payment details coming soon.</p>
              </article>
              <article>
                <span>Mobile money</span>
                <h3>Mobile giving</h3>
                <p>Official provider and recipient details coming soon.</p>
              </article>
            </div>
            <p className="giving-safety">
              For your security, please do not send money to unofficial or
              unverified accounts or numbers.
            </p>
          </div>
        </section>
      )}
      <section
        aria-labelledby="section-focus-heading"
        className="inner-content"
      >
        <div className="shell">
          <Special variant={data.variant} />
          {data.variant === "ministries" ? (
            <PlannedMinistrySection />
          ) : (
            <>
              <div className="inner-heading">
                <p>Our focus</p>
                <h2 id="section-focus-heading">
                  How this work serves the Diocese
                </h2>
                <span>
                  Our shared calling is expressed through worship,
                  discipleship, service, and care for our communities.
                </span>
              </div>
              <div className="inner-cards">
                {data.cards.map((card, index) => (
                  <article key={card.title}>
                    <p>{card.label ?? String(index + 1).padStart(2, "0")}</p>
                    <h3>{card.title}</h3>
                    <span>{card.copy}</span>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="inner-cta">
        <div className="shell">
          <p>Our shared witness</p>
          <h2>Building Faith, Transforming Lives and Winning Souls.</h2>
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

const cards = (
  titles: string[],
  copy = "A planned area of diocesan ministry and service.",
) => titles.map((title) => ({ title, copy }))
export const pages: Record<string, PageData> = {
  about: {
    path: "/about",
    eyebrow: "About Us",
    title: "Rooted in Christ. Called to witness.",
    intro:
      "A Christ-centered Diocese envisioned to transform the Semuliki region through the love of Jesus Christ.",
    image: images.worship,
    imageAlt: "A choir gathered in Christian worship",
    notice:
      "Formal history, canonical details and institutional milestones will be added only after verification.",
    cards: cards(
      [
        "Vision",
        "Mission",
        "Faithfulness",
        "Integrity",
        "Community",
        "Excellence",
        "Sustainability",
        "Compassion",
      ],
      "To be a Christ-cantered Diocese that transforms the Semuliki region spiritually, socially, emotionally, and economically through the love of Jesus Christ.",
    ),
  },
  mission: {
    path: "/mission",
    eyebrow: "Mission",
    title: "Witnessing Christ in every dimension of life.",
    intro:
      "Called by the Great Commission and empowered by the Holy Spirit to make Jesus Christ known.",
    image: images.community,
    imageAlt: "A Christian community gathering",
    notice:
      "The mission is expressed through Word, Life, Power, and Community.",
    cards: [
      {
        label: "1 John 1:1–3",
        title: "Witness Christ in the Word",
        copy: "Proclaiming the truth received in Jesus Christ.",
      },
      {
        label: "Luke 24:48",
        title: "Witness Christ in our Lives",
        copy: "Living with character and visible compassion.",
      },
      {
        label: "Acts 1:8",
        title: "Witness Christ in Power",
        copy: "Trusting the Holy Spirit for bold witness.",
      },
      {
        label: "Mark 16:15",
        title: "Witness Christ in Community",
        copy: "Serving families through holistic mission.",
      },
    ],
  },
  leadership: {
    path: "/leadership",
    eyebrow: "Leadership",
    title: "Called to serve. Entrusted to steward.",
    intro:
      "Leadership shaped by prayer, integrity, accountability and pastoral care.",
    image: images.worship,
    imageAlt: "Christian worship leaders",
    notice:
      "Portraits are provided for the Diocesan Bishop, Diocesan Secretary and Projects and Development Officer. Additional verified leadership details will be added when available.",
    variant: "leaders",
    cards: cards(
      ["Pastoral Care", "Good Governance", "Mission Focus"],
      "A guiding principle for servant leadership.",
    ),
  },
  parishes: {
    path: "/parishes",
    eyebrow: "Parishes",
    title: "Local churches. One diocesan family.",
    intro:
      "Connecting people to worship, fellowship, discipleship and service across Semuliki.",
    image: images.community,
    imageAlt: "A local community gathering",
    notice:
      "The plan does not provide verified parish names, locations or service times.",
    variant: "parishes",
    cards: cards(
      ["Worship Times", "Location & Directions", "Parish Contacts"],
      "Verified information will be published when available.",
    ),
  },
  ministries: {
    path: "/ministries",
    eyebrow: "Ministries",
    title: "Every generation. Every gift. One mission.",
    intro:
      "Equipping the whole Church to grow as disciples and participate in Christ’s mission.",
    image: images.children,
    imageAlt: "Children smiling together",
    notice:
      "Verified leaders, schedules and participation details can be added later.",
    variant: "ministries",
    cards: cards([
      "Evangelism",
      "Discipleship",
      "Youth",
      "Children",
      "Women",
      "Men",
      "Worship",
      "Education",
      "Health",
      "Social Services",
      "Environmental Stewardship",
      "Economic Empowerment",
    ]),
  },
  strategy: {
    path: "/strategic-plan",
    eyebrow: "Strategic Plan 2027–2031",
    title: "A five-year pathway toward sustainable witness.",
    intro:
      "Six pillars connect spiritual vitality, community wellbeing and institutional strength.",
    image: images.education,
    imageAlt: "Children participating in education",
    notice: "All numerical figures are planned targets, not achieved results.",
    variant: "timeline",
    cards: cards(
      [
        "Spiritual Growth and Discipleship",
        "Infrastructure Development",
        "Education",
        "Health and Social Services",
        "Economic Empowerment",
        "Governance and Sustainability",
      ],
      "A core priority for the 2027 – 2031 planning period.",
    ),
  },
  development: {
    path: "/community-development",
    eyebrow: "Community Development",
    title: "Serving the whole person. Strengthening community.",
    intro:
      "Christian witness expressed through education, health, social care, creation stewardship and livelihoods.",
    image: images.outreach,
    imageAlt: "Community outreach",
    notice:
      "Descriptions represent strategic intentions, not completed projects.",
    cards: cards(
      [
        "Education",
        "Health",
        "Social Services",
        "Environmental Stewardship",
        "Economic Empowerment",
      ],
      "A planned initiative with future opportunities for participation.",
    ),
  },
  developmentEducation: {
    path: "/community-development/education",
    eyebrow: "Community Development · Education",
    title: "Learning that equips every generation.",
    intro:
      "A focus on inclusive learning, practical skills and opportunities for children, young people and adults to develop their abilities.",
    image: images.education,
    imageAlt: "Children participating in education",
    notice:
      "These are planned priorities. No school names, enrollment figures or completed programmes are claimed.",
    cards: [
      {
        title: "Access and Inclusion",
        copy: "Encourage learning opportunities that welcome children and young people from different backgrounds.",
      },
      {
        title: "Learning Environments",
        copy: "Support safe, welcoming spaces and learning resources that help teaching and learning thrive.",
      },
      {
        title: "Skills for Life",
        copy: "Promote practical and vocational learning that builds knowledge, confidence and useful skills.",
      },
      {
        title: "Family and Community",
        copy: "Work alongside families, churches and partners to strengthen support for learners.",
      },
    ],
  },
  developmentHealth: {
    path: "/community-development/health",
    eyebrow: "Community Development · Health",
    title: "Promoting health and community wellbeing.",
    intro:
      "Encouraging health awareness, prevention and compassionate community-centred care that upholds the dignity of every person.",
    image: images.community,
    imageAlt: "Community members gathering together",
    notice:
      "These are planned priorities; no clinics, medical services or health outcomes are claimed as operational.",
    cards: [
      {
        title: "Health Awareness",
        copy: "Share clear, responsible information that helps people make informed decisions about their wellbeing.",
      },
      {
        title: "Prevention and Wellbeing",
        copy: "Encourage practical habits and community awareness that support healthier lives.",
      },
      {
        title: "Compassionate Care",
        copy: "Promote respectful support that recognizes the needs and dignity of individuals and families.",
      },
      {
        title: "Trusted Partnerships",
        copy: "Explore collaboration with qualified health providers and community organizations.",
      },
    ],
  },
  developmentSocialServices: {
    path: "/community-development/social-services",
    eyebrow: "Community Development · Social Services",
    title: "Care and support rooted in dignity.",
    intro:
      "Strengthening social wellbeing through compassionate care, inclusion and support for vulnerable people and families.",
    image: images.outreach,
    imageAlt: "Community outreach and support",
    notice:
      "These describe intended priorities, not funded or currently active social services.",
    cards: [
      {
        title: "Support for Vulnerable People",
        copy: "Encourage care and practical support for people facing hardship, isolation or barriers to participation.",
      },
      {
        title: "Family and Community Care",
        copy: "Strengthen relationships and community networks that help individuals and families flourish.",
      },
      {
        title: "Inclusion and Dignity",
        copy: "Promote participation and respectful treatment for people of all ages and circumstances.",
      },
      {
        title: "Connection to Support",
        copy: "Build relationships with trusted organizations so people can be connected with appropriate assistance.",
      },
    ],
  },
  developmentEnvironmentalStewardship: {
    path: "/community-development/environmental-stewardship",
    eyebrow: "Community Development · Environmental Stewardship",
    title: "Caring for creation and our shared home.",
    intro:
      "Encouraging responsible care of local land, water and natural resources as part of service to present and future generations.",
    image: images.community,
    imageAlt: "A local community gathering",
    notice:
      "These are planned priorities; no environmental projects or outcomes are claimed as completed.",
    cards: [
      {
        title: "Care for Local Resources",
        copy: "Promote thoughtful stewardship of land, water and the natural resources communities depend on.",
      },
      {
        title: "Environmental Awareness",
        copy: "Encourage learning and shared responsibility for caring for creation.",
      },
      {
        title: "Sustainable Livelihoods",
        copy: "Explore approaches that support community wellbeing while respecting the natural environment.",
      },
      {
        title: "Prepared Communities",
        copy: "Strengthen awareness and readiness for environmental risks through local knowledge and partnerships.",
      },
    ],
  },
  developmentEconomicEmpowerment: {
    path: "/community-development/economic-empowerment",
    eyebrow: "Community Development · Economic Empowerment",
    title: "Building livelihoods with dignity and resilience.",
    intro:
      "Encouraging skills, sustainable livelihoods and economic opportunity for individuals, families and communities.",
    image: images.outreach,
    imageAlt: "Community members working together",
    notice:
      "These are planned priorities. No grants, loans, income results or active programmes are represented.",
    cards: [
      {
        title: "Skills and Enterprise",
        copy: "Support learning and practical skills that can help people explore livelihood opportunities.",
      },
      {
        title: "Sustainable Livelihoods",
        copy: "Encourage resilient ways for families and communities to build economic wellbeing.",
      },
      {
        title: "Responsible Stewardship",
        copy: "Promote wise use of resources and informed choices that support long-term stability.",
      },
      {
        title: "Partnership and Opportunity",
        copy: "Build relationships with trusted partners to explore appropriate paths for economic participation.",
      },
    ],
  },
  news: {
    path: "/news-events",
    eyebrow: "News & Events",
    title: "Stay connected to diocesan life.",
    intro:
      "A future home for verified news, announcements, gatherings and testimonies.",
    image: images.worship,
    imageAlt: "A worship gathering",
    notice:
      "No dates, events, testimonies or announcements have been invented.",
    cards: cards(
      [
        "Diocesan News",
        "Crusades & Conferences",
        "Worship Services",
        "Testimonies",
      ],
      "Verified content forthcoming.",
    ),
  },
  gallery: {
    path: "/gallery",
    eyebrow: "Gallery",
    title: "Faith in action.",
    intro:
      "A visual space for worship, ministry, education, outreach and community life.",
    image: images.community,
    imageAlt: "A joyful community",
    notice:
      "Current images are representative photography, not achievement claims.",
    variant: "gallery",
    cards: cards(
      ["Worship", "Clergy", "Community Outreach", "Education & Development"],
      "Official albums can be added later.",
    ),
  },
  partnerships: {
    path: "/partnerships-giving",
    eyebrow: "Partnerships & Giving",
    title: "Together, we can carry the witness further.",
    intro:
      "Inviting churches, individuals, organisations and international partners into prayerful collaboration.",
    image: images.outreach,
    imageAlt: "Community members working together",
    notice:
      "The Diocese is raising support toward a new cathedral with a target of UGX 1 billion. Official bank and mobile-money details are coming soon; please do not send funds until they are published here.",
    cards: cards(
      ["Pray", "Connect", "Share Expertise", "Support Initiatives"],
      "A future pathway for trusted mission partnership.",
    ),
  },
  contact: {
    path: "/contact",
    eyebrow: "Contact",
    title: "Begin a conversation.",
    intro:
      "Connect about mission, parish life, ministry or future partnership.",
    image: images.community,
    imageAlt: "People gathering for conversation",
    notice:
      "Official details and form submission remain disabled until verified and securely configured.",
    variant: "contact",
    cards: cards(
      ["Location & Map", "Telephone & Email", "Social Channels"],
      "Verified contact information forthcoming.",
    ),
  },
}
