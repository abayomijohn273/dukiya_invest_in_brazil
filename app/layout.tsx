import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Invest in Brazil Conference 2025 | Gateway for Nigerian Investors",
  description:
    "Join us on December 3rd, 2025 in São Paulo to explore Brazil's real estate market. A gateway for Nigerian investors to discover undervalued properties and exponential opportunities.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>{children}</body>
    </html>
  )
}
