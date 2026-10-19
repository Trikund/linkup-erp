import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  User, Mail, Phone, MapPin, Building, Calendar, 
  CreditCard, ShieldCheck, Download, Edit3, KeyRound, Award
} from 'lucide-react';

export function EmployeeProfile() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Employee Profile & ID"
      description="Manage your corporate identity, official employment credentials, and statutory KYC records."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Account & Support' },
        { label: 'Employee Profile & ID' }
      ]}
    >
      <div className="space-y-6">
        {/* Profile Identity Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white font-bold text-2xl flex items-center justify-center shadow-md border-2 border-slate-200">
                RS
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="text-xl font-bold text-slate-800">Rahul Sharma</h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Full-Time (FTE)
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">
                  Senior Frontend Developer • Level IC3 (Engineering Pod 4)
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="font-mono font-bold text-slate-700">EMP-2023-0428</span>
                  <span>•</span>
                  <span>Joined: Aug 14, 2023 (3y 2m)</span>
                  <span>•</span>
                  <span>Bengaluru HQ (Desk 42, Floor 4)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
                <Download size={14} className="text-slate-500" />
                Digital ID Card PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
                <Edit3 size={14} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* 3 Detailed Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Work & Reporting Info */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Building size={18} className="text-blue-600" />
              <h3 className="text-sm font-bold text-slate-800">Employment & Hierarchy</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Department & Division</span>
                <span className="font-semibold text-slate-800">Engineering • Web Platform Core</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Reporting Manager</span>
                <span className="font-semibold text-blue-600">Siddharth Mehta (VP Engineering)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Tech Lead</span>
                <span className="font-semibold text-slate-800">Priya Venkatesh (Lead Frontend)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Office Location</span>
                <span className="font-semibold text-slate-800">LinkUp Tower, Knowledge Oasis, Outer Ring Rd, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Statutory & KYC */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <ShieldCheck size={18} className="text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-800">Statutory & Compliance KYC</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Permanent Account Number (PAN)</span>
                <span className="font-mono font-bold text-slate-800">ABCPS1234F • Verified</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Aadhaar (UIDAI Verified)</span>
                <span className="font-mono font-bold text-slate-800">•••• •••• 8912</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Universal Account Number (UAN - EPFO)</span>
                <span className="font-mono font-bold text-slate-800">100928374102</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Salary Account Bank (HDFC)</span>
                <span className="font-mono font-bold text-slate-800">•••• •••• •••• 4092 (HDFC0000128)</span>
              </div>
            </div>
          </div>

          {/* Contact & Emergency */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Phone size={18} className="text-purple-600" />
              <h3 className="text-sm font-bold text-slate-800">Communication & Emergency</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Corporate Email</span>
                <span className="font-semibold text-blue-600">rahul.sharma@linkupcorp.com</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Work Mobile</span>
                <span className="font-mono font-semibold text-slate-800">+91 98765 43210</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Emergency Contact</span>
                <span className="font-semibold text-slate-800">Neha Sharma (Spouse)</span>
                <span className="font-mono text-slate-600 block mt-0.5">+91 98765 99887</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Residential City</span>
                <span className="font-semibold text-slate-800">HSR Layout Sector 2, Bengaluru 560102</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
