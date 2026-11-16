"use client"

import Link from "next/link"

import { useState } from "react"

const pageLinks = [
  ["Home", "/"],

  ["About", "/about"],

  ["Mission & Vision", "/mission"],

  ["Leadership", "/leadership"],

  ["Strategic Plan", "/strategic-plan"],

  ["Parishes", "/parishes"],

  ["Ministries", "/ministries"],

  ["Community Development", "/community-development"],

  ["News & Events", "/news-events"],

  ["Gallery", "/gallery"],

  ["Partnerships & Giving", "/partnerships-giving"],

  ["Contact", "/contact"],
] as const

function PageLinks({
  activeHref,

  onNavigate,
}: {
  activeHref: string

  onNavigate?: () => void
}) {
  return pageLinks.map(([label, href]) => (
    <Link
      aria-current={href === activeHref ? "page" : undefined}
      href={href}
      key={href}
      onClick={onNavigate}
    >
      {label}
    </Link>
  ))
}

export function SiteNavigation({ activeHref }: { activeHref: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav aria-label="Primary navigation" className="desktop-navigation">
        <PageLinks activeHref={activeHref} />
      </nav>
      <div
        className="mobile-menu"
        data-open={mobileMenuOpen ? "true" : undefined}
      >
        <button
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMobileMenuOpen(false)
          }}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mobile-navigation-links"
            id="mobile-navigation"
          >
            <PageLinks
              activeHref={activeHref}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </nav>
        )}
      </div>
    </>
  )
}
