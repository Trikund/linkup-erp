import React, { useState } from 'react';
import { UserRound, Users, UserCog, ShieldCheck, Briefcase, CalendarClock, TrendingUp, Building } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RoleSelector, Role } from '../components/auth/RoleSelector';
import { LoginForm } from '../components/auth/LoginForm';

const ROLES: Role[] = [
  { id: 'employee', label: 'Employee', icon: UserRound },
  { id: 'manager', label: 'Manager', icon: Users },
  { id: 'hr', label: 'HR', icon: UserCog },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
];

const FEATURES = [
  { icon: Briefcase, text: "Team & Project Management" },
  { icon: CalendarClock, text: "Leave & Attendance" },
  { icon: TrendingUp, text: "Performance & Analytics" },
  { icon: Building, text: "HR & Payroll" }
];

export function CorporateLogin() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);

  return (
    <AuthLayout
      label="Business Management"
      accent="blue"
      image="/assets/card_corporate.jpg"
      visualHeadline="People Projects Progress"
      visualSubheadline="One workspace for a more productive tomorrow."
      features={FEATURES}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500">Login to access your corporate portal</p>
      </div>

      <RoleSelector 
        roles={ROLES} 
        selectedRole={selectedRole} 
        onSelect={setSelectedRole} 
        accent="blue" 
      />

      <LoginForm 
        organizationType="corporate" 
        selectedRole={selectedRole} 
        accent="blue" 
      />

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account? <a href="#" className="font-medium text-linkup-blue hover:underline">Contact your administrator</a>
      </p>
    </AuthLayout>
  );
}
