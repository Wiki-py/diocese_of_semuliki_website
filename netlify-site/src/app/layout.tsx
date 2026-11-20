import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { RouteChangeLoader } from "./(frontend)/components/ChurchLoader"
import { siteUrl } from "./site-url"
import "./(frontend)/styles.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default:
      "Diocese of Semuliki | Building Faith, Transforming Lives and Winning Souls",
    template: "%s | Diocese of Semuliki",
  },
  description:
    "Building faith, transforming lives, and winning souls through Christian witness, discipleship, and community service in the Semuliki region.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Diocese of Semuliki",
    title: "Diocese of Semuliki",
    description:
      "Building faith, transforming lives, and winning souls through Christian witness, discipleship, and community service in the Semuliki region.",
  },
  twitter: {
    card: "summary",
    title: "Diocese of Semuliki",
    description:
      "Building faith, transforming lives, and winning souls through Christian witness, discipleship, and community service in the Semuliki region.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      className={`${manrope.variable} ${cormorant.variable}`}
      lang="en"
    >
      <body className="min-h-screen bg-white text-zinc-950 antialiased">
        {children}
        <RouteChangeLoader />
      </body>
    </html>
  )
}
