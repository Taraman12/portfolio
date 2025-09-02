// from: https://github.com/tedawf/tedawf.com/blob/main/src/components/ui/Card.tsx

import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card text-card-foreground shadow",
            className,
        )}
        {...props}
    />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";


export {
    Card,
    CardContent
};