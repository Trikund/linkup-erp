import { 
  LayoutDashboard, BookOpen, Clock, CheckSquare, FileText, 
  Award, TrendingUp, CreditCard, FileBadge, Briefcase, 
  Bell, User, Users, Building, Calendar, Settings, FileBox,
  GraduationCap, BookMarked, HelpCircle, ShieldCheck
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

export const collegeNavigation = {
  student: collegeStudentNavGroups.flatMap(g => g.items),
  faculty: [
    { label: 'Dashboard', path: '/college/faculty/dashboard', icon: LayoutDashboard },
    { label: 'Subjects', path: '/college/faculty/subjects', icon: BookOpen },
    { label: 'Students', path: '/college/faculty/students', icon: Users },
    { label: 'Schedule', path: '/college/faculty/schedule', icon: Calendar },
    { label: 'Profile', path: '/college/faculty/profile', icon: User }
  ],
  parent: [
    { label: 'Dashboard', path: '/college/parent/dashboard', icon: LayoutDashboard },
    { label: 'Attendance', path: '/college/parent/attendance', icon: CheckSquare },
    { label: 'Results & CGPA', path: '/college/parent/results', icon: Award },
    { label: 'Fees', path: '/college/parent/fees', icon: CreditCard },
    { label: 'Profile', path: '/college/parent/profile', icon: User }
  ],
  admin: [
    { label: 'Dashboard', path: '/college/admin/dashboard', icon: LayoutDashboard },
    { label: 'Students', path: '/college/admin/students', icon: Users },
    { label: 'Faculty', path: '/college/admin/faculty', icon: Users },
    { label: 'Departments', path: '/college/admin/departments', icon: Building },
    { label: 'Courses', path: '/college/admin/courses', icon: BookOpen },
    { label: 'Reports', path: '/college/admin/reports', icon: FileBox },
    { label: 'Settings', path: '/college/admin/settings', icon: Settings }
  ]
};