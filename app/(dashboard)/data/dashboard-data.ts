export const appointments = [
  {
    patient: "Emily Johnson",
    initials: "EJ",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    patientId: "PT-10245",
    age: 32,
    gender: "Female",
    bloodGroup: "O+",
    time: "09:30 AM",
    type: "Follow-up",
    status: "Confirmed",

    dateOfBirth: "March 15, 1994",
    phone: "(555) 123-4567",
    email: "emily.j@email.com",
    address: "123 Oak Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Robert Johnson",
      relationship: "Spouse",
      phone: "(555) 987-6543",
    },

    vitals: {
      bloodPressure: "120/80",
      heartRate: "72",
      temperature: "98.4",
      oxygenSaturation: "98%",
    },

    medicalHistory: [
      {
        date: "Aug 18, 2026",
        title: "Follow-up consultation",
        description: "Dr. Sarah reviewed blood pressure and medication.",
      },
      {
        date: "Jul 12, 2026",
        title: "General consultation",
        description: "Routine health examination.",
      },
      {
        date: "Jun 05, 2026",
        title: "Lab results",
        description: "Blood work reviewed. All values normal.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 18, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "BP reviewed, medication adjusted",
      },
      {
        date: "Aug 25, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Scheduled",
        notes: "Routine follow-up",
      },
      {
        date: "Jul 12, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "General examination",
      },
    ],
  },

  {
    patient: "Michael Brown",
    initials: "MB",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    patientId: "PT-10312",
    age: 45,
    gender: "Male",
    bloodGroup: "A+",
    time: "10:15 AM",
    type: "Consultation",
    status: "Waiting",

    dateOfBirth: "August 22, 1981",
    phone: "(555) 234-5678",
    email: "michael.b@email.com",
    address: "456 Pine Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Sarah Brown",
      relationship: "Wife",
      phone: "(555) 876-5432",
    },

    vitals: {
      bloodPressure: "128/82",
      heartRate: "78",
      temperature: "98.6",
      oxygenSaturation: "97%",
    },

    medicalHistory: [
      {
        date: "Aug 20, 2026",
        title: "Consultation",
        description: "General health assessment completed.",
      },
      {
        date: "Jul 15, 2026",
        title: "Follow-up",
        description: "Patient reported improvement in symptoms.",
      },
      {
        date: "May 28, 2026",
        title: "Routine check-up",
        description: "Routine examination completed.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 20, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "General health assessment",
      },
      {
        date: "Jul 15, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Scheduled",
        notes: "Follow-up assessment",
      },
      {
        date: "May 28, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "Routine examination",
      },
    ],
  },

  {
    patient: "Olivia Davis",
    initials: "OD",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    patientId: "PT-10198",
    age: 28,
    gender: "Female",
    bloodGroup: "B+",
    time: "11:00 AM",
    type: "Check-up",
    status: "Confirmed",

    dateOfBirth: "November 8, 1997",
    phone: "(555) 345-6789",
    email: "olivia.d@email.com",
    address: "789 Maple Avenue, Springfield, IL 62704",

    emergencyContact: {
      name: "Daniel Davis",
      relationship: "Brother",
      phone: "(555) 765-4321",
    },

    vitals: {
      bloodPressure: "118/76",
      heartRate: "70",
      temperature: "98.2",
      oxygenSaturation: "99%",
    },

    medicalHistory: [
      {
        date: "Aug 16, 2026",
        title: "Check-up",
        description: "Routine health examination completed.",
      },
      {
        date: "Jul 08, 2026",
        title: "Consultation",
        description: "General consultation and assessment.",
      },
      {
        date: "Jun 02, 2026",
        title: "Lab results",
        description: "Blood work reviewed. All values normal.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 16, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "Routine health examination",
      },
      {
        date: "Jul 08, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Scheduled",
        notes: "General consultation",
      },
      {
        date: "Jun 02, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "Lab results reviewed",
      },
    ],
  },

  {
    patient: "James Wilson",
    initials: "JW",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    patientId: "PT-10244",
    age: 51,
    gender: "Male",
    bloodGroup: "AB+",
    time: "11:45 AM",
    type: "Follow-up",
    status: "Completed",

    dateOfBirth: "January 19, 1975",
    phone: "(555) 456-7890",
    email: "james.w@email.com",
    address: "321 Cedar Lane, Springfield, IL 62704",

    emergencyContact: {
      name: "Linda Wilson",
      relationship: "Wife",
      phone: "(555) 654-3210",
    },

    vitals: {
      bloodPressure: "135/85",
      heartRate: "82",
      temperature: "98.7",
      oxygenSaturation: "96%",
    },

    medicalHistory: [
      {
        date: "Aug 12, 2026",
        title: "Follow-up consultation",
        description: "Blood pressure and medication reviewed.",
      },
      {
        date: "Jul 05, 2026",
        title: "General consultation",
        description: "Routine health examination completed.",
      },
      {
        date: "May 20, 2026",
        title: "Lab results",
        description: "Laboratory results reviewed with patient.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 12, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Completed",
        notes: "Blood pressure reviewed",
      },
      {
        date: "Jul 05, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Scheduled",
        notes: "Routine follow-up",
      },
      {
        date: "May 20, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Laboratory results reviewed",
      },
    ],
  },
]

export const clinicalAlerts = [
  {
    patient: "John Smith",
    initials: "JS",
    avatarColor: "white",
    avatarTextColor: "rgb(217, 121, 115)",
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
    avatarColor: "white",
    avatarTextColor: "rgb(231, 185, 104)",
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
    avatarColor: "white",
    avatarTextColor: "rgb(95, 184, 168)",
    message: "Lab results ready for review.",
    time: "3 hours ago",
    className: "bg-teal-50",
    avatarClassName: "bg-white text-teal-600",
    nameClassName: "text-slate-900",
    messageClassName: "text-slate-600",
    timeClassName: "text-slate-500",
  },
]

export const recentPatients = [
  {
    patient: "Emily Johnson",
    initials: "EJ",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    id: "PT-10245",
    age: 32,
    gender: "Female",
    ageGender: "32 · Female",
    bloodGroup: "O+",
    lastVisit: "Aug 18",
    status: "Stable",
  },
  {
    patient: "Michael Brown",
    initials: "MB",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    id: "PT-10312",
    age: 45,
    gender: "Male",
    ageGender: "45 · Male",
    bloodGroup: "A+",
    lastVisit: "Aug 16",
    status: "Follow-up",
  },
  {
    patient: "Olivia Davis",
    initials: "OD",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    id: "PT-10198",
    age: 28,
    gender: "Female",
    ageGender: "28 · Female",
    bloodGroup: "B+",
    lastVisit: "Aug 14",
    status: "Stable",
  },
]
