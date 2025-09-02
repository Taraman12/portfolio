import { subExperienceSchema } from "@/lib/schemas";
import Link from "next/link";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

interface Props {
    experience: z.infer<typeof subExperienceSchema>;
}

export default function SubTimelineItem({ experience }: Props) {
    const { name, href, logo, description } = experience;

    return (
        <li className="relative ml-10 py-4">
            <Link
                href={href}
                target="_blank"
                className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
            >
                <Avatar className="size-12 border">
                    <AvatarImage
                        src={logo}
                        alt={name}
                        className="bg-background object-contain"
                    />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
            </Link>
            <div className="flex flex-1 flex-col justify-start gap-1">
                <h2 className="font-semibold leading-none">{name}</h2>
                {description && (
                    <ul className="ml-4 list-outside list-disc">
                        {description.map((desc, i) => (
                            <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                                {desc}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
}