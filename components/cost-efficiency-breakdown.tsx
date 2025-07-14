import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Star } from "lucide-react"

const comparisons = [
  {
    category: "Traditional SaaS",
    items: [
      { text: "High monthly fees", negative: true },
      { text: "Egress charges", negative: true },
      { text: "Vendor lock-in", negative: true },
      { text: "Limited customization", negative: true },
    ],
  },
  {
    category: "Self-hosted",
    items: [
      { text: "Infrastructure costs", negative: true },
      { text: "Maintenance overhead", negative: true },
      { text: "Security responsibility", negative: true },
      { text: "Scaling complexity", negative: true },
    ],
  },
  {
    category: "Backflare",
    items: [
      { text: "Zero egress fees", negative: false },
      { text: "Pay-per-use pricing", negative: false },
      { text: "No infrastructure management", negative: false },
      { text: "Infinite scalability", negative: false },
    ],
    featured: true,
  },
]

export function CostEfficiencyBreakdown() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Cost Efficiency Breakdown
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how Backflare's Google Drive backup solution compares to traditional backup services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <Card
              key={index}
              className={`relative bg-white dark:bg-gray-800 ${comparison.featured ? "border-2 border-orange-500 shadow-lg" : "border border-gray-200 dark:border-gray-700"}`}
            >
              {comparison.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                    <Star className="mr-1 h-3 w-3" />
                    Recommended
                  </div>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-center text-gray-900 dark:text-white">{comparison.category}</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {comparison.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      {item.negative ? (
                        <X className="mr-2 h-4 w-4 text-red-500 flex-shrink-0" />
                      ) : (
                        <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                      )}
                      <span
                        className={item.negative ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-white"}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
