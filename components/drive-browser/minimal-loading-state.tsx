import { Skeleton } from "@/components/ui/skeleton"

export function MinimalLoadingState() {
  return (
    <div className="space-y-4">
      {/* Header skeleton */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <Skeleton className="col-span-5 h-4" />
        <Skeleton className="col-span-2 h-4" />
        <Skeleton className="col-span-1 h-4" />
        <Skeleton className="col-span-2 h-4" />
        <Skeleton className="col-span-2 h-4" />
      </div>

      {/* Row skeletons */}
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 px-4 py-4">
            <div className="col-span-5 flex items-center space-x-3">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-4 flex-1" />
            </div>
            <Skeleton className="col-span-2 h-4" />
            <Skeleton className="col-span-1 h-4" />
            <Skeleton className="col-span-2 h-4" />
            <Skeleton className="col-span-2 h-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
