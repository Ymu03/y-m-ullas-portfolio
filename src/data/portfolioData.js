// ============================================================
// portfolioData.js
// This single file controls all text, links, and content on the website.
// ============================================================

export const personalInfo = {
  name: "Y M Ullas",
  firstName: "Y M Ullas",
  brandName: "Y M Ullas", // shown in preloader, navbar, and footer
  title: "Java Full Stack Developer",
  location: "Ballari, India",
  phone: "+918904296860",
  emails: {
    primary: "ullasym58@gmail.com",
    secondary: "",
  },
  summary:
    "Information Science and Engineering graduate and Full Stack Developer Intern with skills in Java, Spring Boot, React, and MySQL, interested in building scalable web applications.",
  resumeUrl: "/Ullas Resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Ymu03",
  linkedin: "https://www.linkedin.com/in/y-m-ullas-39024437b/",
  instagram: "https://www.instagram.com/ullas_darojimath_/",
};

export const heroContent = {
  greeting: "Hi, I'm Y M Ullas",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate about building scalable full-stack web applications with Java, Spring Boot, React, and robust database architectures.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:ullasym58@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ullas Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here and rendered with dangerouslySetInnerHTML
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Y M Ullas</span>, an Information Science and Engineering graduate and Java Full Stack Developer based in Ballari, India. Through my academic projects and sharpening my skills through the placement training program at TAP Academy, I have gained hands-on experience in building scalable REST APIs, responsive user interfaces, and robust backend services. My goal is to become an exceptional software engineer, strengthen my problem-solving abilities, and build reliable real-world applications.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL", "JavaScript", "REST API"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured full-stack engineering workflow ensuring code quality, security, and performance.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing business requirements, architectural scope, and database schemas before writing any code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting intuitive responsive UI wireframes and designing structured RESTful API contracts and database models.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Engineering clean, testable frontend and backend code with Spring Boot, React, Java, and MySQL.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Running rigorous end-to-end tests, optimizing bundle performance, and preparing production-ready deployments.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "React.js" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring" },
        { name: "Spring Boot" },
        { name: "JDBC" },
        { name: "JSP & Servlets" },
        { name: "REST API" },
      ],
    },
    {
      title: "Databases & Core",
      skills: [
        { name: "MySQL" },
        { name: "DBMS" },
        { name: "OOPS" },
        { name: "Computer Networks" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Developer Intern",
    duration: "2024 - Present",
    skills: [
      "Full Stack Development",
      "REST API Architecture",
      "Database Optimization",
      "Component Design",
    ],
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "JavaScript"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working seamlessly with cross-functional peers to achieve shared project goals.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex programming challenges into efficient, logical solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating system bottlenecks and data structures to optimize application performance.",
  },
  {
    name: "Adaptability",
    icon: "⚡",
    desc: "Quickly learning and mastering new technologies, frameworks, and modern tools.",
  },
];

export const projects = [
  {
    id: "disaster-relief-management-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Disaster Relief Management System",
    description:
      "Full-stack platform for disaster relief operations, including incident reporting and volunteer management, with scalable REST APIs and user-friendly interfaces.",
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    links: {
      github: "https://github.com/Ymu03",
      demo: "",
    },
    isFlagship: true,
  },
];

// Used only by the optional Certificates component
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/y-m-ullas-39024437b/",
};

export const education = {
  degree: "B.E. Information Science and Engineering",
  institution: "East Point College of Engineering and Technology",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React · MySQL",
    "Building Scalable Real-World Applications",
  ],
  credential: "B.E. Information Science and Engineering",
  copyright: `© ${new Date().getFullYear()} Y M Ullas | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
