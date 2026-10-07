const fs = require('fs');
const path = require('path');

const files = {
  'src/types/corporate/index.ts': `
export type CorporateRole = 'employee' | 'manager' | 'hr' | 'admin';

export interface CorporateEmployee {
  id: string;
  name: string;
  department: string;
  designation: string;
  manager: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  avatar?: string;
  attendance: number;
}
  `,

  'src/data/corporate/mockData.ts': `
import { CorporateEmployee } from '../../types/corporate';

export const mockEmployees: CorporateEmployee[] = [
  { id: 'EMP-1024', name: 'Rahul Sharma', department: 'Engineering', designation: 'Frontend Developer', manager: 'Priya Mehta', status: 'Active', attendance: 94 },
  { id: 'EMP-1025', name: 'Priya Mehta', department: 'Engineering', designation: 'Engineering Manager', manager: 'Vikram Singh', status: 'Active', attendance: 98 },
  { id: 'EMP-1026', name: 'Anita Desai', department: 'Human Resources', designation: 'HR Business Partner', manager: 'Suresh Kumar', status: 'Active', attendance: 95 },
  { id: 'EMP-1027', name: 'Vikram Singh', department: 'Operations', designation: 'VP of Engineering', manager: 'Admin', status: 'Active', attendance: 99 }
];
  `,

  'src/config/corporate/navigation.ts': `
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
  `,

  'src/components/corporate/layout/CorporateTopbar.tsx': `
import React from 'react';
import { Bell, Menu, Search, HelpCircle } from 'lucide-react';
import { CorporateRole } from '../../../types/corporate';
import { useNavigate } from 'react-router-dom';

interface CorporateTopbarProps {
  role: CorporateRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function CorporateTopbar({ role, user, onOpenSidebar, title, description }: CorporateTopbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all h-16">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
            {title && <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>}
            {description && <p className="text-xs text-slate-500 font-medium">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search directory, documents, tasks..." 
              className="w-64 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-linkup-navy focus:ring-2 focus:ring-linkup-navy/20 outline-none transition-all"
            />
          </div>
          
          <button className="hidden sm:block relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <HelpCircle size={20} />
          </button>
          
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <div className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer">
            <img src={user.avatar || \`https://ui-avatars.com/api/?name=\${user.name}&background=f1f5f9&color=0f172a\`} alt={user.name} className="w-8 h-8 rounded-full shadow-sm" />
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-slate-800 leading-none">{user.name}</p>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  `,

  'src/components/corporate/layout/CorporateSidebar.tsx': `
import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BriefcaseBusiness, LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { corporateNavigation } from '../../../config/corporate/navigation';
import { CorporateRole } from '../../../types/corporate';

interface CorporateSidebarProps {
  role: CorporateRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateSidebar({ role, isOpen, onClose }: CorporateSidebarProps) {
  const navigate = useNavigate();
  const navItems = corporateNavigation[role];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 lg:translate-x-0 shadow-2xl lg:shadow-none border-r border-slate-800",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800/50">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-linkup-navy to-linkup-blue flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <BriefcaseBusiness size={18} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">LinkUp<span className="text-linkup-blue">Corp</span></span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <div className="px-3 mb-4">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Organization Menu</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-linkup-navy/20 text-white border-l-2 border-linkup-blue shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50 border-l-2 border-transparent"
              )}
            >
              <item.icon size={18} className={cn("transition-colors")} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800/50">
          <button 
            onClick={() => navigate(\`/corporate/login\`)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-red-500/10 transition-all duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
  `,

  'src/components/corporate/layout/CorporateLayout.tsx': `
import React, { useState } from 'react';
import { CorporateSidebar } from './CorporateSidebar';
import { CorporateTopbar } from './CorporateTopbar';
import { CorporateRole } from '../../../types/corporate';

interface CorporateLayoutProps {
  role: CorporateRole;
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function CorporateLayout({ role, user, title, description, children }: CorporateLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex selection:bg-linkup-blue/20">
      <CorporateSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <CorporateTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          {/* Subtle Aurora Effect specific to Corporate (Deep Navy/Blue) */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-linkup-navy/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
  `,

  'src/pages/corporate/PlaceholderCorporate.tsx': `
import React from 'react';
import { CorporateLayout } from '../../components/corporate/layout/CorporateLayout';
import { CorporateRole } from '../../types/corporate';
import { BriefcaseBusiness } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function PlaceholderCorporate({ role }: { role: CorporateRole }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const moduleName = pathParts[pathParts.length - 1] || 'Dashboard';
  const title = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

  const roleNameMap: Record<CorporateRole, string> = {
    employee: 'Rahul Sharma',
    manager: 'Priya Mehta',
    hr: 'Anita Desai',
    admin: 'System Admin'
  };

  const roleLabelMap: Record<CorporateRole, string> = {
    employee: 'Frontend Developer',
    manager: 'Engineering Manager',
    hr: 'HR Business Partner',
    admin: 'Platform Administrator'
  };

  return (
    <CorporateLayout 
      role={role} 
      user={{ name: roleNameMap[role], roleLabel: roleLabelMap[role] }} 
      title={title} 
      description={\`Access and manage \${title.toLowerCase()} for your organization.\`}
    >
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-slate-100 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
          <BriefcaseBusiness size={28} className="text-linkup-navy" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">{title} Module</h2>
        <p className="text-slate-500 max-w-sm text-sm">
          This functional area is currently being provisioned for your workforce management portal.
        </p>
      </div>
    </CorporateLayout>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Corporate Layout & Base files created successfully!');
