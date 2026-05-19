export const portfolioData = {
  personalInfo: {
    name: "Shivam",
    role: "Full Stack Developer",
    shortBio:
      "A Full Stack Developer with a passion for building scalable web apps, intuitive UIs, and seamless user experiences.",
    location: "India",
    email: "shivamkewat0209@gmail.com",
    resumeLink: "#", // Replace with actual resume link
  },
  about: {
    title: "About Me",
    description: [
      "I am a passionate Full-Stack Developer who loves transforming complex problems into elegant, user-centric digital experiences. My journey into programming started with a deep curiosity for how things work under the hood, which quickly evolved into a dedicated pursuit of software engineering.",
      "I consider myself a perpetual learner. Technology moves fast, and I enjoy staying adaptable—constantly refining my approach, embracing new challenges, and collaborating to build software that is as performant as it is beautiful."
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "C/C++", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Authentication & Security",
      items: ["JWT", "Clerk Authentication"]
    },
    {
      category: "APIs & Integrations",
      items: ["RESTful APIs", "Gemini AI API"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      category: "Deployment & Platforms",
      items: ["Vercel", "Render", "Netlify"]
    }
  ],
  projects: [
    {
      title: "Financify",
      desc: "A full-stack expense tracker with income/expense analytics and dashboards. Features JWT authentication, financial visualizations using Recharts, and Excel data export.",
      link: "https://financify-tracker.vercel.app/",
      github: "https://github.com/shivamm0913/Financify",
      tags: ["MERN Stack", "JWT", "MongoDB", "Recharts", "Express"],
      image: "/financify.png",
      color: "from-indigo-500/20 to-purple-500/5",
    },
    {
      title: "BG ERASE",
      desc: "Built a Background Removal App using the MERN stack with Clerk authentication and custom REST APIs. Designed a clean React + Tailwind UI and deployed on Vercel.",
      link: "https://bg-erase-ashy.vercel.app/",
      github: "https://github.com/shivamm0913/Bg-Erase",
      tags: ["React", "Node.js", "Express", "MongoDB", "Clerk"],
      image: "/bg-erase.png",
      color: "from-blue-500/20 to-cyan-500/5",
    },
    {
      title: "Business Landing Page",
      desc: "A modern, responsive, and animated Business Landing Page built with React, Tailwind CSS, and Framer Motion. Designed for startups to make a powerful first impression.",
      link: "https://business-landing-page-flax.vercel.app/",
      github: "https://github.com/shivamm0913/Business-Landing-Page",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/BusinessLanding.png",
      color: "from-emerald-500/20 to-teal-500/5",
    },
    {
      title: "Netflix Clone",
      desc: "A sleek and fully functional Netflix Clone built with React.js, Firebase, and the TMDB API. Features user authentication, Firestore integration, and real-time movie data.",
      link: "https://movie-app-clone-shiv-dev.vercel.app",
      github: "https://github.com/shivamm0913/NETFLIX_CLONE",
      tags: ["React", "Firebase Auth", "Firestore", "TMDB API"],
      image: "/Netflix.png",
      color: "from-rose-500/20 to-red-500/5",
    },
    {
      title: "AI-ChatBot",
      desc: "An interactive AI-powered chatbot integrated with the Gemini AI API to generate real-time responses. Includes emoji support, file uploads, and typing indicators.",
      link: "https://ai-chatbot-ebon.vercel.app/",
      github: "https://github.com/shivamm0913/AI-ChatBot",
      tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
      image: "/AI-chatbot.png",
      color: "from-amber-500/20 to-orange-500/5",
    },
  ],
  experience: [
    // {
    //   role: " Independent Projects",
    //   company: "Self-Employed",
    //   duration: "2023 - Present",
    //   description: [
    //     "Architected and developed full-stack web applications utilizing the MERN stack.",
    //     "Designed responsive, mobile-first user interfaces with React and Tailwind CSS.",
    //     "Integrated third-party APIs and implemented secure authentication flows.",
    //   ],
    // },
    {
      role: "Continuous Learning Journey",
      company: "Self-Taught Developer",
      duration: "2023 - Present",
      description: [
        "Mastered advanced frontend concepts including state management, custom hooks, and performance optimization.",
        "Built over 15+ comprehensive projects demonstrating proficiency in modern web technologies.",
        "Actively solved algorithmic challenges to strengthen problem-solving skills.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Padre Conceicao College of Engineering", // Update this
      duration: "2023 - 2027", // Update this
      details: "Focus on Computer Science and Software Engineering principles.",
    },
    {
      degree: "Hssc (12th)",
      institution: "M.E.S Higher Secondary School, Zuarinagar", // Update this
      duration: "2021 - 2023", // Update this
      // details: "Focus on Computer Science and Software Engineering principles.",
    },
  ],
  socialLinks: {
    github: "https://github.com/shivamm0913",
    linkedin: "https://linkedin.com/in/shivam-kewat", // Update this
    // twitter: "https://twitter.com/yourprofile", // Update this
  },
};
