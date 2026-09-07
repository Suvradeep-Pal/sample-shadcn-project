import { useState } from "react"

type UseFilterOptions = {
  filters: string[]
  initialFilter?: string
}

export function useFilter({ filters, initialFilter }: UseFilterOptions) {
  const [activeFilter, setActiveFilter] = useState(
    initialFilter ?? filters[0] ?? ""
  )

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  const resetFilter = () => {
    setActiveFilter(filters[0] ?? "")
  }

  return {
    activeFilter,
    handleFilterChange,
    resetFilter,
  }
}
