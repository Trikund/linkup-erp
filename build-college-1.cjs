const fs = require('fs');
const path = require('path');

const files = {
  'src/types/college/index.ts': `
export type CollegeRole = 'student' | 'faculty' | 'parent' | 'admin';

export interface CollegeStudent {
  id: string;
  name: string;
  program: string;
  department: string;
  batch: string;
  semester: number;
  section: string;
  attendance: number;
  cgpa: number;
  status: 'Active' | 'Inactive';
  avatar?: string;
}

export interface CollegeFaculty {
  id: string;
  name: string;
  department: string;
  designation: string;
  subjects: string[];
  status: 'Active' | 'Inactive';
  avatar?: string;
}

export interface CollegeParent {
  id: string;
  name: string;
  childrenIds: string[];
}
  `,

  'src/data/college/mockData.ts': `
import { CollegeStudent, CollegeFaculty, CollegeParent } from '../../types/college';

export const mockStudents: CollegeStudent[] = [
  { id: 'STU001', name: 'Shivam Sharma', program: 'B.Tech', department: 'Computer Science', batch: '2023-2027', semester: 7, section: 'CSE-1', attendance: 86, cgpa: 8.42, status: 'Active' },
  { id: 'STU002', name: 'Aarav Kumar', program: 'B.Tech', department: 'Computer Science', batch: '2023-2027', semester: 7, section: 'CSE-1', attendance: 92, cgpa: 9.1, status: 'Active' },
  { id: 'STU003', name: 'Ananya Kumar', program: 'BBA', department: 'Business', batch: '2024-2028', semester: 5, section: 'BBA-2', attendance: 78, cgpa: 7.5, status: 'Active' }
];

export const mockFaculty: CollegeFaculty[] = [
  { id: 'FAC001', name: 'Dr. Ankit Sharma', department: 'Computer Science', designation: 'Professor', subjects: ['CS701', 'CS702'], status: 'Active' },
  { id: 'FAC002', name: 'Prof. Priya Verma', department: 'Business', designation: 'Assistant Professor', subjects: ['MGT301'], status: 'Active' }
];

export const mockParents: CollegeParent[] = [
  { id: 'PAR001', name: 'Rajesh Kumar', childrenIds: ['STU002', 'STU003'] }
];

export const mockSubjects = [
  { code: 'CS701', name: 'Advanced Database Management', credits: 4, faculty: 'Dr. Ankit Sharma' },
  { code: 'CS702', name: 'Machine Learning', credits: 4, faculty: 'Dr. Ankit Sharma' },
  { code: 'CS703', name: 'Cloud Computing', credits: 3, faculty: 'Prof. Vikas Singh' }
];
  `,

  'src/config/college/navigation.ts': `
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
  `,

  'src/components/college/layout/CollegeTopbar.tsx': `
import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { CollegeRole } from '../../../types/college';

interface CollegeTopbarProps {
  role: CollegeRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function CollegeTopbar({ role, user, onOpenSidebar, title, description }: CollegeTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
            {title && <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>}
            {description && <p className="text-xs text-slate-500 font-medium">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-64 pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-linkup-blue focus:ring-2 focus:ring-linkup-blue/20 transition-all"
            />
          </div>
          
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <button className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
            <img src={user.avatar || \`https://ui-avatars.com/api/?name=\${user.name}&background=f1f5f9&color=64748b\`} alt={user.name} className="w-8 h-8 rounded-full" />
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-slate-700 leading-none">{user.name}</p>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
  `,

  'src/components/college/layout/CollegeSidebar.tsx': `
import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { collegeNavigation } from '../../../config/college/navigation';
import { CollegeRole } from '../../../types/college';

interface CollegeSidebarProps {
  role: CollegeRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CollegeSidebar({ role, isOpen, onClose }: CollegeSidebarProps) {
  const navigate = useNavigate();
  const navItems = collegeNavigation[role];

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-linkup-blue to-[#7c3aed] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <GraduationCap size={20} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">LinkUp<span className="text-[#7c3aed]">College</span></span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <div className="px-3 mb-4">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Menu</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-[#7c3aed]/10 text-white shadow-[inset_0_0_0_1px_rgba(124,58,237,0.2)]" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
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
            onClick={() => navigate(\`/college/login\`)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-red-500/10 hover:shadow-[inset_0_0_0_1px_rgba(239,68,68,0.2)] transition-all duration-200"
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

  'src/components/college/layout/CollegeLayout.tsx': `
import React, { useState } from 'react';
import { CollegeSidebar } from './CollegeSidebar';
import { CollegeTopbar } from './CollegeTopbar';
import { CollegeRole } from '../../../types/college';

interface CollegeLayoutProps {
  role: CollegeRole;
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function CollegeLayout({ role, user, title, description, children }: CollegeLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex selection:bg-[#7c3aed]/20">
      <CollegeSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <CollegeTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#7c3aed]/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
  `,
  
  'src/components/college/layout/ChildSwitcher.tsx': `
import React from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { CollegeStudent } from '../../../types/college';

interface ChildSwitcherProps {
  childrenList: CollegeStudent[];
  activeChildId: string;
  onSwitch: (id: string) => void;
}

export function ChildSwitcher({ childrenList, activeChildId, onSwitch }: ChildSwitcherProps) {
  const activeChild = childrenList.find(c => c.id === activeChildId) || childrenList[0];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 bg-white border border-[#7c3aed]/20 shadow-md shadow-[#7c3aed]/5 rounded-2xl w-full sm:w-auto hover:border-[#7c3aed]/40 transition-all text-left"
      >
        <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
          <Users size={24} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Viewing Details For</p>
          <p className="text-lg font-black text-slate-800">{activeChild?.name}</p>
          <p className="text-sm font-medium text-slate-500">{activeChild?.program} • Sem {activeChild?.semester}</p>
        </div>
        <ChevronDown size={20} className="text-slate-400 ml-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full sm:w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden z-20">
          {childrenList.map(child => (
            <button
              key={child.id}
              onClick={() => { onSwitch(child.id); setIsOpen(false); }}
              className={\`w-full flex items-center gap-3 p-4 text-left transition-colors \${activeChildId === child.id ? 'bg-[#7c3aed]/5' : 'hover:bg-slate-50'}\`}
            >
              <div className={\`w-10 h-10 rounded-full flex items-center justify-center \${activeChildId === child.id ? 'bg-[#7c3aed] text-white' : 'bg-slate-100 text-slate-500'}\`}>
                <Users size={18} />
              </div>
              <div>
                <p className={\`text-sm font-bold \${activeChildId === child.id ? 'text-[#7c3aed]' : 'text-slate-700'}\`}>{child.name}</p>
                <p className="text-xs text-slate-500">{child.program}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('College Layout & Base files created successfully!');
