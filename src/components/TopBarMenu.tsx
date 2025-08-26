"use client";

import { useState } from "react";
import { TopBarButton } from "./TopBarButton";
import { FiDownload, FiGlobe } from "react-icons/fi";

export function TopBarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <TopBarButton Icon={FiDownload} label="Resume" />
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max rounded-b-md p-2 flex flex-col gap-2">
                    <TopBarButton
                        Icon={FiDownload}
                        label="English"
                        href={`${prefix}/CV_Fabian_Kochsiek_En.pdf`}
                        download="CV_Fabian_Kochsiek_En.pdf"
                    />
                    <TopBarButton
                        Icon={FiDownload}
                        label="German"
                        href={`${prefix}/CV_Fabian_Kochsiek_De.pdf`}
                        download="CV_Fabian_Kochsiek_De.pdf"
                    />
                </div>
            )}
        </div>
    );
}