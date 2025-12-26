export const projectsData = [
  {
    id: 1,
    title: "Welth - AI Finance Tracker",
    date: "Oct - Nov 2025",
    icon: "💰",
    description: "AI-powered personal finance platform with budgets, OCR bill scanning, and automated alerts built using Next.js and Prisma.",
    features: [
      "Track income, expenses with advanced filters & dashboards",
      "Google Gemini AI for OCR-based receipt scanning",
      "Automated budget alerts with Inngest cron workflows",
      "Arcjet bot protection & rate limiting for security"
    ],
    technologies: ["Next.js", "React", "Prisma", "Clerk Auth", "Gemini AI", "Inngest"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Book Store Application",
    date: "Nov - Dec 2024",
    icon: "📚",
    description: "Full-stack book management application with secure authentication and complete CRUD operations.",
    features: [
      "JWT authentication & bcrypt password hashing",
      "Complete CRUD functionality for books",
      "Redux Toolkit state management",
      "Dynamic routing with React Router"
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "QKart E-commerce",
    date: "Jun - Nov 2024",
    icon: "🛒",
    description: "Complete e-commerce solution with frontend and backend, featuring authentication, cart, and checkout.",
    features: [
      "Built complete REST APIs following best practices",
      "Implemented authentication, cart & checkout logic",
      "MongoDB with Mongoose ODM for data modeling",
      "Responsive design for all devices"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    gradient: "from-blue-400 to-cyan-400",
    demoLink: "https://qkart-demo.vercel.app",
    codeLink: "https://github.com/surajprasad/qkart",
    detailsLink: "/projects/qkart"
  },
  {
    id: 4,
    title: "QTify Music Browser",
    date: "Dec 2024",
    icon: "🎵",
    description: "Song-browsing application with Material UI and Swiper for seamless music experience.",
    features: [
      "Modern React components architecture",
      "Material UI design system integration",
      "Swiper carousel for smooth navigation",
      "Module-scoped CSS for component styling"
    ],
    technologies: ["React", "Material UI", "Swiper", "CSS"],
    gradient: "from-green-400 to-teal-400",
    demoLink: "https://qtify-demo.vercel.app",
    codeLink: "https://github.com/surajprasad/qtify",
    detailsLink: "/projects/qtify"
  },
  {
    id: 5,
    title: "XBoard News Feed",
    date: "Apr 2024",
    icon: "📰",
    description: "News Feed website featuring latest news from Flipboard with REST API integration.",
    features: [
      "Built from scratch with vanilla JavaScript",
      "Flipboard RSS feed integration via REST API",
      "Bootstrap accordions & image carousels",
      "Responsive design for all screen sizes"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    gradient: "from-yellow-400 to-orange-500",
    demoLink: "https://xboard-demo.vercel.app",
    codeLink: "https://github.com/surajprasad/xboard",
    detailsLink: "/projects/xboard"
  },
  {
    id: 6,
    title: "QTrip Travel Website",
    date: "Feb - Mar 2024",
    icon: "🗺️",
    description: "Travel website with dynamic pages, multi-select filters, and localStorage integration.",
    features: [
      "Created from wireframe to production",
      "Dynamic JavaScript functionality",
      "Multi-select filters and image carousels",
      "localStorage for user preference persistence"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    gradient: "from-cyan-500 to-indigo-600",
    demoLink: "https://qtrip-demo.vercel.app",
    codeLink: "https://github.com/surajprasad/qtrip",
    detailsLink: "/projects/qtrip"
  }
];

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "⚛️",
    skills: ["React.js", "Next.js", "Redux Toolkit", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "shadcn-ui"]
  },
  {
    category: "Backend Development",
    icon: "🔧",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Nodemailer", "Swagger UI"]
  },
  {
    category: "Database & ORM",
    icon: "💾",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Sequelize"]
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "Postman", "NPM", "Validator.js", "Axios"]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Full MERN Stack Intern",
    company: "Hyperlink InfoSystem",
    location: "Ahmedabad",
    date: "Aug 2025 – Dec 2025",
    description: [
      "Developed backend services for News, Food, Grocery, and Medinova apps using Node.js and Express.js",
      "Built full-stack Event Booking application with scalable React.js UI and RESTful APIs",
      "Designed and optimized database models using Sequelize and Prisma ORM",
      "Implemented secure server-side validation with Validator.js and Crypto library",
      "Integrated Nodemailer for automated emails and documented APIs using Swagger UI",
      "Worked with PostgreSQL for relational data modeling and complex queries"
    ],
    projects: [
      {
        name: "🎫 Event Booking App",
        description: "Full-stack MERN application with event management, booking system, and payment integration",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Sequelize"]
      },
      {
        name: "📰 News & Food Apps Backend",
        description: "Backend services for multiple production apps with secure APIs and email automation",
        technologies: ["Express.js", "PostgreSQL", "Prisma", "Swagger"]
      }
    ]
  },
  {
    id: 2,
    role: "React.js Trainee",
    company: "Tagline Infotech LLP",
    location: "Surat",
    date: "Feb 2025 – May 2025",
    description: [
      "Developed scalable and responsive web UIs using HTML5, CSS3, JavaScript, and Bootstrap",
      "Built modern frontend applications using React.js, Redux, and Tailwind CSS",
      "Created Wine Shop project, Form Table application, and Dynamic Multi Filter component"
    ],
    projects: [
      {
        name: "🎨 Dynamic Multi Filter",
        description: "React component with advanced filtering and real-time data updates",
        technologies: ["React.js", "JavaScript", "CSS"]
      },
      {
        name: "🏪 Wine Shop & Form Table",
        description: "Responsive websites with form validation and interactive UI elements",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
      }
    ]
  },
  {
    id: 3,
    role: "Remote MERN Stack Intern",
    company: "Codtech IT Solutions",
    location: "Remote",
    date: "Oct 2024 – Dec 2024",
    description: [
      "Gained hands-on experience in JavaScript, React, Node.js, and related technologies",
      "Built Simple Blog Web App and Todo Web App using full MERN stack",
      "Learned best practices for full-stack development and RESTful API design"
    ],
    projects: [
      {
        name: "📝 Blog Web App",
        description: "Full-stack blogging platform with user authentication and CRUD operations",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"]
      },
      {
        name: "✅ Todo Web App",
        description: "Task management application with complete CRUD functionality",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"]
      }
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Fellowship in Software Development",
    institution: "Crio.do",
    duration: "Jan 2024 - Dec 2024",
    details: "Full-Stack Specialization",
    badge: "Completed",
    icon: "🎓"
  },
  {
    id: 2,
    degree: "Bachelor of Engineering (B.E.)",
    institution: "SNPIT Institute",
    duration: "Oct 2020 - May 2023",
    details: "Mechanical Engineering",
    badge: "CGPA: 8.18/10",
    icon: "🎓"
  },
  {
    id: 3,
    degree: "Diploma in Mechanical",
    institution: "BVPIT Institute",
    duration: "Jul 2017 - May 2020",
    details: "Bardoli",
    badge: "CGPA: 9.28/10",
    icon: "🎓"
  }
];

export const contactInfo = {
  phone: "+91 8160419494",
  email: "surajprasad5656@gmail.com",
  location: "Ahmedabad, Gujarat",
  linkedin: "https://linkedin.com/in/surajprasad",
  github: "https://github.com/surajprasad"
};

export const stats = [
  { number: "3", label: "Internships" },
  { number: "20+", label: "Projects Built" },
  { number: "15+", label: "Tech Skills" },
  { number: "1 Yr", label: "Experience" }
];
