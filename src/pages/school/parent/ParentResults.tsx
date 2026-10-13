import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Award, Download, Printer, CheckCircle, ChevronDown, 
  TrendingUp, BookOpen, AlertCircle, Calendar, ShieldCheck, Sparkles, User
} from 'lucide-react';

interface SubjectResult {
  code: string;
  name: string;
  theoryMax: number;
  theoryScored: number;
  internalMax: number;
  internalScored: number;
  totalMax: number;
  totalScored: number;
  grade: string;
  classAvg: number;
  classHigh: number;
  teacherRemarks: string;
}

interface TermReport {
  termName: string;
  academicYear: string;
  examDate: string;
  totalMax: number;
  totalScored: number;
  percentage: number;
  rank: number;
  totalStudents: number;
  grade: string;
  cgpa: number;
  resultStatus: 'PASSED WITH DISTINCTION' | 'PASSED';
  subjects: SubjectResult[];
  coScholastic: { activity: string; grade: string; remarks: string }[];
  principalRemarks: string;
  classTeacherRemarks: string;
}

const rahulReports: Record<string, TermReport> = {
  term1: {
    termName: 'Term 1 Mid-Term Board Evaluation (CBSE Pattern)',
    academicYear: '2026-2027',
    examDate: '15 Sep - 26 Sep 2026',
    totalMax: 500,
    totalScored: 442,
    percentage: 88.4,
    rank: 6,
    totalStudents: 42,
    grade: 'A1',
    cgpa: 8.8,
    resultStatus: 'PASSED WITH DISTINCTION',
    subjects: [
      {
        code: '041',
        name: 'Mathematics',
        theoryMax: 80,
        theoryScored: 69,
        internalMax: 20,
        internalScored: 19,
        totalMax: 100,
        totalScored: 88,
        grade: 'A1',
        classAvg: 71.4,
        classHigh: 97,
        teacherRemarks: 'Excellent analytical speed in trigonometry and polynomial proofs.',
      },
      {
        code: '086',
        name: 'Science (Physics, Chem, Bio)',
        theoryMax: 80,
        theoryScored: 67,
        internalMax: 20,
        internalScored: 18,
        totalMax: 100,
        totalScored: 85,
        grade: 'A2',
        classAvg: 68.2,
        classHigh: 94,
        teacherRemarks: 'Solid conceptual understanding. Needs minor practice in organic carbon reaction steps.',
      },
      {
        code: '184',
        name: 'English Language & Literature',
        theoryMax: 80,
        theoryScored: 71,
        internalMax: 20,
        internalScored: 18,
        totalMax: 100,
        totalScored: 89,
        grade: 'A1',
        classAvg: 74.0,
        classHigh: 92,
        teacherRemarks: 'Impressive analytical essay and creative expression in reading comprehension.',
      },
      {
        code: '087',
        name: 'Social Science',
        theoryMax: 80,
        theoryScored: 68,
        internalMax: 20,
        internalScored: 18,
        totalMax: 100,
        totalScored: 86,
        grade: 'A2',
        classAvg: 70.8,
        classHigh: 95,
        teacherRemarks: 'Very good timeline maps and constitutional law case study answers.',
      },
      {
        code: '402',
        name: 'Information Technology',
        theoryMax: 50,
        theoryScored: 46,
        internalMax: 50,
        internalScored: 48,
        totalMax: 100,
        totalScored: 94,
        grade: 'A1',
        classAvg: 79.5,
        classHigh: 99,
        teacherRemarks: 'Exceptional relational database design and Python coding assignments.',
      },
    ],
    coScholastic: [
      { activity: 'Work Education (SUPW / Electronics)', grade: 'A', remarks: 'Designed operational solar lamp kit with high precision.' },
      { activity: 'Art & Cultural Education', grade: 'A', remarks: 'Active participant in school brass band & stage orchestra.' },
      { activity: 'Health & Physical Education', grade: 'A+', remarks: 'Vice-Captain of School Junior Cricket Squad. High stamina.' },
      { activity: 'Discipline & School Values', grade: 'A', remarks: 'Demonstrates exemplary conduct, punctuality, and mentor respect.' },
    ],
    principalRemarks: 'Rahul displays remarkable intellectual curiosity and consistent academic work ethic. Keep targeting 92%+ in the upcoming CBSE Pre-Boards.',
    classTeacherRemarks: 'Diligent, attentive, and collaborative student. Mrs. Ananya Sharma is proud of his steady progress.',
  },
  unit1: {
    termName: 'Periodic Assessment 1 (Unit Test)',
    academicYear: '2026-2027',
    examDate: '18 Jul - 25 Jul 2026',
    totalMax: 250,
    totalScored: 216,
    percentage: 86.4,
    rank: 7,
    totalStudents: 42,
    grade: 'A2',
    cgpa: 8.6,
    resultStatus: 'PASSED',
    subjects: [
      { code: '041', name: 'Mathematics', theoryMax: 40, theoryScored: 34, internalMax: 10, internalScored: 9, totalMax: 50, totalScored: 43, grade: 'A2', classAvg: 36, classHigh: 48, teacherRemarks: 'Good foundation in real numbers.' },
      { code: '086', name: 'Science', theoryMax: 40, theoryScored: 35, internalMax: 10, internalScored: 9, totalMax: 50, totalScored: 44, grade: 'A1', classAvg: 35, classHigh: 49, teacherRemarks: 'High grasp on optics and light rays.' },
      { code: '184', name: 'English', theoryMax: 40, theoryScored: 36, internalMax: 10, internalScored: 8, totalMax: 50, totalScored: 44, grade: 'A1', classAvg: 37, classHigh: 47, teacherRemarks: 'Great vocabulary.' },
      { code: '087', name: 'Social Science', theoryMax: 40, theoryScored: 33, internalMax: 10, internalScored: 9, totalMax: 50, totalScored: 42, grade: 'A2', classAvg: 34, classHigh: 46, teacherRemarks: 'Good answers.' },
      { code: '402', name: 'IT', theoryMax: 40, theoryScored: 35, internalMax: 10, internalScored: 8, totalMax: 50, totalScored: 43, grade: 'A2', classAvg: 38, classHigh: 50, teacherRemarks: 'Well prepared.' },
    ],
    coScholastic: [
      { activity: 'Physical Education', grade: 'A', remarks: 'Good stamina' },
      { activity: 'Discipline', grade: 'A', remarks: 'Regular and disciplined' }
    ],
    principalRemarks: 'Good start to Class 10 academic session.',
    classTeacherRemarks: 'Consistent effort shown in all subjects.',
  }
};

const ananyaReports: Record<string, TermReport> = {
  term1: {
    termName: 'Term 1 Half-Yearly Examination',
    academicYear: '2026-2027',
    examDate: '16 Sep - 24 Sep 2026',
    totalMax: 500,
    totalScored: 456,
    percentage: 91.2,
    rank: 3,
    totalStudents: 38,
    grade: 'A1',
    cgpa: 9.2,
    resultStatus: 'PASSED WITH DISTINCTION',
    subjects: [
      {
        code: 'MTH-7',
        name: 'Mathematics',
        theoryMax: 80,
        theoryScored: 72,
        internalMax: 20,
        internalScored: 20,
        totalMax: 100,
        totalScored: 92,
        grade: 'A1',
        classAvg: 73.0,
        classHigh: 96,
        teacherRemarks: 'Brilliant conceptual grasp on integers and linear equations.',
      },
      {
        code: 'SCI-7',
        name: 'General Science',
        theoryMax: 80,
        theoryScored: 74,
        internalMax: 20,
        internalScored: 19,
        totalMax: 100,
        totalScored: 93,
        grade: 'A1',
        classAvg: 71.5,
        classHigh: 95,
        teacherRemarks: 'Excellent 3D biology diagrams and experimental deductions.',
      },
      {
        code: 'ENG-7',
        name: 'English Literature & Grammar',
        theoryMax: 80,
        theoryScored: 70,
        internalMax: 20,
        internalScored: 19,
        totalMax: 100,
        totalScored: 89,
        grade: 'A1',
        classAvg: 75.2,
        classHigh: 94,
        teacherRemarks: 'Lovely creative storytelling and grammar accuracy.',
      },
      {
        code: 'SST-7',
        name: 'Social Studies (Hist, Geog, Civics)',
        theoryMax: 80,
        theoryScored: 71,
        internalMax: 20,
        internalScored: 18,
        totalMax: 100,
        totalScored: 89,
        grade: 'A1',
        classAvg: 72.0,
        classHigh: 93,
        teacherRemarks: 'Very observant map pointing and historical timeline comprehension.',
      },
      {
        code: 'HIN-7',
        name: 'Hindi Second Language',
        theoryMax: 80,
        theoryScored: 73,
        internalMax: 20,
        internalScored: 20,
        totalMax: 100,
        totalScored: 93,
        grade: 'A1',
        classAvg: 76.0,
        classHigh: 98,
        teacherRemarks: 'Sublime handwriting, poetry recitation, and essay writing.',
      },
    ],
    coScholastic: [
      { activity: 'Visual & Fine Arts', grade: 'A+', remarks: 'Won 1st prize in Zonal Watercolor Landscape Competition.' },
      { activity: 'Classical Dance & Music', grade: 'A', remarks: 'Active participant in school foundation choir.' },
      { activity: 'Physical Fitness & Yoga', grade: 'A', remarks: 'Enthusiastic participant in morning yoga asanas.' },
      { activity: 'Discipline & Politeness', grade: 'A+', remarks: 'Exceptionally well-mannered and respectful.' },
    ],
    principalRemarks: 'Ananya is an all-round star student of Middle School. Commendable academic consistency and leadership.',
    classTeacherRemarks: 'A sheer delight to have in Class 7-B. Highly proactive in group learning.',
  }
};

export const ParentResults: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [selectedTerm, setSelectedTerm] = useState<'term1' | 'unit1'>('term1');

  const currentReport: TermReport = selectedChild === 'rahul' 
    ? rahulReports[selectedTerm] || rahulReports.term1
    : ananyaReports.term1;

  const handleDownloadPDF = () => {
    alert(`Downloading Official CBSE Digital Marksheet for ${selectedChild === 'rahul' ? 'Rahul Sharma (Class 10-A)' : 'Ananya Sharma (Class 7-B)'} - ${currentReport.termName}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Term Examination Results & Report Cards"
      description="Official CBSE compliant term report card, scholastic & co-scholastic marksheets, teacher assessments, and rank metrics."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Term Examination Results & Report Cards</h1>
          <p className="text-sm text-gray-600 mt-1">
            Official CBSE compliant term report card, scholastic & co-scholastic marksheets, teacher assessments, and rank metrics.
          </p>
        </div>

        {/* Child Selector */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => { setSelectedChild('rahul'); setSelectedTerm('term1'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => { setSelectedChild('ananya'); setSelectedTerm('term1'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* Term Selector & Quick Export Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <span className="text-sm font-semibold text-gray-700">Select Exam Session:</span>
          {selectedChild === 'rahul' ? (
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value as any)}
              className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-gray-800"
            >
              <option value="term1">Term 1 Mid-Term Board Evaluation (Sep 2026)</option>
              <option value="unit1">Periodic Assessment 1 (Unit Test - Jul 2026)</option>
            </select>
          ) : (
            <span className="text-sm font-bold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
              Term 1 Half-Yearly Examination (Sep 2026)
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            <Printer className="w-4 h-4 text-gray-600" /> Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF Marksheet
          </button>
        </div>
      </div>

      {/* Official Summary Card Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-10">
          <Award className="w-64 h-64" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-indigo-100 text-xs font-medium backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>CBSE Affiliation No: 2130842 • Delhi Public Senior Secondary School</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{currentReport.termName}</h2>
            <p className="text-xs sm:text-sm text-indigo-200">
              Academic Session {currentReport.academicYear} • Exam Period: {currentReport.examDate}
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-indigo-100">
              <span>Student: <strong>{selectedChild === 'rahul' ? 'Rahul Sharma' : 'Ananya Sharma'}</strong></span>
              <span>•</span>
              <span>Class: <strong>{selectedChild === 'rahul' ? '10-A (Roll 14)' : '7-B (Roll 08)'}</strong></span>
              <span>•</span>
              <span>Admn No: <strong>{selectedChild === 'rahul' ? 'DPS/2021/1042' : 'DPS/2024/3192'}</strong></span>
            </div>
          </div>

          {/* Performance Pill Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{currentReport.percentage}%</div>
              <div className="text-xs text-indigo-200 mt-0.5">Aggregate Score</div>
            </div>
            <div className="text-center border-l border-white/20 pl-3">
              <div className="text-2xl font-bold text-emerald-300">{currentReport.grade}</div>
              <div className="text-xs text-indigo-200 mt-0.5">Overall Grade</div>
            </div>
            <div className="text-center border-l border-white/20 pl-3">
              <div className="text-2xl font-bold text-amber-300">#{currentReport.rank}</div>
              <div className="text-xs text-indigo-200 mt-0.5">Class Rank (of {currentReport.totalStudents})</div>
            </div>
            <div className="text-center border-l border-white/20 pl-3">
              <div className="text-2xl font-bold text-white">{currentReport.cgpa}</div>
              <div className="text-xs text-indigo-200 mt-0.5">Cumulative GPA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scholastic Marks Table (Part 1 - Academic) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div>
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Part 1: Scholastic Academic Evaluation
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Theory (out of 80) + Internal Assessment / Practical (out of 20)</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> {currentReport.resultStatus}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Subject & Code</th>
                <th className="py-3 px-3 text-center">Theory Scored</th>
                <th className="py-3 px-3 text-center">Internal / Practical</th>
                <th className="py-3 px-3 text-center">Total Marks</th>
                <th className="py-3 px-3 text-center">Grade</th>
                <th className="py-3 px-3 text-center">Class Avg</th>
                <th className="py-3 px-3 text-center">Class Top</th>
                <th className="py-3 px-4">Teacher Evaluation & Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-normal text-gray-800">
              {currentReport.subjects.map((sub, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">
                    <div>{sub.name}</div>
                    <span className="text-xs text-gray-400 font-mono">Code {sub.code}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-medium">
                    {sub.theoryScored} <span className="text-xs text-gray-400">/{sub.theoryMax}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-medium text-emerald-700">
                    {sub.internalScored} <span className="text-xs text-gray-400">/{sub.internalMax}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-gray-900">
                    {sub.totalScored} <span className="text-xs text-gray-400">/{sub.totalMax}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      sub.grade === 'A1' ? 'bg-emerald-100 text-emerald-800' :
                      sub.grade === 'A2' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {sub.grade}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center text-xs text-gray-500 font-medium">
                    {sub.classAvg}
                  </td>
                  <td className="py-3.5 px-3 text-center text-xs font-semibold text-gray-700">
                    {sub.classHigh}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-600 italic">
                    "{sub.teacherRemarks}"
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 font-bold text-gray-900 border-t border-gray-200">
              <tr>
                <td className="py-3.5 px-4 text-sm">Grand Total (5 Subjects)</td>
                <td colSpan={2} className="py-3.5 px-3 text-center text-xs text-gray-500">
                  Aggregate: {currentReport.totalScored} Marks Scored
                </td>
                <td className="py-3.5 px-3 text-center text-sm font-bold text-indigo-700">
                  {currentReport.totalScored} / {currentReport.totalMax}
                </td>
                <td className="py-3.5 px-3 text-center text-xs font-bold text-emerald-700">
                  {currentReport.grade}
                </td>
                <td colSpan={3} className="py-3.5 px-4 text-right text-xs text-gray-500">
                  Percentage: <span className="text-sm font-bold text-gray-900">{currentReport.percentage}%</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Part 2: Co-Scholastic & Life Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Part 2: Co-Scholastic Activities & Personality
          </h3>
          <p className="text-xs text-gray-500">Evaluated on a 3-point grading scale (A=Outstanding, B=Very Good, C=Fair)</p>
          
          <div className="space-y-3">
            {currentReport.coScholastic.map((cs, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-900">{cs.activity}</h4>
                  <p className="text-xs text-gray-600 italic">{cs.remarks}</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded font-bold text-xs flex-shrink-0">
                  Grade {cs.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors & Principal Digital Remarks */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-600" />
              Institutional Comments & Signatures
            </h3>
            <p className="text-xs text-gray-500">Official remarks recorded on the school student permanent registry.</p>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
                <div className="text-xs font-semibold text-indigo-900">Class Mentor's Appraisal</div>
                <p className="text-xs text-gray-700 italic mt-1">"{currentReport.classTeacherRemarks}"</p>
                <div className="text-right text-[11px] text-gray-500 font-medium mt-1">— Mrs. Ananya Sharma, PGT Math</div>
              </div>

              <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100">
                <div className="text-xs font-semibold text-purple-900">Principal's Endorsement</div>
                <p className="text-xs text-gray-700 italic mt-1">"{currentReport.principalRemarks}"</p>
                <div className="text-right text-[11px] text-gray-500 font-medium mt-1">— Dr. S. K. Mahapatra, Principal</div>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Digitally Certified CBSE Transcript
            </span>
            <span>Date: 28 Sep 2026</span>
          </div>
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
