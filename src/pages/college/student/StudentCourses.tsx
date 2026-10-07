import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { DataTable } from '../../../components/college/common/DataTable';
import { mockSubjects } from '../../../data/college/mockData';

export function StudentCourses() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="My Courses" description="Semester 7 Registered Courses">
      <DataTable columns={['Course Code', 'Course Name', 'Credits', 'Faculty', 'Status']}>
        {mockSubjects.map((sub, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 text-sm font-bold text-slate-700">{sub.code}</td>
            <td className="px-6 py-4 text-sm font-semibold text-slate-800">{sub.name}</td>
            <td className="px-6 py-4 text-sm text-slate-500 font-medium">{sub.credits} Credits</td>
            <td className="px-6 py-4 text-sm text-slate-600">{sub.faculty}</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200">
                Registered
              </span>
            </td>
          </tr>
        ))}
      </DataTable>
    </CollegeLayout>
  );
}