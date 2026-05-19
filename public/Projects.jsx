import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import { useSelector } from "react-redux";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Projects({ limit, embedded = false }) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const mode = useSelector((state) => state.theme.mode);
  const tooltipBg = mode === "dark" ? "bg-white" : "bg-black";
  const tooltipText = mode === "dark" ? "text-black" : "text-white";

  // Animation variants for project cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      }
    }
  };

  const content = (
    <LazyMotion features={domAnimation}>
      <m.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {list.map((p, index) => (
          <m.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="group rounded-2xl flex flex-col justify-between border border-white/30 dark:border-white/10 p-5 bg-white/70 dark:bg-black/30 backdrop-blur-2xl transition shadow-xl shadow-black/10 dark:shadow-black/30 hover:shadow-2xl duration-300"
          >
            <m.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-500/15 via-violet-400/15 to-sky-400/15 grid place-items-center text-sm overflow-hidden ring-1 ring-inset ring-black/5 dark:ring-white/5"
            >
              <img
                src={p.path}
                alt=""
                className="object-cover w-full h-full scale-100 group-hover:scale-[1.05] transition-transform duration-600"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </m.div>

           

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              <h3 className="mt-4 font-semibold text-lg tracking-tight">{p.title}</h3>
              <p className="opacity-80 text-sm mt-1">{p.desc}</p>
            </m.div>
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {p.tags.map((t, tagIndex) => (
                <m.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + 0.3 + tagIndex * 0.05 
                  }}
                  className="text-xs rounded-full border border-black/10 dark:border-white/10 px-3 py-1 bg-white/80 dark:bg-white/5 backdrop-blur text-foreground/80 group-hover:border-primary/40"
                >
                  {t}
                </m.span>
              ))}
            </m.div>
            <m.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="flex gap-3 mt-5"
            >
              <m.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex flex-row justify-center items-center gap-1 w-full py-2.5 rounded-xl bg-black text-white font-medium border border-white/10 shadow-md overflow-hidden group"
              >
                <span className="relative z-10">Live Demo</span>
                <span><ArrowUpRight size={18}/></span>
                <span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                ></span>
              </m.a>

              <m.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex flex-row justify-center items-center gap-2 w-full py-2.5 rounded-xl bg-white text-black font-medium border border-black/10 dark:bg-white/90 dark:text-black shadow-md overflow-hidden group"
              >
                <span className="relative z-10">Source Code</span>
                <span><Github size={18}/></span>
                <span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                ></span>
              </m.a>
            </m.div>
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="projects"
        className="mx-auto flex flex-col gap-3 max-w-6xl px-4 py-24"
      >
        {/* Header Animation */}
        <m.h1 
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl text-center pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400"
        >
          Projects
        </m.h1>
        <m.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "7rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 rounded-full mx-auto"
        />
        {content}
      </section>
    </LazyMotion>
  );
}