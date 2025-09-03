import { ReactNode } from "react";

interface TopBarItemProps {
    children: ReactNode;
}

export function TopBarItem({ children }: TopBarItemProps) {
    return <div className="px-3 py-3 first:pl-0 last:pr-0">{children}</div>;
}