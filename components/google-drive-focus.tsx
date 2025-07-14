import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    title: "Complete Google Drive Protection",
    description: "Backup all your files, folders, and shared documents",
    icon: CheckCircle,
  },
  {
    title: "Incremental Sync",
    description: "Only backup changes, minimizing bandwidth and costs",
    icon: Zap,
  },
  {
    title: "Global Edge Distribution",
    description: "Your backups stored across Cloudflare's global network",
    icon: Globe,
  },
  {
    title: "Client-Side Encryption",
    description: "Your data encrypted before it leaves your device",
    icon: Shield,
  },
]

export function GoogleDriveFocus() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-orange-50/50 dark:from-blue-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-white">Current Focus</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Google Drive Backup, <span className="text-orange-500">Perfected</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're starting with Google Drive to perfect the serverless backup experience. Once we've mastered one
            platform, we'll expand to protect all your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-orange-600/5 dark:bg-gradient-to-r dark:from-orange-500/10 dark:to-orange-600/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why Start with Google Drive?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">Proven Architecture</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Perfect our serverless backup architecture with one platform before expanding
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">Largest User Base</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Over 3 billion Google Drive users need better backup solutions
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">Complex API</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Google Drive's sophisticated API helps us build robust, scalable solutions
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                <span>Next up: Dropbox, OneDrive, Amazon S3</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
