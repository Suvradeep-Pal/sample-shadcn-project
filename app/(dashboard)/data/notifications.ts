export const notifications = [
  {
    type: "appointment" as const,
    title: "Upcoming Appointment",
    message: "John Doe has an appointment scheduled for today at 10:30 AM.",
    time: "10 minutes ago",
    read: false,
  },
  {
    type: "alert" as const,
    title: "Clinical Alert",
    message: "A clinical alert requires your attention for Emily Johnson.",
    time: "30 minutes ago",
    read: false,
  },
  {
    type: "patient" as const,
    title: "New Patient Added",
    message: "A new patient, Michael Brown, has been added to the system.",
    time: "1 hour ago",
    read: true,
  },
  {
    type: "document" as const,
    title: "Document Uploaded",
    message: "A new medical document has been uploaded for Sarah Williams.",
    time: "2 hours ago",
    read: true,
  },
]
