// =============================================================================
// vSupervisor Mock Data - Based on actual application screenshots
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
// Mock Employees (from screenshots)
// -----------------------------------------------------------------------------

export const employees: Employee[] = [
  {
    id: '10108263',
    name: 'Matilde Arevalo',
    role: 'Service Provider',
    status: 'Active',
    address: '103 Church St',
    city: 'Pittston',
    state: 'PA',
    zip: '18640',
    phone1: '570-677-2122',
    email: 'matildeerick@gmail.com',
    hireDate: '2/7/2012',
    ptoBalance: 8.37,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108264',
    name: 'Marvin Basuel',
    role: 'Service Provider',
    status: 'Active',
    address: '456 Oak Ave',
    city: 'Scranton',
    state: 'PA',
    zip: '18503',
    phone1: '570-555-0102',
    email: 'mbasuel@email.com',
    hireDate: '3/15/2018',
    ptoBalance: 12.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108265',
    name: 'Ralph Benke',
    role: 'Service Provider',
    status: 'Active',
    address: '789 Pine St',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18701',
    phone1: '570-555-0103',
    email: 'rbenke@email.com',
    hireDate: '6/20/2019',
    ptoBalance: 6.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108266',
    name: 'Marleny Betances',
    role: 'Service Provider',
    status: 'Active',
    address: '321 Maple Dr',
    city: 'Hazleton',
    state: 'PA',
    zip: '18201',
    phone1: '570-555-0104',
    email: 'mbetances@email.com',
    hireDate: '9/1/2020',
    ptoBalance: 4.25,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108267',
    name: 'Johnathan Boxer',
    role: 'Float / Fill',
    status: 'Active',
    address: '654 Elm St',
    city: 'Kingston',
    state: 'PA',
    zip: '18704',
    phone1: '570-555-0105',
    email: 'jboxer@email.com',
    hireDate: '1/10/2021',
    ptoBalance: 2.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108268',
    name: 'Jordan Campbell',
    role: 'Service Provider',
    status: 'Active',
    address: '987 Birch Ln',
    city: 'Nanticoke',
    state: 'PA',
    zip: '18634',
    phone1: '570-555-0106',
    email: 'jcampbell@email.com',
    hireDate: '4/5/2017',
    ptoBalance: 15.75,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108269',
    name: 'Diannette Caraballo',
    role: 'Service Provider',
    status: 'Active',
    address: '147 Cedar Ave',
    city: 'Scranton',
    state: 'PA',
    zip: '18505',
    phone1: '570-555-0107',
    email: 'dcaraballo@email.com',
    hireDate: '7/22/2019',
    ptoBalance: 8.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108270',
    name: 'Heather Cucura',
    role: 'Service Provider',
    status: 'Active',
    address: '258 Walnut St',
    city: 'Dunmore',
    state: 'PA',
    zip: '18512',
    phone1: '570-555-0108',
    email: 'hcucura@email.com',
    hireDate: '11/3/2018',
    ptoBalance: 10.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108271',
    name: 'Margaret Denney',
    role: 'Service Provider',
    status: 'Active',
    address: '369 Spruce Rd',
    city: 'Pittston',
    state: 'PA',
    zip: '18640',
    phone1: '570-555-0109',
    email: 'mdenney@email.com',
    hireDate: '2/14/2016',
    ptoBalance: 20.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108272',
    name: 'Jonathan Figueroa',
    role: 'Service Provider',
    status: 'Active',
    address: '480 Ash St',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-555-0110',
    email: 'jfigueroa@email.com',
    hireDate: '5/30/2020',
    ptoBalance: 3.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108273',
    name: 'Melissa Figueroa',
    role: 'Float / Fill',
    status: 'Active',
    address: '591 Cherry Ln',
    city: 'Kingston',
    state: 'PA',
    zip: '18704',
    phone1: '570-555-0111',
    email: 'mfigueroa@email.com',
    hireDate: '8/17/2021',
    ptoBalance: 1.5,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108274',
    name: 'Beverly Garzella',
    role: 'Service Provider',
    status: 'Active',
    address: '702 Hickory Dr',
    city: 'Scranton',
    state: 'PA',
    zip: '18504',
    phone1: '570-555-0112',
    email: 'bgarzella@email.com',
    hireDate: '10/9/2017',
    ptoBalance: 14.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108275',
    name: 'Jerrod Gibbs',
    role: 'Float / Fill',
    status: 'Active',
    address: '813 Poplar Ave',
    city: 'Hazleton',
    state: 'PA',
    zip: '18202',
    phone1: '570-555-0113',
    email: 'jgibbs@email.com',
    hireDate: '12/1/2022',
    ptoBalance: 0.0,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108276',
    name: 'Ronald Gorki',
    role: 'Service Provider',
    status: 'Active',
    address: '924 Sycamore St',
    city: 'Nanticoke',
    state: 'PA',
    zip: '18634',
    phone1: '570-555-0114',
    email: 'rgorki@email.com',
    hireDate: '3/25/2019',
    ptoBalance: 7.25,
    ptoAsOf: '1/17/2026',
  },
  {
    id: '10108277',
    name: 'Katherine Grullon',
    role: 'Service Provider',
    status: 'Active',
    address: '135 Willow Way',
    city: 'Dunmore',
    state: 'PA',
    zip: '18512',
    phone1: '570-555-0115',
    email: 'kgrullon@email.com',
    hireDate: '6/8/2018',
    ptoBalance: 11.0,
    ptoAsOf: '1/17/2026',
  },
];

// -----------------------------------------------------------------------------
// Mock Jobs (from screenshots)
// -----------------------------------------------------------------------------

export const jobs: Job[] = [
  {
    id: '815',
    name: '317 Linden Apartments',
    contact: 'Kristina Mammano',
    address1: '317 Linden Street',
    city: 'Scranton',
    state: 'PA',
    zip: '18503',
    phone1: '570-344-1750',
    email: 'kristina@dfmproperties.com',
    accessNotes: 'Admin breakroom code is 3512',
    supervisor: 'Justin Giannotti',
    createdDate: '6/6/2024',
    weeklyBudget: 16.0,
  },
  {
    id: '816',
    name: 'A. Duie Pyle',
    contact: 'Kyler Jelonek',
    address1: '1500 Industrial Hwy',
    city: 'Pittston',
    state: 'PA',
    zip: '18640',
    phone1: '570-655-8900',
    email: 'kjelonek@aduiepyle.com',
    supervisor: 'Justin Giannotti',
    createdDate: '3/15/2023',
    weeklyBudget: 24.0,
  },
  {
    id: '817',
    name: 'Abrahamsen Ginden LLC',
    contact: 'Stephanie Kulick',
    address1: '200 Adams Ave',
    city: 'Scranton',
    state: 'PA',
    zip: '18503',
    phone1: '570-342-4242',
    email: 'skulick@abrahamsen.com',
    supervisor: 'Justin Giannotti',
    createdDate: '1/10/2022',
    weeklyBudget: 12.0,
  },
  {
    id: '818',
    name: 'Best Buy RDC',
    contact: 'Chase Christman',
    address1: '100 Commerce Blvd',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-823-5500',
    email: 'cchristman@bestbuy.com',
    supervisor: 'Justin Giannotti',
    createdDate: '8/20/2021',
    weeklyBudget: 40.0,
  },
  {
    id: '819',
    name: 'Blue Ridge School District',
    contact: 'Jason Makosky',
    address1: '5051 School Rd',
    city: 'New Milford',
    state: 'PA',
    zip: '18834',
    phone1: '570-465-3161',
    email: 'jmakosky@brsd.org',
    supervisor: 'Justin Giannotti',
    createdDate: '9/1/2020',
    weeklyBudget: 80.0,
  },
  {
    id: '820',
    name: 'Cumulus Broadcasting',
    contact: 'Tom Lamb',
    address1: '600 Baltimore Dr',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-824-9000',
    email: 'tlamb@cumulus.com',
    supervisor: 'Justin Giannotti',
    createdDate: '4/12/2019',
    weeklyBudget: 20.0,
  },
  {
    id: '821',
    name: 'DermDox Dermatology - Sugarloaf',
    contact: 'Mikaela Tobash',
    address1: '1000 Sugarloaf Medical Ctr',
    city: 'Hazleton',
    state: 'PA',
    zip: '18202',
    phone1: '570-459-0029',
    email: 'mtobash@dermdox.com',
    supervisor: 'Justin Giannotti',
    createdDate: '7/7/2022',
    weeklyBudget: 15.0,
  },
  {
    id: '822',
    name: 'Enzyme Development Corporation',
    contact: 'David Drazdauskas',
    address1: '312 Industrial Park Rd',
    city: 'Pittston',
    state: 'PA',
    zip: '18640',
    phone1: '570-654-3300',
    email: 'ddrazdauskas@enzyme.com',
    supervisor: 'Justin Giannotti',
    createdDate: '2/28/2021',
    weeklyBudget: 18.0,
  },
  {
    id: '823',
    name: 'F.M.C. (Freedom Center)',
    contact: 'Theresa Niemenski',
    address1: '1500 N Main St',
    city: 'Scranton',
    state: 'PA',
    zip: '18508',
    phone1: '570-348-5600',
    email: 'tniemenski@fmc.org',
    supervisor: 'Justin Giannotti',
    createdDate: '5/5/2018',
    weeklyBudget: 35.0,
  },
  {
    id: '824',
    name: 'F.M.C. (Pittston)',
    contact: 'Sandy Cherkauskas',
    address1: '300 Kennedy Blvd',
    city: 'Pittston',
    state: 'PA',
    zip: '18640',
    phone1: '570-655-2280',
    email: 'scherkauskas@fmc.org',
    supervisor: 'Justin Giannotti',
    createdDate: '5/5/2018',
    weeklyBudget: 28.0,
  },
  {
    id: '825',
    name: 'F.M.C. (Wilkes-Barre)',
    contact: 'Macy Bukoskie',
    address1: '450 Pierce St',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-829-7611',
    email: 'mbukoskie@fmc.org',
    supervisor: 'Justin Giannotti',
    createdDate: '5/5/2018',
    weeklyBudget: 32.0,
  },
  {
    id: '826',
    name: "Hudson's Bay Company - Wilkes-Barre",
    contact: 'Roger Park',
    address1: '600 Wyoming Valley Mall',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-823-6800',
    email: 'rpark@hbc.com',
    supervisor: 'Justin Giannotti',
    createdDate: '11/15/2020',
    weeklyBudget: 45.0,
  },
  {
    id: '827',
    name: 'Hydro Mountaintop',
    contact: 'Gary Leco',
    address1: '2000 Mountain Rd',
    city: 'Mountaintop',
    state: 'PA',
    zip: '18707',
    phone1: '570-474-5000',
    email: 'gleco@hydro.com',
    supervisor: 'Justin Giannotti',
    createdDate: '6/30/2019',
    weeklyBudget: 50.0,
  },
  {
    id: '828',
    name: 'Jeld-Wen - Towanda',
    contact: 'Molly Hibbert',
    address1: '1 Jeld-Wen Way',
    city: 'Towanda',
    state: 'PA',
    zip: '18848',
    phone1: '570-265-2161',
    email: 'mhibbert@jeldwen.com',
    supervisor: 'Justin Giannotti',
    createdDate: '10/10/2017',
    weeklyBudget: 60.0,
  },
  {
    id: '829',
    name: "Kevin's Worldwide",
    contact: 'Jim Pettry',
    address1: '800 Kidder St',
    city: 'Wilkes-Barre',
    state: 'PA',
    zip: '18702',
    phone1: '570-823-1100',
    email: 'jpettry@kevinsww.com',
    supervisor: 'Justin Giannotti',
    createdDate: '3/3/2016',
    weeklyBudget: 22.0,
  },
];

// -----------------------------------------------------------------------------
// Mock Open Timesheets (from dashboard screenshot)
// -----------------------------------------------------------------------------

export const openTimesheets: OpenTimesheet[] = [
  { id: '1', date: '1/28/2026', jobId: '819', jobName: 'Blue Ridge School District', employeeId: '10108290', employeeName: 'Ronald Lynady', inTime: '1:50:42 PM' },
  { id: '2', date: '1/28/2026', jobId: '819', jobName: 'Blue Ridge School District', employeeId: '10108291', employeeName: 'Justin Giannotti', inTime: '3:15:37 PM' },
  { id: '3', date: '1/28/2026', jobId: '819', jobName: 'Blue Ridge School District', employeeId: '10108292', employeeName: 'Rafael Lantigua', inTime: '5:38:52 PM' },
  { id: '4', date: '1/28/2026', jobId: '830', jobName: 'Cobham', employeeId: '10108293', employeeName: 'Efrain Pordocier', inTime: '1:48:59 PM' },
  { id: '5', date: '1/28/2026', jobId: '831', jobName: 'Concentra - York Center', employeeId: '10108294', employeeName: 'Ann Neff', inTime: '4:58:14 PM' },
  { id: '6', date: '1/28/2026', jobId: '832', jobName: 'dormakaba', employeeId: '10108295', employeeName: 'Merriel Moyer Jr', inTime: '2:55:04 PM' },
  { id: '7', date: '1/28/2026', jobId: '833', jobName: 'F.M.C. (Dallas)', employeeId: '10108296', employeeName: 'Maurice Nobles', inTime: '4:44:07 PM' },
  { id: '8', date: '1/28/2026', jobId: '833', jobName: 'F.M.C. (Dallas)', employeeId: '10108297', employeeName: 'Michael Welch', inTime: '6:15:15 PM' },
  { id: '9', date: '1/28/2026', jobId: '823', jobName: 'F.M.C. (Freedom Center)', employeeId: '10108298', employeeName: 'Kelly McKenna', inTime: '6:08:28 PM' },
  { id: '10', date: '1/28/2026', jobId: '834', jobName: 'F.M.C. (Hazleton)', employeeId: '10108273', employeeName: 'Melissa Figueroa', inTime: '5:22:08 PM' },
  { id: '11', date: '1/28/2026', jobId: '835', jobName: 'Hexcel Corp. Building 1', employeeId: '10108299', employeeName: 'Daysha Conrad', inTime: '4:29:04 PM' },
  { id: '12', date: '1/28/2026', jobId: '827', jobName: 'Hydro Mountaintop', employeeId: '10108300', employeeName: 'Peter Normand', inTime: '4:04:18 PM' },
  { id: '13', date: '1/28/2026', jobId: '827', jobName: 'Hydro Mountaintop', employeeId: '10108267', employeeName: 'Johnathan Boxer', inTime: '5:24:23 PM' },
  { id: '14', date: '1/28/2026', jobId: '828', jobName: 'Jeld-Wen - Towanda', employeeId: '10108301', employeeName: 'Ramon Lantigua-Perez', inTime: '1:07:52 PM' },
  { id: '15', date: '1/28/2026', jobId: '829', jobName: "Kevin's Worldwide", employeeId: '10108302', employeeName: 'Tammy Martin', inTime: '4:34:26 PM' },
];

// -----------------------------------------------------------------------------
// Mock Job Alerts (from dashboard screenshot)
// -----------------------------------------------------------------------------

export const jobAlerts: JobAlert[] = [
  { id: '1', jobId: '816', jobName: 'A. Duie Pyle', serviceDate: 'Wednesday, January 28', acknowledgedBy: 'Justin Giannotti' },
  { id: '2', jobId: '836', jobName: 'Lennox International Archbald', serviceDate: 'Wednesday, January 28', acknowledgedBy: 'Justin Giannotti' },
  { id: '3', jobId: '823', jobName: 'F.M.C. (Freedom Center)', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Justin Giannotti' },
  { id: '4', jobId: '820', jobName: 'Cumulus Broadcasting', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Justin Giannotti' },
  { id: '5', jobId: '837', jobName: 'Mimi Equities LLC 614', serviceDate: 'Tuesday, January 27', acknowledgedBy: 'Justin Giannotti' },
];

// -----------------------------------------------------------------------------
// Mock PTO Requests (from screenshot)
// -----------------------------------------------------------------------------

export const ptoRequests: PTORequest[] = [
  { id: '1', date: '5/7/2026', employeeId: '10108310', employeeName: 'Christopher Honney', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '2', date: '5/8/2026', employeeId: '10108310', employeeName: 'Christopher Honney', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '3', date: '7/16/2026', employeeId: '10108310', employeeName: 'Christopher Honney', hours: 8.0, status: 'Submitted', supervisor: '--' },
  { id: '4', date: '10/31/2025', employeeId: '10108272', employeeName: 'Jonathan Figueroa', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '10/13/2025' },
  { id: '5', date: '10/31/2025', employeeId: '10108311', employeeName: 'Sharice Coleman', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '10/10/2025' },
  { id: '6', date: '11/13/2025', employeeId: '10108312', employeeName: 'Lucy Smith', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '9/3/2025' },
  { id: '7', date: '11/18/2025', employeeId: '10108313', employeeName: 'Thomas Hawley', hours: 'UNPAID', status: 'Denied', supervisor: '** Employee Direct **', completedDate: '11/10/2025' },
  { id: '8', date: '10/30/2025', employeeId: '10108314', employeeName: 'Romelle McClellan', hours: 'UNPAID', status: 'Approved', supervisor: '** Employee Direct **', completedDate: '9/24/2025' },
  { id: '9', date: '10/30/2025', employeeId: '10108315', employeeName: 'Nicholas Pandiscia', hours: 'UNPAID', status: 'Approved', supervisor: '** Employee Direct **', completedDate: '10/7/2025' },
  { id: '10', date: '10/30/2025', employeeId: '10108316', employeeName: 'Alex Tavarez', hours: 4.0, status: 'Approved', supervisor: 'Norman Lewis', completedDate: '10/9/2025' },
];

// -----------------------------------------------------------------------------
// Mock Call-Off Records
// -----------------------------------------------------------------------------

export const callOffs: CallOff[] = [
  { id: '1', dateTime: '1/27/2026 6:45 AM', employeeId: '10108263', employeeName: 'Matilde Arevalo', jobId: '815', jobName: '317 Linden Apartments', reason: 'Personal emergency - car trouble' },
  { id: '2', dateTime: '1/27/2026 7:30 AM', employeeId: '10108267', employeeName: 'Johnathan Boxer', jobId: '827', jobName: 'Hydro Mountaintop', reason: 'Sick - flu symptoms', hasRecording: true },
  { id: '3', dateTime: '1/26/2026 5:15 PM', employeeId: '10108270', employeeName: 'Heather Cucura', jobId: '818', jobName: 'Best Buy RDC', reason: 'Family emergency' },
  { id: '4', dateTime: '1/26/2026 4:00 AM', employeeId: '10108273', employeeName: 'Melissa Figueroa', jobId: '823', jobName: 'F.M.C. (Freedom Center)', reason: 'Child sick - no childcare', hasRecording: true },
  { id: '5', dateTime: '1/25/2026 6:00 AM', employeeId: '10108265', employeeName: 'Ralph Benke', jobId: '828', jobName: 'Jeld-Wen - Towanda', reason: 'Medical appointment' },
  { id: '6', dateTime: '1/25/2026 5:30 AM', employeeId: '10108269', employeeName: 'Diannette Caraballo', jobId: '820', jobName: 'Cumulus Broadcasting', reason: 'Sick - stomach virus' },
  { id: '7', dateTime: '1/24/2026 6:15 AM', employeeId: '10108274', employeeName: 'Beverly Garzella', jobId: '821', jobName: 'DermDox Dermatology - Sugarloaf', reason: 'Transportation issues' },
  { id: '8', dateTime: '1/24/2026 7:00 AM', employeeId: '10108276', employeeName: 'Ronald Gorki', jobId: '829', jobName: "Kevin's Worldwide", reason: 'Personal day', hasRecording: true },
  { id: '9', dateTime: '1/23/2026 4:45 AM', employeeId: '10108264', employeeName: 'Marvin Basuel', jobId: '819', jobName: 'Blue Ridge School District', reason: 'Sick - cold symptoms' },
  { id: '10', dateTime: '1/22/2026 6:30 AM', employeeId: '10108271', employeeName: 'Margaret Denney', jobId: '822', jobName: 'Enzyme Development Corporation', reason: 'Weather - roads impassable' },
];

// -----------------------------------------------------------------------------
// Mock Employee Forms
// -----------------------------------------------------------------------------

export const employeeForms: EmployeeForm[] = [
  { id: '1', employeeId: '10108263', employeeName: 'Matilde Arevalo', formType: 'PERFORMANCE', nextDate: '2/7/2026' },
  { id: '2', employeeId: '10108264', employeeName: 'Marvin Basuel', formType: 'COUNSELING', editUrl: '/forms/edit/2' },
  { id: '3', employeeId: '10108265', employeeName: 'Ralph Benke', formType: 'PAYROLL' },
  { id: '4', employeeId: '10108267', employeeName: 'Johnathan Boxer', formType: 'DISCIPLINE', editUrl: '/forms/edit/4', nextDate: '2/15/2026' },
  { id: '5', employeeId: '10108270', employeeName: 'Heather Cucura', formType: 'INJURY', editUrl: '/forms/edit/5' },
  { id: '6', employeeId: '10108273', employeeName: 'Melissa Figueroa', formType: 'RESIGNATION' },
  { id: '7', employeeId: '10108274', employeeName: 'Beverly Garzella', formType: 'PERFORMANCE', nextDate: '3/1/2026' },
  { id: '8', employeeId: '10108276', employeeName: 'Ronald Gorki', formType: 'COUNSELING' },
  { id: '9', employeeId: '10108277', employeeName: 'Katherine Grullon', formType: 'PAYROLL', editUrl: '/forms/edit/9' },
  { id: '10', employeeId: '10108269', employeeName: 'Diannette Caraballo', formType: 'PERFORMANCE', nextDate: '4/10/2026' },
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
          'Submit request through vSupervisor',
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
    supervisorName: 'Justin Giannotti',
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
    supervisorName: 'Justin Giannotti',
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
    employeeName: 'Matilde Arevalo',
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
    employeeName: 'Marvin Basuel',
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
  name: 'Test User',
  email: 'test.user@sovereigncs.com',
  role: 'CSM',
  currentPunchIn: {
    jobId: '819',
    jobName: 'Blue Ridge School District',
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
