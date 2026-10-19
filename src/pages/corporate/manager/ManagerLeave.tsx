import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Calendar, CheckCircle2, Clock, AlertCircle, 
  Check, X, Users, ChevronRight, Info, AlertTriangle,
  Filter, Search, ArrowRight
} from 'lucide-react';

interface LeaveRequest {
  id: string;
  name: string;
  role: string;
  leaveType: 'Annual Leave' | 'Sick Leave' | 'Casual Leave' | 'Compensatory Off';
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  clashRisk: 'Low Risk' | 'Medium Risk - Overlap with Vikram' | 'No Overlap';
  appliedOn: string;
  avatar: string;
}

export function ManagerLeave() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [requests, setRequests] = useState<LeaveRequest[]>([
    {
      id: 'LEV-01',
      name: 'Rahul Sharma',
      role: 'Senior Frontend Developer',
      leaveType: 'Annual Leave',
      startDate: 'Oct 20, 2026',
      endDate: 'Oct 22, 2026',
      totalDays: 3,
      reason: 'Family festival break & ancestral home visit in Jaipur.',
      clashRisk: 'Low Risk',
      appliedOn: 'Oct 15, 2026',
      avatar: 'RS'
    },
    {
      id: 'LEV-02',
      name: 'Vikram Malhotra',
      role: 'Senior Backend Engineer',
      leaveType: 'Sick Leave',
      startDate: 'Oct 08, 2026',
      endDate: 'Oct 08, 2026',
      totalDays: 1,
      reason: 'Doctor consultation & viral rest post sprint deployment.',
      clashRisk: 'No Overlap',
      appliedOn: 'Oct 08, 2026',
      avatar: 'VM'
    },
    {
      id: 'LEV-03',
      name: 'Sneha Roy',
      role: 'Senior Product Designer',
      leaveType: 'Casual Leave',
      startDate: 'Oct 28, 2026',
      endDate: 'Oct 29, 2026',
      totalDays: 2,
      reason: 'Personal administrative work and passport renewal.',
      clashRisk: 'No Overlap',
      appliedOn: 'Oct 18, 2026',
      avatar: 'SR'
    }
  ]);

  const [history, setHistory] = useState([
    { id: 'LEV-OLD-01', name: 'Amit Kumar', type: 'Annual Leave', dates: 'Oct 02 - Oct 04', status: 'Approved', approvedDate: 'Sep 28, 2026' },
    { id: 'LEV-OLD-02', name: 'Ananya Sen', type: 'Casual Leave', dates: 'Oct 19 - Oct 19', status: 'Approved', approvedDate: 'Oct 14, 2026' },
    { id: 'LEV-OLD-03', name: 'Rohan Das', type: 'Compensatory Off', dates: 'Sep 25 - Sep 25', status: 'Approved', approvedDate: 'Sep 24, 2026' }
  ]);

  const handleApprove = (id: string) => {
    const req = requests.find(r => r.id === id);
    if (req) {
      setRequests(prev => prev.filter(r => r.id !== id));
      setHistory(prev => [{
        id: req.id,
        name: req.name,
        type: req.leaveType,
        dates: `${req.startDate} - ${req.endDate}`,
        status: 'Approved',
        approvedDate: 'Today'
      }, ...prev]);
    }
  };

  const handleReject = (id: string) => {
    const req = requests.find(r => r.id === id);
    if (req) {
      setRequests(prev => prev.filter(r => r.id !== id));
      setHistory(prev => [{
        id: req.id,
        name: req.name,
        type: req.leaveType,
        dates: `${req.startDate} - ${req.endDate}`,
        status: 'Rejected',
        approvedDate: 'Today'
      }, ...prev]);
    }
  };

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Leave Approvals & Coverage"
      description="Review direct reports time-off applications, detect sprint schedule clashes, and maintain pod coverage."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Team & Operations' },
        { label: 'Leave Approvals' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Action</p>
              <h3 className="text-2xl font-bold text-slate-900">{requests.length} Requests</h3>
              <p className="text-xs text-amber-600 font-medium">Awaiting decision</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved in Oct</p>
              <h3 className="text-2xl font-bold text-slate-900">7 Leaves</h3>
              <p className="text-xs text-emerald-600 font-medium">Zero sprint delivery breach</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Team Capacity</p>
              <h3 className="text-2xl font-bold text-slate-900">87.5%</h3>
              <p className="text-xs text-blue-600 font-medium">Safe operational limit (&gt;75%)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Response Time</p>
              <h3 className="text-2xl font-bold text-slate-900">4.2 Hours</h3>
              <p className="text-xs text-purple-600 font-medium">Internal SLA &lt; 24h</p>
            </div>
          </div>
        </div>

        {/* Pending Requests Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Requests Requiring Your Authorization</h3>
              <p className="text-xs text-slate-500">Check sprint deadlines and backup engineers before approving.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              {requests.length} Pending
            </span>
          </div>

          {requests.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <CheckCircle2 size={36} className="text-emerald-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800">All caught up!</h4>
              <p className="text-xs text-slate-500">No pending leave applications in your queue right now.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map(req => (
                <div key={req.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                        {req.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">{req.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            {req.leaveType}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">{req.role}</p>

                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs">
                          <span className="font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                            📅 {req.startDate} → {req.endDate} ({req.totalDays} {req.totalDays === 1 ? 'day' : 'days'})
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            req.clashRisk.includes('Low') || req.clashRisk.includes('No')
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-rose-50 text-rose-700 font-bold'
                          }`}>
                            ⚡ {req.clashRisk}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 mt-2 bg-white p-2.5 rounded-xl border border-slate-100">
                          <span className="font-semibold text-slate-700">Reason: </span>
                          {req.reason}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 lg:self-center">
                      <button 
                        onClick={() => handleReject(req.id)}
                        className="px-4 py-2 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition flex items-center gap-1.5"
                      >
                        <X size={15} /> Reject
                      </button>
                      <button 
                        onClick={() => handleApprove(req.id)}
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                      >
                        <Check size={15} /> Approve Leave
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recently Resolved History */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Past Decisions & Audit Trail (Last 30 Days)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-2.5 px-4">Employee</th>
                  <th className="py-2.5 px-4">Leave Type</th>
                  <th className="py-2.5 px-4">Dates Covered</th>
                  <th className="py-2.5 px-4">Status</th>
                  <th className="py-2.5 px-4">Action Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {history.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4 font-medium">{item.dates}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{item.approvedDate}</td>
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
