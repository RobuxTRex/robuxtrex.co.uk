import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: `RobuxTRex's Official Website`,
  description: 'The OFFICIAL website for the up-coming social media influencer.',
}

import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gradient-to-b from-black to-gray-800 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
