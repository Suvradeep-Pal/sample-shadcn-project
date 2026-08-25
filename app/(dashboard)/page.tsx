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

export default function DashboardPage() {
  const appointments = [
    {
      patient: "Emily Johnson",
      initials: "EJ",
      time: "09:30 AM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      patient: "Michael Brown",
      initials: "MB",
      time: "10:15 AM",
      type: "Consultation",
      status: "Waiting",
    },
    {
      patient: "Olivia Davis",
      initials: "OD",
      time: "11:00 AM",
      type: "Check-up",
      status: "Confirmed",
    },
    {
      patient: "James Wilson",
      initials: "JW",
      time: "11:45 AM",
      type: "Follow-up",
      status: "Completed",
    },
  ]

  const clinicalAlerts = [
    {
      patient: "John Smith",
      initials: "JS",
      message: "Blood pressure reading requires review.",
      time: "10 minutes ago",
      className: "bg-red-50",
      avatarClassName: "bg-white text-red-500",
      nameClassName: "text-red-700",
      messageClassName: "text-red-600",
      timeClassName: "text-red-400",
    },
    {
      patient: "Maria Thomas",
      initials: "MT",
      message: "Follow-up appointment overdue.",
      time: "2 hours ago",
      className: "bg-amber-50",
      avatarClassName: "bg-white text-amber-500",
      nameClassName: "text-amber-700",
      messageClassName: "text-amber-700",
      timeClassName: "text-amber-500",
    },
    {
      patient: "Robert Lee",
      initials: "RL",
      message: "Lab results ready for review.",
      time: "3 hours ago",
      className: "bg-teal-50",
      avatarClassName: "bg-white text-teal-600",
      nameClassName: "text-slate-900",
      messageClassName: "text-slate-600",
      timeClassName: "text-slate-500",
    },
  ]

  const recentPatients = [
    {
      patient: "Emily Johnson",
      initials: "EJ",
      id: "PT-10245",
      ageGender: "32 · Female",
      lastVisit: "Aug 18",
      status: "Stable",
    },
    {
      patient: "Michael Brown",
      initials: "MB",
      id: "PT-10312",
      ageGender: "45 · Male",
      lastVisit: "Aug 16",
      status: "Follow-up",
    },
    {
      patient: "Olivia Davis",
      initials: "OD",
      id: "PT-10198",
      ageGender: "28 · Female",
      lastVisit: "Aug 14",
      status: "Stable",
    },
  ]

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6 flex items-center justify-between">
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
      <div className="mb-6 grid grid-cols-4 gap-4">
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
      <div className="mb-6 grid grid-cols-[2.40fr_1fr] gap-4">
        {/* Today's Appointments */}
        <Card>
          <CardContent className="px-5 pt-1 pb-5">
            {/* Section Heading */}
            <div className="mb-4 grid grid-cols-[1fr_auto] items-start">
              <div>
                <h3 className="text-base font-semibold">
                  Today&apos;s Appointments
                </h3>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-primary hover:bg-transparent hover:text-primary/80"
              >
                View all
              </Button>
            </div>

            {/* Table */}
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
                    <TableRow
                      key={`${appointment.patient}-${appointment.time}`}
                    >
                      <TableCell className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar size="sm">
                            <AvatarFallback>
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
                              ? "bg-green-100 text-green-700 hover:bg-green-100"
                              : appointment.status === "Waiting"
                                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                          }
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>

                      <TableCell className="px-5 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer text-primary"
                        >
                          View
                        </Button>
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
          <CardContent className="px-5 pt-1 pb-5">
            {/* Section Heading */}
            <div className="mb-4">
              <h3 className="text-base font-semibold">Clinical Alerts</h3>
            </div>

            {/* Alerts */}
            <div className="space-y-3">
              {clinicalAlerts.map((alert) => (
                <div
                  key={alert.patient}
                  className={`rounded-lg p-3 ${alert.className}`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar size="sm" className={alert.avatarClassName}>
                      <AvatarFallback>{alert.initials}</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-medium ${alert.nameClassName}`}
                      >
                        {alert.patient}
                      </p>

                      <p className={`mt-0.5 text-xs ${alert.messageClassName}`}>
                        {alert.message}
                      </p>

                      <p className={`mt-1 text-[11px] ${alert.timeClassName}`}>
                        {alert.time}
                      </p>
                    </div>
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

            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer text-primary hover:bg-transparent hover:text-primary/80"
            >
              View all
            </Button>
          </div>

          {/* Table */}
          <div className="border-t">
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
                        <Avatar size="sm">
                          <AvatarFallback>{patient.initials}</AvatarFallback>
                        </Avatar>

                        <span className="font-medium">{patient.patient}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {patient.id}
                    </TableCell>

                    <TableCell>{patient.ageGender}</TableCell>

                    <TableCell>{patient.lastVisit}</TableCell>

                    <TableCell>
                      <Badge
                        className={
                          patient.status === "Stable"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                        }
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="px-5 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer text-primary"
                      >
                        View
                      </Button>
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
