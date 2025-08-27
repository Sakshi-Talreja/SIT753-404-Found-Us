import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Filter } from "lucide-react"

export function NewsHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">University News & Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay updated with the latest news, events, and activities happening across our campus community
          </p>

          {/* News Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search news, events, or announcements..."
                  className="pl-12 py-3 text-lg"
                />
              </div>
              <Button variant="outline" size="lg" className="bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
