import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Microscope, ArrowRight } from "lucide-react"

const programHighlights = [
  {
    title: "Undergraduate Programs",
    description: "200+ bachelor's degree programs across diverse fields",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    count: "200+",
    popular: ["Business", "Engineering", "IT", "Health Sciences"],
  },
  {
    title: "Graduate Programs",
    description: "Advanced degrees including Masters and PhD programs",
    icon: BookOpen,
    color: "text-accent",
    bgColor: "bg-accent/10",
    count: "150+",
    popular: ["MBA", "Data Science", "Engineering", "Education"],
  },
  {
    title: "Research Programs",
    description: "Cutting-edge research across multiple disciplines",
    icon: Microscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
    count: "50+",
    popular: ["AI Research", "Sustainability", "Biomedical", "Innovation"],
  },
]

export function ProgramsPreview() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Academic Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class programs designed to shape your future and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programHighlights.map((program, index) => {
            const Icon = program.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`h-8 w-8 ${program.color}`} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{program.count}</div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {program.popular.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button size="lg" className="text-lg px-8">
              Explore All Programs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
