import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";
import { useSelector } from "react-redux";

export default function Education() {
  const { education } = portfolioData;
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
    <section id="education" className="py-20">
      <BlurFade>
        <SectionHeader title="Education" />
      </BlurFade>

      <BlurFade delay={0.15}>
        <VerticalTimeline lineColor="var(--border)" animate={true}>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              date={edu.duration}
              icon={<GraduationCap size={18} />}
              iconStyle={iconStyle}
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              visible={true}
            >
              <h3 className="text-lg font-semibold text-foreground tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {edu.institution}
                {edu.location && (
                  <span className="text-muted-foreground/70 font-normal">
                    {" "}· {edu.location}
                  </span>
                )}
              </p>
              {edu.details && (
                <p className="text-sm text-muted-foreground mt-2">
                  {edu.details}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </BlurFade>
    </section>
  );
}
