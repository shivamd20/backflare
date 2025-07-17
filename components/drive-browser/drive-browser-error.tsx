"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"
import Link from "next/link"

interface DriveBrowserErrorProps {
  error: string
}

export function DriveBrowserError({ error }: DriveBrowserErrorProps) {
  const { initializeMockData, setError } = useDriveBrowserStore()

  const handleRetry = () => {
    setError(null)
    initializeMockData()
  }

  return (
    <Card className="border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800">
      <CardContent className="p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Unable to load Google Drive</h3>

        <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleRetry} className="bg-orange-500 hover:bg-orange-600 text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
