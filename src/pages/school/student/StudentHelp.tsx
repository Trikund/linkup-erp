import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Info, 
  HelpCircle, 
  Mail, 
  Phone, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  WalletCards, 
  Bus, 
  MessageSquare,
  FileText
} from 'lucide-react';

export function StudentHelp() {
  const user = USERS.student;
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Academic & Exams');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How do I download my official Term examination report card?',
      category: 'Exams',
      a: 'Navigate to "Results" in the left sidebar navigation. Click the "Download Term 1 Marksheet (PDF)" button located at the top right of the marksheet table. The downloaded PDF includes official school seals and grade point conversions.'
    },
    {
      q: 'What should I do if an exam date overlaps with an Olympiad or Medical leave?',
      category: 'Exams',
      a: 'Submit an official Leave Sanction Request along with doctor certification or Olympiad admit card to your Class Teacher (Mrs. Sunita Roy) at least 3 business days prior to the examination date.'
    },
    {
      q: 'How can my parents pay the quarterly tuition fees online?',
      category: 'Fees',
      a: 'Go to the "Fees" page from the sidebar. Under the active quarter card, click "Pay Quarter Fee". You can complete payment instantly via UPI, Net Banking, or Credit/Debit Cards. Payment receipts are generated automatically.'
    },
    {
      q: 'Can I upload homework files in formats other than PDF?',
      category: 'Homework',
      a: 'Yes. Homework and assignment submissions accept PDF, DOCX, and high-resolution JPEG/PNG photo scans of handwritten notebook pages up to 25 MB per submission.'
    },
    {
      q: 'How do I request a temporary or permanent change in my school bus stop?',
      category: 'Transport',
      a: 'Go to "Certificates & Records" or visit the Transport Coordinator (Counter 6) during office hours (8:00 AM – 1:30 PM). Bus route changes require 48 hours for route manifest updates.'
    },
    {
      q: 'What is the minimum attendance requirement for CBSE Board Exam eligibility?',
      category: 'Attendance',
      a: 'As per CBSE secondary regulations, students must maintain a minimum of 75% aggregate attendance over the academic session to appear for final Board Preparatory examinations.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject('');
      setTicketMessage('');
    }, 2500);
  };

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Help Desk & Academic Support"
      description="Find answers to student portal queries, review academic guidelines, or connect directly with school department heads."
    >
      <div className="space-y-6">

        {/* Support Helplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-blue-600 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Exam Controller Desk</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Mr. Anand Saxena</p>
            <p className="text-xs text-slate-500 mt-1">exams@dpsdelhi.edu.in</p>
            <p className="text-xs text-slate-400 mt-0.5">Ext: 204 • Room 102</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-2">
              <WalletCards className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Accounts & Bursar</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Mr. R. K. Singhania</p>
            <p className="text-xs text-slate-500 mt-1">bursar@dpsdelhi.edu.in</p>
            <p className="text-xs text-slate-400 mt-0.5">Ext: 105 • Admin Block</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-amber-600 mb-2">
              <Bus className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Transport Helpline</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Mr. Balram (In-charge)</p>
            <p className="text-xs text-slate-500 mt-1">transport@dpsdelhi.edu.in</p>
            <p className="text-xs text-slate-400 mt-0.5">+91 94102 38910</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-purple-600 mb-2">
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">IT & ERP Portal Support</span>
            </div>
            <p className="text-sm font-bold text-slate-900">Portal Technical Team</p>
            <p className="text-xs text-slate-500 mt-1">support@linkuperp.edu</p>
            <p className="text-xs text-slate-400 mt-0.5">Response within 2 hours</p>
          </div>
        </div>

        {/* 2-Column Layout: FAQs on Left, Submit Query on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column: FAQs (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-base font-bold text-slate-900">Frequently Asked Questions</h3>
                </div>

                <div className="relative min-w-[240px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search FAQ answers..."
                    className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="divide-y divide-slate-100 mt-2">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-4"
                      >
                        <span className="text-xs font-bold text-slate-800 leading-snug">{faq.q}</span>
                        <span className="text-slate-400 shrink-0">
                          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-2.5 pt-2 text-xs text-slate-600 leading-relaxed font-normal bg-slate-50/60 p-3 rounded-xl border border-slate-100 animate-in fade-in duration-150">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Submit Support Ticket Form */}
          <div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sticky top-6">
              <h3 className="text-base font-bold text-slate-900 mb-1">Send Support Query</h3>
              <p className="text-xs text-slate-500 mb-4">Have an unresolved issue? Submit a ticket directly to the faculty desk.</p>

              {ticketSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Ticket #TCK-2026-891 Created</h4>
                  <p className="text-xs text-slate-500">
                    Your request has been routed to the relevant coordinator. You will receive an update in Notifications.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Concern Category</label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 bg-white"
                    >
                      <option>Academic & Exams</option>
                      <option>Attendance Discrepancy</option>
                      <option>Fee Payment Receipt</option>
                      <option>School Bus & Transport</option>
                      <option>Library & Textbooks</option>
                      <option>Portal Login & Technical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Subject</label>
                    <input 
                      type="text"
                      required
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="Brief topic of your query..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Detailed Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      placeholder="Explain your inquiry or issue clearly..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Support Ticket
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
