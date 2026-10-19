import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  HelpCircle, MessageSquare, Phone, Mail, 
  FileText, CheckCircle2, Clock, AlertCircle, 
  Send, ExternalLink, ShieldCheck, ChevronRight
} from 'lucide-react';

interface ManagerTicket {
  id: string;
  category: 'HRBP Operations' | 'Finance & POs' | 'IT & Cloud Infra' | 'Workplace & Admin';
  subject: string;
  assignedTo: string;
  priority: 'Urgent (SLA < 4h)' | 'High (SLA < 24h)' | 'Standard';
  status: 'In Progress' | 'Resolved' | 'Waiting on Manager';
  createdDate: string;
}

export function ManagerHelp() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [tickets, setTickets] = useState<ManagerTicket[]>([
    {
      id: 'TICK-MGR-402',
      category: 'IT & Cloud Infra',
      subject: 'Request AWS EC2 g5.xlarge GPU quota increase in ap-south-1 for UI benchmark test suite',
      assignedTo: 'Karan Singhania (Cloud Infra Lead)',
      priority: 'High (SLA < 24h)',
      status: 'In Progress',
      createdDate: 'Oct 18, 2026'
    },
    {
      id: 'TICK-MGR-399',
      category: 'HRBP Operations',
      subject: 'Staff Engineer promotion dossier submission for Rahul Sharma (Review committee review date)',
      assignedTo: 'Tanya Kapoor (Director HRBP)',
      priority: 'Standard',
      status: 'Resolved',
      createdDate: 'Oct 11, 2026'
    },
    {
      id: 'TICK-MGR-391',
      category: 'Finance & POs',
      subject: 'Q4 Datadog enterprise APM contract renewal PO authorization signoff',
      assignedTo: 'Alok Gupta (Corporate Finance)',
      priority: 'Standard',
      status: 'Resolved',
      createdDate: 'Oct 02, 2026'
    }
  ]);

  const [newSubject, setNewSubject] = useState('');
  const [newCategory, setNewCategory] = useState<'HRBP Operations' | 'Finance & POs' | 'IT & Cloud Infra' | 'Workplace & Admin'>('HRBP Operations');
  const [newPriority, setNewPriority] = useState<'Urgent (SLA < 4h)' | 'High (SLA < 24h)' | 'Standard'>('High (SLA < 24h)');
  const [newDescription, setNewDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const newTicket: ManagerTicket = {
      id: `TICK-MGR-${Math.floor(100 + Math.random() * 900)}`,
      category: newCategory,
      subject: newSubject,
      assignedTo: newCategory === 'HRBP Operations' ? 'Tanya Kapoor (HRBP)' : 'Corporate Helpdesk',
      priority: newPriority,
      status: 'In Progress',
      createdDate: 'Today'
    };

    setTickets(prev => [newTicket, ...prev]);
    setNewSubject('');
    setNewDescription('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Manager Helpdesk & Escalations"
      description="Access priority SLA escalation channels with HRBP, Finance, and Enterprise IT infrastructure."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics & Governance' },
        { label: 'Manager Helpdesk' }
      ]}
    >
      <div className="space-y-6">
        {/* Support Points of Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full uppercase">Dedicated HRBP</span>
              <h4 className="text-sm font-bold text-slate-900 mt-2">Tanya Kapoor</h4>
              <p className="text-xs text-slate-500">Director HRBP • Tech & Engineering</p>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <p>📧 tanya.k@linkupcorp.com</p>
                <p>💬 Slack: <span className="font-mono text-blue-600">@tanya.kapoor</span></p>
              </div>
            </div>
            <button 
              onClick={() => alert('Opening direct Slack DM with Tanya Kapoor...')}
              className="mt-4 w-full py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition"
            >
              Direct Chat
            </button>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full uppercase">IT & Cloud Support</span>
              <h4 className="text-sm font-bold text-slate-900 mt-2">Enterprise DevOps OpsDesk</h4>
              <p className="text-xs text-slate-500">AWS / VPN / Hardware Provisioning</p>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <p>📧 cloudops@linkupcorp.com</p>
                <p>⚡ Priority Hot-Line: <span className="font-mono text-purple-600">+91 (80) 4902-8800</span></p>
              </div>
            </div>
            <button 
              onClick={() => alert('Calling IT emergency hotline...')}
              className="mt-4 w-full py-1.5 text-xs font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-xl transition"
            >
              Call Hotline
            </button>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">Finance & Payroll</span>
              <h4 className="text-sm font-bold text-slate-900 mt-2">Alok Gupta</h4>
              <p className="text-xs text-slate-500">Lead Finance Controller • Capex & Opex</p>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <p>📧 alok.g@linkupcorp.com</p>
                <p>💳 Budget Desk: CC-ENG-402</p>
              </div>
            </div>
            <button 
              onClick={() => alert('Direct email composer opened for Alok Gupta.')}
              className="mt-4 w-full py-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition"
            >
              Send Request
            </button>
          </div>
        </div>

        {/* Raise New Escalation Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-1">Create Manager Priority Escalation Ticket</h3>
          <p className="text-xs text-slate-500 mb-4">Managerial tickets receive priority SLA attention from executive business partners.</p>

          {showSuccess && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} />
              Your escalation ticket has been dispatched. Assigned resolution SLA is active.
            </div>
          )}

          <form onSubmit={handleSubmitTicket} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                <select 
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="HRBP Operations">HRBP Operations (Headcount, Retention, Promotions)</option>
                  <option value="IT & Cloud Infra">IT & Cloud Infra (AWS Quotas, Tooling Licenses)</option>
                  <option value="Finance & POs">Finance & POs (Budget Variations, Vendor Invoices)</option>
                  <option value="Workplace & Admin">Workplace & Admin (Bangalore Seating, Offsites)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">SLA Priority</label>
                <select 
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="High (SLA < 24h)">High (SLA &lt; 24h) - Normal Business Day</option>
                  <option value="Urgent (SLA < 4h)">Urgent (SLA &lt; 4h) - Blocker to Delivery</option>
                  <option value="Standard">Standard - Informational / Planning</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
              <input 
                type="text" 
                placeholder="e.g. AWS Quota expansion for new microservices deployment in Pod 4"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                required
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Business Context & Justification</label>
              <textarea 
                rows={3}
                placeholder="Explain the technical requirement, cost estimate, or team impact..."
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder-slate-400"
              />
            </div>

            <button 
              type="submit"
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Send size={14} /> Submit Escalation Ticket
            </button>
          </form>
        </div>

        {/* Active & Resolved Tickets */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-4">Your Escalation History</h3>
          <div className="space-y-3">
            {tickets.map(t => (
              <div key={t.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{t.id}</span>
                      <span className="text-xs font-bold text-slate-700">{t.category}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.priority.includes('Urgent') ? 'bg-rose-50 text-rose-700' :
                        t.priority.includes('High') ? 'bg-amber-50 text-amber-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {t.priority}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">{t.subject}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Assigned to: <strong className="text-slate-700">{t.assignedTo}</strong> • Created {t.createdDate}</p>
                  </div>

                  <div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      t.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {t.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
