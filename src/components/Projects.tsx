import { Github } from "lucide-react";
import { Card } from "./ui/Card";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
    {
        title: "Solar park detection",
        description:
            "Python project which leverages various libraries like PyTorch, Numpy and GeoPandas to continuously detect solar parks in freely available satellite imagery from Sentinel-2 via an API from ESA. Detected solar parks are stored via FastAPI in a PostgreSQL database and the data can be inspected in a Vue.js based frontend. The Tools runs with Docker autonomously in the AWS Cloud",
        imageSrc: `${prefix}/images/solar-park-project.webp`,
        imageAlt: "Solar Park Detection Project",
        href: "https://github.com", // Replace with your project's GitHub URL
        icon: <MdOutlineSatelliteAlt size={32} />,
    },
    {
        title: "Spotify Mining",
        description:
            "Python project which analyses music tracks from Spotify regarding their popularity",
        imageSrc: `${prefix}/images/spotify-mining-project.webp`,
        imageAlt: "Spotify Mining Project",
        href: "https://github.com", // Replace with your project's GitHub URL
        icon: <IoMusicalNotesOutline size={32} />,
    },
];

export default function Projects() {
    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <Card
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                imageAlt={project.imageAlt}
                                icon={project.icon}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}