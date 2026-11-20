import { MissionPage } from "../components/MissionPage"
import { pages } from "../components/DiocesanPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  "Mission and Vision",
  pages.mission.intro,
  pages.mission.path,
)

export default function Page() {
  return <MissionPage />
}
