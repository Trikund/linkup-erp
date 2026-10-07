import React, { useState } from 'react';
import { UserRound, BookOpen, Users, ShieldCheck, GraduationCap, CalendarClock, Briefcase, BookMarked } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RoleSelector, Role } from '../components/auth/RoleSelector';
import { LoginForm } from '../components/auth/LoginForm';

const ROLES: Role[] = [
  { id: 'student', label: 'Student', icon: UserRound },
  { id: 'faculty', label: 'Faculty', icon: BookOpen },
  { id: 'parent', label: 'Parent', icon: Users },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
];

const FEATURES = [
  { icon: GraduationCap, text: "Course & Exam Management" },
  { icon: CalendarClock, text: "Timetable & Attendance" },
  { icon: Briefcase, text: "Placement & Opportunities" },
  { icon: BookMarked, text: "Academic Resources" }
];

export function CollegeLogin() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);

  return (
    <AuthLayout
      label="College Management"
      accent="violet"
      image="/assets/card_college.jpg"
      visualHeadline="Your Learning Our Priority"
      visualSubheadline="Manage courses, exams, resources and career growth."
      features={FEATURES}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500">Login to access your college portal</p>
      </div>

      <RoleSelector 
        roles={ROLES} 
        selectedRole={selectedRole} 
        onSelect={setSelectedRole} 
        accent="violet" 
      />

      <LoginForm 
        organizationType="college" 
        selectedRole={selectedRole} 
        accent="violet" 
      />

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account? <a href="#" className="font-medium text-[#7c3aed] hover:underline">Contact your college</a>
      </p>
    </AuthLayout>
  );
}
