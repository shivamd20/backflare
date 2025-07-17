import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wifi, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DriveConnectionBanner() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-800">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
            <Wifi className="h-8 w-8 text-orange-500" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Google Drive Not Connected</h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            To view and manage your Google Drive backups, you'll need to connect your account first.
          </p>

          <Alert className="mb-6 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50">
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Don't worry - we only request read-only access to your files and never store or share your data.
            </AlertDescription>
          </Alert>

          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/oauth/consent">
              Connect Google Drive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
