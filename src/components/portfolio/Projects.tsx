import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Info, X, Star } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS, type Project } from "./data";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects" label="Projects" title="Featured Work">
      <FeaturedCard project={featured} onOpen={() => setOpen(featured)} />

      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[300px]">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 0.07} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function GradientBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:from-[#a855f7]/60 hover:via-[#06b6d4]/40 hover:to-[#f59e0b]/60 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

function FeaturedCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GradientBorder>
        <div className="relative glass-strong rounded-2xl p-7 sm:p-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#a855f7]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#06b6d4]/20 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#f59e0b]">
                <Star className="h-3.5 w-3.5 fill-[#f59e0b]" /> Featured Project
              </span>
              <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-border glass hover:bg-white/5 transition-all hover:scale-[1.03]"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                <button
                  onClick={onOpen}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white shadow-lg shadow-[#a855f7]/30 hover:scale-[1.03] transition-all"
                >
                  <Info className="h-4 w-4" /> Details
                </button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl glass overflow-hidden hidden lg:block">
              <div className="absolute inset-0 bg-mesh opacity-60" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-mono text-xs space-y-2 p-6 text-left text-muted-foreground">
                  <div><span className="text-[#06b6d4]">const</span> grievance = {`{`}</div>
                  <div className="pl-4"><span className="text-[#a855f7]">status</span>: <span className="text-emerald-300">'open'</span>,</div>
                  <div className="pl-4"><span className="text-[#a855f7]">priority</span>: <span className="text-amber-300">'high'</span>,</div>
                  <div className="pl-4"><span className="text-[#a855f7]">assignedTo</span>: <span className="text-emerald-300">'admin'</span>,</div>
                  <div className="pl-4"><span className="text-[#a855f7]">realtime</span>: <span className="text-orange-300">true</span></div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}

function ProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: Project;
  delay: number;
  onOpen: () => void;
}) {
  const visible = project.tags.slice(0, 4);
  const extra = project.tags.length - visible.length;
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
    >
      <GradientBorder className="h-full">
        <div className="glass rounded-2xl p-6 h-full flex flex-col">
          <h3 className="font-display font-semibold text-xl">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {visible.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {extra > 0 && <Tag muted>+{extra}</Tag>}
          </div>
          <div className="mt-auto pt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[#a855f7] hover:scale-110 transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live demo"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[#06b6d4] hover:scale-110 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-1.5 text-sm text-[#06b6d4] hover:text-[#a855f7] transition-colors"
            >
              <Info className="h-4 w-4" /> Details
            </button>
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}

function Tag({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors hover:border-[#a855f7]/60 hover:text-foreground ${
        muted ? "bg-muted/30 border-border text-muted-foreground" : "bg-white/[0.03] border-border text-foreground/80"
      }`}
    >
      {children}
    </span>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-strong rounded-2xl p-7"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-lg hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="font-display font-bold text-2xl pr-8">{project.title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {project.longDescription ?? project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-border glass hover:bg-white/5"
            >
              <Github className="h-4 w-4" /> View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
