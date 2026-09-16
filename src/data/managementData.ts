const mdPhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789594945/fmc_management_md_ypx4gg.jpg';
const cmacPhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789594943/fmc_management_cmac_shxjjw.jpg';
const adminPhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789594943/fmc_management_admin_r5s9dd.jpg';
const dcmacPhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789594943/fmc_management_dcmac_mgmu1e.jpg';
const financePhoto = 'https://res.cloudinary.com/dk59pn2dq/image/upload/v1789594945/fmc_management_finance_ekhr7y.jpg';

export interface ManagementMember {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  officeTitle: string;
  shortBio: string;
  responsibilities: string[];
  contactEmail: string;
}

export const MANAGEMENT_TEAM: ManagementMember[] = [
  {
    id: 'dr-omo-ekenam',
    name: 'Dr Omo Ekenam N',
    role: 'Medical Director',
    category: 'Executive Leadership',
    image: mdPhoto,
    officeTitle: 'Chief Executive Officer & Medical Director',
    shortBio: 'Leading Federal Medical Centre, Asaba with a strategic vision of transformative tertiary healthcare, state-of-the-art clinical modernization, and patient-centered service delivery across Delta State and Nigeria.',
    responsibilities: [
      'Strategic executive direction and tertiary healthcare policies',
      'Institutional leadership and federal healthcare liaisons',
      'Clinical infrastructure expansion and hospital modernization',
      'Championing compassionate, world-class patient care'
    ],
    contactEmail: 'medicaldirector@fmcasaba.org'
  },
  {
    id: 'dr-james-ibuaku',
    name: 'Dr James C Ibuaku',
    role: 'Head of Clinical Services/Training, Chairman Medical Advisory Commitee',
    category: 'Clinical Governance',
    image: cmacPhoto,
    officeTitle: 'Chairman Medical Advisory Committee (CMAC)',
    shortBio: 'Directing all clinical directorates, resident doctors training programs, multidisciplinary medical audits, and clinical protocols across inpatient and outpatient departments.',
    responsibilities: [
      'Oversight of all clinical departments and specialty units',
      'Postgraduate residency training and internship coordination',
      'Medical ethics, peer reviews, and clinical quality assurance',
      'Chairmanship of the Medical Advisory Committee'
    ],
    contactEmail: 'cmac@fmcasaba.org'
  },
  {
    id: 'mr-patrick-ononye',
    name: 'Mr Patrick Ononye',
    role: 'Director of Administration',
    category: 'Administration & Governance',
    image: adminPhoto,
    officeTitle: 'Director of Administration (DA)',
    shortBio: 'Stewarding hospital governance, human resource administration, institutional legal protocols, staff welfare, and operational support systems at Federal Medical Centre Asaba.',
    responsibilities: [
      'Hospital workforce administration and human resources management',
      'Institutional governance, statutory compliance, and protocol',
      'Operational support services and secretariat coordination',
      'Staff welfare and labour relations oversight'
    ],
    contactEmail: 'administration@fmcasaba.org'
  },
  {
    id: 'dr-adedeji-akinyemi',
    name: 'Dr Adedeji Akinyemi',
    role: 'Deputy Chair Medical Advisory Commitee',
    category: 'Clinical Governance',
    image: dcmacPhoto,
    officeTitle: 'Deputy Chairman Medical Advisory Committee (D-CMAC)',
    shortBio: 'Assisting in the governance of specialized clinical protocols, research programs, continuous professional development, and clinical emergency coordination.',
    responsibilities: [
      'Assisting the CMAC in clinical supervision and medical training',
      'Emergency medicine coordination and rapid response oversight',
      'Clinical continuous medical education (CME) and research programs',
      'Departmental inter-clinical synergy and referral pathways'
    ],
    contactEmail: 'dcmac@fmcasaba.org'
  },
  {
    id: 'mr-omonigho-a',
    name: 'Mr Omonigho A',
    role: 'Director of Finance and Accounts',
    category: 'Finance & Treasury',
    image: financePhoto,
    officeTitle: 'Director of Finance and Accounts (DFA)',
    shortBio: 'Managing fiscal stewardship, capital project budgeting, treasury operations, statutory financial reporting, and revenue transparency for sustainable healthcare delivery.',
    responsibilities: [
      'Prudent financial stewardship and hospital fiscal policy',
      'Annual budgeting, treasury administration, and revenue assurance',
      'Statutory financial audits, compliance, and transparent accounting',
      'Funding coordination for clinical supplies and infrastructure projects'
    ],
    contactEmail: 'finance@fmcasaba.org'
  }
];
