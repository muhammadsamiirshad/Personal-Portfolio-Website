export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string; // Icon name from react-icons
  color: string; // Color for the icon
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

export interface Education {
  institution: string;
  shortName: string; // Short form of institution name
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name from react-icons
  color: string; // Color for the icon
}

export interface PersonalInfo {
  name: string;
  shortForm: string; // Short form of name (initials)
  titles: string[]; // For typewriter effect
  bio: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  avatarImage: string;
}

export const skills: Skill[] = [
  { name: "Next.js", level: 5, icon: "SiNextdotjs", color: "#ffffff" },
  { name: "React", level: 5, icon: "SiReact", color: "#61DAFB" },
  { name: "JavaScript", level: 5, icon: "SiJavascript", color: "#F7DF1E" },
  { name: "Node.js", level: 4, icon: "SiNodedotjs", color: "#339933" },
  { name: "Tailwind CSS", level: 5, icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Express.js", level: 4, icon: "SiExpress", color: "#000000" },
  { name: "HTML", level: 5, icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS", level: 5, icon: "SiCss3", color: "#1572B6" },
  { name: "C++", level: 3, icon: "SiCplusplus", color: "#00599C" },
  { name: "Python", level: 3, icon: "SiPython", color: "#3776AB" },
  { name: "SQLite", level: 4, icon: "SiSqlite", color: "#003B57" },
  { name: "MySQL", level: 4, icon: "SiMysql", color: "#4479A1" },
  { name: "PostgreSQL", level: 3, icon: "SiPostgresql", color: "#4169E1" },
  { name: "MongoDB", level: 3, icon: "SiMongodb", color: "#47A248" },
  { name: "Git", level: 4, icon: "SiGit", color: "#F05032" },
  { name: "Github", level: 4, icon: "SiGithub", color: "#181717" },
  { name: "Kali Linux", level: 4, icon: "SiKalilinux", color: "#557C94" },
  { name: "Metasploit", level: 3, icon: "SiLinux", color: "#FCC624" },
  { name: "Wireshark", level: 3, icon: "SiWireshark", color: "#1679A7" },
  { name: "OWASP", level: 3, icon: "SiOpenbugbounty", color: "#FF5370" },
  { name: "Electron", level: 4, icon: "SiElectron", color: "#47848F" },
];

export const projects: Project[] = [
  {
    title: "PharmaSynx - Pharmacy POS & Inventory Management",
    description: "A Point of Sale (POS) and Inventory Management System for pharmacies that helps track sales, manage inventory, and streamline operations.",
    technologies: ["Next.js", "Node.js", "SQLite", "Electron", "Tailwind CSS"],
    image: "public/images/projects/pharmasynx.png",
    githubUrl: "https://github.com/muhammadsamiirshad/pharmasynx",
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "public/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/muhammadsamiirshad/portfolio",
    liveUrl: "https://muhammadsamiirshad.vercel.app",
  },
  {
    title: "Automated Index Recommendation System",
    description: "A sophisticated system that analyzes database query patterns and automatically recommends optimal indexes to improve database performance.",
    technologies: ["Python", "HTML", "CSS", "Javascript", "SQLite"],
    image: "public/images/projects/index-recommandation-system.png",
    githubUrl: "https://github.com/muhammadsamiirshad/Index-Recommendation-System",
  },
  {
    title: "E-Commerce Platform",
    description: "A fully featured e-commerce platform with user authentication, product catalog, shopping cart, and order management.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    image: "/vercel.svg",
    githubUrl: "https://github.com/muhammadsamiirshad/ecommerce",
  },
];

export const certifications: Certification[] = [
  {
    name: "Cisco Certified Ethical Hacker",
    issuer: "Cisco",
    date: "2023",
    image: "/images/certifications/ceh.png",
    url: "https://drive.google.com/file/d/1UBFeUt3bwOFlC2B9B8HqFFUp9s75g040/view?usp=drive_link",
  },
  {
    name: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2023",
    image: "/images/certifications/cissp.png",
    url: "https://drive.google.com/file/d/1uGh2O55cSeYZxxB5pL6m2Ue3n60WGBX8/view?usp=drive_link",
  },
  {
    name: "Master Course: Advertising Strategy 2.0",
    issuer: "Udemy",
    date: "2023",
    image: "/images/certifications/oscp.png",
    url: "https://www.udemy.com/certificate/UC-68642aef-663b-4084-a149-ebb87ea92380/",
  },
];

export const education: Education[] = [
  {
    institution: "University of Engineering & Technology, Lahore",
    shortName: "UET",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startDate: "2023",
    endDate: "Present",
    description: "Currently pursuing a bachelor's degree in Computer Science with focus on programming, algorithms, data structures, and software development.",
    image: "/images/education/uet.jpeg",
  },
  {
    institution: "Punjab Group of Colleges, Depalpur",
    shortName: "PGC",
    degree: "Intermediate",
    field: "FSc Pre-Engineering",
    startDate: "2021",
    endDate: "2023",
    description: "Completed pre-engineering studies with courses in Mathematics, Physics, and Chemistry.",
    image: "/file.svg",
  },
  {
    institution: "Govt Model High School, Depalpur",
    shortName: "GMHS",
    degree: "Matriculation",
    field: "Science",
    startDate: "2019",
    endDate: "2021",
    description: "Completed high school education with focus on science subjects.",
    image: "/globe.svg",
  },
];

export const personalInfo: PersonalInfo = {
  name: "Muhammad Sami",
  shortForm: "MS",
  titles: [
    "Full Stack Developer",
    "Ethical Hacker",
    "Cybersecurity Specialist",
    "Web Developer",
    "Frontend Developer",
  ],
  bio: "Full Stack Developer skilled in Next.js, Node.js, SQLite, and Electron, with experience in building scalable applications. Cisco-certified in Cybersecurity and Ethical Hacking, specializing in penetration testing, network security, and threat analysis.",
  location: "Depalpur, Okara, Pakistan",
  email: "samiirshad825@gmail.com",
  phone: "",
  socials: [    {
      name: "GitHub",
      url: "https://github.com/muhammadsamiirshad",
      icon: "SiGithub",
      color: "#181717",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammadsamiirshad",
      icon: "SiLinkedin",
      color: "#0A66C2",
    },
    {      name: "WhatsApp",
      url: "https://wa.me/yourusername",
      icon: "SiWhatsapp",
      color: "#25D366",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: "SiFacebook",
      color: "#1877F2",
    },
  ],
  avatarImage: "/images/avatar.svg",
};

export const navLinks = [
  { name: "Home", path: "hero" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Certifications", path: "certifications" },
  { name: "Education", path: "education" },
  { name: "Contact", path: "contact" },
];

const portfolioData = {
  personalInfo,
  skills,
  projects,
  certifications,
  education,
  navLinks,
};

export default portfolioData;
