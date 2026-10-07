import { 
  LayoutDashboard, Users, Clock, Calendar, CheckSquare, 
  Briefcase, TrendingUp, CreditCard, FileText, 
  Bell, User, Settings, Megaphone, FileBox, ShieldCheck, HeartHandshake
} from 'lucide-react';

export const corporateNavigation = {
  employee: [
    { label: 'Dashboard', path: '/corporate/employee/dashboard', icon: LayoutDashboard },
    { label: 'Attendance', path: '/corporate/employee/attendance', icon: Clock },
    { label: 'Leave', path: '/corporate/employee/leave', icon: Calendar },
    { label: 'Tasks', path: '/corporate/employee/tasks', icon: CheckSquare },
    { label: 'Projects', path: '/corporate/employee/projects', icon: Briefcase },
    { label: 'My Team', path: '/corporate/employee/team', icon: Users },
    { label: 'Performance', path: '/corporate/employee/performance', icon: TrendingUp },
    { label: 'Payslips', path: '/corporate/employee/payslips', icon: CreditCard },
    { label: 'Documents', path: '/corporate/employee/documents', icon: FileText },
    { label: 'Profile', path: '/corporate/employee/profile', icon: User }
  ],
  manager: [
    { label: 'Dashboard', path: '/corporate/manager/dashboard', icon: LayoutDashboard },
    { label: 'My Team', path: '/corporate/manager/team', icon: Users },
    { label: 'Attendance', path: '/corporate/manager/attendance', icon: Clock },
    { label: 'Leave Approval', path: '/corporate/manager/leave', icon: Calendar },
    { label: 'Tasks', path: '/corporate/manager/tasks', icon: CheckSquare },
    { label: 'Projects', path: '/corporate/manager/projects', icon: Briefcase },
    { label: 'Performance', path: '/corporate/manager/performance', icon: TrendingUp },
    { label: 'Reports', path: '/corporate/manager/reports', icon: FileBox },
    { label: 'Profile', path: '/corporate/manager/profile', icon: User }
  ],
  hr: [
    { label: 'Dashboard', path: '/corporate/hr/dashboard', icon: LayoutDashboard },
    { label: 'Employees', path: '/corporate/hr/employees', icon: Users },
    { label: 'Recruitment', path: '/corporate/hr/recruitment', icon: Briefcase },
    { label: 'Onboarding', path: '/corporate/hr/onboarding', icon: HeartHandshake },
    { label: 'Attendance', path: '/corporate/hr/attendance', icon: Clock },
    { label: 'Leave', path: '/corporate/hr/leave', icon: Calendar },
    { label: 'Payroll', path: '/corporate/hr/payroll', icon: CreditCard },
    { label: 'Performance', path: '/corporate/hr/performance', icon: TrendingUp },
    { label: 'Policies', path: '/corporate/hr/policies', icon: ShieldCheck },
    { label: 'Documents', path: '/corporate/hr/documents', icon: FileText },
    { label: 'Profile', path: '/corporate/hr/profile', icon: User }
  ],
  admin: [
    { label: 'Dashboard', path: '/corporate/admin/dashboard', icon: LayoutDashboard },
    { label: 'Employees', path: '/corporate/admin/employees', icon: Users },
    { label: 'Departments', path: '/corporate/admin/departments', icon: Briefcase },
    { label: 'Attendance', path: '/corporate/admin/attendance', icon: Clock },
    { label: 'Payroll', path: '/corporate/admin/payroll', icon: CreditCard },
    { label: 'Reports', path: '/corporate/admin/reports', icon: FileBox },
    { label: 'Audit Logs', path: '/corporate/admin/audit-logs', icon: FileText },
    { label: 'Settings', path: '/corporate/admin/settings', icon: Settings }
  ]
};