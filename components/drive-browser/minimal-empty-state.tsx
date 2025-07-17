"use client"

import { Button } from "@/components/ui/button"
import { FolderOpen, RefreshCw } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"

export function MinimalEmptyState() {
  const { initializeMockData } = useDriveBrowserStore()

  return (
    <div className="text-center py-16">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
        <FolderOpen className="h-10 w-10 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No files found</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        This folder appears to be empty, or there might be an issue loading your files.
      </p>

      <Button onClick={initializeMockData} variant="outline" className="rounded-xl bg-transparent">
        <RefreshCw className="mr-2 h-4 w-4" />
        Refresh
      </Button>
    </div>
  )
}
