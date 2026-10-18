import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileCheck, Download, Printer, Calendar, Clock, MapPin, 
  AlertTriangle, ShieldCheck, CheckCircle2, User
} from 'lucide-react';

export function StudentExams() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [showHallTicketModal, setShowHallTicketModal] = useState(false);

  const datesheet = [
    { date: '16 Nov 2026', day: 'Monday', time: '10:00 AM - 01:00 PM', code: 'CS701', subject: 'Machine Learning & Neural Networks', hall: 'Hall 102 (Block C)', seat: 'C-42', maxMarks: 100 },
    { date: '19 Nov 2026', day: 'Thursday', time: '10:00 AM - 01:00 PM', code: 'CS702', subject: 'Cloud Computing Architecture', hall: 'Hall 102 (Block C)', seat: 'C-42', maxMarks: 100 },
    { date: '23 Nov 2026', day: 'Monday', time: '10:00 AM - 01:00 PM', code: 'CS703', subject: 'Advanced Database Systems', hall: 'Hall 104 (Block C)', seat: 'C-42', maxMarks: 100 },
    { date: '26 Nov 2026', day: 'Thursday', time: '10:00 AM - 01:00 PM', code: 'CS704', subject: 'Information & Cyber Security', hall: 'Hall 102 (Block C)', seat: 'C-42', maxMarks: 100 },
    { date: '30 Nov 2026', day: 'Monday', time: '10:00 AM - 01:00 PM', code: 'CS705E', subject: 'Deep Learning & Computer Vision', hall: 'Seminar Hall B', seat: 'S-18', maxMarks: 100 },
    { date: '04 Dec 2026', day: 'Friday', time: '09:00 AM - 05:00 PM', code: 'CS706P', subject: 'Major Project Phase-I Defense Viva', hall: 'Conference Hall', seat: 'Panel 3', maxMarks: 100 },
  ];

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Examinations & Hall Ticket" 
      description="Semester VII End-Semester Official Datesheet • Hall Ticket Verification"
    >
      {/* Top Hall Ticket Card */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-purple-950/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Hall Ticket Verified & Generated
              </span>
              <span className="text-xs text-white/70">Nov 2026 End-Sem Session</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">Official University Admit Card</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/80 mt-2">
              <span>Roll No: <strong className="text-white font-mono">21CS1048</strong></span>
              <span>Seat Allocation: <strong className="text-white font-mono">CSE-HALL1-042</strong></span>
              <span>Center: <strong className="text-white">Academic Block C, Hall 102</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowHallTicketModal(true)}
              className="px-5 py-2.5 rounded-xl bg-white text-[#7c3aed] text-xs font-bold hover:bg-slate-50 transition-all shadow-md flex items-center gap-2"
            >
              <FileCheck size={15} />
              <span>Preview Admit Card</span>
            </button>
            <button 
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5 backdrop-blur-md"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Datesheet Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7 mb-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">End-Semester Theory & Viva Examination Datesheet</h3>
            <p className="text-xs text-slate-500 font-medium">Reporting Time: 09:30 AM (Gates close at 09:45 AM sharp)</p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            6 Papers Scheduled
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Date & Day</th>
                <th className="py-3.5 px-3">Session Time</th>
                <th className="py-3.5 px-3">Subject Code</th>
                <th className="py-3.5 px-4">Subject Title</th>
                <th className="py-3.5 px-3">Exam Center Hall</th>
                <th className="py-3.5 px-3 text-center">Seat No</th>
                <th className="py-3.5 px-3 text-center">Max Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {datesheet.map((exam, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-bold text-slate-900">{exam.date}</p>
                    <p className="text-[11px] text-slate-400">{exam.day}</p>
                  </td>
                  <td className="py-4 px-3 font-mono font-semibold text-slate-700">{exam.time}</td>
                  <td className="py-4 px-3">
                    <span className="font-mono font-bold text-[#7c3aed] bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
                      {exam.code}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-800">{exam.subject}</td>
                  <td className="py-4 px-3 text-slate-600 font-medium">{exam.hall}</td>
                  <td className="py-4 px-3 text-center font-mono font-bold text-purple-700 bg-purple-50/50 rounded-lg">
                    {exam.seat}
                  </td>
                  <td className="py-4 px-3 text-center font-bold text-slate-700">{exam.maxMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guidelines & Rules Card */}
      <div className="bg-amber-50/60 border border-amber-200 rounded-3xl p-6 mb-8">
        <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
          <AlertTriangle size={18} className="text-amber-600" />
          <span>Mandatory University Examination Regulations</span>
        </h4>
        <ul className="text-xs text-amber-800/90 space-y-1.5 list-disc list-inside leading-relaxed">
          <li>Physical printed copy of the Hall Ticket and University Smart ID card are compulsory for entry.</li>
          <li>Calculators (non-programmable fx-991ES or similar) are allowed only in CS701 and CS704.</li>
          <li>Mobile phones, smartwatches, and programmable storage devices are strictly prohibited inside the exam hall.</li>
          <li>Late arrivals after 09:45 AM will not be allowed under university statutes.</li>
        </ul>
      </div>

      {/* Hall Ticket Preview Modal */}
      {showHallTicketModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="text-center border-b pb-4 mb-4">
              <h2 className="text-lg font-black text-slate-900">APEX INSTITUTE OF TECHNOLOGY</h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Office of the Controller of Examinations</p>
              <h3 className="text-sm font-bold text-[#7c3aed] mt-1">HALL TICKET / ADMIT CARD - SEMESTER VII (NOV 2026)</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <p className="text-slate-500">Student Name: <strong className="text-slate-900">SHIVAM SHARMA</strong></p>
                <p className="text-slate-500 mt-1">Roll No: <strong className="text-slate-900 font-mono">21CS1048</strong></p>
                <p className="text-slate-500 mt-1">PRN: <strong className="text-slate-900 font-mono">20230164002341</strong></p>
              </div>
              <div>
                <p className="text-slate-500">Branch: <strong className="text-slate-900">Computer Science & Engineering</strong></p>
                <p className="text-slate-500 mt-1">Center: <strong className="text-slate-900">Block C - Hall 102</strong></p>
                <p className="text-slate-500 mt-1">Eligibility Status: <strong className="text-emerald-600 font-bold">VERIFIED (86.4% Att.)</strong></p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden mb-5 text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 font-bold text-slate-600">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Code</th>
                    <th className="p-2">Subject</th>
                    <th className="p-2 text-center">Invigilator Sign</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {datesheet.map((d, i) => (
                    <tr key={i}>
                      <td className="p-2 font-medium">{d.date}</td>
                      <td className="p-2 font-mono font-bold text-[#7c3aed]">{d.code}</td>
                      <td className="p-2">{d.subject}</td>
                      <td className="p-2 text-center text-slate-300">_________________</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center pt-3 border-t">
              <span className="text-[11px] text-slate-400 font-mono">Digitally Certified by COE-ApexUniv</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowHallTicketModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    alert('Hall ticket downloaded as PDF.');
                    setShowHallTicketModal(false);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7c3aed] text-white hover:bg-purple-700 shadow-md"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
