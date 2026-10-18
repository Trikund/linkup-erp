import React, { useState } from 'react';
import { UserRound, BookOpen, Users, ShieldCheck, ClipboardCheck, CalendarClock, MessageSquare, Bell } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RoleSelector, Role } from '../components/auth/RoleSelector';
import { LoginForm } from '../components/auth/LoginForm';

const ROLES: Role[] = [
  { id: 'student', label: 'Student', icon: UserRound },
  { id: 'teacher', label: 'Teacher', icon: BookOpen },
  { id: 'parent', label: 'Parent', icon: Users },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
];

const FEATURES = [
  { icon: ClipboardCheck, text: "Attendance & Exams" },
  { icon: BookOpen, text: "Homework & Assignments" },
  { icon: MessageSquare, text: "Parent Communication" },
  { icon: Bell, text: "Timetable & Notices" }
];

export function SchoolLogin() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);

  return (
    <AuthLayout
      label="School Management"
      accent="blue"
      image="/assets/card_school.jpg"
      visualHeadline="Better Education Brighter Future"
      visualSubheadline="Smart tools for students, teachers and parents."
      features={FEATURES}
    >
      <div className="mb-3.5 xl:mb-4">
        <h1 className="text-2xl xl:text-3xl font-bold text-slate-900 mb-1">Welcome Back</h1>
        <p className="text-xs xl:text-sm text-slate-500">Login to access your school portal</p>
      </div>

      <RoleSelector 
        roles={ROLES} 
        selectedRole={selectedRole} 
        onSelect={setSelectedRole} 
        accent="blue" 
      />

      <LoginForm 
        organizationType="school" 
        selectedRole={selectedRole} 
        accent="blue" 
      />

      <p className="mt-3.5 xl:mt-4 text-center text-xs xl:text-sm text-slate-500">
        Don't have an account? <a href="#" className="font-medium text-linkup-blue hover:underline">Contact your school</a>
      </p>
    </AuthLayout>
  );
}
