import { useMemo, useState } from "react"

type UseSearchFilterOptions<T> = {
  items: T[]
  filters: string[]
  initialFilter?: string
  getSearchText: (item: T) => string
  getFilterValue: (item: T) => string
}

export function useSearchFilter<T>({
  items,
  filters,
  initialFilter,
  getSearchText,
  getFilterValue,
}: UseSearchFilterOptions<T>) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState(
    initialFilter ?? filters[0] ?? ""
  )

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return items.filter((item) => {
      const searchText = getSearchText(item).toLowerCase()
      const filterValue = getFilterValue(item)

      const matchesSearch = searchText.includes(query)

      const matchesFilter =
        activeFilter === filters[0] || filterValue === activeFilter

      return matchesSearch && matchesFilter
    })
  }, [items, searchQuery, activeFilter, filters, getSearchText, getFilterValue])

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
