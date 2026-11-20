import type { Metadata } from "next"

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  absoluteTitle = false,
): Metadata {
  const searchTitle = title.replace(/\s+·\s+/g, ": ")

  return {
    title: absoluteTitle ? { absolute: searchTitle } : searchTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: searchTitle,
      description,
      url: path,
      siteName: "Diocese of Semuliki",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: searchTitle,
      description,
    },
  }
}
