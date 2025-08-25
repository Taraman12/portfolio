import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
