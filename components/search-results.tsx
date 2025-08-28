"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, Newspaper, Users, GraduationCap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchResult {
  id: string
  title: string
  description: string
  category: "programs" | "news" | "courses" | "staff" | "general"
  url: string
  date?: string
}

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "Bachelor of Computer Science",
    description:
      "Comprehensive undergraduate program covering programming, algorithms, and software engineering principles.",
    category: "programs",
    url: "/programs",
  },
  {
    id: "2",
    title: "AI Research Center Opens New Facility",
    description:
      "Deakin University inaugurates state-of-the-art artificial intelligence research center with advanced computing resources.",
    category: "news",
    url: "/news",
    date: "March 10, 2024",
  },
  {
    id: "3",
    title: "SIT102 - Introduction to Programming",
    description: "Foundational course teaching programming concepts using modern languages and development practices.",
    category: "courses",
    url: "/programs",
  },
  {
    id: "4",
    title: "Dr. Sarah Johnson - Computer Science Faculty",
    description: "Professor specializing in machine learning and artificial intelligence research.",
    category: "staff",
    url: "/about",
  },
  {
    id: "5",
    title: "Student Innovation Awards 2024",
    description:
      "Annual recognition ceremony celebrating outstanding student achievements in technology and innovation.",
    category: "news",
    url: "/news",
    date: "March 5, 2024",
  },
  {
    id: "6",
    title: "Master of Data Science",
    description:
      "Advanced graduate program focusing on big data analytics, machine learning, and statistical modeling.",
    category: "programs",
    url: "/programs",
  },
]

export function SearchResults() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [category, setCategory] = useState<string>("all")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    performSearch()
  }, [query, category])

  const performSearch = () => {
    setLoading(true)
    // Mock search implementation - replace with real search logic
    setTimeout(() => {
      let filteredResults = mockSearchResults

      if (query.trim()) {
        filteredResults = filteredResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase()),
        )
      }

      if (category !== "all") {
        filteredResults = filteredResults.filter((result) => result.category === category)
      }

      setResults(filteredResults)
      setLoading(false)
    }, 300)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "programs":
        return <GraduationCap className="h-4 w-4" />
      case "news":
        return <Newspaper className="h-4 w-4" />
      case "courses":
        return <BookOpen className="h-4 w-4" />
      case "staff":
        return <Users className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "programs":
        return "bg-cyan-100 text-cyan-800"
      case "news":
        return "bg-lime-100 text-lime-800"
      case "courses":
        return "bg-blue-100 text-blue-800"
      case "staff":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Search Deakin University</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find information about programs, courses, news, staff, and university services
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search for programs, courses, news, staff..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <div className="flex gap-2">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40 h-12">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="programs">Programs</SelectItem>
                    <SelectItem value="courses">Courses</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={performSearch} className="h-12 px-6 bg-cyan-600 hover:bg-cyan-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600 mx-auto"></div>
            <p className="text-slate-600 mt-4">Searching...</p>
          </div>
        ) : (
          <>
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-slate-600">
                {results.length > 0 ? (
                  <>
                    Found <span className="font-semibold">{results.length}</span> result
                    {results.length !== 1 ? "s" : ""} {query && `for "${query}"`}
                  </>
                ) : (
                  <>No results found {query && `for "${query}"`}</>
                )}
              </p>
            </div>

            {/* Search Results */}
            <div className="space-y-6">
              {results.length > 0 ? (
                results.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getCategoryColor(result.category)} flex items-center gap-1`}>
                              {getCategoryIcon(result.category)}
                              {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                            </Badge>
                            {result.date && <span className="text-sm text-slate-500">{result.date}</span>}
                          </div>
                          <CardTitle className="text-xl mb-2">
                            <a href={result.url} className="text-slate-900 hover:text-cyan-600 transition-colors">
                              {result.title}
                            </a>
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">{result.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No results found</h3>
                    <p className="text-slate-600 mb-4">Try adjusting your search terms or browse our main sections:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/programs">Programs</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/news">News</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/about">About</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/contact">Contact</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
