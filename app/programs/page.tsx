import { Navigation } from "@/components/navigation"
import { ProgramsHero } from "@/components/programs-hero"
import { ProgramCategories } from "@/components/program-categories"
import { FeaturedPrograms } from "@/components/featured-programs"
import { ProgramStats } from "@/components/program-stats"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ProgramsHero />
        <ProgramStats />
        <ProgramCategories />
        <FeaturedPrograms />
      </main>
    </div>
  )
}
