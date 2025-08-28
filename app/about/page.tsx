import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, BookOpen, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Established 1974
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">About Deakin University</h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              A world-class university committed to making a positive impact through excellence in education, research,
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class education and research opportunities that empower students to make a positive
                impact on society. We are committed to fostering innovation, critical thinking, and lifelong learning in
                a supportive and inclusive environment.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-accent" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be Australia's premier university for the real world, known globally for our innovative approach to
                education, groundbreaking research, and commitment to creating positive change in our communities and
                beyond.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Deakin by Numbers</h2>
            <p className="text-muted-foreground">Our impact in education and research</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60,000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Inclusive Excellence</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and create an inclusive environment where everyone can thrive and achieve their
                potential.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas, technologies, and approaches to solve real-world challenges and drive positive
                change.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-muted-foreground">
                We prepare students to be global citizens and contribute meaningfully to society on a local and
                international scale.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">Meet the leaders driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prof. Ieva Žagare</h3>
              <p className="text-primary font-medium mb-2">Vice-Chancellor</p>
              <p className="text-sm text-muted-foreground">
                Leading Deakin's strategic vision and commitment to educational excellence.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prof. Julie Owens</h3>
              <p className="text-primary font-medium mb-2">Deputy Vice-Chancellor</p>
              <p className="text-sm text-muted-foreground">
                Overseeing academic programs and research initiatives across all faculties.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Mitchell</h3>
              <p className="text-primary font-medium mb-2">Pro Vice-Chancellor</p>
              <p className="text-sm text-muted-foreground">
                Driving innovation in student experience and digital transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Deakin Community</h2>
            <p className="text-muted-foreground mb-8">
              Discover how you can be part of our mission to create positive change through education and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Explore Programs
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
