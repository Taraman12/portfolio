"use client";


import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="grid items-center gap-10 md:grid-cols-3">
                    {/* Left: Profile image */}
                    <div className="order-1 md:order-none md:col-span-1">
                        <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full shadow-lg">
                            <Image
                                src={`${prefix}/Fabian_Kochsiek_round.png`}
                                alt="Portrait"
                                fill
                                priority
                                className="object-cover"
                                style={{ transform: 'scale(1.01)' }}
                            />
                        </div>
                    </div>


                    {/* Right: Text content */}
                    <div
                        className="md:col-span-2 space-y-6"
                    >
                        {/* Headline */}
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Hey, I'm <span className="text-primary">Fabian👋</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border border-neutral-200 dark:border-neutral-800 rounded-2xl px-3 py-1.5 w-fit">
                            <LuBrainCircuit /> AI Engineer @ CGI
                        </div>

                        {/* Subhead: location with clickable icon */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <Link
                                href="https://www.google.com/maps?q=Frankfurt+am+Main%2C+Germany"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 transition hover:bg-neutral-100"
                            >
                                <FiMapPin className="shrink-0 text-base group-hover:scale-110 transition" aria-hidden />
                                <span>Frankfurt Main, Germany</span>
                            </Link>
                        </div>



                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href={`${prefix}/CV_Fabian_Kochsiek_En.pdf`}
                                download
                                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium transition  hover:bg-neutral-100"
                            >
                                <FiDownload /> Resume
                            </a>
                            <Link
                                href="https://github.com/taraman12" // replace
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                            >
                                <FiGithub /> GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/fabian-kochsiek/" // replace
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                            >
                                <FiLinkedin /> LinkedIn
                            </Link>
                            <Link
                                href="mailto:Fabian.Kochsiek@gmail.com"
                                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                            >
                                <FiMail /> Email
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}