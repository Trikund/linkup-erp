import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Award, TrendingUp, CheckCircle2, Download, Search, 
  Filter, FileCheck, Share2, AlertCircle, RefreshCw, Eye
} from 'lucide-react';

interface TabulationBatch {
  batchId: string;
  program: string;
  semester: string;
  department: string;
  enrolledStudents: number;
  passPercentage: number;
  averageSgpa: number;
  moderationStatus: 'Approved by Senate' | 'Pending Review' | 'Draft';
  digiLockerSynced: boolean;
  publishedDate: string;
}

export function AdminResults() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const batches: TabulationBatch[] = [
    {
      batchId: 'TR-2026-CSE7',
      program: 'B.Tech Computer Science & Engineering',
      semester: 'Semester 7 (Final Year)',
      department: 'Computer Science',
      enrolledStudents: 320,
      passPercentage: 96.8,
      averageSgpa: 8.34,
      moderationStatus: 'Approved by Senate',
      digiLockerSynced: true,
      publishedDate: 'Oct 14, 2026'
    },
    {
      batchId: 'TR-2026-AIDS5',
      program: 'B.Tech AI & Data Science',
      semester: 'Semester 5 (3rd Year)',
      department: 'Artificial Intelligence',
      enrolledStudents: 180,
      passPercentage: 94.2,
      averageSgpa: 8.18,
      moderationStatus: 'Approved by Senate',
      digiLockerSynced: true,
      publishedDate: 'Oct 12, 2026'
    },
    {
      batchId: 'TR-2026-MBA3',
      program: 'Master of Business Administration (MBA)',
      semester: 'Semester 3 (2nd Year)',
      department: 'Management Studies',
      enrolledStudents: 240,
      passPercentage: 98.4,
      averageSgpa: 8.52,
      moderationStatus: 'Approved by Senate',
      digiLockerSynced: true,
      publishedDate: 'Oct 10, 2026'
    },
    {
      batchId: 'TR-2026-ECE5',
      program: 'B.Tech Electronics & Communication',
      semester: 'Semester 5 (3rd Year)',
      department: 'Electronics',
      enrolledStudents: 210,
      passPercentage: 91.5,
      averageSgpa: 7.82,
      moderationStatus: 'Pending Review',
      digiLockerSynced: false,
      publishedDate: 'Pending Senate'
    },
    {
      batchId: 'TR-2026-MCA3',
      program: 'Master of Computer Applications (MCA)',
      semester: 'Semester 3 (2nd Year)',
      department: 'Computer Science',
      enrolledStudents: 120,
      passPercentage: 95.0,
      averageSgpa: 8.21,
      moderationStatus: 'Approved by Senate',
      digiLockerSynced: true,
      publishedDate: 'Oct 08, 2026'
    }
  ];

  const filteredBatches = batches.filter(batch => {
    const matchesDept = filterDepartment === 'All' || batch.department.includes(filterDepartment);
    const matchesSearch = batch.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          batch.batchId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          batch.semester.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Grading & Transcripts' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <Award className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Grading, Tabulation & DigiLocker Transcripts</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ABC (NAD) Compliant
              </span>
            </div>
            <p className="text-sm text-gray-500">
              University results tabulation register (TR), relative grading curves, credit bank uploads, and verifiable digital certificates.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <RefreshCw className="w-4 h-4 text-gray-500" />
              Sync ABC / DigiLocker
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Award className="w-4 h-4" />
              Generate Tabulation Register
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Overall Pass Ratio</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">95.4%</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">↑ +1.8% over previous semester</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Campus Avg SGPA</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">8.24 / 10</div>
            <div className="mt-1 text-xs text-gray-500">Relative 10-point UGC schema</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">DigiLocker Pushed</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Share2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">11,840 Students</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">NAD/ABC IDs verified</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Grade Moderation</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><FileCheck className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Senate Approved</div>
            <div className="mt-1 text-xs text-gray-500">Meeting #48 dated Oct 12, 2026</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by program, batch code, semester..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Dept:</span>
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Management Studies">Management Studies</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
        </div>

        {/* Results Tabulation Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Program-wise Tabulation Registers (TR)</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredBatches.length} records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Register ID</th>
                  <th className="py-3 px-4">Degree Program & Semester</th>
                  <th className="py-3 px-4">Enrolled</th>
                  <th className="py-3 px-4">Pass Rate</th>
                  <th className="py-3 px-4">Batch SGPA</th>
                  <th className="py-3 px-4">Moderation Status</th>
                  <th className="py-3 px-4">DigiLocker / ABC</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredBatches.map((batch) => (
                  <tr key={batch.batchId} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-gray-900">
                      {batch.batchId}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{batch.program}</div>
                      <div className="text-[11px] text-gray-500">{batch.semester}</div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      {batch.enrolledStudents}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-600">
                        {batch.passPercentage}%
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#7c3aed]">
                      {batch.averageSgpa} / 10
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        batch.moderationStatus === 'Approved by Senate'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {batch.moderationStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {batch.digiLockerSynced ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Synced
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-400">
                          <AlertCircle className="w-3.5 h-3.5" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition" title="View Grade Distribution">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded text-[#7c3aed] transition" title="Download Official TR PDF">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
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
