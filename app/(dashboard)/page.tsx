import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge, badgeVariants } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  CalendarCheck,
  CheckSquare,
  TriangleAlert,
  Plus,
} from "lucide-react"
import {
  appointments,
  clinicalAlerts,
  recentPatients,
} from "./data/dashboard-data"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Good morning, Dr. Sarah</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s your clinical overview for today.
          </p>
        </div>
        <Button className="gap-1.5">
          <Plus className="h-4 w-4" />
          New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Patients"
          value="1,248"
          subtitle="+12 this month"
          icon={<Users className="h-[18px] w-[18px] text-primary" />}
          iconBg="bg-accent"
          subtitleColor="text-primary"
        />
        <StatsCard
          title="Today's Appointments"
          value="24"
          subtitle="8 remaining"
          icon={
            <CalendarCheck className="h-[18px] w-[18px] text-secondary-foreground" />
          }
          iconBg="bg-secondary"
          subtitleColor="text-secondary-foreground"
        />
        <StatsCard
          title="Follow-ups"
          value="12"
          subtitle="5 due today"
          icon={<CheckSquare className="h-[18px] w-[18px] text-[#9A83C4]" />}
          iconBg="bg-[#F0EAF8]"
          subtitleColor="text-[#9A83C4]"
        />
        <StatsCard
          title="Critical Alerts"
          value="3"
          subtitle="Requires attention"
          icon={
            <TriangleAlert className="h-[18px] w-[18px] text-destructive" />
          }
          iconBg="bg-[#FDE8E7]"
          subtitleColor="text-destructive"
        />
      </div>

      {/* TODO: Interns add the following sections:
          - Today's Appointments table  (shadcn Table + Badge + Avatar)
          - Clinical Alerts card        (Card with pastel backgrounds)
          - Recent Patients table       (shadcn Table + Badge)
      */}

      {/* Today's Appointments + Clinical Alerts */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[2.40fr_1fr]">
        {/* Today's Appointments */}
        <Card>
          <CardContent className="px-5 pt-1 pb-1">
            {/* Section Heading */}
            <div className="mb-4 grid grid-cols-[1fr_auto] items-start">
              <div>
                <h3 className="text-base font-semibold">
                  Today&apos;s Appointments
                </h3>
              </div>

              {/* <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-primary hover:bg-transparent hover:text-primary/80"
              >
                View all
              </Button> */}
              <Link
                href="/appointments"
                className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-primary hover:bg-transparent hover:text-primary/80"
              >
                View all
              </Link>
            </div>

            {/* Table */}
            <div className="-mx-5 max-h-[320px] overflow-x-auto overflow-y-auto border-t">
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
                    <TableRow
                      key={`${appointment.patient}-${appointment.time}`}
                    >
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
                          href={`/patients/${appointment.patientId}?from=dashboard`}
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

        {/* Clinical Alerts */}
        <Card>
          <CardContent className="px-5 pt-1 pb-1">
            {/* Section Heading */}
            <div className="mb-4">
              <h3 className="text-base font-semibold">Clinical Alerts</h3>
            </div>

            {/* Alerts */}
            <div className="space-y-3">
              {clinicalAlerts.map((alert) => (
                <div
                  key={alert.patient}
                  className={`rounded-lg p-3.5 ${alert.className}`}
                >
                  {/* Avatar + Patient Name */}
                  <div className="flex items-center gap-3">
                    <Avatar size="default" className={alert.avatarClassName}>
                      <AvatarFallback
                        style={{
                          backgroundColor: alert.avatarColor,
                          color: alert.avatarTextColor,
                        }}
                      >
                        {alert.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* <div className="min-w-0 flex-1"> */}
                    <p className={`text-sm font-medium ${alert.nameClassName}`}>
                      {alert.patient}
                    </p>
                  </div>
                  {/* Alert Message + Time */}
                  <div className="mt-1">
                    <p className={`text-[13px] ${alert.messageClassName}`}>
                      {alert.message}
                    </p>

                    <p className={`mt-1 text-[11px] ${alert.timeClassName}`}>
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Patients */}
      <Card className="mb-6">
        <CardContent className="p-0">
          {/* Section Heading */}
          <div className="flex items-center justify-between px-5 pt-1 pb-4">
            <h3 className="text-base font-semibold">Recent Patients</h3>

            {/* <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer text-primary hover:bg-transparent hover:text-primary/80"
            >
              View all
            </Button> */}
            <Link
              href="/patients"
              className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-primary hover:bg-transparent hover:text-primary/80"
            >
              View all
            </Link>
          </div>

          {/* Table */}
          <div className="max-h-[320px] overflow-x-auto overflow-y-auto border-t">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-5">PATIENT</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>AGE / GENDER</TableHead>
                  <TableHead>LAST VISIT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="px-5 text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {recentPatients.map((patient) => (
                  <TableRow key={patient.id}>
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

                    <TableCell>{patient.id}</TableCell>

                    <TableCell>{patient.ageGender}</TableCell>

                    <TableCell>{patient.lastVisit}</TableCell>

                    <TableCell>
                      <Badge
                        className={
                          patient.status === "Stable"
                            ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
                        }
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="px-5 text-right">
                      <Link
                        href={`/patients/${patient.id}?from=dashboard`}
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

// =============================================
// REUSABLE COMPONENT — StatsCard
// =============================================
// Study this pattern, then build the remaining sections.

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  subtitleColor,
}: {
  title: string
  value: string
  subtitle: string
  icon: React.ReactNode
  iconBg: string
  subtitleColor: string
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium text-muted-foreground">
            {title}
          </span>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
          >
            {icon}
          </div>
        </div>
        <div className="text-[28px] font-semibold">{value}</div>
        <div className={`mt-1 text-xs ${subtitleColor}`}>{subtitle}</div>
      </CardContent>
    </Card>
  )
}
