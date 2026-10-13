import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Bus, MapPin, Phone, ShieldCheck, AlertCircle, 
  Search, Plus, CheckCircle2, Navigation, Clock, UserCheck, Wrench, X
} from 'lucide-react';

interface BusRoute {
  id: string;
  busNumber: string;
  registrationNo: string;
  routeName: string;
  startPoint: string;
  totalStops: number;
  capacity: number;
  assignedStudents: number;
  driverName: string;
  driverPhone: string;
  conductorName: string;
  gpsStatus: 'Live Tracking' | 'Reached School' | 'Depot Parked';
  currentSpeed: string;
  currentLocation: string;
}

const mockRoutes: BusRoute[] = [
  {
    id: 'BUS-01',
    busNumber: 'Bus 01',
    registrationNo: 'DL-01-AB-4021',
    routeName: 'Route 1: City Center to School Campus',
    startPoint: 'Sector 14 Metro Station',
    totalStops: 12,
    capacity: 48,
    assignedStudents: 45,
    driverName: 'Mr. Harish Chander',
    driverPhone: '+91 98110 44210',
    conductorName: 'Mrs. Rekha Devi (Attendant)',
    gpsStatus: 'Reached School',
    currentSpeed: '0 km/h',
    currentLocation: 'Campus Main Gate 2',
  },
  {
    id: 'BUS-02',
    busNumber: 'Bus 02',
    registrationNo: 'DL-01-AB-4022',
    routeName: 'Route 2: Green Park & Hauz Khas Enclave',
    startPoint: 'Green Park Main Market',
    totalStops: 14,
    capacity: 52,
    assignedStudents: 49,
    driverName: 'Mr. Gurpreet Singh',
    driverPhone: '+91 98712 39011',
    conductorName: 'Mrs. Sunita Kumari',
    gpsStatus: 'Reached School',
    currentSpeed: '0 km/h',
    currentLocation: 'Campus Bus Bay 4',
  },
  {
    id: 'BUS-03',
    busNumber: 'Bus 03',
    registrationNo: 'DL-01-AB-4023',
    routeName: 'Route 3: Vasant Kunj & Nelson Mandela Marg',
    startPoint: 'Vasant Kunj Pocket B',
    totalStops: 11,
    capacity: 48,
    assignedStudents: 46,
    driverName: 'Mr. Ramvilas Yadav',
    driverPhone: '+91 98450 12890',
    conductorName: 'Mrs. Meena Pal',
    gpsStatus: 'Reached School',
    currentSpeed: '0 km/h',
    currentLocation: 'Campus Bus Bay 1',
  },
  {
    id: 'BUS-04',
    busNumber: 'Bus 04',
    registrationNo: 'DL-01-AB-4024',
    routeName: 'Route 4: Dwarka Sector 6, 10 & 21',
    startPoint: 'Dwarka Mor Flyover',
    totalStops: 16,
    capacity: 54,
    assignedStudents: 52,
    driverName: 'Mr. Satish Sharma',
    driverPhone: '+91 98990 87311',
    conductorName: 'Mrs. Kanta Devi',
    gpsStatus: 'Reached School',
    currentSpeed: '0 km/h',
    currentLocation: 'Campus Bus Bay 3',
  },
  {
    id: 'BUS-05',
    busNumber: 'Bus 05',
    registrationNo: 'DL-01-AB-4025',
    routeName: 'Route 5: Rohini Sector 11 & Prashant Vihar',
    startPoint: 'Rohini West Metro',
    totalStops: 15,
    capacity: 48,
    assignedStudents: 44,
    driverName: 'Mr. Baljit Singh',
    driverPhone: '+91 98105 32901',
    conductorName: 'Mrs. Shanti Devi',
    gpsStatus: 'Reached School',
    currentSpeed: '0 km/h',
    currentLocation: 'Campus Bus Bay 5',
  },
  {
    id: 'BUS-06',
    busNumber: 'Bus 06 (Reserve)',
    registrationNo: 'DL-01-AB-4026',
    routeName: 'Reserve Fleet / Scheduled Inspection',
    startPoint: 'Central Transport Depot',
    totalStops: 0,
    capacity: 48,
    assignedStudents: 0,
    driverName: 'Mr. Pradeep Kumar',
    driverPhone: '+91 98312 99821',
    conductorName: 'Standby Staff',
    gpsStatus: 'Depot Parked',
    currentSpeed: '0 km/h',
    currentLocation: 'Depot Workshop Area',
  },
];

interface Passenger {
  id: string;
  studentName: string;
  admissionNo: string;
  classGrade: string;
  busNumber: string;
  pickupStop: string;
  pickupTime: string;
  dropTime: string;
  parentPhone: string;
}

const mockPassengers: Passenger[] = [
  {
    id: 'P-101',
    studentName: 'Rahul Sharma',
    admissionNo: 'GF-2023-0142',
    classGrade: 'Class 10-A',
    busNumber: 'Bus 03',
    pickupStop: 'Vasant Kunj Pocket C Gate 2',
    pickupTime: '07:15 AM',
    dropTime: '02:40 PM',
    parentPhone: '+91 98112 34567',
  },
  {
    id: 'P-102',
    studentName: 'Ananya Sharma',
    admissionNo: 'GF-2025-0412',
    classGrade: 'Class 7-B',
    busNumber: 'Bus 03',
    pickupStop: 'Vasant Kunj Pocket C Gate 2',
    pickupTime: '07:15 AM',
    dropTime: '02:40 PM',
    parentPhone: '+91 98112 34567',
  },
  {
    id: 'P-103',
    studentName: 'Aarav Gupta',
    admissionNo: 'GF-2023-0189',
    classGrade: 'Class 10-A',
    busNumber: 'Bus 01',
    pickupStop: 'Sector 14 Market Crossing',
    pickupTime: '07:05 AM',
    dropTime: '02:50 PM',
    parentPhone: '+91 98765 43210',
  },
  {
    id: 'P-104',
    studentName: 'Kabir Verma',
    admissionNo: 'GF-2022-0087',
    classGrade: 'Class 11-PCM',
    busNumber: 'Bus 02',
    pickupStop: 'Hauz Khas Police Chowki',
    pickupTime: '07:20 AM',
    dropTime: '02:35 PM',
    parentPhone: '+91 98991 22334',
  },
];

export function AdminTransport() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'routes' | 'passengers' | 'compliance'>('routes');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedBusForAlert, setSelectedBusForAlert] = useState('Bus 01');

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="School Transport Fleet & Live GPS Network" 
      description="Greenfield Senior Secondary School • Supreme Court Safety Norms Compliant Fleet"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Fleet Strength</span>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Bus size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">18 Buses</span>
              <span className="text-xs font-semibold text-emerald-600">16 Active In-Service</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">2 Standby reserve buses for field trips & exams</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bus Subscribed Pupils</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <UserCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-600">1,140</span>
              <span className="text-xs font-normal text-slate-500">/ 2,480 total (46%)</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">RFID bus pass tap on entry and departure</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live GPS & Safety Status</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">100% Compliant</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">CCTV, speed governors (&lt;40 km/h) & panic buttons verified</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Daily Coverage</span>
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Navigation size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-indigo-600">18 Routes</span>
              <span className="text-xs font-normal text-slate-500">220 Total Stops</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Average morning trip duration: 42 minutes</p>
          </div>
        </div>

        {/* Tab Selection & Top Actions */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('routes')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'routes'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Bus Fleet & Routes ({mockRoutes.length})
            </button>
            <button
              onClick={() => setActiveTab('passengers')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'passengers'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Student Roster & Stops
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'compliance'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Safety, Fitness & PUC Records
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAlertModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              <AlertCircle size={16} /> Broadcast Route Delay Alert
            </button>
          </div>
        </div>

        {/* Tab 1: Bus Routes */}
        {activeTab === 'routes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockRoutes.map((bus) => (
              <div key={bus.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl font-bold">
                      <Bus size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{bus.busNumber}</h4>
                      <p className="text-xs text-slate-400 font-mono">{bus.registrationNo}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    bus.gpsStatus === 'Reached School'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {bus.gpsStatus}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">{bus.routeName}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Starting: {bus.startPoint}</span>
                    <span className="font-semibold">{bus.totalStops} Stops</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-slate-50 px-2 rounded-lg">
                    <span>Capacity Fill:</span>
                    <span className="font-bold text-slate-800">{bus.assignedStudents} / {bus.capacity} seats</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Driver:</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                      {bus.driverName} • {bus.driverPhone}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Conductor:</span>
                    <span className="text-slate-700 font-medium">{bus.conductorName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Current Position:</span>
                    <span className="text-blue-600 font-medium flex items-center gap-1">
                      <MapPin size={12} /> {bus.currentLocation}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2 flex items-center gap-2">
                  <button 
                    onClick={() => alert(`Opening live MapmyIndia GPS telemetry for ${bus.busNumber}...`)}
                    className="flex-1 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold transition-colors text-center"
                  >
                    View Live GPS
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedBusForAlert(bus.busNumber);
                      setIsAlertModalOpen(true);
                    }}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold"
                  >
                    Notify Parents
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Student Passenger Roster */}
        {activeTab === 'passengers' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search student, bus number or pickup stop..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="text-xs text-slate-500 font-semibold">1,140 Verified RFID Bus Passes Active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Student & ID</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Allocated Bus</th>
                    <th className="py-3 px-4">Pickup Stop</th>
                    <th className="py-3 px-4">Pickup Time</th>
                    <th className="py-3 px-4">Drop Time</th>
                    <th className="py-3 px-4">Emergency Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockPassengers.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-800">{p.studentName}</div>
                        <div className="text-xs text-slate-400 font-mono">{p.admissionNo}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{p.classGrade}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          {p.busNumber}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs font-medium text-slate-700">
                        {p.pickupStop}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{p.pickupTime}</td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{p.dropTime}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">{p.parentPhone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Safety & Compliance */}
        {activeTab === 'compliance' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800">Department of Transport & CBSE Safety Protocol Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-emerald-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 size={16} /> Mandatory Safety Gear Installed
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Front & Rear HD CCTV Cameras with 30-day cloud backup</li>
                  <li>• AIS-140 GPS Tracking Device with Emergency SOS buttons on every row</li>
                  <li>• Automatic Speed Governor set to max 40 km/h as per RTO directive</li>
                  <li>• Two 5kg ABC Dry Powder Fire Extinguishers & First Aid Kits per bus</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-blue-50/50 space-y-2">
                <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                  <ShieldCheck size={16} /> Driver & Attendant Vetting
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• 100% Commercial Heavy Vehicle Driving Licenses verified</li>
                  <li>• Local Police Verification Certificate renewed for Session 2026-27</li>
                  <li>• Daily Morning Breathalyzer Alcohol Sensor Test logged at Depot Gate</li>
                  <li>• Lady attendants mandatory on all junior and mixed-wing routes</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Broadcast Route Delay Alert */}
        {isAlertModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={() => setIsAlertModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Broadcast Route Delay Alert</h3>
                  <p className="text-xs text-slate-500">Send instant priority SMS to all parents of this route</p>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Priority delay alert dispatched to all parents of ${selectedBusForAlert} via SMS & WhatsApp!`);
                  setIsAlertModalOpen(false);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Bus Route</label>
                  <select 
                    value={selectedBusForAlert} 
                    onChange={(e) => setSelectedBusForAlert(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {mockRoutes.map(b => (
                      <option key={b.id} value={b.busNumber}>{b.busNumber} - {b.routeName}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Expected Delay Duration</label>
                  <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>10 - 15 Minutes (Traffic Congestion)</option>
                    <option>20 - 30 Minutes (Route Diversion / Weather)</option>
                    <option>Mechanical Delay (Standby bus dispatched)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Parent Message Preview</label>
                  <textarea 
                    rows={3} 
                    readOnly
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none"
                    value={`Dear Parent, Greenfield School ${selectedBusForAlert} is currently running approx 15 minutes behind schedule due to heavy road traffic. Please track live position on Greenfield Parent Portal app. Regards, Transport Office.`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAlertModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm"
                  >
                    Broadcast Alert Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
