import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  BookOpen, Search, Filter, Plus, Download, 
  CheckCircle2, Clock, Award, FileText, ChevronRight, X, AlertCircle
} from 'lucide-react';

interface SubjectMaster {
  id: string;
  code: string;
  name: string;
  department: string;
  applicableClasses: string;
  hodName: string;
  periodsPerWeek: number;
  theoryMarks: number;
  practicalMarks: number;
  totalMarks: number;
  syllabusCovered: number;
  ncertBook: string;
}

const mockSubjects: SubjectMaster[] = [
  {
    id: 'SUB-041',
    code: '041',
    name: 'Mathematics (Standard)',
    department: 'Mathematics',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Mrs. Ananya Sharma',
    periodsPerWeek: 7,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    syllabusCovered: 68,
    ncertBook: 'NCERT Mathematics Class X',
  },
  {
    id: 'SUB-086',
    code: '086',
    name: 'Science (Physics, Chem, Bio)',
    department: 'Science',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Dr. Rajesh Sen',
    periodsPerWeek: 8,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    syllabusCovered: 72,
    ncertBook: 'NCERT Science Class X & Lab Manual',
  },
  {
    id: 'SUB-184',
    code: '184',
    name: 'English Language & Literature',
    department: 'English',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Ms. Pooja Nair',
    periodsPerWeek: 6,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    syllabusCovered: 75,
    ncertBook: 'First Flight & Footprints without Feet',
  },
  {
    id: 'SUB-087',
    code: '087',
    name: 'Social Science (Hist, Geog, Civics, Eco)',
    department: 'Social Science',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Mrs. Kavita Roy',
    periodsPerWeek: 6,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    syllabusCovered: 65,
    ncertBook: 'India & Contemporary World II, Democratic Politics',
  },
  {
    id: 'SUB-402',
    code: '402',
    name: 'Information Technology (Skill Subject)',
    department: 'Computer Science',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Mr. Amit Verma',
    periodsPerWeek: 4,
    theoryMarks: 50,
    practicalMarks: 50,
    totalMarks: 100,
    syllabusCovered: 80,
    ncertBook: 'CBSE IT Skill Manual & Python Lab Guide',
  },
  {
    id: 'SUB-042',
    code: '042',
    name: 'Physics (Senior Secondary)',
    department: 'Science',
    applicableClasses: 'Classes 11 & 12',
    hodName: 'Dr. Rajesh Sen',
    periodsPerWeek: 8,
    theoryMarks: 70,
    practicalMarks: 30,
    totalMarks: 100,
    syllabusCovered: 70,
    ncertBook: 'NCERT Physics Part 1 & 2',
  },
  {
    id: 'SUB-043',
    code: '043',
    name: 'Chemistry (Senior Secondary)',
    department: 'Science',
    applicableClasses: 'Classes 11 & 12',
    hodName: 'Mrs. Sunita Verma',
    periodsPerWeek: 8,
    theoryMarks: 70,
    practicalMarks: 30,
    totalMarks: 100,
    syllabusCovered: 66,
    ncertBook: 'NCERT Chemistry Part 1 & 2',
  },
  {
    id: 'SUB-085',
    code: '085',
    name: 'Hindi Course B',
    department: 'Languages',
    applicableClasses: 'Classes 9 & 10',
    hodName: 'Dr. R.K. Pandey',
    periodsPerWeek: 5,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    syllabusCovered: 74,
    ncertBook: 'Sparsh Bhag 2 & Sanchayan Bhag 2',
  },
];

export function AdminSubjects() {
  const user = USERS.admin;
  const [subjectsList, setSubjectsList] = useState<SubjectMaster[]>(mockSubjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredSubjects = subjectsList.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.hodName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = deptFilter === 'all' || s.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="CBSE Academic Subjects & Curriculum Catalog" 
      description="Official CBSE subject codes, weightages, textbook allocations, department heads, and syllabus progression."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Affiliated Subjects</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">28 Subjects</div>
            <div className="text-xs text-gray-500 mt-0.5">CBSE Secondary & Sr. Sec</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Average Syllabus Completed</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">72.4%</div>
            <div className="text-xs text-indigo-600 mt-0.5">Target: 80% by Mid-Nov</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Practical & Lab Subjects</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">16 Subjects</div>
            <div className="text-xs text-emerald-600 mt-0.5">With dedicated lab periods</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Skill / Vocational Pool</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">4 Courses</div>
            <div className="text-xs text-purple-600 mt-0.5">IT, AI, Financial Literacy</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search subject code (e.g. 041), name, or HOD..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
            >
              <option value="all">All Departments</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Social Science">Social Science</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Languages">Languages</option>
            </select>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Add Subject
            </button>
          </div>
        </div>

        {/* Subjects Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Subject Name</th>
                  <th className="py-3 px-4">CBSE Code</th>
                  <th className="py-3 px-4">Department & HOD</th>
                  <th className="py-3 px-4">Classes</th>
                  <th className="py-3 px-4">Marks Scheme (Theory + Internal)</th>
                  <th className="py-3 px-4">Weekly Load</th>
                  <th className="py-3 px-4">Syllabus Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filteredSubjects.map((sub) => (
                  <tr key={sub.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">{sub.name}</div>
                      <div className="text-[11px] text-gray-500 italic mt-0.5">{sub.ncertBook}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 text-sm">
                      {sub.code}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{sub.department}</div>
                      <div className="text-[11px] text-gray-500">HOD: {sub.hodName}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-700 font-medium">
                      {sub.applicableClasses}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">{sub.theoryMarks} Th + {sub.practicalMarks} Int = {sub.totalMarks} Marks</div>
                      <div className="text-[10px] text-gray-400">CBSE Assessment Scheme</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {sub.periodsPerWeek} Periods
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{sub.syllabusCovered}%</span>
                        <div className="w-16 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${sub.syllabusCovered}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Subject Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Add Subject to Curriculum Master</h3>
                <p className="text-xs text-indigo-200">CBSE Affiliation #2130842</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAddModalOpen(false);
                alert('New subject registered in academic curriculum master.');
              }}
              className="p-5 space-y-4 text-xs"
            >
              <div className="space-y-1">
                <label className="font-bold text-gray-700">Subject Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Artificial Intelligence (Skill)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">CBSE Subject Code</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 417"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs">
                    <option>Computer Science & IT</option>
                    <option>Science</option>
                    <option>Mathematics</option>
                    <option>Commerce</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Theory Marks</label>
                  <input
                    type="number"
                    defaultValue={50}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Practical Marks</label>
                  <input
                    type="number"
                    defaultValue={50}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Save Subject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
