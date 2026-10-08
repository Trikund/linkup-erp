import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { Button } from '../../../components/common/Button';
import { Check, X, Clock, UserMinus } from 'lucide-react';

const MOCK_STUDENTS = [
  { id: 1, name: 'Rahul Sharma', roll: '101' },
  { id: 2, name: 'Ananya Sharma', roll: '102' },
  { id: 3, name: 'Vikram Singh', roll: '103' },
  { id: 4, name: 'Priya Patel', roll: '104' },
];

type AttendanceStatus = 'present' | 'absent' | 'late' | 'leave' | null;

export function TeacherAttendance() {
  const user = USERS.teacher;
  const [attendance, setAttendance] = useState<Record<number, AttendanceStatus>>({});
  const [showToast, setShowToast] = useState(false);

  const markAll = (status: AttendanceStatus) => {
    const newAtt: Record<number, AttendanceStatus> = {};
    MOCK_STUDENTS.forEach(s => newAtt[s.id] = status);
    setAttendance(newAtt);
  };

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <SchoolLayout role="teacher" user={user} title="Mark Attendance">
      <GlassCard className="p-6 mb-6">
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Class</label>
            <select className="w-full border-slate-200 rounded-lg text-sm bg-white">
              <option>10-A</option>
              <option>10-B</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input type="date" defaultValue="2026-10-18" className="w-full border-slate-200 rounded-lg text-sm bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <select className="w-full border-slate-200 rounded-lg text-sm bg-white">
              <option>Mathematics</option>
            </select>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-slate-900">Student List</h2>
          <Button variant="secondary" size="sm" onClick={() => markAll('present')}>
            Mark All Present
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 font-medium">Roll No</th>
                <th className="pb-3 font-medium">Student</th>
                <th className="pb-3 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.map(student => (
                <tr key={student.id} className="hover:bg-slate-50/50">
                  <td className="py-4 text-slate-600">{student.roll}</td>
                  <td className="py-4 font-medium text-slate-900">{student.name}</td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <StatusBtn 
                        active={attendance[student.id] === 'present'}
                        onClick={() => setAttendance(p => ({ ...p, [student.id]: 'present' }))}
                        icon={Check} color="text-green-600 bg-green-100 hover:bg-green-200" 
                      />
                      <StatusBtn 
                        active={attendance[student.id] === 'absent'}
                        onClick={() => setAttendance(p => ({ ...p, [student.id]: 'absent' }))}
                        icon={X} color="text-red-600 bg-red-100 hover:bg-red-200" 
                      />
                      <StatusBtn 
                        active={attendance[student.id] === 'late'}
                        onClick={() => setAttendance(p => ({ ...p, [student.id]: 'late' }))}
                        icon={Clock} color="text-amber-600 bg-amber-100 hover:bg-amber-200" 
                      />
                      <StatusBtn 
                        active={attendance[student.id] === 'leave'}
                        onClick={() => setAttendance(p => ({ ...p, [student.id]: 'leave' }))}
                        icon={UserMinus} color="text-slate-600 bg-slate-100 hover:bg-slate-200" 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave}>Save Attendance</Button>
        </div>
      </GlassCard>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Check size={18} className="text-green-400" />
          <span className="font-medium">Attendance saved successfully.</span>
        </div>
      )}
    </SchoolLayout>
  );
}

interface StatusBtnProps { active: boolean; onClick: () => void; icon: React.ElementType; color: string; }
function StatusBtn({ active, onClick, icon: Icon, color }: StatusBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-all ${active ? color + ' ring-2 ring-offset-2 ring-slate-400' : 'text-slate-400 hover:bg-slate-100'}`}
    >
      <Icon size={16} />
    </button>
  );
}

