
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex w-full max-w-5xl flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <SectionDivider className="pt-0">Experience</SectionDivider>
        <Experience />
        <SectionDivider>Tech Stack</SectionDivider>
        <Skills />
      </main>
    </div>
  );
}
