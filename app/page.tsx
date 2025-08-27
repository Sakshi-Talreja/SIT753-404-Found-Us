import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { QuickLinks } from "@/components/quick-links"
import { ProgramsPreview } from "@/components/programs-preview"
import { NewsPreview } from "@/components/news-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <QuickLinks />
        <ProgramsPreview />
        <NewsPreview />
      </main>
    </div>
  )
}
