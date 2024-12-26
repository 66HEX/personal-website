"use client";

import { useRef, useState } from "react";
import { services } from "@/app/data/servicesData";
import { animateAccordion } from "@/app/animations/servicesAnimation";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const arrowRefs = useRef<(SVGSVGElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        const isOpen = activeIndex === index;
        setActiveIndex(isOpen ? null : index);

        animateAccordion(index, isOpen, {
            detailsRefs: detailsRefs.current,
            arrowRefs: arrowRefs.current,
        });
    };

    return (
        <div className="w-screen text-white lg:mb-24">
            <div className="w-full flex justify-between items-end px-4 lg:px-24 pt-12 md:pt-24">
                <h1 className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none mb-8 flex">
                    Services
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                        ({String(services.length).padStart(2, "0")})
                    </sup>
                </h1>
            </div>
            <div className="px-4 lg:px-24 pb-24 grid grid-cols-1">
                <hr className="border border-white/10 mb-4 lg:mb-8" />
                {services.map((service, index) => (
                    <div key={service.id}>
                        <div
                            className="service-container cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex justify-between gap-8 tracking-tight leading-none">
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-2xl lg:text-5xl font-[750] opacity-50">
                                        {service.title}
                                    </p>
                                </div>
                                <div>
                                    <svg
                                        ref={(el) => (arrowRefs.current[index] = el)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 md:w-10 md:h-10 opacity-50"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={(el) => (detailsRefs.current[index] = el)}
                            className="overflow-hidden h-0"
                        >
                            <p className="text-sm md:text-xl font-[300] opacity-50 mt-4">
                                {service.description}
                            </p>
                        </div>
                        {index < services.length - 1 && (
                            <hr className="border border-white/10 my-4 lg:my-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}