"use client"

import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function DashboardHeader() {
  const pathname = usePathname()

  const isPatientPage = pathname.startsWith("/patients/")
  const isPatientsPage = pathname === "/patients"
  const isAppointmentsPage = pathname === "/appointments"
  const isSettingsPage = pathname === "/settings"

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-7">
      <h1 className="text-lg font-semibold">
        {isPatientPage
          ? "Patient Details"
          : isAppointmentsPage
            ? "Today's Appointments"
            : isPatientsPage
              ? "Recent Patients"
              : isSettingsPage
                ? "Settings"
                : "Dashboard"}
      </h1>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="h-9 w-[220px] bg-background pl-8 text-sm"
          />
        </div>

        {/* Notification Bell */}
        <Button variant="outline" size="icon" className="relative h-9 w-9">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
        </Button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Avatar */}
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
            DS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
