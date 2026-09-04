import { useEffect, useMemo, useState } from "react"

type UseSearchFilterOptions<T> = {
  items: T[]
  filters: string[]
  initialFilter?: string
  debounceMs?: number
  getSearchText: (item: T) => string
  getFilterValue: (item: T) => string
}

export function useSearchFilter<T>({
  items,
  filters,
  initialFilter,
  debounceMs = 300,
  getSearchText,
  getFilterValue,
}: UseSearchFilterOptions<T>) {
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, debounceMs)

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery, debounceMs])

  const [activeFilter, setActiveFilter] = useState(
    initialFilter ?? filters[0] ?? ""
  )

  const filteredItems = useMemo(() => {
    const query = debouncedSearchQuery.toLowerCase().trim()

    return items.filter((item) => {
      const searchText = getSearchText(item).toLowerCase()
      const filterValue = getFilterValue(item)

      const matchesSearch = searchText.includes(query)

      const matchesFilter =
        activeFilter === filters[0] || filterValue === activeFilter

      return matchesSearch && matchesFilter
    })
  }, [
    items,
    debouncedSearchQuery,
    activeFilter,
    filters,
    getSearchText,
    getFilterValue,
  ])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const resetFilter = () => {
    setActiveFilter(filters[0] ?? "")
  }

  return {
    searchQuery,
    activeFilter,
    filteredItems,
    handleSearch,
    handleFilterChange,
    clearSearch,
    resetFilter,
  }
}
