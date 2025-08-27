import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react"

const latestNews = [
  {
    title: "Deakin University Launches New AI Research Center",
    excerpt: "The university announces a $50 million investment in artificial intelligence research...",
    category: "Research",
    date: "2024-01-15",
    readTime: "3 min read",
    image: "/ai-research-center-announcement.png",
  },
  {
    title: "Student Innovation Awards 2024 Winners Announced",
    excerpt: "Celebrating outstanding student achievements in technology, sustainability...",
    category: "Students",
    date: "2024-01-12",
    readTime: "2 min read",
    image: "/student-innovation-awards-ceremony.png",
  },
  {
    title: "New Sustainable Campus Initiative Reduces Carbon Footprint",
    excerpt: "Deakin's comprehensive sustainability program achieves significant milestones...",
    category: "Sustainability",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/sustainable-campus-solar-installation.png",
  },
]

export function NewsPreview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Latest News & Updates</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest developments, achievements, and events from our university community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestNews.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <Button size="lg" className="text-lg px-8">
              View All News & Events
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
