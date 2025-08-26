import { ReactNode } from "react";

interface TopBarItemProps {
    children: ReactNode;
}

export function TopBarItem({ children }: TopBarItemProps) {
    return <div className="p-3">{children}</div>;
}