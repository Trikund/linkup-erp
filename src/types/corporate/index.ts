export type CorporateRole = 'employee' | 'manager' | 'hr' | 'admin';

export interface CorporateEmployee {
  id: string;
  name: string;
  department: string;
  designation: string;
  manager: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  avatar?: string;
  attendance: number;
}