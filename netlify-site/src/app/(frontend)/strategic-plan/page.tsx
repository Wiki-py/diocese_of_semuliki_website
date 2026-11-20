import { DiocesanPage, pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  pages.strategy.eyebrow,
  pages.strategy.intro,
  pages.strategy.path,
)

export default function Page() {
  return <DiocesanPage data={pages.strategy} />
}
