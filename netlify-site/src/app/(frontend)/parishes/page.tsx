import { ParishesPage } from "../components/ParishesPage"
import { createPageMetadata } from "../page-metadata"

export const metadata = createPageMetadata(
  "Parishes and Chapels",
  "Explore parish and chapel communities across the Diocese of Semuliki. Search the church directory by parish name, location, or leader.",
  "/parishes",
)

export default function Page() {
  return <ParishesPage />
}
