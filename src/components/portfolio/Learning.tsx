import { motion } from "framer-motion";
import { Section } from "./Section";
import { LEARNING } from "./data";

function Ring({ progress }: { progress: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 88 88" className="h-20 w-20 -rotate-90">
      <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <motion.circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke="url(#g)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * progress) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Learning() {
  const avg = Math.round(LEARNING.reduce((a, c) => a + c.progress, 0) / LEARNING.length);
  return (
    <Section id="learning" label="Learning" title="Current Learning Journey">
      <div className="grid md:grid-cols-3 gap-6">
        {LEARNING.map((l, i) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 hover:shadow-[0_20px_60px_-20px_#a855f755] transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <Ring progress={l.progress} />
                <div className="absolute inset-0 grid place-items-center text-sm font-semibold">
                  {l.progress}%
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs px-2 py-0.5 rounded-md bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
                  {l.category}
                </span>
                <p className="mt-2 text-xs text-muted-foreground">{l.remaining}</p>
              </div>
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">{l.title}</h3>
            <p className="text-sm text-muted-foreground">{l.provider}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {l.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Start: {l.start}</span>
              <span>ETA: {l.end}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 glass-strong rounded-2xl px-6 py-5 flex flex-wrap items-center justify-around gap-4"
      >
        <Stat value={`${LEARNING.length}`} label="Active Courses" />
        <div className="h-10 w-px bg-border" />
        <Stat value={`${avg}%`} label="Avg. Progress" />
      </motion.div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-3xl text-gradient">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
