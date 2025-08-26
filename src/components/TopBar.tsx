"use client";

import ThemeSwitcher from "@/components/ThemeToggle";
import { TopBarIcon } from "./TopBarIcon";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TopBarMenu } from "./TopBarMenu";
import { TopBarItem } from "./TopBarItem";

export function TopBar() {
    return (
        <div className="w-full h-10 flex items-center justify-end pt-2">
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
    );
}