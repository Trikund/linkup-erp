import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Building2, Search, Filter, Mail, MapPin, 
  Award, Heart, Sparkles, Plus, ExternalLink
} from 'lucide-react';

interface DirectoryPerson {
  id: string;
  name: string;
  department: string;
  title: string;
  email: string;
  location: string;
  avatarInitials: string;
}

export function EmployeeDirectory() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDept, setFilterDept] = useState('All');

  const staff: DirectoryPerson[] = [
    { id: 'EMP-0012', name: 'Aakash Singhania', department: 'Leadership', title: 'Chief Executive Officer (CEO)', email: 'aakash@linkupcorp.com', location: 'San Francisco HQ', avatarInitials: 'AS' },
    { id: 'EMP-0034', name: 'Rohini Sen', department: 'Leadership', title: 'Chief Technology Officer (CTO)', email: 'rohini.sen@linkupcorp.com', location: 'Bengaluru HQ', avatarInitials: 'RS' },
    { id: 'EMP-0102', name: 'Siddharth Mehta', department: 'Engineering', title: 'VP Engineering & Architecture', email: 'siddharth.m@linkupcorp.com', location: 'Bengaluru HQ', avatarInitials: 'SM' },
    { id: 'EMP-0428', name: 'Rahul Sharma', department: 'Engineering', title: 'Senior Frontend Developer', email: 'rahul.sharma@linkupcorp.com', location: 'Bengaluru HQ', avatarInitials: 'RS' },
    { id: 'EMP-0318', name: 'Priya Venkatesh', department: 'Engineering', title: 'Tech Lead - Frontend Core', email: 'priya.v@linkupcorp.com', location: 'Bengaluru HQ', avatarInitials: 'PV' },
    { id: 'EMP-0219', name: 'Tanya Kapoor', department: 'Human Resources', title: 'Director - Global People Operations', email: 'tanya.k@linkupcorp.com', location: 'Gurugram Tech Center', avatarInitials: 'TK' },
    { id: 'EMP-0512', name: 'Sneha Roy', department: 'Product & Design', title: 'Senior Product Designer (UI/UX)', email: 'sneha.roy@linkupcorp.com', location: 'Bengaluru HQ', avatarInitials: 'SR' },
    { id: 'EMP-0610', name: 'Karthik Raja', department: 'Finance', title: 'Head of Corporate Financial Planning', email: 'karthik.r@linkupcorp.com', location: 'Singapore Office', avatarInitials: 'KR' }
  ];

  const filteredStaff = staff.filter(s => {
    const matchesDept = filterDept === 'All' || s.department === filterDept;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Company Directory"
      description="Connect with all 480 global LinkUpCorp team members across engineering, product, and operations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Organization & Culture' },
        { label: 'Company Directory' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                <Building2 size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Global Employee Directory</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
                480 Active Employees
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Find colleagues by name, technical domain, department, or office campus.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Heart size={14} />
            Give Peer Kudos Award
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, role, email, office city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Filter size={14} />
              <span>Dept:</span>
            </div>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-slate-700"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Leadership">Leadership</option>
              <option value="Product & Design">Product & Design</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredStaff.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center mx-auto shadow-sm border border-slate-200">
                  {p.avatarInitials}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-3">{p.name}</h3>
                <p className="text-xs text-blue-600 font-semibold">{p.title}</p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 mt-2">
                  {p.department}
                </span>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 text-left">
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail size={12} className="text-slate-400 shrink-0" />
                    <span className="truncate">{p.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-slate-400 shrink-0" />
                    <span className="truncate">{p.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2">
                <a href={`mailto:${p.email}`} className="text-xs font-bold text-blue-600 hover:underline">
                  Send Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
