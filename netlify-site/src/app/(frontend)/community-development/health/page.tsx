import { DiocesanPage, pages } from "../../components/DiocesanPage"
import { createPageMetadata } from "../../page-metadata"

export const metadata = createPageMetadata(
  pages.developmentHealth.eyebrow,
  pages.developmentHealth.intro,
  pages.developmentHealth.path,
)

export default function Page() {
  return <DiocesanPage data={pages.developmentHealth} />
}
