import { DiocesanPage, pages } from "../../components/DiocesanPage"
import { createPageMetadata } from "../../page-metadata"

export const metadata = createPageMetadata(
  pages.developmentEnvironmentalStewardship.eyebrow,
  pages.developmentEnvironmentalStewardship.intro,
  pages.developmentEnvironmentalStewardship.path,
)

export default function Page() {
  return <DiocesanPage data={pages.developmentEnvironmentalStewardship} />
}
