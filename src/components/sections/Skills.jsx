import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { SpotlightCard } from "../ui/spotlight-card";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";

import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiTypeorm,
  SiPrisma,
  SiFirebase,
  SiJsonwebtokens,
  SiClerk,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,
  SiRender,
  SiNetlify,
  SiGooglegemini,
} from "react-icons/si";

import { TbApi, TbBrandVscode } from "react-icons/tb";
import { Binary, Boxes, Database, Cpu, Network, Code2 } from "lucide-react";

// Comprehensive skill icon mapping with colored SVGs and brand-colored vector fallbacks
const skillConfig = {
  // Languages
  "JavaScript": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  "TypeScript": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    icon: SiTypescript,
    color: "#3178C6",
  },
  "C++": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    icon: SiCplusplus,
    color: "#00599C",
  },
  "C": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    icon: SiC,
    color: "#A8B9CC",
  },
  "SQL": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    icon: SiMysql,
    color: "#00758F",
  },
  "HTML5": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    icon: SiHtml5,
    color: "#E34F26",
  },
  "CSS3": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    icon: SiCss3,
    color: "#1572B6",
  },

  // Frameworks & Libraries
  "React.js": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    icon: SiReact,
    color: "#61DAFB",
  },
  "Node.js": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  "Express.js": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    icon: SiExpress,
    color: "#888888",
  },
  "NestJS": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    icon: SiNestjs,
    color: "#E0234E",
  },
  "Tailwind CSS": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  "Bootstrap": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  "Framer Motion": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    icon: SiFramer,
    color: "#0055FF",
  },

  // Databases & ORM
  "PostgreSQL": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  "MongoDB": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    icon: SiMongodb,
    color: "#47A248",
  },
  "TypeORM": {
    icon: SiTypeorm,
    color: "#FE0808",
  },
  "Prisma": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    icon: SiPrisma,
    color: "#5A67D8",
  },
  "Firebase": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    icon: SiFirebase,
    color: "#FFCA28",
  },

  // Authentication & Security
  "JWT": {
    svgUrl: "https://jwt.io/img/pic_logo.svg",
    icon: SiJsonwebtokens,
    color: "#D63AFF",
  },
  "Clerk Authentication": {
    icon: SiClerk,
    color: "#6C47FF",
  },

  // APIs & Integrations
  "RESTful APIs": {
    icon: TbApi,
    color: "#0284C7",
  },
  "Gemini AI API": {
    icon: SiGooglegemini,
    color: "#8E75FF",
  },

  // Developer Tools
  "Git": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    icon: SiGit,
    color: "#F05032",
  },
  "GitHub": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    icon: SiGithub,
    color: "#24292e",
  },
  "VS Code": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    icon: TbBrandVscode,
    color: "#007ACC",
  },
  "Postman": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    icon: SiPostman,
    color: "#FF6C37",
  },
  "Docker": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    icon: SiDocker,
    color: "#2496ED",
  },

  // Deployment & Platforms
  "Vercel": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    icon: SiVercel,
    color: "#000000",
  },
  "Render": {
    icon: SiRender,
    color: "#46E3B7",
  },
  "Netlify": {
    svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    icon: SiNetlify,
    color: "#00C7B7",
  },

  // CS Fundamentals
  "Data Structures & Algorithms": {
    icon: Binary,
    color: "#10B981",
  },
  "OOP": {
    icon: Boxes,
    color: "#8B5CF6",
  },
  "DBMS": {
    icon: Database,
    color: "#0284C7",
  },
  "Operating Systems": {
    icon: Cpu,
    color: "#F59E0B",
  },
  "Computer Networks": {
    icon: Network,
    color: "#F43F5E",
  },
};

function SkillIcon({ skill }) {
  const [imgError, setImgError] = useState(false);
  const info = skillConfig[skill];

  if (!info) {
    return <Code2 className="w-5 h-5 text-primary/70 shrink-0" />;
  }

  if (info.svgUrl && !imgError) {
    return (
      <img
        src={info.svgUrl}
        alt={skill}
        className="w-5 h-5 object-contain shrink-0 transition-transform duration-200 group-hover:scale-110"
        loading="lazy"
        onError={() => setImgError(true)}
      />
    );
  }

  const IconComp = info.icon || Code2;
  return (
    <IconComp
      className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
      style={{ color: info.color }}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <BlurFade>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with daily."
        />
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {portfolioData.skills.map((skillGroup, groupIdx) => (
          <BlurFade key={skillGroup.category} delay={0.05 + groupIdx * 0.05}>
            <SpotlightCard className="h-full flex flex-col">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 mb-4 pb-2 border-b border-border/40">
                {skillGroup.category}
              </h3>
              <div className="flex flex-col gap-2 flex-1">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-1.5 px-2 rounded-lg bg-card/60 hover:bg-accent/40 border border-border/30 hover:border-foreground/15 transition-all duration-200 group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-md bg-muted/60 dark:bg-muted/40 flex items-center justify-center shrink-0">
                      <SkillIcon skill={skill} />
                    </div>
                    <span className="text-sm font-medium text-foreground tracking-tight group-hover:text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
