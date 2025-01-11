"use client";

import { notFound } from "next/navigation";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWorkDetails } from "@/app/animations/worksDetailsAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";

export default function WorkDetailsPage({ params }: { params: { id: string } }) {
    const project = works.find((work) => work.id === params.id);

    if (!project) {
        notFound();
    }

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const clientRef = useRef<HTMLHeadingElement>(null);
    const typeRef = useRef<HTMLHeadingElement>(null);
    const descriptionTitleRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef(null);
    const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useGSAP(() => {
        return animateWorkDetails({
            titleRef: titleRef.current,
            descriptionRef: descriptionRefs.current,
            clientRef: clientRef.current,
            typeRef: typeRef.current,
            imageRef: imageRef.current,
            descriptionTitleRef: descriptionTitleRef.current
        });
    }, []);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current
        });

        return cleanup;
    }, []);

    return (
        <section className="w-screen text-white relative">
            <div className="px-4 lg:px-24 pt-12 mb-24 lg:py-24">
                <div className="flex items-center justify-between w-full mb-8">
                    <h1
                        ref={titleRef}
                        style={{ visibility: "hidden" }}
                        className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none"
                    >
                        {project.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Image */}
                    <div className="col-span-1">
                        <div className="relative flex flex-grow w-full h-full rounded-custom overflow-hidden border border-white/5">
                            <Image
                                ref={imageRef}
                                src={project.mainImage}
                                alt="Project Image"
                                layout="intrinsic"
                                priority={true}
                                width={2000}
                                height={1500}
                                className="object-cover"
                                style={{visibility: "hidden"}}
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="col-span-1 flex flex-col gap-8">
                        {/* Info Box */}
                        <div className="bg-white/[0.025] border border-white/5 rounded-custom p-6 xl:p-8 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-8">
                                <div
                                    ref={clientRef}
                                    style={{visibility: "hidden"}}
                                    className="col-span-1 flex flex-col gap-2"
                                >
                                    <p className="text-sm md:text-xl font-[750] tracking-tight leading-none uppercase">
                                        Client
                                    </p>
                                    <p className="text-sm md:text-xl font-[400] tracking-tight leading-none text-white/50">
                                        {project.client}
                                    </p>
                                </div>
                                <div
                                    ref={typeRef}
                                    style={{ visibility: "hidden" }}
                                    className="col-span-1 flex flex-col gap-2"
                                >
                                    <p className="text-sm md:text-xl font-[750] tracking-tight leading-none uppercase">
                                        Type
                                    </p>
                                    <p className="text-sm md:text-xl font-[400] tracking-tight leading-none text-white/50">
                                        {project.type[0]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Description Box */}
                        <div className="bg-white/[0.025] border border-white/5 rounded-custom p-6 xl:p-8 backdrop-blur-sm">
                            <h2
                                ref={descriptionTitleRef}
                                style={{visibility: "hidden"}}
                                className="text-xl font-[750] tracking-tight leading-none uppercase mb-4">
                                Description
                            </h2>
                            <div className="flex flex-col gap-8">
                                {project.description.map((desc, index) => (
                                    <p
                                        key={index}
                                        ref={(el) => (descriptionRefs.current[index] = el)}
                                        style={{visibility: "hidden"}}
                                        className="text-sm md:text-lg font-[400] tracking-tight text-white/50 leading-relaxed"
                                    >
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Additional Images */}
                {project.images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {project.images.map((image, index) => (
                            <div key={index} className="relative w-full h-auto rounded-custom overflow-hidden border border-white/5">
                                <Image
                                    src={image}
                                    alt={`Project Image ${index + 1}`}
                                    layout="intrinsic"
                                    width={1000}
                                    height={500}
                                    className="object-cover w-full"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}