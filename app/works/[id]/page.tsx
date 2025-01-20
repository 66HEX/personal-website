"use client";

import { notFound } from "next/navigation";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import { ExternalLink, Instagram, Github, Facebook, Mail, File } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import Button, { ButtonVariant } from "@/app/components/Button/button";

const socialIcons = {
    instagram: Instagram,
    github: Github,
    facebook: Facebook,
    email: Mail
};

export default function WorkDetailsPage({ params }: { params: { id: string } }) {
    const project = works.find((work) => work.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <section className="w-screen text-text-white relative">
            <div className="px-4 lg:px-24 py-24">
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-8">
                            <OuterCard>
                                <div className="flex justify-between items-start mb-8">
                                    <IconCard className="w-fit h-fit">
                                        <File className="w-8 h-8 text-text-white"/>
                                    </IconCard>
                                    <div className="flex items-end gap-4">
                                        <Badge>
                                            {project.type}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 pb-4 border-b border-line">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                Client:
                                            </span>
                                            <span className="text-sm font-[500] tracking-tight text-text-gray">
                                                {project.client}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                Year:
                                            </span>
                                            <span className="text-sm font-[500] tracking-tight text-text-gray">
                                                {project.year}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                                Role:
                                            </span>
                                            <span className="text-sm ont-[400] tracking-tight text-text-gray">
                                                {project.role}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
                                            Description:
                                        </span>
                                        {project.description.map((desc, index) => (
                                            <span key={index} className="text-sm font-[500] tracking-tight leading-relaxed text-text-gray">
                                                {desc}
                                            </span>
                                        ))}

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-2">
                                                {project.clientContact && Object.entries(project.clientContact).map(([platform, link]) => {
                                                    if (platform === 'website') return null;
                                                    const SocialIcon = socialIcons[platform as keyof typeof socialIcons];

                                                    return (
                                                        <Button
                                                            key={platform}
                                                            variant={ButtonVariant.Works}
                                                            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                                                        >
                                                            <SocialIcon className="w-5 h-5"/>
                                                        </Button>
                                                    );
                                                })}
                                            </div>
                                            {project.liveLink && (
                                                <Button
                                                    variant={ButtonVariant.Works}
                                                    onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
                                                >
                                                    <span className="text-sm font-[500] tracking-tight text-text-white">
                                                        Visit Website
                                                    </span>
                                                    <ExternalLink className="w-5 h-5 text-text-gray"/>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </OuterCard>
                        </div>

                        <div className="col-span-1 md:col-span-4 order-first md:order-last">
                            <div className="relative w-full min-h-[400px] h-full rounded-outer-card overflow-hidden">
                                <Image
                                    src={project.mainImage}
                                    alt="Project Image"
                                    fill={true}
                                    priority={true}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {project.images?.map((image, index) => (
                            <div
                                key={index}
                                className="col-span-1 md:col-span-6 relative w-full h-auto rounded-outer-card overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt={`Project Image ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}