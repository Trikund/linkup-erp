import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  ChartNoAxesCombined, 
  Save, 
  Download, 
  CheckCircle2, 
  Search, 
  Lock, 
  Sparkles, 
  FileSpreadsheet, 
  Award,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface StudentResultEntry {
  id: number;
  roll: number;
  admNo: string;
  name: string;
  avatar: string;
  theory: number;
  internal: number;
  total: number;
  grade: string;
  gradePoint: number;
  remark: string;
}

export function TeacherResults() {
  const user = USERS.teacher;
  const [selectedExam, setSelectedExam] = useState('CBSE Mid-Term Examination 2026');
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveToast, setSaveToast] = useState(false);
  const [publishToast, setPublishToast] = useState(false);

  const [marksData, setMarksData] = useState<StudentResultEntry[]>([
    { id: 1, roll: 1, admNo: 'DPS/2021/1001', name: 'Aarav Gupta', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', theory: 79, internal: 20, total: 99, grade: 'A1', gradePoint: 10.0, remark: 'Exceptional mathematical rigor & speed. Outstanding achievement.' },
    { id: 2, roll: 2, admNo: 'DPS/2021/1008', name: 'Ananya Joshi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', theory: 76, internal: 19, total: 95, grade: 'A1', gradePoint: 10.0, remark: 'Very thorough derivations and neat step presentation.' },
    { id: 3, roll: 3, admNo: 'DPS/2021/1014', name: 'Aryan Kapoor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', theory: 62, internal: 17, total: 79, grade: 'B1', gradePoint: 8.0, remark: 'Good grasp of algebra. Needs more practice with circle theorems.' },
    { id: 4, roll: 4, admNo: 'DPS/2021/1020', name: 'Diya Sen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', theory: 78, internal: 19, total: 97, grade: 'A1', gradePoint: 10.0, remark: 'Flawless problem-solving. Exemplary subject performance.' },
    { id: 5, roll: 5, admNo: 'DPS/2021/1025', name: 'Eeshan Mathur', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', theory: 68, internal: 18, total: 86, grade: 'A2', gradePoint: 9.0, remark: 'Consistent learner. Solid performance in quadratic models.' },
    { id: 6, roll: 6, admNo: 'DPS/2021/1031', name: 'Isha Singhania', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop', theory: 71, internal: 18, total: 89, grade: 'A2', gradePoint: 9.0, remark: 'Shows high aptitude in coordinate geometry.' },
    { id: 7, roll: 7, admNo: 'DPS/2021/1035', name: 'Kabir Chawla', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', theory: 55, internal: 16, total: 71, grade: 'B1', gradePoint: 8.0, remark: 'Good effort. Requires practice with word problems and speed.' },
    { id: 8, roll: 8, admNo: 'DPS/2021/1038', name: 'Meera Nambiar', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', theory: 74, internal: 19, total: 93, grade: 'A1', gradePoint: 10.0, remark: 'Diligent and sharp in mathematical proofs.' },
    { id: 9, roll: 14, admNo: 'DPS/2021/1042', name: 'Rahul Sharma', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop', theory: 70, internal: 18, total: 88, grade: 'A2', gradePoint: 9.0, remark: 'Commendable leap in analytical performance since Unit Test 1.' },
    { id: 10, roll: 18, admNo: 'DPS/2021/1055', name: 'Rohan Mehta', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop', theory: 44, internal: 14, total: 58, grade: 'C1', gradePoint: 6.0, remark: 'Remedial coaching recommended for polynomial factorizations.' },
    { id: 11, roll: 21, admNo: 'DPS/2021/1063', name: 'Pranav Nair', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop', theory: 66, internal: 18, total: 84, grade: 'A2', gradePoint: 9.0, remark: 'Good step-wise presentation in coordinate geometry.' },
    { id: 12, roll: 22, admNo: 'DPS/2021/1068', name: 'Priya Sen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', theory: 72, internal: 19, total: 91, grade: 'A1', gradePoint: 10.0, remark: 'High accuracy and methodical solution writing.' },
    { id: 13, roll: 28, admNo: 'DPS/2021/1089', name: 'Tanmay Bhatt', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop', theory: 38, internal: 14, total: 52, grade: 'C1', gradePoint: 6.0, remark: 'Needs focused practice in real number proofs and arithmetic progressions.' },
  ]);

  const updateMarks = (id: number, field: 'theory' | 'internal', val: number) => {
    setMarksData(prev => prev.map(item => {
      if (item.id !== id) return item;
      const newTheory = field === 'theory' ? Math.min(80, Math.max(0, val)) : item.theory;
      const newInternal = field === 'internal' ? Math.min(20, Math.max(0, val)) : item.internal;
      const newTotal = newTheory + newInternal;

      let newGrade = 'D';
      let newGP = 4.0;
      if (newTotal >= 91) { newGrade = 'A1'; newGP = 10.0; }
      else if (newTotal >= 81) { newGrade = 'A2'; newGP = 9.0; }
      else if (newTotal >= 71) { newGrade = 'B1'; newGP = 8.0; }
      else if (newTotal >= 61) { newGrade = 'B2'; newGP = 7.0; }
      else if (newTotal >= 51) { newGrade = 'C1'; newGP = 6.0; }
      else if (newTotal >= 41) { newGrade = 'C2'; newGP = 5.0; }

      return {
        ...item,
        theory: newTheory,
        internal: newInternal,
        total: newTotal,
        grade: newGrade,
        gradePoint: newGP
      };
    }));
  };

  const updateRemark = (id: number, remark: string) => {
    setMarksData(prev => prev.map(m => m.id === id ? { ...m, remark } : m));
  };

  const handleSaveMarks = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handlePublish = () => {
    setPublishToast(true);
    setTimeout(() => setPublishToast(false), 3000);
  };

  const totalStudents = marksData.length;
  const avgMarks = (marksData.reduce((acc, curr) => acc + curr.total, 0) / totalStudents).toFixed(1);
  const highestMarks = Math.max(...marksData.map(m => m.total));
  const lowestMarks = Math.min(...marksData.map(m => m.total));
  const a1Count = marksData.filter(m => m.grade === 'A1').length;
  const a2Count = marksData.filter(m => m.grade === 'A2').length;
  const b1Count = marksData.filter(m => m.grade === 'B1').length;

  const filtered = marksData.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.admNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.roll.toString().includes(searchQuery)
  );

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Examination Results & Marks Entry"
      description="Enter theory & internal assessment marks, auto-calculate CBSE grade points, and publish verified marksheets to parents."
    >
      <div className="space-y-8">

        {/* FEEDBACK BANNERS */}
        {saveToast && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Marksheet data saved and synchronized to the Central Examination Database!</span>
          </div>
        )}

        {publishToast && (
          <div className="p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <Lock className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Gradebook successfully locked and published! Student and parent portals updated.</span>
          </div>
        )}

        {/* TOP STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Class Average</span>
            <span className="text-3xl lg:text-4xl font-extrabold text-blue-600 mt-2 block">{avgMarks} / 100</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Class {selectedClass}</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Highest Marks</span>
            <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600 mt-2 block">{highestMarks} / 100</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Aarav Gupta (Roll 1)</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Lowest Marks</span>
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-800 mt-2 block">{lowestMarks} / 100</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Remedial needed</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Top Tier (A1 & A2)</span>
            <span className="text-3xl lg:text-4xl font-extrabold text-purple-700 mt-2 block">{a1Count + a2Count} Students</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">{Math.round(((a1Count + a2Count) / totalStudents) * 100)}% of class strength</span>
          </div>
        </div>

        {/* GRADE DISTRIBUTION BAR */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="uppercase tracking-wider text-slate-500">CBSE Grade Distribution Breakdown</span>
            <span className="text-slate-600">Total Enrolled: {totalStudents} Students</span>
          </div>

          <div className="flex h-3 rounded-full overflow-hidden gap-1 bg-slate-100 p-0.5">
            <div className="bg-emerald-500 rounded-l-full" style={{ width: `${(a1Count / totalStudents) * 100}%` }} title={`A1: ${a1Count}`} />
            <div className="bg-blue-600" style={{ width: `${(a2Count / totalStudents) * 100}%` }} title={`A2: ${a2Count}`} />
            <div className="bg-indigo-500" style={{ width: `${(b1Count / totalStudents) * 100}%` }} title={`B1: ${b1Count}`} />
            <div className="bg-amber-400 rounded-r-full flex-1" title="B2 & C1" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> A1 (91-100): <strong>{a1Count}</strong></span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" /> A2 (81-90): <strong>{a2Count}</strong></span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> B1 (71-80): <strong>{b1Count}</strong></span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> B2 & C1 (51-70): <strong>{totalStudents - (a1Count + a2Count + b1Count)}</strong></span>
          </div>
        </div>

        {/* CONTROLS & FILTER */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Examination Term</label>
              <select 
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800"
              >
                <option>CBSE Mid-Term Examination 2026</option>
                <option>Unit Test 2 (September 2026)</option>
                <option>Unit Test 1 (July 2026)</option>
                <option>Pre-Board Examination 1</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Class & Section</label>
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800"
              >
                <option value="10-A">Class 10-A (Mentor Class • 42 Students)</option>
                <option value="10-B">Class 10-B (40 Students)</option>
                <option value="9-B">Class 9-B (40 Students)</option>
                <option value="11-A">Class 11-A (38 Students)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Search Student</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, roll, admission no..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MARKS ENTRY TABLE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Marksheet Roster: {selectedClass} • {selectedExam}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Theory Max: 80 Marks • Internal Continuous Assessment Max: 20 Marks • Total: 100 Marks</p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => alert('Exporting full marksheet in official CBSE Form A Excel format...')}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Export Excel
              </button>

              <button
                onClick={handlePublish}
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold hover:bg-blue-100 transition flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                Lock & Publish
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Roll / Adm</th>
                  <th className="py-4 px-6 font-bold">Student Name</th>
                  <th className="py-4 px-4 font-bold text-center">Theory (/80)</th>
                  <th className="py-4 px-4 font-bold text-center">Internal (/20)</th>
                  <th className="py-4 px-4 font-bold text-center">Total (/100)</th>
                  <th className="py-4 px-4 font-bold text-center">Grade</th>
                  <th className="py-4 px-6 font-bold">Faculty Observation Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-mono font-bold text-slate-800">
                      <div>#{item.roll}</div>
                      <div className="text-[11px] font-normal text-slate-400">{item.admNo}</div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-9 h-9 rounded-full object-cover border border-slate-200"
                        />
                        <span className="font-bold text-slate-900 text-base">{item.name}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <input 
                        type="number"
                        min={0}
                        max={80}
                        value={item.theory}
                        onChange={(e) => updateMarks(item.id, 'theory', Number(e.target.value))}
                        className="w-16 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-extrabold text-slate-900 text-center focus:bg-white focus:ring-2 focus:ring-blue-500"
                      />
                    </td>

                    <td className="py-4 px-4 text-center">
                      <input 
                        type="number"
                        min={0}
                        max={20}
                        value={item.internal}
                        onChange={(e) => updateMarks(item.id, 'internal', Number(e.target.value))}
                        className="w-16 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-extrabold text-slate-900 text-center focus:bg-white focus:ring-2 focus:ring-blue-500"
                      />
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className="text-base font-black text-slate-900">{item.total}</span>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-black ${
                        item.grade === 'A1' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        item.grade === 'A2' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        item.grade === 'B1' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
                        'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.grade} ({item.gradePoint})
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <input 
                        type="text"
                        value={item.remark}
                        onChange={(e) => updateRemark(item.id, e.target.value)}
                        placeholder="Add remarks for student report card..."
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Evaluator: <strong>Mrs. Ananya Sharma</strong> • Moderation verified by Academic Dean
            </span>

            <button
              onClick={handleSaveMarks}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Marksheet Changes
            </button>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
