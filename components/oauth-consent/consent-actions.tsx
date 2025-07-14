"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, HelpCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ConsentActionsProps {
  primaryButtonText?: string
  secondaryButtonText?: string
  skipButtonText?: string
  onAuthorize?: () => void
  onSkip?: () => void
}

export function ConsentActions({
  primaryButtonText = "Authorize Google Drive Access",
  secondaryButtonText = "Why is this needed?",
  skipButtonText = "Skip for Now",
  onAuthorize,
  onSkip,
}: ConsentActionsProps) {
  const handleAuthorize = () => {
    if (onAuthorize) {
      onAuthorize()
    } else {
      // Default OAuth flow - replace with actual OAuth URL
      window.location.href = "/api/auth/google"
    }
  }

  const handleSkip = () => {
    if (onSkip) {
      onSkip()
    } else {
      // Default skip behavior - redirect to main page
      window.location.href = "/"
    }
  }

  return (
    <section className="text-center">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white min-w-64" onClick={handleAuthorize}>
            {primaryButtonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-600 bg-transparent">
                <HelpCircle className="mr-2 h-4 w-4" />
                {secondaryButtonText}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Why does Backflare need Google Drive access?</DialogTitle>
                <DialogDescription className="text-left space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backup Your Files</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We need read access to create secure, incremental backups of your Google Drive files. This ensures
                      you never lose important data.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Serverless Efficiency</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our serverless architecture only processes files when needed, minimizing costs and maximizing
                      security through Cloudflare's edge network.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Egress Costs</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Unlike traditional backup services, restoring your data is completely free thanks to Cloudflare
                      R2's zero-egress pricing model.
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950/50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      <strong>Remember:</strong> You can revoke access at any time through your Google Account settings
                      or our dashboard.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Don't want to grant access yet? That's okay — you can explore the platform first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {skipButtonText}
            </Button>

            <Link href="/docs" className="text-sm text-orange-500 hover:text-orange-600 underline">
              Read our documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
