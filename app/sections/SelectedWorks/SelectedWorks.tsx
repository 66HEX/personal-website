'use client';

import { useRef, useEffect } from "react";
import { works } from "@/app/data/worksData";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Image from "next/image";
import { File, Folder} from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import OuterCard from "@/app/components/OuterCard/outerCard";
import InnerCard from "@/app/components/InnerCard/innerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import IconCardSmall from "@/app/components/IconCardSmall/iconCardSmall";
import Badge from "@/app/components/Badge/badge";
import BadgeSmall from "@/app/components/BadgeSmall/badgeSmall";
import GradientHeader from "@/app/components/GradientHeader/gradientHeader";


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
                <div className="flex items-center justify-between w-full mb-6 md:mb-0">
                    <div className="flex w-full justify-between items-start">
                        <IconCard>
                            <Folder className="w-8 h-8 text-text-white"/>
                        </IconCard>
                        <Badge
                            className="">
                            Selected Works
                        </Badge>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                    <GradientHeader
                        normalText="Featured projects"
                        gradientText="and achievements"
                    />
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
                                        <IconCardSmall className="">
                                            <File className="w-5 h-5 text-text-white"/>
                                        </IconCardSmall>
                                        <BadgeSmall
                                            >
                                            {project.type}
                                        </BadgeSmall>
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
                                                    className="px-3 py-1 text-xs font-[500] bg-green-700/10 border border-green-600/20 text-green-600 rounded-full">
                                                    Live Project
                                                </div>
                                            )}
                                            <BadgeSmall>
                                                {project.client}
                                            </BadgeSmall>
                                            <BadgeSmall>
                                                {project.year}
                                            </BadgeSmall>
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