import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Cormorant_Garamond, Manrope } from "next/font/google"
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
  metadataBase: new URL(
    process.env.URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://wacdioceseofsemuliki.netlify.app",
  ),
  title: "Diocese of Semuliki",
  description:
    "Building faith and transforming lives through Christian witness, discipleship, and community service in the Semuliki region.",
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
      </body>
    </html>
  )
}
