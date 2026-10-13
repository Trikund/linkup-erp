import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Activity, Award, TrendingUp, CheckCircle2, Star, 
  BarChart3, Download, Users, ChevronRight, X, ShieldCheck
} from 'lucide-react';

interface DepartmentKPI {
  department: string;
  hod: string;
  facultyCount: number;
  averageScore: number;
  syllabusCovered: number;
  topScorerPercent: number;
  status: 'Exceeding Target' | 'On Track';
}

const mockDepartments: DepartmentKPI[] = [
  { department: 'Mathematics (041)', hod: 'Mrs. Ananya Sharma', facultyCount: 14, averageScore: 82.5, syllabusCovered: 78, topScorerPercent: 34, status: 'Exceeding Target' },
  { department: 'Science & Labs (086)', hod: 'Dr. Rajesh Sen', facultyCount: 16, averageScore: 84.1, syllabusCovered: 82, topScorerPercent: 38, status: 'Exceeding Target' },
  { department: 'English & Literature (184)', hod: 'Mrs. Kavita Roy', facultyCount: 12, averageScore: 86.4, syllabusCovered: 80, topScorerPercent: 42, status: 'Exceeding Target' },
  { department: 'Social Sciences (087)', hod: 'Mr. B.K. Ghosh', facultyCount: 10, averageScore: 81.2, syllabusCovered: 75, topScorerPercent: 29, status: 'On Track' },
  { department: 'Information Tech & AI (402)', hod: 'Mr. Amit Verma', facultyCount: 8, averageScore: 89.6, syllabusCovered: 85, topScorerPercent: 48, status: 'Exceeding Target' },
  { department: 'Hindi Language & Lit (002)', hod: 'Dr. Shashi Bhushan', facultyCount: 10, averageScore: 83.0, syllabusCovered: 76, topScorerPercent: 31, status: 'On Track' },
];

interface FacultyAppraisal {
  id: string;
  teacherName: string;
  designation: string;
  department: string;
  studentPassRate: number;
  parentRating: number;
  cpdHours: number;
  ratingBand: 'Exceptional (A+)' | 'Outstanding (A)' | 'Exceeds Standards';
}

const mockAppraisals: FacultyAppraisal[] = [
  { id: 'FAC-01', teacherName: 'Mrs. Ananya Sharma', designation: 'PGT Mathematics', department: 'Mathematics', studentPassRate: 100, parentRating: 4.9, cpdHours: 54, ratingBand: 'Exceptional (A+)' },
  { id: 'FAC-02', teacherName: 'Dr. Rajesh Sen', designation: 'PGT Physics', department: 'Science', studentPassRate: 98.6, parentRating: 4.8, cpdHours: 52, ratingBand: 'Exceptional (A+)' },
  { id: 'FAC-03', teacherName: 'Mrs. Neha Batra', designation: 'TGT Science', department: 'Science', studentPassRate: 97.4, parentRating: 4.7, cpdHours: 50, ratingBand: 'Outstanding (A)' },
  { id: 'FAC-04', teacherName: 'Mrs. Kavita Roy', designation: 'PGT English', department: 'English', studentPassRate: 99.2, parentRating: 4.9, cpdHours: 56, ratingBand: 'Exceptional (A+)' },
  { id: 'FAC-05', teacherName: 'Mr. Amit Verma', designation: 'PGT Computer Science', department: 'Information Tech', studentPassRate: 100, parentRating: 4.9, cpdHours: 60, ratingBand: 'Exceptional (A+)' },
];

export function AdminPerformance() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'departments' | 'appraisals' | 'sqaa'>('departments');

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Institutional KPIs & CBSE SQAA Framework" 
      description="Greenfield Senior Secondary School • School Quality Assessment & Assurance Benchmark"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">CBSE SQAA Score</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">92.4 / 100</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Exemplary</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">School Quality Assessment & Assurance Gold Band</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Curriculum Progression</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <TrendingUp size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-600">79.2%</span>
              <span className="text-xs font-medium text-emerald-600">+3.1% ahead of schedule</span>
            </div>
            <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '79.2%' }}></div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Parent Satisfaction (PTM)</span>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Star size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-600">4.84 / 5.0</span>
              <span className="text-xs font-semibold text-slate-500">2,120 Reviews</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Academic rigor, safety & extracurriculars rated</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Faculty CPD Training</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <Award size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-600">52.8 Hrs</span>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">CBSE Req: 50h</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">100% of teachers exceeded mandatory 50h training</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'departments'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Academic Departments ({mockDepartments.length})
            </button>
            <button
              onClick={() => setActiveTab('appraisals')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'appraisals'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Faculty Performance Appraisal Matrix
            </button>
            <button
              onClick={() => setActiveTab('sqaa')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'sqaa'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              CBSE SQAA 7-Domain Assessment
            </button>
          </div>

          <button 
            onClick={() => alert('Downloading official SQAA Self-Assessment Portfolio (CBSE Format)...')}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-slate-800 transition-colors"
          >
            <Download size={15} /> Export SQAA Dossier
          </button>
        </div>

        {/* Tab 1: Departments */}
        {activeTab === 'departments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDepartments.map((dept) => (
              <div key={dept.department} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{dept.department}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">HOD: <strong className="text-slate-700">{dept.hod}</strong></p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    {dept.status}
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between items-center">
                    <span>Average Class Score:</span>
                    <strong className="text-slate-900 text-sm">{dept.averageScore}%</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Students Scoring 90%+:</span>
                    <strong className="text-blue-600">{dept.topScorerPercent}% of batch</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Faculty Strength:</span>
                    <strong className="text-slate-700">{dept.facultyCount} Teachers</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-500">
                      <span>Syllabus Completed:</span>
                      <span>{dept.syllabusCovered}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${dept.syllabusCovered}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Appraisals */}
        {activeTab === 'appraisals' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4">Faculty Annual Appraisal & Feedback Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Faculty Member</th>
                    <th className="py-3 px-4">Cadre & Dept</th>
                    <th className="py-3 px-4">Student Board Pass %</th>
                    <th className="py-3 px-4">Parent PTM Rating</th>
                    <th className="py-3 px-4">CPD Training Hours</th>
                    <th className="py-3 px-4">Appraisal Band</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockAppraisals.map((fac) => (
                    <tr key={fac.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{fac.teacherName}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        <div>{fac.designation}</div>
                        <div className="text-slate-400">{fac.department}</div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-emerald-600">{fac.studentPassRate}%</td>
                      <td className="py-3.5 px-4">
                        <span className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                          <Star size={13} fill="currentColor" /> {fac.parentRating} / 5.0
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{fac.cpdHours} Hours</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                          {fac.ratingBand}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: SQAA */}
        {activeTab === 'sqaa' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800">CBSE School Quality Assessment and Assurance (SQAA) 7 Domains</h3>
            <p className="text-xs text-slate-500">Evaluated against national standards prescribed under National Education Policy (NEP) 2020</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">Domain 1: Curriculum, Pedagogy & Assessment</span>
                  <span className="text-emerald-700">94 / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">Domain 2: Infrastructure & Learning Resources</span>
                  <span className="text-emerald-700">96 / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">Domain 3: Human Resources & Teacher Quality</span>
                  <span className="text-emerald-700">91 / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '91%' }}></div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">Domain 4: Inclusive Practices & Child Protection</span>
                  <span className="text-emerald-700">95 / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
