import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex w-full max-w-5xl flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Home */}
        <section id="home" className="w-full scroll-mt-24">
          <Hero />
        </section>

        {/* Experience */}
        <section id="experience" className="w-full scroll-mt-24">
          <SectionDivider className="pt-0">Experience</SectionDivider>
          <Experience />
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="w-full scroll-mt-24">
          <SectionDivider>Tech Stack</SectionDivider>
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="w-full scroll-mt-24">
          <SectionDivider>Projects</SectionDivider>
          <Projects />
        </section>
      </main>
    </div>
  );
}
