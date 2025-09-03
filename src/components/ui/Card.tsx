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
    ({ className, icon, imageSrc, imageAlt, title, description, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    // Stretch rows so the image fills the full column height
                    "grid grid-cols-2 items-stretch overflow-hidden rounded-3xl border border-neutral-200 shadow dark:border-neutral-800",
                    className,
                )}
                {...props}
            >
                {/* Left: image fills exactly 1/3 */}
                <div className="relative col-span-1">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 33vw, 100vw"
                        priority={false}
                    />
                </div>

                {/* Right: content */}
                <div className="col-span-1 p-6 flex flex-col items-center text-center">
                    <div className="mb-6 flex justify-center">{icon}</div>
                    <h3 className="text-md font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        );
    },
);
Card.displayName = "Card";

export { Card };