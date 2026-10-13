import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  FileCheck, Calendar, Clock, MapPin, Users, Download, 
  Plus, CheckCircle2, AlertTriangle, Printer, Search, ChevronRight, X
} from 'lucide-react';

interface ExamScheduleItem {
  id: string;
  examName: string;
  classGrade: string;
  subject: string;
  subjectCode: string;
  examDate: string;
  dayOfWeek: string;
  timeSlot: string;
  venue: string;
  invigilator: string;
  status: 'Completed' | 'Upcoming' | 'Datesheet Released';
}

const mockExamSchedules: ExamScheduleItem[] = [
  {
    id: 'EXM-101',
    examName: 'CBSE Pre-Board Examination 1',
    classGrade: 'Class 10',
    subject: 'Mathematics (Standard)',
    subjectCode: '041',
    examDate: '01 Dec 2026',
    dayOfWeek: 'Tuesday',
    timeSlot: '08:30 AM – 11:45 AM (3 Hrs + 15m Reading)',
    venue: 'Senior Examination Hall A (Benches 1-45)',
    invigilator: 'Dr. Rajesh Sen & Mrs. Sunita Verma',
    status: 'Upcoming',
  },
  {
    id: 'EXM-102',
    examName: 'CBSE Pre-Board Examination 1',
    classGrade: 'Class 10',
    subject: 'Science (Physics, Chem, Bio)',
    subjectCode: '086',
    examDate: '04 Dec 2026',
    dayOfWeek: 'Friday',
    timeSlot: '08:30 AM – 11:45 AM (3 Hrs + 15m Reading)',
    venue: 'Senior Examination Hall A (Benches 1-45)',
    invigilator: 'Mrs. Ananya Sharma & Mr. B.K. Ghosh',
    status: 'Upcoming',
  },
  {
    id: 'EXM-103',
    examName: 'CBSE Pre-Board Examination 1',
    classGrade: 'Class 10',
    subject: 'English Language & Literature',
    subjectCode: '184',
    examDate: '07 Dec 2026',
    dayOfWeek: 'Monday',
    timeSlot: '08:30 AM – 11:45 AM (3 Hrs + 15m Reading)',
    venue: 'Senior Examination Hall A (Benches 1-45)',
    invigilator: 'Mrs. Kavita Roy & Mr. Amit Verma',
    status: 'Upcoming',
  },
  {
    id: 'EXM-104',
    examName: 'Term 1 Mid-Term Board Evaluation',
    classGrade: 'Class 10',
    subject: 'Mathematics',
    subjectCode: '041',
    examDate: '15 Sep 2026',
    dayOfWeek: 'Tuesday',
    timeSlot: '08:30 AM – 11:30 AM',
    venue: 'Exam Hall A & B',
    invigilator: 'Dr. Rajesh Sen',
    status: 'Completed',
  },
  {
    id: 'EXM-201',
    examName: 'Term 1 Half-Yearly Examination',
    classGrade: 'Class 7',
    subject: 'General Science',
    subjectCode: 'SCI-7',
    examDate: '16 Sep 2026',
    dayOfWeek: 'Wednesday',
    timeSlot: '08:30 AM – 11:00 AM',
    venue: 'Middle Wing Hall',
    invigilator: 'Mrs. Uma Joshi',
    status: 'Completed',
  },
];

export function AdminExams() {
  const user = USERS.admin;
  const [selectedSeries, setSelectedSeries] = useState('preboard');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Examination Controller Cell & Datesheets" 
      description="Coordinate CBSE Board Pre-Boards, Mid-Terms, invigilator duty rosters, hall ticket generation, and seating allocations."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Board Candidates (10 & 12)</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">635 Candidates</div>
            <div className="text-xs text-gray-500 mt-0.5">CBSE LOC Roll Verified</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Examination Halls</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">8 Halls Active</div>
            <div className="text-xs text-indigo-600 mt-0.5">CCTV Monitored Desks</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Invigilator Staff Duty</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">42 Faculty Rostered</div>
            <div className="text-xs text-emerald-600 mt-0.5">Strict CBSE Protocol</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Hall Tickets Ready</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">100% Generated</div>
            <div className="text-xs text-purple-600 mt-0.5">Downloadable by Parents</div>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-700">Exam Session:</span>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-bold text-indigo-700 bg-indigo-50/50"
            >
              <option value="preboard">CBSE Pre-Board Examination 1 (Dec 2026)</option>
              <option value="term1">Term 1 Mid-Term Evaluation (Sep 2026)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Generating Bulk Hall Tickets & Admit Cards with student barcode and photo for 635 Board students')}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" /> Generate Admit Cards
            </button>
            <button
              onClick={() => alert('Downloading Official Examination Datesheet Almanac (PDF)')}
              className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Datesheet PDF
            </button>
          </div>
        </div>

        {/* Datesheet Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Exam Date & Day</th>
                  <th className="py-3 px-4">Subject & CBSE Code</th>
                  <th className="py-3 px-4">Class</th>
                  <th className="py-3 px-4">Exam Time Slot</th>
                  <th className="py-3 px-4">Examination Venue</th>
                  <th className="py-3 px-4">Invigilators on Duty</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {mockExamSchedules.map((exm) => (
                  <tr key={exm.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">{exm.examDate}</div>
                      <div className="text-[11px] text-gray-500 font-semibold">{exm.dayOfWeek}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-indigo-900">{exm.subject}</div>
                      <span className="font-mono text-[10px] text-gray-400">Code {exm.subjectCode}</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-800">
                      {exm.classGrade}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-700">
                      {exm.timeSlot}
                    </td>
                    <td className="py-3.5 px-4 text-gray-600 font-medium">
                      {exm.venue}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">
                      {exm.invigilator}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        exm.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exm.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
