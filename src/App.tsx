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
import { TeacherClasses } from './pages/school/teacher/TeacherClasses';
import { TeacherStudents } from './pages/school/teacher/TeacherStudents';
import { TeacherAttendance } from './pages/school/teacher/TeacherAttendance';
import { TeacherHomework } from './pages/school/teacher/TeacherHomework';
import { TeacherAssignments } from './pages/school/teacher/TeacherAssignments';
import { TeacherExams } from './pages/school/teacher/TeacherExams';
import { TeacherResults } from './pages/school/teacher/TeacherResults';
import { TeacherTimetable } from './pages/school/teacher/TeacherTimetable';
import { TeacherPerformance } from './pages/school/teacher/TeacherPerformance';
import { TeacherAnnouncements } from './pages/school/teacher/TeacherAnnouncements';
import { TeacherProfile } from './pages/school/teacher/TeacherProfile';
import { TeacherSettings } from './pages/school/teacher/TeacherSettings';
import { TeacherHelp } from './pages/school/teacher/TeacherHelp';
import { ParentDashboard } from './pages/school/parent/ParentDashboard';
import { ParentChildren } from './pages/school/parent/ParentChildren';
import { ParentAttendance } from './pages/school/parent/ParentAttendance';
import { ParentPerformance } from './pages/school/parent/ParentPerformance';
import { ParentHomework } from './pages/school/parent/ParentHomework';
import { ParentAssignments } from './pages/school/parent/ParentAssignments';
import { ParentResults } from './pages/school/parent/ParentResults';
import { ParentFees } from './pages/school/parent/ParentFees';
import { ParentTimetable } from './pages/school/parent/ParentTimetable';
import { ParentRemarks } from './pages/school/parent/ParentRemarks';
import { ParentProgress } from './pages/school/parent/ParentProgress';
import { ParentNotifications } from './pages/school/parent/ParentNotifications';
import { ParentEvents } from './pages/school/parent/ParentEvents';
import { ParentProfile } from './pages/school/parent/ParentProfile';
import { ParentSettings } from './pages/school/parent/ParentSettings';
import { ParentHelp } from './pages/school/parent/ParentHelp';
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
        
        {/* Phase 2: School ERP Dashboards - Student Portal */}
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

        {/* Phase 2: School ERP Dashboards - Teacher Portal */}
        <Route path="/school/teacher" element={<TeacherDashboard />} />
        <Route path="/school/teacher/classes" element={<TeacherClasses />} />
        <Route path="/school/teacher/students" element={<TeacherStudents />} />
        <Route path="/school/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/school/teacher/homework" element={<TeacherHomework />} />
        <Route path="/school/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/school/teacher/exams" element={<TeacherExams />} />
        <Route path="/school/teacher/results" element={<TeacherResults />} />
        <Route path="/school/teacher/timetable" element={<TeacherTimetable />} />
        <Route path="/school/teacher/performance" element={<TeacherPerformance />} />
        <Route path="/school/teacher/announcements" element={<TeacherAnnouncements />} />
        <Route path="/school/teacher/profile" element={<TeacherProfile />} />
        <Route path="/school/teacher/settings" element={<TeacherSettings />} />
        <Route path="/school/teacher/help" element={<TeacherHelp />} />

        {/* Phase 2: School ERP Dashboards - Parent Portal */}
        <Route path="/school/parent" element={<ParentDashboard />} />
        <Route path="/school/parent/children" element={<ParentChildren />} />
        <Route path="/school/parent/attendance" element={<ParentAttendance />} />
        <Route path="/school/parent/performance" element={<ParentPerformance />} />
        <Route path="/school/parent/homework" element={<ParentHomework />} />
        <Route path="/school/parent/assignments" element={<ParentAssignments />} />
        <Route path="/school/parent/results" element={<ParentResults />} />
        <Route path="/school/parent/fees" element={<ParentFees />} />
        <Route path="/school/parent/timetable" element={<ParentTimetable />} />
        <Route path="/school/parent/remarks" element={<ParentRemarks />} />
        <Route path="/school/parent/progress" element={<ParentProgress />} />
        <Route path="/school/parent/notifications" element={<ParentNotifications />} />
        <Route path="/school/parent/events" element={<ParentEvents />} />
        <Route path="/school/parent/profile" element={<ParentProfile />} />
        <Route path="/school/parent/settings" element={<ParentSettings />} />
        <Route path="/school/parent/help" element={<ParentHelp />} />
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
