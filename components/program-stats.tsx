import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "200+", label: "Undergraduate Programs", description: "Across diverse fields of study" },
  { number: "150+", label: "Graduate Programs", description: "Masters and PhD opportunities" },
  { number: "50+", label: "Research Centers", description: "Leading innovation and discovery" },
  { number: "95%", label: "Graduate Employment", description: "Within 6 months of graduation" },
]

export function ProgramStats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
