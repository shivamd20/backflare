import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { HardDrive, Users, Info, Filter } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"

export function DriveBrowserHeader() {
  const { userEmail, currentItems, allItems, showOnlyUnbacked, toggleUnbackedFilter } = useDriveBrowserStore()

  const totalFiles = allItems.filter((item) => item.type === "file").length
  const totalFolders = allItems.filter((item) => item.type === "folder").length
  const unbackedItems = allItems.filter((item) => item.backupStatus !== "backedUp").length

  return (
    <div className="space-y-4">
      <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          This is a simulated preview of your Google Drive. Backup status tracking coming soon.
        </AlertDescription>
      </Alert>

      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <HardDrive className="h-5 w-5 text-orange-500" />
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Google Drive Browser</h1>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{userEmail}</span>
                </div>
                <div>•</div>
                <div>{totalFiles} files</div>
                <div>•</div>
                <div>{totalFolders} folders</div>
                {unbackedItems > 0 && (
                  <>
                    <div>•</div>
                    <div className="text-yellow-600 dark:text-yellow-400">{unbackedItems} need backup</div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch id="unbacked-filter" checked={showOnlyUnbacked} onCheckedChange={toggleUnbackedFilter} />
                <Label htmlFor="unbacked-filter" className="text-sm">
                  <Filter className="inline h-4 w-4 mr-1" />
                  Show only unbacked files
                </Label>
              </div>

              <Button variant="outline" size="sm" disabled>
                Backup All (Coming Soon)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
