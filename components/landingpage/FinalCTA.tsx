import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Ready to take control of your backups?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
          Backflare is open-source, scale-to-zero, and gives you complete ownership of your backup infrastructure.
        </p>
        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
            <Button size="lg" className="w-full">
              Start Backing Up
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
