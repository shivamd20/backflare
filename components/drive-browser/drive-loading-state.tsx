import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function DriveLoadingState() {
  return (
    <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Table header skeleton */}
          <div className="flex space-x-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[15%]" />
            <Skeleton className="h-4 w-[15%]" />
            <Skeleton className="h-4 w-[15%]" />
            <Skeleton className="h-4 w-[15%]" />
          </div>

          {/* Table rows skeleton */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-4 py-3">
              <div className="flex items-center space-x-3 w-[40%]">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-4 flex-1" />
              </div>
              <Skeleton className="h-4 w-[15%]" />
              <Skeleton className="h-4 w-[15%]" />
              <Skeleton className="h-4 w-[15%]" />
              <Skeleton className="h-4 w-[15%]" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
