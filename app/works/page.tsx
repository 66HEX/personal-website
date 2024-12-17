"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/app/utils/gsap/SplitText";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";


gsap.registerPlugin(ScrollTrigger, SplitText);

const formatId = (id: string): string => id.padStart(2, "0");

export default function WorksPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const worksRef = useRef(null);

    useGSAP(() => {
        imageRefs.current.forEach((image, index) => {
            if (image) {
                if (index === activeIndex) {
                    gsap.to(image, {
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to(image, {
                        scale: 1.05,
                        duration: 1,
                        ease: "power3.out",
                    });
                }
            }
        });
    }, [activeIndex, viewMode]);



    useGSAP(() => {
        const elements = gsap.utils.toArray(".project-container");
        const childSplit = new SplitText(worksRef.current, { type: "lines" });
        new SplitText(worksRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden pt-1",
        });
        const works = childSplit.lines;

        const tl = gsap.timeline();

        tl.fromTo(
            works,
            { y: "100%", visibility: "hidden" },
            { y: "0%",visibility: "visible", duration: 1, ease: "power3.out" }
        );
        tl.fromTo(
            elements,
            { opacity: 0, y: 25, visibility: "hidden" },
            {
                opacity: 1,
                y: 0,
                visibility: "visible",
                duration: 0.5,
                ease: "sine.out",
                stagger: 0.1,
            },
            "<"
        );
    }, [viewMode]);

    return (
        <div
            className="w-screen min-h-svh bg-offwhitebackground text-black font-Lausanne500">
            <div className="w-full h-[30vh] flex justify-between items-end px-4 lg:px-8">
                <h1 style={{visibility: "hidden"}} ref={worksRef}
                    className="text-2xl lg:text-5xl font-Lausanne750 uppercase tracking-tight leading-none pb-8">
                    All Works
                    <sup className="text-xs md:text-sm tracking-normal align-top">
                        ({String(works.length).padStart(2, "0")})
                    </sup>
                </h1>

                <div className="flex text-sm items-center gap-2 font-Lausanne300 uppercase tracking-tight leading-none pb-4">
                    <button
                        onClick={() => setViewMode("list")}
                        className={` ${viewMode === "list" ? "opacity-50" : ""}`}
                    >
                        List
                    </button>
                    <span>/</span>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={` ${viewMode === "grid" ? "opacity-50" : ""}`}
                    >
                        Grid
                    </button>
                </div>
            </div>

            {viewMode === "list" ? (
                <div className="px-4 lg:px-8 pb-16 grid grid-cols-1">
                    <hr className="border border-black opacity-10 mb-4 lg:mb-8"/>
                    {works.map((project, index) => (
                        <TransitionLink key={project.id} href={`/works/${project.id}`}>
                            <div style={{visibility: "hidden"}} className="project-container cursor-pointer">
                                <div className="grid grid-cols-5 md:grid-cols-6 gap-4  tracking-tight leading-none">
                                    <div
                                        className="col-span-1 text-2xl md:text-5xl font-Lausanne300 justify-start items-center opacity-50 hidden md:flex">
                                        <p>{formatId(project.id)}</p>
                                    </div>
                                    <div className="col-span-4 lg:col-span-3 flex justify-start items-center">
                                        <p className="text-2xl md:text-5xl font-Lausanne750 opacity-50">{project.title}</p>
                                    </div>
                                    <div
                                        className="col-span-1 text-sm md:text-xl font-Lausanne300 hidden lg:flex justify-start items-center opacity-50">
                                        {project.type.join(" / ")}
                                    </div>
                                    <div
                                        className="col-span-1 text-sm md:text-xl font-Lausanne300 flex justify-end items-center opacity-50">
                                        <p>{project.year}</p>
                                    </div>
                                </div>
                                {index < works.length - 1 &&
                                    <hr className="border border-black opacity-10 my-4 lg:my-8"/>}
                            </div>
                        </TransitionLink>
                    ))}

                </div>
            ) : (
                <div className="px-4 lg:px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {works.map((project, index) => (
                        <div
                            style={{visibility: "hidden"}}
                            key={project.id}
                            className="relative overflow-hidden project-container"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <TransitionLink href={`/works/${project.id}`}>
                                <div className="relative overflow-hidden w-full">
                                    <div className="relative w-full h-auto">
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

                                </div>
                            </TransitionLink>
                            <div
                                className="flex text-offblacktext mt-4 mb-8 gap-4 text-sm md:text-xl font-Lausanne300 tracking-tight leading-none">
                                <p className="">{project.title}</p>
                                <p className="opacity-50">
                                    {project.type.join(" / ")}
                                </p>
                                <p className="opacity-50">
                                    {project.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}