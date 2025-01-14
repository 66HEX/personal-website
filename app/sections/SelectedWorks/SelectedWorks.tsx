'use client';

import { useRef, useEffect } from "react";
import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";
import {File, Folder} from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";

export default function SelectedWorks() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current
        });

        return cleanup;
    }, []);

    return (
        <section className="w-screen px-4 lg:px-24 py-12 lg:py-24 text-white relative">
            <div
                className="w-full h-full relative bg-white/5 border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex w-full justify-between items-start">
                        <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                            <Folder className="w-8 h-8 text-white"/>
                        </div>
                        <div
                            className="px-3 py-1 font-[400] text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                            Selected Works
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {works.slice(0, 4).map((project, index) => (
                        <TransitionLink
                            key={project.id}
                            href={`/works/${project.id}`}
                            className="group"
                        >
                            <div
                                className="relative h-full bg-white/[0.0125] border border-white/5 rounded-custom overflow-hidden">
                                <div className="relative flex flex-col h-full p-4 md:p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                                            <File className="w-5 h-5 text-white"/>
                                        </div>
                                        <div
                                            className="px-3 py-1 font-[400] text-xs text-textGray bg-white/[0.025] border border-white/5 rounded-full">
                                            {project.type}
                                        </div>
                                    </div>

                                    <div
                                        className="relative w-full rounded-lg border border-white/5 overflow-hidden mb-6"
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
                                        <h3 className="text-xl font-[750] tracking-tight leading-none mb-4 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-[400] tracking-tight text-textGray leading-relaxed">
                                            {project.description[0].split('.')[0]}.
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.liveLink && (
                                                <div
                                                    className="px-3 py-1 text-xs font-[400] bg-green-500/[0.025] border border-green-500/5 text-green-500 rounded-full">
                                                    Live Project
                                                </div>
                                            )}
                                            <div
                                                className="px-3 py-1 text-xs font-[400] bg-white/[0.025] border border-white/5 rounded-full">
                                                {project.client}
                                            </div>
                                            <div
                                                className="px-3 py-1 text-xs font-[400] bg-white/[0.025] border border-white/5 rounded-full">
                                                {project.year}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </section>
    );
}