import { Card, CardContent } from "@/components/ui/card"
import { Database, Workflow, HardDrive, Globe } from "lucide-react"

const architectureComponents = [
  {
    name: "Durable Objects",
    description: "Per-tenant compute + attached SQL",
    icon: Database,
    color: "text-blue-500",
  },
  {
    name: "D1 Database",
    description: "Relational storage per tenant",
    icon: Database,
    color: "text-green-500",
  },
  {
    name: "Workflows",
    description: "Reliable orchestration",
    icon: Workflow,
    color: "text-purple-500",
  },
  {
    name: "R2 Storage",
    description: "Object storage, zero egress",
    icon: HardDrive,
    color: "text-orange-500",
  },
]

export function ArchitectureOverview() {
  return (
    <section id="architecture" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Built on Cloudflare's Serverless Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Leveraging the most advanced serverless infrastructure for unmatched performance and cost efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {architectureComponents.map((component, index) => (
            <Card
              key={index}
              className="text-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 ${component.color}`}
                >
                  <component.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{component.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-orange-600/5 dark:bg-gradient-to-r dark:from-orange-500/10 dark:to-orange-600/10">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How It Works</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">1. Google Drive Integration</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Secure OAuth connection to your Google Drive with read-only permissions for maximum security
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">2. Intelligent Sync</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Cloudflare Workflows orchestrate incremental backups, detecting and syncing only changed files
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-2 text-gray-900 dark:text-white">3. Encrypted Storage</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Files encrypted and stored in R2 with zero egress fees, making restores completely free
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
