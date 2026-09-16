const benjaminPortrait = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789595014/mr_benjamin_lddhnb.jpg';
const teamPhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789595121/team_photo_bkv8ug.jpg';

export interface DepartmentService {
  title: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  category: string;
  head: string;
}

export interface DepartmentContent {
  overview: string;
  introduction: string;
  vision: string;
  contactEmail: string;
  portrait: string;
  teamImage: string;
  backgroundVideo?: string;
  services: DepartmentService[];
  stats: { value: string; label: string; accent?: boolean }[];
}

export const DEPARTMENTS: Department[] = [
  { id: 'accident-emergency', name: 'Accident and Emergency', category: 'Emergency and acute care', head: 'Head of Accident and Emergency' },
  { id: 'cdcr', name: 'Centre for Disease Control and Research (CDCR)', category: 'Disease control and research', head: 'Head of CDCR' },
  { id: 'anaesthesia-intensive-care', name: 'Department of Anaesthesia and Intensive Care', category: 'Perioperative and critical care', head: 'Head of Anaesthesia and Intensive Care' },
  { id: 'dentistry', name: 'Department of Dentistry', category: 'Dental and oral health', head: 'Head of Dentistry' },
  { id: 'haematology', name: 'Department of Haematology', category: 'Blood disorders and laboratory medicine', head: 'Head of Haematology' },
  { id: 'health-records', name: 'Department of Health Records and Information Management', category: 'Health records and information management', head: 'Head of Health Records' },
  { id: 'internal-medicine', name: 'Department of Internal Medicine', category: 'Adult medical care', head: 'Head of Internal Medicine' },
  { id: 'ophthalmology', name: 'Department of Ophthalmology', category: 'Eye care and vision services', head: 'Head of Ophthalmology' },
  { id: 'paediatrics', name: 'Department of Paediatrics', category: 'Child and adolescent health', head: 'Head of Paediatrics' },
  { id: 'pathology', name: 'Department of Pathology', category: 'Diagnostic laboratory services', head: 'Head of Pathology' },
  { id: 'physiotherapy', name: 'Department of Physiotherapy', category: 'Rehabilitation and physical therapy', head: 'Head of Physiotherapy' },
  { id: 'public-health', name: 'Department of Public Health', category: 'Population and preventive health', head: 'Head of Public Health' },
  { id: 'radiology', name: 'Department of Radiology', category: 'Diagnostic imaging', head: 'Head of Radiology' },
  { id: 'surgery', name: 'Department of Surgery', category: 'Surgical care and procedures', head: 'Head of Surgery' },
  { id: 'family-medicine', name: 'Family Medicine Department', category: 'Comprehensive primary care', head: 'Head of Family Medicine' },
  { id: 'information-technology', name: 'Information Technology Department', category: 'Digital infrastructure and data systems', head: 'Benjamin Yakubu' },
  { id: 'internal-audit', name: 'Internal Audit Department', category: 'Governance and assurance', head: 'Head of Internal Audit' },
  { id: 'nursing-services', name: 'Nursing Services Department', category: 'Patient care and nursing services', head: 'Head of Nursing Services' },
  { id: 'pharmacy', name: 'Pharmacy Department', category: 'Medicines and pharmaceutical care', head: 'Head of Pharmacy' },
  { id: 'servicom', name: 'SERVICOM in FMC Asaba', category: 'Service quality and citizen relations', head: 'SERVICOM Nodal Officer' },
  { id: 'social-welfare', name: 'Social Welfare Department', category: 'Patient support and social care', head: 'Head of Social Welfare' },
  { id: 'stores-supplies', name: 'Stores and Supplies', category: 'Procurement and hospital logistics', head: 'Head of Stores and Supplies' },
];

export const DEFAULT_DEPARTMENT = DEPARTMENTS.find(
  (department) => department.id === 'information-technology',
) ?? DEPARTMENTS[0];

const sharedServices: DepartmentService[] = [
  { title: 'Patient-centred service delivery', description: 'Coordinated workflows that support safe, timely, and respectful care.' },
  { title: 'Professional collaboration', description: 'Working with clinical and administrative teams across FMC Asaba.' },
  { title: 'Continuous improvement', description: 'Practical systems and processes that improve quality and operational efficiency.' },
  { title: 'Reliable departmental support', description: 'Responsive support for patients, staff, and the wider hospital community.' },
];

const informationTechnologyContent: DepartmentContent = {
  overview: 'The Information Technology Department of FMC Asaba maintains the servers housing patient data, the physical network, and the computer-related infrastructure of the hospital.',
  introduction: 'The department also develops and manages digital services and application software that run across the FMC Asaba local area network.',
  vision: 'With a vision to evolve through current technology, the IT department is poised to grow while efficiently and cost-effectively sustaining everything digital in FMC Asaba.',
  contactEmail: 'benjaminyakubu@fmcasaba.org',
  portrait: benjaminPortrait,
  teamImage: teamPhoto,
  backgroundVideo: 'https://res.cloudinary.com/dk59pn2dq/video/upload/v1788944118/Medical_scanner_product_reveal_a__202609090918_g6cgi2.mp4',
  services: [
    { title: 'Digital Attendance', description: 'A flexible attendance system that runs on all devices, especially smartphones, with facial capture.' },
    { title: 'Digital Federal ID Card Processing', description: 'Image capture, digitized signatures, and one-click reprints in collaboration with PRO.' },
    { title: 'Store Manager', description: 'A digital store inventory system that makes requisitioning more secure and efficient.' },
    { title: 'Official email requests', description: 'Support for official fmcasaba.org and local fmcasaba.wifi addresses.' },
    { title: 'Web design and development', description: 'In-house design and development for FMC Asaba digital services.' },
    { title: 'FMC Asaba Meet', description: 'An internal video meeting service for hospital teams without mobile data.' },
    { title: 'Wireless and CCTV services', description: 'Secure campus networking and in-house CCTV deployments.' },
  ],
  stats: [{ value: '100%', label: 'In-House Built' }, { value: '24/7', label: 'Server Uptime', accent: true }],
};

const defaultContent: DepartmentContent = {
  overview: 'The department supports FMC Asaba by delivering coordinated, professional services for patients, staff, and the wider community.',
  introduction: 'This department works with teams across the hospital to provide dependable services, maintain high standards, and support excellent patient outcomes.',
  vision: 'With a commitment to quality, accountability, and continuous improvement, this department is poised to grow while supporting excellent care at FMC Asaba.',
  contactEmail: 'info@fmcasaba.org',
  portrait: benjaminPortrait,
  teamImage: teamPhoto,
  backgroundVideo: 'https://res.cloudinary.com/dk59pn2dq/video/upload/v1788944118/Medical_scanner_product_reveal_a__202609090918_g6cgi2.mp4',
  services: sharedServices,
  stats: [{ value: '100%', label: 'Service Focus' }, { value: '24/7', label: 'Hospital Support', accent: true }],
};

export const DEPARTMENT_CONTENT: Record<string, DepartmentContent> = Object.fromEntries(
  DEPARTMENTS.map((department) => [department.id, department.id === DEFAULT_DEPARTMENT.id ? informationTechnologyContent : defaultContent]),
);

export function getDepartmentContent(departmentId: string): DepartmentContent {
  return DEPARTMENT_CONTENT[departmentId] ?? defaultContent;
}