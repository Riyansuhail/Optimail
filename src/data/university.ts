export interface Department {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  hours: string;
  description: string;
  category: string;
  tags: string[];
}

export interface Faculty {
  id: number;
  name: string;
  title: string;
  department: string;
  email: string;
  research: string;
  office: string;
  hours: string;
  initials: string;
}

export const DEPARTMENTS: Department[] = [
  { id: 1, name: "Financial Aid", email: "finaid@northeastern.edu", phone: "(617) 373-3190", location: "354 Richards Hall", hours: "Mon to Fri, 8:30am to 5pm", description: "Scholarships, grants, loans and financial support", category: "Student Services", tags: ["scholarship", "tuition", "loan", "grant", "money", "payment", "fee", "fafsa"] },
  { id: 2, name: "Admissions", email: "admissions@northeastern.edu", phone: "(617) 373-2200", location: "150 Richards Hall", hours: "Mon to Fri, 9am to 5pm", description: "Undergraduate and graduate admissions", category: "Student Services", tags: ["apply", "application", "admit"] },
  { id: 3, name: "Student Affairs", email: "studentaffairs@northeastern.edu", phone: "(617) 373-4384", location: "230 Ell Hall", hours: "Mon to Fri, 8:30am to 5pm", description: "Student life, clubs and support", category: "Student Services", tags: ["club", "organization", "conduct"] },
  { id: 4, name: "Registrar", email: "registrar@northeastern.edu", phone: "(617) 373-2300", location: "100 Ell Hall", hours: "Mon to Fri, 9am to 4:30pm", description: "Registration, transcripts and enrollment", category: "Academic", tags: ["register", "transcript", "enroll", "course", "class", "degree", "graduation"] },
  { id: 5, name: "IT Services (ITS)", email: "help@northeastern.edu", phone: "(617) 373-4357", location: "West Village H", hours: "Mon to Fri, 7am to 10pm", description: "Tech support, accounts and campus technology", category: "Support", tags: ["tech", "computer", "wifi", "password", "account", "login", "software", "husky card"] },
  { id: 6, name: "ISSI (International Students)", email: "issi@northeastern.edu", phone: "(617) 373-2310", location: "354 Richards Hall", hours: "Mon to Fri, 8:30am to 5pm", description: "Visa support, immigration and international services", category: "Student Services", tags: ["visa", "i-20", "opt", "cpt", "immigration", "international", "f1"] },
  { id: 7, name: "Office of Global Services", email: "ogs@northeastern.edu", phone: "(617) 373-2101", location: "204 Ell Hall", hours: "Mon to Fri, 9am to 5pm", description: "Study abroad and international programs", category: "Academic", tags: ["abroad", "global", "exchange"] },
  { id: 8, name: "Career Design", email: "careerdesign@northeastern.edu", phone: "(617) 373-2430", location: "220 Stearns Center", hours: "Mon to Fri, 8:30am to 5pm", description: "Career counseling, co-op advising and employers", category: "Career", tags: ["career", "co-op", "coop", "job", "intern", "resume", "interview"] },
  { id: 9, name: "Housing and Residential Life", email: "housing@northeastern.edu", phone: "(617) 373-2672", location: "204 Ell Hall", hours: "Mon to Fri, 8:30am to 5pm", description: "On-campus housing and room assignments", category: "Student Services", tags: ["housing", "dorm", "room", "apartment"] },
  { id: 10, name: "Snell Library", email: "library@northeastern.edu", phone: "(617) 373-2350", location: "Snell Library", hours: "Mon to Thu, 7am to 2am", description: "Research support and digital resources", category: "Academic", tags: ["library", "book", "research", "study"] },
  { id: 11, name: "Graduate Engineering", email: "coe-grad@northeastern.edu", phone: "(617) 373-2711", location: "230 Snell Engineering", hours: "Mon to Fri, 9am to 5pm", description: "Graduate engineering admissions", category: "Academic", tags: ["engineering", "graduate", "masters", "phd"] },
  { id: 12, name: "Khoury College of CS", email: "khoury@northeastern.edu", phone: "(617) 373-2462", location: "202 West Village H", hours: "Mon to Fri, 9am to 5pm", description: "CS programs, advising and research", category: "Academic", tags: ["computer", "science", "khoury", "cs", "data", "ai"] },
  { id: 13, name: "Health and Counseling", email: "uhcs@northeastern.edu", phone: "(617) 373-2772", location: "Forsyth Building", hours: "Mon to Fri, 8am to 6pm", description: "Medical, counseling and wellness", category: "Support", tags: ["health", "counseling", "medical", "doctor", "therapy", "mental"] },
  { id: 14, name: "D'Amore-McKim Business", email: "dmsb@northeastern.edu", phone: "(617) 373-3270", location: "Dodge Hall 209", hours: "Mon to Fri, 8:30am to 5pm", description: "Business, MBA and advising", category: "Academic", tags: ["business", "mba", "finance", "marketing"] },
];

export const FACULTY: Faculty[] = [
  { id: 1, name: "Dr. Sarah Chen", title: "Professor of Computer Science", department: "Khoury College", email: "s.chen@northeastern.edu", research: "Machine Learning, NLP", office: "WVH 322", hours: "Tue/Thu 2 to 4pm", initials: "SC" },
  { id: 2, name: "Dr. Michael Rivera", title: "Assoc. Prof. of Engineering", department: "College of Engineering", email: "m.rivera@northeastern.edu", research: "Robotics, Systems Design", office: "SN 408", hours: "Mon/Wed 1 to 3pm", initials: "MR" },
  { id: 3, name: "Dr. Priya Nair", title: "Asst. Prof. of Data Science", department: "Khoury College", email: "p.nair@northeastern.edu", research: "Data Mining, AI Ethics", office: "WVH 210", hours: "Wed/Fri 10am to 12pm", initials: "PN" },
  { id: 4, name: "Dr. James Thompson", title: "Professor of Strategy", department: "D'Amore-McKim", email: "j.thompson@northeastern.edu", research: "Innovation, Entrepreneurship", office: "DM 302", hours: "Mon/Thu 3 to 5pm", initials: "JT" },
  { id: 5, name: "Dr. Lisa Park", title: "Prof. of Electrical Eng.", department: "College of Engineering", email: "l.park@northeastern.edu", research: "Signal Processing, IoT", office: "DA 215", hours: "Tue/Thu 10am to 12pm", initials: "LP" },
  { id: 6, name: "Dr. Ahmed Hassan", title: "Assoc. Prof. Info Systems", department: "Khoury College", email: "a.hassan@northeastern.edu", research: "Cybersecurity, Cloud Computing", office: "WVH 440", hours: "Mon/Wed 11am to 1pm", initials: "AH" },
];

export const CATEGORIES = ["All", "Student Services", "Academic", "Support", "Career"];
export const AVATAR_COLORS = ["#E63946", "#2563EB", "#7C3AED", "#059669", "#D97706", "#DC2626"];
