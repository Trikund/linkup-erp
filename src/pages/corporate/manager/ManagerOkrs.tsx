import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Target, TrendingUp, CheckCircle2, Clock, 
  Sparkles, Award, ArrowUpRight, Plus, 
  ChevronRight, Edit3, Layers, Filter
} from 'lucide-react';

interface KeyResult {
  id: string;
  title: string;
  owner: string;
  ownerAvatar: string;
  target: string;
  current: string;
  progress: number;
  status: 'On Track' | 'Ahead' | 'At Risk';
}

interface Objective {
  id: string;
  title: string;
  category: 'Platform Excellence' | 'Security & Zero-Trust' | 'Engineering Velocity';
  overallProgress: number;
  keyResults: KeyResult[];
}

export function ManagerOkrs() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [objectives, setObjectives] = useState<Objective[]>([
    {
      id: 'OBJ-Q4-01',
      title: 'Accelerate Web Platform Reliability, Speed & Core Web Vitals',
      category: 'Platform Excellence',
      overallProgress: 92,
      keyResults: [
        {
          id: 'KR-1.1',
          title: 'Achieve Largest Contentful Paint (LCP) < 1.2s across 95% of sessions',
          owner: 'Rahul Sharma',
          ownerAvatar: 'RS',
          target: '< 1.2s',
          current: '1.14s',
          progress: 95,
          status: 'Ahead'
        },
        {
          id: 'KR-1.2',
          title: 'Maintain 99.95% production uptime for customer login & corporate portals',
          owner: 'Vikram Malhotra',
          ownerAvatar: 'VM',
          target: '99.95%',
          current: '99.98%',
          progress: 100,
          status: 'Ahead'
        },
        {
          id: 'KR-1.3',
          title: 'Ensure 0 critical P0 security/functional escapes to production release',
          owner: 'Amit Kumar',
          ownerAvatar: 'AK',
          target: '0 P0',
          current: '0 P0',
          progress: 100,
          status: 'Ahead'
        }
      ]
    },
    {
      id: 'OBJ-Q4-02',
      title: 'Modernize Enterprise Authentication to Zero-Trust Standards',
      category: 'Security & Zero-Trust',
      overallProgress: 80,
      keyResults: [
        {
          id: 'KR-2.1',
          title: 'Deploy FIDO2 WebAuthn Passkey biometric authentication for corporate staff',
          owner: 'Rahul Sharma',
          ownerAvatar: 'RS',
          target: '100% staff',
          current: '85% enrolled',
          progress: 85,
          status: 'On Track'
        },
        {
          id: 'KR-2.2',
          title: 'Complete AES-256 GCM key rotation for all payroll & employee databases',
          owner: 'Ananya Sen',
          ownerAvatar: 'AS',
          target: '100% keys',
          current: '75% rotated',
          progress: 75,
          status: 'On Track'
        }
      ]
    },
    {
      id: 'OBJ-Q4-03',
      title: 'Elevate Developer Experience & CI/CD Pipeline Velocity',
      category: 'Engineering Velocity',
      overallProgress: 82,
      keyResults: [
        {
          id: 'KR-3.1',
          title: 'Reduce PR CI build and test duration from 18m to under 6 minutes',
          owner: 'Siddharth Rao',
          ownerAvatar: 'SR',
          target: '< 6 mins',
          current: '6.4 mins',
          progress: 84,
          status: 'On Track'
        },
        {
          id: 'KR-3.2',
          title: 'Publish Design System Tokens v2 with 100% Storybook test coverage',
          owner: 'Sneha Roy',
          ownerAvatar: 'SR',
          target: 'v2.0 NPM',
          current: 'v2.0-rc3',
          progress: 90,
          status: 'On Track'
        },
        {
          id: 'KR-3.3',
          title: 'Increase Playwright automated test regression coverage to 85%',
          owner: 'Amit Kumar',
          ownerAvatar: 'AK',
          target: '85%',
          current: '72%',
          progress: 72,
          status: 'At Risk'
        }
      ]
    }
  ]);

  const allKRs = objectives.flatMap(o => o.keyResults);
  const avgProgress = Math.round(allKRs.reduce((sum, kr) => sum + kr.progress, 0) / allKRs.length);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Team OKRs & Goal Tracking"
      description="Track Pod 4 Objectives and Key Results for Q4 FY26, aligned with Engineering Leadership goals."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Talent' },
        { label: 'Team OKRs & Goals' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Target size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Q4 OKR Score</p>
              <h3 className="text-2xl font-bold text-slate-900">{avgProgress}%</h3>
              <p className="text-xs text-blue-600 font-medium">On track to exceed target</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ahead / Completed</p>
              <h3 className="text-2xl font-bold text-slate-900">4 KRs</h3>
              <p className="text-xs text-emerald-600 font-medium">LCP & Uptime delivered</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">On Track</p>
              <h3 className="text-2xl font-bold text-slate-900">3 KRs</h3>
              <p className="text-xs text-purple-600 font-medium">Zero-Trust & CI speed</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">At Risk</p>
              <h3 className="text-2xl font-bold text-slate-900">1 KR</h3>
              <p className="text-xs text-amber-600 font-medium">E2E Playwright coverage</p>
            </div>
          </div>
        </div>

        {/* OKRs Detailed List */}
        <div className="space-y-6">
          {objectives.map(obj => (
            <div key={obj.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      {obj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{obj.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{obj.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Progress</span>
                    <span className="text-lg font-black text-slate-900">{obj.overallProgress}%</span>
                  </div>
                  <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: `${obj.overallProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Key Results Breakdown */}
              <div className="mt-4 space-y-3">
                {obj.keyResults.map(kr => (
                  <div key={kr.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-slate-500 font-mono">{kr.id}</span>
                          <span className={`px-2 py-0.2 rounded text-[10px] font-bold ${
                            kr.status === 'Ahead' ? 'bg-purple-50 text-purple-700' :
                            kr.status === 'On Track' ? 'bg-emerald-50 text-emerald-700' :
                            'bg-amber-50 text-amber-700'
                          }`}>
                            {kr.status}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-800">{kr.title}</h4>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                            {kr.ownerAvatar}
                          </div>
                          <span className="text-xs font-medium text-slate-700">{kr.owner}</span>
                        </div>

                        <div className="text-right w-24">
                          <span className="text-[10px] text-slate-400 block font-semibold">Current / Target</span>
                          <span className="text-xs font-bold text-slate-900">{kr.current}</span>
                          <span className="text-[10px] text-slate-400 ml-1">({kr.target})</span>
                        </div>

                        <div className="w-24 text-right">
                          <span className="text-xs font-bold text-blue-600">{kr.progress}%</span>
                          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                kr.status === 'Ahead' ? 'bg-purple-600' :
                                kr.status === 'On Track' ? 'bg-emerald-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${kr.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
