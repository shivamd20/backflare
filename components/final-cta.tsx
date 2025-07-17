"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export function FinalCTA() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleBackupClick = () => {
    if (session) {
      router.push("/storage")
    } else {
      signIn("google")
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10 dark:from-orange-500/20 dark:via-orange-600/20 dark:to-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-6">
            Start with Google Drive, Scale to Everything
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8">
            Begin your serverless backup journey with Google Drive today. Join the movement towards truly open-source,
            cost-effective backup solutions that will expand to protect all your data.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleBackupClick}
              disabled={status === "loading"}
            >
              Backup Google Drive Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-300 dark:border-gray-600 bg-transparent">
              <Link href="https://github.com/shivamd20/backflare" target="_blank">
                <Star className="mr-2 h-4 w-4" />
                Star on GitHub
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-2">$0</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Egress fees</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-2">∞</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Scale potential</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Open source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
