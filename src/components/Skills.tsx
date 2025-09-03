// app/components/Skills.tsx
"use client";

import { IconType } from "react-icons";
import {
    // Fullstack
    SiTypescript, SiNodedotjs, SiPython, SiJavascript, SiHtml5, SiCss3, SiGnubash, SiRstudioide,
    // Frameworks
    SiFastapi, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiGeopandas, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
    // Cloud & DevOps
    SiAmazonwebservices, SiLinux, SiDocker, SiGithubactions,
    // Management / tools
    SiJira, SiConfluence,
} from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { VscAzure, VscAzureDevops, VscGithub } from "react-icons/vsc";
type Skill = { name: string; Icon: IconType; color: string; href?: string, invertInDarkMode?: boolean };

const fullstack: Skill[] = [
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Html5", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
    { name: "R", Icon: SiRstudioide, color: "#276DC3" },
    { name: "SQL", Icon: TbSql, color: "#F29111" },
    { name: "VBA", Icon: PiMicrosoftExcelLogo, color: "#217346" },

];

const frameworks: Skill[] = [
    { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-Learn", Icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", Icon: SiNumpy, color: "#013243" },
    { name: "Pandas", Icon: SiPandas, color: "#150458" },
    { name: "GeoPandas", Icon: SiGeopandas, color: "#2E8B57" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000", invertInDarkMode: true },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Vue", Icon: SiVuedotjs, color: "#41B883" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },

];

const devops: Skill[] = [
    { name: "Azure", Icon: VscAzure, color: "#0078D4" },
    { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "GitHub Actions", Icon: SiGithubactions, color: "#181717", invertInDarkMode: true },
    { name: "Linux", Icon: SiLinux, color: "#FCC624" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
];

const management: Skill[] = [
    { name: "Azure DevOps", Icon: VscAzureDevops, color: "#0078D4" },
    { name: "GitHub", Icon: VscGithub, color: "#181717", invertInDarkMode: true },
    { name: "Jira", Icon: SiJira, color: "#2684FF" },
    { name: "Confluence", Icon: SiConfluence, color: "#172B4D" },
];

function SkillCard({ title, items }: { title: string; items: Skill[] }) {
    return (
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow p-6">
            <h3 className="text-xl font-semibold text-center">{title}</h3>

            <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {items.map(({ name, Icon, color, href, invertInDarkMode }) => (
                    <li key={name}>
                        <a
                            href={href || "#"}
                            aria-label={name}
                            className="group inline-flex flex-col items-center justify-center p-1 hover:scale-105 transition-transform"
                        >
                            <Icon className={cn("h-10 w-10", invertInDarkMode && "dark:invert")} style={{ color }} />
                            <span className="mt-2 text-xs text-center text-gray-50 dark:text-neutral-900 transition-colors duration-150 group-hover:text-black dark:group-hover:text-gray-50">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="w-full">
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <SkillCard
                        title="Fullstack"
                        items={fullstack}
                    />
                    <SkillCard
                        title="Frameworks"
                        items={frameworks}
                    />
                    <SkillCard
                        title="Cloud & DevOps"
                        items={devops}
                    />
                    <SkillCard
                        title="Management"
                        items={management}
                    />
                </div>
            </div>
        </section>
    );
}
