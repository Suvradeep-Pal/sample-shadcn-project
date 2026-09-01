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

import { appointments } from "@/app/(dashboard)/data/dashboard-data"

const APPOINTMENTS_PER_PAGE = 5

export default function AppointmentsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  // Search + Filter
  const filteredAppointments = appointments.filter((appointment) => {
    const query = searchQuery.toLowerCase().trim()

    const matchesSearch =
      appointment.patient.toLowerCase().includes(query) ||
      appointment.patientId.toLowerCase().includes(query)

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(
    filteredAppointments.length / APPOINTMENTS_PER_PAGE
  )

  const startIndex = (currentPage - 1) * APPOINTMENTS_PER_PAGE

  const currentAppointments = filteredAppointments.slice(
    startIndex,
    startIndex + APPOINTMENTS_PER_PAGE
  )

  // Search handler
  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  // Status filter handler
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
        <div className="flex w-full gap-1 overflow-x-auto sm:w-auto">
          {["All", "Confirmed", "Waiting", "Completed"].map((status) => (
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
          <div className="-mx-5 overflow-x-auto border-t">
            <Table>
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
          <div className="flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Showing text */}
            <p className="text-[13px] whitespace-nowrap text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {filteredAppointments.length > 0 ? startIndex + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-medium text-foreground">
                {Math.min(
                  startIndex + APPOINTMENTS_PER_PAGE,
                  filteredAppointments.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-medium text-foreground">
                {filteredAppointments.length}
              </span>{" "}
              appointments
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
