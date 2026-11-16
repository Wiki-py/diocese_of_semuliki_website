import Image from "next/image"

import Link from "next/link"

import { SiteNavigation } from "./SiteNavigation"

const diocesanLinks = [
  ["About the Diocese", "/about"],

  ["Mission & Vision", "/mission"],

  ["Leadership", "/leadership"],

  ["Strategic Plan", "/strategic-plan"],
] as const

const churchLinks = [
  ["Parishes", "/parishes"],

  ["Ministries", "/ministries"],

  ["Community Development", "/community-development"],
] as const

const storyLinks = [
  ["News & Events", "/news-events"],

  ["Gallery", "/gallery"],

  ["Partnerships & Giving", "/partnerships-giving"],
] as const

export function SiteHeader({ activeHref }: { activeHref: string }) {
  return (
    <header className="site-header">
      <div className="shell header-main">
        <Link aria-label="Diocese of Semuliki home" className="brand" href="/">
          <Image
            alt="Worldwide Anglican Church"
            className="brand-wac-logo"
            height={83}
            src="/images/World Wide Anglican Church logog.png"
            unoptimized
            width={293}
          />
          <Image
            alt="Diocese of Semuliki"
            className="brand-diocese-logo"
            height={80}
            src="/images/SEMULIKI_DIOCESE_LOGO.jpeg"
            unoptimized
            width={80}
          />
          
          <span>
            <strong>Diocese of Semuliki</strong>
          </span>
        </Link>
        <SiteNavigation activeHref={activeHref} />
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link aria-label="Diocese of Semuliki home" href="/">
            <Image
              alt="Diocese of Semuliki"
              className="brand-diocese-logo"
              height={80}
              src="/images/SEMULIKI_DIOCESE_LOGO.jpeg"
              unoptimized
              width={80}
            />
            <Image
              alt="Worldwide Anglican Church"
              className="brand-wac-logo"
              height={83}
              src="/images/World Wide Anglican Church logog.png"
              unoptimized
              width={293}
            />
          </Link>
          <h2>Diocese of Semuliki</h2>
          <p>We are eyewitnesses of Jesus Christ all over the world.</p>
        </div>
        <nav aria-label="Diocese links">
          <h3>The Diocese</h3>
          {diocesanLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Church and community links">
          <h3>Church & Community</h3>
          {churchLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          {storyLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div>
          <h3>Contact</h3>
          <p>Bumate Hill, Bundibugyo, Uganda</p>
          <a href="tel:+256775743044">+256 775 743 044</a>
          <a href="tel:+256767979228">+256 767 979 228</a>
          <a href="mailto:wac.semulikidiocese@gmail.com">
            wac.semulikidiocese@gmail.com
          </a>
          <Link href="/contact">Contact the Diocese</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Diocese of Semuliki</p>
        <p>Christ through Word · Life · Power · Community</p>
      </div>
    </footer>
  )
}
