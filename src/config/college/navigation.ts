import { 
  LayoutDashboard, BookOpen, Clock, CheckSquare, FileText, 
  Award, TrendingUp, CreditCard, FileBadge, Briefcase, 
  Bell, User, Users, Building, Calendar, Settings, FileBox,
  GraduationCap, BookMarked, HelpCircle, ShieldCheck, UserCheck,
  CalendarCheck, MessageSquare, Layers, Home
} from 'lucide-react';

export interface CollegeNavItem {
  label: string;
  path: string;
  icon: any;
  badge?: string;
  badgeColor?: 'violet' | 'amber' | 'green' | 'blue' | 'rose';
}

export interface CollegeNavGroup {
  groupName: string;
  items: CollegeNavItem[];
}

export const collegeStudentNavGroups: CollegeNavGroup[] = [
  {
    groupName: 'Academics',
    items: [
      { label: 'Dashboard', path: '/college/student/dashboard', icon: LayoutDashboard },
      { label: 'Courses & Syllabus', path: '/college/student/courses', icon: BookOpen },
      { label: 'Timetable & Lectures', path: '/college/student/timetable', icon: Clock },
      { label: 'Attendance & Biometrics', path: '/college/student/attendance', icon: CheckSquare, badge: '86%', badgeColor: 'green' }
    ]
  },
  {
    groupName: 'Exams & Evaluation',
    items: [
      { label: 'Assignments & Labs', path: '/college/student/assignments', icon: FileText, badge: '4 Due', badgeColor: 'amber' },
      { label: 'Exams & Hall Ticket', path: '/college/student/exams', icon: FileBadge },
      { label: 'Results & Transcripts', path: '/college/student/results', icon: Award, badge: '8.42', badgeColor: 'violet' },
      { label: 'Academic Performance', path: '/college/student/performance', icon: TrendingUp }
    ]
  },
  {
    groupName: 'Career & Industry',
    items: [
      { label: 'Training & Placements', path: '/college/student/placements', icon: Briefcase, badge: '6 Live', badgeColor: 'violet' },
      { label: 'Internships & Capstone', path: '/college/student/internships', icon: GraduationCap }
    ]
  },
  {
    groupName: 'Campus & Facilities',
    items: [
      { label: 'Fees & Payments', path: '/college/student/fees', icon: CreditCard },
      { label: 'Library & E-Resources', path: '/college/student/library', icon: BookMarked },
      { label: 'Hostel & Transport', path: '/college/student/hostel', icon: Building },
      { label: 'Notices & Circulars', path: '/college/student/notifications', icon: Bell, badge: '3 New', badgeColor: 'blue' }
    ]
  },
  {
    groupName: 'Account',
    items: [
      { label: 'Help & Grievance', path: '/college/student/help', icon: HelpCircle },
      { label: 'Settings & Security', path: '/college/student/settings', icon: Settings },
      { label: 'Student Profile & ID', path: '/college/student/profile', icon: User }
    ]
  }
];

export const collegeFacultyNavGroups: CollegeNavGroup[] = [
  {
    groupName: 'Teaching & Academics',
    items: [
      { label: 'Faculty Dashboard', path: '/college/faculty/dashboard', icon: LayoutDashboard },
      { label: 'Assigned Courses', path: '/college/faculty/courses', icon: BookOpen },
      { label: 'Students & Batches', path: '/college/faculty/students', icon: Users, badge: '142', badgeColor: 'blue' },
      { label: 'Attendance Register', path: '/college/faculty/attendance', icon: CheckSquare },
      { label: 'Teaching Schedule', path: '/college/faculty/schedule', icon: Calendar }
    ]
  },
  {
    groupName: 'Evaluation & Exams',
    items: [
      { label: 'Assignments & Labs', path: '/college/faculty/assignments', icon: FileText, badge: '45 Due', badgeColor: 'amber' },
      { label: 'Exam Duties & Papers', path: '/college/faculty/exams', icon: FileBadge },
      { label: 'Grading & Results', path: '/college/faculty/results', icon: Award }
    ]
  },
  {
    groupName: 'Mentorship & Capstone',
    items: [
      { label: 'Mentee Counseling', path: '/college/faculty/mentees', icon: UserCheck, badge: '24 Mentees', badgeColor: 'violet' },
      { label: 'Major Capstone Projects', path: '/college/faculty/projects', icon: GraduationCap }
    ]
  },
  {
    groupName: 'Department & Service',
    items: [
      { label: 'Department Cell (HOD)', path: '/college/faculty/department', icon: Building },
      { label: 'Research & Publications', path: '/college/faculty/research', icon: BookMarked },
      { label: 'Notice Circulars', path: '/college/faculty/announcements', icon: Bell, badge: '2 New', badgeColor: 'blue' },
      { label: 'Leave & Substitution', path: '/college/faculty/leaves', icon: Clock }
    ]
  },
  {
    groupName: 'Account',
    items: [
      { label: 'Faculty Help Desk', path: '/college/faculty/help', icon: HelpCircle },
      { label: 'Settings & Security', path: '/college/faculty/settings', icon: Settings },
      { label: 'Faculty Profile & CV', path: '/college/faculty/profile', icon: User }
    ]
  }
];

export const collegeParentNavGroups: CollegeNavGroup[] = [
  {
    groupName: 'Academic Ward Overview',
    items: [
      { label: 'Parent Dashboard', path: '/college/parent/dashboard', icon: LayoutDashboard },
      { label: 'Ward Profile & Enrollment', path: '/college/parent/ward', icon: UserCheck },
      { label: 'Weekly Timetable', path: '/college/parent/timetable', icon: Calendar }
    ]
  },
  {
    groupName: 'Academics & Performance',
    items: [
      { label: 'Attendance Tracking', path: '/college/parent/attendance', icon: CheckSquare, badge: '86.4%', badgeColor: 'green' },
      { label: 'Results & CGPA', path: '/college/parent/results', icon: Award, badge: '8.42', badgeColor: 'violet' },
      { label: 'Assignments & Labs', path: '/college/parent/assignments', icon: FileText, badge: '4 Active', badgeColor: 'amber' },
      { label: 'Performance Analytics', path: '/college/parent/performance', icon: TrendingUp }
    ]
  },
  {
    groupName: 'Career & Campus Life',
    items: [
      { label: 'Placements & Internships', path: '/college/parent/placements', icon: Briefcase, badge: 'Placed', badgeColor: 'green' },
      { label: 'Hostel & Mess Facility', path: '/college/parent/hostel', icon: Building },
      { label: 'Faculty Mentor Remarks', path: '/college/parent/remarks', icon: MessageSquare, badge: 'New', badgeColor: 'blue' }
    ]
  },
  {
    groupName: 'Finance & Administration',
    items: [
      { label: 'Fee Ledger & Receipts', path: '/college/parent/fees', icon: CreditCard, badge: 'Cleared', badgeColor: 'green' },
      { label: 'Notices & Circulars', path: '/college/parent/notifications', icon: Bell, badge: '3 New', badgeColor: 'blue' },
      { label: 'Events & Calendar', path: '/college/parent/events', icon: CalendarCheck }
    ]
  },
  {
    groupName: 'Account',
    items: [
      { label: 'Help & Grievance Cell', path: '/college/parent/help', icon: HelpCircle },
      { label: 'Settings & Alerts', path: '/college/parent/settings', icon: Settings },
      { label: 'Parent Profile', path: '/college/parent/profile', icon: User }
    ]
  }
];

export const collegeAdminNavGroups: CollegeNavGroup[] = [
  {
    groupName: 'Academic & Governance',
    items: [
      { label: 'Institution Dashboard', path: '/college/admin/dashboard', icon: LayoutDashboard },
      { label: 'Departments & Cells', path: '/college/admin/departments', icon: Building, badge: '14 Depts', badgeColor: 'blue' },
      { label: 'Programs & Courses', path: '/college/admin/courses', icon: BookOpen },
      { label: 'Batches & Sections', path: '/college/admin/batches', icon: Layers }
    ]
  },
  {
    groupName: 'People & Stakeholders',
    items: [
      { label: 'Students Directory', path: '/college/admin/students', icon: Users, badge: '12,450', badgeColor: 'violet' },
      { label: 'Faculty & Cadre', path: '/college/admin/faculty', icon: GraduationCap, badge: '842', badgeColor: 'green' },
      { label: 'Parents & Guardians', path: '/college/admin/parents', icon: UserCheck }
    ]
  },
  {
    groupName: 'Academic Operations & Exams',
    items: [
      { label: 'Master Timetable', path: '/college/admin/timetable', icon: Calendar },
      { label: 'Campus Attendance', path: '/college/admin/attendance', icon: CheckSquare },
      { label: 'Controller of Exams (COE)', path: '/college/admin/exams', icon: FileBadge, badge: 'Exam Cell', badgeColor: 'amber' },
      { label: 'Grading & Transcripts', path: '/college/admin/results', icon: Award }
    ]
  },
  {
    groupName: 'Finance, Campus & Career',
    items: [
      { label: 'Fee Management & Accounts', path: '/college/admin/fees', icon: CreditCard, badge: '₹42.8 Cr', badgeColor: 'green' },
      { label: 'Hostel & Residential Life', path: '/college/admin/hostel', icon: Home },
      { label: 'Training & Placements (T&P)', path: '/college/admin/placements', icon: Briefcase, badge: '89.4%', badgeColor: 'green' },
      { label: 'Research & Innovation', path: '/college/admin/research', icon: BookMarked }
    ]
  },
  {
    groupName: 'Administration & Compliance',
    items: [
      { label: 'Institutional Circulars', path: '/college/admin/announcements', icon: Bell, badge: '4 New', badgeColor: 'blue' },
      { label: 'Accreditation & NAAC/NIRF', path: '/college/admin/reports', icon: FileBox },
      { label: 'System Audit Logs', path: '/college/admin/audit-logs', icon: ShieldCheck },
      { label: 'Institution Settings', path: '/college/admin/settings', icon: Settings }
    ]
  }
];

export const collegeNavigation = {
  student: collegeStudentNavGroups.flatMap(g => g.items),
  faculty: collegeFacultyNavGroups.flatMap(g => g.items),
  parent: collegeParentNavGroups.flatMap(g => g.items),
  admin: collegeAdminNavGroups.flatMap(g => g.items)
};