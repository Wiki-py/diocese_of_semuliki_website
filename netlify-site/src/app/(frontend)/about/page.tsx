import { AboutPage } from "../components/AboutPage"
import { pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  "About the Diocese",
  pages.about.intro,
  pages.about.path,
)

export default function Page() {
  return <AboutPage />
}
