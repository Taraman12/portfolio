"use client";

import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeToggle";
import { TopBarIcon } from "./TopBarIcon";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { TopBarResume } from "./TopBarResume";
import { TopBarItem } from "./TopBarItem";

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
];

const socialItems = [
    { Icon: FiGithub, href: "https://github.com/taraman12", label: "GitHub Profile" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/fabian-kochsiek/", label: "LinkedIn Profile" },
    { Icon: FiMail, href: "mailto:Fabian.Kochsiek@gmail.com", label: "Send Email" },
];

export function TopBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    function closeMenu() {
        setMobileOpen(false);
    }

    return (
        <div className="w-full dark:bg-neutral-900 bg-gray-50 border-b border-transparent dark:border-neutral-800">
            {/* main bar */}
            <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-4">
                {/* Left: Nav (desktop) */}
                <nav className="hidden md:flex items-center mr-auto" aria-label="Primary">
                    {navItems.map(item => (
                        <TopBarItem key={item.href}>
                            <a
                                href={item.href}
                                className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                            >
                                {item.label}
                            </a>
                        </TopBarItem>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden mr-auto">
                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav"
                        onClick={() => setMobileOpen(o => !o)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Right: Actions (desktop) */}
                <div className="hidden md:flex items-center">
                    <TopBarItem>
                        <TopBarResume />
                    </TopBarItem>
                    {socialItems.map(s => (
                        <TopBarItem key={s.href}>
                            <TopBarIcon Icon={s.Icon} href={s.href} label={s.label} />
                        </TopBarItem>
                    ))}
                    <TopBarItem>
                        <ThemeSwitcher />
                    </TopBarItem>
                </div>

                {/* Right: Condensed actions (mobile) */}
                <div className="flex md:hidden items-center gap-2">
                    <TopBarResume />
                    {/* Optional: keep just Theme + overflow menu (TopBarMenu could hold extra actions) */}
                    <ThemeSwitcher />
                </div>
            </div>

            {/* Mobile dropdown panel */}
            <div
                id="mobile-nav"
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="mx-auto w-full max-w-5xl px-4 pb-4 space-y-4">
                    <div className="flex flex-col gap-1 pt-2" role="menu" aria-label="Mobile Primary Navigation">
                        {navItems.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="rounded px-2 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-neutral-800/80 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div className="pt-2 border-t border-slate-200 dark:border-neutral-800">
                        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">Connect</p>
                        <div className="flex items-center gap-3">
                            {socialItems.map(s => (
                                <TopBarIcon key={s.href} Icon={s.Icon} href={s.href} label={s.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}