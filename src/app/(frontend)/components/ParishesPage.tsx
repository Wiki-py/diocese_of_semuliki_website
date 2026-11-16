import { ParishesSearch } from "./ParishesSearch"

import { SiteFooter, SiteHeader } from "./SiteChrome"

export function ParishesPage() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <SiteHeader activeHref="/parishes" />

      <section className="parishes-page">
        <div className="shell">
          <p className="eyebrow">Church directory</p>
          <h1>Parishes &amp; Chapels</h1>
          <p className="parishes-page-intro">
            Explore local church communities across the Diocese. Search by
            parish name, location, or leader.
          </p>
        </div>
      </section>
      <section
        aria-label="Parish directory"
        className="shell parishes-directory"
      >
        <div className="parishes-directory-heading">
          <h2>Find a church community</h2>
          <p>Browse the available parish and chapel directory.</p>
        </div>
        <div className="parishes-directory-search">
          <ParishesSearch />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
