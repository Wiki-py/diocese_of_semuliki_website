import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.news.eyebrow,
  pages.news.intro,
  pages.news.path,
)

export default function Page() {
  return <DiocesanPage data={pages.news} />
}
