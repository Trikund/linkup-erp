import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  UserCheck, Search, Send, Download, Phone, 
  Mail, MessageSquare, CheckCircle2, ShieldAlert
} from 'lucide-react';

export function AdminParents() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [broadcastSent, setBroadcastSent] = useState(false);

  const parentList = [
    { name: 'Rajesh Kumar Sharma', phone: '+91 98100 54321', email: 'rajesh.k.sharma@gmail.com', wardName: 'Shivam Sharma', rollNo: '21CS1048', dept: 'CSE (Sem 7)', city: 'Noida, UP' },
    { name: 'Dr. V. Sundaram', phone: '+91 98901 23456', email: 'v.sundaram@gmail.com', wardName: 'Priya Sundaram', rollNo: '21CS1012', dept: 'CSE (Sem 7)', city: 'Delhi NCR' },
    { name: 'Sanjay Verma', phone: '+91 98112 34567', email: 'sanjay.v@gmail.com', wardName: 'Rahul Verma', rollNo: '21CS1045', dept: 'CSE (Sem 7)', city: 'Ghaziabad, UP' },
    { name: 'Manoj Khurana', phone: '+91 98101 99887', email: 'm.khurana@gmail.com', wardName: 'Divya Khurana', rollNo: '21CS1092', dept: 'CSE (Sem 7)', city: 'Gurugram, HR' }
  ];

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Parents & Guardians" 
      description="Parent registry, verified communication channels, student linkages, and bulk institutional SMS broadcasts."
    >
      <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">12,450 Verified Guardian Linkages</h3>
          <p className="text-xs text-slate-500 mt-0.5">Automated SMS gateway configured for real-time absence alerts and circulars.</p>
        </div>
        <button 
          onClick={() => {
            setBroadcastSent(true);
            setTimeout(() => setBroadcastSent(false), 3000);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 shadow-sm transition-all"
        >
          <Send size={14} />
          <span>Dispatch Emergency Parent SMS</span>
        </button>
      </div>

      {broadcastSent && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-6 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>Institutional SMS dispatched to all registered parent mobiles via DLT-approved gateway!</span>
        </div>
      )}

      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Guardian Name</th>
                <th className="py-3.5 px-4">Contact Info</th>
                <th className="py-3.5 px-4">Associated Student Ward</th>
                <th className="py-3.5 px-4">Department & Class</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {parentList.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-4 px-4 font-bold text-slate-900">{p.name}</td>
                  <td className="py-4 px-4">
                    <span className="font-mono text-slate-800 block">{p.phone}</span>
                    <span className="text-[11px] text-slate-400">{p.email}</span>
                  </td>
                  <td className="py-4 px-4">
                    <strong className="text-purple-700">{p.wardName}</strong>
                    <span className="text-[11px] text-slate-400 font-mono block">Roll: {p.rollNo}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-medium">{p.dept}</td>
                  <td className="py-4 px-4 text-slate-500">{p.city}</td>
                  <td className="py-4 px-4 text-right">
                    <a href={`mailto:${p.email}`} className="text-xs font-bold text-[#7c3aed] hover:underline">
                      Send SMS / Email
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}
