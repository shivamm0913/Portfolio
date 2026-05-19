import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <SectionHeader 
        title="Experience & Journey" 
        subtitle="My professional path and ongoing learning."
      />
      
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 border-l-2 border-border pl-6 relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
            
            <div className="md:w-1/4 shrink-0">
              <p className="text-sm text-muted-foreground font-mono">{exp.duration}</p>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
              <p className="text-primary font-medium mb-4">{exp.company}</p>
              
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
