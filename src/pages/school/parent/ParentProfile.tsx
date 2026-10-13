import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  User, Phone, Mail, MapPin, ShieldCheck, Heart, 
  Briefcase, Users, Edit3, CheckCircle2, AlertCircle, X
} from 'lucide-react';

export const ParentProfile: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+91 98765 43210');
  const [emailAddress, setEmailAddress] = useState('priya.sharma@example.com');
  const [address, setAddress] = useState('Flat 402, Tower B, Green Meadows, Golf Course Ext Road, Sector 62, Gurugram, Haryana - 122001');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    alert('Guardian profile change request submitted to School Registrar Office for biometric and KYC verification.');
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Parent & Guardian Institutional Dossier"
      description="Registered family records, residential address, emergency doctor contacts, and authorized school gate escorts."
    >
      <div className="space-y-6">
        {/* Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Parent & Guardian Institutional Dossier</h1>
          <p className="text-sm text-gray-600 mt-1">
            Registered family records, residential address, emergency doctor contacts, and authorized school gate escorts.
          </p>
        </div>

        <button
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm self-start md:self-auto"
        >
          <Edit3 className="w-4 h-4" /> Request Contact / Address Update
        </button>
      </div>

      {/* Primary & Secondary Guardian Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Primary Guardian: Mother */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                PS
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Primary Guardian (Mother)
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">Mrs. Priya Sharma</h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> KYC Verified
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-3 text-gray-600">
              <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Profession: <strong className="text-gray-900">Senior Principal Architect</strong> (Design Studio LLP)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Contact: <strong className="text-gray-900">{phoneNumber}</strong></span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Email: <strong className="text-gray-900">{emailAddress}</strong></span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Government UID / Aadhaar: <strong className="text-gray-900">•••• •••• 8912 (Verified)</strong></span>
            </div>
          </div>
        </div>

        {/* Secondary Guardian: Father */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                RS
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Secondary Guardian (Father)
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">Mr. Rajesh Sharma</h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> KYC Verified
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-3 text-gray-600">
              <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Profession: <strong className="text-gray-900">Director of Global Operations</strong> (TechCorp India)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Contact: <strong className="text-gray-900">+91 98765 43211</strong></span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Email: <strong className="text-gray-900">rajesh.sharma@example.com</strong></span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Government UID / Aadhaar: <strong className="text-gray-900">•••• •••• 4429 (Verified)</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Address & Emergency Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Residential Address */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-gray-900">Permanent Residential Address</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs space-y-2">
            <p className="font-semibold text-gray-900 leading-relaxed">{address}</p>
            <div className="pt-2 border-t border-gray-200 text-gray-600 space-y-1">
              <div>Assigned School Transport: <strong className="text-indigo-700">Bus Route #14</strong></div>
              <div>Designated Bus Stop: <strong>Green Meadows Gate 1 (07:10 AM / 03:25 PM)</strong></div>
            </div>
          </div>
        </div>

        {/* Emergency Medical & Physician Contacts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <h3 className="text-base font-bold text-gray-900">Emergency Medical Directive</h3>
          </div>
          <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-100 text-xs space-y-2.5">
            <div className="flex justify-between">
              <span className="text-gray-600">Family Physician:</span>
              <span className="font-bold text-gray-900">Dr. K.K. Bansal (MD Pediatrics)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hospital Affiliation:</span>
              <span className="font-semibold text-gray-900">Max Healthcare, Sector 56, Gurugram</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Physician Direct Phone:</span>
              <span className="font-bold text-indigo-700">+91 98100 23456</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-rose-200/60">
              <span className="text-gray-600">Infirmary Emergency Code:</span>
              <span className="font-mono font-bold text-rose-700">MED-PRIORITY-ALPHA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Authorized Pickup Escorts (School Gate Pass) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-gray-900">Authorized Gate Pickup Persons (RFID Gate Pass)</h3>
          </div>
          <span className="text-xs text-gray-500 font-medium">Only authorized holders may collect students from Gate 3</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
              RKS
            </div>
            <div className="space-y-1 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Escort 1 (Grandfather)</span>
              <h4 className="text-sm font-bold text-gray-900">Mr. R.K. Sharma</h4>
              <p className="text-gray-600">Gate Pass: <strong>#GP-2026-841</strong> • DL ID Verified</p>
              <p className="text-gray-600">Contact: +91 98111 88990</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
              SK
            </div>
            <div className="space-y-1 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Escort 2 (Family Chauffeur)</span>
              <h4 className="text-sm font-bold text-gray-900">Mr. Santosh Kumar</h4>
              <p className="text-gray-600">Gate Pass: <strong>#GP-2026-842</strong> • Police Verified</p>
              <p className="text-gray-600">Contact: +91 98112 34567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Update Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Request Official Record Update</h3>
                <p className="text-xs text-indigo-200">School Registrar & KYC Database</p>
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Primary Mobile Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Primary Guardian Email</label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Residential Address</label>
                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Address modifications will automatically trigger a bus route change verification with Transport Incharge Mr. Balram.</span>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
                >
                  Submit KYC Update Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </SchoolLayout>
  );
};
