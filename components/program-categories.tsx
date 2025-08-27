import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Microscope, ArrowRight } from "lucide-react"

const programCategories = [
  {
    title: "Undergraduate Programs",
    description: "Bachelor's degrees designed to provide comprehensive foundation knowledge and practical skills",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    programs: [
      { name: "Bachelor of Business", duration: "3 years", intake: "Feb, Jul" },
      { name: "Bachelor of Engineering", duration: "4 years", intake: "Feb, Jul" },
      { name: "Bachelor of Arts", duration: "3 years", intake: "Feb, Jul" },
      { name: "Bachelor of Science", duration: "3 years", intake: "Feb, Jul" },
      { name: "Bachelor of Information Technology", duration: "3 years", intake: "Feb, Jul" },
      { name: "Bachelor of Health Sciences", duration: "3 years", intake: "Feb, Jul" },
    ],
    href: "/programs/undergraduate",
  },
  {
    title: "Graduate Programs",
    description: "Advanced degrees including Masters and PhD programs for specialized expertise and research",
    icon: BookOpen,
    color: "text-accent",
    bgColor: "bg-accent/10",
    programs: [
      { name: "Master of Business Administration", duration: "2 years", intake: "Feb, Jul" },
      { name: "Master of Engineering", duration: "2 years", intake: "Feb, Jul" },
      { name: "Master of Data Science", duration: "2 years", intake: "Feb, Jul" },
      { name: "Master of Education", duration: "2 years", intake: "Feb, Jul" },
      { name: "PhD Programs", duration: "3-4 years", intake: "Year round" },
      { name: "Master of Public Health", duration: "2 years", intake: "Feb, Jul" },
    ],
    href: "/programs/graduate",
  },
  {
    title: "Research Programs",
    description: "Cutting-edge research opportunities across multiple disciplines with world-class facilities",
    icon: Microscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
    programs: [
      { name: "Artificial Intelligence Research", duration: "Ongoing", intake: "Year round" },
      { name: "Sustainable Energy Research", duration: "Ongoing", intake: "Year round" },
      { name: "Biomedical Research", duration: "Ongoing", intake: "Year round" },
      { name: "Climate Change Studies", duration: "Ongoing", intake: "Year round" },
      { name: "Digital Innovation Lab", duration: "Ongoing", intake: "Year round" },
      { name: "Social Impact Research", duration: "Ongoing", intake: "Year round" },
    ],
    href: "/programs/research",
  },
]

export function ProgramCategories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Program Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of academic programs designed to meet your educational and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.programs.map((program, programIndex) => (
                      <div
                        key={programIndex}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                      >
                        <div>
                          <div className="font-medium text-sm">{program.name}</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {program.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {program.intake}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={category.href}>
                    <Button className="w-full bg-transparent" variant="outline">
                      View All Programs
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
