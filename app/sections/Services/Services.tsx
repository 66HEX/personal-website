"use client";

import { services } from "@/app/data/servicesData";
import { Hammer } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import ServiceCard from "@/app/components/ServiceCard/serviceCard";
import GradientHeader from "@/app/components/GradientHeader/gradientHeader";

export default function Services() {
    return (
        <section className="px-4 lg:px-24 py-12 lg:py-24 text-text-white relative">
            <OuterCard>
                <div className="flex justify-between items-start mb-6 md:mb-0">
                    <IconCard>
                        <Hammer className="w-8 h-8 text-text-white"/>
                    </IconCard>
                    <div className="flex items-center gap-4">
                        <Badge>
                            Services
                        </Badge>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                    <GradientHeader
                        normalText="Building modern web"
                        gradientText="experiences"
                    />
                    <p className="text-base font-[400] tracking-tight text-text-gray leading-relaxed">
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