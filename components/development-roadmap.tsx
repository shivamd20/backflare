import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, BarChart3, Terminal, FolderSync, Users, Cloud } from "lucide-react"

const roadmapItems = [
  {
    title: "Client-side Encryption + Restore",
    description: "End-to-end encryption with client-controlled keys",
    icon: Shield,
    status: "In Progress",
    priority: "high",
  },
  {
    title: "Public Dashboard",
    description: "Web interface for backup management and monitoring",
    icon: BarChart3,
    status: "Planned",
    priority: "high",
  },
  {
    title: "CLI / API",
    description: "Command-line tools and REST API for automation",
    icon: Terminal,
    status: "Planned",
    priority: "medium",
  },
  {
    title: "Folder Sync + Snapshots",
    description: "Real-time folder synchronization with point-in-time recovery",
    icon: FolderSync,
    status: "Research",
    priority: "medium",
  },
  {
    title: "Community Contributions",
    description: "Open-source plugins and integrations ecosystem",
    icon: Users,
    status: "Future",
    priority: "low",
  },
  {
    title: "Multi-Provider Support",
    description: "Dropbox, Amazon S3, OneDrive, and other cloud storage providers",
    icon: Cloud,
    status: "Planned",
    priority: "high",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-orange-500"
    case "Planned":
      return "bg-blue-500"
    case "Research":
      return "bg-purple-500"
    case "Future":
      return "bg-gray-500"
    default:
      return "bg-gray-500"
  }
}

export function DevelopmentRoadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Development Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our commitment to building the most comprehensive serverless backup solution, starting with Google Drive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700`}
                  >
                    <item.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <Badge className={`${getStatusColor(item.status)} text-white`}>{item.status}</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>

              {/* Priority indicator */}
              <div
                className={`absolute top-0 left-0 w-1 h-full ${
                  item.priority === "high"
                    ? "bg-red-500"
                    : item.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
              />
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Want to contribute or suggest a feature?</p>
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm">
            <Users className="mr-2 h-4 w-4 text-orange-500" />
            Join our community on GitHub
          </div>
        </div>
      </div>
    </section>
  )
}
