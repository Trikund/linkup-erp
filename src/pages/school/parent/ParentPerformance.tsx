import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Activity, 
  TrendingUp, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  BarChart3, 
  AlertCircle, 
  Download, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export function ParentPerformance() {
  const user = USERS.parent;
  const [selectedChildId, setSelectedChildId] = useState('1');

  const performanceData = [
    {
      id: '1',
      name: 'Rahul Sharma',
      class: 'Class 10-A',
      overallScore: '86.4%',
      gpa: '8.8 / 10.0',
      rank: '6th in Section (Top 15%)',
      growthTrend: '+4.2% since Unit Test 1',
      subjects: [
        { name: 'Information Technology', score: 94, max: 100, grade: 'A1', gp: 10.0, trend: '+6%', status: 'Exemplary' },
        { name: 'English Language & Literature', score: 89, max: 100, grade: 'A2', gp: 9.0, trend: '+3%', status: 'Proficient' },
        { name: 'Mathematics (Standard)', score: 88, max: 100, grade: 'A2', gp: 9.0, trend: '+8%', status: 'High Growth' },
        { name: 'Hindi Course A', score: 86, max: 100, grade: 'A2', gp: 9.0, trend: '+2%', status: 'Steady' },
        { name: 'Science (Phy/Chem/Bio)', score: 84, max: 100, grade: 'A2', gp: 9.0, trend: '+4%', status: 'Steady' },
        { name: 'Social Science', score: 82, max: 100, grade: 'A2', gp: 9.0, trend: '+1%', status: 'Needs Focus' },
      ],
      strengths: [
        'Algebraic formulation and quadratic equation computations.',
        'Fluency and vocabulary in creative English essay writing.',
        'Excellent practical performance in physics ray optics experiments.'
      ],
      growthAreas: [
        'Historical timelines & dates in Nationalism in Europe chapter.',
        'Speed optimization during 3-hour mock board test papers.'
      ],
      advice: 'Review NCERT exemplar questions in geometry and practice drawing historical map outlines twice a week.'
    },
    {
      id: '2',
      name: 'Ananya Sharma',
      class: 'Class 7-B',
      overallScore: '91.8%',
      gpa: '9.4 / 10.0',
      rank: '2nd in Section',
      growthTrend: '+3.1% since Unit Test 1',
      subjects: [
        { name: 'Computer Applications & AI', score: 96, max: 100, grade: 'A1', gp: 10.0, trend: '+5%', status: 'Exemplary' },
        { name: 'Integrated Science', score: 94, max: 100, grade: 'A1', gp: 10.0, trend: '+4%', status: 'Exemplary' },
        { name: 'General Mathematics', score: 91, max: 100, grade: 'A1', gp: 10.0, trend: '+3%', status: 'Exemplary' },
        { name: 'English Communicative', score: 90, max: 100, grade: 'A1', gp: 10.0, trend: '+2%', status: 'Exemplary' },
        { name: 'Social Studies', score: 88, max: 100, grade: 'A2', gp: 9.0, trend: '+2%', status: 'Proficient' },
        { name: 'Hindi Literature', score: 87, max: 100, grade: 'A2', gp: 9.0, trend: '+1%', status: 'Steady' },
      ],
      strengths: [
        'Logic building and block-based programming in Scratch/HTML.',
        'Scientific inquiry and botanical specimen diagram accuracy.',
        'Consistent reading habit and expressive comprehension responses.'
      ],
      growthAreas: [
        'Speed arithmetic in fractional calculations.',
        'Grammatical gender rules in Hindi vyakarana.'
      ],
      advice: 'Encourage daily 15-minute mental math drills and reading Hindi newspapers to enrich vocabulary.'
    }
  ];

  const currentChild = performanceData.find(c => c.id === selectedChildId) || performanceData[0];

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title="Academic Performance & Learning Analytics"
      description="Holistic scholastic progress, subject-wise competency scores, score trends, and personalized teacher guidance."
    >
      <div className="space-y-8">

        {/* CHILD SWITCHER */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Select Student:</span>
            {performanceData.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChildId(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
                  selectedChildId === c.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedChildId === c.id ? 'bg-white/20' : 'bg-slate-200 text-slate-700'}`}>
                  {c.class}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => alert(`Downloading Comprehensive Academic Analytics Dossier for ${currentChild.name}...`)}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            Download Performance Dossier
          </button>
        </div>

        {/* TOP KPI OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Overall Aggregate</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">{currentChild.overallScore}</span>
              <span className="text-xs font-bold text-emerald-600 font-mono">{currentChild.growthTrend}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Term 1 Assessment</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Cumulative GPA</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">{currentChild.gpa}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">CBSE 10-Point Scale</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Class Standing</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-slate-900">{currentChild.rank}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Based on 42 students</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Board Projection</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">Distinction</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Predicted &gt;85% in Finals</p>
          </div>
        </div>

        {/* SUBJECT-BY-SUBJECT BREAKDOWN */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Subject Competency & Score Breakdown</h3>
            <p className="text-sm text-slate-500 mt-0.5">Continuous evaluation across theoretical and practical internal assessments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentChild.subjects.map((sub, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-slate-900 text-base">{sub.name}</h4>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                    sub.grade === 'A1' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {sub.grade} • GP {sub.gp}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-3xl font-black text-slate-900">{sub.score}%</span>
                  <span className="text-xs font-bold text-emerald-600 font-mono">{sub.trend} from UT-1</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      sub.score >= 90 ? 'bg-emerald-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${sub.score}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
                  <span>Status: <strong className="text-slate-800">{sub.status}</strong></span>
                  <span>Max Marks: {sub.max}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN SECTION: STRENGTHS, GROWTH AREAS & ADVICE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Strengths & Growth Areas */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Observed Academic Strengths
            </h3>

            <div className="space-y-3">
              {currentChild.strengths.map((str, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pt-2 border-t border-slate-100">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Identified Focus & Growth Areas
            </h3>

            <div className="space-y-3">
              {currentChild.growthAreas.map((gr, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/50 border border-amber-100 text-xs text-amber-900 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <span>{gr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home Guidance & Teacher Advice */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Faculty Recommendations for Home Support
            </h3>

            <p className="text-sm text-slate-700 bg-blue-50/60 p-5 rounded-2xl border border-blue-100/80 leading-relaxed font-normal">
              "{currentChild.advice}"
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <span className="font-bold text-slate-900 block">Class Teacher Conference Note:</span>
              <p className="text-slate-600">
                You can discuss detailed chapter-wise strategies with the mentor during the upcoming Parent-Teacher Meeting on Saturday, 17th October in Room 204.
              </p>
              <div className="pt-2">
                <Link
                  to="/school/parent/events"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                >
                  Book 10-Minute PTM Slot →
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
