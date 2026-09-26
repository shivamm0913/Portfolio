export const portfolioData = {
  personalInfo: {
    name: "Shivam Kewat",
    role: "Software Engineer",
    tagline: "Software Engineering Intern",
    shortBio:
      "I build robust, scalable web applications with clean architecture and thoughtful user experiences.",
    typingRoles: [
      "Full Stack Developer",
      "Backend Engineer",
      "Software Engineer",
    ],
    location: "Verna, Goa",
    email: "shivamkewat0209@gmail.com",
    resumeLink: "#", // Replace with actual resume link
    profileImage: "/dp.jpeg",
  },

  about: {
    title: "About Me",
    description: [
      "I'm a Full-Stack Developer who loves turning complex problems into elegant, user-centric digital experiences. My journey started with a deep curiosity for how things work under the hood, which quickly evolved into a dedicated pursuit of software engineering — from architecting backend services to crafting interactive frontends.",
      "I believe in building software that is as performant as it is beautiful. Whether it's designing relational database schemas, building RESTful APIs, or creating responsive interfaces, I approach every project with clean architecture and scalability in mind. I'm a perpetual learner, constantly refining my craft and embracing new challenges.",
    ],
  },

  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "C++", "C", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "NestJS",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
      ],
    },
    {
      category: "Databases & ORM",
      items: ["PostgreSQL", "MongoDB", "TypeORM", "Prisma"],
    },
    {
      category: "Authentication & Security",
      items: ["JWT", "Clerk Authentication"],
    },
    {
      category: "APIs & Integrations",
      items: ["RESTful APIs", "Gemini AI API"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
    },
    {
      category: "Deployment & Platforms",
      items: ["Vercel", "Render", "Netlify"],
    },
    {
      category: "CS Fundamentals",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],

  projects: [
    {
      title: "Meal Forge",
      subtitle: "AI Meal Planning Platform",
      desc: "Full-stack meal planning platform integrating pantry inventory, AI-powered recipe generation, meal scheduling, and grocery management. Integrated Gemini for structured recipe generation and designed a relational PostgreSQL schema.",
      link: "https://meal-forge-theta.vercel.app/",
      github: "https://github.com/shivamm0913/Meal-Forge",
      tags: ["React", "Express.js", "PostgreSQL", "Gemini API"],
      image: "/MealForge.png",
      featured: true,
    },
    {
      title: "Shortify",
      subtitle: "URL Shortener REST API",
      desc: "Production-ready REST API for authenticated URL management with custom aliases, expiration, ownership-based authorization, click analytics, QR generation, and pagination. Containerized with Docker and deployed on Neon PostgreSQL.",
      link: null,
      github: "https://github.com/shivamm0913/shortify-api",
      apiDocs: "https://shortify-api-eoki.onrender.com/api-docs/",
      tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
      image: "/placeholder-project.jpg",
      featured: true,
    },
    {
      title: "Bg.Erase",
      subtitle: "AI Background Removal Web App",
      desc: "Full-stack AI-powered image background removal application with Clerk authentication, credit-based usage tracking, and modern animations. Deployed on Vercel with React + Tailwind CSS frontend.",
      link: "https://bg-erase-ashy.vercel.app/",
      github: "https://github.com/shivamm0913/Bg-Erase",
      tags: ["React", "Tailwind CSS", "Framer Motion", "MERN"],
      image: "/bg-erase.png",
      featured: true,
    },
    {
      title: "Financify",
      subtitle: "Personal Finance Tracker",
      desc: "MERN-based personal finance tracker with JWT authentication, protected REST APIs, interactive analytics dashboards using Recharts, and Excel export functionality via XLSX.",
      link: "https://financify-tracker.vercel.app/",
      github: "https://github.com/shivamm0913/Financify",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Recharts"],
      image: "/financify.png",
      featured: true,
    },
    {
      title: "Netflix Clone",
      subtitle: "Movie Streaming Platform",
      desc: "Feature-packed Netflix clone built with React.js, Firebase Auth, Firestore, and TMDB API. Includes user authentication, personal watchlists, trending movies carousel, and trailer playback.",
      link: "https://movie-app-clone-shiv-dev.vercel.app",
      github: "https://github.com/shivamm0913/NETFLIX_CLONE",
      tags: ["React", "Firebase", "Firestore", "TMDB API"],
      image: "/Netflix.png",
      featured: true,
    },
    {
      title: "AI-ChatBot",
      subtitle: "Interactive AI Assistant",
      desc: "Interactive AI-powered chatbot integrated with the Gemini AI API for real-time natural language responses. Includes emoji support, file attachments, and realistic typing indicators.",
      link: "https://ai-chatbot-ebon.vercel.app/",
      github: "https://github.com/shivamm0913/AI-ChatBot",
      tags: ["React", "JavaScript", "Gemini API", "CSS3"],
      image: "/AI-chatbot.png",
      featured: true,
    },
    {
      title: "Business Landing Page",
      subtitle: "Modern SaaS Landing Page",
      desc: "High-converting, responsive business landing page built with React, Tailwind CSS, and Framer Motion. Designed for startups and modern businesses to deliver an impactful digital presence.",
      link: "https://business-landing-page-flax.vercel.app/",
      github: "https://github.com/shivamm0913/Business-Landing-Page",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/BusinessLanding.png",
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Developer Portfolio",
      desc: "Responsive personal developer portfolio built with React and Tailwind CSS showcasing projects, skills, and experience with interactive showcases, theme switching, and smooth animations.",
      link: "https://shivamkewat.netlify.app/",
      github: "https://github.com/shivamm0913/Portfolio",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      image: "/portfolio1.png",
    },
    {
      title: "Employee Management REST API",
      subtitle: "NestJS Backend Service",
      desc: "Modular REST API with NestJS and TypeScript using layered architecture, dependency injection, and repository-based data access. Features relational mappings, dynamic PATCH updates, soft deletion, and pagination.",
      link: null,
      github: "https://github.com/shivamm0913/Employee-Management-API",
      tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL"],
      image: "/placeholder-project.jpg",
    },
    {
      title: "Log Analyzer CLI",
      subtitle: "C++ Command-Line Tool",
      desc: "Modular C++20 command-line log analysis tool that parses structured application logs, aggregates severity statistics, filters by log level, and performs keyword search. 14/14 test assertions passing.",
      link: null,
      github: "https://github.com/shivamm0913/cpp-log-analyzer",
      tags: ["C++20", "STL", "CMake", "CTest"],
      image: "/placeholder-project.jpg",
    },
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Creative Capsules",
      location: "Verna, Goa",
      duration: "Aug 2026 – Present",
      description: [
        "Contributing to an offline-first Learning Management System (LMS) using TypeScript and NestJS with REST APIs, PostgreSQL, relational data models, validation, dependency injection, and service-oriented design.",
        "Developing backend services for reliable access and management of SCORM-based learning content using a modular application architecture.",
        "Implementing workflows for course, cohort, enrollment, and content management while translating technical specifications into maintainable application features.",
        "Collaborating through Git/GitHub workflows involving feature branches, code changes, testing, and architecture/design specifications.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
      institution: "Padre Conceicao College of Engineering",
      location: "Verna, Goa",
      duration: "2023 – 2027",
      details: "CGPA: 7.4/10",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "M.E.S. Higher Secondary School",
      location: "Zuarinagar, Goa",
      duration: "2021 – 2023",
    },
  ],

  socialLinks: {
    github: "https://github.com/shivamm0913",
    linkedin: "https://linkedin.com/in/shivam-kewat",
  },
};
