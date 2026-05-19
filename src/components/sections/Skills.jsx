import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20">
      <SectionHeader 
        title="Skills & Technologies" 
        subtitle="Technologies I've been working with recently."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup) => (
          <motion.div key={skillGroup.category} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <motion.div key={item} variants={item}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
