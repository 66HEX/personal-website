"use client";

import Image from "next/image";

import { Briefcase, Share2, UserRound} from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import {useEffect, useRef} from "react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import { experience, socialLinks } from "@/app/data/aboutData"

export default function AboutMePage() {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const cleanupFunctions = buttonRefs.current.map(ref => {
            if (ref) {
                return initializeButtonAnimation({
                    buttonRef: ref
                });
            }
            return () => {};
        });

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, []);

    return (
        <section className="w-screen text-text-white relative">
            <div className="px-4 lg:px-24 py-24">
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-8">
                            <OuterCard>
                                <div className="flex justify-between items-start mb-8">
                                    <IconCard className="w-fit h-fit">
                                        <UserRound className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <div className="flex">
                                        <Badge>
                                            Profile
                                        </Badge>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-col gap-8">
                                        <div
                                            className="flex flex-col md:flex-row gap-2 md:gap-4 pb-4 border-b border-line">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                    Name:
                                                </span>
                                                <span className="text-sm font-[500] tracking-tight text-text-gray">
                                                Marek Jóźwiak
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                    Focus Area:
                                                </span>
                                                <span className="text-sm font-[500] tracking-tight text-text-gray">
                                                    Front-end Development
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <span
                                                className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                Description:
                                            </span>
                                            <span
                                                className="text-sm font-[500] tracking-tight leading-relaxed text-text-gray">
                                                I'm an emerging front-end developer with a passion for crafting engaging
                                                web experiences. Over the past 1.5 years, I've immersed myself in modern
                                                web development, focusing on React.js and Next.js ecosystems. My journey
                                                in tech is driven by a constant desire to learn and grow, turning creative
                                                concepts into clean, functional, and visually appealing interfaces.
                                            </span>
                                            <span
                                                className="text-sm font-[500] tracking-tight leading-relaxed text-text-gray">
                                                While my commercial experience spans several successful projects, I
                                                approach each new challenge with enthusiasm and dedication. I've worked
                                                with TypeScript, Tailwind CSS, and various modern development tools,
                                                consistently focusing on writing clean, maintainable code. My rapid growth in
                                                the field demonstrates my ability to quickly adapt to new technologies and
                                                deliver quality results in dynamic environments.
                                            </span>
                                            <span
                                                className="text-sm font-[500] tracking-tight leading-relaxed text-text-gray">
                                                I'm deeply committed to expanding my skillset and staying current with
                                                frontend development trends. My dedication to continuous learning drives
                                                me to explore new technologies and best practices, while my attention to
                                                detail ensures high-quality deliverables. I approach each project as an
                                                opportunity to both contribute value and enhance my expertise in creating
                                                exceptional web experiences.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </OuterCard>
                        </div>

                        <div className="col-span-1 md:col-span-4 order-first md:order-last">
                            <div
                                className="relative w-full min-h-[400px] h-full rounded-outer-card overflow-hidden">
                                <Image
                                    src="/images/about-photo.webp"
                                    alt="About Me Image"
                                    fill={true}
                                    priority={true}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-8">
                            <OuterCard>
                                <div className="flex justify-between items-start mb-8">
                                    <IconCard
                                        className="w-fit h-fit">
                                        <Briefcase className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <Badge>
                                        Experience
                                    </Badge>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {experience.map((exp, index) => (
                                        <div key={index}
                                             className="flex justify-between items-start pb-6 border-b border-line last:border-0 last:pb-0">
                                            <div>
                                                <h3 className="text-lg font-[750] tracking-tight leading-none mb-2">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm font-[500] tracking-tight text-text-gray">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-[500] tracking-tight mb-2">
                                                    {exp.period}
                                                </p>
                                                <span
                                                    className="px-2 py-1 text-xs md:text-sm font-[500] bg-white/[0.025] border border-border-inner rounded-full">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </OuterCard>
                        </div>

                        <div className="col-span-1 md:col-span-4 h-full">
                            <OuterCard>
                                <div className="flex justify-between items-start mb-8">
                                    <IconCard
                                        className="w-fit h-fit">
                                        <Share2 className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <Badge>
                                        Socials
                                    </Badge>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {socialLinks.map((link, index) => {
                                            const handleClick = () => {
                                                window.open(link.href, '_blank', 'noopener,noreferrer');
                                            };

                                            return (
                                                <button
                                                    key={index}
                                                    onClick={handleClick}
                                                    ref={el => buttonRefs.current[index] = el}
                                                    className="group flex items-center justify-center gap-3 p-3 bg-icon border border-border-inner rounded-icon"
                                                >
                                                    <link.icon className="w-5 h-5"/>
                                                    <span
                                                        className="text-sm font-[500] tracking-tight text-text-white">
                                                        {link.label}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="text-xs text-text-gray text-center">
                                        Feel free to reach out through any of these channels
                                    </div>
                                </div>
                            </OuterCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}