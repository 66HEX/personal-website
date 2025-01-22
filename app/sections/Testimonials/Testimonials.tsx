"use client";

import { useRef, useState } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import { ChevronLeft, ChevronRight, UsersRound } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import Marquee from "@/app/components/Marquee/marquee";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import GradientHeader from "@/app/components/GradientHeader/gradientHeader";
import Button, { ButtonVariant } from "@/app/components/Button/button";

const Testimonials: React.FC = () => {
    const marqueRef = useRef<any>(null);
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

    return (
        <section id="testimonials" className="w-screen text-text-white px-4 lg:px-24 py-12 lg:py-24 flex flex-col justify-center items-start relative">
            <div className="w-full h-full">
                <OuterCard>
                    <div className="flex items-start justify-between w-full mb-6 md:mb-0">
                        <IconCard >
                            <UsersRound className="w-8 h-8 text-text-white"/>
                        </IconCard>
                        <Badge>
                            Testimonials
                        </Badge>
                    </div>
                    <div className="max-w-2xl mx-auto mb-12 text-center tracking-tight">
                        <GradientHeader
                            normalText="Client stories"
                            gradientText="and feedback"
                        />
                        <p className="text-base font-[400] tracking-tight text-text-gray leading-relaxed">
                            Exploring collaboration experiences and project outcomes through the perspective of clients,
                            highlighting successful partnerships and delivered value
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4">
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
                            <Button
                                variant={ButtonVariant.Testimonial}
                                onClick={() => handleScroll('left')}
                                aria-label="Previous testimonials"
                            >
                                <ChevronLeft className="w-6 h-6"/>
                            </Button>
                            <Button
                                variant={ButtonVariant.Testimonial}
                                onClick={() => handleScroll('right')}
                                aria-label="Next testimonials"
                            >
                                <ChevronRight className="w-6 h-6"/>
                            </Button>
                        </div>
                    </div>
                </OuterCard>
            </div>
        </section>
    );
};

export default Testimonials;