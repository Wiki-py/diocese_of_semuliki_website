import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.partnerships.eyebrow,
  pages.partnerships.intro,
  pages.partnerships.path,
)

export default function Page() {
  return <DiocesanPage data={pages.partnerships} />
}
