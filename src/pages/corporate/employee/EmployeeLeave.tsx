import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { DataTable } from '../../../components/corporate/common/DataTable';

export function EmployeeLeave() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Frontend Developer' };
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <CorporateLayout role="employee" user={user} title="Leave Management" description="View balance and apply for time off.">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">Leave Balance</h3>
        <button 
          onClick={() => setShowApplyModal(true)}
          className="px-4 py-2 bg-linkup-navy hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
        >
          Apply Leave
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { type: 'Annual Leave', available: 12, total: 21, color: 'bg-blue-500' },
          { type: 'Sick Leave', available: 4, total: 10, color: 'bg-red-500' },
          { type: 'Casual Leave', available: 2, total: 7, color: 'bg-amber-500' },
          { type: 'Optional Leave', available: 1, total: 2, color: 'bg-violet-500' }
        ].map((l, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${l.color}`}></div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{l.type}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <h4 className="text-2xl font-bold text-slate-800">{l.available}</h4>
              <span className="text-xs text-slate-500 font-medium">/ {l.total} days</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Leave History</h3>
        </div>
        <DataTable columns={['Leave Type', 'Duration', 'Days', 'Reason', 'Status']}>
          {[
            { type: 'Annual Leave', duration: 'Oct 20 - Oct 22, 2026', days: 3, reason: 'Family trip', status: 'Pending' },
            { type: 'Sick Leave', duration: 'Sep 14, 2026', days: 1, reason: 'Fever', status: 'Approved' },
            { type: 'Casual Leave', duration: 'Aug 05, 2026', days: 1, reason: 'Personal work', status: 'Approved' }
          ].map((r, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="px-5 py-3 text-sm font-semibold text-slate-700">{r.type}</td>
              <td className="px-5 py-3 text-sm text-slate-600">{r.duration}</td>
              <td className="px-5 py-3 text-sm font-medium text-slate-700">{r.days}</td>
              <td className="px-5 py-3 text-sm text-slate-500">{r.reason}</td>
              <td className="px-5 py-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                  r.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' :
                  'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>

      {/* Mock Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Apply for Leave</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Leave Type</label>
                <select className="w-full p-2 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-linkup-navy outline-none">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Start Date</label>
                  <input type="date" className="w-full p-2 border border-slate-200 rounded-md text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">End Date</label>
                  <input type="date" className="w-full p-2 border border-slate-200 rounded-md text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Reason</label>
                <textarea rows={3} className="w-full p-2 border border-slate-200 rounded-md text-sm resize-none"></textarea>
              </div>
            </div>
            <div className="p-4 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-lg">Cancel</button>
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 text-sm font-semibold text-white bg-linkup-navy hover:bg-slate-800 rounded-lg">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </CorporateLayout>
  );
}