"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, FileText, GraduationCap, Mail, User, Clock, Award, Bell } from "lucide-react"

export function StudentDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.userType !== "student")) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || user.userType !== "student") {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Student Portal</h1>
              <p className="text-slate-600">Welcome back, {user.firstName}!</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Current GPA</p>
                  <p className="text-2xl font-bold text-slate-900">3.85</p>
                </div>
                <Award className="h-8 w-8 text-cyan-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Credits Completed</p>
                  <p className="text-2xl font-bold text-slate-900">84/120</p>
                </div>
                <GraduationCap className="h-8 w-8 text-lime-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Current Courses</p>
                  <p className="text-2xl font-bold text-slate-900">5</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Tasks</p>
                  <p className="text-2xl font-bold text-slate-900">3</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Current Courses
                </CardTitle>
                <CardDescription>Your enrolled courses for this semester</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { code: "SIT102", name: "Introduction to Programming", progress: 75, grade: "HD" },
                  { code: "SIT103", name: "Data Structures", progress: 60, grade: "D" },
                  { code: "SIT104", name: "Computer Systems", progress: 80, grade: "HD" },
                  { code: "SIT105", name: "Critical Thinking", progress: 45, grade: "C" },
                  { code: "SIT106", name: "Mathematics for IT", progress: 90, grade: "HD" },
                ].map((course) => (
                  <div key={course.code} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{course.code}</h3>
                        <Badge variant="secondary">{course.grade}</Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{course.name}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="flex-1" />
                        <span className="text-sm text-slate-500">{course.progress}%</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Assignments
                </CardTitle>
                <CardDescription>Your latest assignment submissions and feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Programming Assignment 3",
                    course: "SIT102",
                    dueDate: "2024-03-15",
                    status: "Submitted",
                    grade: "85%",
                  },
                  {
                    title: "Data Analysis Report",
                    course: "SIT103",
                    dueDate: "2024-03-20",
                    status: "Graded",
                    grade: "78%",
                  },
                  {
                    title: "System Design Project",
                    course: "SIT104",
                    dueDate: "2024-03-25",
                    status: "In Progress",
                    grade: "-",
                  },
                ].map((assignment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <p className="text-sm text-slate-600">
                        {assignment.course} • Due: {assignment.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={assignment.status === "Graded" ? "default" : "secondary"}>
                        {assignment.status}
                      </Badge>
                      {assignment.grade !== "-" && <p className="text-sm font-medium mt-1">{assignment.grade}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Timetable
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Academic Records
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { task: "Essay Submission", course: "SIT105", date: "Mar 18", urgent: true },
                  { task: "Lab Report", course: "SIT104", date: "Mar 22", urgent: false },
                  { task: "Group Presentation", course: "SIT103", date: "Mar 28", urgent: false },
                ].map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{deadline.task}</p>
                      <p className="text-xs text-slate-600">{deadline.course}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={deadline.urgent ? "destructive" : "secondary"} className="text-xs">
                        {deadline.date}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Degree Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} />
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>84 of 120 credit points completed</p>
                    <p>Expected graduation: Dec 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
