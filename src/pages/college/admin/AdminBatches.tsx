import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Layers, Users, Calendar, ArrowRight, Plus, 
  CheckCircle2, Award, ChevronRight, UserCheck
} from 'lucide-react';

export function AdminBatches() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };

  const batches = [
    {
      name: 'Class of 2027 (Batch 2023 - 2027)',
      year: 'Final Year (Semester VII)',
      totalStudents: 3120,
      sections: ['Sec A (72)', 'Sec B (70)', 'Sec C (70)', 'Sec D (68)'],
      hodInCharge: 'Dr. Ankit Sharma (CSE)',
      status: 'Academic Phase Active',
      placementReady: true
    },
    {
      name: 'Class of 2028 (Batch 2024 - 2028)',
      year: 'Third Year (Semester V)',
      totalStudents: 3240,
      sections: ['Sec A (75)', 'Sec B (74)', 'Sec C (72)', 'Sec D (70)'],
      hodInCharge: 'Dr. Meenakshi Sundaram (AI&DS)',
      status: 'Academic Phase Active',
      placementReady: false
    },
    {
      name: 'Class of 2029 (Batch 2025 - 2029)',
      year: 'Second Year (Semester III)',
      totalStudents: 3180,
      sections: ['Sec A (76)', 'Sec B (75)', 'Sec C (74)', 'Sec D (72)'],
      hodInCharge: 'Dr. R. Ramanathan (ECE)',
      status: 'Academic Phase Active',
      placementReady: false
    },
    {
      name: 'Class of 2030 (Batch 2026 - 2030)',
      year: 'First Year (Semester I)',
      totalStudents: 2910,
      sections: ['Sec A (80)', 'Sec B (78)', 'Sec C (78)', 'Sec D (76)'],
      hodInCharge: 'Dean First Year Engineering',
      status: 'Orientation Completed',
      placementReady: false
    }
  ];

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Batches & Sections" 
      description="University cohort lifecycle, section division rosters, and annual semester progression engine."
    >
      <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">12,450 Undergraduates Active across 4 Cohorts</h3>
          <p className="text-xs text-slate-500 mt-0.5">Automated credit-gate validation enabled for semester promotion.</p>
        </div>
        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 shadow-sm transition-all">
          <Plus size={14} />
          <span>Create New Cohort Batch</span>
        </button>
      </div>

      <div className="space-y-5">
        {batches.map((b, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-purple-50 text-[#7c3aed] rounded-lg">
                    {b.year}
                  </span>
                  {b.placementReady && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      T&P Active
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{b.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">Academic Lead: <strong className="text-slate-800">{b.hodInCharge}</strong></p>
              </div>

              <div className="text-right">
                <span className="text-base font-black text-slate-900 font-mono block">
                  {b.totalStudents.toLocaleString()} Students
                </span>
                <span className="text-xs text-slate-400 font-semibold">Active Enrollment</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-500 font-semibold mr-2">Configured Class Sections:</span>
              {b.sections.map((sec, idx) => (
                <span key={idx} className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl font-mono font-medium text-slate-700">
                  {sec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
