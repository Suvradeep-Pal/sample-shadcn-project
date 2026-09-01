"use client"

import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search, User, Settings, CircleHelp, LogOut } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { notifications } from "@/app/(dashboard)/data/notifications"
import { NotificationCard } from "@/components/notification-card"

export function DashboardHeader() {
  const pathname = usePathname()

  const isPatientPage = pathname.startsWith("/patients/")
  const isPatientsPage = pathname === "/patients"
  const isAppointmentsPage = pathname === "/appointments"
  const isSettingsPage = pathname === "/settings"
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-4 sm:px-7">
      <SidebarTrigger className="md:hidden" />
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
        {/* <div className="relative">
          <Search className="absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="h-9 w-[220px] bg-background pl-8 text-sm"
          />
        </div> */}
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="h-9 w-[220px] bg-background pl-8 text-sm"
          />
        </div>

        {/* Mobile Search */}
        <Button variant="ghost" size="icon" className="h-9 w-9 sm:hidden">
          <Search className="h-[18px] w-[18px] text-muted-foreground" />
        </Button>

        {/* Notification Bell */}
        {/* Notification Bell */}
        <Sheet>
          <SheetTrigger className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
            <Bell className="h-[18px] w-[18px] text-muted-foreground" />

            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:max-w-[400px]">
            <SheetHeader>
              <div className="flex items-center gap-2">
                <SheetTitle>Notifications</SheetTitle>

                {unreadCount > 0 && (
                  <span className="rounded-full bg-[rgb(253,232,231)] px-2 py-0.5 text-[11px] font-medium text-[rgb(217,121,115)]">
                    {unreadCount} new
                  </span>
                )}
              </div>

              <SheetDescription>
                Your latest notifications and updates.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto">
              {notifications.map((notification, index) => (
                <NotificationCard
                  key={index}
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  time={notification.time}
                  read={notification.read}
                />
              ))}
            </div>
            {/* Mark all as read */}
            <div className="border-t border-border px-4 py-3">
              <button
                type="button"
                className="w-full cursor-pointer text-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Mark all as read
              </button>
            </div>
          </SheetContent>
        </Sheet>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                  DS
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={4}
            className="w-[270px] rounded-2xl p-0"
          >
            {/* User Information */}
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-4 py-3">
                <Avatar className="h-11 w-11 shrink-0">
                  <AvatarFallback className="bg-accent text-lg font-semibold text-accent-foreground">
                    DS
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Dr. Sarah Chen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sarah.chen@medicare.io
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="m-0" />

            {/* Menu Items */}
            <div className="px-2 py-1">
              <DropdownMenuItem className="h-10 gap-3 rounded-lg px-3 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>My Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="h-10 gap-3 rounded-lg px-3 text-sm"
                onClick={() => {
                  window.location.href = "/settings"
                }}
              >
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span>Account Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="h-10 gap-3 rounded-lg px-3 text-sm">
                <CircleHelp className="h-4 w-4 text-muted-foreground" />
                <span>Help & Support</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="m-0" />

            {/* Sign Out */}
            <div className="px-2 py-1.5">
              <DropdownMenuItem
                variant="destructive"
                className="h-10 gap-3 rounded-lg px-3 text-sm"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
