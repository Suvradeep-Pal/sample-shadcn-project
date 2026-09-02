"use client"

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

type SearchFilterProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function SearchFilter({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filters,
  activeFilter,
  onFilterChange,
}: SearchFilterProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative w-full sm:max-w-[280px]">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground dark:text-primary" />

        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="h-9 bg-white pl-9 text-sm placeholder:text-muted-foreground dark:bg-background dark:placeholder:text-primary"
        />
      </div>

      <div className="flex w-full gap-2 overflow-x-auto sm:w-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-md border px-3 text-[13px] font-medium transition-colors ${
              activeFilter === filter
                ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80"
                : "border-border bg-white text-muted-foreground hover:bg-muted dark:bg-background dark:hover:bg-muted"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
