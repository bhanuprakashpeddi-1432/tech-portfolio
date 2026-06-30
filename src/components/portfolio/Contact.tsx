import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Section } from "./Section";

const SERVICE_ID = "service_rsmcrh6";
const TEMPLATE_ID = "template_6ncz4fr";
const PUBLIC_KEY = "2ZF_fH7yO9nJqn7jC";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch {
      toast.error("Couldn't send right now. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <InfoCard icon={Mail} title="Email" value="bhanuprakashpeddi5@gmail.com" href="mailto:bhanuprakashpeddi5@gmail.com" color="#a855f7" />
          <InfoCard icon={Phone} title="Phone" value="+91 9121086544" href="tel:+919121086544" color="#06b6d4" />
          <InfoCard icon={MapPin} title="Location" value="Vijayawada, India" color="#f59e0b" />

          <div className="glass rounded-2xl p-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Find me on</p>
              <div className="mt-2 flex gap-2">
                <a href="https://linkedin.com/in/bhanu-prakash-peddi" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-[#06b6d4] hover:scale-110 transition-all"><Linkedin className="h-4 w-4" /></a>
                <a href="https://github.com/bhanuprakashpeddi-1432" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-[#a855f7] hover:scale-110 transition-all"><Github className="h-4 w-4" /></a>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download="Bhanu_Prakash_Peddi_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white shadow-lg shadow-[#a855f7]/30 hover:scale-[1.03] transition-all"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 sm:p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <Field name="subject" label="Subject" required />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-white/[0.04] border border-border focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/30 outline-none px-4 py-3 text-sm transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white shadow-lg shadow-[#a855f7]/30 hover:shadow-[#a855f7]/60 hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100 transition-all"
          >
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-white/[0.04] border border-border focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/30 outline-none px-4 py-3 text-sm transition-all"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon, title, value, href, color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string; value: string; href?: string; color: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      className="glass rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform"
    >
      <div
        className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
        style={{ background: `${color}22`, border: `1px solid ${color}55` }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </Wrap>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Bhanuprakash Peddi. All rights reserved.
        </p>
        <div className="flex gap-2">
          <a href="https://linkedin.com/in/bhanu-prakash-peddi" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[#06b6d4]"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/bhanuprakashpeddi-1432" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[#a855f7]"><Github className="h-4 w-4" /></a>
          <a href="mailto:bhanuprakashpeddi5@gmail.com" className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[#f59e0b]"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
