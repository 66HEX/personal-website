'use client';

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { works } from "@/app/data/worksData";
import { useGSAP } from "@gsap/react";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";
import { animateProjectImage } from "./animation";

export default function SelectedWorks() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const pathname = usePathname();

    const currentId = pathname?.split("/").pop();

    useGSAP(() => {
        animateProjectImage(imageRefs.current, activeIndex);
    }, [activeIndex]);

    return (
        <div className="w-screen px-4 lg:px-24 py-8 lg:py-24 bg-offwhitebackground text-offblacktext">
            <div className="w-full flex flex-row justify-between items-end">
                <h1 className="text-2xl lg:text-5xl font-Lausanne750 uppercase mb-8 tracking-tight leading-none flex items-start">
                    More Works
                    <sup className="text-xs md:text-sm tracking-normal align-top">
                        ({String(works.length - 1).padStart(2, "0")})
                    </sup>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                {works
                    .filter(project => project.id !== currentId)
                    .slice(0, 3)
                    .map((project, index) => (
                        <div
                            key={project.id}
                            className="relative overflow-hidden"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <TransitionLink href={`/works/${project.id}`}>
                                <div className="relative overflow-hidden w-full">
                                    <div className="relative w-full h-auto rounded-custom overflow-hidden">
                                        <Image
                                            src={project.mainImage}
                                            alt={project.title}
                                            layout="intrinsic"
                                            width={1000}
                                            height={1000}
                                            ref={(el) => (imageRefs.current[index] = el)}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-custom overflow-hidden"/>
                                    <div
                                        className="absolute bottom-0 left-0 flex text-offwhitetext p-4 gap-4 text-sm md:text-xl font-Lausanne300 tracking-tight leading-none">
                                        <p className="border-2 border-offwhitetext px-4 py-2 rounded-full">{project.title}</p>
                                    </div>
                                </div>
                            </TransitionLink>
                        </div>
                    ))}
            </div>
        </div>
    );
}