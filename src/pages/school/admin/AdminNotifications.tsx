import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Bell, AlertTriangle, CheckCircle2, Clock, 
  WalletCards, Bus, BookOpen, ShieldAlert, Check, Trash2, ChevronRight
} from 'lucide-react';

interface AdminNotification {
  id: string;
  title: string;
  description: string;
  category: 'Urgent' | 'Finance' | 'Transport' | 'Academic' | 'CBSE';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  actionLabel?: string;
}

const initialNotifications: AdminNotification[] = [
  {
    id: 'NOTIF-01',
    title: 'Speed Governor Warning: Bus 04 Exceeded 42 km/h on Ring Road',
    description: 'Automated AIS-140 GPS sensor logged momentary speed of 42.4 km/h near Moti Bagh. Driver Mr. Satish Sharma alerted via in-cabin buzzer. Speed reduced to 36 km/h.',
    category: 'Urgent',
    timestamp: '15 mins ago',
    isRead: false,
    actionLabel: 'View Live Route Telemetry',
  },
  {
    id: 'NOTIF-02',
    title: 'High-Value Cheque Clearance: ₹1,45,000 Credited by HDFC Bank',
    description: 'Bulk quarterly fees for 10 corporate wards cleared and reconciled in School Fee Ledger by Accounts Branch.',
    category: 'Finance',
    timestamp: '42 mins ago',
    isRead: false,
    actionLabel: 'Open Accounts Ledger',
  },
  {
    id: 'NOTIF-03',
    title: 'CBSE Portal Deadline: Final LOC Verification Closes in 48 Hours',
    description: 'List of Candidates (LOC) for 248 Class 10 pupils and 220 Class 12 pupils requires Principal final digital signature token.',
    category: 'CBSE',
    timestamp: '2 hours ago',
    isRead: false,
    actionLabel: 'Review LOC Candidate Register',
  },
  {
    id: 'NOTIF-04',
    title: 'Faculty Medical Leave Request: Dr. Rajesh Sen (PGT Physics)',
    description: 'Applied for 2-day medical leave for 15-16 October. Automated substitution assigned to Mrs. Neha Batra for Class 10-A Science.',
    category: 'Academic',
    timestamp: '3 hours ago',
    isRead: false,
    actionLabel: 'Approve & Confirm Substitution',
  },
  {
    id: 'NOTIF-05',
    title: 'Fire Safety Certificate Annual Inspection Scheduled',
    description: 'Delhi Fire Service inspector squad visiting campus on 18 October 2026 for annual hydrant and alarm system drill.',
    category: 'Academic',
    timestamp: 'Yesterday at 04:30 PM',
    isRead: true,
  },
  {
    id: 'NOTIF-06',
    title: 'Quarter 3 Automated WhatsApp Fee Reminders Dispatched',
    description: 'Successfully dispatched 360 payment reminders with direct UPI payment links to pending guardian mobile numbers.',
    category: 'Finance',
    timestamp: 'Yesterday at 11:15 AM',
    isRead: true,
  },
  {
    id: 'NOTIF-07',
    title: 'Routine Bus Fleet Inspection Completed: Buses 01 to 06',
    description: 'Depot workshop completed tyre pressure, brake calibration, and first-aid replenishment for Northern routes.',
    category: 'Transport',
    timestamp: '11 Oct 2026',
    isRead: true,
  },
];

export function AdminNotifications() {
  const user = USERS.admin;
  const [notifications, setNotifications] = useState<AdminNotification[]>(initialNotifications);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Urgent' | 'Finance' | 'Transport' | 'Academic' | 'CBSE'>('All');

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const handleClearAll = () => {
    if (confirm('Clear all notification history?')) {
      setNotifications([]);
    }
  };

  const filteredNotifications = activeFilter === 'All'
    ? notifications
    : notifications.filter(n => n.category === activeFilter);

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="System Notifications & Operational Alerts Hub" 
      description="Greenfield Senior Secondary School • Real-time Automated Event Log"
    >
      <div className="space-y-6">
        {/* Top Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <Bell size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Inbox Alerts ({notifications.length})
              </h3>
              <p className="text-xs text-slate-500">
                You have <strong className="text-rose-600">{unreadCount} unread</strong> priority administrative notifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkAllRead}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              <Check size={14} /> Mark All as Read
            </button>
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-semibold transition-colors"
            >
              <Trash2 size={14} /> Clear History
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {['All', 'Urgent', 'Finance', 'Transport', 'Academic', 'CBSE'].map((flt) => (
            <button
              key={flt}
              onClick={() => setActiveFilter(flt as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === flt
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {flt}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm">
              No notifications found for selected filter.
            </div>
          ) : (
            filteredNotifications.map((n) => (
              <div 
                key={n.id} 
                className={`bg-white rounded-2xl border p-5 shadow-sm transition-all hover:shadow-md ${
                  !n.isRead 
                    ? 'border-blue-200 bg-blue-50/20' 
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl mt-0.5 ${
                      n.category === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                      n.category === 'Finance' ? 'bg-emerald-100 text-emerald-700' :
                      n.category === 'Transport' ? 'bg-amber-100 text-amber-700' :
                      n.category === 'CBSE' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {n.category === 'Urgent' ? <AlertTriangle size={18} /> :
                       n.category === 'Finance' ? <WalletCards size={18} /> :
                       n.category === 'Transport' ? <Bus size={18} /> :
                       n.category === 'CBSE' ? <ShieldAlert size={18} /> :
                       <BookOpen size={18} />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          n.category === 'Urgent' ? 'bg-rose-100 text-rose-800' :
                          n.category === 'Finance' ? 'bg-emerald-100 text-emerald-800' :
                          n.category === 'Transport' ? 'bg-amber-100 text-amber-800' :
                          n.category === 'CBSE' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {n.category}
                        </span>
                        {!n.isRead && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{n.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{n.description}</p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1">
                    <Clock size={12} /> {n.timestamp}
                  </span>
                </div>

                {n.actionLabel && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => alert(`Navigating to action: ${n.actionLabel}`)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition-colors"
                    >
                      {n.actionLabel} <ChevronRight size={13} />
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </SchoolLayout>
  );
}
