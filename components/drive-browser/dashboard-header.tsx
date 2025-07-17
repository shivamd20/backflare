"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Info, Shield, HardDrive, Clock, Filter } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"
import { useState } from "react"

export function DashboardHeader() {
  const { userEmail, allItems, showOnlyUnbacked, toggleUnbackedFilter } = useDriveBrowserStore()
  const [backupEnabled, setBackupEnabled] = useState(true)

  const totalFiles = allItems.filter((item) => item.type === "file").length
  const totalFolders = allItems.filter((item) => item.type === "folder").length
  const backedUpItems = allItems.filter((item) => item.backupStatus === "backedUp").length
  const totalSize = "2.4 GB" // Mocked storage usage

  return (
    <div className="space-y-6">
      {/* Preview Notice */}
      <Alert className="border-blue-200 bg-blue-50/50 dark:border-blue-800/50 dark:bg-blue-950/20 backdrop-blur-sm">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-200 font-medium">
          This is a simulated preview of your Google Drive. Real-time backup status tracking coming soon.
        </AlertDescription>
      </Alert>

      {/* Main Dashboard Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info & Storage */}
        <Card className="lg:col-span-2 border-0 shadow-sm bg-white dark:bg-gray-900">
          <CardContent className="p-8">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Drive Dashboard</h1>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>{userEmail}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalFiles}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Files</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalFolders}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Folders</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalSize}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Used</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  >
                    {backedUpItems} backed up
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                  >
                    {allItems.length - backedUpItems} pending
                  </Badge>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <HardDrive className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Controls */}
        <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backup Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Automated backups run on schedule</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center space-x-3">
                    <div className={`h-3 w-3 rounded-full ${backupEnabled ? "bg-green-500" : "bg-gray-400"}`} />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {backupEnabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <Switch checked={backupEnabled} onCheckedChange={setBackupEnabled} />
                </div>

                {backupEnabled && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Next backup in 2 hours</span>
                  </div>
                )}
              </div>

              <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                Configure Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleUnbackedFilter}
            className={`${showOnlyUnbacked ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" : ""}`}
          >
            <Filter className="h-4 w-4 mr-2" />
            {showOnlyUnbacked ? "Show All" : "Show Unbacked Only"}
          </Button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">{allItems.length} items total</div>
      </div>
    </div>
  )
}
