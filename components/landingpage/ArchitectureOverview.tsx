import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, GitBranch, Cloud, Code } from "lucide-react";

const architectureComponents = [
  {
    icon: <Database className="h-8 w-8 text-orange-500" />,
    title: "Durable Objects + D1",
    description: "Per-tenant compute and relational storage, ensuring data isolation and stateful execution at the edge.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-orange-500" />,
    title: "Cloudflare Workflows",
    description: "Orchestrate complex backup and restore processes with resilient, long-running workflows.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-orange-500" />,
    title: "R2 Object Storage",
    description: "Store your backup data with zero egress fees, making data retrieval free and predictable.",
  },
  {
    icon: <Code className="h-8 w-8 text-orange-500" />,
    title: "Open Source",
    description: "Backflare is open source, giving you full control and transparency over your backup infrastructure.",
  },
];

export function ArchitectureOverview() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built on the Future of the Cloud
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Backflare leverages the power of Cloudflare's serverless stack to deliver a backup solution that is secure, scalable, and cost-effective.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {architectureComponents.map((component) => (
            <Card key={component.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{component.title}</CardTitle>
                {component.icon}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
