import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const TIMES = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'];

const TIMETABLE_DATA: Record<string, Record<string, { subject: string; teacher: string; room: string }>> = {
  'Monday': {
    '08:00 AM': { subject: 'Mathematics', teacher: 'A. Sharma', room: 'R204' },
    '09:00 AM': { subject: 'Physics', teacher: 'R. Kumar', room: 'Lab 1' },
    '11:00 AM': { subject: 'English', teacher: 'P. Patel', room: 'R106' },
  },
  'Tuesday': {
    '08:00 AM': { subject: 'Chemistry', teacher: 'S. Singh', room: 'Lab 2' },
    '10:00 AM': { subject: 'Mathematics', teacher: 'A. Sharma', room: 'R204' },
    '01:00 PM': { subject: 'Physical Ed.', teacher: 'M. Dhoni', room: 'Ground' },
  }
};

export function StudentTimetable() {
  const user = USERS.student;

  return (
    <SchoolLayout role="student" user={user} title="Weekly Timetable">
      <GlassCard className="p-6 overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-slate-200 bg-slate-50/50 text-left font-medium text-slate-500 w-24">Time</th>
              {WEEKDAYS.map(day => (
                <th key={day} className="p-4 border border-slate-200 bg-slate-50/50 text-center font-medium text-slate-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIMES.map(time => (
              <tr key={time} className="group hover:bg-slate-50/30 transition-colors">
                <td className="p-4 border border-slate-200 text-sm font-medium text-slate-600 align-top whitespace-nowrap">
                  {time}
                </td>
                {WEEKDAYS.map(day => {
                  const cell = TIMETABLE_DATA[day]?.[time];
                  return (
                    <td key={day} className="p-2 border border-slate-200 align-top h-24">
                      {cell ? (
                        <div className="h-full bg-linkup-blue/10 border border-linkup-blue/20 rounded-lg p-3 hover:-translate-y-0.5 transition-transform cursor-pointer">
                          <p className="font-bold text-linkup-blue text-sm">{cell.subject}</p>
                          <p className="text-xs text-slate-600 mt-1">{cell.teacher}</p>
                          <p className="text-xs text-slate-500 mt-1">{cell.room}</p>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <span className="text-slate-300 text-xs">-</span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </SchoolLayout>
  );
}
