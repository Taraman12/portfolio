"use client";

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            {resolvedTheme === "dark" ? (
                <SunIcon className="size-5" />
            ) : (
                <MoonIcon className="size-5" />
            )}
            <span className="sr-only">Theme Toggle</span>
        </button>
    );
}