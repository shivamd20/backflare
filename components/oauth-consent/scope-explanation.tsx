import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FolderOpen, Users, Clock } from "lucide-react"

const permissions = [
  {
    icon: FileText,
    permission: "Read-only access to file metadata and content",
    rationale: "Needed to locate, analyze, and securely back up your files",
    technical: "Scope: https://www.googleapis.com/auth/drive.readonly",
  },
  {
    icon: FolderOpen,
    permission: "View folder structure and organization",
    rationale: "Required to maintain your original folder hierarchy in backups",
    technical: "Includes folder names, paths, and nested structure",
  },
  {
    icon: Users,
    permission: "Access to shared files and permissions",
    rationale: "Ensures shared documents are properly backed up with context",
    technical: "Read-only access to sharing settings and collaborator info",
  },
  {
    icon: Clock,
    permission: "File modification timestamps",
    rationale: "Enables incremental backups by detecting changed files only",
    technical: "Last modified dates for efficient sync operations",
  },
]

interface ScopeExplanationProps {
  title?: string
  permissions?: typeof permissions
}

export function ScopeExplanation({
  title = "What permissions are we requesting?",
  permissions: customPermissions = permissions,
}: ScopeExplanationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {customPermissions.map((item, index) => (
          <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                    {item.permission}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{item.rationale}</p>
              <details className="group">
                <summary className="text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
                  Technical details
                </summary>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  {item.technical}
                </p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
