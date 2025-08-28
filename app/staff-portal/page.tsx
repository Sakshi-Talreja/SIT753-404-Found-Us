import type { Metadata } from "next"
import { StaffDashboard } from "@/components/staff-dashboard"

export const metadata: Metadata = {
  title: "Staff Portal - Deakin University",
  description: "Access HR information, payroll, course management, and administrative tools",
}

export default function StaffPortalPage() {
  return <StaffDashboard />
}
