import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  HelpCircle, Phone, Mail, Clock, MessageSquare, Send, 
  ChevronDown, ChevronUp, CheckCircle2, Bus, CreditCard, 
  BookOpen, Heart, Shield, FileText, User
} from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Attendance & Leave',
    q: 'How do I apply for medical or sanctioned leave for my child?',
    a: 'You can apply directly from the Parent Portal by navigating to Attendance → "Apply for Student Leave". Fill in the date span, reason (Medical/Family Event), and upload a doctor prescription if leave exceeds 2 consecutive days. The class mentor will review and approve within 12 hours.',
  },
  {
    category: 'Fees & Taxation',
    q: 'Where can I download Section 80C tax exemption receipts for school tuition fee?',
    a: 'Go to the Tuition Fees page. The verified payment receipts table displays an instant "Download 80C PDF" button for each cleared transaction. The receipts feature the school registration number, PAN, and digital seal required by Income Tax authorities.',
  },
  {
    category: 'Transport & GPS',
    q: 'What is the procedure to request a change in bus stop or route?',
    a: 'Permanent or temporary bus stop adjustments require 3 working days notice. You can submit a ticket under the "Transport" category below or contact Transport Coordinator Mr. Balram directly at +91 98112 34567. A verified gate pass will be reissued.',
  },
  {
    category: 'Academics & Mentors',
    q: 'Can I schedule a consultation with the class mentor outside of formal PTMs?',
    a: 'Yes. Both Mrs. Ananya Sharma (Class 10-A) and Mrs. Neha Batra (Class 7-B) are available during Zero Period on working days (02:00 PM to 02:40 PM) by prior appointment. You can leave a note via the Remarks page or submit a query here.',
  },
  {
    category: 'School Uniform',
    q: 'What are the prescribed uniform guidelines for winter and sports days?',
    a: 'Summer uniforms are in effect until 31 October 2026. Effective 04 November 2026, compulsory winter uniform (navy blue blazers and woolen pullovers) begins. On Wednesdays and Saturdays, students must wear their respective House tracksuits (Tagore Blue for Rahul, Gandhi Green for Ananya) and white PT shoes.',
  },
];

export const ParentHelp: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [ticketChild, setTicketChild] = useState<'rahul' | 'ananya'>('rahul');
  const [ticketDept, setTicketDept] = useState('Academics');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketMessage.trim()) return;
    setTicketSuccess(true);
    setTicketSubject('');
    setTicketMessage('');
    setTimeout(() => setTicketSuccess(false), 5000);
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Parent Helpdesk & School Directory"
      description="Direct contact directory for school departments, frequently asked questions, and official support ticket submission."
    >
      <div className="space-y-6">
        {/* Top Banner */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Parent Helpdesk & School Directory</h1>
        <p className="text-sm text-gray-600 mt-1">
          Direct contact directory for school departments, frequently asked questions, and official support ticket submission.
        </p>
      </div>

      {/* Official School Contact Directory Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Reception */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg"><Phone className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Main Reception & Admin</h3>
              <p className="text-xs text-gray-500">General queries & appointments</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Phone: <strong className="text-gray-900">+91 124 456 7890 (Ext 101)</strong></div>
            <div>Email: <strong className="text-gray-900">reception@dpsgurugram.edu.in</strong></div>
            <div className="text-gray-500">Hours: Mon – Sat (08:00 AM – 03:30 PM)</div>
          </div>
        </div>

        {/* Card 2: Accounts */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg"><CreditCard className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Accounts & Fee Treasury</h3>
              <p className="text-xs text-gray-500">Tuition, receipts & 80C certificates</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Phone: <strong className="text-gray-900">+91 124 456 7892 (Ext 104)</strong></div>
            <div>Email: <strong className="text-gray-900">accounts@dpsgurugram.edu.in</strong></div>
            <div className="text-gray-500">Counter: 09:00 AM – 02:00 PM</div>
          </div>
        </div>

        {/* Card 3: Transport */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg"><Bus className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Transport & Bus Fleet</h3>
              <p className="text-xs text-gray-500">Route #14 in-charge Mr. Balram</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Mobile: <strong className="text-gray-900">+91 98112 34567</strong></div>
            <div>Control Room: <strong className="text-gray-900">+91 124 456 7894</strong></div>
            <div className="text-gray-500">Helpline active during bus runs (06:30 – 17:00)</div>
          </div>
        </div>

        {/* Card 4: Examination Cell */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg"><BookOpen className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">CBSE Examination Wing</h3>
              <p className="text-xs text-gray-500">Class 10 LOC, admit cards & marks</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Phone: <strong className="text-gray-900">+91 124 456 7893 (Ext 106)</strong></div>
            <div>Email: <strong className="text-gray-900">cbse.cell@dpsgurugram.edu.in</strong></div>
            <div className="text-gray-500">Coordinator: Dr. A.K. Srivastava</div>
          </div>
        </div>

        {/* Card 5: Infirmary */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-lg"><Heart className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Medical Infirmary</h3>
              <p className="text-xs text-gray-500">First aid, allergies & health logs</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Phone: <strong className="text-gray-900">+91 124 456 7898</strong></div>
            <div>Incharge: <strong className="text-gray-900">Dr. Anita (Resident MO)</strong></div>
            <div className="text-gray-500">On duty 24/7 during school & sports hours</div>
          </div>
        </div>

        {/* Card 6: Counselor */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg"><User className="w-5 h-5" /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Student Counseling Cell</h3>
              <p className="text-xs text-gray-500">Wellbeing & career guidance</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 border-t border-gray-100 pt-3">
            <div>Phone: <strong className="text-gray-900">+91 124 456 7895</strong></div>
            <div>Counselor: <strong className="text-gray-900">Ms. Ritu Sen (Child Psychologist)</strong></div>
            <div className="text-gray-500">Confidential appointments available</div>
          </div>
        </div>
      </div>

      {/* FAQs and Submit Ticket Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: FAQs Accordion */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-gray-900">Frequently Asked Parent Questions</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition-all">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 pt-1">{faq.q}</h4>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-gray-50/80 border-t border-gray-100 text-xs text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Submit Ticket Form */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <MessageSquare className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="text-base font-bold text-gray-900">Submit an Official Inquiry</h3>
              <p className="text-xs text-gray-500">Tracked ticket response within 24 business hours</p>
            </div>
          </div>

          {ticketSuccess ? (
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-sm font-bold text-emerald-900">Inquiry Ticket #TKT-{Math.floor(1000 + Math.random() * 9000)} Created</h4>
              <p className="text-xs text-emerald-800">
                Your message has been assigned to the designated department. A formal response will be dispatched to your registered email and portal notifications.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Student</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTicketChild('rahul')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      ticketChild === 'rahul'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Rahul (10-A)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTicketChild('ananya')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      ticketChild === 'ananya'
                        ? 'border-pink-600 bg-pink-50 text-pink-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Ananya (7-B)
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Concerned Department</label>
                <select
                  value={ticketDept}
                  onChange={(e) => setTicketDept(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                >
                  <option>Academics & Mentorship</option>
                  <option>Accounts & Fee Payment</option>
                  <option>Transport & Bus Route #14</option>
                  <option>CBSE Examination Cell</option>
                  <option>Medical & Infirmary</option>
                  <option>General Administration</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Subject / Summary</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clarification regarding Math practical syllabus"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Detailed Query</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe your query or request with relevant details..."
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" /> Submit Inquiry Ticket
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
