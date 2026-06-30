import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { HeroOrbs } from "./Effects";
import { ROLES } from "./data";
import profileImg from "@/assets/profile.png";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), 2000);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) => (del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 10 });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-20 bg-mesh">
      <HeroOrbs />
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Sparkles className="h-4 w-4 text-[#a855f7]" /> Hey, I'm
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
          >
            Bhanu Prakash <br />
            <span className="text-gradient">Peddi</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-5 h-8 text-xl sm:text-2xl font-medium text-foreground/90"
          >
            <span className="text-[#06b6d4]">{role}</span>
            <span className="inline-block w-[2px] h-6 bg-[#06b6d4] ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            I am a fresher seeking opportunities to build scalable, user-centric web
            applications and AI/ML models with modern technologies. Passionate about clean
            code, continuous learning, and solving complex problems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white shadow-lg shadow-[#a855f7]/30 hover:shadow-[#a855f7]/60 hover:scale-[1.03] transition-all"
            >
              Let's Connect
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium border border-border glass hover:bg-white/5 hover:scale-[1.03] transition-all"
            >
              View Projects
            </a>
            <a
              href="/Latest_resume.pdf"
              download="Bhanu_Prakash_Peddi_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium border border-border glass hover:bg-white/5 hover:scale-[1.03] hover:border-[#10b981]/50 hover:text-[#10b981] transition-all"
            >
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <a
              href="https://linkedin.com/in/bhanu-prakash-peddi"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-[#06b6d4] hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/bhanuprakashpeddi-1432"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-[#a855f7] hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto -mt-100 lg:-mt-50"
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative h-[24rem] w-[24rem] sm:h-[35rem] sm:w-[35rem] lg:h-[42rem] lg:w-[42rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={profileImg}
              alt="Bhanu Prakash Peddi"
              width={896}
              height={896}
              className="h-full w-full object-contain drop-shadow-2xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-strong rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-sm whitespace-nowrap"
            >
              <span className="relative grid place-items-center h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
