import firstPortfolio from "../assets/images/web/first-portfolio.webp"
import certAwsCloudQuest from "../assets/images/web/cert-aws-cloud-quest.webp"
import certCyberSecurity from "../assets/images/web/cert-intro-cyber-security.webp"
import certPython3x from "../assets/images/web/cert-python-3x.webp"
import certPythonMimo from "../assets/images/web/cert-python-mimo.webp"
import certEksContainers from "../assets/images/web/cert-eks-containers.webp"
import certJsAlgorithms from "../assets/images/web/cert-js-algorithms.webp"
import certResponsiveWeb from "../assets/images/web/cert-responsive-web-design.webp"
import certGoogleItSupport from "../assets/images/web/cert-google-it-support.webp"
import certBitsBytes from "../assets/images/web/cert-coursera-bits-bytes.webp"
import certTechSupport from "../assets/images/web/cert-coursera-tech-support.webp"
import certSysAdmin from "../assets/images/web/cert-coursera-system-admin.webp"
import certOsPowerUser from "../assets/images/web/cert-coursera-os-power-user.webp"
import certItSecurity from "../assets/images/web/cert-coursera-it-security.webp"
import certReactJs from "../assets/images/web/cert-react-js.webp"
import certDbxMlModel from "../assets/images/web/cert-databricks-ml-model-dev.webp"
import certDbxDataPrep from "../assets/images/web/cert-databricks-data-prep-ml.webp"

// ============================================================================
// The Enchanted Codex — content source of truth.
// Everything visible on the page is edited here.
//
// Copy style: "Balanced" — information reads plainly (nav, role, project
// purpose, contact) while the Harry Potter theme lives in small accents and
// the visual design. Theme the decoration, never the information.
// ============================================================================

export const profile = {
  name: "Ronald Allan Paguntalan",
  displayName: "Ronny",
  role: "Cloud Software Engineer",
  tagline:
    "Driven by my passion about AI and full-stack development, I turn ideas into secure, scalable systems that work, from concept to reality.",
  email: "ronallanpaguntalan@gmail.com",
  resumeUrl: "/Paguntalan-Resume-2024.pdf", // served from public/
}

// Plain, functional labels so visitors can actually navigate.
// (ids stay the same — they're the in-page anchors used by each section.)
export const nav = [
  { id: "wizard", label: "About" },
  { id: "spellbook", label: "Skills" },
  { id: "enchantments", label: "Projects" },
  { id: "academy", label: "Education" },
  { id: "chronicles", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "owl-post", label: "Contact" },
]

export const about = {
  eyebrow: "The Wizard", // small themed accent above the plain title
  heading: "About Me",
  paragraphs: [
    "I turn your *ideas* into *products people can use*. Whether it's a new system, a website, or an app, I focus on building something that works, stays *secure*, and *grows with your business*. I care about *clear communication* and delivering on what we agree to.",
    "Outside of work, I'm into fitness, exploring new tech, and constantly leveling up."
  ],
  traits: ["Problem-Solver", "Clean Code", "Security-Minded", "Always Learning"],
}

export const skillGroups = [
  {
    school: "Backend",
    glyph: "⚗",
    skills: ["Java", "Spring Framework", "Python", "REST APIs", "Microservices"],
  },
  {
    school: "Frontend",
    glyph: "✦",
    skills: ["Vue", "Angular", "React", "TypeScript", "Javascript", "Tailwind CSS", "Bootstrap", "NGINX", "Redis"],
  },
  {
    school: "Cloud & DevOps",
    glyph: "⚙",
    skills: ["AWS", "Azure", "Docker", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    school: "Practices & Tools",
    glyph: "✶",
    skills: ["Figma", "Agile", "Git", "Firebase", "Canva", "MySQL", "Postman"],
  },
  {
    school: "AI Development",
    glyph: "✧",
    skills: ["Skills", "FastMCP", "Dify", "Claude", "GPT", "Gemini", "Databricks", "Copilot"],
  },
]

// Corporate projects: work-related, kept general (no client names, internal
// tools, links, or confidential metrics). `status` is "done" or "ongoing".
export const corporateProjects = [
  {
    title: "[TRACER] - TrendAI Reputation Agentic Case Escalation & Review",
    period: "Oct 2026 — Present",
    status: "ongoing",
    blurb:
      "A case operations console for handling cases end to end. A FastAPI web service and background worker share a common library, store data in DocumentDB, and sign in through company accounts.",
    tech: ["Python", "FastAPI", "Vue 3", "TypeScript", "Temporal", "DocumentDB", "AWS", "Docker"],
  },
  {
    title: "[AIARC] - AI Agentic Request Controller",
    period: "Aug 2026 — Present",
    status: "ongoing",
    blurb:
      "Infrastructure-as-code foundation for an AI platform. Terraform defines the ECS services, Lambda forwarders, queues, and DynamoDB tables, with deployments handled through CI/CD.",
    tech: ["Terraform", "AWS ECS", "Lambda", "GitHub Actions"],
  },
  {
    title: "[TALA] - Threat Assessment Leveraging Analytics",
    period: "Jun 2025 — Sep 2026",
    status: "done",
    blurb:
      "Event-driven file-analysis platform on AWS. Uploaded files flow through queues to analysis workers, and a status API tracks each file from intake to result.",
    tech: ["Python", "AWS Lambda", "SQS", "DynamoDB", "ECS", "Terraform", "Databricks", "Model Retraining"],
  },
  {
    title: "[MDS] - Metadata Store",
    period: "Mar 2026 — May 2026",
    status: "done",
    blurb:
      "Java 21 metadata service for storing and searching cybersecurity data. Entity changes are written to DynamoDB, then streamed to OpenSearch so they can be searched.",
    tech: ["Java 21", "Spring Boot", "DynamoDB", "OpenSearch", "Docker", "Gradle"],
  },
  {
    title: "[FRIZA] - FRS Intelligence Zone Assistant",
    period: "Aug 2025 — Sep 2025",
    status: "done",
    blurb:
      "A hackathon project: an AI assistant for the Core Tech Threat Infrastructure team. Multiple AI agents answer questions by pulling from team knowledge bases, logs, and code through MCP servers, deployed on AWS ECS.",
    tech: ["Dify", "MCP", "Python", "Next.js", "Terraform", "AWS ECS"],
  },
  {
    title: "[COLLABSPACE] - Collaboration Space",
    period: "Oct 2024 — Jan 2025",
    status: "done",
    blurb:
      "A web portal hosted on AWS that organizes and maintains information for the Core Tech Threat Infrastructure team.",
    tech: ["Java 17", "Spring Boot", "Vue 3", "Redis", "AWS", "Gradle"],
  },
  {
    title: "[CTTI-NEXUS] - Core Tech Threat Infrastructure Nexus",
    period: "Sep 2024",
    status: "done",
    blurb:
      "A dashboard for managing users, systems, and resources for the Core Tech Threat Infrastructure team. Admins and managers handle users and systems, while members view and update the systems they own, with role-based access.",
    tech: ["Vue 3", "Pinia", "Spring Boot", "MySQL", "Docker", "CloudFormation"],
  },
  {
    title: "Employee Onboarding",
    period: "Aug 2024",
    status: "done",
    blurb:
      "An onboarding web app with a Vue frontend and a Spring Boot backend. It uses JWT authentication and stores data in MySQL.",
    tech: ["Vue 3", "Vite", "Spring Boot", "Spring Security", "JWT", "MySQL"],
  },
]

// Personal projects. Cards with `status: "coming-soon"` render a badge and
// hide the demo/source links.
export const personalProjects = [
  {
    title: "My First Portfolio",
    blurb:
      "The first version of my portfolio site.",
    image: firstPortfolio,
    tech: ["Angular 16", "TypeScript", "RxJS", "Bootstrap 5", "Font Awesome", "Firebase"],
    demo: "https://ronnyportfolio-5eba9.firebaseapp.com/",
  },
  {
    title: "Personal Projects",
    blurb:
      "Side projects are brewing — live demos and source code will land right here soon.",
    tech: [],
    status: "coming-soon",
  },
]

export const experience = [
  {
    role: "Cloud Software Engineer",
    company: "TrendAI (under Trend Micro)",
    period: "Jul 2024 — Present",
    blurb:
      "Build and maintain secure, scalable microservices within a large cyber-threat platform. Design RESTful APIs, ship AI-assisted full-stack features in Java, Spring, Vue.js, and Python, and automate AWS deployments through CI/CD under DevSecOps practices.",
  },
  {
    role: "IT Service Desk Engineer",
    company: "Trend Micro",
    period: "Dec 2022 — Jul 2024",
    blurb:
      "Provided technical support across hardware, software, Azure VMs, and networks; tracked and resolved requests in Jira; configured systems and trained end-users while keeping IT operations secure and reliable.",
  },
  {
    role: "Junior Programmer",
    company: "MnK.Soft Corporation",
    period: "Sep 2022 — Dec 2022",
    blurb:
      "Built dynamic, responsive web apps with Angular 14, TypeScript, and Tailwind CSS, using Firebase for real-time data, sync, and authentication — with a focus on clean, well-tested code.",
  },
  {
    role: "Programmer Intern",
    company: "MnK.Soft Corporation",
    period: "Feb 2022 — Apr 2022",
    blurb:
      "Helped design and build Angular 12 web applications with TypeScript and Tailwind CSS, integrating Firebase and debugging defects to keep apps reliable.",
  },
]

export const education = [
  {
    photoSet: "university",
    school: "University of Rizal System – Binangonan Campus",
    degree: "BS in Information System",
    period: "2018 — 2022",
    qpa: "QPA 1.29",
    honors: {
      awards: ["Magna Cum Laude", "Outstanding Student Trainee Award", "Service Awardee", "Dean's Lister '18 - '20", "Academic Achiever Awardee '20 - '22"],
      leadership: ["CCS Student Body Treasurer '18 - '19", "CCS Student Body Auditor '19 - '22", "Graduating Class Secretary", "URS Chorale Bass Member '18 - '20"],
    },
  },
  {
    photoSet: "senior-high",
    school: "ACLC College of Taytay",
    degree: "TVL Track - Information and Communication Technology",
    period: "2016 — 2018",
    qpa: "Average 94",
    honors: {
      awards: ["With High Honors", "Salutatorian", "Consistent Top 1 in Class", "Best in Computer Programming", "Scrabble Intrams Champion"],
      leadership: ["Class President '16 - '18"],
    },
  },
]


export const contact = {
  eyebrow: "Owl Post", // small themed accent
  heading: "Get in Touch",
  invitation:
    "Have a project, a role, or just want to talk shop? Drop me a line (or an owl) — I always reply.",
  socials: [
    { label: "GitHub", href: "https://github.com/ronaldpaguntalan", icon: "github" }, // TODO: add your real GitHub URL
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ronallanp", icon: "linkedin" },
    { label: "Email", href: "mailto:ronallanpaguntalan@gmail.com", icon: "mail" },
  ],
}

export const footer = {
  tagline: "You're a Wizard Ronny!",
  builtWith: "Crafted with React & a little magic.",
}

// Certificates. Each entry: { title, issuer, date, link (optional) }.
// Leave empty to show the placeholder cards.
export const certificates = [
  {
    title: "Machine Learning Model Development",
    issuer: "Databricks Academy",
    date: "Jul 2026",
    image: certDbxMlModel,
  },
  {
    title: "Data Preparation for Machine Learning",
    issuer: "Databricks Academy",
    date: "Jul 2026",
    image: certDbxDataPrep,
  },
  {
    title: "Running Containers on Amazon Elastic Kubernetes Service (Amazon EKS)",
    issuer: "Amazon Web Services (AWS)",
    image: certEksContainers,
    date: "Aug 2025",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    image: certAwsCloudQuest,
    date: "May 2024",
  },
  {
    title: "Python",
    issuer: "Mimo",
    image: certPythonMimo,
    date: "Apr 2024",
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn",
    image: certCyberSecurity,
    date: "Apr 2024",
  },
  {
    title: "Programming with Python 3.X",
    issuer: "Simplilearn",
    image: certPython3x,
    date: "Mar 2024",
  },
  {
    title: "React JS Tutorial",
    issuer: "Great Learning",
    date: "Jan 2024",
    image: certReactJs,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Aug 2023",
    image: certJsAlgorithms,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Aug 2023",
    image: certResponsiveWeb,
  },
  {
    title: "Google IT Support Specialization",
    issuer: "Grow with Google on Coursera",
    date: "Jul 2023",
    image: certGoogleItSupport,
    link: "https://coursera.org/verify/97CKYL9HMFVT",
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Google on Coursera",
    date: "Jul 2023",
    image: certSysAdmin,
    link: "https://coursera.org/verify/QMTSS2VPBMNW",
  },
  {
    title: "IT Security: Defense against the digital dark arts",
    issuer: "Google on Coursera",
    date: "Jul 2023",
    image: certItSecurity,
    link: "https://coursera.org/verify/ZQ5ASQPDHQFD",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google on Coursera",
    date: "May 2023",
    image: certBitsBytes,
    link: "https://coursera.org/verify/6W483CD4EAZK",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google on Coursera",
    date: "May 2023",
    image: certOsPowerUser,
    link: "https://coursera.org/verify/UDYL5EAXU7N6",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google on Coursera",
    date: "Apr 2023",
    image: certTechSupport,
    link: "https://coursera.org/verify/GLBGG44MAEFL",
  },
  {
    title: "SAP ERP with Business Simulation Game",
    issuer: "Department of Information and Communications Technology",
    date: "Dec 2021",
  },
]
