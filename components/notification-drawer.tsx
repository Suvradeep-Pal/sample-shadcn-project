"use client"

import { useState } from "react"
import { Bell, CheckCheck } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { NotificationCard } from "@/components/notification-card"

const initialNotifications = [
  {
    id: 1,
    type: "appointment" as const,
    title: "Upcoming appointment",
    message: "John Doe has an appointment at 10:30 AM.",
    time: "10 min ago",
    read: false,
  },
  {
    id: 2,
    type: "alert" as const,
    title: "Clinical alert",
    message: "Emma Wilson's vitals require attention.",
    time: "25 min ago",
    read: false,
  },
  {
    id: 3,
    type: "patient" as const,
    title: "New patient added",
    message: "Michael Brown has been added to your patient list.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "document" as const,
    title: "Document uploaded",
    message: "A new medical document has been uploaded for Sarah Miller.",
    time: "2 hours ago",
    read: true,
  },
]

type NotificationDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NotificationDrawer({
  open,
  onOpenChange,
}: NotificationDrawerProps) {
  const [notifications, setNotifications] = useState(initialNotifications)

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length

  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    )
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
        {/* Header */}
        <SheetHeader className="gap-0 p-0">
          <div className="px-5 pt-4 pb-3">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />

              <SheetTitle className="text-base">Notifications</SheetTitle>

              {unreadCount > 0 && (
                <span className="rounded-full bg-[rgb(253,232,231)] px-2 py-0.5 text-[11px] font-medium text-[rgb(217,121,115)]">
                  {unreadCount} new
                </span>
              )}
            </div>

            <SheetDescription className="mt-1 text-[13px]">
              Your latest notifications and updates.
            </SheetDescription>
          </div>

          {/* Horizontal line */}
          <div className="h-px w-full bg-border" />
        </SheetHeader>

        <div className="border-t" />

        {/* Notifications */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  time={notification.time}
                  read={notification.read}
                />
              ))
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                </div>

                <p className="mt-3 text-sm font-medium">No notifications</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  You&apos;re all caught up.
                </p>
              </div>
            )}
          </div>

          {/* Mark all as read */}
          {unreadCount > 0 && (
            <div className="border-t px-5 py-3">
              <button
                type="button"
                onClick={markAllAsRead}
                className="inline-flex cursor-pointer items-center gap-1.5 text-[12px] font-medium text-primary hover:text-primary/80"
              >
                <CheckCheck className="h-3.5 w-3.5" />
                Mark all as read
              </button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
