import { Calendar, CircleAlert, FileText, UserRound } from "lucide-react"

import { cn } from "@/lib/utils"

type NotificationType = "appointment" | "alert" | "patient" | "document"

type NotificationCardProps = {
  type: NotificationType
  title: string
  message: string
  time: string
  read?: boolean
}

const notificationIcons = {
  appointment: Calendar,
  alert: CircleAlert,
  patient: UserRound,
  document: FileText,
}

const notificationIconStyles = {
  appointment:
    "bg-yellow-100 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400",
  alert: "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400",
  patient: "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  document:
    "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
}

export function NotificationCard({
  type,
  title,
  message,
  time,
  read = false,
}: NotificationCardProps) {
  const Icon = notificationIcons[type]

  return (
    <div
      className={cn(
        "flex cursor-pointer gap-3 rounded-lg border border-border/50 bg-background px-4 py-4 transition-colors",
        "hover:border-border hover:bg-muted/70 hover:shadow-sm",
        !read && "bg-muted/40"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          notificationIconStyles[type]
        )}
      >
        <Icon className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p
            className={cn(
              "text-sm",
              read ? "font-medium text-foreground" : "font-semibold"
            )}
          >
            {title}
          </p>

          {!read && (
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
          )}
        </div>

        <p className="mt-1 text-[13px] leading-5 text-muted-foreground">
          {message}
        </p>

        <p className="mt-1.5 text-[11px] text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
