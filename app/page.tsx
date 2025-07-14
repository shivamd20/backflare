import { HeroSection } from "@/components/landingpage/HeroSection";
import { ArchitecturalPillars } from "@/components/landingpage/ArchitecturalPillars";
import { HiddenCostCrisis } from "@/components/landingpage/HiddenCostCrisis";
import { CostEfficiencyBreakdown } from "@/components/landingpage/CostEfficiencyBreakdown";
import { ArchitectureOverview } from "@/components/landingpage/ArchitectureOverview";
import { DevelopmentRoadmap } from "@/components/landingpage/DevelopmentRoadmap";
import { FinalCTA } from "@/components/landingpage/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ArchitecturalPillars />
      <HiddenCostCrisis />
      <CostEfficiencyBreakdown />
      <ArchitectureOverview />
      <DevelopmentRoadmap />
      <FinalCTA />
    </main>
  );
}