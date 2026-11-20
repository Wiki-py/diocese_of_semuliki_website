import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.development.eyebrow,
  pages.development.intro,
  pages.development.path,
)

export default function Page() {
  return <DiocesanPage data={pages.development} />
}
