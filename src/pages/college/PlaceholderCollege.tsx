import React from 'react';
import { CollegeLayout } from '../../components/college/layout/CollegeLayout';
import { CollegeRole } from '../../types/college';
import { Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function PlaceholderCollege({ role }: { role: CollegeRole }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const moduleName = pathParts[pathParts.length - 1];
  const title = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

  return (
    <CollegeLayout 
      role={role} 
      user={{ name: role === 'student' ? 'Shivam Sharma' : role === 'faculty' ? 'Dr. Sharma' : role === 'parent' ? 'Rajesh Kumar' : 'Admin User', roleLabel: `${role.toUpperCase()} PORTAL` }} 
      title={title} 
      description={`Manage your ${title.toLowerCase()} securely.`}
    >
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <Clock size={32} className="text-[#7c3aed]" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">{title} Module</h2>
        <p className="text-slate-500 max-w-md">
          This module is part of the College ERP system and is currently being configured for your institution's specific requirements.
        </p>
      </div>
    </CollegeLayout>
  );
}