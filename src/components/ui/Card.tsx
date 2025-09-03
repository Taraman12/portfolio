import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        { className, icon, imageSrc, imageAlt, title, description, ...props },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "grid h-full grid-cols-3 items-start gap-6 rounded-3xl border border-neutral-200 p-6 shadow dark:border-neutral-800",
                    className,
                )}
                {...props}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={64}
                    height={64}
                    className="col-span-1 size-16 rounded-full object-cover"
                />
                <div className="col-span-2 flex flex-col">
                    <div className="flex justify-center mb-8">{icon}</div>
                    <h3 className="text-xl font-semibold text-center">{title}</h3>
                    <p className="text-muted-foreground text-sm text-center">{description}</p>
                </div>
            </div>
        );
    },
);
Card.displayName = "Card";

export { Card };