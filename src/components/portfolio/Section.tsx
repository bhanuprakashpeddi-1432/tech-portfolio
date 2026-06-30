import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#06b6d4] font-medium">
            {label}
          </p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">
            {title.split(" ").map((w, i, a) =>
              i === a.length - 1 ? (
                <span key={i} className="text-gradient">
                  {" "}{w}
                </span>
              ) : (
                <span key={i}>{i > 0 ? " " : ""}{w}</span>
              ),
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
