"use client";

import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { Folder } from "lucide-react";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

export default function WorksPage() {
    return (
        <section className="w-screen min-h-svh text-text-white px-4 lg:px-24 py-24 relative">
            <div className="absolute inset-0">
                <BackgroundOverlay/>
            </div>
            <div
                className="w-full h-full relative bg-card-outer border border-card-border rounded-outer-card p-4 md:p-8">
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex w-full justify-between items-center">
                        <div className="p-2 bg-card-inner border border-card-border rounded-lg">
                            <Folder className="w-8 h-8 text-text-white"/>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="px-3 py-1 font-[400] text-xs text-text-white bg-card-inner border border-card-border rounded-full">
                                All Works
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-card-border"/>

                <div>
                    {works.map((project, index) => (
                        <TransitionLink key={project.id} href={`/works/${project.id}`}>
                            <div
                                className="project-container cursor-pointer">
                                <div className="grid grid-cols-1 tracking-tight py-4 md:py-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                        {/* Title and main info */}
                                        <div className="flex-grow">
                                            <p className="text-2xl md:text-5xl font-[750] text-text-gray ">
                                                {project.title}
                                            </p>
                                        </div>

                                        {/* Project metadata */}
                                        <div
                                            className="flex flex-wrap gap-2 lg:justify-end lg:flex-nowrap items-center">
                                            {project.liveLink && (
                                                <div
                                                    className="px-3 py-1 text-xs font-[400] bg-green-500/10 border border-green-500/20 text-green-500 backdrop-blur-sm rounded-full">
                                                    Live Project
                                                </div>
                                            )}
                                            <div
                                                className="hidden md:block px-3 py-1 text-xs font-[400] bg-card-inner border border-card-border rounded-full backdrop-blur-sm text-whitespace-nowrap">
                                                {project.type}
                                            </div>
                                            <div
                                                className="px-3 py-1 text-xs font-[400] bg-card-inner border border-card-border rounded-full backdrop-blur-sm text-whitespace-nowrap">
                                                View Details →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {index < works.length - 1 && <hr className="border-t border-card-border"/>}
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </section>
    );
}