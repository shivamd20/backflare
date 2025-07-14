import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const comparisonData = {
  saas: {
    title: "Traditional SaaS",
    features: [
      { text: "High monthly fees", included: false },
      { text: "Egress costs for data retrieval", included: false },
      { text: "Vendor lock-in", included: false },
      { text: "Limited control and customization", included: false },
    ],
  },
  selfHosted: {
    title: "Self-hosted",
    features: [
      { text: "High infrastructure and maintenance costs", included: false },
      { text: "Requires dedicated engineering resources", included: false },
      { text: "Complex to scale and ensure high availability", included: false },
      { text: "You pay for idle capacity", included: false },
    ],
  },
  backflare: {
    title: "Backflare",
    features: [
      { text: "No egress fees", included: true },
      { text: "Zero cost when idle", included: true },
      { text: "No infrastructure to manage", included: true },
      { text: "Infinite scalability with serverless", included: true },
    ],
  },
};

export function CostEfficiencyBreakdown() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A Radically Different Cost Model
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Stop paying for idle resources and egress fees. Start paying only for what you use.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {Object.values(comparisonData).map((column) => (
            <Card key={column.title} className={column.title === 'Backflare' ? 'border-orange-500' : ''}>
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold">{column.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {column.features.map((feature) => (
                    <li key={feature.text} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                      ) : (
                        <XCircle className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                      )}
                      <span className="text-gray-600 dark:text-gray-400">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
