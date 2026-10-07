const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const collegeImports = `
// Phase 3 College Portals
import { StudentDashboard as CollegeStudentDashboard } from './pages/college/student/StudentDashboard';
import { StudentCourses as CollegeStudentCourses } from './pages/college/student/StudentCourses';
import { StudentResults as CollegeStudentResults } from './pages/college/student/StudentResults';
import { FacultyDashboard as CollegeFacultyDashboard } from './pages/college/faculty/FacultyDashboard';
import { ParentDashboard as CollegeParentDashboard } from './pages/college/parent/ParentDashboard';
import { AdminDashboard as CollegeAdminDashboard } from './pages/college/admin/AdminDashboard';
import { PlaceholderCollege } from './pages/college/PlaceholderCollege';
`;

// Insert the imports
appContent = appContent.replace(
  "import { PlaceholderDashboard } from './pages/PlaceholderDashboard';",
  "import { PlaceholderDashboard } from './pages/PlaceholderDashboard';\n" + collegeImports
);

const collegeRoutes = `
        {/* Phase 3: College ERP Portals */}
        <Route path="/college/student/dashboard" element={<CollegeStudentDashboard />} />
        <Route path="/college/student/courses" element={<CollegeStudentCourses />} />
        <Route path="/college/student/results" element={<CollegeStudentResults />} />
        <Route path="/college/student/*" element={<PlaceholderCollege role="student" />} />
        
        <Route path="/college/faculty/dashboard" element={<CollegeFacultyDashboard />} />
        <Route path="/college/faculty/*" element={<PlaceholderCollege role="faculty" />} />
        
        <Route path="/college/parent/dashboard" element={<CollegeParentDashboard />} />
        <Route path="/college/parent/*" element={<PlaceholderCollege role="parent" />} />
        
        <Route path="/college/admin/dashboard" element={<CollegeAdminDashboard />} />
        <Route path="/college/admin/*" element={<PlaceholderCollege role="admin" />} />
`;

// Replace the general /:orgType routes with explicit paths for corporate to allow college routes to map correctly
// Wait, currently we have:
// <Route path="/:orgType/:role/*" element={<PlaceholderDashboard />} />
// <Route path="/:orgType/:role" element={<PlaceholderDashboard />} />
// I need to insert collegeRoutes BEFORE the generic placeholders.

appContent = appContent.replace(
  "{/* Dashboard Placeholders (Corporate / College) */}",
  collegeRoutes + "\n        {/* Dashboard Placeholders (Corporate / Catch-all) */}"
);

fs.writeFileSync(appPath, appContent);
console.log('Routes updated successfully!');
