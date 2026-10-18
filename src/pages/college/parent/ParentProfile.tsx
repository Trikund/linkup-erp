import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  User, Mail, Phone, MapPin, Briefcase, 
  Users, CheckCircle2, ShieldCheck, Download
} from 'lucide-react';

export function ParentProfile() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Parent Profile" 
      description="Official guardian contact dossier, permanent residential address, and linked student wards."
    >
      {/* Profile Header */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-black text-2xl">
              RK
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                  Primary Guardian
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 size={12} /> KYC Verified
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">Rajesh Kumar Sharma</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Father & Natural Guardian of Shivam Sharma (21CS1048)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact & Personal Information */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 mb-4">Guardian Contact Dossier</h3>
          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <Phone size={16} className="text-[#7c3aed]" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Verified Mobile</span>
                <span className="font-bold text-slate-800 text-sm">+91 98100 54321</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <Mail size={16} className="text-[#7c3aed]" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Email Address</span>
                <span className="font-semibold text-slate-800">rajesh.k.sharma@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <Briefcase size={16} className="text-[#7c3aed]" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Occupation & Employer</span>
                <span className="font-semibold text-slate-800">Senior Manager, Public Sector Enterprise (BEL)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin size={16} className="text-[#7c3aed]" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Permanent Residence</span>
                <span className="font-medium text-slate-800">Flat 402, Tower B, Sector 62, Noida, Uttar Pradesh - 201309</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linked Wards */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 mb-4">Linked Student Wards at Apex Institute</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-bold text-slate-900">Shivam Sharma</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                    B.Tech CSE Sem 7
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">Roll: 21CS1048 • PRN: 20230164002341</p>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">Placed • CloudScale Tech (₹14.5 LPA)</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-bold text-slate-900">Sneha Sharma</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-700">
                    B.Tech AI&DS Sem 3
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">Roll: 24AI1019 • PRN: 20250164009812</p>
                <p className="text-[11px] text-purple-600 font-semibold mt-1">Current CGPA: 8.75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
