import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Users, Search, Filter, Download, Mail, Phone, 
  ShieldCheck, CheckCircle2, AlertCircle, Eye, 
  MessageSquare, Send, ChevronRight, X, Heart, MapPin, Briefcase
} from 'lucide-react';

interface ParentRecord {
  id: string;
  name: string;
  profession: string;
  phone: string;
  email: string;
  children: { name: string; class: string; admNo: string }[];
  address: string;
  kycStatus: 'Verified' | 'Pending';
  portalActive: boolean;
  feeStatus: 'Cleared' | 'Pending Q3';
  emergencyPhysician: string;
}

const mockParentsList: ParentRecord[] = [
  {
    id: 'PAR-8912',
    name: 'Mrs. Priya Sharma & Mr. Rajesh Sharma',
    profession: 'Senior Principal Architect & Director of Operations',
    phone: '+91 98765 43210',
    email: 'priya.sharma@example.com',
    children: [
      { name: 'Rahul Sharma', class: '10-A', admNo: 'DPS/2021/1042' },
      { name: 'Ananya Sharma', class: '7-B', admNo: 'DPS/2024/3192' },
    ],
    address: 'Flat 402, Tower B, Green Meadows, Sector 62, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Cleared',
    emergencyPhysician: 'Dr. K.K. Bansal (Max Healthcare)',
  },
  {
    id: 'PAR-4432',
    name: 'Dr. Sameer Gupta & Dr. Anjali Gupta',
    profession: 'Consultant Neurosurgeon & Pediatrician',
    phone: '+91 98112 44321',
    email: 'sameer.gupta@example.com',
    children: [
      { name: 'Aarav Gupta', class: '10-A', admNo: 'DPS/2021/1043' },
    ],
    address: 'B-12, Palm Grove Villas, Golf Course Road, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Cleared',
    emergencyPhysician: 'Medanta The Medicity',
  },
  {
    id: 'PAR-5543',
    name: 'Mrs. Neeta Patel & Mr. Hiren Patel',
    profession: 'Chartered Accountant & Business Director',
    phone: '+91 98223 55432',
    email: 'neeta.patel@example.com',
    children: [
      { name: 'Diya Patel', class: '10-A', admNo: 'DPS/2021/1044' },
    ],
    address: 'Villa 44, Nirvana Country, Sector 50, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Pending Q3',
    emergencyPhysician: 'Fortis Memorial Hospital',
  },
  {
    id: 'PAR-6654',
    name: 'Mr. Arvind Verma',
    profession: 'Senior Advocate (Delhi High Court)',
    phone: '+91 98334 66543',
    email: 'arvind.verma@example.com',
    children: [
      { name: 'Kabir Verma', class: '11-PCM', admNo: 'DPS/2022/2051' },
    ],
    address: 'C-304, Heritage City, MG Road, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Pending Q3',
    emergencyPhysician: 'Dr. R.S. Bhatia',
  },
  {
    id: 'PAR-7765',
    name: 'Mrs. Rohini Sen & Mr. Subhash Sen',
    profession: 'Professor of Economics & Senior Scientist',
    phone: '+91 98445 77654',
    email: 'rohini.sen@example.com',
    children: [
      { name: 'Ishita Sen', class: '9-C', admNo: 'DPS/2022/1892' },
    ],
    address: 'Flat 901, DLF Phase 5, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Cleared',
    emergencyPhysician: 'Artemis Hospital',
  },
  {
    id: 'PAR-8876',
    name: 'Mr. Deepak Mehra & Mrs. Sonia Mehra',
    profession: 'Managing Director, Logistics Inc',
    phone: '+91 98556 88765',
    email: 'deepak.mehra@example.com',
    children: [
      { name: 'Rohan Mehra', class: '8-A', admNo: 'DPS/2023/1540' },
    ],
    address: 'House 88, Sector 14, Gurugram',
    kycStatus: 'Verified',
    portalActive: true,
    feeStatus: 'Cleared',
    emergencyPhysician: 'Columbia Asia Hospital',
  },
];

export function AdminParents() {
  const user = USERS.admin;
  const [parents, setParents] = useState<ParentRecord[]>(mockParentsList);
  const [searchQuery, setSearchQuery] = useState('');
  const [feeFilter, setFeeFilter] = useState('all');
  const [selectedParent, setSelectedParent] = useState<ParentRecord | null>(null);
  const [messageModalParent, setMessageModalParent] = useState<ParentRecord | null>(null);
  const [smsText, setSmsText] = useState('');

  const filteredParents = parents.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.children.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.admNo.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFee = feeFilter === 'all' || p.feeStatus === feeFilter;
    return matchesSearch && matchesFee;
  });

  const handleSendSMS = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Priority SMS/WhatsApp alert sent to ${messageModalParent?.name} at ${messageModalParent?.phone}`);
    setMessageModalParent(null);
    setSmsText('');
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Parents & Guardians Directory" 
      description="Manage family records, emergency directives, KYC status, contact databases, and communication channels."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Registered Guardians</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">2,120 Families</div>
            <div className="text-xs text-gray-500 mt-0.5">2,480 Linked Students</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Active Portal Users</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">2,082 (98.2%)</div>
            <div className="text-xs text-emerald-600 mt-0.5">Mobile App & Web Active</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">KYC & Aadhaar Verified</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">2,094 (98.8%)</div>
            <div className="text-xs text-indigo-600 mt-0.5">Biometric Gate ID Assigned</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Average PTM Turnout</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">94.5%</div>
            <div className="text-xs text-purple-600 mt-0.5">High Family Engagement</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search parent name, student name, admission no, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              value={feeFilter}
              onChange={(e) => setFeeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
            >
              <option value="all">All Fee Status</option>
              <option value="Cleared">Fees Cleared</option>
              <option value="Pending Q3">Pending Q3</option>
            </select>

            <button
              onClick={() => alert('Exporting Parent Contact Roster for Bulk SMS Gateway')}
              className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Contacts
            </button>
          </div>
        </div>

        {/* Parents Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Parent / Guardian</th>
                  <th className="py-3 px-4">Linked Enrolled Children</th>
                  <th className="py-3 px-4">Contact Phone & Email</th>
                  <th className="py-3 px-4">Residential Address</th>
                  <th className="py-3 px-4">KYC Status</th>
                  <th className="py-3 px-4">Q3 Dues</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filteredParents.map((par) => (
                  <tr key={par.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900">{par.name}</div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <Briefcase className="w-3 h-3 text-gray-400" /> {par.profession}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="space-y-1">
                        {par.children.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="font-bold text-indigo-700">{c.name}</span>
                            <span className="px-1.5 py-0.2 bg-indigo-50 text-indigo-800 rounded font-semibold text-[10px]">
                              Class {c.class}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono">
                      <div className="font-semibold text-gray-900">{par.phone}</div>
                      <div className="text-[11px] text-gray-400">{par.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600 max-w-xs truncate">
                      {par.address}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1 w-max">
                        <ShieldCheck className="w-3 h-3" /> {par.kycStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        par.feeStatus === 'Cleared' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {par.feeStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setMessageModalParent(par)}
                          className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Send Direct SMS Alert"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSelectedParent(par)}
                          className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="View Family Record"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Family Record Detail Modal */}
      {selectedParent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-lg font-bold">{selectedParent.name}</h3>
                <p className="text-xs text-indigo-200">Ref: {selectedParent.id} • Verified Family Dossier</p>
              </div>
              <button onClick={() => setSelectedParent(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact Number:</span>
                  <strong className="text-gray-900 font-mono">{selectedParent.phone}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email Address:</span>
                  <strong className="text-gray-900">{selectedParent.email}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Residential Address:</span>
                  <strong className="text-gray-900 text-right max-w-xs">{selectedParent.address}</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-gray-200">
                  <span className="text-gray-500">Family Physician:</span>
                  <strong className="text-indigo-700">{selectedParent.emergencyPhysician}</strong>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">Enrolled Children</h4>
                <div className="space-y-1.5">
                  {selectedParent.children.map((c, i) => (
                    <div key={i} className="p-2.5 bg-indigo-50/50 border border-indigo-100 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-bold text-indigo-900">{c.name}</div>
                        <div className="text-[11px] text-gray-500 font-mono">Admn: {c.admNo}</div>
                      </div>
                      <span className="px-2 py-0.5 bg-white border border-indigo-200 rounded font-bold text-indigo-700">
                        Class {c.class}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => setSelectedParent(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Message Modal */}
      {messageModalParent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Dispatch Priority Parent Alert</h3>
                <p className="text-xs text-indigo-200">To: {messageModalParent.name} ({messageModalParent.phone})</p>
              </div>
              <button onClick={() => setMessageModalParent(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendSMS} className="p-5 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Channel</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 text-center">
                    SMS Gateway (DND Override)
                  </span>
                  <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-center">
                    Official WhatsApp
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Alert Text</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Dear Guardian, this is an official advisory regarding..."
                  value={smsText}
                  onChange={(e) => setSmsText(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setMessageModalParent(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Dispatch Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
