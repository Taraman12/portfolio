import { ReactNode } from "react";

interface ItemProps {
    children: ReactNode;
}

export function Item({ children }: ItemProps) {
    return <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border border-neutral-200 dark:border-neutral-800 rounded-2xl px-3 py-1.5 w-fit hover:bg-neutral-100 dark:hover:bg-neutral-800">{children}</div>;
}