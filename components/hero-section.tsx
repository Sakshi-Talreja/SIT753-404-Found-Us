import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Deakin University</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover world-class education, innovative research, and a vibrant campus community. Your journey to
            academic excellence starts here.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search courses, programs, staff, or information..."
                className="pl-12 pr-4 py-4 text-lg rounded-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
