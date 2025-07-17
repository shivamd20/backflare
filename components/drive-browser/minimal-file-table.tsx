"use client"

import { Button } from "@/components/ui/button"
import { BackupStatusBadge } from "@/components/backup-status-badge"
import { FileIcon } from "@/components/drive-browser/file-icon"
import { MoreHorizontal } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"
import { formatDistanceToNow } from "date-fns"

export function MinimalFileTable() {
  const { currentItems, currentPage, itemsPerPage, navigateToFolder } = useDriveBrowserStore()

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedItems = currentItems.slice(startIndex, endIndex)

  // Sort: folders first, then files
  const sortedItems = [...paginatedItems].sort((a, b) => {
    if (a.type === "folder" && b.type === "file") return -1
    if (a.type === "file" && b.type === "folder") return 1
    return a.name.localeCompare(b.name)
  })

  const handleItemClick = (item: any) => {
    if (item.type === "folder") {
      navigateToFolder(item.id, item.name)
    }
  }

  const formatModifiedDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true })
    } catch {
      return "Unknown"
    }
  }

  const getFileType = (mimeType: string): string => {
    if (mimeType.includes("pdf")) return "PDF"
    if (mimeType.includes("image")) return "Image"
    if (mimeType.includes("document") || mimeType.includes("word")) return "Document"
    if (mimeType.includes("spreadsheet") || mimeType.includes("excel")) return "Spreadsheet"
    if (mimeType.includes("presentation") || mimeType.includes("powerpoint")) return "Presentation"
    if (mimeType.includes("text")) return "Text"
    return "File"
  }

  return (
    <div className="space-y-1">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800">
        <div className="col-span-5">Name</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-1">Size</div>
        <div className="col-span-2">Modified</div>
        <div className="col-span-2">Status</div>
      </div>

      {/* File Rows */}
      <div className="space-y-1">
        {sortedItems.map((item, index) => (
          <div
            key={item.id}
            className={`group grid grid-cols-12 gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
              item.type === "folder"
                ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50"
                : "hover:bg-gray-50 dark:hover:bg-gray-800/30"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {/* Name */}
            <div className="col-span-5 flex items-center space-x-3 min-w-0">
              <FileIcon mimeType={item.mimeType} type={item.type} className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium text-gray-900 dark:text-white truncate">{item.name}</span>
            </div>

            {/* Type */}
            <div className="col-span-2 flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.type === "folder" ? "Folder" : getFileType(item.mimeType)}
              </span>
            </div>

            {/* Size */}
            <div className="col-span-1 flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.size || "—"}</span>
            </div>

            {/* Modified */}
            <div className="col-span-2 flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{formatModifiedDate(item.modifiedAt)}</span>
            </div>

            {/* Status */}
            <div className="col-span-2 flex items-center justify-between">
              <BackupStatusBadge status={item.backupStatus} size="sm" />

              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                disabled
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
