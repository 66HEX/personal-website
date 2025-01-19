"use client";

import { ReactNode } from "react";
import InnerCard from "@/app/components/InnerCard/innerCard";
import IconCardSmall from "@/app/components/IconCardSmall/iconCardSmall";
import BadgeSmall from "@/app/components/BadgeSmall/badgeSmall";

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
                    <IconCardSmall>
                        {service.icon}
                    </IconCardSmall>
                    <BadgeSmall>
                        {service.shortDescription}
                    </BadgeSmall>
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
                                    <BadgeSmall
                                        key={index}>
                                        {feature}
                                    </BadgeSmall>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </InnerCard>
    );
};

export default ServiceCard;
