'use client';

import { useState, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { works } from "@/app/data/worksData";
import {useGSAP} from "@gsap/react";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWorks() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

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
    }, [activeIndex]);

    return (
        <div
            className="w-screen px-4 lg:px-8 py-8 lg:py-24 bg-offwhitebackground text-offblacktext">
            <div className="w-full flex flex-row justify-between items-end">
                <h1 className="text-2xl lg:text-5xl font-Lausanne750 uppercase tracking-tight leading-none mb-8">
                    Selected Works
                    <sup className="text-xs md:text-sm tracking-normal align-top">(03)</sup>
                </h1>
               <div className="text-sm font-Lausanne300 mb-4 tracking-tight leading-none">
                   <TransitionLink href={"/works"}>
                       <AnimatedLink>
                           View All
                       </AnimatedLink>
                   </TransitionLink>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {works
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

        </div>
    );
}
