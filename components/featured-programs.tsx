import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, MapPin } from "lucide-react"

const featuredPrograms = [
  {
    title: "Bachelor of Artificial Intelligence",
    category: "Undergraduate",
    duration: "3 years",
    mode: "On-campus",
    students: "120 enrolled",
    rating: "4.8/5",
    description:
      "Cutting-edge program combining computer science, mathematics, and cognitive science to prepare students for the AI revolution.",
    highlights: ["Machine Learning", "Neural Networks", "Ethics in AI", "Industry Partnerships"],
    image: "/ai-computer-lab-students.png",
  },
  {
    title: "Master of Sustainable Engineering",
    category: "Graduate",
    duration: "2 years",
    mode: "Hybrid",
    students: "85 enrolled",
    rating: "4.9/5",
    description:
      "Advanced engineering program focused on sustainable technologies and environmental solutions for the future.",
    highlights: ["Renewable Energy", "Green Building", "Environmental Impact", "Research Projects"],
    image: "/sustainable-engineering-solar-panels.png",
  },
  {
    title: "PhD in Biomedical Innovation",
    category: "Research",
    duration: "3-4 years",
    mode: "On-campus",
    students: "45 enrolled",
    rating: "4.7/5",
    description:
      "Research-intensive program advancing medical technologies and treatments through innovative biomedical research.",
    highlights: ["Gene Therapy", "Medical Devices", "Clinical Trials", "Publication Support"],
    image: "/biomedical-research-laboratory.png",
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and innovative programs that are shaping the future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{program.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="h-4 w-4 mr-1" />
                    {program.rating}
                  </div>
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {program.mode}
                  </div>
                  <div className="flex items-center text-muted-foreground col-span-2">
                    <Users className="h-4 w-4 mr-2" />
                    {program.students}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Program Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Learn More
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
