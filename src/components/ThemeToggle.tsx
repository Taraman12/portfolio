"use client";

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { TopBarIcon } from "./TopBarIcon";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    return (
        <TopBarIcon
            Icon={isDark ? SunIcon : MoonIcon}
            label="Toggle theme"
            href=""
            onClick={() => setTheme(isDark ? "light" : "dark")}
        />
    );
}