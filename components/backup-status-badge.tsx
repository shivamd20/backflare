import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, Minus, XCircle } from "lucide-react"
import type { BackupStatus } from "@/lib/stores/use-drive-browser-store"

interface BackupStatusBadgeProps {
  status: BackupStatus
  size?: "sm" | "default"
}

const statusConfig = {
  backedUp: {
    label: "Backed Up",
    icon: CheckCircle,
    className:
      "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
  },
  pending: {
    label: "Pending",
    icon: Clock,
    className:
      "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800",
  },
  untracked: {
    label: "Untracked",
    icon: AlertCircle,
    className: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700",
  },
  ignored: {
    label: "Ignored",
    icon: Minus,
    className: "bg-gray-50 text-gray-500 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700",
  },
  failed: {
    label: "Failed",
    icon: XCircle,
    className: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
  },
}

export function BackupStatusBadge({ status, size = "default" }: BackupStatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Badge
      variant="outline"
      className={`${config.className} flex items-center gap-1.5 font-medium rounded-full px-2.5 py-1`}
    >
      <Icon className={`${size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"}`} />
      <span className="text-xs">{config.label}</span>
    </Badge>
  )
}
