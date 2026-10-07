import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  NotebookPen,
  ClipboardList,
  FileCheck,
  ChartNoAxesCombined,
  WalletCards,
  BadgeCheck,
  Bell,
  Settings,
  Users,
  GraduationCap,
  CalendarClock,
  Megaphone,
  FileBarChart,
  ClipboardType,
  FileText,
  Bus,
  Activity,
  History,
  Info
} from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon: any;
}

export interface NavGroup {
  groupName?: string;
  items: NavItem[];
}

export const studentNavigation: NavGroup[] = [
  {
    items: [
      { name: 'Dashboard', href: '/school/student', icon: LayoutDashboard },
      { name: 'My Classes', href: '/school/student/classes', icon: BookOpen },
      { name: 'Timetable', href: '/school/student/timetable', icon: CalendarClock },
      { name: 'Attendance', href: '/school/student/attendance', icon: CalendarCheck },
      { name: 'Homework', href: '/school/student/homework', icon: NotebookPen },
      { name: 'Assignments', href: '/school/student/assignments', icon: ClipboardList },
      { name: 'Exams', href: '/school/student/exams', icon: FileCheck },
      { name: 'Results', href: '/school/student/results', icon: ChartNoAxesCombined },
      { name: 'Performance', href: '/school/student/performance', icon: Activity },
      { name: 'Fees', href: '/school/student/fees', icon: WalletCards },
      { name: 'Certificates', href: '/school/student/certificates', icon: BadgeCheck },
      { name: 'Notifications', href: '/school/student/notifications', icon: Bell },
    ]
  },
  {
    groupName: 'Account',
    items: [
      { name: 'Help', href: '/school/student/help', icon: Info },
      { name: 'Settings', href: '/school/student/settings', icon: Settings },
      { name: 'Profile', href: '/school/student/profile', icon: GraduationCap },
    ]
  }
];

export const teacherNavigation: NavGroup[] = [
  {
    items: [
      { name: 'Dashboard', href: '/school/teacher', icon: LayoutDashboard },
      { name: 'My Classes', href: '/school/teacher/classes', icon: BookOpen },
      { name: 'Students', href: '/school/teacher/students', icon: Users },
      { name: 'Attendance', href: '/school/teacher/attendance', icon: CalendarCheck },
      { name: 'Homework', href: '/school/teacher/homework', icon: NotebookPen },
      { name: 'Assignments', href: '/school/teacher/assignments', icon: ClipboardList },
      { name: 'Exams', href: '/school/teacher/exams', icon: FileCheck },
      { name: 'Results', href: '/school/teacher/results', icon: ChartNoAxesCombined },
      { name: 'Timetable', href: '/school/teacher/timetable', icon: CalendarClock },
      { name: 'Performance', href: '/school/teacher/performance', icon: Activity },
      { name: 'Announcements', href: '/school/teacher/announcements', icon: Megaphone },
    ]
  },
  {
    groupName: 'Account',
    items: [
      { name: 'Help', href: '/school/teacher/help', icon: Info },
      { name: 'Settings', href: '/school/teacher/settings', icon: Settings },
      { name: 'Profile', href: '/school/teacher/profile', icon: BookOpen },
    ]
  }
];

export const parentNavigation: NavGroup[] = [
  {
    items: [
      { name: 'Dashboard', href: '/school/parent', icon: LayoutDashboard },
      { name: 'My Children', href: '/school/parent/children', icon: Users },
      { name: 'Attendance', href: '/school/parent/attendance', icon: CalendarCheck },
      { name: 'Performance', href: '/school/parent/performance', icon: Activity },
      { name: 'Homework', href: '/school/parent/homework', icon: NotebookPen },
      { name: 'Assignments', href: '/school/parent/assignments', icon: ClipboardList },
      { name: 'Exams & Results', href: '/school/parent/results', icon: FileCheck },
      { name: 'Fees', href: '/school/parent/fees', icon: WalletCards },
      { name: 'Timetable', href: '/school/parent/timetable', icon: CalendarClock },
      { name: 'Teacher Remarks', href: '/school/parent/remarks', icon: ClipboardType },
      { name: 'Progress Reports', href: '/school/parent/progress', icon: ChartNoAxesCombined },
      { name: 'Notifications', href: '/school/parent/notifications', icon: Bell },
      { name: 'Events', href: '/school/parent/events', icon: CalendarCheck },
    ]
  },
  {
    groupName: 'Account',
    items: [
      { name: 'Help', href: '/school/parent/help', icon: Info },
      { name: 'Settings', href: '/school/parent/settings', icon: Settings },
      { name: 'Profile', href: '/school/parent/profile', icon: Users },
    ]
  }
];

export const adminNavigation: NavGroup[] = [
  {
    items: [
      { name: 'Dashboard', href: '/school/admin', icon: LayoutDashboard },
    ]
  },
  {
    groupName: 'People',
    items: [
      { name: 'Students', href: '/school/admin/students', icon: GraduationCap },
      { name: 'Teachers', href: '/school/admin/teachers', icon: BookOpen },
      { name: 'Parents', href: '/school/admin/parents', icon: Users },
    ]
  },
  {
    groupName: 'Academic',
    items: [
      { name: 'Classes', href: '/school/admin/classes', icon: Users },
      { name: 'Subjects', href: '/school/admin/subjects', icon: BookOpen },
      { name: 'Timetable', href: '/school/admin/timetable', icon: CalendarClock },
      { name: 'Attendance', href: '/school/admin/attendance', icon: CalendarCheck },
      { name: 'Homework', href: '/school/admin/homework', icon: NotebookPen },
      { name: 'Assignments', href: '/school/admin/assignments', icon: ClipboardList },
      { name: 'Exams', href: '/school/admin/exams', icon: FileCheck },
      { name: 'Results', href: '/school/admin/results', icon: ChartNoAxesCombined },
    ]
  },
  {
    groupName: 'Finance',
    items: [
      { name: 'Fees', href: '/school/admin/fees', icon: WalletCards },
    ]
  },
  {
    groupName: 'Operations',
    items: [
      { name: 'Transport', href: '/school/admin/transport', icon: Bus },
      { name: 'Events', href: '/school/admin/events', icon: CalendarCheck },
      { name: 'Announcements', href: '/school/admin/announcements', icon: Megaphone },
      { name: 'Documents', href: '/school/admin/documents', icon: FileText },
    ]
  },
  {
    groupName: 'Analytics',
    items: [
      { name: 'Reports', href: '/school/admin/reports', icon: FileBarChart },
      { name: 'Performance', href: '/school/admin/performance', icon: Activity },
    ]
  },
  {
    groupName: 'System',
    items: [
      { name: 'Notifications', href: '/school/admin/notifications', icon: Bell },
      { name: 'Audit Logs', href: '/school/admin/audit-logs', icon: History },
      { name: 'Settings', href: '/school/admin/settings', icon: Settings },
    ]
  }
];

export const getNavigationForRole = (role: string) => {
  switch (role) {
    case 'student': return studentNavigation;
    case 'teacher': return teacherNavigation;
    case 'parent': return parentNavigation;
    case 'admin': return adminNavigation;
    default: return [];
  }
};
