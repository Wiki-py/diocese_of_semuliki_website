import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.gallery.eyebrow,
  pages.gallery.intro,
  pages.gallery.path,
)

export default function Page() {
  return <DiocesanPage data={pages.gallery} />
}
