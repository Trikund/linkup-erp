export const USERS = {
  student: {
    name: "Rahul Sharma",
    roleLabel: "Student (Class 10-A)",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  teacher: {
    name: "Ananya Sharma",
    roleLabel: "Senior Teacher (Mathematics)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  parent: {
    name: "Priya Sharma",
    roleLabel: "Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  admin: {
    name: "Amit Verma",
    roleLabel: "School Administrator",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
};

export const MOCK_CHILDREN = [
  { id: '1', name: 'Rahul Sharma', class: '10-A', attendance: 92, performance: 86 },
  { id: '2', name: 'Ananya Sharma', class: '7-B', attendance: 96, performance: 91 },
];

export const MOCK_ATTENDANCE = {
  overall: 92,
  subjects: [
    { name: 'Mathematics', value: 94 },
    { name: 'Science', value: 91 },
    { name: 'Computer Science', value: 96 },
    { name: 'English', value: 88 },
  ]
};

export const MOCK_TIMETABLE = [
  { time: '09:00 AM', subject: 'Mathematics', teacher: 'Ananya Sharma', room: 'Room 204', status: 'upcoming' },
  { time: '10:30 AM', subject: 'Computer Science', teacher: 'Vikram Singh', room: 'Lab 2', status: 'upcoming' },
  { time: '01:30 PM', subject: 'English', teacher: 'Priya Patel', room: 'Room 106', status: 'upcoming' },
];

export const MOCK_ASSIGNMENTS = [
  { id: 1, subject: 'Mathematics', title: 'Algebra Worksheet', due: 'Oct 12', status: 'Pending' },
  { id: 2, subject: 'Computer Science', title: 'React Basics', due: 'Oct 14', status: 'Submitted' },
  { id: 3, subject: 'Science', title: 'Physics Lab Report', due: 'Oct 16', status: 'Pending' },
];

export const MOCK_EXAMS = [
  { id: 1, subject: 'Mathematics', type: 'Mid Term', date: '18 Oct', time: '10:00 AM', room: 'Room 204' },
  { id: 2, subject: 'Science', type: 'Mid Term', date: '20 Oct', time: '10:00 AM', room: 'Lab 1' },
];

export const MOCK_FEES = {
  total: 48000,
  paid: 36000,
  pending: 12000,
  nextDue: '20 Oct 2026'
};

export const MOCK_ADMIN_STATS = {
  students: 2480,
  teachers: 86,
  parents: 2120,
  attendance: 92,
  classes: 64,
  pendingFees: '8.4L'
};
