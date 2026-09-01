"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, Search } from "lucide-react"

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
import { Input } from "@/components/ui/input"

import { recentPatients } from "@/app/(dashboard)/data/dashboard-data"

const PATIENTS_PER_PAGE = 5

export default function PatientsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  // Search + Filter
  const filteredPatients = recentPatients.filter((patient) => {
    const query = searchQuery.toLowerCase().trim()

    const matchesSearch =
      patient.patient.toLowerCase().includes(query) ||
      patient.id.toLowerCase().includes(query)

    const matchesStatus =
      statusFilter === "All" || patient.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredPatients.length / PATIENTS_PER_PAGE)

  const startIndex = (currentPage - 1) * PATIENTS_PER_PAGE

  const currentPatients = filteredPatients.slice(
    startIndex,
    startIndex + PATIENTS_PER_PAGE
  )

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status)
    setCurrentPage(1)
  }

  return (
    <div>
      {/* Back to Dashboard */}
      <Link
        href="/"
        className="mb-4 inline-flex items-center text-[13px] font-medium text-primary hover:text-primary/80"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Search + Filters */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:max-w-[280px]">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground dark:text-primary" />

          <Input
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Search by name or ID..."
            className="h-9 bg-white pl-9 text-sm placeholder:text-muted-foreground dark:bg-background dark:placeholder:text-primary"
          />
        </div>

        {/* Status Filters */}
        <div className="flex w-full gap-2 overflow-x-auto sm:w-auto">
          {["All", "Stable", "Follow-up", "Critical"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => handleStatusFilter(status)}
              className={`inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-md border px-3 text-[13px] font-medium transition-colors ${
                statusFilter === status
                  ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80"
                  : "border-border bg-white text-muted-foreground hover:bg-muted dark:bg-background dark:hover:bg-muted"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Patients Card */}
      <Card className="mb-6">
        <CardContent className="p-0">
          {/* Section Heading */}
          <div className="flex items-center justify-between px-5 pt-1 pb-4">
            <h3 className="text-base font-semibold">Patients</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border-t">
            <Table>
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
          <div className="flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Showing text */}
            <p className="text-[13px] whitespace-nowrap text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {filteredPatients.length > 0 ? startIndex + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-medium text-foreground">
                {Math.min(
                  startIndex + PATIENTS_PER_PAGE,
                  filteredPatients.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-medium text-foreground">
                {filteredPatients.length}
              </span>{" "}
              patients
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-1 sm:justify-end">
              {/* Previous */}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                disabled={currentPage === 1 || totalPages === 0}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
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

              {/* Next */}
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(page + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
