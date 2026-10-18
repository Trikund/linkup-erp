import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  HelpCircle, Mail, Phone, MapPin, Send, 
  CheckCircle2, MessageSquare, ChevronDown, ChevronUp, Clock
} from 'lucide-react';

export function StudentHelp() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const contacts = [
    { role: 'Head of Department (CSE)', name: 'Dr. Ankit Sharma', email: 'hod.cse@linkup.edu', phone: '+91 120 4821 301', room: 'Block 3, Room 301' },
    { role: 'Controller of Examinations', name: 'Dr. V. K. Malhotra', email: 'coe@linkup.edu', phone: '+91 120 4821 108', room: 'Admin Block, Ground Floor' },
    { role: 'Training & Placement Officer', name: 'Prof. Ramesh Anand', email: 'placements@linkup.edu', phone: '+91 120 4821 405', room: 'Corporate Center, 2nd Floor' },
    { role: 'Finance & Accounts Branch', name: 'Mr. Arvind Gupta', email: 'accounts@linkup.edu', phone: '+91 120 4821 112', room: 'Admin Block, Counter 4' },
    { role: 'Campus Wi-Fi & IT Helpdesk', name: 'System Admin Team', email: 'it.support@linkup.edu', phone: '+91 120 4821 999', room: 'Computer Center, Lab 1' },
    { role: 'Chief Hostel Warden', name: 'Prof. S. K. Mahajan', email: 'warden.boys@linkup.edu', phone: '+91 120 4821 412', room: 'Aryabhatta Hostel, Block B' },
  ];

  const faqs = [
    {
      q: 'How do I request an attendance condonation if my attendance is between 65% and 75%?',
      a: 'Students with attendance between 65% and 75% due to verified medical emergencies or official university sports/cultural representation can submit medical certificates along with a physical letter endorsed by their Faculty Advisor and HOD before 30 October.'
    },
    {
      q: 'When will the End-Semester Nov 2026 grade cards and transcripts be issued?',
      a: 'Provisional results will be published online within 20 days after completion of the last practical viva exam. Official embossed physical transcripts can be collected from the COE counter.'
    },
    {
      q: 'How do I register for on-campus Tier-1 placement recruitment drives?',
      a: 'Go to the "Training & Placements" tab on this portal. Ensure your verified CGPA is updated, all past semester marks are uploaded, and your placement resume has been validated by the T&P officer.'
    },
    {
      q: 'What is the procedure for obtaining an Internship NOC for Semester VIII?',
      a: 'Navigate to "Internships & Capstone" and click "Apply for Internship NOC". Upload your official company offer letter with stipend details. The Industry Collaboration Cell approves applications within 3 working days.'
    }
  ];

  const handleTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => setTicketSubmitted(false), 4000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Help Desk & Student Grievances" 
      description="Student Support Services • Department Directory • Support Ticket Desk"
    >
      {/* Toast Alert */}
      {ticketSubmitted && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">Ticket #TKT-2026-9041 submitted to the designated department!</span>
        </div>
      )}

      {/* Campus Support Directory */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-5">University Key Officials & Department Directory</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {contacts.map((c, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span className="text-[10px] font-bold text-[#7c3aed] uppercase tracking-wider block mb-1">{c.role}</span>
              <h4 className="text-sm font-bold text-slate-900">{c.name}</h4>
              <div className="space-y-1 mt-2 text-slate-500">
                <p className="flex items-center gap-1.5"><Mail size={12} className="text-slate-400" /> {c.email}</p>
                <p className="flex items-center gap-1.5"><Phone size={12} className="text-slate-400" /> {c.phone}</p>
                <p className="flex items-center gap-1.5"><MapPin size={12} className="text-slate-400" /> {c.room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* FAQs */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden text-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 font-bold text-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span>{f.q}</span>
                  {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Ticket Desk */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-1">Submit a Grievance or Support Ticket</h3>
          <p className="text-xs text-slate-500 mb-4">Official response guaranteed within 24 to 48 business hours.</p>

          <form onSubmit={handleTicket} className="space-y-3.5 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Select Department</label>
              <select className="w-full p-2.5 rounded-xl border border-slate-200 font-medium text-slate-700">
                <option>Examination Cell (Hall Ticket / Marks discrepancy)</option>
                <option>Accounts & Fee Payment</option>
                <option>Training & Placements (T&P)</option>
                <option>Campus IT & Wi-Fi Authentication</option>
                <option>Hostel & Mess Grievance</option>
                <option>Academic Advisor / HOD</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Subject / Query Title</label>
              <input 
                type="text" 
                required 
                placeholder="e.g., Biometric punch correction for Oct 16"
                className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Detailed Explanation</label>
              <textarea 
                rows={4} 
                required 
                placeholder="Explain your issue in detail. Include dates, course codes, and context..."
                className="w-full p-3 rounded-xl border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-2.5 rounded-xl bg-[#7c3aed] text-white font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
            >
              Submit Ticket to Administration
            </button>
          </form>
        </div>
      </div>
    </CollegeLayout>
  );
}
