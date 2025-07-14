"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CTA_LINK, GITHUB_LINK } from "@/lib/landing-page";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Your Data. Your Keys.</span>
          <span className="block text-orange-500">Your Backup.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300 sm:max-w-3xl">
          Take control of your backup infrastructure with serverless
          architecture that scales infinitely and costs practically nothing.
        </p>
        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
            <Button size="lg" className="w-full" asChild>
              <Link href={CTA_LINK}>Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href={GITHUB_LINK}>
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
    </section>
  );
}