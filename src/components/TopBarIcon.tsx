"use client";

import { IconType } from "react-icons";
import { useEffect, useState } from "react";

interface TopBarIconProps {
    Icon: IconType;
    label: string;
    href?: string;
    onClick?: () => void;
}

export function TopBarIcon({ Icon, label, href, onClick }: TopBarIconProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const commonProps = {
        "aria-label": label,
        className:
            "inline-flex items-center text-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors",
        onClick,
    };

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                {isClient && <Icon />}
            </a>
        );
    }

    return (
        <button {...commonProps} className={`${commonProps.className} cursor-pointer`}>
            {isClient && <Icon />}
        </button>
    );
}