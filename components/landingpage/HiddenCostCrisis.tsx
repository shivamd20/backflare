export function HiddenCostCrisis() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The Hidden Cost Crisis
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Traditional SaaS and self-hosted backup solutions are plagued with
            inefficiencies that cost you more than just money.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vendor Lock-In</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Proprietary formats and complex migration paths keep you tied to a
              single provider, limiting your flexibility and control.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Egress Fees</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The silent killer of your cloud budget. You pay to store your
              data, and you pay again to access it.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Maintenance Burden</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Self-hosting means you are responsible for uptime, security,
              and scaling, a constant drain on your engineering resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
