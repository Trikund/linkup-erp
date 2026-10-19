import { 
  LayoutDashboard, Users, Clock, Calendar, CheckSquare, 
  Briefcase, TrendingUp, CreditCard, FileText, 
  Bell, User, Settings, Megaphone, FileBox, ShieldCheck, HeartHandshake,
  Receipt, Landmark, PieChart, BookOpen, Sparkles, Laptop, Building2,
  CalendarDays, HelpCircle, Layers, FolderKanban, Award,
  Target, BarChart3, MessageSquare, UserPlus, UserCheck, FileSpreadsheet
} from 'lucide-react';

export interface CorporateNavItem {
  label: string;
  path: string;
  icon: any;
  badge?: string;
  badgeColor?: 'blue' | 'violet' | 'amber' | 'rose' | 'green';
}

export interface CorporateNavGroup {
  groupName: string;
  items: CorporateNavItem[];
}

export const corporateEmployeeNavGroups: CorporateNavGroup[] = [
  {
    groupName: 'Workspace & Projects',
    items: [
      { label: 'Employee Dashboard', path: '/corporate/employee/dashboard', icon: LayoutDashboard },
      { label: 'Tasks & Sprints', path: '/corporate/employee/tasks', icon: CheckSquare, badge: '5 Due', badgeColor: 'amber' },
      { label: 'Projects & Repos', path: '/corporate/employee/projects', icon: FolderKanban, badge: '3 Active', badgeColor: 'blue' },
      { label: 'Timesheets & Logs', path: '/corporate/employee/timesheets', icon: Clock }
    ]
  },
  {
    groupName: 'Time & Attendance',
    items: [
      { label: 'Attendance & Swipes', path: '/corporate/employee/attendance', icon: CalendarDays, badge: '94%', badgeColor: 'green' },
      { label: 'Leave & Holidays', path: '/corporate/employee/leave', icon: Calendar, badge: '12 Days', badgeColor: 'blue' },
      { label: 'Remote Work & WFH', path: '/corporate/employee/wfh', icon: Laptop, badge: 'Hybrid', badgeColor: 'violet' }
    ]
  },
  {
    groupName: 'Compensation & Finance',
    items: [
      { label: 'Payroll & Payslips', path: '/corporate/employee/payslips', icon: CreditCard, badge: '₹1.26L', badgeColor: 'green' },
      { label: 'Tax & Form 16', path: '/corporate/employee/tax', icon: Landmark },
      { label: 'Expense Claims', path: '/corporate/employee/reimbursements', icon: Receipt, badge: '2 Pending', badgeColor: 'amber' },
      { label: 'ESOPs & Benefits', path: '/corporate/employee/benefits', icon: PieChart, badge: '1.5k Vested', badgeColor: 'violet' }
    ]
  },
  {
    groupName: 'Performance & Growth',
    items: [
      { label: 'Quarterly OKRs', path: '/corporate/employee/okrs', icon: Sparkles, badge: 'Q4 2026', badgeColor: 'blue' },
      { label: 'Appraisal & 360°', path: '/corporate/employee/performance', icon: TrendingUp, badge: '4.6 ★', badgeColor: 'green' },
      { label: 'Learning & Certs', path: '/corporate/employee/learning', icon: BookOpen }
    ]
  },
  {
    groupName: 'Organization & Culture',
    items: [
      { label: 'My Team & Org Chart', path: '/corporate/employee/team', icon: Users, badge: 'Pod 4', badgeColor: 'blue' },
      { label: 'Company Directory', path: '/corporate/employee/directory', icon: Building2, badge: '480 Staff', badgeColor: 'violet' },
      { label: 'Policies & Handbook', path: '/corporate/employee/policies', icon: ShieldCheck },
      { label: 'IT Assets & Gear', path: '/corporate/employee/assets', icon: Layers, badge: '3 Gear', badgeColor: 'blue' }
    ]
  },
  {
    groupName: 'Account & Support',
    items: [
      { label: 'Helpdesk & Grievance', path: '/corporate/employee/help', icon: HelpCircle, badge: '1 Open', badgeColor: 'amber' },
      { label: 'Employee Profile & ID', path: '/corporate/employee/profile', icon: User }
    ]
  }
];

export const corporateManagerNavGroups: CorporateNavGroup[] = [
  {
    groupName: 'Team & Operations',
    items: [
      { label: 'Manager Dashboard', path: '/corporate/manager/dashboard', icon: LayoutDashboard },
      { label: 'Direct Reports & Pod', path: '/corporate/manager/team', icon: Users, badge: '8 Eng', badgeColor: 'blue' },
      { label: 'Attendance & Swipes', path: '/corporate/manager/attendance', icon: Clock, badge: '96%', badgeColor: 'green' },
      { label: 'Leave Approvals', path: '/corporate/manager/leave', icon: Calendar, badge: '2 Due', badgeColor: 'amber' }
    ]
  },
  {
    groupName: 'Projects & Delivery',
    items: [
      { label: 'Sprint Planning & Tasks', path: '/corporate/manager/tasks', icon: CheckSquare, badge: 'Sprint 42', badgeColor: 'blue' },
      { label: 'Project Roadmaps', path: '/corporate/manager/projects', icon: FolderKanban, badge: '4 Repos', badgeColor: 'blue' },
      { label: 'Timesheet Signoffs', path: '/corporate/manager/timesheets', icon: FileSpreadsheet, badge: '5 Pending', badgeColor: 'amber' }
    ]
  },
  {
    groupName: 'Financials & Approvals',
    items: [
      { label: 'Expense Claims', path: '/corporate/manager/expenses', icon: Receipt, badge: '3 Claims', badgeColor: 'amber' },
      { label: 'Team Budgets & Cloud', path: '/corporate/manager/budgets', icon: CreditCard, badge: '₹45L', badgeColor: 'green' },
      { label: 'Salary & Compensation', path: '/corporate/manager/compensation', icon: PieChart }
    ]
  },
  {
    groupName: 'Performance & Talent',
    items: [
      { label: 'Team OKRs & Goals', path: '/corporate/manager/okrs', icon: Target, badge: '84%', badgeColor: 'blue' },
      { label: 'Reviews & Calibration', path: '/corporate/manager/performance', icon: TrendingUp, badge: '9-Box', badgeColor: 'violet' },
      { label: '1-on-1s & Mentorship', path: '/corporate/manager/one-on-one', icon: MessageSquare, badge: 'Today', badgeColor: 'violet' },
      { label: 'Hiring & Interviews', path: '/corporate/manager/hiring', icon: UserPlus, badge: '2 Open', badgeColor: 'green' }
    ]
  },
  {
    groupName: 'Analytics & Governance',
    items: [
      { label: 'Engineering Metrics & DORA', path: '/corporate/manager/reports', icon: BarChart3 },
      { label: 'Security & Compliance', path: '/corporate/manager/compliance', icon: ShieldCheck },
      { label: 'Manager Helpdesk', path: '/corporate/manager/help', icon: HelpCircle },
      { label: 'Manager Profile & Delegation', path: '/corporate/manager/profile', icon: UserCheck }
    ]
  }
];

export const corporateNavigation = {
  employee: corporateEmployeeNavGroups.flatMap(g => g.items),
  manager: corporateManagerNavGroups.flatMap(g => g.items),
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