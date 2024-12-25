'use client';

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";
import { animateProjectImage } from "@/app/animations/imageHoverAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";

export default function SelectedWorks() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useGSAP(() => {
        animateProjectImage(imageRefs.current, activeIndex);
    }, [activeIndex]);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    return (
        <div className="w-screen px-4 py-12 lg:px-24 lg:py-24 bg-black text-white">
            <div className="w-full flex flex-row justify-between items-end mb-8">
                <h1 className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none">
                    Selected Works
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">(03)</sup>
                </h1>
                <button
                    ref={buttonRef}
                    className="text-sm md:text-base font-[300] bg-white/5 border border-white/20 rounded-full tracking-tight leading-none flex justify-center items-center">
                    <TransitionLink className="h-full w-full px-4 py-2" href={"/works"}>
                        View All
                    </TransitionLink>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {works
                    .slice(0, 4)
                    .map((project, index) => (
                        <div
                            key={project.id}
                            className="relative overflow-hidden rounded-custom border border-white/20"
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
        </div>
    );
}