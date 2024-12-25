"use client";

import { notFound } from "next/navigation";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import {useEffect, useRef} from "react";
import { useGSAP } from "@gsap/react";
import { animateWorkDetails } from "@/app/animations/worksDetailsAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import Link from "next/link";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";

export default function WorkDetailsPage({ params }: { params: { id: string } }) {
    const project = works.find((work) => work.id === params.id);

    if (!project) {
        notFound();
    }

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const clientRef = useRef<HTMLHeadingElement>(null);
    const yearRef = useRef<HTMLHeadingElement>(null);
    const typeRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef(null);
    const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useGSAP(() => {
        return animateWorkDetails({
            titleRef: titleRef.current,
            descriptionRef: descriptionRefs.current,
            clientRef: clientRef.current,
            yearRef: yearRef.current,
            typeRef: typeRef.current,
            imageRef: imageRef.current,
        });
    }, []);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    return (
        <div>
            <div className="bg-black text-white px-4 lg:px-24 lg:pb-24">
                <div className="w-full h-[30vh] flex items-end">
                    <div className="grid grid-cols-2 w-full mb-8 gap-8">
                        <div className="col-span-2 lg:col-span-1 flex items-end">
                            <h1 style={{visibility: "hidden"}} ref={titleRef}
                                className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none">
                                {project.title}
                            </h1>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex gap-8 md:grid md:grid-cols-3">
                            <div ref={clientRef} style={{visibility: "hidden"}}
                                 className="col-span-1 flex flex-col justify-end gap-2">
                                <p className="text-sm md:text-base font-[750] tracking-tight leading-none uppercase">
                                    Client
                                </p>
                                <p className="text-sm md:text-base font-[300] tracking-tight leading-none opacity-50">
                                    {project.client}
                                </p>
                            </div>
                            <div ref={typeRef} style={{visibility: "hidden"}}
                                 className="col-span-2 md:col-span-1 flex-col justify-end flex gap-2">
                                <p className="text-sm md:text-base font-[750] tracking-tight leading-none uppercase">
                                    Services
                                </p>
                                <p className="text-sm md:text-base font-[300] tracking-tight leading-none opacity-50">
                                    {project.type.join(" / ")}
                                </p>
                            </div>
                            <div style={{visibility: "hidden"}} ref={yearRef}
                                 className="col-span-1 flex flex-col justify-end gap-2">
                                <p className="text-sm md:text-base font-[750] tracking-tight leading-none uppercase">
                                    Year
                                </p>
                                <p className="text-sm md:text-base font-[300] tracking-tight leading-none opacity-50">
                                    {project.year}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full h-full relative overflow-hidden">
                        <div className="relative w-full h-auto rounded-custom overflow-hidden border border-white/20">
                            <Image
                                ref={imageRef}
                                src={project.mainImage}
                                alt="Hero Image"
                                layout="intrinsic"
                                priority={true}
                                width={2000}
                                height={1500}
                                className="object-cover"
                                style={{visibility: "hidden"}}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-8 lg:py-24 text-sm leading-tight">
                    <div className="col-span-1 hidden md:flex">

                    </div>
                    <div className="col-span-1 flex flex-col gap-4 lg:gap-8">
                        {project.description.map((desc, index) => (
                            <p
                                className="opacity-50 text-sm md:text-xl font-[300] tracking-tight max-w-prose leading-relaxed"
                                key={index}
                                ref={(el) => (descriptionRefs.current[index] = el)} // Assign refs dynamically
                            >
                                {desc}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                    <div className="col-span-1 w-full h-full relative">
                        <div className="relative w-full h-auto rounded-custom overflow-hidden border border-white/20">
                            <Image
                                src={project.images[0]}
                                alt="Hero Image"
                                layout="intrinsic"
                                width={1000}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 w-full h-full relative">
                        <div className="relative w-full h-auto rounded-custom overflow-hidden border border-white/20">
                            <Image
                                src={project.images[1]}
                                alt="Hero Image"
                                layout="intrinsic"
                                width={1000}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <button
                    ref={buttonRef}
                    className="w-full text-sm md:text-xl font-[300] mt-8 lg:mt-12 mb-24 bg-white/5 border border-white/20 rounded-full tracking-tight leading-none flex justify-center items-center">
                    <Link
                        className="h-full w-full px-4 py-4"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AnimatedLink>
                            Visit Website
                        </AnimatedLink>
                    </Link>
                </button>

            </div>
        </div>
    );
}