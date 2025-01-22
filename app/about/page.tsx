"use client";

import Image from "next/image";
import { Briefcase, Share2, UserRound} from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import Button, { ButtonVariant } from "@/app/components/Button/button";
import { experience, socialLinks, description } from "@/app/data/aboutData";

export default function AboutMePage() {
    return (
        <section className="w-screen text-text-white relative">
            <div className="px-4 lg:px-24 py-24">
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-8">
                            <OuterCard>
                                {/* Profile section content remains the same */}
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
                                                <span className="text-sm font-[400] tracking-tight text-text-gray">
                                                    Marek Jóźwiak
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                    Focus Area:
                                                </span>
                                                <span className="text-sm font-[400] tracking-tight text-text-gray">
                                                    Front-end Development
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {description.paragraphs.map((paragraph, index) => (
                                                <span key={index}
                                                      className="text-sm font-[400] tracking-tight leading-relaxed text-text-gray">
                                                    {paragraph}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </OuterCard>
                        </div>

                        <div className="col-span-1 md:col-span-4 order-first md:order-last">
                            <div className="relative w-full min-h-[400px] h-full rounded-outer-card overflow-hidden">
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
                                    <IconCard className="w-fit h-fit">
                                        <Briefcase className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <Badge>
                                        Experience
                                    </Badge>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {experience.map((exp, index) => (
                                        <div key={index} className="flex justify-between items-start pb-6 border-b border-line last:border-0 last:pb-0">
                                            <div>
                                                <h3 className="text-lg font-[750] tracking-tight leading-none mb-2">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm font-[400] tracking-tight text-text-gray">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-[400] tracking-tight mb-2">
                                                    {exp.period}
                                                </p>
                                                <span className="px-2 py-1 text-xs md:text-sm font-[400] bg-white/[0.025] border border-border-inner rounded-full">
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
                                    <IconCard className="w-fit h-fit">
                                        <Share2 className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <Badge>
                                        Socials
                                    </Badge>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {socialLinks.map((link, index) => (
                                            <Button
                                                key={index}
                                                variant={ButtonVariant.About}
                                                onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                                            >
                                                <link.icon className="w-5 h-5"/>
                                                <span className="text-sm font-[400] tracking-tight text-text-white">
                                                    {link.label}
                                                </span>
                                            </Button>
                                        ))}
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