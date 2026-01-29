// =============================================================================
// FieldOps Mock Data - Anonymized Demo Data
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

export interface Employee {
  id: string;
  name: string;
  role: 'Service Provider' | 'Float / Fill';
  status: 'Active' | 'Inactive';
  address: string;
  city: string;
  state: string;
  zip: string;
  phone1: string;
  phone2?: string;
  email: string;
  hireDate: string;
  ptoBalance: number;
  ptoAsOf: string;
}

export interface Job {
  id: string;
  name: string;
  contact: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  phone1: string;
  phone2?: string;
  fax?: string;
  email: string;
  accessNotes?: string;
  director?: string;
  supervisor: string;
  manager?: string;
  createdDate: string;
  weeklyBudget: number;
}

export interface JobCheckIn {
  id: string;
  jobId: string;
  supervisorName: string;
  workQuality: number;
  assessment: {
    equipment: boolean;
    suppliesMaterials: boolean;
    sds: boolean;
    panelOfPhysicians: boolean;
    taskSchedules: boolean;
    clientInteraction: boolean;
  };
  observation: string;
  photoUrl?: string;
  completedAt: string;
}

export interface PositionAssignment {
  jobId: string;
  employeeId: string;
  employeeName: string;
  position: string;
  schedule: {
    sun?: string;
    mon?: string;
    tue?: string;
    wed?: string;
    thu?: string;
    fri?: string;
    sat?: string;
  };
  totalHours: number;
}

export interface OpenTimesheet {
  id: string;
  date: string;
  jobId: string;
  jobName: string;
  employeeId: string;
  employeeName: string;
  inTime: string;
  outTime?: string;
}

export interface JobAlert {
  id: string;
  jobId: string;
  jobName: string;
  serviceDate: string;
  acknowledgedBy: string;
}

export interface PTORequest {
  id: string;
  date: string;
  employeeId: string;
  employeeName: string;
  hours: number | 'UNPAID';
  status: 'Submitted' | 'Approved' | 'Denied';
  supervisor: string;
  completedDate?: string;
}

export interface CallOff {
  id: string;
  dateTime: string;
  employeeId: string;
  employeeName: string;
  jobId: string;
  jobName: string;
  reason: string;
  hasRecording?: boolean;
}

export interface EmployeeForm {
  id: string;
  employeeId: string;
  employeeName: string;
  formType: 'COUNSELING' | 'RESIGNATION' | 'PAYROLL' | 'PERFORMANCE' | 'DISCIPLINE' | 'INJURY';
  editUrl?: string;
  nextDate?: string;
}

export interface Procedure {
  id: string;
  name: string;
  steps: {
    who: string;
    process: string[];
    notify: string;
  }[];
}

// -----------------------------------------------------------------------------
// Mock Employees
// -----------------------------------------------------------------------------

export const employees: Employee[] = [
  {
    id: '10108263',
    name: 'Maria Santos',
    role: 'Service Provider',
    status: 'Active',
    address: '103 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62701',
    phone1: '555-123-4567',
    email: 'msantos@example.com',
    hireDate: '2/7/2012',
    ptoBalance: 8.37,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108264',
    name: 'James Wilson',
    role: 'Service Provider',
    status: 'Active',
    address: '456 Oak Ave',
    city: 'Riverside',
    state: 'IL',
    zip: '62702',
    phone1: '555-234-5678',
    email: 'jwilson@example.com',
    hireDate: '3/15/2018',
    ptoBalance: 12.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108265',
    name: 'Robert Chen',
    role: 'Service Provider',
    status: 'Active',
    address: '789 Pine St',
    city: 'Lakewood',
    state: 'IL',
    zip: '62703',
    phone1: '555-345-6789',
    email: 'rchen@example.com',
    hireDate: '6/20/2019',
    ptoBalance: 6.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108266',
    name: 'Sarah Johnson',
    role: 'Service Provider',
    status: 'Active',
    address: '321 Maple Dr',
    city: 'Hillside',
    state: 'IL',
    zip: '62704',
    phone1: '555-456-7890',
    email: 'sjohnson@example.com',
    hireDate: '9/1/2020',
    ptoBalance: 4.25,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108267',
    name: 'Michael Brown',
    role: 'Float / Fill',
    status: 'Active',
    address: '654 Elm St',
    city: 'Greenville',
    state: 'IL',
    zip: '62705',
    phone1: '555-567-8901',
    email: 'mbrown@example.com',
    hireDate: '1/10/2021',
    ptoBalance: 2.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108268',
    name: 'Emily Davis',
    role: 'Service Provider',
    status: 'Active',
    address: '987 Birch Ln',
    city: 'Oakdale',
    state: 'IL',
    zip: '62706',
    phone1: '555-678-9012',
    email: 'edavis@example.com',
    hireDate: '4/5/2017',
    ptoBalance: 15.75,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108269',
    name: 'Diana Martinez',
    role: 'Service Provider',
    status: 'Active',
    address: '147 Cedar Ave',
    city: 'Riverside',
    state: 'IL',
    zip: '62707',
    phone1: '555-789-0123',
    email: 'dmartinez@example.com',
    hireDate: '7/22/2019',
    ptoBalance: 8.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108270',
    name: 'Lisa Anderson',
    role: 'Service Provider',
    status: 'Active',
    address: '258 Walnut St',
    city: 'Fairview',
    state: 'IL',
    zip: '62708',
    phone1: '555-890-1234',
    email: 'landerson@example.com',
    hireDate: '11/3/2018',
    ptoBalance: 10.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108271',
    name: 'Patricia Taylor',
    role: 'Service Provider',
    status: 'Active',
    address: '369 Spruce Rd',
    city: 'Springfield',
    state: 'IL',
    zip: '62709',
    phone1: '555-901-2345',
    email: 'ptaylor@example.com',
    hireDate: '2/14/2016',
    ptoBalance: 20.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108272',
    name: 'David Garcia',
    role: 'Service Provider',
    status: 'Active',
    address: '480 Ash St',
    city: 'Lakewood',
    state: 'IL',
    zip: '62710',
    phone1: '555-012-3456',
    email: 'dgarcia@example.com',
    hireDate: '5/30/2020',
    ptoBalance: 3.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108273',
    name: 'Jennifer Lee',
    role: 'Float / Fill',
    status: 'Active',
    address: '591 Cherry Ln',
    city: 'Greenville',
    state: 'IL',
    zip: '62711',
    phone1: '555-111-2222',
    email: 'jlee@example.com',
    hireDate: '8/17/2021',
    ptoBalance: 1.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108274',
    name: 'Nancy White',
    role: 'Service Provider',
    status: 'Active',
    address: '702 Hickory Dr',
    city: 'Riverside',
    state: 'IL',
    zip: '62712',
    phone1: '555-222-3333',
    email: 'nwhite@example.com',
    hireDate: '10/9/2017',
    ptoBalance: 14.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108275',
    name: 'Kevin Thompson',
    role: 'Float / Fill',
    status: 'Active',
    address: '813 Poplar Ave',
    city: 'Hillside',
    state: 'IL',
    zip: '62713',
    phone1: '555-333-4444',
    email: 'kthompson@example.com',
    hireDate: '12/1/2022',
    ptoBalance: 0.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108276',
    name: 'Steven Harris',
    role: 'Service Provider',
    status: 'Active',
    address: '924 Sycamore St',
    city: 'Oakdale',
    state: 'IL',
    zip: '62714',
    phone1: '555-444-5555',
    email: 'sharris@example.com',
    hireDate: '3/25/2019',
    ptoBalance: 7.25,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108277',
    name: 'Amanda Clark',
    role: 'Service Provider',
    status: 'Active',
    address: '135 Willow Way',
    city: 'Fairview',
    state: 'IL',
    zip: '62715',
    phone1: '555-555-6666',
    email: 'aclark@example.com',
    hireDate: '6/8/2018',
    ptoBalance: 11.0,
    ptoAsOf: '1/17/2026',
  },
];

// -----------------------------------------------------------------------------
// Mock Jobs
// -----------------------------------------------------------------------------

export const jobs: Job[] = [
  {
    id: '815',
    name: 'Riverside Apartments',
    contact: 'Karen Mitchell',
    address1: '317 River Street',
    city: 'Springfield',
    state: 'IL',
    zip: '62701',
    phone1: '555-100-1001',
    email: 'kmitchell@riverside.example.com',
    accessNotes: 'Admin breakroom code is 3512',
    supervisor: 'Alex Morgan',
    createdDate: '6/6/2024',
    weeklyBudget: 16.0,
  },
  {
    id: '816',
    name: 'Metro Logistics Hub',
    contact: 'Tom Bradley',
    address1: '1500 Industrial Hwy',
    city: 'Springfield',
    state: 'IL',
    zip: '62702',
    phone1: '555-100-1002',
    email: 'tbradley@metro.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '3/15/2023',
    weeklyBudget: 24.0,
  },
  {
    id: '817',
    name: 'Sterling Law Group',
    contact: 'Rachel Foster',
    address1: '200 Commerce Ave',
    city: 'Springfield',
    state: 'IL',
    zip: '62703',
    phone1: '555-100-1003',
    email: 'rfoster@sterling.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '1/10/2022',
    weeklyBudget: 12.0,
  },
  {
    id: '818',
    name: 'TechMart Distribution',
    contact: 'Chris Palmer',
    address1: '100 Commerce Blvd',
    city: 'Lakewood',
    state: 'IL',
    zip: '62704',
    phone1: '555-100-1004',
    email: 'cpalmer@techmart.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '8/20/2021',
    weeklyBudget: 40.0,
  },
  {
    id: '819',
    name: 'Valley School District',
    contact: 'Mark Stevens',
    address1: '5051 School Rd',
    city: 'Hillside',
    state: 'IL',
    zip: '62705',
    phone1: '555-100-1005',
    email: 'mstevens@valleysd.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '9/1/2020',
    weeklyBudget: 80.0,
  },
  {
    id: '820',
    name: 'Summit Media Group',
    contact: 'Laura Bennett',
    address1: '600 Media Dr',
    city: 'Lakewood',
    state: 'IL',
    zip: '62706',
    phone1: '555-100-1006',
    email: 'lbennett@summit.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '4/12/2019',
    weeklyBudget: 20.0,
  },
  {
    id: '821',
    name: 'Clearview Medical - South',
    contact: 'Dr. Amy Richards',
    address1: '1000 Medical Center Dr',
    city: 'Hillside',
    state: 'IL',
    zip: '62707',
    phone1: '555-100-1007',
    email: 'arichards@clearview.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '7/7/2022',
    weeklyBudget: 15.0,
  },
  {
    id: '822',
    name: 'BioTech Solutions',
    contact: 'Daniel Cooper',
    address1: '312 Research Park Rd',
    city: 'Springfield',
    state: 'IL',
    zip: '62708',
    phone1: '555-100-1008',
    email: 'dcooper@biotech.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '2/28/2021',
    weeklyBudget: 18.0,
  },
  {
    id: '823',
    name: 'Wellness Center Downtown',
    contact: 'Susan Reynolds',
    address1: '1500 N Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62709',
    phone1: '555-100-1009',
    email: 'sreynolds@wellness.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '5/5/2018',
    weeklyBudget: 35.0,
  },
  {
    id: '824',
    name: 'Wellness Center - East',
    contact: 'Brian Hughes',
    address1: '300 Kennedy Blvd',
    city: 'Springfield',
    state: 'IL',
    zip: '62710',
    phone1: '555-100-1010',
    email: 'bhughes@wellness.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '5/5/2018',
    weeklyBudget: 28.0,
  },
  {
    id: '825',
    name: 'Wellness Center - West',
    contact: 'Michelle Adams',
    address1: '450 Pierce St',
    city: 'Lakewood',
    state: 'IL',
    zip: '62711',
    phone1: '555-100-1011',
    email: 'madams@wellness.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '5/5/2018',
    weeklyBudget: 32.0,
  },
  {
    id: '826',
    name: 'Grandview Mall',
    contact: 'Roger Kim',
    address1: '600 Valley Mall Dr',
    city: 'Lakewood',
    state: 'IL',
    zip: '62712',
    phone1: '555-100-1012',
    email: 'rkim@grandview.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '11/15/2020',
    weeklyBudget: 45.0,
  },
  {
    id: '827',
    name: 'Northside Manufacturing',
    contact: 'Gary Nelson',
    address1: '2000 Industrial Rd',
    city: 'Greenville',
    state: 'IL',
    zip: '62713',
    phone1: '555-100-1013',
    email: 'gnelson@northside.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '6/30/2019',
    weeklyBudget: 50.0,
  },
  {
    id: '828',
    name: 'Premier Windows Inc',
    contact: 'Molly Patterson',
    address1: '1 Premier Way',
    city: 'Oakdale',
    state: 'IL',
    zip: '62714',
    phone1: '555-100-1014',
    email: 'mpatterson@premier.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '10/10/2017',
    weeklyBudget: 60.0,
  },
  {
    id: '829',
    name: 'Global Shipping Co',
    contact: 'Jim Crawford',
    address1: '800 Freight St',
    city: 'Lakewood',
    state: 'IL',
    zip: '62715',
    phone1: '555-100-1015',
    email: 'jcrawford@globalship.example.com',
    supervisor: 'Alex Morgan',
    createdDate: '3/3/2016',
    weeklyBudget: 22.0,
  },
];

// -----------------------------------------------------------------------------
// Mock Open Timesheets
// -----------------------------------------------------------------------------

export const openTimesheets: OpenTimesheet[] = [
  { id: '1', date: '1/28/2026', jobId: '819', jobName: 'Valley School District', employeeId: '10108290', employeeName: 'Ronald Martinez', inTime: '1:50:42 PM' },
  { id: '2', date: '1/28/2026', jobId: '819', jobName: 'Valley School District', employeeId: '10108291', employeeName: 'Alex Morgan', inTime: '3:15:37 PM' },
  { id: '3', date: '1/28/2026', jobId: '819', jobName: 'Valley School District', employeeId: '10108292', employeeName: 'Carlos Rivera', inTime: '5:38:52 PM' },
  { id: '4', date: '1/28/2026', jobId: '830', jobName: 'Apex Electronics', employeeId: '10108293', employeeName: 'Edward Porter', inTime: '1:48:59 PM' },
  { id: '5', date: '1/28/2026', jobId: '831', jobName: 'MedFirst Clinic - Central', employeeId: '10108294', employeeName: 'Ann Miller', inTime: '4:58:14 PM' },
  { id: '6', date: '1/28/2026', jobId: '832', jobName: 'SecureTech Systems', employeeId: '10108295', employeeName: 'Marcus Young', inTime: '2:55:04 PM' },
  { id: '7', date: '1/28/2026', jobId: '833', jobName: 'Wellness Center - North', employeeId: '10108296', employeeName: 'Maurice Williams', inTime: '4:44:07 PM' },
  { id: '8', date: '1/28/2026', jobId: '833', jobName: 'Wellness Center - North', employeeId: '10108297', employeeName: 'Michael Scott', inTime: '6:15:15 PM' },
  { id: '9', date: '1/28/2026', jobId: '823', jobName: 'Wellness Center Downtown', employeeId: '10108298', employeeName: 'Kelly Moore', inTime: '6:08:28 PM' },
  { id: '10', date: '1/28/2026', jobId: '834', jobName: 'Wellness Center - South', employeeId: '10108273', employeeName: 'Jennifer Lee', inTime: '5:22:08 PM' },
  { id: '11', date: '1/28/2026', jobId: '835', jobName: 'Composite Materials Inc', employeeId: '10108299', employeeName: 'Daysha Conrad', inTime: '4:29:04 PM' },
  { id: '12', date: '1/28/2026', jobId: '827', jobName: 'Northside Manufacturing', employeeId: '10108300', employeeName: 'Peter Norman', inTime: '4:04:18 PM' },
  { id: '13', date: '1/28/2026', jobId: '827', jobName: 'Northside Manufacturing', employeeId: '10108267', employeeName: 'Michael Brown', inTime: '5:24:23 PM' },
  { id: '14', date: '1/28/2026', jobId: '828', jobName: 'Premier Windows Inc', employeeId: '10108301', employeeName: 'Ramon Perez', inTime: '1:07:52 PM' },
  { id: '15', date: '1/28/2026', jobId: '829', jobName: 'Global Shipping Co', employeeId: '10108302', employeeName: 'Tammy Martin', inTime: '4:34:26 PM' },
];

// -----------------------------------------------------------------------------
// Mock Job Alerts
// -----------------------------------------------------------------------------

export const jobAlerts: JobAlert[] = [
  { id: '1', jobId: '816', jobName: 'Metro Logistics Hub', serviceDate: 'Wednesday, January 28', acknowledgedBy: 'Alex Morgan' },
  { id: '2', jobId: '836', jobName: 'Precision Components', serviceDate: 'Wednesday, January 28', acknowledgedBy: 'Alex Morgan' },
  { id: '3', jobId: '823', jobName: 'Wellness Center Downtown', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Alex Morgan' },
  { id: '4', jobId: '820', jobName: 'Summit Media Group', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Alex Morgan' },
  { id: '5', jobId: '837', jobName: 'Parkside Properties', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Alex Morgan' },
];

// -----------------------------------------------------------------------------
// Mock PTO Requests
// -----------------------------------------------------------------------------

export const ptoRequests: PTORequest[] = [
  { id: '1', date: '5/7/2026', employeeId: '10108310', employeeName: 'Christopher Hayes', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '2', date: '5/8/2026', employeeId: '10108310', employeeName: 'Christopher Hayes', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '3', date: '7/16/2026', employeeId: '10108310', employeeName: 'Christopher Hayes', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '4', date: '10/31/2025', employeeId: '10108272', employeeName: 'David Garcia', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '10/13/2025' },
  { id: '5', date: '10/31/2025', employeeId: '10108311', employeeName: 'Sharon Coleman', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '10/10/2025' },
  { id: '6', date: '11/13/2025', employeeId: '10108312', employeeName: 'Lucy Smith', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '9/3/2025' },
  { id: '7', date: '11/18/2025', employeeId: '10108313', employeeName: 'Thomas Hawkins', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '11/10/2025' },
  { id: '8', date: '10/30/2025', employeeId: '10108314', employeeName: 'Ryan McClellan', hours: 'UNPAID', status: 'Approved', supervisor: '** Employee Direct **', completedDate: '9/24/2025' },
  { id: '9', date: '10/30/2025', employeeId: '10108315', employeeName: 'Nicholas Parker', hours: 'UNPAID', status: 'Approved', supervisor: '** Employee Direct **', completedDate: '10/7/2025' },
  { id: '10', date: '10/30/2025', employeeId: '10108316', employeeName: 'Alex Torres', hours: 4.0, status: 'Approved', supervisor: 'Norman Lewis', completedDate: '10/9/2025' },
];

// -----------------------------------------------------------------------------
// Mock Call-Off Records
// -----------------------------------------------------------------------------

export const callOffs: CallOff[] = [
  { id: '1', dateTime: '1/27/2026 6:45 AM', employeeId: '10108263', employeeName: 'Maria Santos', jobId: '815', jobName: 'Riverside Apartments', reason: 'Sick', hasRecording: true },
  { id: '2', dateTime: '1/27/2026 7:30 AM', employeeId: '10108267', employeeName: 'Michael Brown', jobId: '827', jobName: 'Northside Manufacturing', reason: 'Sick', hasRecording: true },
  { id: '3', dateTime: '1/26/2026 5:15 PM', employeeId: '10108270', employeeName: 'Lisa Anderson', jobId: '818', jobName: 'TechMart Distribution', reason: 'Family Emergency' },
  { id: '4', dateTime: '1/26/2026 4:00 AM', employeeId: '10108273', employeeName: 'Jennifer Lee', jobId: '823', jobName: 'Wellness Center Downtown', reason: 'Personal', hasRecording: true },
  { id: '5', dateTime: '1/25/2026 6:00 AM', employeeId: '10108265', employeeName: 'Robert Chen', jobId: '828', jobName: 'Premier Windows Inc', reason: 'Personal' },
  { id: '6', dateTime: '1/25/2026 5:30 AM', employeeId: '10108269', employeeName: 'Diana Martinez', jobId: '820', jobName: 'Summit Media Group', reason: 'Sick' },
  { id: '7', dateTime: '1/24/2026 6:15 AM', employeeId: '10108274', employeeName: 'Nancy White', jobId: '821', jobName: 'Clearview Medical - South', reason: 'No Show' },
  { id: '8', dateTime: '1/24/2026 7:00 AM', employeeId: '10108276', employeeName: 'Steven Harris', jobId: '829', jobName: 'Global Shipping Co', reason: 'Personal', hasRecording: true },
  { id: '9', dateTime: '1/23/2026 4:45 AM', employeeId: '10108264', employeeName: 'James Wilson', jobId: '819', jobName: 'Valley School District', reason: 'Sick' },
  { id: '10', dateTime: '1/22/2026 6:30 AM', employeeId: '10108271', employeeName: 'Patricia Taylor', jobId: '822', jobName: 'BioTech Solutions', reason: 'No Show' },
];

// -----------------------------------------------------------------------------
// Mock Employee Forms
// -----------------------------------------------------------------------------

export const employeeForms: EmployeeForm[] = [
  { id: '1', employeeId: '10108263', employeeName: 'Maria Santos', formType: 'PERFORMANCE', nextDate: '2/7/2026' },
  { id: '2', employeeId: '10108264', employeeName: 'James Wilson', formType: 'COUNSELING', editUrl: '/forms/edit/2' },
  { id: '3', employeeId: '10108265', employeeName: 'Robert Chen', formType: 'PAYROLL' },
  { id: '4', employeeId: '10108267', employeeName: 'Michael Brown', formType: 'DISCIPLINE', editUrl: '/forms/edit/4', nextDate: '2/15/2026' },
  { id: '5', employeeId: '10108270', employeeName: 'Lisa Anderson', formType: 'INJURY', editUrl: '/forms/edit/5' },
  { id: '6', employeeId: '10108273', employeeName: 'Jennifer Lee', formType: 'RESIGNATION' },
  { id: '7', employeeId: '10108274', employeeName: 'Nancy White', formType: 'PERFORMANCE', nextDate: '3/1/2026' },
  { id: '8', employeeId: '10108276', employeeName: 'Steven Harris', formType: 'COUNSELING' },
  { id: '9', employeeId: '10108277', employeeName: 'Amanda Clark', formType: 'PAYROLL', editUrl: '/forms/edit/9' },
  { id: '10', employeeId: '10108269', employeeName: 'Diana Martinez', formType: 'PERFORMANCE', nextDate: '4/10/2026' },
];

// -----------------------------------------------------------------------------
// Mock Procedures
// -----------------------------------------------------------------------------

export const procedures: Procedure[] = [
  {
    id: '1',
    name: 'Client Complaint',
    steps: [
      {
        who: 'CSM',
        process: [
          'Document the complaint in detail',
          'Contact the client within 24 hours',
          'Investigate the issue with the service team',
          'Develop corrective action plan',
          'Follow up with client within 48 hours',
        ],
        notify: 'Operations Manager',
      },
    ],
  },
  {
    id: '2',
    name: 'Employee Injury',
    steps: [
      {
        who: 'Supervisor',
        process: [
          'Ensure employee receives immediate medical attention',
          'Complete incident report within 24 hours',
          'Notify HR department',
          'Document witness statements',
          'File workers compensation claim if applicable',
        ],
        notify: 'HR Manager, Safety Officer',
      },
    ],
  },
  {
    id: '3',
    name: 'Equipment Failure',
    steps: [
      {
        who: 'Service Provider',
        process: [
          'Report failure to supervisor immediately',
          'Tag equipment as out of service',
          'Document issue in equipment log',
          'Request replacement equipment',
        ],
        notify: 'Supervisor, Maintenance',
      },
    ],
  },
  {
    id: '4',
    name: 'Key/Access Issue',
    steps: [
      {
        who: 'CSM',
        process: [
          'Verify employee authorization',
          'Contact building manager/client',
          'Issue temporary access if approved',
          'Update access records',
          'Follow up on permanent solution',
        ],
        notify: 'Client Contact',
      },
    ],
  },
  {
    id: '5',
    name: 'Schedule Change Request',
    steps: [
      {
        who: 'Service Provider',
        process: [
          'Submit request through FieldOps',
          'Provide minimum 72 hours notice',
          'Include reason for request',
          'Await supervisor approval',
        ],
        notify: 'Supervisor',
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Mock Job Check-Ins
// -----------------------------------------------------------------------------

export const jobCheckIns: JobCheckIn[] = [
  {
    id: '1',
    jobId: '815',
    supervisorName: 'Alex Morgan',
    workQuality: 4,
    assessment: {
      equipment: true,
      suppliesMaterials: true,
      sds: true,
      panelOfPhysicians: true,
      taskSchedules: true,
      clientInteraction: true,
    },
    observation: 'All areas cleaned to standard. Employee arrived on time and completed all tasks.',
    photoUrl: '/photos/checkin-1.jpg',
    completedAt: '1/28/2026 4:30:00 PM',
  },
  {
    id: '2',
    jobId: '815',
    supervisorName: 'Alex Morgan',
    workQuality: 3,
    assessment: {
      equipment: true,
      suppliesMaterials: false,
      sds: true,
      panelOfPhysicians: true,
      taskSchedules: true,
      clientInteraction: true,
    },
    observation: 'Need to restock paper towels in restrooms. Overall good performance.',
    completedAt: '1/21/2026 5:15:00 PM',
  },
];

// -----------------------------------------------------------------------------
// Mock Position Assignments
// -----------------------------------------------------------------------------

export const positionAssignments: PositionAssignment[] = [
  {
    jobId: '815',
    employeeId: '10108263',
    employeeName: 'Maria Santos',
    position: 'Lead Cleaner',
    schedule: {
      mon: '5:00pm-9:00pm',
      tue: '5:00pm-9:00pm',
      wed: '5:00pm-9:00pm',
      thu: '5:00pm-9:00pm',
      fri: '5:00pm-9:00pm',
    },
    totalHours: 20,
  },
  {
    jobId: '815',
    employeeId: '10108264',
    employeeName: 'James Wilson',
    position: 'Cleaner',
    schedule: {
      mon: '5:00pm-8:00pm',
      wed: '5:00pm-8:00pm',
      fri: '5:00pm-8:00pm',
    },
    totalHours: 9,
  },
];

// -----------------------------------------------------------------------------
// Current User (for display purposes)
// -----------------------------------------------------------------------------

export const currentUser = {
  id: 'u001',
  name: 'Demo User',
  email: 'demo@example.com',
  role: 'CSM',
  currentPunchIn: {
    jobId: '819',
    jobName: 'Valley School District',
    punchInTime: '1/28/2026 3:15:37 PM',
  },
};

// -----------------------------------------------------------------------------
// Dashboard Stats
// -----------------------------------------------------------------------------

export const dashboardStats = {
  checkInsPastDue: {
    jobs: 0,
    employees: 81,
  },
  lastUpdated: '1/28/2026 6:33:20 PM',
};
