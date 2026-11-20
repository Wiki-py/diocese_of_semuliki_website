import type { MetadataRoute } from "next"
import { siteUrl } from "./site-url"

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mission", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leadership", changeFrequency: "monthly", priority: 0.7 },
  { path: "/parishes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ministries", changeFrequency: "monthly", priority: 0.7 },
  { path: "/strategic-plan", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/community-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/community-development/education",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/community-development/health",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/community-development/social-services",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/community-development/environmental-stewardship",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/community-development/economic-empowerment",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/news-events", changeFrequency: "weekly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/partnerships-giving", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
] satisfies Array<{
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>
  priority: number
}>

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map(({ path, ...page }) => ({
    url: new URL(path, siteUrl).toString(),
    ...page,
  }))
}
