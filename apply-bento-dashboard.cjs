const fs = require('fs');
const path = require('path');

const studentDashboardContent = \`import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Clock, ArrowUpRight, CheckCircle2, Circle, AlertCircle, 
  FileText, BookOpen, Calendar, ChevronRight, Download, 
  Sparkles, Layers, ShieldCheck, ExternalLink, Bookmark
} from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  // Interactive state for checklist
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Calculus Assignment #4 (Chapters 3-5)', subject: 'Math', due: 'Today, 05:00 PM', urgent: true, done: false },
    { id: 2, text: 'Submit Physics Lab Notebook (Experiment 6)', subject: 'Physics', due: 'Tomorrow, 10:00 AM', urgent: true, done: false },
    { id: 3, text: 'Read Literature Essay: Act III Macbeth', subject: 'English', due: 'Oct 16', urgent: false, done: true },
    { id: 4, text: 'React State Management Practice Project', subject: 'CS', due: 'Oct 18', urgent: false, done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const [activeTab, setActiveTab] = useState<'schedule' | 'grades'>('schedule');

  return (
    <SchoolLayout role="student" user={user}>
      <div className="space-y-6 max-w-[1500px] mx-auto pb-10">

        {/* 1. STUDIO EDITORIAL HEADER (No fake stock photo, high-end professional hierarchy) */}
        <div className="bg-[#0f1422] border border-slate-800/90 rounded-2xl p-6 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md font-semibold">
                ACADEMIC SESSION 2026–27
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-mono">TERM 1 • WEEK 8</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Rahul Sharma <span className="text-slate-500 font-normal text-lg">/ Grade 10-A</span>
            </h1>
            <p className="text-xs text-slate-400">
              Student ID: <span className="font-mono text-slate-300">#ST-1024</span> • Greenfield Academy • Advisor: <span className="text-slate-300 font-medium">Dr. Priya Patel</span>
            </p>
          </div>

          {/* Real-Time Period Status Pill */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center gap-4 shrink-0 shadow-inner">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">LIVE PERIOD (2 OF 6)</span>
                <span className="text-[10px] font-mono text-slate-500">ENDS 10:15 AM</span>
              </div>
              <p className="text-sm font-bold text-white mt-0.5">Advanced Mathematics</p>
              <p className="text-[11px] text-slate-400">Room 204 • Dr. Priya Patel</p>
            </div>
          </div>
        </div>

        {/* 2. BENTO GRID ARCHITECTURE (Custom weights, not repetitive template cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* BENTO CARD 1: TODAY'S TIMELINE & SCRUBBER (Span 7) */}
          <div className="lg:col-span-7 bg-[#0f1422] border border-slate-800/90 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-400" />
                  <h2 className="text-sm font-extrabold text-white tracking-wide uppercase">Today's Schedule & Timeline</h2>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Wednesday, Oct 14</span>
              </div>

              {/* Period Scrubber Bar */}
              <div className="grid grid-cols-6 gap-1.5 mb-6">
                {[
                  { p: 'P1', time: '08:00', done: true, current: false },
                  { p: 'P2', time: '09:15', done: false, current: true },
                  { p: 'P3', time: '10:30', done: false, current: false },
                  { p: 'P4', time: '11:45', done: false, current: false },
                  { p: 'P5', time: '01:30', done: false, current: false },
                  { p: 'P6', time: '02:45', done: false, current: false },
                ].map((slot, i) => (
                  <div key={i} className={\`p-2 rounded-lg text-center border \${
                    slot.current 
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-bold shadow-md shadow-blue-500/10' 
                      : slot.done 
                        ? 'bg-slate-900 border-slate-800 text-slate-500 line-through' 
                        : 'bg-slate-900/50 border-slate-800/60 text-slate-400'
                  }\`}>
                    <p className="text-[11px] font-mono">{slot.p}</p>
                    <p className="text-[9px] text-slate-500 font-mono mt-0.5">{slot.time}</p>
                  </div>
                ))}
              </div>

              {/* Class Schedule Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-1 rounded">09:15 - 10:15</span>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        Mathematics: Differential Calculus
                        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">ACTIVE NOW</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Room 204 • Priya Patel • Topic: Applications of Derivatives</p>
                    </div>
                  </div>
                  <button className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    Syllabus <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-800/80 px-2 py-1 rounded">10:30 - 11:30</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-200">Physics Laboratory</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Lab 2 (Science Wing) • Amit Verma • Bring Safety Goggles</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Upcoming</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-800/80 px-2 py-1 rounded">01:30 - 02:30</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-200">Computer Science: Data Structures</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Tech Wing • Vikram Singh • Practical Coding Session</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Upcoming</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Next Bell in: <strong className="font-mono text-white">42 mins</strong></span>
              <a href="/school/student/timetable" className="text-blue-400 hover:underline font-semibold flex items-center gap-1">
                Full 7-Day Timetable <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* BENTO CARD 2: ACADEMIC HEALTH & ATTENDANCE MATRIX (Span 5) */}
          <div className="lg:col-span-5 bg-[#0f1422] border border-slate-800/90 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <h2 className="text-sm font-extrabold text-white tracking-wide uppercase">Attendance Matrix & Health</h2>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  92.4% OVERALL
                </span>
              </div>

              {/* Metric stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Present Days</p>
                  <p className="text-xl font-extrabold text-white mt-1">24 <span className="text-xs text-slate-500 font-normal">/ 26</span></p>
                </div>
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Excused</p>
                  <p className="text-xl font-extrabold text-blue-400 mt-1">2 <span className="text-xs text-slate-500 font-normal">Days</span></p>
                </div>
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Streak</p>
                  <p className="text-xl font-extrabold text-amber-400 mt-1">14 <span className="text-xs text-slate-500 font-normal">Days</span></p>
                </div>
              </div>

              {/* GitHub-Style 4-Week Activity Matrix (Real human dev feel, not fake circular chart) */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-300">Last 4 Weeks Attendance Record</p>
                <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono text-slate-400 pb-1">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    1,1,1,1,1,
                    1,1,1,0,1,
                    1,1,1,1,1,
                    1,1,1,1,2 // 1: present, 0: absent, 2: today
                  ].map((status, idx) => (
                    <div 
                      key={idx} 
                      className={\`h-7 rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-transform hover:scale-105 \${
                        status === 2 ? 'bg-blue-600 text-white ring-2 ring-blue-400 shadow-md shadow-blue-500/30' :
                        status === 1 ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300' :
                        'bg-rose-500/20 border border-rose-500/30 text-rose-300'
                      }\`}
                    >
                      {status === 2 ? 'TODAY' : status === 1 ? '✓' : '✗'}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 font-mono">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-emerald-500/50"></span> Present</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-rose-500/50"></span> Leave</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-blue-600"></span> Active Today</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">Min. Criteria: <strong className="text-slate-200">75%</strong></span>
              <span className="text-emerald-400 font-bold">Safely Above Margin (+17.4%)</span>
            </div>
          </div>

          {/* BENTO CARD 3: ASSIGNMENT DISPATCH & PRIORITY TASKS (Span 7) */}
          <div className="lg:col-span-7 bg-[#0f1422] border border-slate-800/90 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-amber-400" />
                <h2 className="text-sm font-extrabold text-white tracking-wide uppercase">Assignment Queue & Tasks</h2>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {tasks.filter(t => !t.done).length} Pending Deliverables
              </span>
            </div>

            <div className="space-y-3">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className={\`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 \${
                    task.done 
                      ? 'bg-slate-950/40 border-slate-800/60 opacity-50' 
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }\`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <button className="shrink-0 text-slate-400 hover:text-white transition-colors">
                      {task.done ? (
                        <CheckCircle2 size={18} className="text-emerald-400" />
                      ) : (
                        <Circle size={18} className={task.urgent ? 'text-amber-400' : 'text-slate-500'} />
                      )}
                    </button>
                    <div className="truncate">
                      <p className={\`text-xs font-bold truncate \${task.done ? 'line-through text-slate-500' : 'text-slate-200'}\`}>
                        {task.text}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.2 rounded text-[10px]">{task.subject}</span>
                        <span>•</span>
                        <span className={task.urgent && !task.done ? 'text-amber-400 font-semibold' : ''}>{task.due}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {task.done ? (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">COMPLETED</span>
                    ) : (
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded font-bold flex items-center gap-1 hover:bg-blue-500/20">
                        SUBMIT <ArrowUpRight size={12} />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BENTO CARD 4: GRADE VELOCITY & ACADEMIC STANDING (Span 5) */}
          <div className="lg:col-span-5 bg-[#0f1422] border border-slate-800/90 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                <h2 className="text-sm font-extrabold text-white tracking-wide uppercase">Grade Velocity & GPA</h2>
              </div>
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                GPA 3.88 (A)
              </span>
            </div>

            {/* Subject Grade Segmented Bars */}
            <div className="space-y-3.5">
              {[
                { subject: 'Advanced Mathematics', grade: '96%', letter: 'A+', color: 'bg-blue-500' },
                { subject: 'Physics & Chemistry', grade: '91%', letter: 'A', color: 'bg-emerald-500' },
                { subject: 'Computer Science & AI', grade: '98%', letter: 'A+', color: 'bg-purple-500' },
                { subject: 'English & World Literature', grade: '86%', letter: 'B+', color: 'bg-amber-500' },
                { subject: 'History & Civics', grade: '89%', letter: 'A-', color: 'bg-indigo-500' },
              ].map((sub, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-300">{sub.subject}</span>
                    <span className="font-mono font-bold text-white flex items-center gap-1.5">
                      <span>{sub.grade}</span>
                      <span className="text-[10px] text-slate-400">({sub.letter})</span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className={\`h-full rounded-full \${sub.color}\`} style={{ width: sub.grade }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Class Rank: <strong className="text-white font-mono">3rd of 42</strong></span>
              <a href="/school/student/results" className="text-blue-400 hover:underline font-semibold flex items-center gap-1">
                Official Report Card <ChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
\`;

fs.writeFileSync(path.join(__dirname, 'src/pages/school/student/StudentDashboard.tsx'), studentDashboardContent.trim());
console.log('Editorial Bento Grid Student Dashboard written successfully.');
