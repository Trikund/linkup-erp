import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  HelpCircle, Phone, Mail, MessageSquare, AlertCircle, 
  CheckCircle2, Send, Server, Monitor, Shield, FileQuestion
} from 'lucide-react';

export function FacultyHelp() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Smart Classroom / AV Projection');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState<string | null>(null);

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TCK-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketSubmitted(id);
    setTimeout(() => {
      setTicketSubmitted(null);
      setTicketSubject('');
      setTicketDesc('');
    }, 4000);
  };

  const supportContacts = [
    {
      title: 'Classroom Smart Board & IT Support',
      desk: 'Campus IT Centre • Ground Floor',
      phone: '+91 98100 22001 (Ext: 104)',
      email: 'itsupport@apex.edu.in',
      tat: 'Immediate dispatch (< 15 mins)',
      icon: Monitor,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Controller of Examinations (COE)',
      desk: 'Administrative Block • 1st Floor',
      phone: '+91 98100 22002 (Ext: 108)',
      email: 'coe@apex.edu.in',
      tat: 'Answer script bundles & marks freeze',
      icon: Shield,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'High-Performance Computing & GPU Servers',
      desk: 'Data Centre Room • Tech Block 1',
      phone: '+91 98100 22003 (Ext: 112)',
      email: 'datacenter@apex.edu.in',
      tat: 'NVIDIA Cluster & Virtual VM provisioning',
      icon: Server,
      color: 'text-emerald-600 bg-emerald-50'
    }
  ];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Faculty Help Desk" 
      description="Classroom AV support, IT infrastructure ticketing, exam cell coordination, and campus directory."
    >
      {/* Emergency Hotline Ribbon */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-6 mb-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-amber-400 text-slate-900 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
            Faculty Urgent Hotline
          </span>
          <h3 className="text-xl font-bold mt-1">Smart Classroom AV Assistance</h3>
          <p className="text-white/80 text-xs mt-0.5">Need projector or microphone assistance during live lecture? Dial Ext: 104 for immediate technician dispatch.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-center">
            <span className="text-[10px] text-white/70 block uppercase font-bold">Intercom Ext</span>
            <span className="text-xl font-mono font-black text-amber-300">104 / 105</span>
          </div>
        </div>
      </div>

      {/* Support Wings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {supportContacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{c.desk}</span>
                </div>
                <h4 className="text-base font-bold text-slate-800">{c.title}</h4>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-[#7c3aed]" />
                    <span className="font-semibold text-slate-800">{c.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-slate-400" />
                    <span>{c.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-emerald-700 bg-emerald-50/70 p-2 rounded-xl text-center">
                TAT: {c.tat}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lodge Help Request Form */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm max-w-2xl">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
            <MessageSquare size={16} />
          </div>
          <h3 className="text-base font-bold text-slate-800">Lodge IT or Facilities Ticket</h3>
        </div>
        <p className="text-xs text-slate-500 mb-5">Tickets are routed directly to the campus infrastructure manager with SMS tracking.</p>

        {ticketSubmitted && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Ticket logged successfully! Your tracking ID is <span className="font-mono text-emerald-900 underline">{ticketSubmitted}</span></span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmitTicket} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Issue Category</label>
              <select
                value={ticketCategory}
                onChange={(e) => setTicketCategory(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
              >
                <option>Smart Classroom / AV Projection</option>
                <option>Lab Software License / MATLAB / CUDA</option>
                <option>Campus Wi-Fi / LAN Port in Cabin</option>
                <option>Air Conditioning / Electrical Maintenance</option>
                <option>ERP Portal Bug or Access Request</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Room / Location</label>
              <input
                type="text"
                defaultValue="Tech Block 3 • Room 301 (HOD Cabin)"
                className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Subject</label>
            <input
              type="text"
              required
              value={ticketSubject}
              onChange={(e) => setTicketSubject(e.target.value)}
              placeholder="e.g. HDMI port cable loose in Room 304 projector"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Detailed Description</label>
            <textarea
              required
              rows={4}
              value={ticketDesc}
              onChange={(e) => setTicketDesc(e.target.value)}
              placeholder="Explain the technical issue encountered..."
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <Send size={14} />
              <span>Submit Ticket</span>
            </button>
          </div>
        </form>
      </div>
    </CollegeLayout>
  );
}
