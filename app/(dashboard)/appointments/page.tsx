import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  appointments,
  clinicalAlerts,
  recentPatients,
} from "@/app/(dashboard)/data/dashboard-data"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div>
      <Link
        href="/"
        className="mb-4 inline-flex items-center text-[13px] font-medium text-primary hover:text-primary/80"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to Dashboard
      </Link>
      {/* Table */}
      <Card>
        <CardContent className="px-5 pt-1 pb-1">
          <div className="mb-4 grid grid-cols-[1fr_auto] items-start">
            <div>
              <h3 className="text-base font-semibold">
                Today&apos;s Appointments
              </h3>
            </div>
          </div>
          <div className="-mx-5 border-t">
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
                {appointments.map((appointment) => (
                  <TableRow key={`${appointment.patient}-${appointment.time}`}>
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

                    <TableCell>{appointment.time}</TableCell>

                    <TableCell>{appointment.type}</TableCell>

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

                    <TableCell className="px-5 text-right">
                      <Link
                        href={`/patients/${appointment.patientId}`}
                        className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-primary hover:bg-transparent hover:text-primary/80"
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
