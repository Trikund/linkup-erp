import { 
  LayoutDashboard, BookOpen, Clock, CheckSquare, FileText, 
  Award, TrendingUp, CreditCard, FileBadge, Briefcase, 
  Bell, User, Users, Building, Calendar, Settings, FileBox
} from 'lucide-react';

export const collegeNavigation = {
  student: [
    { label: 'Dashboard', path: '/college/student/dashboard', icon: LayoutDashboard },
    { label: 'Courses', path: '/college/student/courses', icon: BookOpen },
    { label: 'Timetable', path: '/college/student/timetable', icon: Clock },
    { label: 'Results', path: '/college/student/results', icon: Award },
    { label: 'Placements', path: '/college/student/placements', icon: Briefcase },
    { label: 'Fees', path: '/college/student/fees', icon: CreditCard },
    { label: 'Profile', path: '/college/student/profile', icon: User }
  ],
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