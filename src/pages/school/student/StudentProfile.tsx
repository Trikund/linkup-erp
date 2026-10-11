import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Bus, 
  Heart, 
  Users, 
  Edit3,
  CheckCircle2,
  FileText
} from 'lucide-react';

export function StudentProfile() {
  const user = USERS.student;
  const [showEditModal, setShowEditModal] = useState(false);
  const [requestSaved, setRequestSaved] = useState(false);
  const [editNotes, setEditNotes] = useState('');

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSaved(true);
    setTimeout(() => {
      setShowEditModal(false);
      setRequestSaved(false);
      setEditNotes('');
    }, 1500);
  };

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Student Profile & Dossier"
      description="Official institutional enrollment records, personal credentials, parent contacts, and transportation details."
    >
      <div className="space-y-6">

        {/* Top Header Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-100 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-2 border-white" title="Active Enrollment" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl font-extrabold text-slate-900">{user.name}</h2>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Grade X - Section B
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Tagore House (Red)
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1.5 font-medium">
                  Roll No: <span className="font-bold text-slate-800 font-mono">14</span> • Admission No: <span className="font-bold text-slate-800 font-mono">DPS/2021/1042</span> • CBSE PIN: <span className="font-bold text-slate-800 font-mono">CBSE-DEL-91827</span>
                </p>
                <p className="text-sm text-slate-500 mt-0.5">
                  Class Mentor: <span className="font-bold text-slate-800">Mrs. Sunita Roy (PGT English)</span>
                </p>
              </div>
            </div>

            <button 
              onClick={() => setShowEditModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition shadow-sm"
            >
              <Edit3 className="w-4 h-4" />
              Request Profile Update
            </button>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column: Personal & Academic Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Academic Enrollment Information */}
            <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Academic & Enrollment Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Academic Session</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">2026 - 2027 (Active)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Current Standard & Section</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">Class X - Division B</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Admission Date</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">08 April 2021 (Class V)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Curriculum Affiliation</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">CBSE New Delhi (Code 20842)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Second Language Elective</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">Hindi Course A (002)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Skill Subject Elective</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">Information Technology (402)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Assigned Locker ID</span>
                  <span className="font-bold text-slate-800 font-mono mt-0.5 block">LOCK-B-204</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Institutional Email</span>
                  <span className="font-bold text-blue-600 font-mono mt-0.5 block">aarav.sharma@dpsdelhi.edu.in</span>
                </div>
              </div>
            </div>

            {/* Parent & Guardian Dossier */}
            <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                Parent & Guardian Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                {/* Father Info */}
                <div className="p-5 bg-slate-50/80 rounded-2xl space-y-2.5 border border-slate-100">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">Father</span>
                  <p className="font-extrabold text-slate-900 text-base">Mr. Rajesh Sharma</p>
                  <p className="text-slate-500">Occupation: <span className="font-bold text-slate-800">Senior Systems Architect</span></p>
                  <p className="text-slate-500">Contact: <span className="font-bold text-slate-800 font-mono">+91 98112 45890</span></p>
                  <p className="text-slate-500">Email: <span className="font-bold text-slate-800 font-mono">rajesh.sharma@gmail.com</span></p>
                </div>

                {/* Mother Info */}
                <div className="p-5 bg-slate-50/80 rounded-2xl space-y-2.5 border border-slate-100">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-100 text-purple-800 uppercase tracking-wide">Mother</span>
                  <p className="font-extrabold text-slate-900 text-base">Dr. Priya Sharma</p>
                  <p className="text-slate-500">Occupation: <span className="font-bold text-slate-800">Consultant Pediatrician</span></p>
                  <p className="text-slate-500">Contact: <span className="font-bold text-slate-800 font-mono">+91 98112 45891</span></p>
                  <p className="text-slate-500">Email: <span className="font-bold text-slate-800 font-mono">priya.pediatrics@gmail.com</span></p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-slate-100 flex items-start gap-3.5 text-sm">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Permanent Residential Address</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">B-402, Lotus Greens Boulevard, Sector 128, New Delhi - 110096</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Health, Transport, Emergency */}
          <div className="space-y-6">

            {/* Emergency & Medical Overview */}
            <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600" />
                Medical & Health Record
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Blood Group</span>
                  <span className="font-bold text-rose-600 px-3 py-1 bg-rose-50 rounded-lg">O+ (Positive)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Known Allergies</span>
                  <span className="font-bold text-slate-800">None Reported</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Height / Weight</span>
                  <span className="font-bold text-slate-800">168 cm / 58 kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Vision Correction</span>
                  <span className="font-bold text-slate-800">Spectacles (-1.25 D)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Infirmary Clearance</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Medically Fit
                  </span>
                </div>
              </div>
            </div>

            {/* School Bus & Transport Route */}
            <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-600" />
                School Transport Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Assigned Bus Route</span>
                  <span className="font-bold text-slate-900">Route #14 (Expressway)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Designated Stop</span>
                  <span className="font-bold text-slate-800">Sector 128 Main Gate</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Morning Pickup</span>
                  <span className="font-bold text-slate-800 font-mono">07:15 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Afternoon Drop</span>
                  <span className="font-bold text-slate-800 font-mono">03:40 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Bus In-charge</span>
                  <span className="font-bold text-slate-800">Mr. Balram (+91 94102 38910)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* MODAL: Request Data Correction */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Request Profile Update</h3>
                  <p className="text-xs text-slate-500 mt-0.5">All demographic updates require approval from the School Registrar.</p>
                </div>
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              {requestSaved ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Update Request Dispatched</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Your amendment request has been sent to the Student Records Desk. Proof of address or ID may be requested via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEditSubmit} className="mt-4 space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Field to Modify</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 bg-white">
                      <option>Parent Mobile Number / Email</option>
                      <option>Residential Address</option>
                      <option>Transportation / Bus Stop</option>
                      <option>Medical Records / Dietary Needs</option>
                      <option>Spelling Correction in Name / DoB</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Proposed Correction & Supporting Note</label>
                    <textarea 
                      required
                      rows={4}
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Specify the exact change requested, new contact info, and reason..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowEditModal(false)}
                      className="px-4 py-2 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-sm"
                    >
                      Submit Update Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
