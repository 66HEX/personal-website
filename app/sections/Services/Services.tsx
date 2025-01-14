"use client";

import { services } from "@/app/data/servicesData";
import { ReactNode } from "react";
import { Hammer } from "lucide-react";

interface ServiceProps {
    icon: ReactNode;
    shortDescription: string;
    title: string;
    description: string;
    features?: string[];
}

interface ServiceCardProps {
    service: ServiceProps;
    className?: string;
}

const ServiceCard = ({ service, className = "" }: ServiceCardProps) => {
    return (
        <div

            className={`group bg-white/[0.025] border border-white/5 rounded-custom p-4 md:p-8 flex flex-col ${className}`}
        >
            <div className="flex justify-between items-start mb-8">
                <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                    {service.icon}
                </div>
                <div className="px-3 py-1 font-[400] text-xs text-textGray bg-white/[0.025] border border-white/5 rounded-full">
                    {service.shortDescription}
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-[750] tracking-tight leading-none mb-4">
                    {service.title}
                </h3>

                <p className="text-sm font-[400] tracking-tight text-textGray leading-relaxed mb-6">
                    {service.description}
                </p>

                {service.features && (
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-[400] bg-white/[0.025] border border-white/5 rounded-full"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Services() {
    return (
        <section className="px-4 lg:px-24 py-12 lg:py-24 text-white">
            <div className="bg-white/5 border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                        <Hammer className="w-8 h-8 text-white"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 font-[400] text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                            Services
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6 xl:gap-8">
                    <ServiceCard
                        service={services[0]}
                        className="md:col-span-1 md:row-span-1"
                    />

                    <ServiceCard
                        service={services[1]}
                        className="md:col-span-1 md:row-span-1"
                    />

                    <ServiceCard
                        service={services[2]}
                        className="md:col-span-1 md:row-span-1"
                    />

                    <ServiceCard
                        service={services[3]}
                        className="md:col-span-1 md:row-span-1"
                    />

                    <ServiceCard
                        service={services[4]}
                        className="md:col-span-1 md:row-span-1"
                    />
                </div>
            </div>
        </section>
    );
}