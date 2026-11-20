import { DiocesanPage, pages } from "../../components/DiocesanPage"
import { createPageMetadata } from "../../page-metadata"

export const metadata = createPageMetadata(
  pages.developmentEconomicEmpowerment.eyebrow,
  pages.developmentEconomicEmpowerment.intro,
  pages.developmentEconomicEmpowerment.path,
)

export default function Page() {
  return <DiocesanPage data={pages.developmentEconomicEmpowerment} />
}
