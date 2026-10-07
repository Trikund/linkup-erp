import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_CHILDREN } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { Button } from '../../../components/common/Button';
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';

export function AdminStudents() {
  const user = USERS.admin;

  return (
    <SchoolLayout role="admin" user={user} title="Students Management" description="Manage and monitor all enrolled students.">
      <GlassCard className="p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-linkup-blue"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg flex items-center gap-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={16} />
            Filters
          </button>
        </div>
        <Button className="w-full sm:w-auto flex items-center gap-2">
          <Plus size={16} />
          Add Student
        </Button>
      </GlassCard>

      <GlassCard className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50 text-slate-500 font-medium">
              <th className="p-4">Student</th>
              <th className="p-4">Class</th>
              <th className="p-4">Parent</th>
              <th className="p-4">Attendance</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_CHILDREN.map((child, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linkup-blue/10 flex items-center justify-center font-bold text-linkup-blue">
                      {child.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{child.name}</p>
                      <p className="text-xs text-slate-500">ID: STU{202600 + idx}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-slate-700">{child.class}</td>
                <td className="p-4 text-slate-600">Priya Sharma</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-linkup-blue" style={{ width: `${child.attendance}%` }} />
                    </div>
                    <span className="text-xs font-medium text-slate-700">{child.attendance}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">Active</span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination mock */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
          <p>Showing 1 to 2 of 2480 entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-linkup-blue text-white rounded">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">Next</button>
          </div>
        </div>
      </GlassCard>
    </SchoolLayout>
  );
}
