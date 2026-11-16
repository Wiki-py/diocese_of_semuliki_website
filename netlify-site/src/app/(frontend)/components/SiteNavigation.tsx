"use client"

import Link from "next/link"

import { useState } from "react"

const pageLinks = [
  ["Home", "/"],
  {
    type: "dropdown",
    id: "about",
    label: "About",
    items: [
      ["About the Diocese", "/about"],
      ["Mission & Vision", "/mission"],
      ["Strategic Plan", "/strategic-plan"],
    ],
  },
  ["Leadership", "/leadership"],
  ["Parishes", "/parishes"],
  ["Ministries", "/ministries"],
  {
    type: "dropdown",
    id: "community-development",
    label: "Community Development",
    items: [
      ["Overview", "/community-development"],
      ["Education", "/community-development/education"],
      ["Health", "/community-development/health"],
      ["Social Services", "/community-development/social-services"],
      [
        "Environmental Stewardship",
        "/community-development/environmental-stewardship",
      ],
      [
        "Economic Empowerment",
        "/community-development/economic-empowerment",
      ],
    ],
  },
  ["News & Events", "/news-events"],
  ["Gallery", "/gallery"],
  ["Partnerships & Giving", "/partnerships-giving"],
  ["Contact", "/contact"],
] as const

function PageLinks({
  activeHref,
  onNavigate,
  openDropdown,
  onToggleDropdown,
  idPrefix,
  isMobile = false,
}: {
  activeHref: string
  onNavigate?: () => void
  openDropdown: string | null
  onToggleDropdown: (href: string) => void
  idPrefix: string
  isMobile?: boolean
}) {
  return pageLinks.map((link) => {
    if (!("type" in link)) {
      const [label, href] = link
      return (
        <Link
          aria-current={href === activeHref ? "page" : undefined}
          href={href}
          key={href}
          onClick={onNavigate}
        >
          {label}
        </Link>
      )
    }
    const dropdownId = `${idPrefix}-${link.id}`
    const isActive = link.items.some(
      ([, itemHref]) =>
        itemHref === activeHref || activeHref.startsWith(`${itemHref}/`),
    )
    const isOpen = openDropdown === link.id
    return (
      <div
        className={isMobile ? "nav-group nav-group-mobile" : "nav-group"}
        data-active={isActive ? "true" : undefined}
        data-open={isOpen ? "true" : undefined}
        key={link.id}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            onToggleDropdown(link.id)
            event.currentTarget.querySelector("button")?.focus()
          }
        }}
      >
        <button
          className="nav-trigger"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          onClick={() => onToggleDropdown(link.id)}
          type="button"
        >
          {link.label}
          <span className="nav-chevron" aria-hidden="true" />
        </button>
        <div className="nav-dropdown-panel" hidden={!isOpen} id={dropdownId}>
          {link.items.map(([itemLabel, itemHref]) => (
            <Link
              aria-current={itemHref === activeHref ? "page" : undefined}
              href={itemHref}
              key={itemHref}
              onClick={onNavigate}
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    )
  })
}

export function SiteNavigation({ activeHref }: { activeHref: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href)
  }

  const toggleMobileDropdown = (href: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === href ? null : href)
  }

  const closeDesktopDropdown = () => setOpenDropdown(null)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileOpenDropdown(null)
  }

  return (
    <>
      <nav aria-label="Primary navigation" className="desktop-navigation">
        <PageLinks
          activeHref={activeHref}
          idPrefix="desktop"
          onNavigate={closeDesktopDropdown}
          onToggleDropdown={toggleDropdown}
          openDropdown={openDropdown}
        />
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
              idPrefix="mobile"
              isMobile
              onNavigate={closeMobileMenu}
              openDropdown={mobileOpenDropdown}
              onToggleDropdown={toggleMobileDropdown}
            />
          </nav>
        )}
      </div>
    </>
  )
}
