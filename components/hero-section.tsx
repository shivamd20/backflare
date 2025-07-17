"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Zap } from "lucide-react"
import Link from "next/link"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleGetStartedClick = () => {
    if (session) {
      router.push("/storage")
    } else {
      signIn("google")
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm">
            <Zap className="mr-2 h-4 w-4 text-orange-500" />
            Google Drive Backups • Serverless • Secure
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            Your Data. <span className="text-orange-500">Your Keys.</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Your Backup.
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Take control of your backup infrastructure with serverless architecture that scales infinitely and costs
            practically nothing. Currently supports{" "}
            <span className="font-semibold text-orange-500">Google Drive backups</span>, with plans to evolve into a
            full-fledged open-source data protection platform — simple, secure, and serverless by design.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0"
              onClick={handleGetStartedClick}
              disabled={status === "loading"}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-300 dark:border-gray-600 bg-transparent">
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
