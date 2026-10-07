export type CollegeRole = 'student' | 'faculty' | 'parent' | 'admin';

export interface CollegeStudent {
  id: string;
  name: string;
  program: string;
  department: string;
  batch: string;
  semester: number;
  section: string;
  attendance: number;
  cgpa: number;
  status: 'Active' | 'Inactive';
  avatar?: string;
}

export interface CollegeFaculty {
  id: string;
  name: string;
  department: string;
  designation: string;
  subjects: string[];
  status: 'Active' | 'Inactive';
  avatar?: string;
}

export interface CollegeParent {
  id: string;
  name: string;
  childrenIds: string[];
}