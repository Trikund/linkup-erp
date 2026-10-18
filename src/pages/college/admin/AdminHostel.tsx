import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Home, Users, ShieldCheck, AlertCircle, Plus, 
  Search, Filter, Download, Phone, Coffee, KeyRound, CheckCircle2
} from 'lucide-react';

interface HostelBlock {
  id: string;
  name: string;
  gender: 'Boys' | 'Girls' | 'Co-Ed PG';
  warden: string;
  wardenPhone: string;
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
  messDining: string;
  maintenanceStatus: 'Clean' | 'Pending Work';
}

export function AdminHostel() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGender, setFilterGender] = useState('All');

  const blocks: HostelBlock[] = [
    {
      id: 'BLK-A',
      name: 'Ramanujan Hall of Residence (Block A)',
      gender: 'Boys',
      warden: 'Prof. Ramesh K. Verma',
      wardenPhone: '+91 98110 33412',
      totalBeds: 1100,
      occupiedBeds: 1040,
      availableBeds: 60,
      messDining: 'North Indian & South Special (Sodexo Catering)',
      maintenanceStatus: 'Clean'
    },
    {
      id: 'BLK-B',
      name: 'Aryabhata Hall of Residence (Block B)',
      gender: 'Boys',
      warden: 'Dr. Vikramaditya Rao',
      wardenPhone: '+91 98110 33413',
      totalBeds: 1200,
      occupiedBeds: 1150,
      availableBeds: 50,
      messDining: 'Central Mega Mess 2',
      maintenanceStatus: 'Clean'
    },
    {
      id: 'BLK-C',
      name: 'Kalpana Chawla Hall of Residence (Block C)',
      gender: 'Girls',
      warden: 'Dr. Sunita Kulkarni',
      wardenPhone: '+91 98110 33414',
      totalBeds: 1100,
      occupiedBeds: 1020,
      availableBeds: 80,
      messDining: 'Girls Dining Annexe 1',
      maintenanceStatus: 'Clean'
    },
    {
      id: 'BLK-D',
      name: 'Gargi Hall of Residence (Block D)',
      gender: 'Girls',
      warden: 'Prof. Neha Sengupta',
      wardenPhone: '+91 98110 33415',
      totalBeds: 900,
      occupiedBeds: 860,
      availableBeds: 40,
      messDining: 'Girls Dining Annexe 2',
      maintenanceStatus: 'Pending Work'
    },
    {
      id: 'BLK-E',
      name: 'Visvesvaraya PG Research Complex (Block E)',
      gender: 'Co-Ed PG',
      warden: 'Dr. Harish C. Pant',
      wardenPhone: '+91 98110 33416',
      totalBeds: 500,
      occupiedBeds: 450,
      availableBeds: 50,
      messDining: 'PG Club & Cafeteria',
      maintenanceStatus: 'Clean'
    },
    {
      id: 'BLK-F',
      name: 'International Students House (Block F)',
      gender: 'Co-Ed PG',
      warden: 'Dr. Evelyn D’Souza',
      wardenPhone: '+91 98110 33417',
      totalBeds: 400,
      occupiedBeds: 300,
      availableBeds: 100,
      messDining: 'Continental & Multicuisine Kitchen',
      maintenanceStatus: 'Clean'
    }
  ];

  const filteredBlocks = blocks.filter(b => {
    const matchesGender = filterGender === 'All' || b.gender.includes(filterGender);
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.warden.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGender && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Hostel & Residential Life' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <Home className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Hostel Directorate & Residential Campus Life</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                4,820 Resident Hostlers
              </span>
            </div>
            <p className="text-sm text-gray-500">
              6 residential hostel blocks, room inventory allocations, mess food quality assurance, and automated turnstile curfew monitoring.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              Occupancy Matrix PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Plus className="w-4 h-4" />
              Allocate Room
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Bed Capacity</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Home className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">5,200 Beds</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">4,820 Occupied (92.7%)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Vacant Beds</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><KeyRound className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">380 Beds</div>
            <div className="mt-1 text-xs text-gray-500">Available for mid-year allotment</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mess Meals Served</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Coffee className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">14,460 / day</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">FSSAI Grade: A+ (Tested Weekly)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Turnstile Curfew</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><ShieldCheck className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">99.1% Compliance</div>
            <div className="mt-1 text-xs text-gray-500">Biometric punch cutoff: 10:00 PM</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by block name, warden, room number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Hostel Type:</span>
            </div>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Blocks</option>
              <option value="Boys">Boys Hostels</option>
              <option value="Girls">Girls Hostels</option>
              <option value="Co-Ed PG">PG & International</option>
            </select>
          </div>
        </div>

        {/* Hostel Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBlocks.map((block) => {
            const occupancyPct = Math.round((block.occupiedBeds / block.totalBeds) * 100);
            return (
              <div key={block.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-50 text-[#7c3aed]">
                      {block.id}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1">{block.name}</h3>
                    <p className="text-xs text-gray-500">{block.gender} Residence</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    block.maintenanceStatus === 'Clean'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {block.maintenanceStatus}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500 font-medium">Occupancy</span>
                    <span className="font-bold text-gray-900">{occupancyPct}% ({block.occupiedBeds}/{block.totalBeds})</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${occupancyPct > 90 ? 'bg-[#7c3aed]' : 'bg-emerald-500'}`}
                      style={{ width: `${occupancyPct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                    <span>Available: <strong className="text-emerald-600">{block.availableBeds} beds</strong></span>
                    <span>Single/Double/Triple</span>
                  </div>
                </div>

                {/* Warden info */}
                <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="text-gray-500">Chief Warden:</span>
                    <span className="font-semibold">{block.warden}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="text-gray-500">Helpline:</span>
                    <span className="font-mono text-[#7c3aed] flex items-center gap-1">
                      <Phone className="w-3 h-3" /> {block.wardenPhone}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="text-gray-500">Dining Mess:</span>
                    <span className="truncate max-w-[170px]" title={block.messDining}>{block.messDining}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button className="text-xs font-semibold text-[#7c3aed] hover:underline">
                    View Floor Plan & Rooms
                  </button>
                  <button className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition">
                    Inspect Log
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CollegeLayout>
  );
}
