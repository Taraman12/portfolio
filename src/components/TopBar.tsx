"use client";

import ThemeSwitcher from "@/components/ThemeToggle";
import { TopBarIcon } from "./TopBarIcon";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TopBarMenu } from "./TopBarMenu";
import { TopBarItem } from "./TopBarItem";

export function TopBar() {
    return (
        <div className="w-full dark:bg-neutral-900 bg-gray-50">
            {/* match content edges with main container */}
            <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-4">
                {/* Navigation (left) */}
                <nav className="flex items-center mr-auto" aria-label="Primary">
                    <TopBarItem>
                        <a href="#home" className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                            Home
                        </a>
                    </TopBarItem>
                    <TopBarItem>
                        <a href="#experience" className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                            Experience
                        </a>
                    </TopBarItem>
                    <TopBarItem>
                        <a href="#tech-stack" className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                            Tech Stack
                        </a>
                    </TopBarItem>
                    <TopBarItem>
                        <a href="#projects" className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                            Projects
                        </a>
                    </TopBarItem>
                </nav>

                {/* Actions (right) */}
                <div className="flex items-center">
                    <TopBarItem>
                        <TopBarMenu />
                    </TopBarItem>
                    <TopBarItem>
                        <TopBarIcon Icon={FiGithub} href="https://github.com/taraman12" label="GitHub Profile" />
                    </TopBarItem>
                    <TopBarItem>
                        <TopBarIcon Icon={FiLinkedin} href="https://www.linkedin.com/in/fabian-kochsiek/" label="LinkedIn Profile" />
                    </TopBarItem>
                    <TopBarItem>
                        <TopBarIcon Icon={FiMail} href="mailto:Fabian.Kochsiek@gmail.com" label="Send Email" />
                    </TopBarItem>
                    <TopBarItem>
                        <ThemeSwitcher />
                    </TopBarItem>
                </div>
            </div>
        </div>
    );
}