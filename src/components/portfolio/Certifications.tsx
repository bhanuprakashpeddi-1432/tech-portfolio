import { motion } from "framer-motion";
import { CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { CERTIFICATIONS } from "./data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Achievements & Credentials"
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7] via-[#06b6d4] to-[#f59e0b] opacity-40" />
        <div className="space-y-10">
          {CERTIFICATIONS.map((c, i) => {
            const done = c.status === "Completed";
            const left = i % 2 === 0;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${left ? "" : "sm:[direction:rtl]"}`}
              >
                <div className={`sm:[direction:ltr] ${left ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                  <div className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform">
                    <div className={`flex items-center gap-2 mb-2 ${left ? "sm:justify-end" : ""}`}>
                      <span
                        className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md ${
                          done
                            ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
                            : "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                        }`}
                      >
                        {done ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                        {c.status}
                      </span>
                      {c.year && (
                        <span className="text-xs text-muted-foreground">{c.year}</span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
                    {c.tags && (
                      <div className={`mt-3 flex flex-wrap gap-1.5 ${left ? "sm:justify-end" : ""}`}>
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] border border-border text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-4 inline-flex items-center gap-1.5 text-xs text-[#06b6d4] hover:text-[#a855f7] ${left ? "sm:flex-row-reverse" : ""}`}
                      >
                        <ExternalLink className="h-3 w-3" /> View Certificate
                      </a>
                    )}
                  </div>
                </div>
                <span
                  className={`absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 grid h-4 w-4 place-items-center`}
                >
                  <span
                    className={`relative h-3 w-3 rounded-full ${done ? "bg-emerald-400" : "bg-amber-400"} shadow-[0_0_12px_currentColor] text-current`}
                    style={{ color: done ? "#34d399" : "#fbbf24" }}
                  >
                    {!done && (
                      <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
                    )}
                  </span>
                </span>
                <div className="hidden sm:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
