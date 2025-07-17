"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"

export function DriveBreadcrumb() {
  const { breadcrumbs, navigateToFolder, navigateUp } = useDriveBrowserStore()

  return (
    <div className="flex items-center space-x-4">
      {breadcrumbs.length > 1 && (
        <Button variant="ghost" size="sm" onClick={navigateUp}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
      )}

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.id} className="flex items-center">
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage className="flex items-center">
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {crumb.name}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    onClick={() => {
                      // Navigate to this breadcrumb level
                      const targetBreadcrumbs = breadcrumbs.slice(0, index + 1)
                      const targetId = crumb.id === "root" ? null : crumb.id
                      // This would need to be implemented in the store
                      console.log("Navigate to:", targetId)
                    }}
                    className="flex items-center cursor-pointer hover:text-orange-500"
                  >
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {crumb.name}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
