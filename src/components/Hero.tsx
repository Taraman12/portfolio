"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { Item } from "./Item"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


export default function Hero() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="grid items-center gap-8 md:grid-cols-3">
                    {/* Left: Profile image */}
                    <div className="order-0 md:order-none md:col-span-1 flex justify-center">
                        <div className="relative aspect-square xs:overflow-hidden rounded-full shadow-lg w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72">
                            <Image
                                src={`${prefix}/Fabian_Kochsiek_round.png`}
                                alt="Portrait"
                                fill
                                priority
                                className="object-cover"
                                style={{ transform: "scale(1.01)" }}
                            />
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="md:col-span-2 space-y-6 md:space-y-8 text-center md:text-left">
                        {/* Headline */}
                        <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-6xl">
                            Hey, I'm <span className="text-primary">Fabian👋</span>
                        </h1>

                        {/* Meta row: Role (filled badge) + Location (plain link) */}
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 font-medium text-lg sm:text-xl lg:text-3xl">
                            <span className="inline-flex items-center gap-2">
                                AI Engineer
                            </span>
                            <span
                                aria-hidden
                                className="md:inline-block h-5 w-px bg-neutral-300 dark:bg-neutral-700 "
                            />
                            <span className="inline-flex items-center gap-2">
                                Frankfurt Main
                            </span>
                        </div>

                        {/* Key Skills */}
                        <div className="space-y-2">
                            <h2 className="font-bold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase text-xs sm:text-sm">
                                Key Skills
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1.5 sm:gap-2">
                                <Item>Python</Item>
                                <Item>Data Science</Item>
                                <Item>Machine Learning</Item>
                                <Item>Deep Learning</Item>
                                <Item>Computer Vision</Item>
                                <Item>GenAI</Item>
                                <Item>AI-Agents</Item>
                                <Item>API Development</Item>
                                <Item>Remote Sensing</Item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}