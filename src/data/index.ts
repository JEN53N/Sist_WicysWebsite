

export interface Event {
  id: string;
  title: string;
  category: "workshop" | "lecture" | "hackathon" | "technical" | "discussion" | "Competition" | "guest lecture";
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
  category: "faculty" | "leadership" | "core" | "lead" | "coordinator";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Cyber Security Workshop",
    category: "workshop",
    date: "March 15, 2025",
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
    date: "August 22, 2025",
    description:
      "Real-world case studies on how organizations handle security breaches and perform forensic investigations.",
    status: "past",
  },
  {
    id: "7",
    title: "Malware Analysis Bootcamp",
    category: "technical",
    date: "September 14, 2025",
    description:
      "Static and dynamic malware analysis techniques using sandboxed environments and reverse engineering tools.",
    status: "past",
  },
  {
    id: "8",
    title: "Cloud Security Essentials",
    category: "workshop",
    date: "October 9, 2025",
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
    name: "Dr. N. Nanthini",
    role: "Faculty Coordinator",
    bio: "Assistant Professor, Dept. of CSE. Guiding the chapter with academic excellence and professional mentorship.",
    linkedin: "https://linkedin.com",
    category: "faculty",
  },
  {
    id: "2",
    name: "Sudhiksha N M",
    role: "President",
    bio: "Third year B.Tech CSE student specializing in ethical hacking. National-level CTF competitor and security researcher.",
    linkedin: "https://www.linkedin.com/in/sudhiksha-n-m-16085a342/",
    category: "leadership",
  },
  {
    id: "3",
    name: "Lakshitha S",
    role: "Vice President",
    bio: "Third year student with expertise in digital forensics and incident response. Certified in CompTIA Security+.",
    linkedin: "https://linkedin.com",
    category: "leadership",
  },
  {
    id: "4",
    name: "Dharani A",
    role: "Secretary",
    bio: "Keeps the chapter organized and running efficiently, managing communications and documentation with precision.",
    linkedin: "https://linkedin.com",
    category: "core",
  },
  {
    id: "5",
    name: "Samyuktha M",
    role: "Joint Secretary",
    bio: "Assists in administrative duties and bridges communication across chapter teams for seamless coordination.",
    linkedin: "https://linkedin.com",
    category: "core",
  },
  {
    id: "6",
    name: "Hadlins Price H",
    role: "Treasurer",
    bio: "Manages chapter finances responsibly, ensuring resources are allocated effectively for maximum community impact.",
    linkedin: "https://linkedin.com",
    category: "core",
  },

  {
    id: "7",
    name: "Jensen J",
    role: "Technical Lead",
    bio: "Passionate about binary exploitation and reverse engineering. Contributes to open-source security tools.",
    linkedin: "https://www.linkedin.com/in/jensen-j-989a003b3/",
    category: "lead",
  },
  {
    id: "8",
    name: "Anisa Farha N",
    role: "Marketing Team Lead",
    bio: "Strategizes and executes marketing campaigns to grow the chapter's reach and presence across campus.",
    linkedin: "https://linkedin.com",
    category: "lead",
  },

  {
    id: "9",
    name: "Shugal Mufashira S",
    role: "Content Team Lead",
    bio: "Crafts compelling content and narratives that communicate the chapter's vision and engage the community.",
    linkedin: "https://linkedin.com",
    category: "lead",
  },
  {
    id: "10",
    name: "Sanjeevini K B",
    role: "Management Team Lead",
    bio: "Oversees chapter operations and team coordination, ensuring every initiative runs smoothly and on schedule.",
    linkedin: "https://linkedin.com",
    category: "lead",
  },
  {
    id: "11",
    name: "Gopinath R",
    role: "Event Coordinator",
    bio: "Brings energy and precision to event planning, ensuring every chapter event is memorable and well-executed.",
    linkedin: "https://www.linkedin.com/in/gopinath2638/",
    category: "coordinator",
  },
  {
    id: "12",
    name: "Gopi",
    role: "Event Coordinator",
    bio: "Brings energy and precision to event planning, ensuring every chapter event is memorable and well-executed.",
    linkedin: "https://www.linkedin.com/in/gopinath2638/",
    category: "coordinator",
  },
  {
    id: "13",
    name: "Senona Ignatius",
    role: "Event Coordinator",
    bio: "Brings energy and precision to event planning, ensuring every chapter event is memorable and well-executed.",
    linkedin: "https://www.linkedin.com/in/senona-vinoj-2681b3385/",
    category: "coordinator",
  },
  {
    id: "14",
    name: "Haniya Jilan",
    role: "Event Coordinator",
    bio: "Passionate about community building, managing event execution and participant engagement with creativity.",
    linkedin: "https://www.linkedin.com/",
    category: "coordinator",
  },
];

export const obscuraDate = new Date("2026-04-10T09:00:00");
