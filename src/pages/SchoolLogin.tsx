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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500">Login to access your school portal</p>
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

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account? <a href="#" className="font-medium text-linkup-blue hover:underline">Contact your school</a>
      </p>
    </AuthLayout>
  );
}
