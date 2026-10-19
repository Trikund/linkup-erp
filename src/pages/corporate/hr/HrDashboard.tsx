import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { 
  Users, HeartHandshake, Briefcase, FileText, 
  Search, Filter, ChevronRight, CheckCircle2, Clock, 
  TrendingUp, Award, UserPlus, AlertCircle, ArrowUpRight, 
  Download, Calendar, ShieldCheck, PieChart, Sparkles, Check, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmployeeRecord {
  id: string;
  name: string;
  role: string;
  department: string;
  manager: string;
  location: string;
  status: 'Active' | 'On Leave' | 'Notice Period';
  joinDate: string;
  avatar: string;
}

export function HrDashboard() {
  const navigate = useNavigate();
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 'APP-01', type: 'Leave Exception', applicant: 'Rahul Sharma', detail: '3 days annual leave (Festival)', dept: 'Engineering', urgency: 'Normal' },
    { id: 'APP-02', type: 'Salary Increment', applicant: 'Vikram Malhotra', detail: 'Staff band merit review (+16%)', dept: 'Engineering', urgency: 'High' },
    { id: 'APP-03', type: 'Offer Letter', applicant: 'Meera Nair', detail: 'Lead SRE (CTC ₹44.0L)', dept: 'DevOps', urgency: 'Urgent' },
    { id: 'APP-04', type: 'Hardware Requisition', applicant: 'Sneha Roy', detail: 'Figma Wacom Tablet', dept: 'Design', urgency: 'Normal' }
  ]);

  const employees: EmployeeRecord[] = [
    { id: 'EMP-0428', name: 'Rahul Sharma', role: 'Senior Frontend Developer', department: 'Engineering', manager: 'Priya Mehta', location: 'Bengaluru HQ', status: 'Active', joinDate: 'Aug 2023', avatar: 'RS' },
    { id: 'EMP-0102', name: 'Priya Mehta', role: 'Engineering Manager (Pod 4)', department: 'Engineering', manager: 'Siddharth Mehta', location: 'Bengaluru HQ', status: 'Active', joinDate: 'Feb 2021', avatar: 'PM' },
    { id: 'EMP-0441', name: 'Vikram Malhotra', role: 'Senior Backend Engineer', department: 'Engineering', manager: 'Priya Mehta', location: 'Gurugram', status: 'Active', joinDate: 'Nov 2022', avatar: 'VM' },
    { id: 'EMP-0512', name: 'Sneha Roy', role: 'Senior Product Designer', department: 'Product Design', manager: 'Priya Mehta', location: 'Bengaluru HQ', status: 'Active', joinDate: 'May 2024', avatar: 'SR' },
    { id: 'EMP-0104', name: 'Anita Desai (You)', role: 'Lead HRBP', department: 'Human Resources', manager: 'Suresh Kumar', location: 'Bengaluru HQ', status: 'Active', joinDate: 'Jan 2022', avatar: 'AD' },
    { id: 'EMP-0589', name: 'Amit Kumar', role: 'Lead QA Automation', department: 'Engineering', manager: 'Priya Mehta', location: 'Bengaluru HQ', status: 'Active', joinDate: 'Oct 2023', avatar: 'AK' },
    { id: 'EMP-0012', name: 'Vikram Singh', role: 'VP Operations & Workplace', department: 'Operations', manager: 'Executive Admin', location: 'Mumbai HQ', status: 'Active', joinDate: 'Mar 2020', avatar: 'VS' },
    { id: 'EMP-0612', name: 'Rohan Das', role: 'Frontend Engineer II', department: 'Engineering', manager: 'Priya Mehta', location: 'Bengaluru HQ', status: 'Active', joinDate: 'Jan 2025', avatar: 'RD' }
  ];

  const handleApprove = (id: string) => {
    setPendingApprovals(prev => prev.filter(a => a.id !== id));
  };

  const handleDismiss = (id: string) => {
    setPendingApprovals(prev => prev.filter(a => a.id !== id));
  };

  const filteredEmployees = employees.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || e.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <CorporateLayout 
      role="hr" 
      user={user} 
      title="HR Operations & People Dashboard" 
      description="Workforce management, talent acquisition, payroll dispatch, and organizational health metrics."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Core Workforce & Directory' },
        { label: 'HR Dashboard' }
      ]}
    >
      <div className="space-y-6">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Employees</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">149</h3>
              <p className="text-xs text-blue-600 font-semibold mt-1">Across 8 Departments</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-sm">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Positions</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">8</h3>
              <p className="text-xs text-emerald-600 font-semibold mt-1">42 Candidates Active</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Joiners</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">3</h3>
              <p className="text-xs text-purple-600 font-semibold mt-1">Onboarded this month</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <HeartHandshake size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Approvals</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{pendingApprovals.length}</h3>
              <p className="text-xs text-amber-600 font-semibold mt-1">Payroll, Offers & Leaves</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText size={22} />
            </div>
          </div>
        </div>

        {/* Quick Launchpad Action Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Sparkles size={16} />
            </span>
            <span className="text-xs font-bold text-slate-800">HR Quick Launchpad:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => navigate('/corporate/hr/recruitment')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <UserPlus size={14} /> Post Requisition
            </button>
            <button 
              onClick={() => navigate('/corporate/hr/documents')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <FileText size={14} /> Generate Offer Letter
            </button>
            <button 
              onClick={() => navigate('/corporate/hr/payroll')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Clock size={14} /> Run Monthly Payroll
            </button>
            <button 
              onClick={() => navigate('/corporate/hr/onboarding')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <HeartHandshake size={14} /> Onboard Joiner
            </button>
          </div>
        </div>

        {/* Main Grid: Employee Directory Table + Recruitment Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Employee Directory Section (Left 2 Cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Recent Employee Records</h3>
                  <p className="text-xs text-slate-500">Active roster from Bengaluru, Gurugram & Remote hubs.</p>
                </div>
                <button 
                  onClick={() => navigate('/corporate/hr/employees')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 self-start sm:self-center"
                >
                  View All Directory <ChevronRight size={14} />
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                  <input 
                    type="text"
                    placeholder="Search by name, designation, department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 bg-white"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                  {['All', 'Engineering', 'Product Design', 'Human Resources', 'Operations'].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition whitespace-nowrap ${
                        selectedDept === dept 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-5">Employee</th>
                      <th className="py-3 px-5">Department</th>
                      <th className="py-3 px-5">Reporting Manager</th>
                      <th className="py-3 px-5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    {filteredEmployees.map((e) => (
                      <tr key={e.id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                              {e.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{e.name}</p>
                              <p className="text-[11px] text-slate-400">{e.role}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-5 font-semibold text-slate-800">{e.department}</td>
                        <td className="py-3 px-5 text-slate-600">{e.manager}</td>
                        <td className="py-3 px-5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {e.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
              <span>Showing {filteredEmployees.length} of 149 employees</span>
              <button 
                onClick={() => navigate('/corporate/hr/employees')}
                className="font-semibold text-blue-600 hover:underline"
              >
                Open Full Staff Directory
              </button>
            </div>
          </div>

          {/* Right Column: Recruitment Pipeline + Approvals */}
          <div className="space-y-6">
            {/* Recruitment Pipeline Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">Recruitment Pipeline</h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  8 Requisitions
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: 'Senior React Developer', stage: 'Interviews Stage', count: 4, dept: 'Engineering' },
                  { title: 'Product Manager (Core)', stage: 'Screening Stage', count: 12, dept: 'Product' },
                  { title: 'UX Designer & Tokens', stage: 'Offer Extended', count: 1, dept: 'Design' },
                  { title: 'Go Backend Lead (Microservices)', stage: 'Technical Round 2', count: 3, dept: 'Engineering' }
                ].map((job, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition">
                    <div>
                      <p className="text-xs font-bold text-slate-800">{job.title}</p>
                      <p className="text-[11px] text-slate-500">{job.stage} • {job.dept}</p>
                    </div>
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200 shadow-xs">
                      {job.count}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/corporate/hr/recruitment')}
                className="mt-4 w-full py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition flex items-center justify-center gap-1.5"
              >
                View Full ATS Pipeline <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Pending Approvals Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">HR Action Required</h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  {pendingApprovals.length} Due
                </span>
              </div>

              {pendingApprovals.length === 0 ? (
                <div className="text-center py-6 text-slate-400 text-xs">
                  All pending HR actions resolved!
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingApprovals.map((app) => (
                    <div key={app.id} className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-2">
                      <div className="flex-1 truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-800">{app.applicant}</span>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                            {app.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">{app.detail}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button 
                          onClick={() => handleDismiss(app.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200 transition"
                          title="Reject"
                        >
                          <X size={14} />
                        </button>
                        <button 
                          onClick={() => handleApprove(app.id)}
                          className="p-1.5 text-emerald-600 hover:text-white hover:bg-emerald-600 rounded-lg transition"
                          title="Authorize"
                        >
                          <Check size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Department Distribution Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Workforce Headcount by Department</h3>
              <p className="text-xs text-slate-500">149 Full-Time Employees across 8 operational units.</p>
            </div>
            <span className="text-xs font-semibold text-slate-600">Q4 FY26 Staffing Plan</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'Engineering', count: 68, color: 'border-l-4 border-blue-500' },
              { name: 'Sales & BD', count: 28, color: 'border-l-4 border-emerald-500' },
              { name: 'Operations', count: 20, color: 'border-l-4 border-purple-500' },
              { name: 'Product & Design', count: 16, color: 'border-l-4 border-amber-500' },
              { name: 'HR & People', count: 9, color: 'border-l-4 border-rose-500' },
              { name: 'Finance & Legal', count: 8, color: 'border-l-4 border-slate-500' }
            ].map((d, idx) => (
              <div key={idx} className={`p-3 bg-slate-50 rounded-xl border border-slate-200 ${d.color}`}>
                <p className="text-xs font-bold text-slate-700">{d.name}</p>
                <p className="text-lg font-black text-slate-900 mt-0.5">{d.count}</p>
                <p className="text-[10px] text-slate-400">Headcount</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}