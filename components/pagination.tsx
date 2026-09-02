"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  currentPage: number
  totalPages: number
  startIndex: number
  totalItems: number
  itemsLabel: string
  itemsPerPage: number
  onPrevious: () => void
  onNext: () => void
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  startIndex,
  totalItems,
  itemsLabel,
  itemsPerPage,
  onPrevious,
  onNext,
  onPageChange,
}: PaginationProps) {
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  return (
    <div className="-mx-5 flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[13px] whitespace-nowrap text-muted-foreground">
        Showing{" "}
        <span className="font-medium text-foreground">
          {totalItems > 0 ? startIndex + 1 : 0}
        </span>{" "}
        to <span className="font-medium text-foreground">{endIndex}</span> of{" "}
        <span className="font-medium text-foreground">{totalItems}</span>{" "}
        {itemsLabel}
      </p>

      <div className="flex items-center justify-center gap-1 sm:justify-end">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentPage === 1 || totalPages === 0}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-[13px] font-medium ${
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {page}
            </button>
          )
        })}

        <button
          type="button"
          onClick={onNext}
          disabled={currentPage === totalPages || totalPages === 0}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
