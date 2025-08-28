"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, GraduationCap, Users } from "lucide-react"
import { AuthNav } from "@/components/auth-nav"
import { SearchInput } from "@/components/search-input"
import { useAuth } from "@/contexts/auth-context"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Deakin University</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/programs" className="text-foreground hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/news" className="text-foreground hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchInput placeholder="Search..." className="w-64" />
            {user ? (
              <AuthNav />
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">
                    <User className="h-4 w-4 mr-2" />
                    Student Portal
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">
                    <Users className="h-4 w-4 mr-2" />
                    Staff Portal
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link href="/programs" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/news" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                News
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <SearchInput placeholder="Search..." className="w-full" />
                {user ? (
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                      <Link href={user.userType === "student" ? "/student-portal" : "/staff-portal"}>
                        <User className="h-4 w-4 mr-2" />
                        My Portal
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/login">
                        <User className="h-4 w-4 mr-2" />
                        Student Portal
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/login">
                        <Users className="h-4 w-4 mr-2" />
                        Staff Portal
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
