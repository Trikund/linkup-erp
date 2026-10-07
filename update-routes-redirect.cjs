const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const collegeRoutesWithRedirects = `
        {/* Phase 3: College ERP Portals */}
        <Route path="/college/student" element={<Navigate to="/college/student/dashboard" replace />} />
        <Route path="/college/student/dashboard" element={<CollegeStudentDashboard />} />
        <Route path="/college/student/courses" element={<CollegeStudentCourses />} />
        <Route path="/college/student/results" element={<CollegeStudentResults />} />
        <Route path="/college/student/*" element={<PlaceholderCollege role="student" />} />
        
        <Route path="/college/faculty" element={<Navigate to="/college/faculty/dashboard" replace />} />
        <Route path="/college/faculty/dashboard" element={<CollegeFacultyDashboard />} />
        <Route path="/college/faculty/*" element={<PlaceholderCollege role="faculty" />} />
        
        <Route path="/college/parent" element={<Navigate to="/college/parent/dashboard" replace />} />
        <Route path="/college/parent/dashboard" element={<CollegeParentDashboard />} />
        <Route path="/college/parent/*" element={<PlaceholderCollege role="parent" />} />
        
        <Route path="/college/admin" element={<Navigate to="/college/admin/dashboard" replace />} />
        <Route path="/college/admin/dashboard" element={<CollegeAdminDashboard />} />
        <Route path="/college/admin/*" element={<PlaceholderCollege role="admin" />} />
`;

// Replace the existing college routes block
appContent = appContent.replace(
  /\{\/\* Phase 3: College ERP Portals \*\/\}[\s\S]*?\{\/\* Dashboard Placeholders \(Corporate \/ Catch-all\) \*\/\}/,
  collegeRoutesWithRedirects + "\n        {/* Dashboard Placeholders (Corporate / Catch-all) */}"
);

fs.writeFileSync(appPath, appContent);
console.log('Routes updated with redirects!');
