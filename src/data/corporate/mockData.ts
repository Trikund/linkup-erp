import { CorporateEmployee } from '../../types/corporate';

export const mockEmployees: CorporateEmployee[] = [
  { id: 'EMP-1024', name: 'Rahul Sharma', department: 'Engineering', designation: 'Frontend Developer', manager: 'Priya Mehta', status: 'Active', attendance: 94 },
  { id: 'EMP-1025', name: 'Priya Mehta', department: 'Engineering', designation: 'Engineering Manager', manager: 'Vikram Singh', status: 'Active', attendance: 98 },
  { id: 'EMP-1026', name: 'Anita Desai', department: 'Human Resources', designation: 'HR Business Partner', manager: 'Suresh Kumar', status: 'Active', attendance: 95 },
  { id: 'EMP-1027', name: 'Vikram Singh', department: 'Operations', designation: 'VP of Engineering', manager: 'Admin', status: 'Active', attendance: 99 }
];