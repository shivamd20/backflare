import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Database, Workflow, Zap, Globe, MapPin } from "lucide-react"

const pillars = [
  {
    title: "Pay as You Go",
    icon: DollarSign,
    description: "Only pay for what you use, when you use it",
  },
  {
    title: "Per-Tenant DB",
    icon: Database,
    description: "Isolated data via Durable Objects + D1",
  },
  {
    title: "Resilient Orchestration",
    icon: Workflow,
    description: "Powered by Cloudflare Workflows",
  },
  {
    title: "Scale to Zero",
    icon: Zap,
    description: "Zero cost when idle, infinite when needed",
  },
  {
    title: "Edge Native",
    icon: Globe,
    description: "Runs at the edge, globally distributed",
  },
  {
    title: "Region Earth",
    icon: MapPin,
    description: "No single point of failure or region lock-in",
  },
]

export function ArchitecturalPillars() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Built on Serverless Foundations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Six core principles that make Backflare the most efficient Google Drive backup solution, with architecture
            designed for multi-provider expansion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-colors bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                  <pillar.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
