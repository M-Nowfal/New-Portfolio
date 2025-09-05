import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LocateToTop } from "@/components/locateToTop";
import { Projects } from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-svh">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <LocateToTop />
    </main>
  );
};
