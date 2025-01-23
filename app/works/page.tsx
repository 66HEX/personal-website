"use client";

import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { Folder } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import BadgeSmall from "@/app/components/BadgeSmall/badgeSmall";

export default function WorksPage() {
    return (
        <section className="w-screen min-h-svh text-text-white px-4 lg:px-24 py-24 relative">
            <OuterCard>
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex w-full justify-between items-center">
                        <IconCard>
                            <Folder className="w-8 h-8 text-text-white"/>
                        </IconCard>
                        <div className="flex items-center gap-4">
                            <Badge>
                                All Works
                            </Badge>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-icon"/>

                <div>
                    {works.map((project, index) => (
                        <TransitionLink key={project.id} href={`/works/${project.id}`}>
                            <div
                                className="project-container cursor-pointer opacity-70 hover:opacity-100 ransition-colors duration-300">
                                <div className="grid grid-cols-1 tracking-tight py-4 md:py-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                        <div className="flex-grow">
                                            <p className="text-2xl md:text-5xl font-[750] text-text-white">
                                                {project.title}
                                            </p>
                                        </div>

                                        <div
                                            className="flex flex-wrap gap-2 lg:justify-end lg:flex-nowrap items-center">
                                            {project.liveLink && (
                                                <div
                                                    className="px-3 py-1 text-xs font-[400] bg-green-700/10 border border-green-600/20 text-green-600 backdrop-blur-sm rounded-full">
                                                    Live Project
                                                </div>
                                            )}
                                            <BadgeSmall
                                                className="hidden md:block text-whitespace-nowrap">
                                                {project.type}
                                            </BadgeSmall>
                                            <BadgeSmall
                                                className="text-whitespace-nowrap">
                                                View Details →
                                            </BadgeSmall>
                                        </div>
                                    </div>
                                </div>
                                {index < works.length - 1 && <hr className="border-t border-line"/>}
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </OuterCard>
        </section>
    );
}