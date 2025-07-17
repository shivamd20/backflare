"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Home, ArrowLeft } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"

export function MinimalBreadcrumb() {
  const { breadcrumbs, navigateUp } = useDriveBrowserStore()

  return (
    <div className="flex items-center space-x-4">
      {breadcrumbs.length > 1 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={navigateUp}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
      )}

      <div className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.id} className="flex items-center space-x-2">
            {index === 0 && <Home className="h-4 w-4 text-gray-400" />}

            <span
              className={`${
                index === breadcrumbs.length - 1
                  ? "text-gray-900 dark:text-white font-medium"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {crumb.name}
            </span>

            {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600" />}
          </div>
        ))}
      </div>
    </div>
  )
}
