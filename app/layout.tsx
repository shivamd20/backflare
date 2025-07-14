import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {AuthProvider} from "@/components/AuthProvider";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Backflare - Serverless Backup Infrastructure",
  description:
    "Take control of your backup infrastructure with serverless architecture that scales infinitely and costs practically nothing.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
