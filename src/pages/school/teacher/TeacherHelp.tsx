import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  Phone, 
  Mail, 
  Laptop, 
  ShieldCheck, 
  FileCheck,
  Building
} from 'lucide-react';

export function TeacherHelp() {
  const user = USERS.teacher;
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Gradebook & Marks Moderation');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How do I lock and publish Mid-Term Examination marks to parents?',
      category: 'Exams',
      a: 'Navigate to "Results" in the sidebar. Once you verify Theory (/80) and Internal Assessment (/20) scores, click the "Lock & Publish" button in the top right. You will be prompted for an SMS 2FA confirmation code before marks are released to student and parent accounts.'
    },
    {
      q: 'What is the official procedure for requesting an emergency period substitution?',
      category: 'Administration',
      a: 'Go to "Timetable" and select "Request Substitution". Choose the affected date, periods, and select an available faculty colleague or tick "Route to Academic Coordinator". Requests submitted before 07:30 AM are allocated automatically.'
    },
    {
      q: 'How do I send automated SMS alerts to parents of chronically absent students?',
      category: 'Attendance',
      a: 'In "Attendance", after marking the daily register for Class 10-A, click the "SMS Absent Parents" button in the action bar. The ERP gateway sends an automated SMS alert stating date, time, and class teacher contact.'
    },
    {
      q: 'How can I upload custom PDF reference materials or problem sheets for assignments?',
      category: 'Homework',
      a: 'When creating an assignment in "Homework" or "Assignments", drag and drop your PDF or DOCX file into the attachment box. The maximum file limit per assignment is 50 MB.'
    },
    {
      q: 'Where do I find official CBSE Board syllabus documents and previous year question banks?',
      category: 'Curriculum',
      a: 'Go to "My Classes" and switch to the "CBSE Curriculum Blueprint" tab. There you can view unit-wise weightage distributions, question typology breakdowns, and download sample question papers.'
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
      role="teacher" 
      user={user} 
      title="Faculty Help Desk & Academic Support"
      description="Resolve portal questions, consult institutional procedures, or connect directly with the Academic Coordinator and IT Cell."
    >
      <div className="space-y-8">

        {/* SUPPORT DIRECTORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-blue-600 mb-2.5">
              <BookOpen className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Academic Coordinator</span>
            </div>
            <p className="text-base font-bold text-slate-900">Mr. Anand Saxena</p>
            <p className="text-sm text-slate-500 mt-1">academic.coord@greenfield.edu.in</p>
            <p className="text-sm text-slate-400 mt-0.5">Ext: 204 • Room 102</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-purple-600 mb-2.5">
              <FileCheck className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Examination Cell</span>
            </div>
            <p className="text-base font-bold text-slate-900">Dr. K. N. Rao</p>
            <p className="text-sm text-slate-500 mt-1">examcell@greenfield.edu.in</p>
            <p className="text-sm text-slate-400 mt-0.5">Ext: 108 • Senior Wing</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-2.5">
              <Laptop className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">IT & Portal Support</span>
            </div>
            <p className="text-base font-bold text-slate-900">Er. Mayank Soni</p>
            <p className="text-sm text-slate-500 mt-1">support@linkuperp.edu</p>
            <p className="text-sm text-slate-400 mt-0.5">Ext: 302 • IT Lab 2</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2.5 text-amber-600 mb-2.5">
              <Building className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">HR & Staff Affairs</span>
            </div>
            <p className="text-base font-bold text-slate-900">Mrs. Neha Kapoor</p>
            <p className="text-sm text-slate-500 mt-1">hr@greenfield.edu.in</p>
            <p className="text-sm text-slate-400 mt-0.5">Ext: 101 • Admin Block</p>
          </div>
        </div>

        {/* 2-COLUMN SECTION: FAQS & TICKET FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* FAQS (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Faculty Frequently Asked Questions</h3>
                </div>

                <div className="relative min-w-[260px]">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search faculty FAQ answers..."
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="divide-y divide-slate-100 mt-2">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-4"
                      >
                        <span className="text-base font-bold text-slate-800 leading-snug">{faq.q}</span>
                        <span className="text-slate-400 shrink-0">
                          {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-3 text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100 animate-in fade-in duration-150">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* TICKET SUBMISSION (1 Col) */}
          <div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Send Faculty Support Query</h3>
              <p className="text-sm text-slate-500 mb-5">Have a portal or academic inquiry? Submit a ticket directly to the coordinator.</p>

              {ticketSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Faculty Ticket #FTCK-2026-419 Logged</h4>
                  <p className="text-sm text-slate-500">
                    Your request has been routed to the Academic Cell. Expected turnaround is within 3 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Concern Category</label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Gradebook & Marks Moderation</option>
                      <option>Class Attendance Discrepancy</option>
                      <option>Timetable & Period Substitution</option>
                      <option>Exam Duty Scheduling</option>
                      <option>Classroom Audio/Visual Hardware</option>
                      <option>Portal Login & Security</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                    <input 
                      type="text"
                      required
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="Brief topic of your inquiry..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Detailed Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      placeholder="Explain your inquiry, affected student rolls, or technical issue..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Faculty Ticket
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
