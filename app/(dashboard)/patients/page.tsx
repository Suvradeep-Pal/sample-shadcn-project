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
import { SearchFilter } from "@/components/search-filter"
import { useSearchFilter } from "@/hooks/use-search-filter"
import { Pagination } from "@/components/pagination"
import { usePagination } from "@/hooks/use-pagination"

import { recentPatients } from "@/app/(dashboard)/data/dashboard-data"

const PATIENTS_PER_PAGE = 5

export default function PatientsPage() {
  const patientFilters = ["All", "Stable", "Follow-up", "Critical"]

  const {
    searchQuery,
    activeFilter,
    filteredItems: filteredPatients,
    handleSearch: updateSearch,
    handleFilterChange: updateFilter,
  } = useSearchFilter({
    items: recentPatients,
    filters: patientFilters,
    getSearchText: (patient) => `${patient.patient} ${patient.id}`,
    getFilterValue: (patient) => patient.status,
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
    currentItems: currentPatients,
    goToPage,
    nextPage,
    previousPage,
    resetPage,
  } = usePagination({
    items: filteredPatients,
    itemsPerPage: PATIENTS_PER_PAGE,
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
        filters={patientFilters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Patients Card */}
      <Card className="mb-6">
        <CardContent className="px-5 pt-1 pb-1">
          {/* Section Heading */}
          <div className="flex items-center justify-between pt-1 pb-4">
            <h3 className="text-base font-semibold">Patients</h3>
          </div>

          {/* Table */}
          <div className="-mx-5 min-w-0 overflow-x-auto border-t">
            <Table className="min-w-[900px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-5">PATIENT</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>AGE / GENDER</TableHead>
                  <TableHead>CONDITION</TableHead>
                  <TableHead>LAST VISIT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="px-5 text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentPatients.length > 0 ? (
                  currentPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      {/* Patient */}
                      <TableCell className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar size="default">
                            <AvatarFallback
                              style={{
                                backgroundColor: patient.avatarColor,
                                color: patient.avatarTextColor,
                              }}
                            >
                              {patient.initials}
                            </AvatarFallback>
                          </Avatar>

                          <span className="font-medium">{patient.patient}</span>
                        </div>
                      </TableCell>

                      {/* ID */}
                      <TableCell>{patient.id}</TableCell>

                      {/* Age / Gender */}
                      <TableCell>{patient.ageGender}</TableCell>

                      {/* Condition */}
                      <TableCell>{patient.condition}</TableCell>

                      {/* Last Visit */}
                      <TableCell>{patient.lastVisit}</TableCell>

                      {/* Status */}
                      <TableCell>
                        <Badge
                          className={
                            patient.status === "Stable"
                              ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                              : patient.status === "Critical"
                                ? "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-900"
                                : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
                          }
                        >
                          {patient.status}
                        </Badge>
                      </TableCell>

                      {/* Action */}
                      <TableCell className="px-5 text-right">
                        <Link
                          href={`/patients/${patient.id}?from=patients`}
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
                      colSpan={7}
                      className="h-24 text-center text-sm text-muted-foreground"
                    >
                      No patients found.
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
            totalItems={filteredPatients.length}
            itemsLabel="patients"
            itemsPerPage={PATIENTS_PER_PAGE}
            onPrevious={previousPage}
            onNext={nextPage}
            onPageChange={goToPage}
          />
        </CardContent>
      </Card>
    </div>
  )
}
