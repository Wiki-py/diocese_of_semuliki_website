import { DiocesanPage, pages } from "../../components/DiocesanPage"
import { createPageMetadata } from "../../page-metadata"

export const metadata = createPageMetadata(
  pages.developmentSocialServices.eyebrow,
  pages.developmentSocialServices.intro,
  pages.developmentSocialServices.path,
)

export default function Page() {
  return <DiocesanPage data={pages.developmentSocialServices} />
}
