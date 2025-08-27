import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    title: "New Engineering Building Opens with State-of-the-Art Facilities",
    excerpt:
      "The $80 million facility features advanced laboratories, collaborative spaces, and sustainable design elements.",
    category: "Campus",
    author: "Sarah Johnson",
    date: "2024-01-08",
    readTime: "5 min read",
    image: "/engineering-building-exterior.png",
  },
  {
    title: "Deakin Students Win International Robotics Competition",
    excerpt:
      "Team Deakin takes first place in the Global Robotics Challenge, showcasing innovative autonomous systems.",
    category: "Students",
    author: "Michael Chen",
    date: "2024-01-05",
    readTime: "3 min read",
    image: "/robotics-competition-team.png",
  },
  {
    title: "Research Breakthrough in Renewable Energy Storage",
    excerpt:
      "Faculty researchers develop new battery technology that could revolutionize clean energy storage solutions.",
    category: "Research",
    author: "Dr. Emma Wilson",
    date: "2024-01-03",
    readTime: "6 min read",
    image: "/renewable-energy-lab-research.png",
  },
  {
    title: "International Partnership Expands Study Abroad Programs",
    excerpt:
      "New agreements with universities in Asia and Europe offer students more opportunities for global education.",
    category: "International",
    author: "James Rodriguez",
    date: "2024-01-01",
    readTime: "4 min read",
    image: "/international-students-campus.png",
  },
  {
    title: "Alumni Success: Tech Startup Reaches $1 Billion Valuation",
    excerpt: "Deakin graduate's fintech company achieves unicorn status, creating jobs and driving innovation.",
    category: "Alumni",
    author: "Lisa Thompson",
    date: "2023-12-28",
    readTime: "3 min read",
    image: "/alumni-tech-startup-office.png",
  },
  {
    title: "Mental Health Support Services Expanded Across Campus",
    excerpt: "University invests in comprehensive wellbeing programs to support student and staff mental health.",
    category: "Wellbeing",
    author: "Dr. Rachel Green",
    date: "2023-12-25",
    readTime: "4 min read",
    image: "/mental-health-support-center.png",
  },
]

export function NewsGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
        <Button variant="outline" className="bg-transparent">
          View All News
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-6">
        {newsArticles.map((article, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 h-48 md:h-32 bg-muted flex-shrink-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
