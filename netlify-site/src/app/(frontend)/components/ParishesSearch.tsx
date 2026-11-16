"use client"

import { useState } from "react"

const parishes = [
  {
    name: "St James Parish",
    location: "Rwamabale",
    leader: "Rev. Canon Godon Kabarokole",
    accent: "#52277c",
  },
  {
    name: "St Mark Parish",
    location: "Buhanda, Bundikitibo",
    leader: "Rev. Abiya Fanahasi",
    accent: "#32174f",
  },
  {
    name: "All Saints Parish",
    location: "Bundibugyo",
    leader: "Canon Benon Baguma",
    accent: "#805da1",
  },
  {
    name: "St Thomas Parish",
    location: "Bukisi",
    leader: "Turat Baluku Abraham",
    accent: "#754b99",
  },
  {
    name: "St John's Parish",
    location: "Busunga",
    leader: "Rev. Mbusa Paul Kanyere",
    accent: "#32174f",
  },
  {
    name: "St Peter's Chapel",
    location: "Kayenje",
    leader: "Rev. Godfrey Bwambale",
    accent: "#45235f",
  },
  {
    name: "Nyahuka Chapel",
    location: "Nyahuka",
    leader: "Rev. Decon Bwambale Jerimah",
    accent: "#62596b",
  },
  {
    name: "St Matthew Parish",
    location: "Kibuku",
    leader: "Turat Mwesige John",
    accent: "#69428c",
  },
]

export function ParishesSearch() {
  const [query, setQuery] = useState("")

  const filtered = parishes.filter((p) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.leader.toLowerCase().includes(q)
    )
  })

  return (
    <div className="parishes-search">
      <div className="parishes-search__bar">
        <svg
          aria-hidden="true"
          className="parishes-search__icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
        <input
          id="parish-search"
          type="search"
          placeholder="Search by parish name, location, or leader…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search parishes"
        />
        {query && (
          <button
            type="button"
            className="parishes-search__clear"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      <p className="parishes-search__count">
        {filtered.length} of {parishes.length} parishes
        {query && filtered.length === 0 && " — no matches found"}
      </p>
      <div className="parishes-grid">
        {filtered.map((parish, index) => (
          <article
            className="parish-card"
            key={parish.name}
            style={{ ["--accent" as string]: parish.accent }}
          >
            <div className="parish-card__header">
              <span className="parish-card__index">
                {String(parishes.indexOf(parish) + 1).padStart(2, "0")}
              </span>
              <span className="parish-card__badge">
                {parish.name.toLowerCase().includes("chapel")
                  ? "Chapel"
                  : "Parish"}
              </span>
            </div>
            <h3 className="parish-card__name">{parish.name}</h3>
            <div className="parish-card__meta">
              <div className="parish-card__row">
                <svg
                  aria-hidden="true"
                  className="parish-card__icon"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{parish.location}</span>
              </div>
              <div className="parish-card__row">
                <svg
                  aria-hidden="true"
                  className="parish-card__icon"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                </svg>
                <span>{parish.leader}</span>
              </div>
            </div>
            <div className="parish-card__footer">
              <span className="parish-card__status">Verified parish</span>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="parishes-empty">
          <p>No parishes match your search.</p>
          <button type="button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
