"use client";

import Image from "next/image";

import { Briefcase, Github, Linkedin, Instagram, Mail, Share2, UserRound} from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import {useEffect, useRef} from "react";

const experience = [
    {
        title: "Front-End Developer",
        company: "Company Name",
        period: "2023 - Present",
        type: "Full-time"
    },
    {
        title: "Web Developer",
        company: "Company Name",
        period: "2022 - 2023",
        type: "Contract"
    }
];

const socialLinks = [
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/hexthecoder/"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/"
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/66HEX"
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:hexthecoder@gmail.com"
    }
];

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
        <section className="w-screen text-white relative">
            <div className="px-4 lg:px-24 py-24">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                        <div className="col-span-1 md:col-span-8">
                            <div
                                className="bg-white/[0.05] border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-8">
                                    <div
                                        className="p-2 bg-white/[0.025] border border-white/5 rounded-lg w-fit h-fit">
                                        <UserRound className="w-8 h-8 text-white"/>
                                    </div>
                                    <div className="flex gap-4">
                                        <div
                                            className="px-3 py-1 text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                                        Profile
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 md:gap-8">
                                    <div className="flex flex-col gap-8">
                                        <div
                                            className="flex flex-col md:flex-row gap-2 md:gap-4 pb-4 border-b border-white/5">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-sm font-[750] tracking-tight leading-none text-white">
                                                    Name:
                                                </span>
                                                <span className="text-sm font-[400] tracking-tight text-textGray">
                                                Marek Jóźwiak
                                                </span>
                                            </div>
                                            <span className="text-sm hidden md:block text-white">•</span>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-sm font-[750] tracking-tight leading-none text-white">
                                                    Focus Area:
                                                </span>
                                                <span className="text-sm font-[400] tracking-tight text-textGray">
                                                    Front-end Development
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <span
                                                className="text-sm font-[750] tracking-tight leading-none text-white">
                                                Description:
                                            </span>
                                            <span className="text-sm font-[400] tracking-tight leading-relaxed text-textGray">
                                                I'm an emerging front-end developer with a passion for crafting engaging
                                                web experiences. Over the past 1.5 years, I've immersed myself in modern
                                                web development, focusing on React.js and Next.js ecosystems. My journey
                                                in tech is driven by a constant desire to learn and grow, turning creative
                                                concepts into clean, functional, and visually appealing interfaces.
                                            </span>
                                            <span className="text-sm font-[400] tracking-tight leading-relaxed text-textGray">
                                                While my commercial experience spans several successful projects, I
                                                approach each new challenge with enthusiasm and dedication. I've worked
                                                with TypeScript, Tailwind CSS, and various modern development tools,
                                                consistently focusing on writing clean, maintainable code. My rapid growth in
                                                the field demonstrates my ability to quickly adapt to new technologies and
                                                deliver quality results in dynamic environments.
                                            </span>
                                            <span className="text-sm font-[400] tracking-tight leading-relaxed text-textGray">
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
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-4 order-first md:order-last">
                            <div
                                className="relative w-full min-h-[400px] h-full rounded-custom overflow-hidden border border-white/5">
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

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                        <div className="col-span-1 md:col-span-8">
                            <div
                                className="bg-white/[0.05] border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-2 bg-white/[0.05] border border-white/5 rounded-lg w-fit h-fit">
                                        <Briefcase className="w-8 h-8 text-white"/>
                                    </div>
                                    <div
                                        className="px-3 py-1 text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                                        Experience
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {experience.map((exp, index) => (
                                        <div key={index}
                                             className="flex justify-between items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                            <div>
                                                <h3 className="text-lg font-[750] tracking-tight leading-none mb-2">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm font-[400] tracking-tight text-textGray">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-[400] tracking-tight mb-2">
                                                    {exp.period}
                                                </p>
                                                <span
                                                    className="px-2 py-1 text-xs md:text-sm font-[400] bg-white/[0.025] border border-white/5 rounded-full">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-4">
                            <div
                                className="h-full bg-white/[0.05] border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg w-fit h-fit">
                                        <Share2 className="w-8 h-8 text-white"/>
                                    </div>
                                    <div
                                        className="px-3 py-1 text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                                        Socials
                                    </div>
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
                                                    className="group flex items-center justify-center gap-3 p-3 bg-white/[0.025] border border-white/5 rounded-lg"
                                                >
                                                    <link.icon className="w-5 h-5"/>
                                                    <span
                                                        className="text-sm font-[400] tracking-tight text-white">
                                                        {link.label}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="text-xs text-textGray text-center">
                                        Feel free to reach out through any of these channels
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}