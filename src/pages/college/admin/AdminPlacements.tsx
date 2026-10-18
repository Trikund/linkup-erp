import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Briefcase, TrendingUp, Award, Building, Download, 
  Plus, Search, Filter, CheckCircle2, Users, ExternalLink, Calendar
} from 'lucide-react';

interface CampusDrive {
  id: string;
  companyName: string;
  industry: string;
  roles: string;
  ctcOffered: string;
  eligibleBranches: string[];
  totalOffers: number;
  driveDate: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export function AdminPlacements() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const drives: CampusDrive[] = [
    {
      id: 'DRV-2026-01',
      companyName: 'CloudScale Technologies',
      industry: 'Cloud Infrastructure & AI',
      roles: 'Software Development Engineer - I',
      ctcOffered: '₹14.50 LPA',
      eligibleBranches: ['CSE', 'AIDS', 'ECE'],
      totalOffers: 28,
      driveDate: 'Sep 24, 2026',
      status: 'Completed'
    },
    {
      id: 'DRV-2026-02',
      companyName: 'Microsoft Corporation',
      industry: 'Big Tech / Enterprise',
      roles: 'Software Engineer (Azure Core)',
      ctcOffered: '₹44.00 LPA',
      eligibleBranches: ['CSE', 'AIDS'],
      totalOffers: 6,
      driveDate: 'Oct 02, 2026',
      status: 'Completed'
    },
    {
      id: 'DRV-2026-03',
      companyName: 'Deloitte USI',
      industry: 'Technology Consulting',
      roles: 'Analyst - Enterprise Technology',
      ctcOffered: '₹9.20 LPA',
      eligibleBranches: ['CSE', 'ECE', 'MBA', 'MCA'],
      totalOffers: 64,
      driveDate: 'Oct 14, 2026',
      status: 'Completed'
    },
    {
      id: 'DRV-2026-04',
      companyName: 'Amazon Web Services (AWS)',
      industry: 'Cloud & Systems',
      roles: 'Cloud Support Associate & SDE',
      ctcOffered: '₹22.00 LPA',
      eligibleBranches: ['CSE', 'AIDS'],
      totalOffers: 14,
      driveDate: 'Nov 05, 2026',
      status: 'In Progress'
    },
    {
      id: 'DRV-2026-05',
      companyName: 'Tata Consultancy Services (Digital)',
      industry: 'IT Services & Consulting',
      roles: 'Digital Innovator',
      ctcOffered: '₹7.50 LPA',
      eligibleBranches: ['All Engineering & MCA'],
      totalOffers: 110,
      driveDate: 'Nov 12, 2026',
      status: 'Upcoming'
    }
  ];

  const filteredDrives = drives.filter(d => {
    const matchesStatus = filterStatus === 'All' || d.status === filterStatus;
    const matchesSearch = d.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.roles.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Training & Placements (T&P)' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Training & Corporate Placement Directorate</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Batch of 2027 Active
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Campus recruitment seasons, corporate relations, mock interviews, and official NIRF CTC disclosures.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              NIRF Metric Report PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Plus className="w-4 h-4" />
              Register Campus Drive
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Placement Success</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">89.4%</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">1,296 / 1,450 Eligible Offers</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Highest Package</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><Award className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹44.0 LPA</div>
            <div className="mt-1 text-xs text-gray-500">Microsoft IDC (6 Students)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Average Campus CTC</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹9.42 LPA</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">CSE Avg: ₹12.80 LPA</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recruiting Companies</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Building className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">218 Partners</div>
            <div className="mt-1 text-xs text-gray-500">Tier-1 MNCs & Product firms</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by company, role offered, drive ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Drive Status:</span>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
        </div>

        {/* Drives Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Campus Recruitment Drives (Season 2026-27)</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredDrives.length} drives</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Drive Code</th>
                  <th className="py-3 px-4">Company & Industry</th>
                  <th className="py-3 px-4">Role Offered</th>
                  <th className="py-3 px-4">CTC Package</th>
                  <th className="py-3 px-4">Eligible Departments</th>
                  <th className="py-3 px-4">Offers Given</th>
                  <th className="py-3 px-4">Drive Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredDrives.map((d) => (
                  <tr key={d.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-gray-900">
                      {d.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{d.companyName}</div>
                      <div className="text-[11px] text-gray-500">{d.industry}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-800">
                      {d.roles}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#7c3aed]">
                      {d.ctcOffered}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {d.eligibleBranches.map((b, i) => (
                          <span key={i} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px] font-medium">
                            {b}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {d.totalOffers} Selected
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">
                      {d.driveDate}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        d.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : d.status === 'In Progress'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-purple-50 text-[#7c3aed] border border-purple-200'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2 py-1 text-xs font-semibold text-[#7c3aed] hover:bg-purple-50 rounded transition">
                        Offer Letters
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
