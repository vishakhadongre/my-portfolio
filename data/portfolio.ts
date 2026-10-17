export const profile = {
  name: "Vishakha Dongre",
  initials: "VD",
  short: "Vishakha",
  role: "Full Stack Developer",
  location: "Nagpur, Maharashtra, India",
  phone: "+91 9860960727",
  email: "dongrevishakha360@gmail.com", 
  github: "https://github.com/vishakhadongre", 
  linkedin: "https://www.linkedin.com/in/vishakha-dongre-508a5a231", 
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
];

export const skills = [
  { group: "Frontend", items: ["React", "HTML5", "CSS3", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Backend", items: ["JAVA", "Laravel", "Node.js", "Next.js", "JDBC", "REST APIs", "Authentication", "Java-fullstack"] },
  { group: "Database", items: ["MYSQL", "PostgreSQL", "TablePlus", "Oracle"] },
  { group: "Tools", items: ["Git & GitHub", "Postman", "VS Code", "Bruno", "Hostinger"] },
];

export const experience = [
  {
  title: "Full Stack Developer",
  company: "Webdock Studios LLP",
  badge: "CURRENT",
  summary:
    "Working on live full-stack web applications, including an AI-based Skin & Hair Analysis e-commerce platform and an Event Management platform, covering frontend interfaces, backend APIs, authentication, database integration and deployment.",
  points: [
    "Built a full-stack Skin & Hair AI Analysis e-commerce app using Laravel, PHP, Bootstrap and MySQL with a responsive UI.",
    "Developed the AI Analyzer and Register, Forgot Password and Reset Password flows with validation and authentication.",
    "Resolved Shiprocket integration issues, handled client feedback and deployed the app on Hostinger.",
    "Built a full-stack Event Management app in Next.js with separate User and Vendor sections across 10 event categories.",
    "Designed Next.js APIs for the Vendor section and integrated them with the frontend category pages.",
    "Managed PostgreSQL using TablePlus and tested APIs with Postman to verify data flow end to end.",
  ],
},
  {
  title: "Software Developer Intern",
  company: "SenseLive Technologies Pvt. Ltd.",
  badge: "6 MONTHS",
  summary:
    "Worked on a Human Resource Management System (HRMS) application, building Angular-based modules and dashboard features while learning how production applications are developed, structured and maintained in a team environment.",
  points: [
    "Developed HRMS modules including Forgot Password, attendance and leave management, enhancing overall system functionality.",
    "Created and configured Angular components for the HRMS dashboard to deliver a clean and responsive user interface.",
    "Implemented seamless routing between modules to ensure efficient and consistent navigation across the application.",
    "Collaborated with the team using GitHub for version control, and used Angular CLI and Node.js to build a scalable HRMS application.",
  ],
},
];

export const projects = [
  {
  title: "AI-Based Skin and Hair Analysis System",
  description:
    "A full-stack AI-powered skin and hair analysis e-commerce web application with an AI Analyzer, treatments, blogs and online product shopping.",
  points: [
    "Built the Home, About, AI Analyzer, Treatments, Blogs, Products and Contact sections with a responsive UI.",
    "Developed and integrated the AI Analyzer for skin and hair analysis.",
    "Created Register, Forgot Password and Reset Password pages with validation, authentication and MySQL integration.",
    "Resolved Shiprocket integration issues and handled client requirements and feedback.",
    "Deployed the application on Hostinger and managed live updates and bug fixes.",
  ],
  tech: ["Laravel", "PHP", "Bootstrap", "CSS", "MySQL", "phpMyAdmin", "Laragon", "Hostinger", "Shiprocket"],
  live: "https://drrichaaiclinic.com/",
  },
  {
  title: "Event Management Application",
  description:
    "A full-stack event management web application with separate User and Vendor sections for managing event-related services and categories.",
  points: [
    "Developed a full-stack Event Management application in Next.js with separate User and Vendor sections, designing the Home, Login, Register and category pages across 10 event service categories.",
    "Built Next.js APIs for the Vendor section and integrated them with the frontend category pages.",
    "Integrated PostgreSQL as the database, using TablePlus to manage tables and write SQL queries, and tested the APIs with Postman to verify data flow.",
    "Collaborated with team members to plan features, divide tasks and deliver the project together.",
    "Managed the codebase on GitHub, pushing code regularly for version control and smooth team coordination.",
  ],
  tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "TablePlus", "REST APIs", "Postman", "Tailwind CSS", "GitHub"],
  live: "#",
  },
  {
  title: "Fablenco Welfare Foundation",
  description:
    "A full-stack Laravel website for a welfare foundation, with a public frontend for events, causes, services and volunteers, managed through a custom admin panel.",
  points: [
  "Built responsive Events, Causes, Services and Volunteers pages with single-detail views and routing.",
  "Built a Laravel admin panel with JWT authentication and CRUD modules for Leads, Events, Causes and Volunteer details.",
  "Created models, controllers, migrations and routes with MySQL to show admin data on the frontend.",
  "Connected the frontend to the Weblims backend via API for Contact Us and volunteer applications.",
  "Created Interakt WhatsApp templates and managed code on GitHub using development branches.",
  ],
  tech: ["Laravel", "MySQL", "Blade", "REST API", "Laragon", "GitHub"],
  },
];

export const education = [
  {
    degree: "B.Tech (Information Technology)",
    school: "G. H. Raisoni College of Engineering, Nagpur",
    period: "2020 – 2024",
    note: "CGPA: 8.71",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Vidyaniketan Junior College Amgaon, dis.- Gondia",
    period: "2018 – 2020",
    note: "Percentage: 78.92%",
  },
  {
    degree: "Secondary School (10th)",
    school: "Adarsh Vidyalaya Amgaon",
    period: "2017 – 2018",
    note: "Percentage: 87.60%",
  },
];
