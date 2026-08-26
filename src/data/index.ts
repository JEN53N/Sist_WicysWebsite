

export interface Event {
  id: string;
  title: string;
  category: "workshop" | "lecture" | "hackathon" | "technical" | "discussion" | "competition" | "guest lecture";
  date: string;
  description: string;
  status: "past" | "upcoming";
  highlight?: boolean;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  category: "faculty" | "leadership" | "core" | "lead" | "coordinator" | "chair";
  image?: string;
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
    image: "/event/sentinels.jpg",
  },
  {
    id: "4",
    title: "Society",
    category: "discussion",
    date: "February 03, 2026",
    description:
      "A panel discussion on the societal impacts of women in cybersecurity",
    status: "past",
    image: "/event/society.jpg",
  },
  {
    id: "5",
    title: "She Prevails",
    category: "guest lecture",
    date: "February 03, 2026",
    description:
      "A conversation on women and cancer by Dr. Shilpa Germaine Alfred.",
    status: "past",
    image: "/event/sheprevails.jpeg",
  },
  
  {
    id: "11",
    title: "Hello World",
    category: "workshop",
    date: "Coming Soon",
    description: "A beginner-friendly workshop to kickstart your cybersecurity journey.",
    status: "past",
    image: "/event/Hello World.jpg.jpeg",
  },
  {
    id: "12",
    title: "Gatekeepers",
    category: "hackathon",
    date: "Coming Soon",
    description: "Defend the digital fortress - a cybersecurity challenge event.",
    status: "past",
    image: "/event/Gatekeepers.jpg.jpeg",
  },
  {
    id: "13",
    title: "Antigravity",
    category: "technical",
    date: "Coming Soon",
    description: "Breaking barriers in cybersecurity with advanced techniques.",
    status: "past",
    image: "/event/AntiGravity.jpg.jpeg",
  },
  {
    id: "14",
    title: "Explorer",
    category: "workshop",
    date: "Coming Soon",
    description: "Explore the unknown realms of ethical hacking and penetration testing.",
    status: "past",
    image: "/event/Explorers.jpg",
  },
  {
    id: "15",
    title: "Outsiders",
    category: "competition",
    date: "Coming Soon",
    description: "A competitive event for the outside-the-box thinkers.",
    status: "past",
    image: "/event/Outsider.jpg.jpeg",
  },
  {
    id: "16",
    title: "Mind.Exe",
    category: "technical",
    date: "Coming Soon",
    description: "A technical deep-dive into malware analysis, reverse engineering, and digital forensics.",
    status: "past",
    image: "/event/mindexe.jpg",
  },
  {
    id: "17",
    title: "Oracle",
    category: "workshop",
    date: "Coming Soon",
    description: "An interactive workshop on cloud security, database protection, and secure system architecture.",
    status: "past",
    image: "/event/Oracle.jpg",
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
    image: "/profile/Sudhiksha.jpeg",
    
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
    image: "/profile/Dharani.jpeg",
  },
  {
    id: "5",
    name: "Samyuktha M",
    role: "Joint Secretary",
    bio: "Assists in administrative duties and bridges communication across chapter teams for seamless coordination.",
    linkedin: "https://www.linkedin.com/in/samyuktha-m-8175a92a7/",
    category: "core",
    image: "/profile/Samyuktha.jpeg",
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
     image: "/profile/Jensen.png",
   },
  {
    id: "8",
    name: "Anisa Farha N",
    role: "Marketing Team Lead",
    bio: "Strategizes and executes marketing campaigns to grow the chapter's reach and presence across campus.",
    linkedin: "https://www.linkedin.com/in/anisafarha58?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    category: "lead",
    image: "/profile/Anisa.jpeg",
  },

  {
    id: "9",
    name: "Shugal Mufashira S",
    role: "Content Team Lead",
    bio: "Crafts compelling content and narratives that communicate the chapter's vision and engage the community.",
    linkedin: "https://www.linkedin.com/in/shugal-mufashira-201603326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    category: "lead",
    image: "/profile/Shugal.jpeg",

  },
  {
    id: "10",
    name: "Sanjeevini K B",
    role: "Management Team Lead",
    bio: "Oversees chapter operations and team coordination, ensuring every initiative runs smoothly and on schedule.",
    linkedin: "https://www.linkedin.com/in/sanjeevini-kumaravel-72bb2437a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    category: "lead",
    image: "/profile/Sanjeevini.jpeg",
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
     image: "/profile/SamDaniel.PNG",
   },
   {
     id: "13",
     name: "Muthu Lakshmanan",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/in/muthu-lakshmanan-s-a32827323?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "coordinator",
     image: "/profile/Muthu.jpeg",
   },
   {
     id: "14",
     name: "Roger Raj A",
     role: "Chairperson",
     bio: "EC MEMBER - Serving as Chairperson for WiCyS Sathyabama Student Chapter.",
     linkedin: "https://www.linkedin.com/in/roger-raj-84ba3b33b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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
     image: "/profile/Tahsin.jpeg",

   },
   {
     id: "18",
     name: "K Durgashree",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/",
     category: "coordinator",
   },
   {
     id: "19",
     name: "Mithra",
     role: "Event Coordinator",
     bio: "2nd year student assisting with event planning and coordination.",
     linkedin: "https://www.linkedin.com/in/mithra-cybersecurity?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     category: "coordinator",
     image: "/profile/Mithra.jpeg",
   },
];

export const obscuraDate = new Date("2026-04-07T23:59:59+05:30");
