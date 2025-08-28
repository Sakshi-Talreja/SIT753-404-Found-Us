import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, GraduationCap, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Contact Deakin University</h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              We're here to help with your questions about admissions, programs, research, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Future Students</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Questions about programs, admissions, and applications
              </p>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Current Students</h3>
              <p className="text-sm text-muted-foreground mb-4">Academic support, services, and student life</p>
              <Button variant="outline" size="sm">
                Student Portal
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Staff & Faculty</h3>
              <p className="text-sm text-muted-foreground mb-4">HR, payroll, and internal resources</p>
              <Button variant="outline" size="sm">
                Staff Portal
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-4">Media, partnerships, and other questions</p>
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Campus Locations</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">Burwood Campus</p>
                        <p>221 Burwood Highway, Burwood VIC 3125</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Geelong Campus</p>
                        <p>75 Pigdons Road, Waurn Ponds VIC 3216</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Warrnambool Campus</p>
                        <p>Princes Highway, Warrnambool VIC 3280</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone Numbers</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">General Inquiries</p>
                        <p>+61 3 9244 6100</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Student Services</p>
                        <p>+61 3 9244 6333</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">International</p>
                        <p>+61 3 9244 6777</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Addresses</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">General</p>
                        <p>info@deakin.edu.au</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Admissions</p>
                        <p>admissions@deakin.edu.au</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Media</p>
                        <p>media@deakin.edu.au</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:30 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-destructive/20 bg-destructive/5">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-destructive">Emergency Contact</h2>
                <p className="text-muted-foreground mb-6">
                  For campus emergencies, security issues, or urgent matters outside business hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-destructive" />
                    <span className="font-semibold">Emergency: 000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-destructive" />
                    <span className="font-semibold">Campus Security: +61 3 9244 6666</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
