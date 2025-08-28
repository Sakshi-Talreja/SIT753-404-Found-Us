import type { Metadata } from "next"
import { SearchResults } from "@/components/search-results"

export const metadata: Metadata = {
  title: "Search Results - Deakin University",
  description: "Find information across Deakin University's website",
}

export default function SearchPage() {
  return <SearchResults />
}
