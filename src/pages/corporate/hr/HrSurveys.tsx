import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Sparkles, TrendingUp, Users, CheckCircle2, 
  HeartHandshake, MessageSquare, ArrowUpRight, 
  BarChart3, Plus, ChevronRight
} from 'lucide-react';

export function HrSurveys() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };

  const sentimentDrivers = [
    { driver: 'Managerial Support & 1-on-1 Feedback', score: '4.6 / 5.0', positive: '94%', trend: '+0.3 vs Q2' },
    { driver: 'Engineering Culture & Autonomy', score: '4.7 / 5.0', positive: '96%', trend: '+0.4 vs Q2' },
    { driver: 'Work-Life Balance & Hybrid Flexibility', score: '4.3 / 5.0', positive: '89%', trend: '+0.2 vs Q2' },
    { driver: 'Compensation Market Parity & Transparency', score: '4.1 / 5.0', positive: '82%', trend: '+0.5 vs Q2' }
  ];

  const feedbackThemes = [
    {
      topic: 'Hybrid Policy Appreciation',
      comment: '“The 3-day office model with flexible core hours gives our engineering team high productivity and genuine family balance.”',
      dept: 'Engineering Pod 4',
      sentiment: 'Highly Positive'
    },
    {
      topic: 'L&D AWS / GCP Voucher Fast-Tracking',
      comment: '“The ₹35,000 learning stipend was reimbursed within 48 hours for my cloud architect exam voucher. Great support from Anita’s team!”',
      dept: 'Cloud & Infrastructure',
      sentiment: 'Highly Positive'
    },
    {
      topic: 'Bangalore Floor 4 Meeting Room Availability',
      comment: '“Floor 4 phone booths fill up quickly between 2 PM and 4 PM during sprint planning ceremonies. Additional soundproof pods would help.”',
      dept: 'Product & Design',
      sentiment: 'Constructive Suggestion'
    }
  ];

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Surveys & Employee Net Promoter (eNPS) Pulse"
      description="Analyze quarterly engagement pulses, employee sentiment drivers, and anonymous feedback action items."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Culture' },
        { label: 'Surveys & eNPS Pulse' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Company eNPS Score</p>
              <h3 className="text-2xl font-bold text-slate-900">+48 eNPS</h3>
              <p className="text-xs text-emerald-600 font-medium">Top 5% tech SaaS benchmark</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Engagement</p>
              <h3 className="text-2xl font-bold text-slate-900">4.4 / 5.0</h3>
              <p className="text-xs text-blue-600 font-medium">92% survey participation</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Promoter Share</p>
              <h3 className="text-2xl font-bold text-slate-900">62% Staff</h3>
              <p className="text-xs text-purple-600 font-medium">24% Passives • 14% Detractors</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Action Resolution</p>
              <h3 className="text-2xl font-bold text-slate-900">91%</h3>
              <p className="text-xs text-amber-600 font-medium">Of retro action items closed</p>
            </div>
          </div>
        </div>

        {/* Sentiment Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-base font-bold text-slate-900 mb-1">Key Organizational Sentiment Drivers</h3>
            <p className="text-xs text-slate-500 mb-4">Quarterly pulse scores across core culture pillars.</p>

            <div className="space-y-4">
              {sentimentDrivers.map((driver, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{driver.driver}</h4>
                    <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">{driver.trend}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900">{driver.score}</span>
                    <span className="text-[10px] text-slate-400 block">{driver.positive} satisfied</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualitative Anonymous Feedback */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-base font-bold text-slate-900 mb-1">Anonymous Pulse Feedback & Voices</h3>
            <p className="text-xs text-slate-500 mb-4">Direct unedited commentary from all-hands retrospectives.</p>

            <div className="space-y-3">
              {feedbackThemes.map((f, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900">{f.topic}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      f.sentiment.includes('Positive') ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {f.sentiment}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 italic">{f.comment}</p>
                  <p className="text-[10px] text-slate-400 mt-2">Department: {f.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
