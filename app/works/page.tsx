"use client";

import { useState, useRef } from "react";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { animatePageContent } from "@/app/animations/worksPageAnimation";
import { animateProjectImage } from "@/app/animations/imageHoverAnimation";

const formatId = (id: string): string => id.padStart(2, "0");

export default function WorksPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const worksRef = useRef(null);

    useGSAP(() => {
        animateProjectImage(imageRefs.current, activeIndex);
    }, [activeIndex, viewMode]);

    useGSAP(() => {
        return animatePageContent(worksRef.current);
    }, [viewMode]);

    return (
        <div className="w-screen min-h-svh bg-black text-white mb-24">
            <div className="w-full h-[30vh] flex justify-between items-end px-4 lg:px-24">
                <h1
                    style={{visibility: "hidden"}}
                    ref={worksRef}
                    className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none pb-8 flex"
                >
                    All Works
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                        ({String(works.length).padStart(2, "0")})
                    </sup>
                </h1>

                <div className="flex text-sm items-center gap-2 font-[300] uppercase tracking-tight leading-none pb-4">
                    <button
                        onClick={() => setViewMode("list")}
                        className={`${viewMode === "list" ? "opacity-50" : ""}`}
                    >
                        List
                    </button>
                    <span>/</span>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`${viewMode === "grid" ? "opacity-50" : ""}`}
                    >
                        Grid
                    </button>
                </div>
            </div>

            {viewMode === "list" ? (
                <div className="px-4 lg:px-24 pb-12 grid grid-cols-1">
                    <hr className="border border-white/20"/>
                    {works.map((project, index) => (
                        <TransitionLink key={project.id} href={`/works/${project.id}`}>
                            <div style={{visibility: "hidden"}} className="project-container cursor-pointer">
                                <div className="grid grid-cols-5 md:grid-cols-6 tracking-tight leading-none py-4 lg:py-8">
                                    <div className="col-span-1 text-2xl md:text-5xl font-[750] justify-start items-center opacity-50 hidden md:flex">
                                        <p>{formatId(project.id)}</p>
                                    </div>
                                    <div className="col-span-4 lg:col-span-3 flex justify-start items-center">
                                        <p className="text-2xl md:text-5xl font-[750] opacity-50">{project.title}</p>
                                    </div>
                                    <div className="col-span-1 text-sm md:text-base font-[300] hidden lg:flex justify-start items-center opacity-50">
                                        {project.type.join(" / ")}
                                    </div>
                                    <div className="col-span-1 text-sm md:text-base font-[300] flex justify-end items-center opacity-50">
                                        <p>{project.year}</p>
                                    </div>
                                </div>
                                {index < works.length - 1 && <hr className="border border-white/20"/>}

                            </div>
                        </TransitionLink>
                    ))}
                </div>
            ) : (
                <div className="px-4 lg:px-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    {works.map((project, index) => (
                        <div
                            style={{visibility: "hidden"}}
                            key={project.id}
                            className="relative overflow-hidden project-container rounded-custom border border-white/20"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <TransitionLink href={`/works/${project.id}`}>
                                <div className="flex flex-col">
                                    <div className="relative w-full rounded-t-custom overflow-hidden">
                                        <Image
                                            src={project.mainImage}
                                            alt={project.title}
                                            layout="intrinsic"
                                            width={1000}
                                            height={1000}
                                            priority
                                            ref={(el) => (imageRefs.current[index] = el)}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"/>
                                    <div className="absolute bottom-0 left-0 p-4 xl:p-8">
                                        <div
                                            className="flex justify-between gap-4 text-sm md:text-base tracking-tight leading-none">
                                            <p className="border border-white px-4 py-2 rounded-full font-[750]">{project.title}</p>
                                            <p className="border border-white px-4 py-2 rounded-full font-[300] opacity-50">{project.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </TransitionLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}