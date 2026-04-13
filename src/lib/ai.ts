import { DEPARTMENTS, Department } from "@/data/university";

export function matchDepartment(message: string): Department | null {
  const l = message.toLowerCase();

  if (l.match(/financ|scholarship|tuition|loan|grant|money|fee|fafsa|payment/)) return DEPARTMENTS[0];
  if (l.match(/visa|immigration|international|i-?20|opt|cpt|issi|f-?1|sevis/)) return DEPARTMENTS[5];
  if (l.match(/register|transcript|course|enroll|registrar|class|degree|graduation/)) return DEPARTMENTS[3];
  if (l.match(/hous|dorm|room|residential|living|apartment/)) return DEPARTMENTS[8];
  if (l.match(/career|co-?op|job|intern|employ|resume|interview/)) return DEPARTMENTS[7];
  if (l.match(/tech|it |computer|wifi|password|account|login|husky|software/)) return DEPARTMENTS[4];
  if (l.match(/health|counsel|medical|doctor|therapy|mental|wellness|anxiety/)) return DEPARTMENTS[12];
  if (l.match(/library|book|research|study|database/)) return DEPARTMENTS[9];
  if (l.match(/business|mba|finance|marketing|accounting/)) return DEPARTMENTS[13];
  if (l.match(/abroad|global|exchange|dialogue/)) return DEPARTMENTS[6];
  if (l.match(/admit|apply|application|acceptance/)) return DEPARTMENTS[1];
  if (l.match(/club|organization|student life|conduct/)) return DEPARTMENTS[2];
  if (l.match(/engineering|graduate|masters|phd|thesis/)) return DEPARTMENTS[10];
  if (l.match(/computer|science|khoury|cs |data |ai /)) return DEPARTMENTS[11];

  return null;
}

export interface GeneratedEmail {
  to: string;
  subject: string;
  body: string;
}

const SUBJECT_MAP: Record<string, string> = {
  "Financial Aid": "Inquiry Regarding Financial Aid and Scholarship Options",
  "ISSI (International Students)": "Question About Visa and Immigration Support",
  "Registrar": "Inquiry About Course Registration and Transcripts",
  "Housing and Residential Life": "Question About Housing and Room Assignments",
  "Career Design": "Inquiry About Co-op and Career Advising",
  "IT Services (ITS)": "Technical Support Request",
  "Health and Counseling": "Inquiry About Health and Counseling Services",
  "Snell Library": "Question About Library Resources and Services",
  "D'Amore-McKim Business": "Inquiry About Business Program",
  "Office of Global Services": "Question About Study Abroad Programs",
  "Admissions": "Admissions Inquiry",
  "Student Affairs": "Student Affairs Inquiry",
  "Graduate Engineering": "Graduate Engineering Program Inquiry",
  "Khoury College of CS": "Computer Science Program Inquiry",
};

export function generateEmail(dept: Department, userIssue: string): GeneratedEmail {
  const cleanIssue = userIssue.toLowerCase().replace(/[.!?]$/, "");

  return {
    to: dept.email,
    subject: SUBJECT_MAP[dept.name] || `Inquiry for ${dept.name}`,
    body: `Dear ${dept.name} Team,\n\nI hope this message finds you well. I am reaching out because ${cleanIssue}.\n\nCould you please provide guidance on this matter or let me know the next steps I should take?\n\nThank you for your time and assistance.\n\nBest regards,\n[Your Name]\n[Your NUID]`,
  };
}

export interface AIResponse {
  text: string;
  email: GeneratedEmail | null;
}

export function getAIResponse(message: string): AIResponse {
  const dept = matchDepartment(message);

  if (dept) {
    return {
      text: `I found the right contact for you:\n\n**${dept.name}**\n📧 ${dept.email}\n📞 ${dept.phone}\n📍 ${dept.location}\n🕐 ${dept.hours}\n\nI've also drafted an email you can send directly or edit first.`,
      email: generateEmail(dept, message),
    };
  }

  return {
    text: `I can route you to the right contact! Tell me about your situation:\n\n› **Financial Aid** for scholarships, loans\n› **Registration** for courses, transcripts\n› **Visa** for OPT, CPT, I-20\n› **Housing** for dorms, rooms\n› **Career** for co-op, resume\n› **IT** for Wi-Fi, accounts\n› **Health** for medical, counseling\n\nDescribe your situation and I'll find the right person and draft an email for you!`,
    email: null,
  };
}
