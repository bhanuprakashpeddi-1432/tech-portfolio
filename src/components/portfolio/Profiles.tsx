import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import type { IconType } from "react-icons";
import { Section } from "./Section";
import { CODING_PROFILES } from "./data";

const ICONS: Record<string, IconType> = {
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  CodeChef: SiCodechef,
};

export function Profiles() {
  return (
    <Section id="profiles" label="Profiles" title="Coding Platforms">
      <div className="grid md:grid-cols-3 gap-6">
        {CODING_PROFILES.map((p, i) => {
          const Icon = ICONS[p.name];
          return (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 relative overflow-hidden transition-shadow"
              style={{ ["--c" as string]: p.color }}
            >
              <div
                className="absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: p.color }}
              />
              <Icon className="h-12 w-12 relative" style={{ color: p.color }} />
              <h3 className="mt-5 font-display font-semibold text-xl relative">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground relative">{p.description}</p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium relative"
                style={{ color: p.color }}
              >
                Visit Profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 glass-strong rounded-2xl p-7"
      >
        <h3 className="font-display font-semibold text-xl">GitHub Activity</h3>
        <p className="text-sm text-muted-foreground mt-1">
          A year of contributions on{" "}
          <a
            href="https://github.com/bhanuprakashpeddi-1432"
            className="text-[#06b6d4] hover:text-[#a855f7]"
            target="_blank"
            rel="noreferrer"
          >
            @bhanuprakashpeddi-1432
          </a>
        </p>
        <div className="mt-5 rounded-xl bg-white/[0.03] border border-border p-5 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/a855f7/bhanuprakashpeddi-1432"
            alt="GitHub contributions"
            className="w-full min-w-[600px]"
            loading="lazy"
          />
        </div>
      </motion.div>
    </Section>
  );
}
