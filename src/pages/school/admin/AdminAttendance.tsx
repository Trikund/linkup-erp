import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, Search, Filter, Download, Phone, 
  Send, AlertTriangle, CheckCircle2, Clock, Users, ChevronRight, X
} from 'lucide-react';

interface SectionAttendance {
  section: string;
  total: number;
  present: number;
  absent: number;
  leave: number;
  rate: number;
  mentor: string;
}

interface AbsenteeStudent {
  id: string;
  name: string;
  class: string;
  admNo: string;
  parentName: string;
  phone: string;
  type: 'Unexcused' | 'Medical Leave';
  alertSent: boolean;
}

const mockSectionAttendance: SectionAttendance[] = [
  { section: 'Class 10-A', total: 42, present: 40, absent: 1, leave: 1, rate: 95.2, mentor: 'Mrs. Ananya Sharma' },
  { section: 'Class 10-B', total: 41, present: 38, absent: 2, leave: 1, rate: 92.6, mentor: 'Mrs. Kavita Roy' },
  { section: 'Class 7-B', total: 38, present: 37, absent: 0, leave: 1, rate: 97.4, mentor: 'Mrs. Neha Batra' },
  { section: 'Class 11-PCM', total: 44, present: 40, absent: 3, leave: 1, rate: 90.9, mentor: 'Dr. Rajesh Sen' },
  { section: 'Class 9-C', total: 40, present: 38, absent: 1, leave: 1, rate: 95.0, mentor: 'Ms. Pooja Nair' },
  { section: 'Class 8-A', total: 39, present: 36, absent: 2, leave: 1, rate: 92.3, mentor: 'Mr. Vivek Saxena' },
];

const mockAbsentees: AbsenteeStudent[] = [
  { id: 'ABS-01', name: 'Manav Singhania', class: '10-A', admNo: 'DPS/2021/1058', parentName: 'Mr. Alok Singhania', phone: '+91 98112 88441', type: 'Unexcused', alertSent: false },
  { id: 'ABS-02', name: 'Prisha Mehra', class: '10-B', admNo: 'DPS/2021/1077', parentName: 'Mrs. Rekha Mehra', phone: '+91 98223 99552', type: 'Unexcused', alertSent: true },
  { id: 'ABS-03', name: 'Kabir Verma', class: '11-PCM', admNo: 'DPS/2022/2051', parentName: 'Mr. Arvind Verma', phone: '+91 98334 66543', type: 'Medical Leave', alertSent: true },
  { id: 'ABS-04', name: 'Devansh Rao', class: '9-C', admNo: 'DPS/2022/1904', parentName: 'Mr. Hemant Rao', phone: '+91 98445 11223', type: 'Unexcused', alertSent: false },
];

export function AdminAttendance() {
  const user = USERS.admin;
  const [absentees, setAbsentees] = useState<AbsenteeStudent[]>(mockAbsentees);
  const [activeTab, setActiveTab] = useState<'sections' | 'absentees'>('sections');

  const handleSendAlert = (id: string) => {
    setAbsentees(prev => prev.map(a => a.id === id ? { ...a, alertSent: true } : a));
    alert('Instant absence SMS sent to guardian via school gateway.');
  };

  const handleBulkAlert = () => {
    setAbsentees(prev => prev.map(a => ({ ...a, alertSent: true })));
    alert('Bulk Unexcused Absence SMS successfully dispatched to all pending parents.');
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Daily Institutional Attendance Console" 
      description="Monitor school-wide daily student and faculty turnout, RFID gate entries, section attendance, and absence SMS triggers."
    >
      <div className="space-y-6">
        {/* KPI Metric Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Enrolled</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">2,480</div>
            <div className="text-xs text-gray-500 mt-0.5">Students on Roll</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Students Present</span>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">2,326 (93.8%)</div>
            <div className="text-xs text-emerald-700 font-medium mt-0.5">Above Target 90%</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Unexcused Absentees</span>
            <div className="text-2xl font-extrabold text-rose-600 mt-1">114 Students</div>
            <div className="text-xs text-rose-700 font-medium mt-0.5">Alerts dispatched</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Sanctioned Leave</span>
            <div className="text-2xl font-extrabold text-amber-600 mt-1">40 Students</div>
            <div className="text-xs text-amber-700 font-medium mt-0.5">Medical / Event</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Staff Attendance</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">84 / 86 (97.6%)</div>
            <div className="text-xs text-indigo-600 mt-0.5">Biometric Turnstile</div>
          </div>
        </div>

        {/* Navigation Tabs & Actions Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('sections')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'sections'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Section Attendance Heatmap (64 Sections)
            </button>
            <button
              onClick={() => setActiveTab('absentees')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'absentees'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Daily Absentee Roster & Alerts ({absentees.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === 'absentees' && (
              <button
                onClick={handleBulkAlert}
                className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Dispatch All Pending SMS
              </button>
            )}
            <button
              onClick={() => alert('Exporting Daily School Attendance Register to PDF')}
              className="px-3.5 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Register
            </button>
          </div>
        </div>

        {/* Section View */}
        {activeTab === 'sections' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4">Class & Section</th>
                    <th className="py-3 px-4">Class Teacher / Mentor</th>
                    <th className="py-3 px-4">Strength</th>
                    <th className="py-3 px-4">Present</th>
                    <th className="py-3 px-4">Absent</th>
                    <th className="py-3 px-4">Approved Leave</th>
                    <th className="py-3 px-4">Turnout %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                  {mockSectionAttendance.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{sec.section}</td>
                      <td className="py-3.5 px-4 font-medium text-gray-700">{sec.mentor}</td>
                      <td className="py-3.5 px-4 font-bold text-gray-900">{sec.total}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700">{sec.present}</td>
                      <td className="py-3.5 px-4 font-bold text-rose-600">{sec.absent}</td>
                      <td className="py-3.5 px-4 text-amber-700">{sec.leave}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{sec.rate}%</span>
                          <div className="w-16 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-1.5 rounded-full ${sec.rate >= 95 ? 'bg-emerald-600' : 'bg-blue-600'}`}
                              style={{ width: `${sec.rate}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Absentees View */}
        {activeTab === 'absentees' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4">Student & Admission</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Parent / Guardian</th>
                    <th className="py-3 px-4">Phone Number</th>
                    <th className="py-3 px-4">Absence Classification</th>
                    <th className="py-3 px-4">SMS Alert Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                  {absentees.map((stu) => (
                    <tr key={stu.id} className="hover:bg-rose-50/20 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-gray-900">{stu.name}</div>
                        <div className="text-[11px] font-mono text-gray-400">{stu.admNo}</div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-gray-700">Class {stu.class}</td>
                      <td className="py-3.5 px-4 font-semibold text-gray-800">{stu.parentName}</td>
                      <td className="py-3.5 px-4 font-mono">{stu.phone}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          stu.type === 'Unexcused' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {stu.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {stu.alertSent ? (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Dispatched
                          </span>
                        ) : (
                          <span className="text-amber-600 font-semibold flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Pending
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        {!stu.alertSent && (
                          <button
                            onClick={() => handleSendAlert(stu.id)}
                            className="px-2.5 py-1 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700 text-[11px] flex items-center gap-1 ml-auto"
                          >
                            <Send className="w-3 h-3" /> Send SMS
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
