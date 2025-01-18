"use client";

import { services } from "@/app/data/servicesData";
import { ReactNode } from "react";
import { Hammer } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import InnerCard from "@/app/components/InnerCard/innerCard";

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
        <InnerCard

            className={`group ${className}`}
        >
            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-2 bg-icon border border-border-inner rounded-icon-small">
                        {service.icon}
                    </div>
                    <div
                        className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                        {service.shortDescription}
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-[750] tracking-tight leading-none mb-4">
                        {service.title}
                    </h3>

                    <p className="text-sm font-[500] tracking-tight text-text-gray leading-relaxed mb-6">
                        {service.description}
                    </p>

                    {service.features && (
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-[500] bg-icon border border-border-inner rounded-full"
                                    >
                                    {feature}
                                </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </InnerCard>
    );
};

export default function Services() {
    return (
        <section className="px-4 lg:px-24 py-12 lg:py-24 text-text-white relative">
            <OuterCard>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-icon border border-border-inner rounded-icon">
                        <Hammer className="w-8 h-8 text-text-white"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                            Services
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                    <h2
                        className="text-3xl sm:text-5xl font-[750] tracking-tight mb-4 lg:mb-6">
                        Building modern web
                        <br/>
                        <span
                            className="bg-gradient-to-r from-text-white to-text-gray text-transparent bg-clip-text">experiences</span>
                    </h2>
                    <p className="text-base font-[500] tracking-tight text-text-gray leading-relaxed">
                        Crafting responsive and intuitive user interfaces with React ecosystem, focused on performance
                        and accessibility to deliver engaging web applications
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6 xl:gap-8">
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
            </OuterCard>
        </section>
);
}