import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Mail } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
  const { email } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-primary font-medium tracking-wide mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <Button asChild size="lg" className="h-14 px-8 text-base">
          <a href={`mailto:${email}`}>
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
