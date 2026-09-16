import { NewsArticle } from '../types';

export const MD_INFO = {
  name: "Dr. Victor Omo Ekenam",
  title: "Medical Director & Chief Executive Officer",
  credentials: "MBBS, FWACS, FICS, FMCS",
  quote: "Welcome to the Federal Medical Centre, Asaba where world-class healthcare meets a magnificent atmosphere of truly outstanding service.",
  subquote: "Our mission is dedicated to providing compassionate, tertiary clinical care, cutting-edge medical training, and pace-setting diagnostic accuracy for Delta State and Nigeria.",
  image: "https://fmcasaba.org/splash/assets/img/team/md1.jpg",
  hospitalName: "Federal Medical Centre Asaba",
  state: "Delta State, Nigeria",
  contactHotline: "+234 (0) 803 555 3622",
  emergencyEmail: "emergency@fmcasaba.gov.ng"
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "fmc-surgery-theatre-expansion",
    title: "FMC Asaba Achieves 200th Milestone Minimally Invasive Surgical Procedure",
    subtitle: "Pioneering Laparoscopic & Advanced Endoscopic Interventions in the South-South",
    category: "Clinical Breakthrough",
    categoryColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    date: "September 8, 2026",
    readTime: "4 min read",
    image: "/src/assets/images/fmc_surgery_theatre_1788968805901.jpg",
    author: "Dept. of Surgery & Anaesthesia",
    authorRole: "Head of Clinical Services",
    excerpt: "The surgical team at Federal Medical Centre Asaba celebrated the successful completion of over 200 minimally invasive procedures, drastically reducing recovery times and hospital stays.",
    content: [
      "In a major clinical milestone for healthcare delivery in Delta State and the South-South region, Federal Medical Centre (FMC) Asaba has successfully performed its 200th advanced minimally invasive laparoscopic surgical procedure.",
      "The dedicated team of general surgeons, pediatric surgeons, and anesthesiologists utilized high-definition laparoscopy towers recently commissioned under the Federal Government's tertiary healthcare upgrade grant.",
      "According to the Medical Director, Dr. Victor Omo Ekenam, patients who previously spent seven to ten days recovering from open abdominal procedures are now discharged in good health within 48 to 72 hours with minimal post-operative discomfort.",
      "The centre continues to receive referrals across Anambra, Edo, and Delta states, establishing Asaba as a premier clinical surgical hub in Nigeria."
    ],
    gradient: {
      from: "#032b1b",
      via: "#064e3b",
      to: "#022c22",
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.28)"
    },
    keyTakeaway: "Average post-operative recovery reduced by 60% with state-of-the-art keyhole surgical technologies.",
    tags: ["Surgery", "Clinical Excellence", "Tertiary Care", "Innovation"]
  },
  {
    id: "fmc-new-diagnostic-mri",
    title: "Commissioning of Ultra-Modern 1.5T MRI & High-Speed CT Diagnostic Complex",
    subtitle: "Accelerating 24/7 Precision Radiology and Neurological Diagnostics",
    category: "Diagnostic Tech",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    date: "September 4, 2026",
    readTime: "3 min read",
    image: "/src/assets/images/fmc_mri_radiology_1788968834247.jpg",
    author: "Radiology & Imaging Directorate",
    authorRole: "Senior Consultant Radiologist",
    excerpt: "Federal Medical Centre Asaba introduces a newly completed 1.5 Tesla Magnetic Resonance Imaging (MRI) suite, providing round-the-clock precision scans for neurology, trauma, and oncology.",
    content: [
      "Federal Medical Centre Asaba has commissioned its newly installed 1.5 Tesla Superconducting MRI system and a 64-slice high-resolution CT scanner, eliminating the need for patients to travel to other states for advanced diagnostic imaging.",
      "The facility features specialized coils for neuro-vascular, musculoskeletal, abdominal, and pediatric imaging, supported by dual uninterruptible solar-hybrid power banks.",
      "Tele-radiology links have also been integrated, enabling real-time collaborative reporting with global medical diagnostic centres.",
      "'Our commitment is to deliver swift, unambiguous diagnostic reports within 4 to 12 hours for routine cases and within minutes for emergency trauma cases,' remarked the Chief of Radiology."
    ],
    gradient: {
      from: "#082f49",
      via: "#0c4a6e",
      to: "#081d2e",
      accent: "#06b6d4",
      glow: "rgba(6, 182, 212, 0.25)"
    },
    keyTakeaway: "24/7 precision diagnostic imaging with automated cloud tele-reporting for urgent trauma cases.",
    tags: ["Radiology", "MRI", "Diagnostics", "Technology"]
  },
  {
    id: "fmc-maternal-child-wing",
    title: "Commissioning of the Enhanced Neonatal Intensive Care Unit (NICU) & Maternal Ward",
    subtitle: "Strengthening Mother and Child Survival Across Delta State",
    category: "Maternal Health",
    categoryColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    date: "August 29, 2026",
    readTime: "5 min read",
    image: "/src/assets/images/fmc_pediatric_care_1788968843820.jpg",
    author: "Pediatrics & Obstetrics Directorate",
    authorRole: "Consultant Neonatologist",
    excerpt: "A newly equipped 35-bed Neonatal Intensive Care Unit with specialized incubators, phototherapy units, and bubble CPAP systems has commenced operations at the hospital complex.",
    content: [
      "In a decisive effort to combat infant mortality and provide comprehensive care for preterm and fragile infants, FMC Asaba has expanded its Neonatal Intensive Care Unit (NICU).",
      "The facility is staffed by fellowship-trained pediatricians, certified neonatal nurses, and clinical nutritionists. It includes dedicated kangaroo mother care rooms, continuous physiologic monitors, and modern neonatal ventilators.",
      "The expansion also incorporates an expanded antenatal assessment lounge and private post-delivery maternity suites designed for comfort and respectful maternal care.",
      "This facility upgrade directly supports the Federal Ministry of Health's priority agenda for child and maternal wellbeing."
    ],
    gradient: {
      from: "#3b112c",
      via: "#701a75",
      to: "#280d1e",
      accent: "#f43f5e",
      glow: "rgba(244, 63, 94, 0.25)"
    },
    keyTakeaway: "Expanded 35-bed tertiary NICU reducing neonatal complications through round-the-clock specialist care.",
    tags: ["Pediatrics", "Maternal Care", "NICU", "Healthcare"]
  },
  {
    id: "fmc-campus-infrastructure-upgrade",
    title: "Transformation of Hospital Campus: Green Energy & Modern Ward Complex",
    subtitle: "Sustainable Solar Microgrid & New Multi-Storey Clinical Towers",
    category: "Campus Development",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    date: "August 21, 2026",
    readTime: "3 min read",
    image: "/src/assets/images/fmc_hospital_complex_1788968818176.jpg",
    author: "Works & Physical Planning Unit",
    authorRole: "Director of Infrastructure",
    excerpt: "FMC Asaba transitions to uninterrupted 24-hour green solar energy for critical surgical, ICU, and laboratory units, alongside landscape beautification.",
    content: [
      "As part of the strategic campus renewal masterplan, Federal Medical Centre Asaba has deployed a 1.2MW solar microgrid with industrial battery storage to ensure zero downtime across intensive care units, emergency rooms, and surgical suites.",
      "The masterplan also includes modern paved access walkways, patient navigation signage, shaded waiting pavilions for relatives, and automated water purification networks.",
      "The management team noted that continuous power and clean environmental ambience are vital pillars in fostering patient healing and medical staff efficiency.",
      "Phase two of the development will introduce an expanded Accident & Emergency triage reception."
    ],
    gradient: {
      from: "#0f172a",
      via: "#1e3a8a",
      to: "#0b1329",
      accent: "#3b82f6",
      glow: "rgba(59, 130, 246, 0.25)"
    },
    keyTakeaway: "1.2MW green solar microgrid delivers uninterrupted power to life-support systems and theatres.",
    tags: ["Infrastructure", "Solar Power", "Campus", "Development"]
  },
  {
    id: "fmc-community-health-outreach",
    title: "FMC Medical Outreach Screens Over 3,500 Residents in Rural Delta Communities",
    subtitle: "Free Consultations, Hypertension & Diabetes Screenings, and Eyecare",
    category: "Community Outreach",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    date: "August 14, 2026",
    readTime: "4 min read",
    image: "/src/assets/images/fmc_community_health_1788968883248.jpg",
    author: "Community Medicine & Public Health",
    authorRole: "Director of Community Services",
    excerpt: "Over 3,500 rural community members in Oshimili South and surrounding districts received free health checkups, prescription medications, and cataract consultations in a week-long outreach.",
    content: [
      "Demonstrating its commitment to social responsibility and accessible healthcare, FMC Asaba deployed a mobile clinical mission across grassroots communities in Delta State.",
      "The outreach provided free screenings for non-communicable diseases including hypertension and diabetes, distribution of free reading glasses, dental examinations, and health education on clean water sanitation.",
      "Patients requiring advanced interventions were scheduled for subsidized follow-up care at the tertiary medical centre in Asaba.",
      "Community leaders praised the FMC leadership for bringing quality healthcare directly to the doorsteps of rural families."
    ],
    gradient: {
      from: "#2c1808",
      via: "#78350f",
      to: "#1c0d04",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.25)"
    },
    keyTakeaway: "3,500+ residents screened with free prescriptions, cataract glasses, and preventative care.",
    tags: ["Outreach", "Public Health", "Community", "Delta State"]
  }
];
