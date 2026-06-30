import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { id: number; role: "user" | "bot"; text: string; time: string };

const REPLIES: { match: RegExp; reply: string }[] = [
  { match: /hi|hello|hey/i, reply: "Hey there! 👋 I'm Bhanu's assistant. Ask me about his skills, projects, or how to get in touch." },
  { match: /about|who|yourself/i, reply: "Bhanu Prakash Peddi is a full-stack developer & AI/ML engineer from Vijayawada, India. He builds scalable web apps and ML solutions." },
  { match: /skill|tech|stack/i, reply: "Stack: React, Next.js, Node.js, Java/Spring Boot, FastAPI, Python (PyTorch, TensorFlow, scikit-learn), MongoDB, SQL, AWS, GCP." },
  { match: /project|work/i, reply: "Featured: Grievance Management System (MERN + Socket.io). Also: Inventory dashboard, Course management, SaaS landing, WebRTC object detection, and more — scroll up to the Projects section!" },
  { match: /contact|email|reach|hire/i, reply: "📧 bhanuprakashpeddi5@gmail.com · 📱 +91 9121086544 · or use the contact form below." },
  { match: /resume|cv/i, reply: "You can grab the resume from the top-right of the page." },
  { match: /cert|achiev/i, reply: "Completed: FullStackOpen (Helsinki), Red Hat App Developer, MongoDB Developer. In progress: GCP Associate Engineer & AWS Cloud Practitioner." },
];

function botReply(text: string) {
  const m = REPLIES.find((r) => r.match.test(text));
  return m?.reply ?? "Good question! Try asking about Bhanu's skills, projects, certifications, or how to contact him.";
}

const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 1, role: "bot", text: "Hi! 👋 I'm Bhanu's chat assistant. How can I help?", time: now() },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { id: Date.now(), role: "user", text, time: now() };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { id: Date.now() + 1, role: "bot", text: botReply(text), time: now() }]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[95] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#a855f7] to-[#06b6d4] text-white shadow-lg shadow-[#a855f7]/50"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-6 z-[95] w-[calc(100vw-3rem)] sm:w-[360px] h-[480px] glass-strong rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="px-4 py-3 border-b border-border flex items-center gap-3 bg-gradient-to-r from-[#a855f7]/20 to-[#06b6d4]/20">
              <div className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#a855f7] to-[#06b6d4] text-white text-xs font-bold">
                BP
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-background" />
              </div>
              <div>
                <p className="text-sm font-semibold">Bhanu's Assistant</p>
                <p className="text-xs text-emerald-300">Online</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-[#a855f7] to-[#06b6d4] text-white rounded-br-sm"
                          : "glass rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 px-1">{m.time}</span>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/60"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={send} className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 rounded-xl bg-white/[0.05] border border-border focus:border-[#a855f7] outline-none px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] text-white hover:scale-105 transition-transform"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
