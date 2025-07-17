"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BackupStatusBadge } from "@/components/backup-status-badge"
import { FileIcon } from "@/components/drive-browser/file-icon"
import { MoreHorizontal } from "lucide-react"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"
import { formatDistanceToNow } from "date-fns"

export function DriveFileTable() {
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

  return (
    <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200 dark:border-gray-700">
              <TableHead className="w-[40%] text-gray-900 dark:text-white">Name</TableHead>
              <TableHead className="text-gray-900 dark:text-white">Type</TableHead>
              <TableHead className="text-gray-900 dark:text-white">Size</TableHead>
              <TableHead className="text-gray-900 dark:text-white">Modified</TableHead>
              <TableHead className="text-gray-900 dark:text-white">Backup Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedItems.map((item) => (
              <TableRow
                key={item.id}
                className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                  item.type === "folder" ? "cursor-pointer" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <TableCell className="py-3">
                  <div className="flex items-center space-x-3">
                    <FileIcon mimeType={item.mimeType} type={item.type} />
                    <span className="font-medium text-gray-900 dark:text-white truncate">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {item.type === "folder" ? "Folder" : getFileType(item.mimeType)}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{item.size || "—"}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {formatModifiedDate(item.modifiedAt)}
                </TableCell>
                <TableCell>
                  <BackupStatusBadge status={item.backupStatus} size="sm" />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" disabled>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function getFileType(mimeType: string): string {
  if (mimeType.includes("pdf")) return "PDF"
  if (mimeType.includes("image")) return "Image"
  if (mimeType.includes("document") || mimeType.includes("word")) return "Document"
  if (mimeType.includes("spreadsheet") || mimeType.includes("excel")) return "Spreadsheet"
  if (mimeType.includes("presentation") || mimeType.includes("powerpoint")) return "Presentation"
  if (mimeType.includes("text")) return "Text"
  return "File"
}
