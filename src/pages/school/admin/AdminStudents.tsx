import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  GraduationCap, Search, Filter, Plus, Download, Eye, 
  Edit3, Trash2, CheckCircle2, AlertTriangle, Phone, Mail, 
  ChevronRight, Users, Award, Bus, X, FileText, Printer
} from 'lucide-react';

interface StudentRecord {
  id: string;
  admNo: string;
  cbsePin: string;
  name: string;
  roll: number;
  class: string;
  section: string;
  house: string;
  gender: 'Male' | 'Female';
  parentName: string;
  parentPhone: string;
  attendancePct: number;
  feeStatus: 'Cleared' | 'Pending Q3' | 'Defaulter';
  busRoute: string;
  status: 'Active' | 'On Leave' | 'TC Pending';
}

const mockStudentRegistry: StudentRecord[] = [
  {
    id: 'STU-1042',
    admNo: 'DPS/2021/1042',
    cbsePin: 'CBSE-DEL-91827',
    name: 'Rahul Sharma',
    roll: 14,
    class: '10',
    section: 'A',
    house: 'Tagore (Red)',
    gender: 'Male',
    parentName: 'Mrs. Priya Sharma',
    parentPhone: '+91 98765 43210',
    attendancePct: 92.4,
    feeStatus: 'Cleared',
    busRoute: 'Route #14',
    status: 'Active',
  },
  {
    id: 'STU-3192',
    admNo: 'DPS/2024/3192',
    cbsePin: 'CBSE-DEL-41092',
    name: 'Ananya Sharma',
    roll: 8,
    class: '7',
    section: 'B',
    house: 'Gandhi (Green)',
    gender: 'Female',
    parentName: 'Mrs. Priya Sharma',
    parentPhone: '+91 98765 43210',
    attendancePct: 96.2,
    feeStatus: 'Cleared',
    busRoute: 'Route #14',
    status: 'Active',
  },
  {
    id: 'STU-1043',
    admNo: 'DPS/2021/1043',
    cbsePin: 'CBSE-DEL-91828',
    name: 'Aarav Gupta',
    roll: 1,
    class: '10',
    section: 'A',
    house: 'Nehru (Yellow)',
    gender: 'Male',
    parentName: 'Dr. Sameer Gupta',
    parentPhone: '+91 98112 44321',
    attendancePct: 98.0,
    feeStatus: 'Cleared',
    busRoute: 'Route #08',
    status: 'Active',
  },
  {
    id: 'STU-1044',
    admNo: 'DPS/2021/1044',
    cbsePin: 'CBSE-DEL-91829',
    name: 'Diya Patel',
    roll: 12,
    class: '10',
    section: 'A',
    house: 'Bose (Blue)',
    gender: 'Female',
    parentName: 'Mrs. Neeta Patel',
    parentPhone: '+91 98223 55432',
    attendancePct: 89.5,
    feeStatus: 'Pending Q3',
    busRoute: 'Route #14',
    status: 'Active',
  },
  {
    id: 'STU-2051',
    admNo: 'DPS/2022/2051',
    cbsePin: 'CBSE-DEL-77401',
    name: 'Kabir Verma',
    roll: 22,
    class: '11',
    section: 'PCM',
    house: 'Tagore (Red)',
    gender: 'Male',
    parentName: 'Mr. Arvind Verma',
    parentPhone: '+91 98334 66543',
    attendancePct: 84.0,
    feeStatus: 'Pending Q3',
    busRoute: 'Route #21',
    status: 'Active',
  },
  {
    id: 'STU-1892',
    admNo: 'DPS/2022/1892',
    cbsePin: 'CBSE-DEL-66291',
    name: 'Ishita Sen',
    roll: 15,
    class: '9',
    section: 'C',
    house: 'Gandhi (Green)',
    gender: 'Female',
    parentName: 'Mrs. Rohini Sen',
    parentPhone: '+91 98445 77654',
    attendancePct: 94.5,
    feeStatus: 'Cleared',
    busRoute: 'Self-Commute',
    status: 'Active',
  },
  {
    id: 'STU-1540',
    admNo: 'DPS/2023/1540',
    cbsePin: 'CBSE-DEL-55102',
    name: 'Rohan Mehra',
    roll: 19,
    class: '8',
    section: 'A',
    house: 'Bose (Blue)',
    gender: 'Male',
    parentName: 'Mr. Deepak Mehra',
    parentPhone: '+91 98556 88765',
    attendancePct: 91.2,
    feeStatus: 'Cleared',
    busRoute: 'Route #08',
    status: 'Active',
  },
  {
    id: 'STU-2980',
    admNo: 'DPS/2025/2980',
    cbsePin: 'CBSE-DEL-33819',
    name: 'Sanya Kapoor',
    roll: 28,
    class: '6',
    section: 'B',
    house: 'Nehru (Yellow)',
    gender: 'Female',
    parentName: 'Dr. Vivek Kapoor',
    parentPhone: '+91 98667 99876',
    attendancePct: 97.5,
    feeStatus: 'Cleared',
    busRoute: 'Route #14',
    status: 'Active',
  },
];

export function AdminStudents() {
  const user = USERS.admin;
  const [students, setStudents] = useState<StudentRecord[]>(mockStudentRegistry);
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form state for Add Student
  const [formData, setFormData] = useState({
    name: '',
    class: '10',
    section: 'A',
    gender: 'Male' as 'Male' | 'Female',
    parentName: '',
    parentPhone: '',
    house: 'Tagore (Red)',
    busRoute: 'Route #14',
  });

  const filteredStudents = students.filter((stu) => {
    const matchesSearch =
      stu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stu.admNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stu.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stu.cbsePin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === 'all' || stu.class === classFilter;
    const matchesStatus = statusFilter === 'all' || stu.status === statusFilter;
    return matchesSearch && matchesClass && matchesStatus;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: StudentRecord = {
      id: `STU-${Math.floor(4000 + Math.random() * 5000)}`,
      admNo: `DPS/2026/${Math.floor(4000 + Math.random() * 1000)}`,
      cbsePin: `CBSE-DEL-${Math.floor(10000 + Math.random() * 90000)}`,
      name: formData.name,
      roll: students.length + 1,
      class: formData.class,
      section: formData.section,
      house: formData.house,
      gender: formData.gender,
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      attendancePct: 100.0,
      feeStatus: 'Pending Q3',
      busRoute: formData.busRoute,
      status: 'Active',
    };
    setStudents([newEntry, ...students]);
    setIsAddModalOpen(false);
    setFormData({
      name: '',
      class: '10',
      section: 'A',
      gender: 'Male',
      parentName: '',
      parentPhone: '',
      house: 'Tagore (Red)',
      busRoute: 'Route #14',
    });
    alert(`Student ${newEntry.name} enrolled with Admission No: ${newEntry.admNo}`);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Student Master Database & Enrollment" 
      description="Manage comprehensive student permanent records, CBSE registration numbers, class allocations, and attendance compliance."
    >
      <div className="space-y-6">
        {/* Top KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Enrolled</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">2,480 Students</div>
            <div className="text-xs text-gray-500 mt-0.5">Classes Nursery to XII</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Gender Demographics</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">1,290 B • 1,190 G</div>
            <div className="text-xs text-indigo-600 mt-0.5">52% Boys • 48% Girls</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">CBSE Board Batches</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">635 Candidates</div>
            <div className="text-xs text-emerald-600 mt-0.5">Classes 10 & 12 Registered</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Merit & RTE Scholars</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">142 Students</div>
            <div className="text-xs text-purple-600 mt-0.5">Tuition Waiver Approved</div>
          </div>
        </div>

        {/* Action, Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, admission no, or CBSE PIN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
              >
                <option value="all">All Classes</option>
                <option value="10">Class 10</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="11">Class 11</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="TC Pending">TC Pending</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end lg:self-auto">
            <button
              onClick={() => alert('Exporting full 2,480 Student Master Registry to Excel / CSV format')}
              className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Add Student Admission
            </button>
          </div>
        </div>

        {/* Master Students Registry Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Student & Roll</th>
                  <th className="py-3 px-4">Admission No & CBSE PIN</th>
                  <th className="py-3 px-4">Class & House</th>
                  <th className="py-3 px-4">Parent & Contact</th>
                  <th className="py-3 px-4">Attendance</th>
                  <th className="py-3 px-4">Q3 Fee Status</th>
                  <th className="py-3 px-4">Transport</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filteredStudents.map((stu) => (
                  <tr key={stu.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {stu.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{stu.name}</div>
                          <div className="text-[11px] text-gray-500">Roll #{stu.roll} • {stu.gender}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono">
                      <div className="font-bold text-indigo-700">{stu.admNo}</div>
                      <div className="text-[11px] text-gray-400">{stu.cbsePin}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">Class {stu.class}-{stu.section}</div>
                      <div className="text-[11px] text-gray-500">{stu.house}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{stu.parentName}</div>
                      <div className="text-[11px] text-gray-500 font-mono">{stu.parentPhone}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${
                          stu.attendancePct >= 90 ? 'text-emerald-700' :
                          stu.attendancePct >= 75 ? 'text-blue-700' : 'text-amber-700'
                        }`}>
                          {stu.attendancePct}%
                        </span>
                        <div className="w-12 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-1.5 rounded-full ${
                              stu.attendancePct >= 90 ? 'bg-emerald-600' :
                              stu.attendancePct >= 75 ? 'bg-blue-600' : 'bg-amber-500'
                            }`}
                            style={{ width: `${stu.attendancePct}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        stu.feeStatus === 'Cleared' ? 'bg-emerald-100 text-emerald-800' :
                        stu.feeStatus === 'Pending Q3' ? 'bg-amber-100 text-amber-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {stu.feeStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600 font-medium">
                      {stu.busRoute}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedStudent(stu)}
                        className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="View Full Student Dossier"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Showing {filteredStudents.length} of {students.length} recorded entries</span>
            <div className="flex gap-1">
              <button className="px-2.5 py-1 border border-gray-200 rounded bg-white font-semibold">1</button>
              <button className="px-2.5 py-1 border border-gray-200 rounded bg-white text-gray-400">2</button>
              <button className="px-2.5 py-1 border border-gray-200 rounded bg-white text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Student Dossier Drawer / Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold text-lg">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{selectedStudent.name}</h3>
                  <p className="text-xs text-indigo-200">
                    Admission: {selectedStudent.admNo} • CBSE PIN: {selectedStudent.cbsePin}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <div>
                  <span className="text-gray-500">Current Class:</span>
                  <div className="font-bold text-gray-900">Class {selectedStudent.class}-{selectedStudent.section} (Roll #{selectedStudent.roll})</div>
                </div>
                <div>
                  <span className="text-gray-500">School House:</span>
                  <div className="font-bold text-indigo-700">{selectedStudent.house}</div>
                </div>
                <div>
                  <span className="text-gray-500">Attendance Rate:</span>
                  <div className="font-bold text-emerald-700">{selectedStudent.attendancePct}% Present</div>
                </div>
                <div>
                  <span className="text-gray-500">Q3 Fee Status:</span>
                  <div className="font-bold text-gray-900">{selectedStudent.feeStatus}</div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">Parental Records</h4>
                <div className="p-3 bg-white border border-gray-200 rounded-lg space-y-1">
                  <div>Parent Name: <strong>{selectedStudent.parentName}</strong></div>
                  <div>Contact: <strong>{selectedStudent.parentPhone}</strong></div>
                  <div>Transport: <strong>{selectedStudent.busRoute}</strong></div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => alert(`Printing Official Student ID Card for ${selectedStudent.name}`)}
                  className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" /> Print ID Card
                </button>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">New Student Admission Form</h3>
                <p className="text-xs text-indigo-200">CBSE Affiliation #2130842</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Student Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advait Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Class</label>
                  <select
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Section</label>
                  <input
                    type="text"
                    required
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs uppercase"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Parent Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Singhania"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Parent Mobile Number</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Assigned House</label>
                  <select
                    value={formData.house}
                    onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="Tagore (Red)">Tagore (Red)</option>
                    <option value="Gandhi (Green)">Gandhi (Green)</option>
                    <option value="Nehru (Yellow)">Nehru (Yellow)</option>
                    <option value="Bose (Blue)">Bose (Blue)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Transport Bus Route</label>
                  <select
                    value={formData.busRoute}
                    onChange={(e) => setFormData({ ...formData, busRoute: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="Route #14">Route #14 (Noida / Sec 62)</option>
                    <option value="Route #08">Route #08 (Greater Noida W)</option>
                    <option value="Route #21">Route #21 (Mayur Vihar)</option>
                    <option value="Self-Commute">Self-Commute (Parent Drop)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 shadow-sm"
                >
                  Confirm Admission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
