import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Users, Search, Filter, Mail, Phone, MapPin, 
  CheckCircle2, Clock, Calendar, ShieldCheck, 
  Download, Plus, Building2, UserPlus, ChevronRight, X
} from 'lucide-react';

interface EmployeeItem {
  id: string;
  name: string;
  role: string;
  department: string;
  manager: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Notice Period';
  avatar: string;
}

export function HrEmployees() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeItem | null>(null);

  const employeeList: EmployeeItem[] = [
    { id: 'EMP-0428', name: 'Rahul Sharma', role: 'Senior Frontend Developer', department: 'Engineering', manager: 'Priya Mehta', email: 'rahul.sharma@linkupcorp.com', phone: '+91 98450 12041', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Aug 14, 2023', status: 'Active', avatar: 'RS' },
    { id: 'EMP-0102', name: 'Priya Mehta', role: 'Engineering Manager (Pod 4)', department: 'Engineering', manager: 'Siddharth Mehta', email: 'priya.mehta@linkupcorp.com', phone: '+91 98451 45892', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Feb 01, 2021', status: 'Active', avatar: 'PM' },
    { id: 'EMP-0441', name: 'Vikram Malhotra', role: 'Senior Backend Engineer', department: 'Engineering', manager: 'Priya Mehta', email: 'vikram.m@linkupcorp.com', phone: '+91 98110 34821', location: 'Gurugram Tech Center', joinDate: 'Nov 12, 2022', status: 'Active', avatar: 'VM' },
    { id: 'EMP-0512', name: 'Sneha Roy', role: 'Senior Product Designer', department: 'Product Design', manager: 'Priya Mehta', email: 'sneha.roy@linkupcorp.com', phone: '+91 98200 48192', location: 'Bengaluru HQ (Remote)', joinDate: 'May 02, 2024', status: 'Active', avatar: 'SR' },
    { id: 'EMP-0104', name: 'Anita Desai', role: 'Lead HRBP', department: 'Human Resources', manager: 'Suresh Kumar', email: 'anita.desai@linkupcorp.com', phone: '+91 99000 81290', location: 'Bengaluru HQ (Floor 2)', joinDate: 'Jan 10, 2022', status: 'Active', avatar: 'AD' },
    { id: 'EMP-0589', name: 'Amit Kumar', role: 'Lead QA Automation', department: 'Engineering', manager: 'Priya Mehta', email: 'amit.k@linkupcorp.com', phone: '+91 98452 74819', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Oct 05, 2023', status: 'Active', avatar: 'AK' },
    { id: 'EMP-0012', name: 'Vikram Singh', role: 'VP Operations & Workplace', department: 'Operations', manager: 'Executive Admin', email: 'vikram.singh@linkupcorp.com', phone: '+91 98210 11928', location: 'Mumbai HQ', joinDate: 'Mar 15, 2020', status: 'Active', avatar: 'VS' },
    { id: 'EMP-0612', name: 'Rohan Das', role: 'Frontend Engineer II', department: 'Engineering', manager: 'Priya Mehta', email: 'rohan.das@linkupcorp.com', phone: '+91 98459 34910', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Jan 08, 2025', status: 'Active', avatar: 'RD' },
    { id: 'EMP-0720', name: 'Neha Verma', role: 'Associate Software Engineer', department: 'Engineering', manager: 'Priya Mehta', email: 'neha.v@linkupcorp.com', phone: '+91 98458 12890', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Jul 10, 2025', status: 'Active', avatar: 'NV' },
    { id: 'EMP-0640', name: 'Siddharth Rao', role: 'DevOps & SRE', department: 'Engineering', manager: 'Priya Mehta', email: 'siddharth.r@linkupcorp.com', phone: '+91 98455 90123', location: 'Pune Tech Hub', joinDate: 'Sep 01, 2024', status: 'Active', avatar: 'SR' },
    { id: 'EMP-0688', name: 'Ananya Sen', role: 'Backend Engineer II', department: 'Engineering', manager: 'Priya Mehta', email: 'ananya.sen@linkupcorp.com', phone: '+91 98454 45678', location: 'Bengaluru HQ (Floor 4)', joinDate: 'Nov 15, 2024', status: 'On Leave', avatar: 'AS' },
    { id: 'EMP-0310', name: 'Kunal Kapoor', role: 'Senior Enterprise Sales Executive', department: 'Sales & BD', manager: 'Rajeev Nambiar', email: 'kunal.k@linkupcorp.com', phone: '+91 98100 89201', location: 'Delhi NCR Office', joinDate: 'Apr 18, 2023', status: 'Active', avatar: 'KK' }
  ];

  const filtered = employeeList.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'All' || e.department === deptFilter;
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Employee Directory & Workforce Database"
      description="Search, filter, and inspect detailed profiles for all 149 employees across LinkUpCorp offices."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Core Workforce & Directory' },
        { label: 'Employee Directory' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Overview Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Headcount</p>
              <h3 className="text-2xl font-bold text-slate-900">149 Employees</h3>
              <p className="text-xs text-blue-600 font-medium">100% active contracts</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Today</p>
              <h3 className="text-2xl font-bold text-slate-900">142 Present</h3>
              <p className="text-xs text-emerald-600 font-medium">7 on approved leave</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Office Locations</p>
              <h3 className="text-2xl font-bold text-slate-900">4 Hubs</h3>
              <p className="text-xs text-purple-600 font-medium">BLR, GGN, DEL, PUN</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">KYC & BG Check</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Verified</h3>
              <p className="text-xs text-amber-600 font-medium">Zero compliance gaps</p>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text"
              placeholder="Search by name, role, EMP ID, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product Design">Product Design</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Operations">Operations</option>
              <option value="Sales & BD">Sales & BD</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
              <option value="Notice Period">Notice Period</option>
            </select>

            <button 
              onClick={() => alert('Exporting full 149 employee roster CSV...')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>

        {/* Employee Roster Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Personnel Roster ({filtered.length} Displayed)</h3>
              <p className="text-xs text-slate-500">Click on any record to view comprehensive HR profile dossier.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">EMP ID & Name</th>
                  <th className="py-3 px-5">Role & Level</th>
                  <th className="py-3 px-5">Department</th>
                  <th className="py-3 px-5">Direct Manager</th>
                  <th className="py-3 px-5">Office Location</th>
                  <th className="py-3 px-5">Join Date</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {filtered.map((emp) => (
                  <tr 
                    key={emp.id} 
                    onClick={() => setSelectedEmployee(emp)}
                    className="hover:bg-slate-50/80 cursor-pointer transition"
                  >
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {emp.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{emp.name}</p>
                          <p className="text-[11px] font-mono text-slate-400">{emp.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5 font-semibold text-slate-800">{emp.role}</td>
                    <td className="py-3 px-5">{emp.department}</td>
                    <td className="py-3 px-5 text-slate-600">{emp.manager}</td>
                    <td className="py-3 px-5 text-slate-500">{emp.location}</td>
                    <td className="py-3 px-5 text-slate-500">{emp.joinDate}</td>
                    <td className="py-3 px-5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        emp.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        emp.status === 'On Leave' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-3 px-5 text-right">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedEmployee(emp); }}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-xs"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Employee Drawer Modal */}
        {selectedEmployee && (
          <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-base flex items-center justify-center shadow-md">
                    {selectedEmployee.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{selectedEmployee.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{selectedEmployee.id} • {selectedEmployee.role}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl">
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Department</span>
                    <span className="text-slate-800 font-bold">{selectedEmployee.department}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Direct Manager</span>
                    <span className="text-slate-800 font-bold">{selectedEmployee.manager}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Official Email</span>
                    <span className="text-blue-600 font-bold">{selectedEmployee.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Contact Number</span>
                    <span className="text-slate-800 font-bold">{selectedEmployee.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Base Location</span>
                    <span className="text-slate-800 font-bold">{selectedEmployee.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Employment Status</span>
                    <span className="text-emerald-700 font-bold">{selectedEmployee.status}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  Close
                </button>
                <button 
                  onClick={() => alert(`Opening HR letter generator for ${selectedEmployee.name}...`)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                >
                  Generate Letter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CorporateLayout>
  );
}
