import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { socialLinks, personalInfo } = portfolioData;
  return (
    <footer className="border-t border-border mt-16 pb-24 md:pb-8 pt-8">
      <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
