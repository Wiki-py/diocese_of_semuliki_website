import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.leadership.eyebrow,
  pages.leadership.intro,
  pages.leadership.path,
)

export default function Page() {
  return <DiocesanPage data={pages.leadership} />
}
