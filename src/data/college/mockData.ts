import { CollegeStudent, CollegeFaculty, CollegeParent } from '../../types/college';

export const mockStudents: CollegeStudent[] = [
  { id: 'STU001', name: 'Shivam Sharma', program: 'B.Tech', department: 'Computer Science', batch: '2023-2027', semester: 7, section: 'CSE-1', attendance: 86, cgpa: 8.42, status: 'Active' },
  { id: 'STU002', name: 'Aarav Kumar', program: 'B.Tech', department: 'Computer Science', batch: '2023-2027', semester: 7, section: 'CSE-1', attendance: 92, cgpa: 9.1, status: 'Active' },
  { id: 'STU003', name: 'Ananya Kumar', program: 'BBA', department: 'Business', batch: '2024-2028', semester: 5, section: 'BBA-2', attendance: 78, cgpa: 7.5, status: 'Active' }
];

export const mockFaculty: CollegeFaculty[] = [
  { id: 'FAC001', name: 'Dr. Ankit Sharma', department: 'Computer Science', designation: 'Professor', subjects: ['CS701', 'CS702'], status: 'Active' },
  { id: 'FAC002', name: 'Prof. Priya Verma', department: 'Business', designation: 'Assistant Professor', subjects: ['MGT301'], status: 'Active' }
];

export const mockParents: CollegeParent[] = [
  { id: 'PAR001', name: 'Rajesh Kumar', childrenIds: ['STU002', 'STU003'] }
];

export const mockSubjects = [
  { code: 'CS701', name: 'Advanced Database Management', credits: 4, faculty: 'Dr. Ankit Sharma' },
  { code: 'CS702', name: 'Machine Learning', credits: 4, faculty: 'Dr. Ankit Sharma' },
  { code: 'CS703', name: 'Cloud Computing', credits: 3, faculty: 'Prof. Vikas Singh' }
];