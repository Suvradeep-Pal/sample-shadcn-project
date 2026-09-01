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

  {
    patient: "Sophia Martinez",
    initials: "SM",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    patientId: "PT-10423",
    age: 39,
    gender: "Female",
    bloodGroup: "A-",
    time: "01:00 PM",
    type: "Consultation",
    status: "Confirmed",

    dateOfBirth: "May 12, 1987",
    phone: "(555) 567-8901",
    email: "sophia.m@email.com",
    address: "555 Birch Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Carlos Martinez",
      relationship: "Spouse",
      phone: "(555) 321-0987",
    },

    vitals: {
      bloodPressure: "122/78",
      heartRate: "74",
      temperature: "98.5",
      oxygenSaturation: "98%",
    },

    medicalHistory: [
      {
        date: "Aug 10, 2026",
        title: "Consultation",
        description: "Routine consultation and health assessment.",
      },
      {
        date: "Jul 02, 2026",
        title: "General check-up",
        description: "Regular health examination completed.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 10, 2026",
        doctor: "Dr. Sarah",
        type: "Consultation",
        status: "Completed",
        notes: "Routine health assessment",
      },
      {
        date: "Jul 02, 2026",
        doctor: "Dr. Patel",
        type: "Check-up",
        status: "Completed",
        notes: "General examination",
      },
    ],
  },

  {
    patient: "Robert Lee",
    initials: "RL",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    patientId: "PT-10356",
    age: 51,
    gender: "Male",
    bloodGroup: "B+",
    time: "01:30 PM",
    type: "Follow-up",
    status: "Waiting",

    dateOfBirth: "February 8, 1975",
    phone: "(555) 678-9012",
    email: "robert.l@email.com",
    address: "888 Willow Avenue, Springfield, IL 62704",

    emergencyContact: {
      name: "Jennifer Lee",
      relationship: "Wife",
      phone: "(555) 210-9876",
    },

    vitals: {
      bloodPressure: "130/84",
      heartRate: "80",
      temperature: "98.6",
      oxygenSaturation: "97%",
    },

    medicalHistory: [
      {
        date: "Aug 08, 2026",
        title: "Follow-up consultation",
        description: "Follow-up for cholesterol management.",
      },
      {
        date: "Jun 18, 2026",
        title: "Lab results",
        description: "Cholesterol levels reviewed.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 08, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Completed",
        notes: "Cholesterol levels reviewed",
      },
      {
        date: "Jun 18, 2026",
        doctor: "Dr. Sarah",
        type: "Consultation",
        status: "Completed",
        notes: "Lab results reviewed",
      },
    ],
  },

  {
    patient: "John Smith",
    initials: "JS",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    patientId: "PT-10401",
    age: 62,
    gender: "Male",
    bloodGroup: "O+",
    time: "02:00 PM",
    type: "Follow-up",
    status: "Waiting",

    dateOfBirth: "September 24, 1963",
    phone: "(555) 789-0123",
    email: "john.s@email.com",
    address: "222 Elm Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Mary Smith",
      relationship: "Wife",
      phone: "(555) 109-8765",
    },

    vitals: {
      bloodPressure: "145/92",
      heartRate: "88",
      temperature: "98.9",
      oxygenSaturation: "95%",
    },

    medicalHistory: [
      {
        date: "Aug 05, 2026",
        title: "Blood pressure review",
        description: "Elevated blood pressure requires monitoring.",
      },
      {
        date: "Jul 10, 2026",
        title: "General consultation",
        description: "Patient reported occasional dizziness.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 05, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "Blood pressure requires monitoring",
      },
      {
        date: "Jul 10, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Dizziness reported",
      },
    ],
  },

  {
    patient: "Maria Thomas",
    initials: "MT",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    patientId: "PT-10418",
    age: 44,
    gender: "Female",
    bloodGroup: "AB+",
    time: "02:30 PM",
    type: "Consultation",
    status: "Confirmed",

    dateOfBirth: "December 3, 1981",
    phone: "(555) 890-1234",
    email: "maria.t@email.com",
    address: "444 Lakeview Drive, Springfield, IL 62704",

    emergencyContact: {
      name: "David Thomas",
      relationship: "Husband",
      phone: "(555) 098-7654",
    },

    vitals: {
      bloodPressure: "124/80",
      heartRate: "76",
      temperature: "98.4",
      oxygenSaturation: "98%",
    },

    medicalHistory: [
      {
        date: "Aug 03, 2026",
        title: "Consultation",
        description: "Follow-up consultation completed.",
      },
      {
        date: "Jun 22, 2026",
        title: "Routine check-up",
        description: "Routine health examination completed.",
      },
    ],

    recentAppointments: [
      {
        date: "Aug 03, 2026",
        doctor: "Dr. Sarah",
        type: "Consultation",
        status: "Completed",
        notes: "Follow-up consultation",
      },
      {
        date: "Jun 22, 2026",
        doctor: "Dr. Patel",
        type: "Check-up",
        status: "Completed",
        notes: "Routine examination",
      },
    ],
  },

  {
    patient: "Daniel Anderson",
    initials: "DA",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    patientId: "PT-10435",
    age: 36,
    gender: "Male",
    bloodGroup: "A+",
    time: "03:00 PM",
    type: "Check-up",
    status: "Confirmed",

    dateOfBirth: "April 17, 1990",
    phone: "(555) 901-2345",
    email: "daniel.a@email.com",
    address: "777 Oak Avenue, Springfield, IL 62704",

    emergencyContact: {
      name: "Jessica Anderson",
      relationship: "Sister",
      phone: "(555) 123-0987",
    },

    vitals: {
      bloodPressure: "119/77",
      heartRate: "71",
      temperature: "98.3",
      oxygenSaturation: "99%",
    },

    medicalHistory: [
      {
        date: "Jul 30, 2026",
        title: "Routine check-up",
        description: "Routine health examination completed.",
      },
      {
        date: "May 14, 2026",
        title: "Lab results",
        description: "All laboratory values within normal range.",
      },
    ],

    recentAppointments: [
      {
        date: "Jul 30, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "Routine health examination",
      },
      {
        date: "May 14, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Lab results reviewed",
      },
    ],
  },

  {
    patient: "Emma Taylor",
    initials: "ET",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    patientId: "PT-10452",
    age: 29,
    gender: "Female",
    bloodGroup: "O-",
    time: "03:30 PM",
    type: "Follow-up",
    status: "Confirmed",

    dateOfBirth: "October 11, 1996",
    phone: "(555) 012-3456",
    email: "emma.t@email.com",
    address: "333 Pine Road, Springfield, IL 62704",

    emergencyContact: {
      name: "James Taylor",
      relationship: "Father",
      phone: "(555) 456-0123",
    },

    vitals: {
      bloodPressure: "117/75",
      heartRate: "69",
      temperature: "98.1",
      oxygenSaturation: "99%",
    },

    medicalHistory: [
      {
        date: "Jul 25, 2026",
        title: "Follow-up",
        description: "Patient reported improvement in symptoms.",
      },
      {
        date: "Jun 11, 2026",
        title: "Consultation",
        description: "Initial consultation completed.",
      },
    ],

    recentAppointments: [
      {
        date: "Jul 25, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "Symptoms improving",
      },
      {
        date: "Jun 11, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Initial consultation",
      },
    ],
  },

  {
    patient: "William Clark",
    initials: "WC",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    patientId: "PT-10467",
    age: 67,
    gender: "Male",
    bloodGroup: "B-",
    time: "04:00 PM",
    type: "Consultation",
    status: "Waiting",

    dateOfBirth: "June 2, 1959",
    phone: "(555) 123-7890",
    email: "william.c@email.com",
    address: "909 Cedar Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Susan Clark",
      relationship: "Daughter",
      phone: "(555) 987-0123",
    },

    vitals: {
      bloodPressure: "142/88",
      heartRate: "85",
      temperature: "98.7",
      oxygenSaturation: "94%",
    },

    medicalHistory: [
      {
        date: "Jul 20, 2026",
        title: "Blood pressure review",
        description: "Blood pressure remains elevated and requires monitoring.",
      },
      {
        date: "Jun 05, 2026",
        title: "Lab results",
        description: "Laboratory results reviewed.",
      },
    ],

    recentAppointments: [
      {
        date: "Jul 20, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Completed",
        notes: "Blood pressure reviewed",
      },
      {
        date: "Jun 05, 2026",
        doctor: "Dr. Sarah",
        type: "Consultation",
        status: "Completed",
        notes: "Lab results reviewed",
      },
    ],
  },

  {
    patient: "Ava Thompson",
    initials: "AT",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    patientId: "PT-10481",
    age: 41,
    gender: "Female",
    bloodGroup: "A+",
    time: "04:30 PM",
    type: "Check-up",
    status: "Confirmed",

    dateOfBirth: "March 28, 1985",
    phone: "(555) 234-8901",
    email: "ava.t@email.com",
    address: "666 Maple Street, Springfield, IL 62704",

    emergencyContact: {
      name: "Ryan Thompson",
      relationship: "Husband",
      phone: "(555) 765-1098",
    },

    vitals: {
      bloodPressure: "121/79",
      heartRate: "73",
      temperature: "98.4",
      oxygenSaturation: "98%",
    },

    medicalHistory: [
      {
        date: "Jul 15, 2026",
        title: "Check-up",
        description: "Routine examination completed.",
      },
      {
        date: "May 30, 2026",
        title: "Consultation",
        description: "General consultation completed.",
      },
    ],

    recentAppointments: [
      {
        date: "Jul 15, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "Routine examination",
      },
      {
        date: "May 30, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "General consultation",
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
    condition: "Hypertension",
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
    condition: "Diabetes T2",
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
    condition: "Asthma",
    lastVisit: "Aug 14",
    status: "Stable",
  },
  {
    patient: "James Wilson",
    initials: "JW",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    id: "PT-10244",
    age: 51,
    gender: "Male",
    ageGender: "51 · Male",
    bloodGroup: "AB+",
    condition: "Arrhythmia",
    lastVisit: "Aug 12",
    status: "Critical",
  },
  {
    patient: "Sophia Martinez",
    initials: "SM",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    id: "PT-10423",
    age: 39,
    gender: "Female",
    ageGender: "39 · Female",
    bloodGroup: "A-",
    condition: "Migraine",
    lastVisit: "Aug 10",
    status: "Stable",
  },
  {
    patient: "Robert Lee",
    initials: "RL",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    id: "PT-10356",
    age: 51,
    gender: "Male",
    ageGender: "51 · Male",
    bloodGroup: "B+",
    condition: "High cholesterol",
    lastVisit: "Aug 08",
    status: "Follow-up",
  },
  {
    patient: "John Smith",
    initials: "JS",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    id: "PT-10401",
    age: 62,
    gender: "Male",
    ageGender: "62 · Male",
    bloodGroup: "O+",
    condition: "Hypertension",
    lastVisit: "Aug 05",
    status: "Critical",
  },
  {
    patient: "Maria Thomas",
    initials: "MT",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    id: "PT-10418",
    age: 44,
    gender: "Female",
    ageGender: "44 · Female",
    bloodGroup: "AB+",
    condition: "Diabetes T2",
    lastVisit: "Aug 03",
    status: "Follow-up",
  },
  {
    patient: "Daniel Anderson",
    initials: "DA",
    avatarColor: "rgb(220, 236, 248)",
    avatarTextColor: "rgb(91, 155, 194)",
    id: "PT-10435",
    age: 36,
    gender: "Male",
    ageGender: "36 · Male",
    bloodGroup: "A+",
    condition: "Asthma",
    lastVisit: "Jul 30",
    status: "Stable",
  },
  {
    patient: "Emma Taylor",
    initials: "ET",
    avatarColor: "rgb(232, 246, 243)",
    avatarTextColor: "rgb(95, 184, 168)",
    id: "PT-10452",
    age: 29,
    gender: "Female",
    ageGender: "29 · Female",
    bloodGroup: "O-",
    condition: "Migraine",
    lastVisit: "Jul 25",
    status: "Stable",
  },
  {
    patient: "William Clark",
    initials: "WC",
    avatarColor: "rgb(253, 232, 231)",
    avatarTextColor: "rgb(217, 121, 115)",
    id: "PT-10467",
    age: 67,
    gender: "Male",
    ageGender: "67 · Male",
    bloodGroup: "B-",
    condition: "Arrhythmia",
    lastVisit: "Jul 20",
    status: "Critical",
  },
  {
    patient: "Ava Thompson",
    initials: "AT",
    avatarColor: "rgb(240, 234, 248)",
    avatarTextColor: "rgb(154, 131, 196)",
    id: "PT-10481",
    age: 41,
    gender: "Female",
    ageGender: "41 · Female",
    bloodGroup: "A+",
    condition: "High cholesterol",
    lastVisit: "Jul 15",
    status: "Follow-up",
  },
]
