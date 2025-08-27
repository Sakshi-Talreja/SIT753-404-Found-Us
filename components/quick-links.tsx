import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Calendar, MapPin, Phone, User, Building } from "lucide-react"

const quickLinks = [
  {
    title: "Course Information",
    description: "Browse our undergraduate and graduate programs",
    icon: BookOpen,
    href: "/programs",
    color: "text-primary",
  },
  {
    title: "Student Portal",
    description: "Access your academic records and course materials",
    icon: User,
    href: "/student-portal",
    color: "text-accent",
  },
  {
    title: "Staff Directory",
    description: "Find contact information for faculty and staff",
    icon: Users,
    href: "/staff-directory",
    color: "text-primary",
  },
  {
    title: "Campus Events",
    description: "Stay updated with university events and activities",
    icon: Calendar,
    href: "/events",
    color: "text-accent",
  },
  {
    title: "Campus Map",
    description: "Navigate our campus with interactive maps",
    icon: MapPin,
    href: "/campus-map",
    color: "text-primary",
  },
  {
    title: "Admissions",
    description: "Learn about application processes and requirements",
    icon: GraduationCap,
    href: "/admissions",
    color: "text-accent",
  },
  {
    title: "Staff Portal",
    description: "Access HR information and payroll",
    icon: Building,
    href: "/staff-portal",
    color: "text-primary",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our support team",
    icon: Phone,
    href: "/contact",
    color: "text-accent",
  },
]

export function QuickLinks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quick Access</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find what you need quickly with our most popular resources and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link key={index} href={link.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Icon
                        className={`h-12 w-12 mx-auto ${link.color} group-hover:scale-110 transition-transform duration-200`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
