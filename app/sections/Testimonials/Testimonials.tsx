"use client";

import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import { useRef, useEffect, useState } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import { ChevronLeft, ChevronRight, UsersRound } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import Marquee from "@/app/components/Marquee/marquee";

const Testimonials: React.FC = () => {
    const marqueRef = useRef<any>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);
    const [currentPosition, setCurrentPosition] = useState(0);

    const handleScroll = (direction: 'left' | 'right') => {
        if (marqueRef.current?.scrollTestimonials) {
            marqueRef.current.scrollTestimonials(direction);
            setCurrentPosition(prev => {
                const newPosition = direction === 'right'
                    ? (prev + 1) % testimonialsData.length
                    : (prev - 1 + testimonialsData.length) % testimonialsData.length;
                return newPosition;
            });
        }
    };

    const handleDotClick = (index: number) => {
        if (index === currentPosition) return;
        if (marqueRef.current?.toIndex) {
            marqueRef.current.toIndex(index);
            setCurrentPosition(index);
        }
    };

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current,
            buttonRef2: buttonRef2.current
        });

        return cleanup;
    }, []);

    return (
        <section id="testimonials" className="w-screen text-text-white px-4 lg:px-24 py-12 lg:py-24 flex flex-col justify-center items-start relative">
            <div className="w-full h-full">
                <OuterCard>
                    <div className="flex items-start justify-between w-full mb-4">
                        <div className="p-2 bg-icon border border-border-inner rounded-icon">
                            <UsersRound className="w-8 h-8 text-text-white"/>
                        </div>
                        <div
                            className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                            Testimonials
                        </div>
                    </div>
                    <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                        <h2
                            className="text-3xl sm:text-5xl font-[750] tracking-tight mb-4 lg:mb-6">
                            Client stories
                            <br/>
                            <span
                                className="bg-gradient-to-r from-text-white to-text-gray text-transparent bg-clip-text">and feedback</span>
                        </h2>
                        <p className="text-base font-[500] tracking-tight text-text-gray leading-relaxed">
                            Exploring collaboration experiences and project outcomes through the perspective of clients,
                            highlighting successful partnerships and delivered value
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 overflow-hidden rounded-outer-card">
                        <Marquee ref={marqueRef} onPositionChange={setCurrentPosition}/>
                    </div>
                    <div className="flex justify-between items-center mt-6 md:mt-8">
                        <div className="flex gap-2">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-2 rounded-full transition-all duration-300 
                                    ${index === currentPosition
                                        ? 'w-8 bg-text-white'
                                        : 'w-2 bg-text-white/20 hover:bg-text-white/40'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                ref={buttonRef}
                                onClick={() => handleScroll('left')}
                                className="p-2 bg-icon border border-border-inner rounded-icon"
                                aria-label="Previous testimonials"
                            >
                                <ChevronLeft className="w-6 h-6"/>
                            </button>
                            <button
                                ref={buttonRef2}
                                onClick={() => handleScroll('right')}
                                className="p-2 bg-icon border border-border-inner rounded-icon"
                                aria-label="Next testimonials"
                            >
                                <ChevronRight className="w-6 h-6"/>
                            </button>
                        </div>
                    </div>
                </OuterCard>
            </div>
        </section>
    );
};

export default Testimonials;