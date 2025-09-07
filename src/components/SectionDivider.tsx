import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
    children: React.ReactNode;
    className?: string;
}

const SectionDivider: React.FC<DividerProps> = ({ children, className }) => {
    return (
        <h2
            className={cn(
                "w-full text-center text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl p-8",
                className
            )}
        >
            {children}
        </h2>
    );
};

export default SectionDivider;