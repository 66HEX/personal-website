"use client";

import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { Folder } from "lucide-react";

export default function WorksPage() {
    return (
        <section className="w-screen min-h-svh text-white px-4 lg:px-24 py-24 relative">
            <div className="w-full h-full relative bg-white/[0.05] border border-white/5 rounded-custom p-4 xl:p-8">
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex w-full justify-between items-center">
                        <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                            <Folder className="w-8 h-8 text-white"/>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="px-3 py-1 font-[400] text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                                All Works
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-white/5"/>

                <div>
                    {works.map((project, index) => (
                        <TransitionLink key={project.id} href={`/works/${project.id}`}>
                            <div
                                className="project-container hover:bg-white/[0.0125] transition-all duration-300 cursor-pointer group">
                                <div className="grid grid-cols-1 tracking-tight p-6 xl:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                        {/* Title and main info */}
                                        <div className="flex-grow">
                                            <p className="text-2xl md:text-5xl font-[750] text-textGray group-hover:text-white transition-colors">
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
                                                className="hidden md:block  px-3 py-1 text-xs font-[400] bg-white/[0.025] border border-white/5 rounded-full backdrop-blur-sm whitespace-nowrap">
                                                {project.type}
                                            </div>
                                            <div
                                                className="px-3 py-1 text-xs font-[400] bg-white/[0.025] border border-white/5 rounded-full backdrop-blur-sm whitespace-nowrap">
                                                View Details →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {index < works.length - 1 && <hr className="border-t border-white/5"/>}
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </section>
    );
}