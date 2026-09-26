import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  const { title, description } = portfolioData.about;

  return (
    <section id="about" className="py-20">
      <BlurFade>
        <SectionHeader title={title} />
      </BlurFade>

      <div className="max-w-3xl space-y-1">
        {description.map((para, index) => (
          <BlurFade key={index} delay={0.1 + index * 0.15}>
            <TextGenerateEffect
              words={para}
              delay={index * 300}
              className="text-lg leading-[1.8] text-muted-foreground"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
