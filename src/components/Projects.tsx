import { Card } from "./ui/Card";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
    {
        title: "Solar park detection",
        description:
            "Fullstack application, detecting solar parks in satellite images using deep learning, running in the cloud",
        imageSrc: `${prefix}/32UMD_679_2018-7-27.webp`,
        imageAlt: "Solar Park Detection Project",
        href: "https://github.com/Taraman12/Solarpark-detection",
        icon: <MdOutlineSatelliteAlt size={32} />,
    },
    {
        title: "Spotify Mining",
        description:
            "Analyses music tracks from Spotify regarding their popularity, leveraging machine learning",
        imageSrc: `${prefix}/Correlation_matrix_features.webp`,
        imageAlt: "Spotify Mining Project",
        href: "https://github.com/Taraman12/Spotify-Mining",
        icon: <IoMusicalNotesOutline size={32} />,
    }
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