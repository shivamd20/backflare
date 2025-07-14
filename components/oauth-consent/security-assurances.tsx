import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Code, Lock, Server, Trash2 } from "lucide-react"

const assurances = [
  {
    icon: Eye,
    title: "Read-Only Access",
    description: "We can only read your files, never modify, delete, or create new ones",
    emphasis: "Zero write permissions",
  },
  {
    icon: Shield,
    title: "No Data Selling",
    description: "Your data is never sold, shared with third parties, or used for advertising",
    emphasis: "Privacy-first philosophy",
  },
  {
    icon: Lock,
    title: "Encryption Roadmap",
    description: "Client-side encryption is in active development for end-to-end security",
    emphasis: "Your keys, your control",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Our entire codebase is open source — audit our security practices yourself",
    emphasis: "Full transparency",
  },
  {
    icon: Server,
    title: "Serverless Architecture",
    description: "Built on Cloudflare's edge network with zero-egress costs and infinite scale",
    emphasis: "Enterprise-grade infrastructure",
  },
  {
    icon: Trash2,
    title: "Data Retention Control",
    description: "You can delete your backups and revoke access at any time",
    emphasis: "Complete ownership",
  },
]

interface SecurityAssurancesProps {
  title?: string
  subtitle?: string
  assurances?: typeof assurances
}

export function SecurityAssurances({
  title = "Your security and privacy are our top priorities",
  subtitle = "Here's how we protect your data and respect your privacy",
  assurances: customAssurances = assurances,
}: SecurityAssurancesProps) {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customAssurances.map((assurance, index) => (
          <Card
            key={index}
            className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-orange-500/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 flex-shrink-0">
                  <assurance.icon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{assurance.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{assurance.description}</p>
                  <span className="inline-block text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 px-2 py-1 rounded">
                    {assurance.emphasis}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
