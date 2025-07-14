import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, User, Shield, HardDrive, Lock } from "lucide-react"

const flowSteps = [
  {
    icon: User,
    title: "You",
    description: "Grant read-only access",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "OAuth",
    description: "Secure Google authorization",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: HardDrive,
    title: "Google Drive",
    description: "Files read securely",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Lock,
    title: "R2 Storage",
    description: "Encrypted backup storage",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

interface VisualFlowProps {
  title?: string
  subtitle?: string
  steps?: typeof flowSteps
}

export function VisualFlow({
  title = "How your data flows through our system",
  subtitle = "Complete transparency in our backup process",
  steps = flowSteps,
}: VisualFlowProps) {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>

      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${step.bgColor} mb-3`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-24">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              <Lock className="inline h-4 w-4 mr-1" />
              All data transmission uses TLS encryption. Storage encryption and client-side encryption coming soon.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
