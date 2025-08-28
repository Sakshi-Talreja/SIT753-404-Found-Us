"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Calendar,
  FileText,
  DollarSign,
  Mail,
  User,
  Clock,
  BookOpen,
  Bell,
  Settings,
  BarChart3,
  UserCheck,
} from "lucide-react"

export function StaffDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || (user.userType !== "staff" && user.userType !== "faculty"))) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || (user.userType !== "staff" && user.userType !== "faculty")) {
    return null
  }

  const isFaculty = user.userType === "faculty"

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{isFaculty ? "Faculty Portal" : "Staff Portal"}</h1>
              <p className="text-slate-600">Welcome back, {user.firstName}!</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {isFaculty ? (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Active Courses</p>
                      <p className="text-2xl font-bold text-slate-900">4</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-cyan-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Total Students</p>
                      <p className="text-2xl font-bold text-slate-900">156</p>
                    </div>
                    <Users className="h-8 w-8 text-lime-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Pending Grades</p>
                      <p className="text-2xl font-bold text-slate-900">23</p>
                    </div>
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Research Projects</p>
                      <p className="text-2xl font-bold text-slate-900">2</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Leave Balance</p>
                      <p className="text-2xl font-bold text-slate-900">18 days</p>
                    </div>
                    <Calendar className="h-8 w-8 text-cyan-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Pending Tasks</p>
                      <p className="text-2xl font-bold text-slate-900">7</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">This Month</p>
                      <p className="text-2xl font-bold text-slate-900">$5,240</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-lime-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Team Members</p>
                      <p className="text-2xl font-bold text-slate-900">12</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {isFaculty ? (
              <>
                {/* Current Courses */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Current Courses
                    </CardTitle>
                    <CardDescription>Your teaching assignments this semester</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { code: "SIT102", name: "Introduction to Programming", students: 45, progress: 60 },
                      { code: "SIT302", name: "Advanced Programming", students: 32, progress: 75 },
                      { code: "SIT402", name: "Software Engineering", students: 28, progress: 40 },
                      { code: "SIT502", name: "Research Methods", students: 15, progress: 85 },
                    ].map((course) => (
                      <div key={course.code} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{course.code}</h3>
                            <Badge variant="secondary">{course.students} students</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{course.name}</p>
                          <div className="flex items-center gap-2">
                            <Progress value={course.progress} className="flex-1" />
                            <span className="text-sm text-slate-500">{course.progress}% complete</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Student Submissions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Recent Submissions
                    </CardTitle>
                    <CardDescription>Latest student assignment submissions requiring review</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        student: "Alice Johnson",
                        assignment: "Programming Assignment 3",
                        course: "SIT102",
                        submitted: "2 hours ago",
                        status: "Pending Review",
                      },
                      {
                        student: "Bob Smith",
                        assignment: "Research Proposal",
                        course: "SIT502",
                        submitted: "5 hours ago",
                        status: "Pending Review",
                      },
                      {
                        student: "Carol Davis",
                        assignment: "System Design",
                        course: "SIT402",
                        submitted: "1 day ago",
                        status: "Reviewed",
                      },
                    ].map((submission, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{submission.assignment}</h3>
                          <p className="text-sm text-slate-600">
                            {submission.student} • {submission.course} • {submission.submitted}
                          </p>
                        </div>
                        <Badge variant={submission.status === "Reviewed" ? "default" : "secondary"}>
                          {submission.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                {/* HR Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      HR Information
                    </CardTitle>
                    <CardDescription>Your employment details and benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Employment Details</h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>Position: Administrative Assistant</p>
                          <p>Department: Student Services</p>
                          <p>Start Date: Jan 15, 2022</p>
                          <p>Employee ID: DS001234</p>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Benefits</h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>Health Insurance: Active</p>
                          <p>Dental Coverage: Active</p>
                          <p>Retirement Plan: 401(k)</p>
                          <p>Life Insurance: $50,000</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Recent Tasks
                    </CardTitle>
                    <CardDescription>Your current assignments and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Process Student Applications",
                        department: "Admissions",
                        dueDate: "Mar 20, 2024",
                        priority: "High",
                        status: "In Progress",
                      },
                      {
                        title: "Update Course Catalog",
                        department: "Academic Affairs",
                        dueDate: "Mar 25, 2024",
                        priority: "Medium",
                        status: "Pending",
                      },
                      {
                        title: "Prepare Monthly Report",
                        department: "Student Services",
                        dueDate: "Mar 30, 2024",
                        priority: "Low",
                        status: "Not Started",
                      },
                    ].map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm text-slate-600">
                            {task.department} • Due: {task.dueDate}
                          </p>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge
                            variant={
                              task.priority === "High"
                                ? "destructive"
                                : task.priority === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {task.priority}
                          </Badge>
                          <p className="text-xs text-slate-500">{task.status}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isFaculty ? (
                  <>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Course Management
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Student Records
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Grade Submissions
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Research Portal
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Payroll & Benefits
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Leave Requests
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      HR Documents
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Team Directory
                    </Button>
                  </>
                )}
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

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { event: "Faculty Meeting", date: "Mar 18", time: "2:00 PM" },
                  { event: "Student Orientation", date: "Mar 22", time: "10:00 AM" },
                  { event: "Department Review", date: "Mar 28", time: "3:30 PM" },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{event.event}</p>
                      <p className="text-xs text-slate-600">{event.time}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {event.date}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payroll Summary (for staff) */}
            {!isFaculty && (
              <Card>
                <CardHeader>
                  <CardTitle>Payroll Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Gross Pay</span>
                      <span className="font-semibold">$6,200.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Deductions</span>
                      <span className="font-semibold">$960.00</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Net Pay</span>
                        <span className="font-bold text-lg">$5,240.00</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Pay Stub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
