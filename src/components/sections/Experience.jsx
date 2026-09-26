import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";
import { useSelector } from "react-redux";

export default function Experience() {
  const { experience } = portfolioData;
  const mode = useSelector((state) => state.theme.mode);

  const iconStyle = {
    background: mode === "dark" ? "oklch(0.17 0.005 260)" : "oklch(0.95 0 0)",
    color: mode === "dark" ? "oklch(0.93 0.01 280)" : "oklch(0.18 0 0)",
    boxShadow: "none",
  };

  const contentStyle = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
    boxShadow: "none",
    padding: "1.5rem",
  };

  const arrowStyle = {
    borderRight: "7px solid var(--border)",
  };

  return (
    <section id="experience" className="py-20">
      <BlurFade>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey so far."
        />
      </BlurFade>

      <BlurFade delay={0.15}>
        <VerticalTimeline lineColor="var(--border)" animate={true}>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.duration}
              icon={<Briefcase size={18} />}
              iconStyle={iconStyle}
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              visible={true}
            >
              <h3 className="text-lg font-semibold text-foreground tracking-tight">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {exp.company}
                {exp.location && (
                  <span className="text-muted-foreground/70 font-normal">
                    {" "}· {exp.location}
                  </span>
                )}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </BlurFade>
    </section>
  );
}
