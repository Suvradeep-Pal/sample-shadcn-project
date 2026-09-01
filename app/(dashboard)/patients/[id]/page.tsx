import Link from "next/link"
import { MoreHorizontal, ArrowLeft } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  appointments,
  recentPatients,
} from "@/app/(dashboard)/data/dashboard-data"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function PatientDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ from?: string }>
}) {
  const { id } = await params
  const { from } = await searchParams

  const patient = appointments.find((patient) => patient.patientId === id)

  if (!patient) {
    return (
      <div>
        <Link
          href={
            from === "dashboard"
              ? "/"
              : from === "appointments"
                ? "/appointments"
                : "/patients"
          }
          className="mb-4 inline-flex items-center text-[13px] font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          {from === "dashboard"
            ? "Back to Dashboard"
            : from === "appointments"
              ? "Back to Appointments"
              : "Back to Patients"}
        </Link>
        <h1 className="text-2xl font-semibold">Patient Not Found</h1>
      </div>
    )
  }

  const recentPatient = recentPatients.find(
    (recentPatient) => recentPatient.id === patient.patientId
  )

  const patientAppointment = appointments.find(
    (appointment) => appointment.patient === patient.patient
  )

  const patientStatus = recentPatient?.status ?? patientAppointment?.status

  return (
    <div className="w-full">
      {/* Back to Patients */}
      <Link
        href={
          from === "dashboard"
            ? "/"
            : from === "appointments"
              ? "/appointments"
              : "/patients"
        }
        className="mb-4 inline-flex items-center text-[13px] font-medium text-primary hover:text-primary/80"
      >
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        {from === "dashboard"
          ? "Back to Dashboard"
          : from === "appointments"
            ? "Back to Appointments"
            : "Back to Patients"}
      </Link>

      {/* Patient Header Card */}
      <Card className="mb-5 w-full py-0">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          {/* Patient Information */}
          <div className="flex min-w-0 items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback
                style={{
                  backgroundColor: patient.avatarColor,
                  color: patient.avatarTextColor,
                }}
                className="text-xl font-semibold"
              >
                {patient.initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">{patient.patient}</h2>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#253333] dark:text-[#c5d0d0]">
                <span>{patient.patientId}</span>

                <span className="h-1 w-1 shrink-0 rounded-full bg-current" />

                <span>{patient.gender}</span>

                <span className="h-1 w-1 shrink-0 rounded-full bg-current" />

                <span>{patient.age} years</span>

                <span className="flex items-center gap-3 whitespace-nowrap">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-current" />
                  <span>Blood Group: {patient.bloodGroup}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
            {patientStatus && (
              <Badge
                className={
                  patientStatus === "Confirmed"
                    ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                    : patientStatus === "Waiting"
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
                      : patientStatus === "Completed"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-900/60"
                        : patientStatus === "Stable"
                          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                          : patientStatus === "Follow-up"
                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
                }
              >
                {patientStatus}
              </Badge>
            )}

            <Button size="sm" className="px-4 py-4">
              Edit Patient
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 border border-border"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient Details Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger
            value="overview"
            className="cursor-pointer whitespace-nowrap"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="medical-history"
            className="cursor-pointer whitespace-nowrap"
          >
            Medical History
          </TabsTrigger>
          <TabsTrigger
            value="appointments"
            className="cursor-pointer whitespace-nowrap"
          >
            Appointments
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="cursor-pointer whitespace-nowrap"
          >
            Documents
          </TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Patient Information */}
            <Card className="w-full py-0">
              <CardContent className="p-5">
                <h3 className="text-base font-semibold">Patient Information</h3>

                <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <p className="text-[12px] text-muted-foreground">
                      Full Name
                    </p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.patient}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-muted-foreground">
                      Date of Birth
                    </p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.dateOfBirth}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-muted-foreground">Gender</p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.gender}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-muted-foreground">
                      Blood Group
                    </p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.bloodGroup}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-muted-foreground">Phone</p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-muted-foreground">Email</p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.email}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-[12px] text-muted-foreground">Address</p>
                    <p className="mt-1 text-[13px] font-medium">
                      {patient.address}
                    </p>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-5 border-t border-border pt-4">
                  <h4 className="text-sm font-semibold">Emergency Contact</h4>

                  <div className="mt-4 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <p className="text-[12px] text-muted-foreground">Name</p>
                      <p className="mt-1 text-[13px] font-medium">
                        {patient.emergencyContact.name}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] text-muted-foreground">
                        Relationship
                      </p>
                      <p className="mt-1 text-[13px] font-medium">
                        {patient.emergencyContact.relationship}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] text-muted-foreground">Phone</p>
                      <p className="mt-1 text-[13px] font-medium">
                        {patient.emergencyContact.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Vitals */}
            <Card className="w-full py-0">
              <CardContent className="p-5">
                <h3 className="text-base font-semibold">Current Vitals</h3>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Blood Pressure */}
                  <div className="rounded-lg bg-[rgb(229,245,234)] p-4 dark:bg-[rgb(25,55,38)]">
                    <p className="text-[12px] text-[rgb(63,128,86)] dark:text-[rgb(137,204,153)]">
                      Blood Pressure
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {patient.vitals.bloodPressure}
                    </p>

                    <p className="mt-1 text-[12px] text-muted-foreground">
                      mmHg
                    </p>

                    <span className="mt-3 inline-flex w-fit items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[rgb(63,128,86)] dark:bg-[rgb(45,72,54)] dark:text-[rgb(165,219,177)]">
                      Normal
                    </span>
                  </div>

                  {/* Heart Rate */}
                  <div className="rounded-lg bg-[rgb(229,245,234)] p-4 dark:bg-[rgb(25,55,38)]">
                    <p className="text-[12px] text-[rgb(63,128,86)] dark:text-[rgb(137,204,153)]">
                      Heart Rate
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {patient.vitals.heartRate}
                    </p>

                    <p className="mt-1 text-[12px] text-muted-foreground">
                      bpm
                    </p>

                    <span className="mt-3 inline-flex w-fit items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[rgb(63,128,86)] dark:bg-[rgb(45,72,54)] dark:text-[rgb(165,219,177)]">
                      Normal
                    </span>
                  </div>

                  {/* Temperature */}
                  <div className="rounded-lg bg-[rgb(229,245,234)] p-4 dark:bg-[rgb(25,55,38)]">
                    <p className="text-[12px] text-[rgb(63,128,86)] dark:text-[rgb(137,204,153)]">
                      Temperature
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {patient.vitals.temperature}
                    </p>

                    <p className="mt-1 text-[12px] text-muted-foreground">°F</p>

                    <span className="mt-3 inline-flex w-fit items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[rgb(63,128,86)] dark:bg-[rgb(45,72,54)] dark:text-[rgb(165,219,177)]">
                      Normal
                    </span>
                  </div>

                  {/* SpO2 */}
                  <div className="rounded-lg bg-[rgb(229,245,234)] p-4 dark:bg-[rgb(25,55,38)]">
                    <p className="text-[12px] text-[rgb(63,128,86)] dark:text-[rgb(137,204,153)]">
                      SpO₂
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {patient.vitals.oxygenSaturation}
                    </p>

                    <p className="mt-1 text-[12px] text-muted-foreground">
                      Oxygen
                    </p>

                    <span className="mt-3 inline-flex w-fit items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[rgb(63,128,86)] dark:bg-[rgb(45,72,54)] dark:text-[rgb(165,219,177)]">
                      Normal
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 w-full py-0">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Medical History</h3>

              <div className="mt-5">
                {patient.medicalHistory.map((history, index) => (
                  <div
                    key={`${history.date}-${history.title}`}
                    className="relative flex min-w-0 gap-4"
                  >
                    {/* Timeline */}
                    <div className="relative flex w-4 shrink-0 justify-center">
                      {/* Connecting line */}
                      {index !== patient.medicalHistory.length - 1 && (
                        <div className="absolute top-3 h-full w-px bg-border" />
                      )}

                      {/* Timeline dot */}
                      <div className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-[rgb(91,183,170)]" />
                    </div>

                    {/* History Content */}
                    <div
                      className={`min-w-0 ${
                        index !== patient.medicalHistory.length - 1
                          ? "pb-6"
                          : ""
                      }`}
                    >
                      <p className="text-[13px] text-muted-foreground">
                        {history.date}
                      </p>

                      <p className="mt-1 text-[15px] font-medium">
                        {history.title}
                      </p>

                      <p className="mt-1 text-[13px] text-[rgb(104,119,119)] dark:text-[rgb(166,180,180)]">
                        {history.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 w-full py-0">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Recent Appointments</h3>

              {/* Recent Appointments Table */}
              <div className="-mx-6 mt-5 overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-t border-b border-border">
                      <th className="px-6 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        DATE
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        DOCTOR
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        TYPE
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        STATUS
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        NOTES
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {patient.recentAppointments.map((appointment, index) => (
                      <tr
                        key={`${appointment.date}-${appointment.doctor}-${index}`}
                        className="border-b border-border last:border-b-0"
                      >
                        <td className="px-6 py-4 text-[13px]">
                          {appointment.date}
                        </td>

                        <td className="px-4 py-4 text-[13px] font-medium">
                          {appointment.doctor}
                        </td>

                        <td className="px-4 py-4 text-[13px]">
                          {appointment.type}
                        </td>

                        <td className="px-4 py-4">
                          <Badge
                            className={
                              appointment.status === "Completed"
                                ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/60 dark:text-green-300 dark:hover:bg-green-900/60"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-900/60"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </td>

                        <td className="px-4 py-4 text-[13px]">
                          {appointment.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/*This will be added later*/}

          {/* <Card>
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Documents</h3>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Patient documents will be added here.
              </p>
            </CardContent>
          </Card> */}
        </TabsContent>

        {/* Medical History */}
        <TabsContent value="medical-history">
          <Card className="mt-6 w-full py-0">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Medical History</h3>

              <div className="mt-5">
                {patient.medicalHistory.map((history, index) => (
                  <div
                    key={`${history.date}-${history.title}`}
                    className="relative flex gap-4"
                  >
                    {/* Timeline */}
                    <div className="relative flex w-4 shrink-0 justify-center">
                      {/* Connecting line */}
                      {index !== patient.medicalHistory.length - 1 && (
                        <div className="absolute top-3 h-full w-px bg-border" />
                      )}

                      {/* Timeline dot */}
                      <div className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-[rgb(91,183,170)]" />
                    </div>

                    {/* History Content */}
                    <div
                      className={`min-w-0 ${
                        index !== patient.medicalHistory.length - 1
                          ? "pb-6"
                          : ""
                      }`}
                    >
                      <p className="text-[13px] text-muted-foreground">
                        {history.date}
                      </p>

                      <p className="mt-1 text-[15px] font-medium">
                        {history.title}
                      </p>

                      <p className="mt-1 text-[13px] text-[rgb(104,119,119)] dark:text-[rgb(166,180,180)]">
                        {history.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appointments */}
        {/* Recent Appointments */}
        <TabsContent value="appointments">
          <Card className="mt-6 w-full py-0">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Recent Appointments</h3>

              {/* Recent Appointments Table */}
              <div className="-mx-6 mt-5 overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-t border-b border-border">
                      <th className="px-6 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        DATE
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        DOCTOR
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        TYPE
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        STATUS
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#253333] dark:text-white">
                        NOTES
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {patient.recentAppointments.map((appointment, index) => (
                      <tr
                        key={`${appointment.date}-${appointment.doctor}-${index}`}
                        className="border-b border-border last:border-b-0"
                      >
                        <td className="px-6 py-4 text-[13px]">
                          {appointment.date}
                        </td>

                        <td className="px-4 py-4 text-[13px] font-medium">
                          {appointment.doctor}
                        </td>

                        <td className="px-4 py-4 text-[13px]">
                          {appointment.type}
                        </td>

                        <td className="px-4 py-4">
                          <Badge
                            className={
                              appointment.status === "Completed"
                                ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/60 dark:text-green-300 dark:hover:bg-green-900/60"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-900/60"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </td>

                        <td className="px-4 py-4 text-[13px]">
                          {appointment.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents */}
        <TabsContent value="documents">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-base font-semibold">Documents</h3>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Patient documents will be added here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
