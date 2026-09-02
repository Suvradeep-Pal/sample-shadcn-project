import { useMemo, useState } from "react"

type UsePaginationOptions<T> = {
  items: T[]
  itemsPerPage: number
}

export function usePagination<T>({
  items,
  itemsPerPage,
}: UsePaginationOptions<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage

  const currentItems = useMemo(() => {
    return items.slice(startIndex, startIndex + itemsPerPage)
  }, [items, startIndex, itemsPerPage])

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), Math.max(totalPages, 1)))
  }

  const nextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages))
  }

  const previousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1))
  }

  const resetPage = () => {
    setCurrentPage(1)
  }

  return {
    currentPage,
    totalPages,
    startIndex,
    currentItems,
    goToPage,
    nextPage,
    previousPage,
    resetPage,
  }
}
