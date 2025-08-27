import { Navigation } from "@/components/navigation"
import { NewsHero } from "@/components/news-hero"
import { FeaturedNews } from "@/components/featured-news"
import { NewsGrid } from "@/components/news-grid"
import { EventsCalendar } from "@/components/events-calendar"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <NewsHero />
        <FeaturedNews />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NewsGrid />
            </div>
            <div className="lg:col-span-1">
              <EventsCalendar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
