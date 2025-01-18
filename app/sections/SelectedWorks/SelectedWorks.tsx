'use client';

import { useRef, useEffect } from "react";
import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";
import { File, Folder} from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import OuterCard from "@/app/components/OuterCard/outerCard";
import InnerCard from "@/app/components/InnerCard/innerCard";


export default function SelectedWorks() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current
        });

        return cleanup;
    }, []);

    return (
        <section className="w-screen px-4 lg:px-24 py-12 lg:py-24 text-text-white relative">
            <OuterCard>
                <div className="flex items-center justify-between w-full mb-4">
                    <div className="flex w-full justify-between items-start">
                        <div className="p-2 bg-icon border border-border-inner rounded-xl">
                            <Folder className="w-8 h-8 text-text-white"/>
                        </div>
                        <div
                            className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                            Selected Works
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                    <h2
                        className="text-3xl sm:text-5xl font-[750] tracking-tight mb-4 lg:mb-6">
                        Featured projects
                        <br/>
                        <span
                            className="bg-gradient-to-r from-text-white to-text-gray text-transparent bg-clip-text">and achievements</span>
                    </h2>
                    <p className="text-base font-[500] tracking-tight text-text-gray leading-relaxed">
                        Showcasing selected web applications and interfaces built with modern technologies,
                        demonstrating
                        creativity and technical expertise in real-world projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {works.slice(0, 3).map((project, index) => (
                        <TransitionLink
                            key={project.id}
                            href={`/works/${project.id}`}
                            className="group"
                        >
                            <InnerCard
                                className="relative">
                                <div className="relative flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-icon border border-border-inner rounded-icon-small">
                                            <File className="w-5 h-5 text-text-white"/>
                                        </div>
                                        <div
                                            className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                                            {project.type}
                                        </div>
                                    </div>

                                    <div
                                        className="relative w-full rounded-outer-card overflow-hidden mb-6"
                                    >
                                        <Image
                                            src={project.mainImage}
                                            alt={project.title}
                                            width={1000}
                                            height={1000}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-[750] tracking-tight leading-none mb-4 text-text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-[500] tracking-tight text-text-gray leading-relaxed">
                                            {project.description[0].split('.')[0]}.
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.liveLink && (
                                                <div
                                                    className="px-3 py-1 text-xs font-[500] bg-green-500/10 border border-green-500/20 text-green-500 rounded-full">
                                                    Live Project
                                                </div>
                                            )}
                                            <div
                                                className="px-3 py-1 text-xs font-[500] bg-icon border border-border-inner rounded-full">
                                                {project.client}
                                            </div>
                                            <div
                                                className="px-3 py-1 text-xs font-[500] bg-icon border border-border-inner rounded-full">
                                                {project.year}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InnerCard>
                        </TransitionLink>
                    ))}
                </div>
            </OuterCard>
        </section>
    );
}