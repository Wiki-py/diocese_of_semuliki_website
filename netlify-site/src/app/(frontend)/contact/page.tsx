import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.contact.eyebrow,
  pages.contact.intro,
  pages.contact.path,
)

export default function Page() {
  return <DiocesanPage data={pages.contact} />
}
