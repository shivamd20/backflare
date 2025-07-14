"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CTA_LINK, GITHUB_LINK } from "@/lib/landing-page";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-orange-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Backflare</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#architecture"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Architecture
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#roadmap"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Roadmap
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href={GITHUB_LINK} target="_blank">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white hidden md:flex" asChild>
            <Link href={CTA_LINK}>Get Started</Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
