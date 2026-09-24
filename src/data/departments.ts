const scannerVideoUrl = 'https://res.cloudinary.com/dk59pn2dq/video/upload/v1788944118/Medical_scanner_product_reveal_a__202609090918_g6cgi2.mp4';
const fmcemail= 'info@fmcasaba.org';

import defaultprofile from '../assets/images/profile.jpg';
import itTeamPhoto from '../assets/images/it_team.jpg';
import aePortrait from '../assets/images/A&E.jpg';
import anaPortrait from '../assets/images/HOD anasthesia.jpg';
import cdcrPortrait from '../assets/images/CDC.jpg';
import denPortrait from '../assets/images/HOD dentistry.jpg';
import heamPortrait from  '../assets/images/HOD haematology.jpg'
import recPortrait from '../assets/images/HOD_health_records.jpg'
import interPortrait from '../assets/images/HOD_internal_medicine.jpg'
import opthaPortrait from '../assets/images/HOD_opthamology.jpg'
import paedPortrait from '../assets/images/HOD_paediatrics.jpg'
import pathPortrait from '../assets/images/HOD_pathology.jpg'
import physioPortrait from '../assets/images/profile.jpg'
import pubPortrait from '../assets/images/HOD_public_heslth.jpg'
import radPortrait from '../assets/images/HOD_radiology.jpg'
import surgPortrait from '../assets/images/HOD_surgery.jpg'
import famPortrait from '../assets/images/HOD_family_medicine.jpg'
import ictPortrait from '../assets/images/hod_ict.jpg'
import nursePortrait from '../assets/images/HOD_nursing.jpg'
import pharmPortrait from '../assets/images/profile.jpg'
import seviPortrait from '../assets/images/profile.jpg'
import audPortrait from '../assets/images/HOD_internal_audit.jpg'
import socialPortrait from '../assets/images/profile.jpg'
import storePortrait from '../assets/images/HOD_stores.jpg'

export interface DepartmentService {
  title: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  category: string;
  head: string;
  title: string;
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
  { id: 'accident-emergency', name: 'Accident and Emergency', category: 'Emergency and acute care', head: 'Dr Chukwuemeka I. Chibuzo', title:'HOD Accident and Emergency | Consultant Orthopedic and Traumatology Surgeon' },
  { id: 'cdcr', name: 'Centre for Disease Control and Research (CDCR)', category: 'Disease control and research', head: 'Dr. Ugoeze Francis', title:'Director, CDCR' },
  { id: 'anaesthesia-intensive-care', name: 'Department of Anaesthesia and Intensive Care', category: 'Perioperative and critical care', head: 'DR. OYEWALE A. O', title:'CONSULTANT ANAESTHETIST' },
  { id: 'dentistry', name: 'Department of Dentistry', category: 'Dental and oral health', head: 'Dr EMUALOSI PEDRO OSEGI', title: 'HEAD, DENTISTRY DEPT CONSULTANT, ORAL AND MAXILLOFACIAL SURGEON' },
  { id: 'haematology', name: 'Department of Haematology', category: 'Blood disorders and laboratory medicine', head: 'Dr. Charles E. Origbo (FMCPath)', title:'' },
  { id: 'health-records', name: 'Department of Health Records and Information Management', category: 'Health records and information management', head: 'Egli, Paul O. (RHRM)', title:'AD/HOD: Health Records & Information Mgt.' },
  { id: 'internal-medicine', name: 'Department of Internal Medicine', category: 'Adult medical care', head: 'Dr. Ugoeze Francis C.', title:'HOD Internal Medicine' },
  { id: 'ophthalmology', name: 'Department of Ophthalmology', category: 'Eye care and vision services', head: 'Dr Akinyemi Adedeji', title:'HOD Ophthalmology' },
  { id: 'paediatrics', name: 'Department of Paediatrics', category: 'Child and adolescent health', head: 'Dr Efe Erhinyaye Omoyibo', title:'' },
  { id: 'pathology', name: 'Department of Pathology', category: 'Diagnostic laboratory services', head: 'Dr. Chukwuemeka Okoye', title:'' },
  { id: 'physiotherapy', name: 'Department of Physiotherapy', category: 'Rehabilitation and physical therapy', head: 'Dr Utomi', title:'' },
  { id: 'public-health', name: 'Department of Public Health', category: 'Population and preventive health', head: 'Dr (Mrs) Adesuwa Aigbokhaode', title:'' },
  { id: 'radiology', name: 'Department of Radiology', category: 'Diagnostic imaging', head: 'Dr Promise Okojie', title:'' },
  { id: 'surgery', name: 'Department of Surgery', category: 'Surgical care and procedures', head: 'DR.EMEAGUI NNAEMEKA KENNEDY', title:'' },
  { id: 'family-medicine', name: 'Family Medicine Department', category: 'Comprehensive primary care', head: 'Dr. Nneoma Chinweokwu', title:'' },
  { id: 'information-technology', name: 'Information Technology Department', category: 'Digital infrastructure and data systems', head: 'Benjamin Yakubu', title:'Head of Department, IT' },
  { id: 'internal-audit', name: 'Internal Audit Department', category: 'Governance and assurance', head: 'Mrs Rosemary Ofodile', title:'' },
  { id: 'nursing-services', name: 'Nursing Services Department', category: 'Patient care and nursing services', head: 'Mrs T Agbele', title:'Deputy Director of Nursing Services' },
  { id: 'pharmacy', name: 'Pharmacy Department', category: 'Medicines and pharmaceutical care', head: 'Pharmacist Dr. Christopher .A. Ujomu.', title:'' },
  { id: 'servicom', name: 'SERVICOM in FMC Asaba', category: 'Service quality and citizen relations', head: 'SERVICOM Nodal Officer', title:'' },
  { id: 'social-welfare', name: 'Social Welfare Department', category: 'Patient support and social care', head: 'Mr Henry Okonkwo', title:'' },
  { id: 'stores-supplies', name: 'Stores and Supplies', category: 'Procurement and hospital logistics', head: 'Mr Olorunfunmi Ajesi', title:'Chief Store Officer, Head of Department' },
];

export const DEFAULT_DEPARTMENT = DEPARTMENTS.find(
  (department) => department.id === 'information-technology',
) ?? DEPARTMENTS[0];

/**
 * Independent content definition for every department in FMC Asaba.
 * Each department is an autonomous object with tailored overviews, services, contacts, and metrics.
 */
export const DEPARTMENT_CONTENT: Record<string, DepartmentContent> = {
 'accident-emergency': {
  overview: 'The Accident and Emergency is the heart and gate way into our hospital for infectious and non-infectious diseases. Accident and Emergency is the first point of contact for all external patients referred or admitted into the hospital. We have both the adult and pediatric wings in the same magnificent structure.',
  introduction: 'We are saddled with the responsibility of receiving, sorting(triaging), resuscitation and stabilization of all trauma and medical emergency patients. We have state of the art ambulance services, paramedics, well trained trauma nurses, orthopedic plaster technicians and doctors which form a team. We have a purpose-built functional unit with a dedicated pharmacy, laboratory, radiology unit and theatre which helps improve our efficiency in service delivery. We take pride in our unique role, staff support system and flexible service delivery.',
  vision: 'To provide gold-standard emergency and critical resuscitation services with minimal door-to-treatment intervals, compassionate care, and zero tolerance for preventable emergency delays.',
  contactEmail: fmcemail,
  portrait: aePortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [],
  stats: [
    { value: '24/7', label: 'Emergency Coverage' },
    { value: '< 10m', label: 'Triage Response', accent: true },
  ],
},

'cdcr': {
  overview: 'The Centre for Disease Control and Research (CDCR) at FMC Asaba is a specialized facility leading regional disease surveillance, outbreak containment, diagnostic testing, and clinical epidemiology.',
  introduction: 'CDCR partners with national and international health agencies to monitor infectious disease trends, run molecular diagnostics, and train healthcare workers in epidemic preparedness.',
  vision: 'To remain a leading sentinel hub for biomedical research, infectious disease vigilance, and evidence-based outbreak control in the South-South and across Nigeria.',
  contactEmail: 'cdcr@fmcasaba.org',
  portrait: cdcrPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Infectious Disease Surveillance', description: 'Active tracking, data reporting, and epidemiological mapping of emerging communicable pathogens.' },
    { title: 'Molecular & PCR Diagnostics', description: 'High-precision viral and bacterial identification in accredited biosafety laboratories.' },
    { title: 'Epidemic Outbreak Response', description: 'Rapid deployment teams mobilized for community and hospital infectious containment.' },
    { title: 'Clinical Research & Field Trials', description: 'Bio-statistical investigations and translational studies in regional public health challenges.' },
    { title: 'Infection Prevention & Control (IPC)', description: 'Hospital-wide sterilization oversight, hand hygiene compliance audits, and biohazard controls.' },
  ],
  stats: [
    { value: 'Level 3', label: 'Biosafety Protocols' },
    { value: '100%', label: 'Active Surveillance', accent: true },
  ],
},

'anaesthesia-intensive-care': {
  overview: 'The Department of Anaesthesia and Intensive Care delivers perioperative anaesthetic management for all surgical specialties and administers advanced organ support in the hospital Intensive Care Unit (ICU).',
  introduction: 'Our consultant anaesthesiologists and critical care nurses work around the clock in major operative theatres, surgical subspecialties, obstetric theatres, and high-dependency care units.',
  vision: 'To deliver safe, individualized perioperative care and world-class critical care resuscitation through advanced monitoring and evidence-based intensive protocols.',
  contactEmail: 'anaesthesia@fmcasaba.org',
  portrait: anaPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'General & Regional Anaesthesia', description: 'State-of-the-art anaesthetic administration for complex elective and emergency surgical procedures.' },
    { title: 'Intensive Care Unit (ICU) Management', description: 'Advanced mechanical ventilation, invasive hemodynamic monitoring, and multiorgan support systems.' },
    { title: 'Acute & Chronic Pain Management', description: 'Post-operative epidural analgesia, peripheral nerve blocks, and specialized palliative pain relief.' },
    { title: 'Obstetric Anaesthesia & Analgesia', description: 'Painless labour epidural services and emergency caesarean section anaesthetic coverage.' },
    { title: 'Airway Resuscitation & Training', description: 'Hospital-wide advanced cardiac life support (ACLS) and difficult airway intervention protocols.' },
  ],
  stats: [
    { value: '24/7', label: 'ICU Readiness' },
    { value: '99.9%', label: 'Perioperative Safety', accent: true },
  ],
},

'dentistry': {
  overview: 'The Department of Dentistry provides comprehensive oral and maxillofacial healthcare, preventive dental therapies, corrective orthodontics, and reconstructive facial-dental surgical procedures.',
  introduction: 'Equipped with modern dental operatories and digital oral radiology, the dental team caters to adults and children seeking routine hygiene, cosmetic dentistry, or complex oral surgery.',
  vision: 'To champion oral health literacy and provide painless, state-of-the-art dental and maxillofacial treatments that restore function, confidence, and smiles.',
  contactEmail: 'dentistry@fmcasaba.org',
  portrait: denPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Oral & Maxillofacial Surgery', description: 'Surgical management of facial trauma, jaw tumors, impacted wisdom teeth, and facial reconstructions.' },
    { title: 'Conservative & Restorative Dentistry', description: 'Tooth-colored composite fillings, root canal endodontics, aesthetic crowns, and bridgework.' },
    { title: 'Preventive Dentistry & Periodontics', description: 'Ultrasonic scaling and polishing, periodontal disease treatment, and preventive oral education.' },
    { title: 'Orthodontic Correction', description: 'Correction of malocclusions and irregular teeth alignments using modern braces and retainers.' },
    { title: 'Paediatric Dental Services', description: 'Child-friendly dental care, preventive fissure sealants, and early dental development monitoring.' },
  ],
  stats: [
    { value: '5+', label: 'Specialist Operatories' },
    { value: '100%', label: 'Sterilization Standards', accent: true },
  ],
},

'haematology': {
  overview: 'The Department of Haematology and Blood Transfusion delivers clinical diagnosis and management of blood disorders, hemoglobinopathies, coagulopathies, and operates the hospital blood banking facility.',
  introduction: 'Working in close synergy with clinical units and laboratory medicine, haematology manages patients with sickle cell anaemia, leukaemia, and ensures safe voluntary blood donations.',
  vision: 'To be a centre of clinical excellence in non-malignant and malignant haematology, with reliable blood banking services and dedicated sickle cell comprehensive management.',
  contactEmail: 'haematology@fmcasaba.org',
  portrait: heamPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Comprehensive Sickle Cell Care', description: 'Specialized adult and paediatric hemoglobinopathy clinics with proactive pain crisis prevention.' },
    { title: 'Blood Bank & Component Therapy', description: 'Voluntary donor screening, whole blood, packed red cells, fresh frozen plasma, and platelets.' },
    { title: 'Haematologic Oncology', description: 'Evaluation and therapeutic protocols for leukaemias, lymphomas, and multiple myeloma.' },
    { title: 'Coagulation & Thrombosis Clinic', description: 'Investigation of bleeding tendencies, hemophilia care, and deep vein thrombosis monitoring.' },
    { title: 'Bone Marrow Biopsy & Cytology', description: 'Diagnostic marrow aspiration and trephine biopsy analysis for complex hematologic conditions.' },
  ],
  stats: [
    { value: '100%', label: 'Screened Blood Supply' },
    { value: '24/7', label: 'Transfusion Ready', accent: true },
  ],
},

'health-records': {
  overview: 'The Department of Health Records and Information Management coordinates the collection, storage, confidentiality, statistical collation, and retrieval of all patient health information at FMC Asaba.',
  introduction: 'The department oversees electronic and hybrid medical records systems, ICD-10 medical coding, national health data reporting, and seamless patient registration across all clinics.',
  vision: 'To maintain an impregnable, digitized, patient-centric health information repository that ensures clinical continuity, absolute privacy, and robust epidemiological reporting.',
  contactEmail: 'healthrecords@fmcasaba.org',
  portrait: recPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Central Patient Registration', description: 'Creation, indexing, and management of permanent electronic hospital medical record files.' },
    { title: 'Electronic Health Records (EHR) Support', description: 'Maintenance and smooth clinical access for electronic patient medical histories and case notes.' },
    { title: 'Clinical Coding & Disease Classification', description: 'Standardized disease and procedural coding according to the International Classification of Diseases (ICD-10).' },
    { title: 'Medical Statistics & Analytics', description: 'Monthly collation and publication of institutional morbidity, mortality, and clinical workload data.' },
    { title: 'Medicolegal Records Archiving', description: 'Confidential handling of insurance requests, medical reports, and legal documentation.' },
  ],
  stats: [
    { value: '100%', label: 'Confidentiality Compliance' },
    { value: '24/7', label: 'Record Accessibility', accent: true },
  ],
},

'internal-medicine': {
  overview: 'The Department of Internal Medicine is the pillar of adult medical care at FMC Asaba, providing specialist diagnosis, therapy, and chronic disease management across diverse subspecialties.',
  introduction: 'Comprising specialized units in cardiology, nephrology, endocrinology, neurology, gastroenterology, pulmonology, and dermatology, our physicians deliver patient-centered inpatient and clinic care.',
  vision: 'To provide compassionate, evidence-based tertiary medical care and foster rigorous post-graduate residency training in all subdisciplines of internal medicine.',
  contactEmail: 'internalmedicine@fmcasaba.org',
  portrait: interPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Cardiology & Hypertension Clinic', description: 'Resting ECG, echocardiography, ambulatory blood pressure monitoring, and heart failure care.' },
    { title: 'Nephrology & Dialysis Unit', description: 'Haemodialysis therapy for acute kidney injury and chronic kidney disease management.' },
    { title: 'Endocrinology & Diabetes Centre', description: 'Holistic diabetes mellitus management, diabetic foot ulcer care, and thyroid clinics.' },
    { title: 'Neurology & Stroke Unit', description: 'Clinical evaluation of epilepsy, neuro-rehabilitation, and acute stroke intervention.' },
    { title: 'Gastroenterology & Endoscopy', description: 'Diagnostic upper and lower endoscopy, liver disease management, and viral hepatitis clinics.' },
  ],
  stats: [
    { value: '7+', label: 'Specialist Medical Units' },
    { value: '24/7', label: 'Consultant Inpatient Care', accent: true },
  ],
},

'ophthalmology': {
  overview: 'The Department of Ophthalmology is dedicated to the preservation and restoration of vision, offering medical, surgical, and optical interventions for anterior and posterior eye segment conditions.',
  introduction: 'Equipped with operating microscopes, phacoemulsification technology, optical coherence tomography (OCT), and refractor units, our eye care specialists treat cataracts, glaucoma, and retina disorders.',
  vision: 'To eliminate preventable blindness, advance accessible tertiary eye care, and champion community vision outreach across Delta State.',
  contactEmail: 'ophthalmology@fmcasaba.org',
  portrait: opthaPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Micro-Surgical Cataract Surgery', description: 'Small-incision cataract surgery (SICS) and phacoemulsification with intraocular lens implantation.' },
    { title: 'Glaucoma Screening & Management', description: 'Applanation tonometry, visual field analysis, medical treatment, and surgical trabeculectomy.' },
    { title: 'Cornea & Ocular Surface Care', description: 'Treatment of severe corneal ulcers, ocular surface trauma, and pterygium excision.' },
    { title: 'Optometry & Low Vision Clinic', description: 'Computerized refractions, prescription spectacle dispensing, and low-vision aids.' },
    { title: 'Paediatric Eye Care', description: 'Screening for refractive errors, childhood cataract, and amblyopia therapy in young children.' },
  ],
  stats: [
    { value: '100%', label: 'Sight Restoration Focus' },
    { value: 'Daily', label: 'Eye Clinics & Surgeries', accent: true },
  ],
},

'paediatrics': {
  overview: 'The Department of Paediatrics delivers compassionate, comprehensive healthcare for neonates, infants, children, and adolescents, backed by an advanced Special Care Baby Unit (SCBU).',
  introduction: 'From premature newborn resuscitation to childhood infectious diseases, oncology, cardiology, and growth tracking, our paediatricians nurture the future generation with tender clinical excellence.',
  vision: 'To drastically reduce neonatal and under-five mortality, providing warm, family-centered medical and developmental care for every child.',
  contactEmail: 'paediatrics@fmcasaba.org',
  portrait: paedPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Special Care Baby Unit (SCBU)', description: 'Incubator nursing, advanced phototherapy, and CPAP respiratory support for preterms and neonates.' },
    { title: 'Children Emergency Room (CHER)', description: '24/7 emergency resuscitation for acute dehydration, severe malaria, sepsis, and seizures.' },
    { title: 'Immunization & Well-Baby Clinic', description: 'Routine childhood vaccination schedules, nutritional assessments, and developmental tracking.' },
    { title: 'Paediatric Cardiology & Nephrology', description: 'Diagnostic evaluation of congenital cardiac anomalies and childhood kidney disorders.' },
    { title: 'Adolescent Healthcare Clinic', description: 'Specialized healthcare, mental wellness counseling, and chronic illness transition guidance.' },
  ],
  stats: [
    { value: '24/7', label: 'SCBU & Neonatal Care' },
    { value: '100%', label: 'Child-Centred Care', accent: true },
  ],
},

'pathology': {
  overview: 'The Department of Pathology is the analytical engine of diagnostic medicine at FMC Asaba, comprising Histopathology, Chemical Pathology, and Medical Microbiology.',
  introduction: 'Pathology analyzes tissue biopsies, bodily fluids, and microbiological specimens to furnish clinicians with accurate, rapid, and definitive diagnostic reports that guide treatments.',
  vision: 'To be an internationally accredited diagnostic laboratory known for clinical precision, quality-assured turnaround times, and biomedical training.',
  contactEmail: 'pathology@fmcasaba.org',
  portrait: pathPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Histopathology & Cytopathology', description: 'Surgical tissue biopsy analysis, FNAC, cancer grading, and diagnostic Pap smear screenings.' },
    { title: 'Clinical Chemistry & Toxicology', description: 'Automated electrolyte panels, organ function profiles, cardiac markers, and hormone assays.' },
    { title: 'Medical Microbiology & Parasitology', description: 'Bacterial culture, antimicrobial sensitivity testing, fungal and parasite microscopy.' },
    { title: 'Immunohistochemistry & Tumor Markers', description: 'Specialized molecular staining for accurate oncological staging and targeted cancer therapy.' },
    { title: 'Post-Mortem Pathology', description: 'Forensic investigations, diagnostic autopsies, and clinical mortality audits.' },
  ],
  stats: [
    { value: '100%', label: 'Quality Assured' },
    { value: '24/7', label: 'Urgent Lab Diagnostics', accent: true },
  ],
},

'physiotherapy': {
  overview: 'The Department of Physiotherapy delivers evidence-based physical rehabilitation to restore mobility, alleviate acute and chronic pain, and maximize functional independence after illness or injury.',
  introduction: 'Working with neurology, orthopaedics, paediatrics, and intensive care, our licensed physiotherapists employ manual therapy, electrotherapy, and targeted exercise regimens in modern gymnasiums.',
  vision: 'To empower patients to regain optimal functional capacity and physical dignity through skilled rehabilitation and compassionate therapeutic partnerships.',
  contactEmail: 'physiotherapy@fmcasaba.org',
  portrait: physioPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Orthopaedic & Musculoskeletal Rehab', description: 'Post-fracture recovery, spinal rehabilitation, arthritis care, and joint replacement therapy.' },
    { title: 'Neuro-Rehabilitation Unit', description: 'Specialized stroke recovery, traumatic brain injury therapy, and nerve palsy rehabilitation.' },
    { title: 'Cardiopulmonary Physiotherapy', description: 'Chest airway clearance, ventilator weaning support, and cardiovascular fitness conditioning.' },
    { title: 'Paediatric Physical Therapy', description: 'Early motor milestone stimulation for cerebral palsy, Erb\'s palsy, and developmental delays.' },
    { title: 'Sports Injury & Ergonomics', description: 'Rehabilitation of ligamentous tears, athletic muscle strains, and workplace ergonomic consulting.' },
  ],
  stats: [
    { value: '100%', label: 'Personalized Plans' },
    { value: '5+', label: 'Rehab Specialties', accent: true },
  ],
},

'public-health': {
  overview: 'The Department of Public Health oversees community-oriented primary healthcare, epidemiological research, immunization programs, occupational health, and preventative wellness outreach.',
  introduction: 'The department bridges hospital medicine with Delta State communities through health education, maternal and child wellness initiatives, school screenings, and environmental hygiene surveillance.',
  vision: 'To promote proactive disease prevention, elevate population health indicators, and ensure equity in healthcare access across urban and rural communities.',
  contactEmail: 'publichealth@fmcasaba.org',
  portrait: pubPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Community Health Outreach', description: 'Mobile medical camps providing free hypertension, diabetes, and eye health screenings.' },
    { title: 'Maternal & Child Health Clinics', description: 'Antenatal wellness education, post-natal guidance, and child survival intervention initiatives.' },
    { title: 'Routine & Campaign Immunizations', description: 'Administration of national immunizations and surveillance for vaccine-preventable illnesses.' },
    { title: 'Occupational Health & Workplace Safety', description: 'Staff pre-employment health checks, annual medical screenings, and hospital safety audits.' },
    { title: 'Preventive Health Education', description: 'Health awareness campaigns addressing non-communicable lifestyle diseases and sanitation.' },
  ],
  stats: [
    { value: '50k+', label: 'Community Outreach Reach' },
    { value: '100%', label: 'Preventative Focus', accent: true },
  ],
},

'radiology': {
  overview: 'The Department of Radiology and Diagnostic Imaging provides non-invasive diagnostic and interventional radiological modalities to visualize structural and functional pathologies.',
  introduction: 'Equipped with a 1.5 Tesla MRI suite, multi-slice CT scanners, digital fluoroscopy, high-resolution ultrasound, and digital mammography, our radiologists offer 24/7 diagnostic support.',
  vision: 'To pioneer cutting-edge diagnostic and minimally invasive interventional radiological services with precision accuracy and ultra-low radiation dose protocols.',
  contactEmail: 'radiology@fmcasaba.org',
  portrait: radPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: '1.5T Magnetic Resonance Imaging (MRI)', description: 'High-definition neurological, musculoskeletal, spinal, and pelvic cross-sectional imaging.' },
    { title: 'Multi-Slice Computed Tomography (CT)', description: 'Fast multi-detector CT for head trauma, pulmonary embolism, thoracic and abdominal evaluations.' },
    { title: 'Digital X-Ray & Fluoroscopy', description: 'Ultra-low dose digital radiography for skeletal, chest, and dynamic contrast examinations.' },
    { title: 'High-Resolution Ultrasound & Doppler', description: 'Detailed abdominal, obstetric 4D, small-parts, and vascular Doppler hemodynamics.' },
    { title: 'Digital Mammography Unit', description: 'High-sensitivity breast cancer screening, diagnostic views, and stereotactic localized biopsies.' },
  ],
  stats: [
    { value: '1.5T', label: 'Superconducting MRI' },
    { value: '24/7', label: 'Diagnostic Imaging', accent: true },
  ],
},

'surgery': {
  overview: 'The Department of Surgery delivers elective, emergency, and minimally invasive operative procedures across general surgery, trauma, urology, orthopaedics, neurosurgery, and plastic reconstruction.',
  introduction: 'Staffed by seasoned consultant surgeons, surgical residents, and scrub nurses in multiple theatre suites, the department emphasizes safety checklists, laparoscopy, and swift recovery.',
  vision: 'To be the premier surgical destination in Nigeria, recognized for innovative minimally invasive techniques, surgical safety, and excellent post-operative outcomes.',
  contactEmail: 'surgery@fmcasaba.org',
  portrait: surgPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Minimally Invasive & Laparoscopic Surgery', description: 'Advanced keyhole surgical procedures for gallstones, appendicitis, and exploratory diagnostics.' },
    { title: 'Urology & Endourological Interventions', description: 'Prostate surgery, transurethral resections, urethral reconstruction, and urinary calculi extraction.' },
    { title: 'Orthopaedics & Complex Trauma Fixation', description: 'Internal and external fracture fixation, spinal trauma management, and deformity corrections.' },
    { title: 'Paediatric & Neonatal Surgical Care', description: 'Correction of congenital gastrointestinal anomalies, hernias, and paediatric surgical emergencies.' },
    { title: 'Plastic & Reconstructive Surgery', description: 'Burn contracture releases, skin grafting, keloid excision, and microvascular tissue repairs.' },
  ],
  stats: [
    { value: '200+', label: 'Laparoscopic Cases Done' },
    { value: '24/7', label: 'Emergency Theatre Ready', accent: true },
  ],
},

'family-medicine': {
  overview: 'The Family Medicine Department is the primary front-door clinic providing holistic, continuous, and coordinated healthcare for individuals and families across all age groups.',
  introduction: 'Acting as the central gateway to hospital specialty clinics, family physicians evaluate undifferentiated symptoms, manage chronic illnesses, and provide preventive health counseling.',
  vision: 'To exemplify compassionate, patient-centered whole-person care that treats the patient within the context of family and community life.',
  contactEmail: 'familymedicine@fmcasaba.org',
  portrait: famPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'General Outpatient Clinic (GOPD)', description: 'First-contact clinical evaluation and acute medical therapy for adults, elderly, and adolescents.' },
    { title: 'Chronic Disease Shared Management', description: 'Long-term coordinated care for hypertension, type 2 diabetes, arthritis, and metabolic health.' },
    { title: 'Comprehensive Health & Executive Checkups', description: 'Personalized wellness screenings, cardiovascular risk profiles, and preventive physical exams.' },
    { title: 'National Health Insurance (NHIA) Care', description: 'Comprehensive primary clinical services and consultations for registered health insurance enrollees.' },
    { title: 'Clinical Referral & Triage Gateway', description: 'Prompt specialist referrals and seamless inter-departmental consultation coordination.' },
  ],
  stats: [
    { value: 'Daily', label: 'Outpatient Care Delivery' },
    { value: '100%', label: 'Family-Centred Focus', accent: true },
  ],
},

'information-technology': {
  overview: 'The Information Technology Department of FMC Asaba maintains the servers housing patient data, the physical network, and the computer-related infrastructure of the hospital.',
  introduction: 'The department also develops and manages digital services and application software that run across the FMC Asaba local area network.',
  vision: 'With a vision to evolve through current technology, the IT department is poised to grow while efficiently and cost-effectively sustaining everything digital in FMC Asaba.',
  contactEmail: 'benjaminyakubu@fmcasaba.org',
  portrait: ictPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Digital Attendance', description: 'A flexible attendance system that runs on all devices, especially smartphones, with facial capture.' },
    { title: 'Digital Federal ID Card Processing', description: 'Image capture, digitized signatures, and one-click reprints in collaboration with PRO.' },
    { title: 'Store Manager', description: 'A digital store inventory system that makes requisitioning more secure and efficient.' },
    { title: 'Official email requests', description: 'Support for official fmcasaba.org and local fmcasaba.wifi addresses.' },
    { title: 'Web design and development', description: 'In-house design and development for FMC Asaba digital services.' },
    { title: 'FMC Asaba Meet', description: 'An internal video meeting service for hospital teams without mobile data.' },
    { title: 'Wireless and CCTV services', description: 'Secure campus networking and in-house CCTV deployments.' },
  ],
  stats: [
    { value: '100%', label: 'In-House Built' },
    { value: '24/7', label: 'Server Uptime', accent: true },
  ],
},

'internal-audit': {
  overview: 'The Internal Audit Department delivers independent, objective assurance and consulting services to enhance financial accountability, risk governance, and statutory compliance.',
  introduction: 'The audit unit continually assesses accounting procedures, revenue streams, procurement compliance, and inventory systems to protect institutional assets and uphold transparency.',
  vision: 'To foster an institution-wide culture of fiscal integrity, operational transparency, and proactive risk mitigation aligned with federal public sector governance standards.',
  contactEmail: 'internalaudit@fmcasaba.org',
  portrait: audPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Financial & Pre-Payment Auditing', description: 'Systematic vetting and compliance verification of procurement vouchers and hospital disbursements.' },
    { title: 'Revenue Assurance & Remittance Vetting', description: 'Real-time auditing of hospital billing, collections, electronic receipts, and treasury remittances.' },
    { title: 'Inventory & Physical Asset Verification', description: 'Periodic stock audits and asset register reconciliations for clinical equipment and stores.' },
    { title: 'Risk Governance & Internal Controls', description: 'Evaluating internal workflow risks and recommending fortified fiduciary control safeguards.' },
    { title: 'Statutory Compliance Monitoring', description: 'Ensuring strict compliance with Federal Financial Regulations, public procurement, and auditing guidelines.' },
  ],
  stats: [
    { value: '100%', label: 'Statutory Compliance' },
    { value: 'Zero', label: 'Unvetted Disbursals', accent: true },
  ],
},

'nursing-services': {
  overview: 'The Nursing Services Department is the heartbeat of bedside patient care at FMC Asaba, delivering compassionate, skilled, and 24-hour continuous clinical nursing attention.',
  introduction: 'Comprising specialized nurses in critical care, perioperative, maternal and child health, oncology, and ophthalmic nursing, the directorate ensures patient safety and holistic healing.',
  vision: 'To be the benchmark for exemplary, empathetic, and evidence-based nursing care delivered with professionalism, dignity, and clinical excellence.',
  contactEmail: 'nursingservices@fmcasaba.org',
  portrait: nursePortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: '24/7 Inpatient Bedside Nursing', description: 'Continuous patient monitoring, vital signs tracking, wound dressings, and therapeutic comfort.' },
    { title: 'Perioperative & Theatre Nursing', description: 'Specialized scrub and circulating nursing assistance during elective and emergency operations.' },
    { title: 'Maternal & Midwifery Services', description: 'Comprehensive antenatal monitoring, labour and delivery support, and postpartum maternal care.' },
    { title: 'Critical Care & ICU Nursing', description: 'Round-the-clock specialized bedside nursing in the intensive care unit and high-dependency wards.' },
    { title: 'Infection Control & Patient Education', description: 'Aseptic technique enforcement, barrier nursing, and health counseling for hospitalized patients.' },
  ],
  stats: [
    { value: '24/7', label: 'Continuous Nursing Care' },
    { value: '100%', label: 'Compassionate Service', accent: true },
  ],
},

'pharmacy': {
  overview: 'The Pharmacy Department is responsible for the rational dispensing, compounding, pharmacovigilance, and inventory management of quality-assured medicines across FMC Asaba.',
  introduction: 'Operating satellite pharmacies in inpatient wards, A&E, and outpatient clinics, licensed pharmacists collaborate with doctors to ensure safe, effective, and affordable drug therapy.',
  vision: 'To guarantee equitable access to safe, potent, and cost-effective pharmaceutical care supported by modern compounding and proactive clinical pharmacy services.',
  contactEmail: 'pharmacy@fmcasaba.org',
  portrait: pharmPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: '24/7 Inpatient & Outpatient Dispensing', description: 'Timely drug dispensing, patient medication counseling, dosage validation, and interaction checks.' },
    { title: 'Emergency & Acute Care Pharmacy', description: 'Immediate medication access and bedside drug delivery for resuscitation in Accident & Emergency.' },
    { title: 'Clinical Pharmacy & Ward Rounds', description: 'Active multidisciplinary ward participation, pharmacotherapy review, and therapeutic drug monitoring.' },
    { title: 'Extemporaneous Compounding Unit', description: 'Preparation of customized dermatological, paediatric, and specialized sterile liquid formulations.' },
    { title: 'Pharmacovigilance & Drug Information', description: 'Monitoring and reporting adverse drug reactions, drug interaction queries, and clinical drug education.' },
  ],
  stats: [
    { value: '100%', label: 'Quality Assured Drugs' },
    { value: '24/7', label: 'Pharmacy Operations', accent: true },
  ],
},

'servicom': {
  overview: 'The SERVICOM Directorate (Service Compact With All Nigerians) at FMC Asaba is dedicated to championing customer satisfaction, patient rights, and institutional service excellence.',
  introduction: 'SERVICOM monitors clinic waiting times, conducts patient satisfaction surveys, facilitates grievance redress, and fosters a culture of prompt, respectful service throughout the hospital.',
  vision: 'To make FMC Asaba the most responsive, patient-friendly, and accountable healthcare institution in Nigeria where every citizen receives prompt and courteous service.',
  contactEmail: 'servicom@fmcasaba.org',
  portrait: seviPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Customer Care & Hospital Helpdesks', description: 'Frontline guidance, patient wayfinding assistance, and compassionate enquiry resolution.' },
    { title: 'Complaints & Grievance Investigation', description: 'Impartial, transparent investigation and swift redress of patient service grievances.' },
    { title: 'Service Delivery Charter Oversight', description: 'Monitoring departmental turnaround times and enforcing public service standards.' },
    { title: 'Patient Feedback & Satisfaction Audits', description: 'Regular gathering and analysis of patient evaluations to drive hospital-wide improvements.' },
    { title: 'Staff Courtesy & Ethics Sensitization', description: 'Continuous workshops for staff on patient dignity, empathy, communication, and ethics.' },
  ],
  stats: [
    { value: '100%', label: 'Charter Enforcement' },
    { value: '< 24h', label: 'Grievance Resolution', accent: true },
  ],
},

'social-welfare': {
  overview: 'The Social Welfare Department provides psychosocial evaluation, counseling, patient advocacy, and emergency financial relief navigation for vulnerable and indigent patients.',
  introduction: 'Medical social workers liaise between clinical teams, families, philanthropic organizations, and state welfare boards to ensure socio-economic hurdles never obstruct vital medical care.',
  vision: 'To ensure that no patient is denied healthcare due to social vulnerability, advocating for dignity, equity, and holistic psychological support.',
  contactEmail: 'socialwelfare@fmcasaba.org',
  portrait: socialPortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Psychosocial Counseling & Assessment', description: 'Emotional and psychological counseling for patients coping with chronic illnesses and trauma.' },
    { title: 'Indigent & Vulnerable Patient Assistance', description: 'Appraisal and facilitation of medical bill waivers, donor sponsorships, and charity relief.' },
    { title: 'Child Protection & Welfare Advocacy', description: 'Intervention, institutional protection, and coordination for abandoned or vulnerable children.' },
    { title: 'Discharge Planning & Family Tracing', description: 'Reuniting isolated patients with families and organizing safe post-treatment community reintegration.' },
    { title: 'Bereavement & Crisis Counseling', description: 'Empathetic emotional support, bereavement guidance, and crisis intervention for families.' },
  ],
  stats: [
    { value: '100%', label: 'Patient Advocacy Rate' },
    { value: 'Daily', label: 'Psychosocial Interventions', accent: true },
  ],
},

'stores-supplies': {
  overview: 'The Department of Stores and Supplies manages the strategic warehousing, inventory control, requisitioning, and logistics of medical consumables, equipment, and general supplies.',
  introduction: 'Leveraging digital stock tracking tools in coordination with IT and procurement, the department ensures unbroken supply chains for surgical theatres, clinics, and administrative units.',
  vision: 'To maintain an efficient, transparent, and resilient hospital supply chain with zero stock-outs of vital medical consumables and accountable asset tracking.',
  contactEmail: 'stores@fmcasaba.org',
  portrait: storePortrait,
  teamImage: itTeamPhoto,
  backgroundVideo: scannerVideoUrl,
  services: [
    { title: 'Medical Consumables Warehousing', description: 'Secure, climate-controlled warehousing of surgical dressings, syringes, and clinical consumables.' },
    { title: 'Digital Inventory & Stock Requisitions', description: 'Streamlined digital requests, automated order approvals, and electronic inventory tracking.' },
    { title: 'Batch Tracking & Expiry Date Auditing', description: 'Strict First-In, First-Out (FIFO) stock rotation protocols to eliminate expired consumables.' },
    { title: 'Emergency Hospital Supplies Dispatch', description: '24/7 emergency supply packs mobilized for theatres, intensive care, and resuscitation units.' },
    { title: 'Fixed Assets & Capital Inventory', description: 'Systematic receiving, barcoding, tagging, and custody tracking of hospital capital equipment.' },
  ],
  stats: [
    { value: '100%', label: 'Digital Inventory Tracked' },
    { value: 'Zero', label: 'Stock-Out Tolerance', accent: true },
  ],
},
};

/**
 * Array export containing all departments paired with their independent content,
 * for convenient array-based iteration, filtering, and mapping.
 */
export const DEPARTMENT_CONTENT_LIST: { department: Department; content: DepartmentContent }[] = DEPARTMENTS.map(
  (department) => ({
    department,
    content: DEPARTMENT_CONTENT[department.id] ?? DEPARTMENT_CONTENT['information-technology'],
  })
);

export function getDepartmentContent(departmentId: string): DepartmentContent {
  return DEPARTMENT_CONTENT[departmentId] ?? DEPARTMENT_CONTENT['information-technology'];
}
