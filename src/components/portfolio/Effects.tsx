import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[110]"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#a855f7] via-[#06b6d4] to-[#f59e0b]" />
    </motion.div>
  );
}

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tx = useSpring(x, { stiffness: 500, damping: 40 });
  const ty = useSpring(y, { stiffness: 500, damping: 40 });
  const rx = useSpring(x, { stiffness: 100, damping: 20 });
  const ry = useSpring(y, { stiffness: 100, damping: 20 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none fixed top-0 left-0 z-[200] -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-[#a855f7] mix-blend-screen shadow-[0_0_20px_#a855f7]"
      />
      <motion.div
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed top-0 left-0 z-[199] -ml-5 -mt-5 h-10 w-10 rounded-full border border-[#06b6d4]/40 mix-blend-screen"
      />
    </>
  );
}

export function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-[#a855f7]/30 blur-[120px] animate-orb" />
      <div className="absolute top-40 -right-20 h-[24rem] w-[24rem] rounded-full bg-[#06b6d4]/25 blur-[120px] animate-orb" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-[#f59e0b]/20 blur-[120px] animate-orb" style={{ animationDelay: "-8s" }} />
      <Stars />
    </div>
  );
}

function Stars() {
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 0.5,
      d: Math.random() * 4,
    }));
    setStars(arr);
  }, []);
  return (
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + s.d, repeat: Infinity, delay: s.d }}
        />
      ))}
    </div>
  );
}
