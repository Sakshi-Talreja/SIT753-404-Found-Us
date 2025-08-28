import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login - Deakin University",
  description: "Access your student or staff portal",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-lime-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-slate-900">Welcome Back</CardTitle>
          <CardDescription>Sign in to access your portal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@deakin.edu.au" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-cyan-600 hover:text-cyan-700">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
              Sign In
            </Button>
          </form>
          <div className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
