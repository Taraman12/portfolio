"use client";

import { IconType } from "react-icons";

interface TopBarButtonProps {
    Icon: IconType;
    label: string;
    href?: string;
    onClick?: () => void;
    download?: boolean | string;
    ariaLabel?: string;
}

export function TopBarButton({ Icon, label, href, onClick, download, ariaLabel }: TopBarButtonProps) {
    const commonProps = {
        "aria-label": ariaLabel || label,
        className: "inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium transition bg-gray-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        onClick,
    };

    const content = (
        <>
            <Icon />
            {label}
        </>
    );

    if (href) {
        return (
            <a href={href} download={download} {...commonProps}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" {...commonProps}>
            {content}
        </button>
    );
}