import { HeroSection } from "@/components/hero-section"
import { ArchitecturalPillars } from "@/components/architectural-pillars"
import { HiddenCostCrisis } from "@/components/hidden-cost-crisis"
import { CostEfficiencyBreakdown } from "@/components/cost-efficiency-breakdown"
import { ArchitectureOverview } from "@/components/architecture-overview"
import { DevelopmentRoadmap } from "@/components/development-roadmap"
import { FinalCTA } from "@/components/final-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleDriveFocus } from "@/components/google-drive-focus"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ArchitecturalPillars />
        <GoogleDriveFocus />
        <HiddenCostCrisis />
        <CostEfficiencyBreakdown />
        <ArchitectureOverview />
        <DevelopmentRoadmap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
