import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Server, Cpu, Activity, Database, RefreshCw, 
  CheckCircle2, ArrowUpRight, Zap, ShieldCheck, Terminal
} from 'lucide-react';

interface ClusterNode {
  id: string;
  name: string;
  region: string;
  provider: 'AWS' | 'GCP';
  role: string;
  vCpu: string;
  ram: string;
  cpuUtil: number;
  ramUtil: number;
  status: 'Healthy' | 'Scaling';
}

export function AdminInfrastructure() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const clusters = [
    {
      id: 'k8s-prod-mumbai-01',
      name: 'AWS Primary Production Cluster (Mumbai ap-south-1)',
      nodesCount: 48,
      totalCpu: '384 vCPU',
      totalRam: '1.5 TB NVMe',
      uptime: '99.99%',
      avgCpu: 64,
      avgRam: 71,
      status: 'Primary Master'
    },
    {
      id: 'k8s-dr-singapore-02',
      name: 'GCP Disaster Recovery Warm Standby (Singapore asia-southeast1)',
      nodesCount: 16,
      totalCpu: '128 vCPU',
      totalRam: '512 GB NVMe',
      uptime: '99.98%',
      avgCpu: 18,
      avgRam: 22,
      status: 'Warm Standby'
    }
  ];

  const microservices = [
    { name: 'auth-gateway-service', replicas: '12/12', p99: '14ms', errorRate: '0.000%', memory: '2.4 GB', status: 'Healthy' },
    { name: 'erp-core-api-router', replicas: '24/24', p99: '42ms', errorRate: '0.001%', memory: '6.8 GB', status: 'Healthy' },
    { name: 'payroll-batch-worker', replicas: '8/8', p99: '84ms', errorRate: '0.000%', memory: '4.1 GB', status: 'Healthy' },
    { name: 'attendance-turnstile-broker', replicas: '6/6', p99: '18ms', errorRate: '0.000%', memory: '1.8 GB', status: 'Healthy' },
    { name: 'elasticsearch-audit-cluster', replicas: '9/9', p99: '28ms', errorRate: '0.000%', memory: '18.4 GB', status: 'Healthy' },
    { name: 'redis-distributed-cache', replicas: '6/6', p99: '2ms', errorRate: '0.000%', memory: '12.0 GB', status: 'Optimal' }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Cloud Infrastructure" 
      description="Multi-region AWS & GCP Kubernetes clusters, auto-scaling pod health, latency metrics, and core microservice topology."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Cloud Infrastructure & Data' },
        { label: 'Cloud Infrastructure' }
      ]}
    >
      <div className="space-y-6">
        {/* Global Cluster Status Banner */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Server size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h3 className="font-bold text-white text-base">Multi-Region Cloud Fabric: Operational</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  99.98% SLA
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Primary on AWS Mumbai (ap-south-1) with active real-time cross-cloud sync to GCP Singapore (asia-southeast1).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Refreshing Metrics...' : 'Poll Telemetry'}
            </button>
          </div>
        </div>

        {/* Latency and Throughput Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">p99 End-to-End Latency</p>
            <p className="text-2xl font-black text-slate-900 mt-1">84 ms</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">p50: 18ms • p95: 42ms</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Daily Request Volume</p>
            <p className="text-2xl font-black text-blue-600 mt-1">4.8M calls</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Avg 1,840 req/sec peak</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Cluster Total vCPU</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">512 Cores</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">64 Nodes across 2 clouds</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Error Rate (HTTP 5xx)</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">0.0012%</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Within 5-Nines Budget</p>
          </div>
        </div>

        {/* Kubernetes Clusters */}
        <div className="grid md:grid-cols-2 gap-5">
          {clusters.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-900 text-white">
                      {c.status}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {c.uptime} Uptime
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-2">{c.name}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{c.id}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">{c.nodesCount}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Worker Nodes</p>
                </div>
              </div>

              {/* Resource Gauges */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>CPU Util</span>
                    <span>{c.avgCpu}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${c.avgCpu}%` }} />
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">{c.totalCpu}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>RAM Util</span>
                    <span>{c.avgRam}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${c.avgRam}%` }} />
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">{c.totalRam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Microservices Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Core Microservice Fleet</h3>
              <p className="text-xs text-slate-500">Live container pod replica status, memory footprint, and latency</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              K8S DAEMON ACTIVE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Service Name</th>
                  <th className="py-3 px-4">Replicas</th>
                  <th className="py-3 px-4">p99 Latency</th>
                  <th className="py-3 px-4">Error Rate</th>
                  <th className="py-3 px-4">Memory Footprint</th>
                  <th className="py-3 px-4 text-right">Health Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {microservices.map((svc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-800">{svc.name}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">{svc.replicas} pods</td>
                    <td className="py-3 px-4 font-mono text-blue-600 font-bold">{svc.p99}</td>
                    <td className="py-3 px-4 font-mono text-slate-500">{svc.errorRate}</td>
                    <td className="py-3 px-4 text-slate-600">{svc.memory}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {svc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
