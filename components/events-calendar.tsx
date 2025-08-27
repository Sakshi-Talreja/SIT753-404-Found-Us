import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    title: "Open Day 2024",
    date: "2024-02-15",
    time: "9:00 AM - 4:00 PM",
    location: "Main Campus",
    category: "Admissions",
    attendees: "500+ expected",
    description: "Explore our campus, meet faculty, and discover your future program.",
  },
  {
    title: "Research Symposium",
    date: "2024-02-20",
    time: "10:00 AM - 5:00 PM",
    location: "Conference Center",
    category: "Research",
    attendees: "200+ researchers",
    description: "Annual showcase of groundbreaking research across all disciplines.",
  },
  {
    title: "Career Fair",
    date: "2024-02-25",
    time: "11:00 AM - 3:00 PM",
    location: "Sports Complex",
    category: "Career",
    attendees: "100+ employers",
    description: "Connect with top employers and explore career opportunities.",
  },
  {
    title: "Alumni Networking Night",
    date: "2024-03-01",
    time: "6:00 PM - 9:00 PM",
    location: "Alumni Hall",
    category: "Alumni",
    attendees: "300+ alumni",
    description: "Network with successful graduates and build professional connections.",
  },
  {
    title: "International Student Orientation",
    date: "2024-03-05",
    time: "9:00 AM - 2:00 PM",
    location: "Student Center",
    category: "International",
    attendees: "150+ students",
    description: "Welcome session for new international students with campus tour.",
  },
]

export function EventsCalendar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 pb-4 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                <div className="space-y-1 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-2" />
                    {event.attendees}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            View All Events
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              Academic Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              Event Registration
            </Button>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              Campus Map
            </Button>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              Contact Events Team
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
