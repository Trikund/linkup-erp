import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  MessageSquare, Calendar, Clock, CheckCircle2, 
  Plus, Check, X, AlertCircle, ChevronRight, 
  Sparkles, User, Video, FileText
} from 'lucide-react';

interface OneOnOneSession {
  id: string;
  name: string;
  role: string;
  cadence: string;
  lastDate: string;
  nextDate: string;
  nextTime: string;
  sentiment: 'High Engagement' | 'Positive & Focused' | 'Needs Support' | 'Workload Heavy';
  agendaItems: string[];
  actionItems: { text: string; done: boolean }[];
  avatar: string;
}

export function ManagerOneOnOne() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [sessions, setSessions] = useState<OneOnOneSession[]>([
    {
      id: '1ON1-01',
      name: 'Rahul Sharma',
      role: 'Senior Frontend Developer',
      cadence: 'Bi-Weekly (Tuesdays)',
      lastDate: 'Oct 14, 2026',
      nextDate: 'Oct 28, 2026',
      nextTime: '11:00 AM IST',
      sentiment: 'High Engagement',
      agendaItems: [
        'Review Staff Promotion nomination timeline with VP Siddharth',
        'Feedback on onboarding Rohan and mentoring junior devs',
        'Next sprint goals: WebAuthn biometric fallback edge cases'
      ],
      actionItems: [
        { text: 'Finalize Staff Promotion packet executive slide deck', done: true },
        { text: 'Connect with DevOps lead regarding staging cert issues', done: false }
      ],
      avatar: 'RS'
    },
    {
      id: '1ON1-02',
      name: 'Sneha Roy',
      role: 'Senior Product Designer',
      cadence: 'Bi-Weekly (Thursdays)',
      lastDate: 'Oct 16, 2026',
      nextDate: 'Today (Oct 19)',
      nextTime: '03:30 PM IST',
      sentiment: 'Positive & Focused',
      agendaItems: [
        'Design System Token v2 NPM package rollout',
        'Sync on dark mode corporate color contrast WCAG audit',
        'Figma Config conference reimbursement signoff'
      ],
      actionItems: [
        { text: 'Approve expense claim for Figma seat upgrade', done: true },
        { text: 'Review typography scale with frontend squad', done: false }
      ],
      avatar: 'SR'
    },
    {
      id: '1ON1-03',
      name: 'Vikram Malhotra',
      role: 'Senior Backend Engineer',
      cadence: 'Bi-Weekly (Wednesdays)',
      lastDate: 'Oct 12, 2026',
      nextDate: 'Oct 26, 2026',
      nextTime: '02:00 PM IST',
      sentiment: 'High Engagement',
      agendaItems: [
        'gRPC gateway latency benchmarks and caching strategy',
        'AWS Solutions Architect certification study progress'
      ],
      actionItems: [
        { text: 'Schedule load testing soak run on Sunday night', done: false }
      ],
      avatar: 'VM'
    },
    {
      id: '1ON1-04',
      name: 'Amit Kumar',
      role: 'Lead QA Automation',
      cadence: 'Bi-Weekly (Mondays)',
      lastDate: 'Oct 10, 2026',
      nextDate: 'Oct 24, 2026',
      nextTime: '04:00 PM IST',
      sentiment: 'Workload Heavy',
      agendaItems: [
        'Playwright test execution time taking 25m on pull requests',
        'Hiring candidate for QA Automation Engineer opening'
      ],
      actionItems: [
        { text: 'Provide dedicated EC2 runner instance for CI tests', done: true },
        { text: 'Screen candidate resumes from Greenhouse pipeline', done: false }
      ],
      avatar: 'AK'
    }
  ]);

  const toggleAction = (sessionId: string, actionIdx: number) => {
    setSessions(prev => prev.map(s => {
      if (s.id !== sessionId) return s;
      const updatedActions = [...s.actionItems];
      updatedActions[actionIdx].done = !updatedActions[actionIdx].done;
      return { ...s, actionItems: updatedActions };
    }));
  };

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="1-on-1s & Mentorship Desk"
      description="Track bi-weekly career growth conversations, action items, sentiment pulses, and mentorship roadmaps."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Talent' },
        { label: '1-on-1s & Mentorship' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Scheduled Today</p>
              <h3 className="text-2xl font-bold text-slate-900">Sneha Roy</h3>
              <p className="text-xs text-purple-600 font-medium">03:30 PM (Google Meet)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Monthly Coverage</p>
              <h3 className="text-2xl font-bold text-slate-900">100%</h3>
              <p className="text-xs text-blue-600 font-medium">All 8 engineers met in Oct</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pod Sentiment Pulse</p>
              <h3 className="text-2xl font-bold text-slate-900">92% Positive</h3>
              <p className="text-xs text-emerald-600 font-medium">Zero attrition flight risk</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Action Items</p>
              <h3 className="text-2xl font-bold text-slate-900">4 Items</h3>
              <p className="text-xs text-amber-600 font-medium">From past syncs</p>
            </div>
          </div>
        </div>

        {/* 1-on-1 Sessions List */}
        <div className="space-y-5">
          {sessions.map(s => (
            <div key={s.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {s.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{s.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        s.sentiment.includes('High') || s.sentiment.includes('Positive')
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {s.sentiment}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{s.role} • {s.cadence}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                      <span>Last Sync: <strong className="text-slate-800">{s.lastDate}</strong></span>
                      <span>Next Sync: <strong className="text-blue-600">{s.nextDate} at {s.nextTime}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => alert(`Launching video room for ${s.name}...`)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                  >
                    <Video size={14} /> Join Video Call
                  </button>
                </div>
              </div>

              {/* Shared Agenda & Action Items */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                {/* Agenda */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Shared Agenda Topics</h5>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {s.agendaItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Items */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Committed Action Items</h5>
                  <ul className="space-y-2 text-xs">
                    {s.actionItems.map((action, idx) => (
                      <li 
                        key={idx} 
                        onClick={() => toggleAction(s.id, idx)}
                        className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition"
                      >
                        <input 
                          type="checkbox" 
                          checked={action.done} 
                          onChange={() => {}} 
                          className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className={`${action.done ? 'line-through text-slate-400 font-normal' : 'text-slate-700 font-semibold'}`}>
                          {action.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
