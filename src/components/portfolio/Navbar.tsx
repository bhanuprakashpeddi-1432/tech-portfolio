import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-[90] transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
        <div className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] font-display font-bold text-white shadow-lg shadow-[#a855f7]/40">
              BP
            </span>
            <span className="hidden sm:inline font-display font-semibold text-gradient">
              Bhanu Prakash
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Bhanu_Prakash_Peddi_Resume.pdf"
              className="hidden sm:inline-flex relative items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border border-[#a855f7]/50 text-foreground hover:bg-[#a855f7]/10 transition-all hover:shadow-[0_0_24px_-4px_#a855f7]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm ${active === l.id ? "bg-[#a855f7]/15 text-foreground" : "text-muted-foreground"}`}
              >
                {l.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download="Bhanu_Prakash_Peddi_Resume.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
