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
      description={`Access and manage ${title.toLowerCase()} for your organization.`}
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