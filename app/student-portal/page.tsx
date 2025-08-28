import type { Metadata } from "next"
import { StudentDashboard } from "@/components/student-dashboard"

export const metadata: Metadata = {
  title: "Student Portal - Deakin University",
  description: "Access your academic records, course materials, and university services",
}

export default function StudentPortalPage() {
  return <StudentDashboard />
}
