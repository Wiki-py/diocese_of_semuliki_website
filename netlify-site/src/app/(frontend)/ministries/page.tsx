import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.ministries.eyebrow,
  pages.ministries.intro,
  pages.ministries.path,
)

export default function Page() {
  return <DiocesanPage data={pages.ministries} />
}
