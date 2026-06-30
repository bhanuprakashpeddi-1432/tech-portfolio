import { motion } from "framer-motion";
import { GraduationCap, Rocket, Code2 } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Bachelor's in Computer Science with focus on Software Development and Data Structures.",
    color: "#a855f7",
  },
  {
    icon: Rocket,
    title: "Passion",
    text: "Building scalable applications and exploring new technologies to solve real-world problems.",
    color: "#06b6d4",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    text: "React, JavaScript, Node.js, Python, MongoDB, PostgreSQL, Git, AWS, and modern web technologies.",
    color: "#f59e0b",
  },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Who I Am"
      subtitle="I am a motivated fresher and full-stack developer actively seeking opportunities to design, build, and deploy high-quality web applications and machine learning solutions."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <TiltCard key={c.title} delay={i * 0.1} color={c.color}>
            <div
              className="grid h-12 w-12 place-items-center rounded-xl mb-5"
              style={{
                background: `linear-gradient(135deg, ${c.color}33, ${c.color}11)`,
                border: `1px solid ${c.color}55`,
              }}
            >
              <c.icon className="h-6 w-6" style={{ color: c.color }} />
            </div>
            <h3 className="text-xl font-semibold font-display">{c.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
            <div
              className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
            />
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

function TiltCard({
  children,
  delay,
  color,
}: {
  children: React.ReactNode;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative glass rounded-2xl p-6 pb-8 transition-shadow"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px -20px ${color}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {children}
    </motion.div>
  );
}
