import type { ReactNode } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Dennis Karuri",
  description: "Explore Dennis Karuri's portfolio of makeup artistry, beauty influencing, and creative work.",
}

export default function PortfolioLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
