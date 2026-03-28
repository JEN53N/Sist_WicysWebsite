

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
  category: "faculty" | "leadership" | "core" | "lead" | "coordinator" | "chair";
}

export const events: Event[] = [
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
    id: "9",
    title: "OBSCURA – Capture The Flag",
    category: "hackathon",
    date: "February 28, 2025",
    description:
      "A magical CTF experience blending cryptography, steganography, and web exploitation challenges in an enchanted theme.",
    status: "past",
    highlight: true,
  },
  {
    id: "11",
    title: "Hello World",
    category: "workshop",
    date: "Coming Soon",
    description: "A beginner-friendly workshop to kickstart your cybersecurity journey.",
    status: "past",
  },
  {
    id: "12",
    title: "Gatekeepers",
    category: "hackathon",
    date: "Coming Soon",
    description: "Defend the digital fortress - a cybersecurity challenge event.",
    status: "past",
  },
  {
    id: "13",
    title: "Antigravity",
    category: "technical",
    date: "Coming Soon",
    description: "Breaking barriers in cybersecurity with advanced techniques.",
    status: "past",
  },
  {
    id: "14",
    title: "Explorer",
    category: "workshop",
    date: "Coming Soon",
    description: "Explore the unknown realms of ethical hacking and penetration testing.",
    status: "past",
  },
  {
    id: "15",
    title: "Outsiders",
    category: "competition",
    date: "Coming Soon",
    description: "A competitive event for the outside-the-box thinkers.",
    status: "past",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. N. Nanthini",
    role: "Faculty Coordinator",
    bio: "Assistant Professor, Dept. of CSE. Guiding the chapter with academic excellence and professional mentorship.",
    linkedin: "https://www.linkedin.com/in/dr-nanthini-natarajan-54a00a293/",
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
    linkedin: "https://www.linkedin.com/in/slakshitha/",
    category: "leadership",
  },
  {
    id: "4",
    name: "Dharani A",
    role: "Secretary",
    bio: "Keeps the chapter organized and running efficiently, managing communications and documentation with precision.",
    linkedin: "https://www.linkedin.com/in/dharani-alagarsamy-70589a352/",
    category: "core",
  },
  {
    id: "5",
    name: "Samyuktha M",
    role: "Joint Secretary",
    bio: "Assists in administrative duties and bridges communication across chapter teams for seamless coordination.",
    linkedin: "https://www.linkedin.com/in/samyuktha-m-8175a92a7/",
    category: "core",
  },
  {
    id: "6",
    name: "Hadlins Price H",
    role: "Treasurer",
    bio: "Manages chapter finances responsibly, ensuring resources are allocated effectively for maximum community impact.",
    linkedin: "https://www.linkedin.com/in/h-hadlins-price-49818b327/",
    category: "core",
  },

   {
     id: "7",
     name: "Jensen J",
     role: "Research & Development",
     bio: "Passionate about binary exploitation and reverse engineering. Contributes to open-source security tools.",
     linkedin: "https://www.linkedin.com/in/jensen-j-989a003b3/",
     category: "lead",
   },
  {
    id: "8",
    name: "Anisa Farha N",
    role: "Marketing Team Lead",
    bio: "Strategizes and executes marketing campaigns to grow the chapter's reach and presence across campus.",
    linkedin: "https://www.linkedin.com/in/anisafarha58?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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
    linkedin: "https://www.linkedin.com/in/sanjeevini-kumaravel-72bb2437a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    category: "lead",
  },
   {
     id: "11",
     name: "Joe",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/in/claims-jose-christoper?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "coordinator",
   },
   {
     id: "12",
     name: "Sam Daniel",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/in/sam-daniel-4178bb339?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
     category: "coordinator",
   },
   {
     id: "13",
     name: "Muthu Lakshmanan",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/in/muthu-lakshmanan-s-a32827323?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "coordinator",
   },
   {
     id: "14",
     name: "Roger Raj A",
     role: "Chairperson",
     bio: "EC MEMBER - Serving as Chairperson for WiCyS Sathyabama Student Chapter.",
     linkedin: "https://linkedin.com",
     category: "chair",
   },
   {
     id: "15",
     name: "Buvan Shankar P M",
     role: "Chairperson",
     bio: "EC MEMBER - Serving as Chairperson for WiCyS Sathyabama Student Chapter.",
     linkedin: "https://linkedin.com",
     category: "chair",
   },
   {
     id: "16",
     name: "Mrinaal Roshan R",
     role: "Chairperson",
     bio: "EC MEMBER - Serving as Chairperson for WiCyS Sathyabama Student Chapter.",
     linkedin: "https://www.linkedin.com/in/mrinaal-roshan-89bb55369?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "chair",
   },
   {
     id: "17",
     name: "Mohammed Tahsin K J",
     role: "Chairperson",
     bio: "EC MEMBER - Serving as Chairperson for WiCyS Sathyabama Student Chapter.",
     linkedin: "https://www.linkedin.com/in/mohammed-tahsin-016b62337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "chair",
   },
];

export const obscuraDate = new Date("2026-04-07T23:59:59+05:30");
