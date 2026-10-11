import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { SelectOrganization } from './pages/SelectOrganization';
import { SchoolLogin } from './pages/SchoolLogin';
import { CollegeLogin } from './pages/CollegeLogin';
import { CorporateLogin } from './pages/CorporateLogin';

// Phase 2 School Portals
import { StudentDashboard } from './pages/school/student/StudentDashboard';
import { StudentClasses } from './pages/school/student/StudentClasses';
import { StudentTimetable } from './pages/school/student/StudentTimetable';
import { StudentAttendance } from './pages/school/student/StudentAttendance';
import { StudentHomework } from './pages/school/student/StudentHomework';
import { StudentAssignments } from './pages/school/student/StudentAssignments';
import { StudentExams } from './pages/school/student/StudentExams';
import { StudentResults } from './pages/school/student/StudentResults';
import { StudentPerformance } from './pages/school/student/StudentPerformance';
import { StudentFees } from './pages/school/student/StudentFees';
import { StudentCertificates } from './pages/school/student/StudentCertificates';
import { StudentNotifications } from './pages/school/student/StudentNotifications';
import { StudentProfile } from './pages/school/student/StudentProfile';
import { StudentSettings } from './pages/school/student/StudentSettings';
import { StudentHelp } from './pages/school/student/StudentHelp';
import { TeacherDashboard } from './pages/school/teacher/TeacherDashboard';
import { TeacherAttendance } from './pages/school/teacher/TeacherAttendance';
import { ParentDashboard } from './pages/school/parent/ParentDashboard';
import { ParentAttendance } from './pages/school/parent/ParentAttendance';
import { AdminDashboard } from './pages/school/admin/AdminDashboard';
import { AdminStudents } from './pages/school/admin/AdminStudents';
import { PlaceholderDashboard } from './pages/PlaceholderDashboard';

// Phase 4 Corporate Portals
import { EmployeeDashboard } from './pages/corporate/employee/EmployeeDashboard';
import { EmployeeAttendance } from './pages/corporate/employee/EmployeeAttendance';
import { EmployeeLeave } from './pages/corporate/employee/EmployeeLeave';
import { ManagerDashboard } from './pages/corporate/manager/ManagerDashboard';
import { HrDashboard } from './pages/corporate/hr/HrDashboard';
import { AdminDashboard as CorporateAdminDashboard } from './pages/corporate/admin/AdminDashboard';
import { PlaceholderCorporate } from './pages/corporate/PlaceholderCorporate';


// Phase 3 College Portals
import { StudentDashboard as CollegeStudentDashboard } from './pages/college/student/StudentDashboard';
import { StudentCourses as CollegeStudentCourses } from './pages/college/student/StudentCourses';
import { StudentResults as CollegeStudentResults } from './pages/college/student/StudentResults';
import { FacultyDashboard as CollegeFacultyDashboard } from './pages/college/faculty/FacultyDashboard';
import { ParentDashboard as CollegeParentDashboard } from './pages/college/parent/ParentDashboard';
import { AdminDashboard as CollegeAdminDashboard } from './pages/college/admin/AdminDashboard';
import { PlaceholderCollege } from './pages/college/PlaceholderCollege';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Organization Selection */}
        <Route path="/select-organization" element={<SelectOrganization />} />
        
        {/* Auth Routes */}
        <Route path="/school/login" element={<SchoolLogin />} />
        <Route path="/college/login" element={<CollegeLogin />} />
        <Route path="/corporate/login" element={<CorporateLogin />} />
        
        {/* Phase 2: School ERP Dashboards */}
        <Route path="/school/student" element={<StudentDashboard />} />
        <Route path="/school/student/classes" element={<StudentClasses />} />
        <Route path="/school/student/timetable" element={<StudentTimetable />} />
        <Route path="/school/student/attendance" element={<StudentAttendance />} />
        <Route path="/school/student/homework" element={<StudentHomework />} />
        <Route path="/school/student/assignments" element={<StudentAssignments />} />
        <Route path="/school/student/exams" element={<StudentExams />} />
        <Route path="/school/student/results" element={<StudentResults />} />
        <Route path="/school/student/performance" element={<StudentPerformance />} />
        <Route path="/school/student/fees" element={<StudentFees />} />
        <Route path="/school/student/certificates" element={<StudentCertificates />} />
        <Route path="/school/student/notifications" element={<StudentNotifications />} />
        <Route path="/school/student/profile" element={<StudentProfile />} />
        <Route path="/school/student/settings" element={<StudentSettings />} />
        <Route path="/school/student/help" element={<StudentHelp />} />
        <Route path="/school/teacher" element={<TeacherDashboard />} />
        <Route path="/school/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/school/parent" element={<ParentDashboard />} />
        <Route path="/school/parent/attendance" element={<ParentAttendance />} />
        <Route path="/school/admin" element={<AdminDashboard />} />
        <Route path="/school/admin/students" element={<AdminStudents />} />

        {/* Phase 2: Specific placeholder sub-routes mapping to App Shell */}
        <Route path="/school/:role/*" element={<PlaceholderDashboard />} />
        
        
        
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

        {/* Dashboard Placeholders (Catch-all) */}
        <Route path="/:orgType/:role/*" element={<PlaceholderDashboard />} />
        <Route path="/:orgType/:role" element={<PlaceholderDashboard />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
