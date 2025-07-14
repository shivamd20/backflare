import { DollarSign, Database, GitBranch, Scaling, Edge, Globe } from 'lucide-react';

const pillars = [
  {
    icon: <DollarSign className="h-8 w-8 text-orange-500" />,
    title: 'Pay as You Go',
    description: 'Only pay for what you use, down to the millisecond.',
  },
  {
    icon: <Database className="h-8 w-8 text-orange-500" />,
    title: 'Per-Tenant DB',
    description: 'Isolated data storage for each user with Durable Objects + D1.',
  },
  {
    icon: <GitBranch className="h-8 w-8 text-orange-500" />,
    title: 'Resilient Orchestration',
    description: 'Reliable, multi-step workflows powered by Cloudflare Workflows.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-orange-500" />,
    title: 'Scale to Zero',
    description: 'No cost when idle, scales instantly on demand.',
  },
  {
    icon: <Edge className="h-8 w-8 text-orange-500" />,
    title: 'Edge Native',
    description: 'Compute and storage at the edge, close to your users.',
  },
  {
    icon: <Globe className="h-8 w-8 text-orange-500" />,
    title: 'Region Earth',
    description: 'No centralized region, resilient to regional outages.',
  },
];

export function ArchitecturalPillars() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Architectural Pillars
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The core principles that make Backflare possible.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg mx-auto">
                {pillar.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
