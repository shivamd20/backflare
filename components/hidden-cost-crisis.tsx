import { AlertTriangle, DollarSign, Lock, Wrench } from "lucide-react"

export function HiddenCostCrisis() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
            <AlertTriangle className="mr-2 h-4 w-4" />
            The Hidden Cost Crisis
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
            Traditional Backup Solutions Are <span className="text-red-500">Bleeding You Dry</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <DollarSign className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Egress Fees</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pay massive fees every time you need to restore your own data
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <Lock className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Vendor Lock-in</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trapped in proprietary formats with no easy migration path
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                <Wrench className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Maintenance Burden</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constant updates, patches, and infrastructure management
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Stop paying for the privilege of accessing your own data.
              <span className="text-orange-500"> Own your backup infrastructure.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
