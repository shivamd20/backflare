import { Shield, Lock } from "lucide-react"

interface OAuthConsentHeaderProps {
  title?: string
  subtitle?: string
}

export function OAuthConsentHeader({
  title = "Backflare needs permission to access your Google Drive",
  subtitle = "To securely back up your files with zero-egress serverless infrastructure",
}: OAuthConsentHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
            <Lock className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>

      <div className="mt-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
        <Shield className="mr-2 h-4 w-4" />
        Read-only access • No data sharing • Open source
      </div>
    </div>
  )
}
