import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import JotaiProviders from '@/providers/jotai'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Continual-G®',
  description: 'Get the best dietary supplement in USA! The only supplement with Glyteine inside, Continual-G rapidly restores your cellular glutathione levels in a single dose!'
}

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "400", "500", "700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en" suppressHydrationWarning={true}>
      <JotaiProviders>
        <body  className={inter.className} >{children}</body>
      </JotaiProviders>
    </html>
  )
}
