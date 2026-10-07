const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const corporateImports = `
// Phase 4 Corporate Portals
import { EmployeeDashboard } from './pages/corporate/employee/EmployeeDashboard';
import { EmployeeAttendance } from './pages/corporate/employee/EmployeeAttendance';
import { EmployeeLeave } from './pages/corporate/employee/EmployeeLeave';
import { ManagerDashboard } from './pages/corporate/manager/ManagerDashboard';
import { HrDashboard } from './pages/corporate/hr/HrDashboard';
import { AdminDashboard as CorporateAdminDashboard } from './pages/corporate/admin/AdminDashboard';
import { PlaceholderCorporate } from './pages/corporate/PlaceholderCorporate';
`;

appContent = appContent.replace(
  "import { PlaceholderDashboard } from './pages/PlaceholderDashboard';",
  "import { PlaceholderDashboard } from './pages/PlaceholderDashboard';\n" + corporateImports
);

const corporateRoutes = `
        {/* Phase 4: Corporate ERP Portals */}
        <Route path="/corporate/employee" element={<Navigate to="/corporate/employee/dashboard" replace />} />
        <Route path="/corporate/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/corporate/employee/attendance" element={<EmployeeAttendance />} />
        <Route path="/corporate/employee/leave" element={<EmployeeLeave />} />
        <Route path="/corporate/employee/*" element={<PlaceholderCorporate role="employee" />} />
        
        <Route path="/corporate/manager" element={<Navigate to="/corporate/manager/dashboard" replace />} />
        <Route path="/corporate/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/corporate/manager/*" element={<PlaceholderCorporate role="manager" />} />
        
        <Route path="/corporate/hr" element={<Navigate to="/corporate/hr/dashboard" replace />} />
        <Route path="/corporate/hr/dashboard" element={<HrDashboard />} />
        <Route path="/corporate/hr/*" element={<PlaceholderCorporate role="hr" />} />
        
        <Route path="/corporate/admin" element={<Navigate to="/corporate/admin/dashboard" replace />} />
        <Route path="/corporate/admin/dashboard" element={<CorporateAdminDashboard />} />
        <Route path="/corporate/admin/*" element={<PlaceholderCorporate role="admin" />} />
`;

appContent = appContent.replace(
  "{/* Dashboard Placeholders (Corporate / Catch-all) */}",
  corporateRoutes + "\n        {/* Dashboard Placeholders (Catch-all) */}"
);

fs.writeFileSync(appPath, appContent);
console.log('Corporate routes updated successfully!');
