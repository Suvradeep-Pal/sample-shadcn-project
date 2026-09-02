"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { appointments } from "@/app/(dashboard)/data/dashboard-data"
import { SearchFilter } from "@/components/search-filter"
import { useSearchFilter } from "@/hooks/use-search-filter"
import { Pagination } from "@/components/pagination"
import { usePagination } from "@/hooks/use-pagination"

const APPOINTMENTS_PER_PAGE = 5

export default function AppointmentsPage() {
  const appointmentFilters = ["All", "Confirmed", "Waiting", "Completed"]

  const {
    searchQuery,
    activeFilter,
    filteredItems: filteredAppointments,
    handleSearch: updateSearch,
    handleFilterChange: updateFilter,
  } = useSearchFilter({
    items: appointments,
    filters: appointmentFilters,
    getSearchText: (appointment) =>
      `${appointment.patient} ${appointment.patientId}`,
    getFilterValue: (appointment) => appointment.status,
  })

  const handleSearch = (value: string) => {
    updateSearch(value)
    resetPage()
  }

  const handleFilterChange = (filter: string) => {
    updateFilter(filter)
    resetPage()
  }

  const {
    currentPage,
    totalPages,
    startIndex,
    currentItems: currentAppointments,
    goToPage,
    nextPage,
    previousPage,
    resetPage,
  } = usePagination({
    items: filteredAppointments,
    itemsPerPage: APPOINTMENTS_PER_PAGE,
  })

  return (
    <div className="min-w-0">
      {/* Back to Dashboard */}
      <Link
        href="/"
        className="mb-4 inline-flex items-center text-[13px] font-medium text-primary hover:text-primary/80"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Search + Filters */}
      <SearchFilter
        searchValue={searchQuery}
        onSearchChange={handleSearch}
        searchPlaceholder="Search by name or ID..."
        filters={appointmentFilters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Appointments Card */}
      <Card>
        <CardContent className="px-5 pt-1 pb-1">
          {/* Section Heading */}
          <div className="mb-4 grid grid-cols-[1fr_auto] items-start">
            <div>
              <h3 className="text-base font-semibold">
                Today&apos;s Appointments
              </h3>
            </div>
          </div>

          {/* Table */}
          <div className="-mx-5 min-w-0 overflow-x-auto border-t">
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-5">PATIENT</TableHead>
                  <TableHead>TIME</TableHead>
                  <TableHead>TYPE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="px-5 text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentAppointments.length > 0 ? (
                  currentAppointments.map((appointment) => (
                    <TableRow
                      key={`${appointment.patient}-${appointment.time}`}
                    >
                      {/* Patient */}
                      <TableCell className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar size="default">
                            <AvatarFallback
                              style={{
                                backgroundColor: appointment.avatarColor,
                                color: appointment.avatarTextColor,
                              }}
                            >
                              {appointment.initials}
                            </AvatarFallback>
                          </Avatar>

                          <span className="font-medium">
                            {appointment.patient}
                          </span>
                        </div>
                      </TableCell>

                      {/* Time */}
                      <TableCell>{appointment.time}</TableCell>

                      {/* Type */}
                      <TableCell>{appointment.type}</TableCell>

                      {/* Status */}
                      <TableCell>
                        <Badge
                          className={
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                              : appointment.status === "Waiting"
                                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
                                : appointment.status === "Completed"
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-900/60"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
                          }
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>

                      {/* Action */}
                      <TableCell className="px-5 text-right">
                        <Link
                          href={`/patients/${appointment.patientId}?from=appointments`}
                          className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-primary hover:bg-transparent hover:text-primary/80"
                        >
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-center text-sm text-muted-foreground"
                    >
                      No appointments found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            totalItems={filteredAppointments.length}
            itemsLabel="appointments"
            itemsPerPage={APPOINTMENTS_PER_PAGE}
            onPrevious={previousPage}
            onNext={nextPage}
            onPageChange={goToPage}
          />
        </CardContent>
      </Card>
    </div>
  )
}
