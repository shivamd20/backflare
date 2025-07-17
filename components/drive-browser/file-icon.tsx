import { FileText, ImageIcon, FileSpreadsheet, Presentation, File, Folder, FileIcon as FilePdf } from "lucide-react"

interface FileIconProps {
  mimeType: string
  type: "file" | "folder"
  className?: string
}

export function FileIcon({ mimeType, type, className = "h-5 w-5" }: FileIconProps) {
  if (type === "folder") {
    return <Folder className={`${className} text-blue-500`} />
  }

  // File type icons based on MIME type
  if (mimeType.includes("pdf")) {
    return <FilePdf className={`${className} text-red-500`} />
  }

  if (mimeType.includes("image")) {
    return <ImageIcon className={`${className} text-green-500`} />
  }

  if (mimeType.includes("document") || mimeType.includes("word")) {
    return <FileText className={`${className} text-blue-600`} />
  }

  if (mimeType.includes("spreadsheet") || mimeType.includes("excel")) {
    return <FileSpreadsheet className={`${className} text-green-600`} />
  }

  if (mimeType.includes("presentation") || mimeType.includes("powerpoint")) {
    return <Presentation className={`${className} text-orange-500`} />
  }

  // Default file icon
  return <File className={`${className} text-gray-500`} />
}
