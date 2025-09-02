import React from "react";

interface DividerProps {
    children: React.ReactNode;
}

const SectionDivider: React.FC<DividerProps> = ({ children }) => {
    return (
        <h2 className="w-full text-center text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl pt-8">
            {children}
        </h2>
    );
};

export default SectionDivider;