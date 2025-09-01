"use client";


import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { Item } from "./Item";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="grid items-center gap-8 md:grid-cols-3">
                    {/* Left: Profile image */}
                    <div className="order-0 md:order-none md:col-span-1 flex justify-center">
                        <div className="relative aspect-square w-72 h-72 overflow-hidden rounded-full shadow-lg">
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
                        className="md:col-span-2 space-y-4"
                    >
                        {/* Headline */}
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Hey, I'm <span className="text-primary">Fabian👋</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border border-neutral-200 dark:border-neutral-800 rounded-2xl px-3 py-1.5 w-fit hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <LuBrainCircuit /> AI Engineer @ CGI
                        </div>

                        {/* Subhead: location with clickable icon */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <Link
                                href="https://www.google.com/maps?q=Frankfurt+am+Main%2C+Germany"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            >
                                <FiMapPin className="shrink-0 text-base group-hover:scale-110 transition" aria-hidden />
                                <span>Frankfurt Main, Germany</span>
                            </Link>
                        </div>

                        <h2 className="flex flex-wrap items-center text-gray-500 text-xl font-extrabold tracking-tight sm:text-xl lg:text-xl"> Key Skills</h2>
                        {/* Key Skills */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Item>Python</Item>
                            <Item>Data Science</Item>
                            <Item>Machine Learning</Item>
                            <Item>Deep Learning</Item>
                            <Item>GenAI</Item>
                            <Item>AI-Agents</Item>
                            <Item>API Development</Item>
                            <Item>Remote Sensing</Item>
                            <Item>Image Segmentation</Item>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}