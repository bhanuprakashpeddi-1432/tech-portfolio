import { motion } from "framer-motion";
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiNextdotjs,
  SiSpringboot, SiMongodb, SiMysql, SiGooglecloud, SiFastapi,
} from "react-icons/si";
import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaBrain, FaAws } from "react-icons/fa";
import { Section } from "./Section";
import { SKILL_CATEGORIES } from "./data";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  Python: SiPython,
  "Machine Learning": FaBrain,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "scikit-learn": SiScikitlearn,
  React: FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: FaJs,
  CSS: FaCss3Alt,
  "Node.js": FaNodeJs,
  Java: FaJava,
  SpringBoot: SiSpringboot,
  FastAPI: SiFastapi,
  SQL: SiMysql,
  MongoDB: SiMongodb,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Git: FaGitAlt,
};

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="My Tech Stack">
      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="h-3 w-3 rounded-full shadow-[0_0_12px_currentColor]"
                style={{ background: cat.color, color: cat.color }}
              />
              <h3 className="font-display font-semibold text-lg">{cat.name}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => {
                const Icon = ICONS[item] ?? FaBrain;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    whileHover={{ y: -5 }}
                    className="group glass rounded-xl px-4 py-3 flex items-center gap-2.5 cursor-default transition-shadow hover:shadow-[0_10px_30px_-10px_var(--glow)]"
                    style={{ ["--glow" as string]: `${cat.color}aa` }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                      style={{ color: cat.color }}
                    />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
