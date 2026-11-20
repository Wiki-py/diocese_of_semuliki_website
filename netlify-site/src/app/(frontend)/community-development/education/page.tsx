import { DiocesanPage, pages } from "../../components/DiocesanPage"
import { createPageMetadata } from "../../page-metadata"

export const metadata = createPageMetadata(
  pages.developmentEducation.eyebrow,
  pages.developmentEducation.intro,
  pages.developmentEducation.path,
)

export default function Page() {
  return <DiocesanPage data={pages.developmentEducation} />
}
