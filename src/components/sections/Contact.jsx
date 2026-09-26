import React from "react";
import { Button } from "../ui/Button";
import { Mail, Github, Linkedin } from "lucide-react";
import { BlurFade } from "../ui/blur-fade";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
  const { email } = portfolioData.personalInfo;
  const { socialLinks } = portfolioData;

  return (
    <section id="contact" className="py-32 flex flex-col items-center text-center">
      <BlurFade>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
            What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question, a project proposal, or just want to say hi — my inbox is
            always open.
          </p>

          <Button asChild size="lg" className="h-13 px-8 text-base group">
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 mt-8 text-muted-foreground">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
