export interface Event {
  id: string;
  title: string;
  category: "workshop" | "lecture" | "hackathon" | "technical" | "discussion" | "competition" | "guest lecture";
  date: string;
  description: string;
  status: "past" | "upcoming";
  highlight?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  category: "faculty" | "leadership" | "lead" | "coordinator";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Cyber Hygiene Workshop",
    category: "workshop",
    date: "March 15, 2024",
    description:
      "Hands-on session covering password security, phishing awareness, and safe browsing practices for everyday users.",
    status: "past",
  },
  {
    id: "2",
    title: "Mind.exe",
    category: "competition",
    date: "February 03, 2026",
    description:
      "Rapid Coding Challenge - Processing at maximum speed!",
    status: "past",
  },
  {
    id: "3",
    title: "Sentinel",
    category: "workshop",
    date: "February 03, 2026",
    description:
      "A comprehensive workshop on fundamental cybersecurity concepts!",
    status: "past",
  },
  {
    id: "4",
    title: "Society",
    category: "discussion",
    date: "February 03, 2026",
    description:
      "A panel discussion on the societal impacts of women in cybersecurity",
    status: "past",
  },
  {
    id: "5",
    title: "She Prevails",
    category: "guest lecture",
    date: "February 03, 2026",
    description:
      "A conversation on women and cancer by Dr. Shilpa Germaine Alfred.",
    status: "past",
  },
  {
    id: "6",
    title: "Incident Response & Digital Forensics",
    category: "lecture",
    date: "August 22, 2024",
    description:
      "Real-world case studies on how organizations handle security breaches and perform forensic investigations.",
    status: "past",
  },
  {
    id: "7",
    title: "Malware Analysis Bootcamp",
    category: "technical",
    date: "September 14, 2024",
    description:
      "Static and dynamic malware analysis techniques using sandboxed environments and reverse engineering tools.",
    status: "past",
  },
  {
    id: "8",
    title: "Cloud Security Essentials",
    category: "workshop",
    date: "October 9, 2024",
    description:
      "AWS and Azure security configurations, IAM best practices, and cloud-native threat detection strategies.",
    status: "past",
  },
  {
    id: "9",
    title: "OBSCURA – Capture The Flag",
    category: "hackathon",
    date: "February 28, 2025",
    description:
      "A magical CTF experience blending cryptography, steganography, and web exploitation challenges in an enchanted theme.",
    status: "upcoming",
    highlight: true,
  },
  {
    id: "10",
    title: "Threat Intelligence Workshop",
    category: "workshop",
    date: "March 20, 2025",
    description:
      "Learn to gather, analyze, and act on cyber threat intelligence using open-source platforms and OSINT techniques.",
    status: "upcoming",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Priya Ravindran",
    role: "Faculty Coordinator",
    bio: "Associate Professor, Dept. of CSE with 15+ years in network security research. Passionate about mentoring women in STEM.",
    linkedin: "https://linkedin.com",
    category: "faculty",
  },
  {
    id: "2",
    name: "Ananya Krishnamurthy",
    role: "Chapter Chair",
    bio: "Final year B.Tech CSE student specializing in ethical hacking. National-level CTF competitor and security researcher.",
    linkedin: "https://linkedin.com",
    category: "leadership",
  },
  {
    id: "3",
    name: "Divya Subramaniam",
    role: "Vice Chair",
    bio: "Third year student with expertise in digital forensics and incident response. Certified in CompTIA Security+.",
    linkedin: "https://linkedin.com",
    category: "leadership",
  },
  {
    id: "4",
    name: "Keerthana Rajan",
    role: "Technical Lead",
    bio: "Passionate about binary exploitation and reverse engineering. Contributes to open-source security tools.",
    linkedin: "https://linkedin.com",
    category: "lead",
  },
  {
    id: "5",
    name: "Sowmiya Balakrishnan",
    role: "Design Lead",
    bio: "Creative technologist blending UI/UX design with security awareness campaigns. Adobe Certified professional.",
    linkedin: "https://linkedin.com",
    category: "lead",
  },
  {
    id: "6",
    name: "Nithya Chandrasekaran",
    role: "Event Coordinator",
    bio: "Organized 10+ successful tech events. Expert in logistics, outreach, and community building strategies.",
    linkedin: "https://linkedin.com",
    category: "coordinator",
  },
  {
    id: "7",
    name: "Pavithra Murugan",
    role: "Event Coordinator",
    bio: "Specialized in corporate partnerships and sponsorship acquisition. Connects industry with student innovators.",
    linkedin: "https://linkedin.com",
    category: "coordinator",
  },
  {
    id: "8",
    name: "Harini Venkatesh",
    role: "Event Coordinator",
    bio: "Manages social media and digital outreach. Data-driven approach to maximizing event participation and impact.",
    linkedin: "https://linkedin.com",
    category: "coordinator",
  },
];

export const obscuraDate = new Date("2025-02-28T09:00:00");
