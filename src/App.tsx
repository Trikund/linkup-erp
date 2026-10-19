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
import { AdminTeachers } from './pages/school/admin/AdminTeachers';
import { AdminParents } from './pages/school/admin/AdminParents';
import { AdminClasses } from './pages/school/admin/AdminClasses';
import { AdminSubjects } from './pages/school/admin/AdminSubjects';
import { AdminTimetable } from './pages/school/admin/AdminTimetable';
import { AdminAttendance } from './pages/school/admin/AdminAttendance';
import { AdminHomework } from './pages/school/admin/AdminHomework';
import { AdminAssignments } from './pages/school/admin/AdminAssignments';
import { AdminExams } from './pages/school/admin/AdminExams';
import { AdminResults } from './pages/school/admin/AdminResults';
import { AdminFees } from './pages/school/admin/AdminFees';
import { AdminTransport } from './pages/school/admin/AdminTransport';
import { AdminEvents } from './pages/school/admin/AdminEvents';
import { AdminAnnouncements } from './pages/school/admin/AdminAnnouncements';
import { AdminDocuments } from './pages/school/admin/AdminDocuments';
import { AdminReports } from './pages/school/admin/AdminReports';
import { AdminPerformance } from './pages/school/admin/AdminPerformance';
import { AdminNotifications } from './pages/school/admin/AdminNotifications';
import { AdminAuditLogs } from './pages/school/admin/AdminAuditLogs';
import { AdminSettings } from './pages/school/admin/AdminSettings';
import { PlaceholderDashboard } from './pages/PlaceholderDashboard';

// Phase 4 Corporate Portals
import { EmployeeDashboard } from './pages/corporate/employee/EmployeeDashboard';
import { EmployeeTasks } from './pages/corporate/employee/EmployeeTasks';
import { EmployeeProjects } from './pages/corporate/employee/EmployeeProjects';
import { EmployeeTimesheets } from './pages/corporate/employee/EmployeeTimesheets';
import { EmployeeAttendance } from './pages/corporate/employee/EmployeeAttendance';
import { EmployeeLeave } from './pages/corporate/employee/EmployeeLeave';
import { EmployeeWfh } from './pages/corporate/employee/EmployeeWfh';
import { EmployeePayslips } from './pages/corporate/employee/EmployeePayslips';
import { EmployeeTax } from './pages/corporate/employee/EmployeeTax';
import { EmployeeReimbursements } from './pages/corporate/employee/EmployeeReimbursements';
import { EmployeeBenefits } from './pages/corporate/employee/EmployeeBenefits';
import { EmployeeOkrs } from './pages/corporate/employee/EmployeeOkrs';
import { EmployeePerformance } from './pages/corporate/employee/EmployeePerformance';
import { EmployeeLearning } from './pages/corporate/employee/EmployeeLearning';
import { EmployeeTeam } from './pages/corporate/employee/EmployeeTeam';
import { EmployeeDirectory } from './pages/corporate/employee/EmployeeDirectory';
import { EmployeePolicies } from './pages/corporate/employee/EmployeePolicies';
import { EmployeeAssets } from './pages/corporate/employee/EmployeeAssets';
import { EmployeeHelp } from './pages/corporate/employee/EmployeeHelp';
import { EmployeeProfile } from './pages/corporate/employee/EmployeeProfile';
import { ManagerDashboard } from './pages/corporate/manager/ManagerDashboard';
import { ManagerTeam } from './pages/corporate/manager/ManagerTeam';
import { ManagerAttendance } from './pages/corporate/manager/ManagerAttendance';
import { ManagerLeave } from './pages/corporate/manager/ManagerLeave';
import { ManagerTasks } from './pages/corporate/manager/ManagerTasks';
import { ManagerProjects } from './pages/corporate/manager/ManagerProjects';
import { ManagerTimesheets } from './pages/corporate/manager/ManagerTimesheets';
import { ManagerExpenses } from './pages/corporate/manager/ManagerExpenses';
import { ManagerBudgets } from './pages/corporate/manager/ManagerBudgets';
import { ManagerCompensation } from './pages/corporate/manager/ManagerCompensation';
import { ManagerOkrs } from './pages/corporate/manager/ManagerOkrs';
import { ManagerPerformance } from './pages/corporate/manager/ManagerPerformance';
import { ManagerOneOnOne } from './pages/corporate/manager/ManagerOneOnOne';
import { ManagerHiring } from './pages/corporate/manager/ManagerHiring';
import { ManagerReports } from './pages/corporate/manager/ManagerReports';
import { ManagerCompliance } from './pages/corporate/manager/ManagerCompliance';
import { ManagerHelp } from './pages/corporate/manager/ManagerHelp';
import { ManagerProfile } from './pages/corporate/manager/ManagerProfile';
import { HrDashboard } from './pages/corporate/hr/HrDashboard';
import { HrEmployees } from './pages/corporate/hr/HrEmployees';
import { HrDepartments } from './pages/corporate/hr/HrDepartments';
import { HrRecruitment } from './pages/corporate/hr/HrRecruitment';
import { HrOnboarding } from './pages/corporate/hr/HrOnboarding';
import { HrOffboarding } from './pages/corporate/hr/HrOffboarding';
import { HrAttendance } from './pages/corporate/hr/HrAttendance';
import { HrLeave } from './pages/corporate/hr/HrLeave';
import { HrWfh } from './pages/corporate/hr/HrWfh';
import { HrPayroll } from './pages/corporate/hr/HrPayroll';
import { HrCompensation } from './pages/corporate/hr/HrCompensation';
import { HrBenefits } from './pages/corporate/hr/HrBenefits';
import { HrReimbursements } from './pages/corporate/hr/HrReimbursements';
import { HrPerformance } from './pages/corporate/hr/HrPerformance';
import { HrLearning } from './pages/corporate/hr/HrLearning';
import { HrSurveys } from './pages/corporate/hr/HrSurveys';
import { HrPolicies } from './pages/corporate/hr/HrPolicies';
import { HrDocuments } from './pages/corporate/hr/HrDocuments';
import { HrHelpdesk } from './pages/corporate/hr/HrHelpdesk';
import { HrProfile } from './pages/corporate/hr/HrProfile';
import { AdminDashboard as CorporateAdminDashboard } from './pages/corporate/admin/AdminDashboard';
import { PlaceholderCorporate } from './pages/corporate/PlaceholderCorporate';


// Phase 3 College Portals
import { StudentDashboard as CollegeStudentDashboard } from './pages/college/student/StudentDashboard';
import { StudentCourses as CollegeStudentCourses } from './pages/college/student/StudentCourses';
import { StudentTimetable as CollegeStudentTimetable } from './pages/college/student/StudentTimetable';
import { StudentAttendance as CollegeStudentAttendance } from './pages/college/student/StudentAttendance';
import { StudentAssignments as CollegeStudentAssignments } from './pages/college/student/StudentAssignments';
import { StudentExams as CollegeStudentExams } from './pages/college/student/StudentExams';
import { StudentResults as CollegeStudentResults } from './pages/college/student/StudentResults';
import { StudentPerformance as CollegeStudentPerformance } from './pages/college/student/StudentPerformance';
import { StudentPlacements as CollegeStudentPlacements } from './pages/college/student/StudentPlacements';
import { StudentInternships as CollegeStudentInternships } from './pages/college/student/StudentInternships';
import { StudentFees as CollegeStudentFees } from './pages/college/student/StudentFees';
import { StudentLibrary as CollegeStudentLibrary } from './pages/college/student/StudentLibrary';
import { StudentHostel as CollegeStudentHostel } from './pages/college/student/StudentHostel';
import { StudentNotifications as CollegeStudentNotifications } from './pages/college/student/StudentNotifications';
import { StudentHelp as CollegeStudentHelp } from './pages/college/student/StudentHelp';
import { StudentSettings as CollegeStudentSettings } from './pages/college/student/StudentSettings';
import { StudentProfile as CollegeStudentProfile } from './pages/college/student/StudentProfile';
import { FacultyDashboard as CollegeFacultyDashboard } from './pages/college/faculty/FacultyDashboard';
import { FacultyCourses as CollegeFacultyCourses } from './pages/college/faculty/FacultyCourses';
import { FacultyStudents as CollegeFacultyStudents } from './pages/college/faculty/FacultyStudents';
import { FacultyAttendance as CollegeFacultyAttendance } from './pages/college/faculty/FacultyAttendance';
import { FacultySchedule as CollegeFacultySchedule } from './pages/college/faculty/FacultySchedule';
import { FacultyAssignments as CollegeFacultyAssignments } from './pages/college/faculty/FacultyAssignments';
import { FacultyExams as CollegeFacultyExams } from './pages/college/faculty/FacultyExams';
import { FacultyResults as CollegeFacultyResults } from './pages/college/faculty/FacultyResults';
import { FacultyMentees as CollegeFacultyMentees } from './pages/college/faculty/FacultyMentees';
import { FacultyProjects as CollegeFacultyProjects } from './pages/college/faculty/FacultyProjects';
import { FacultyDepartment as CollegeFacultyDepartment } from './pages/college/faculty/FacultyDepartment';
import { FacultyResearch as CollegeFacultyResearch } from './pages/college/faculty/FacultyResearch';
import { FacultyAnnouncements as CollegeFacultyAnnouncements } from './pages/college/faculty/FacultyAnnouncements';
import { FacultyLeaves as CollegeFacultyLeaves } from './pages/college/faculty/FacultyLeaves';
import { FacultyHelp as CollegeFacultyHelp } from './pages/college/faculty/FacultyHelp';
import { FacultySettings as CollegeFacultySettings } from './pages/college/faculty/FacultySettings';
import { FacultyProfile as CollegeFacultyProfile } from './pages/college/faculty/FacultyProfile';
import { ParentDashboard as CollegeParentDashboard } from './pages/college/parent/ParentDashboard';
import { ParentWard as CollegeParentWard } from './pages/college/parent/ParentWard';
import { ParentTimetable as CollegeParentTimetable } from './pages/college/parent/ParentTimetable';
import { ParentAttendance as CollegeParentAttendance } from './pages/college/parent/ParentAttendance';
import { ParentResults as CollegeParentResults } from './pages/college/parent/ParentResults';
import { ParentAssignments as CollegeParentAssignments } from './pages/college/parent/ParentAssignments';
import { ParentPerformance as CollegeParentPerformance } from './pages/college/parent/ParentPerformance';
import { ParentPlacements as CollegeParentPlacements } from './pages/college/parent/ParentPlacements';
import { ParentHostel as CollegeParentHostel } from './pages/college/parent/ParentHostel';
import { ParentRemarks as CollegeParentRemarks } from './pages/college/parent/ParentRemarks';
import { ParentFees as CollegeParentFees } from './pages/college/parent/ParentFees';
import { ParentNotifications as CollegeParentNotifications } from './pages/college/parent/ParentNotifications';
import { ParentEvents as CollegeParentEvents } from './pages/college/parent/ParentEvents';
import { ParentHelp as CollegeParentHelp } from './pages/college/parent/ParentHelp';
import { ParentSettings as CollegeParentSettings } from './pages/college/parent/ParentSettings';
import { ParentProfile as CollegeParentProfile } from './pages/college/parent/ParentProfile';
import { AdminDashboard as CollegeAdminDashboard } from './pages/college/admin/AdminDashboard';
import { AdminDepartments as CollegeAdminDepartments } from './pages/college/admin/AdminDepartments';
import { AdminCourses as CollegeAdminCourses } from './pages/college/admin/AdminCourses';
import { AdminBatches as CollegeAdminBatches } from './pages/college/admin/AdminBatches';
import { AdminStudents as CollegeAdminStudents } from './pages/college/admin/AdminStudents';
import { AdminFaculty as CollegeAdminFaculty } from './pages/college/admin/AdminFaculty';
import { AdminParents as CollegeAdminParents } from './pages/college/admin/AdminParents';
import { AdminTimetable as CollegeAdminTimetable } from './pages/college/admin/AdminTimetable';
import { AdminAttendance as CollegeAdminAttendance } from './pages/college/admin/AdminAttendance';
import { AdminExams as CollegeAdminExams } from './pages/college/admin/AdminExams';
import { AdminResults as CollegeAdminResults } from './pages/college/admin/AdminResults';
import { AdminFees as CollegeAdminFees } from './pages/college/admin/AdminFees';
import { AdminHostel as CollegeAdminHostel } from './pages/college/admin/AdminHostel';
import { AdminPlacements as CollegeAdminPlacements } from './pages/college/admin/AdminPlacements';
import { AdminResearch as CollegeAdminResearch } from './pages/college/admin/AdminResearch';
import { AdminAnnouncements as CollegeAdminAnnouncements } from './pages/college/admin/AdminAnnouncements';
import { AdminReports as CollegeAdminReports } from './pages/college/admin/AdminReports';
import { AdminAuditLogs as CollegeAdminAuditLogs } from './pages/college/admin/AdminAuditLogs';
import { AdminSettings as CollegeAdminSettings } from './pages/college/admin/AdminSettings';
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
        {/* Phase 2: School ERP Dashboards - Admin Portal */}
        <Route path="/school/admin" element={<AdminDashboard />} />
        <Route path="/school/admin/students" element={<AdminStudents />} />
        <Route path="/school/admin/teachers" element={<AdminTeachers />} />
        <Route path="/school/admin/parents" element={<AdminParents />} />
        <Route path="/school/admin/classes" element={<AdminClasses />} />
        <Route path="/school/admin/subjects" element={<AdminSubjects />} />
        <Route path="/school/admin/timetable" element={<AdminTimetable />} />
        <Route path="/school/admin/attendance" element={<AdminAttendance />} />
        <Route path="/school/admin/homework" element={<AdminHomework />} />
        <Route path="/school/admin/assignments" element={<AdminAssignments />} />
        <Route path="/school/admin/exams" element={<AdminExams />} />
        <Route path="/school/admin/results" element={<AdminResults />} />
        <Route path="/school/admin/fees" element={<AdminFees />} />
        <Route path="/school/admin/transport" element={<AdminTransport />} />
        <Route path="/school/admin/events" element={<AdminEvents />} />
        <Route path="/school/admin/announcements" element={<AdminAnnouncements />} />
        <Route path="/school/admin/documents" element={<AdminDocuments />} />
        <Route path="/school/admin/reports" element={<AdminReports />} />
        <Route path="/school/admin/performance" element={<AdminPerformance />} />
        <Route path="/school/admin/notifications" element={<AdminNotifications />} />
        <Route path="/school/admin/audit-logs" element={<AdminAuditLogs />} />
        <Route path="/school/admin/settings" element={<AdminSettings />} />

        {/* Phase 2: Specific placeholder sub-routes mapping to App Shell */}
        <Route path="/school/:role/*" element={<PlaceholderDashboard />} />
        
        
        
        {/* Phase 3: College ERP Portals - Student Portal */}
        <Route path="/college/student" element={<Navigate to="/college/student/dashboard" replace />} />
        <Route path="/college/student/dashboard" element={<CollegeStudentDashboard />} />
        <Route path="/college/student/courses" element={<CollegeStudentCourses />} />
        <Route path="/college/student/timetable" element={<CollegeStudentTimetable />} />
        <Route path="/college/student/attendance" element={<CollegeStudentAttendance />} />
        <Route path="/college/student/assignments" element={<CollegeStudentAssignments />} />
        <Route path="/college/student/exams" element={<CollegeStudentExams />} />
        <Route path="/college/student/results" element={<CollegeStudentResults />} />
        <Route path="/college/student/performance" element={<CollegeStudentPerformance />} />
        <Route path="/college/student/placements" element={<CollegeStudentPlacements />} />
        <Route path="/college/student/internships" element={<CollegeStudentInternships />} />
        <Route path="/college/student/fees" element={<CollegeStudentFees />} />
        <Route path="/college/student/library" element={<CollegeStudentLibrary />} />
        <Route path="/college/student/hostel" element={<CollegeStudentHostel />} />
        <Route path="/college/student/notifications" element={<CollegeStudentNotifications />} />
        <Route path="/college/student/help" element={<CollegeStudentHelp />} />
        <Route path="/college/student/settings" element={<CollegeStudentSettings />} />
        <Route path="/college/student/profile" element={<CollegeStudentProfile />} />
        <Route path="/college/student/*" element={<PlaceholderCollege role="student" />} />
        
        <Route path="/college/faculty" element={<Navigate to="/college/faculty/dashboard" replace />} />
        <Route path="/college/faculty/dashboard" element={<CollegeFacultyDashboard />} />
        <Route path="/college/faculty/courses" element={<CollegeFacultyCourses />} />
        <Route path="/college/faculty/students" element={<CollegeFacultyStudents />} />
        <Route path="/college/faculty/attendance" element={<CollegeFacultyAttendance />} />
        <Route path="/college/faculty/schedule" element={<CollegeFacultySchedule />} />
        <Route path="/college/faculty/assignments" element={<CollegeFacultyAssignments />} />
        <Route path="/college/faculty/exams" element={<CollegeFacultyExams />} />
        <Route path="/college/faculty/results" element={<CollegeFacultyResults />} />
        <Route path="/college/faculty/mentees" element={<CollegeFacultyMentees />} />
        <Route path="/college/faculty/projects" element={<CollegeFacultyProjects />} />
        <Route path="/college/faculty/department" element={<CollegeFacultyDepartment />} />
        <Route path="/college/faculty/research" element={<CollegeFacultyResearch />} />
        <Route path="/college/faculty/announcements" element={<CollegeFacultyAnnouncements />} />
        <Route path="/college/faculty/leaves" element={<CollegeFacultyLeaves />} />
        <Route path="/college/faculty/help" element={<CollegeFacultyHelp />} />
        <Route path="/college/faculty/settings" element={<CollegeFacultySettings />} />
        <Route path="/college/faculty/profile" element={<CollegeFacultyProfile />} />
        <Route path="/college/faculty/*" element={<PlaceholderCollege role="faculty" />} />
        
        <Route path="/college/parent" element={<Navigate to="/college/parent/dashboard" replace />} />
        <Route path="/college/parent/dashboard" element={<CollegeParentDashboard />} />
        <Route path="/college/parent/ward" element={<CollegeParentWard />} />
        <Route path="/college/parent/timetable" element={<CollegeParentTimetable />} />
        <Route path="/college/parent/attendance" element={<CollegeParentAttendance />} />
        <Route path="/college/parent/results" element={<CollegeParentResults />} />
        <Route path="/college/parent/assignments" element={<CollegeParentAssignments />} />
        <Route path="/college/parent/performance" element={<CollegeParentPerformance />} />
        <Route path="/college/parent/placements" element={<CollegeParentPlacements />} />
        <Route path="/college/parent/hostel" element={<CollegeParentHostel />} />
        <Route path="/college/parent/remarks" element={<CollegeParentRemarks />} />
        <Route path="/college/parent/fees" element={<CollegeParentFees />} />
        <Route path="/college/parent/notifications" element={<CollegeParentNotifications />} />
        <Route path="/college/parent/events" element={<CollegeParentEvents />} />
        <Route path="/college/parent/help" element={<CollegeParentHelp />} />
        <Route path="/college/parent/settings" element={<CollegeParentSettings />} />
        <Route path="/college/parent/profile" element={<CollegeParentProfile />} />
        <Route path="/college/parent/*" element={<PlaceholderCollege role="parent" />} />
        
        <Route path="/college/admin" element={<Navigate to="/college/admin/dashboard" replace />} />
        <Route path="/college/admin/dashboard" element={<CollegeAdminDashboard />} />
        <Route path="/college/admin/departments" element={<CollegeAdminDepartments />} />
        <Route path="/college/admin/courses" element={<CollegeAdminCourses />} />
        <Route path="/college/admin/batches" element={<CollegeAdminBatches />} />
        <Route path="/college/admin/students" element={<CollegeAdminStudents />} />
        <Route path="/college/admin/faculty" element={<CollegeAdminFaculty />} />
        <Route path="/college/admin/parents" element={<CollegeAdminParents />} />
        <Route path="/college/admin/timetable" element={<CollegeAdminTimetable />} />
        <Route path="/college/admin/attendance" element={<CollegeAdminAttendance />} />
        <Route path="/college/admin/exams" element={<CollegeAdminExams />} />
        <Route path="/college/admin/results" element={<CollegeAdminResults />} />
        <Route path="/college/admin/fees" element={<CollegeAdminFees />} />
        <Route path="/college/admin/hostel" element={<CollegeAdminHostel />} />
        <Route path="/college/admin/placements" element={<CollegeAdminPlacements />} />
        <Route path="/college/admin/research" element={<CollegeAdminResearch />} />
        <Route path="/college/admin/announcements" element={<CollegeAdminAnnouncements />} />
        <Route path="/college/admin/reports" element={<CollegeAdminReports />} />
        <Route path="/college/admin/audit-logs" element={<CollegeAdminAuditLogs />} />
        <Route path="/college/admin/settings" element={<CollegeAdminSettings />} />
        <Route path="/college/admin/*" element={<PlaceholderCollege role="admin" />} />

        
        {/* Phase 4: Corporate ERP Portals */}
        <Route path="/corporate/employee" element={<Navigate to="/corporate/employee/dashboard" replace />} />
        <Route path="/corporate/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/corporate/employee/tasks" element={<EmployeeTasks />} />
        <Route path="/corporate/employee/projects" element={<EmployeeProjects />} />
        <Route path="/corporate/employee/timesheets" element={<EmployeeTimesheets />} />
        <Route path="/corporate/employee/attendance" element={<EmployeeAttendance />} />
        <Route path="/corporate/employee/leave" element={<EmployeeLeave />} />
        <Route path="/corporate/employee/wfh" element={<EmployeeWfh />} />
        <Route path="/corporate/employee/payslips" element={<EmployeePayslips />} />
        <Route path="/corporate/employee/tax" element={<EmployeeTax />} />
        <Route path="/corporate/employee/reimbursements" element={<EmployeeReimbursements />} />
        <Route path="/corporate/employee/benefits" element={<EmployeeBenefits />} />
        <Route path="/corporate/employee/okrs" element={<EmployeeOkrs />} />
        <Route path="/corporate/employee/performance" element={<EmployeePerformance />} />
        <Route path="/corporate/employee/learning" element={<EmployeeLearning />} />
        <Route path="/corporate/employee/team" element={<EmployeeTeam />} />
        <Route path="/corporate/employee/directory" element={<EmployeeDirectory />} />
        <Route path="/corporate/employee/policies" element={<EmployeePolicies />} />
        <Route path="/corporate/employee/assets" element={<EmployeeAssets />} />
        <Route path="/corporate/employee/help" element={<EmployeeHelp />} />
        <Route path="/corporate/employee/profile" element={<EmployeeProfile />} />
        <Route path="/corporate/employee/*" element={<PlaceholderCorporate role="employee" />} />
        
        <Route path="/corporate/manager" element={<Navigate to="/corporate/manager/dashboard" replace />} />
        <Route path="/corporate/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/corporate/manager/team" element={<ManagerTeam />} />
        <Route path="/corporate/manager/attendance" element={<ManagerAttendance />} />
        <Route path="/corporate/manager/leave" element={<ManagerLeave />} />
        <Route path="/corporate/manager/tasks" element={<ManagerTasks />} />
        <Route path="/corporate/manager/projects" element={<ManagerProjects />} />
        <Route path="/corporate/manager/timesheets" element={<ManagerTimesheets />} />
        <Route path="/corporate/manager/expenses" element={<ManagerExpenses />} />
        <Route path="/corporate/manager/budgets" element={<ManagerBudgets />} />
        <Route path="/corporate/manager/compensation" element={<ManagerCompensation />} />
        <Route path="/corporate/manager/okrs" element={<ManagerOkrs />} />
        <Route path="/corporate/manager/performance" element={<ManagerPerformance />} />
        <Route path="/corporate/manager/one-on-one" element={<ManagerOneOnOne />} />
        <Route path="/corporate/manager/hiring" element={<ManagerHiring />} />
        <Route path="/corporate/manager/reports" element={<ManagerReports />} />
        <Route path="/corporate/manager/compliance" element={<ManagerCompliance />} />
        <Route path="/corporate/manager/help" element={<ManagerHelp />} />
        <Route path="/corporate/manager/profile" element={<ManagerProfile />} />
        <Route path="/corporate/manager/*" element={<PlaceholderCorporate role="manager" />} />
        
        <Route path="/corporate/hr" element={<Navigate to="/corporate/hr/dashboard" replace />} />
        <Route path="/corporate/hr/dashboard" element={<HrDashboard />} />
        <Route path="/corporate/hr/employees" element={<HrEmployees />} />
        <Route path="/corporate/hr/departments" element={<HrDepartments />} />
        <Route path="/corporate/hr/recruitment" element={<HrRecruitment />} />
        <Route path="/corporate/hr/onboarding" element={<HrOnboarding />} />
        <Route path="/corporate/hr/offboarding" element={<HrOffboarding />} />
        <Route path="/corporate/hr/attendance" element={<HrAttendance />} />
        <Route path="/corporate/hr/leave" element={<HrLeave />} />
        <Route path="/corporate/hr/wfh" element={<HrWfh />} />
        <Route path="/corporate/hr/payroll" element={<HrPayroll />} />
        <Route path="/corporate/hr/compensation" element={<HrCompensation />} />
        <Route path="/corporate/hr/benefits" element={<HrBenefits />} />
        <Route path="/corporate/hr/reimbursements" element={<HrReimbursements />} />
        <Route path="/corporate/hr/performance" element={<HrPerformance />} />
        <Route path="/corporate/hr/learning" element={<HrLearning />} />
        <Route path="/corporate/hr/surveys" element={<HrSurveys />} />
        <Route path="/corporate/hr/policies" element={<HrPolicies />} />
        <Route path="/corporate/hr/documents" element={<HrDocuments />} />
        <Route path="/corporate/hr/helpdesk" element={<HrHelpdesk />} />
        <Route path="/corporate/hr/profile" element={<HrProfile />} />
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
