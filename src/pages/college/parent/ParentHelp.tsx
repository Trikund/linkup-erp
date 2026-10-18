import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  HelpCircle, Phone, Mail, MessageSquare, AlertCircle, 
  CheckCircle2, Send, ShieldAlert, HeartPulse, Building
} from 'lucide-react';

export function ParentHelp() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };
  const [grievanceSubmitted, setGrievanceSubmitted] = useState<string | null>(null);
  const [category, setCategory] = useState('Academic & Curriculum Inquiries');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TCK-PAR-${Math.floor(1000 + Math.random() * 9000)}`;
    setGrievanceSubmitted(id);
    setTimeout(() => {
      setGrievanceSubmitted(null);
      setSubject('');
      setDescription('');
    }, 4000);
  };

  const emergencyContacts = [
    { name: '24/7 Campus Security Control Room', phone: '+91 98100 22000 (Ext: 100)', icon: ShieldAlert, color: 'text-rose-600 bg-rose-50' },
    { name: 'Campus Health Centre & Ambulance', phone: '+91 98100 22009 (Ext: 109)', icon: HeartPulse, color: 'text-red-600 bg-red-50' },
    { name: 'Dean of Student Welfare (DSW)', phone: '+91 98100 22005 (Ext: 101)', icon: Building, color: 'text-purple-600 bg-purple-50' },
    { name: 'Accounts Section & Fee Verification', phone: '+91 98100 22007 (Ext: 105)', icon: HelpCircle, color: 'text-blue-600 bg-blue-50' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Help & Grievance Cell" 
      description="Parent helpline directory, emergency campus contacts, and administrative grievance ticketing."
    >
      {/* Emergency Contacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {emergencyContacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-2xl ${c.color} flex items-center justify-center mb-3`}>
                <Icon size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-800">{c.name}</h4>
              <p className="text-xs font-mono font-bold text-purple-700 mt-1">{c.phone}</p>
            </div>
          );
        })}
      </div>

      {/* Lodge Ticket Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm max-w-2xl">
        <h3 className="text-base font-bold text-slate-800 mb-1">Lodge Parent Grievance or Inquiry</h3>
        <p className="text-xs text-slate-500 mb-5">Submissions are reviewed directly by the Office of the Registrar and Dean of Student Welfare.</p>

        {grievanceSubmitted && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>Ticket logged successfully! Tracking Reference: <span className="font-mono underline text-emerald-900">{grievanceSubmitted}</span></span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-600 mb-1">Grievance Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            >
              <option>Academic & Curriculum Inquiries</option>
              <option>Hostel Accommodation & Food Quality</option>
              <option>Fee Payment, Receipts & Refund</option>
              <option>Placement & Internship Verification</option>
              <option>Medical & Health Inquiries</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-600 mb-1">Subject</label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Inquiring regarding 8th-semester industry internship NOC procedure"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-600 mb-1">Detailed Description</label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide complete details..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              <Send size={13} />
              <span>Submit Official Ticket</span>
            </button>
          </div>
        </form>
      </div>
    </CollegeLayout>
  );
}
