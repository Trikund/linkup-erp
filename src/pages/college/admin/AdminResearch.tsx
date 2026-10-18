import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookMarked, Award, Lightbulb, FileText, Download, 
  Plus, Search, Filter, CheckCircle2, ExternalLink, Rocket
} from 'lucide-react';

interface ResearchGrant {
  projectCode: string;
  title: string;
  principalInvestigator: string;
  department: string;
  fundingAgency: string;
  grantAmount: string;
  duration: string;
  status: 'Ongoing' | 'Under Review' | 'Completed';
}

export function AdminResearch() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAgency, setFilterAgency] = useState('All');

  const grants: ResearchGrant[] = [
    {
      projectCode: 'DST-SERB-2025-019',
      title: 'Federated Edge Learning for Privacy-Preserving Smart Healthcare IoT Networks',
      principalInvestigator: 'Dr. Ankit Sharma (HOD CSE)',
      department: 'Computer Science & Engineering',
      fundingAgency: 'DST - SERB (Govt. of India)',
      grantAmount: '₹54,00,000',
      duration: '2025 - 2028 (3 Years)',
      status: 'Ongoing'
    },
    {
      projectCode: 'MEITY-AI-2025-104',
      title: 'Multimodal Generative Models for Indic Language Speech & Script Translation',
      principalInvestigator: 'Dr. Meenakshi Sundaram',
      department: 'AI & Data Science',
      fundingAgency: 'MeitY (Digital India Bhashini)',
      grantAmount: '₹78,50,000',
      duration: '2025 - 2027 (2 Years)',
      status: 'Ongoing'
    },
    {
      projectCode: 'AICTE-RPS-2026-08',
      title: 'Gallium Nitride (GaN) Power Devices for High-Efficiency Electric Powertrains',
      principalInvestigator: 'Dr. R. Ramanathan',
      department: 'Electronics & Communication',
      fundingAgency: 'AICTE Research Promotion Scheme',
      grantAmount: '₹32,00,000',
      duration: '2026 - 2028 (2 Years)',
      status: 'Ongoing'
    },
    {
      projectCode: 'IND-CS-2026-44',
      title: 'Autonomous Mobile Robot Fleet Routing for High-Density Warehouses',
      principalInvestigator: 'Dr. Rajesh Deshpande',
      department: 'Mechanical & Robotics',
      fundingAgency: 'Tata Motors Industry Consultancy',
      grantAmount: '₹42,00,000',
      duration: '2026 - 2027 (18 Months)',
      status: 'Ongoing'
    },
    {
      projectCode: 'ICSSR-MGT-2025-12',
      title: 'Digital Financial Inclusion & UPI Adoption Metrics Across Rural MSMEs',
      principalInvestigator: 'Dr. S. K. Mittal',
      department: 'Management Studies',
      fundingAgency: 'ICSSR National Fellowship',
      grantAmount: '₹18,00,000',
      duration: '2025 - 2026 (Completed)',
      status: 'Completed'
    }
  ];

  const filteredGrants = grants.filter(g => {
    const matchesAgency = filterAgency === 'All' || g.fundingAgency.includes(filterAgency);
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.principalInvestigator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.projectCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAgency && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Research & Innovation' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <BookMarked className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Research, Innovation & Incubation Directorate</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                DST & AICTE Sponsored
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Government funded sponsored projects, patent filings, Scopus indexed publications, and startup venture incubators.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              R&D Annual Dossier PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Plus className="w-4 h-4" />
              Register Sponsored Project
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Sponsored Grants</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Award className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹3.80 Cr</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">18 Active Funded Grants</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Patents Portfolio</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><Lightbulb className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">42 Filed</div>
            <div className="mt-1 text-xs text-gray-500">16 Granted by Indian Patent Office</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Scopus / SCI Papers</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">348 Papers</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">H-index: 44 | Citations: 4,890</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Incubator Startups</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Rocket className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">18 Startups</div>
            <div className="mt-1 text-xs text-gray-500">₹1.8 Cr seed funding raised</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by project code, title, investigator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Agency:</span>
            </div>
            <select
              value={filterAgency}
              onChange={(e) => setFilterAgency(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Agencies</option>
              <option value="DST">DST - SERB</option>
              <option value="MeitY">MeitY</option>
              <option value="AICTE">AICTE RPS</option>
              <option value="Industry">Industry</option>
            </select>
          </div>
        </div>

        {/* Grants Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Government & Sponsored Research Projects</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredGrants.length} projects</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Project ID</th>
                  <th className="py-3 px-4">Research Proposal Title</th>
                  <th className="py-3 px-4">Principal Investigator (PI)</th>
                  <th className="py-3 px-4">Funding Body</th>
                  <th className="py-3 px-4">Sanctioned Grant</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredGrants.map((g) => (
                  <tr key={g.projectCode} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-gray-900">
                      {g.projectCode}
                    </td>
                    <td className="py-3.5 px-4 max-w-md">
                      <div className="font-semibold text-gray-900 line-clamp-2">{g.title}</div>
                      <div className="text-[11px] text-gray-500">{g.department}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-800">
                      {g.principalInvestigator}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-700">
                      {g.fundingAgency}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">
                      {g.grantAmount}
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">
                      {g.duration}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        g.status === 'Ongoing'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {g.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2 py-1 text-xs font-semibold text-[#7c3aed] hover:bg-purple-50 rounded transition">
                        UC Report
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
