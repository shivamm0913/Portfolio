import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  const { title, description } = portfolioData.about;

  return (
    <section id="about" className="py-20">
      <SectionHeader title={title} />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-2 flex justify-center items-center"
        >
          {/* Subtle image or abstract shape block instead of flashy glow */}
          <div className="relative w-full max-w-[280px] aspect-square rounded-2xl bg-muted/50 border border-border shadow-sm flex items-center justify-center overflow-hidden">
            <img
              src="/dp.jpeg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
            {/* <span className="text-muted-foreground font-medium">Developer</span> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
