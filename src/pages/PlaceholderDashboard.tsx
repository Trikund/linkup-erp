import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SchoolLayout } from '../components/layout/SchoolLayout';
import { USERS } from '../data/mockData';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { Construction } from 'lucide-react';

export function PlaceholderDashboard() {
  const { orgType, role, "*": subpath } = useParams<{ orgType: string; role: string; "*": string }>();

  // If we are in school org, we can render the app shell. Otherwise generic landing style.
  if (orgType === 'school' && (role === 'student' || role === 'teacher' || role === 'parent' || role === 'admin')) {
    const user = USERS[role as keyof typeof USERS];
    const pathName = subpath ? subpath.split('/')[0] : 'Feature';
    
    return (
      <SchoolLayout 
        role={role as any} 
        user={user}
        title={pathName.charAt(0).toUpperCase() + pathName.slice(1)}
      >
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <GlassCard className="p-12 max-w-md w-full flex flex-col items-center">
            <div className="w-16 h-16 bg-linkup-blue/10 rounded-full flex items-center justify-center mb-6 text-linkup-blue">
              <Construction size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 capitalize">
              {pathName} Module
            </h2>
            <p className="text-slate-600 mb-8">
              This detailed page is scheduled for development. You have successfully routed to the <span className="font-semibold text-slate-900 capitalize">{role}</span> portal.
            </p>
            <Link to={`/school/${role}`}>
              <Button>Back to Dashboard</Button>
            </Link>
          </GlassCard>
        </div>
      </SchoolLayout>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 pt-32 pb-20 text-center max-w-2xl">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-linkup-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🚧</span>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-4 capitalize">
            {orgType} {role} Dashboard
          </h1>
          
          <p className="text-slate-600 mb-8">
            This dashboard is scheduled for development in Phase 2. You have successfully authenticated and reached the correct route.
          </p>
          
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
