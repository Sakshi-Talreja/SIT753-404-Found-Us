import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const featuredNews = [
  {
    title: "Deakin University Launches New AI Research Center",
    excerpt:
      "The university announces a $50 million investment in artificial intelligence research, establishing a world-class facility for innovation and discovery.",
    category: "Research",
    date: "2024-01-15",
    readTime: "3 min read",
    image: "/ai-research-center-announcement.png",
    featured: true,
  },
  {
    title: "Student Innovation Awards 2024 Winners Announced",
    excerpt:
      "Celebrating outstanding student achievements in technology, sustainability, and social impact across all faculties.",
    category: "Students",
    date: "2024-01-12",
    readTime: "2 min read",
    image: "/student-innovation-awards-ceremony.png",
  },
  {
    title: "New Sustainable Campus Initiative Reduces Carbon Footprint by 40%",
    excerpt:
      "Deakin's comprehensive sustainability program achieves significant environmental milestones through renewable energy and waste reduction.",
    category: "Sustainability",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/sustainable-campus-solar-installation.png",
  },
]

export function FeaturedNews() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The latest headlines and important updates from across our university community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <div className="lg:row-span-2">
            <Card className="h-full overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={featuredNews[0].image || "/placeholder.svg"}
                  alt={featuredNews[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{featuredNews[0].category}</Badge>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredNews[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredNews[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{featuredNews[0].title}</h3>
                <p className="text-muted-foreground mb-6">{featuredNews[0].excerpt}</p>
                <Button>
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Featured Articles */}
          <div className="space-y-6">
            {featuredNews.slice(1).map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-32 h-24 bg-muted flex-shrink-0">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{article.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
