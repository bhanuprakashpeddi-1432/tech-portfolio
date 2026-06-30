import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress, CustomCursor } from "@/components/portfolio/Effects";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";

import { Profiles } from "@/components/portfolio/Profiles";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { ChatWidget } from "@/components/portfolio/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhanu Prakash Peddi | Full-Stack Developer & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Bhanu Prakash Peddi — Full-Stack Developer, AI/ML Engineer, and Problem Solver. Explore projects, skills, and certifications.",
      },
      { property: "og:title", content: "Bhanu Prakash Peddi | Full-Stack Developer & AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Bhanu Prakash Peddi — Full-Stack Developer, AI/ML Engineer, and Problem Solver.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="noise min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster position="bottom-center" theme="dark" />
    </div>
  );
}
