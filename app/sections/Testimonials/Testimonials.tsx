"use client";

import { initializeTestimonialsAnimation, scrollTestimonialsAnimation } from "@/app/animations/testimonialsAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import { useRef, useLayoutEffect, useCallback, forwardRef, useImperativeHandle, useEffect, useState } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import { ChevronLeft, ChevronRight, UsersRound } from "lucide-react";

const Marquee = forwardRef((props: { onPositionChange?: (position: number) => void }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animating = useRef(false);
    const [currentPosition, setCurrentPosition] = useState(0);

    useImperativeHandle(ref, () => ({
        scrollTestimonials: (direction: 'left' | 'right') => {
            scrollTestimonials(direction);
        }
    }));

    const getSpacing = () => (window.innerWidth >= 1280 ? 32 : 16);

    const getVisibleCards = () => {
        if (window.innerWidth >= 1280) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const calculateCardWidth = () => {
        if (!container.current) return 0;
        const containerWidth = container.current.clientWidth;
        const spacing = getSpacing();
        const visibleCards = getVisibleCards();
        const totalSpacing = spacing * (visibleCards - 1);
        return (containerWidth - totalSpacing) / visibleCards;
    };

    const initializeCards = () => {
        if (!contentRef.current) return;

        const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];

        contentRef.current.innerHTML = items.map((testimonial, index) => {
            const refId = `card-${index}`;
            return `
                <div 
                    id="${refId}" 
                    class="testimonial-card flex-shrink-0 group overflow-hidden" 
                    style="width: ${calculateCardWidth()}px">
                    <div class="relative h-full bg-white/[0.025] border border-white/5 rounded-custom overflow-hidden">               
                        <div class="relative flex flex-col h-full p-4 md:p-8">
                            <div class="flex justify-between items-start mb-6 xl:mb-8">
                                <div class="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                                    </svg>
                                </div> 
                                <div class="flex items-end gap-4">
                                    <div
                                        class="px-3 py-1 font-[400] text-xs text-textGray bg-white/[0.025] border border-white/5 rounded-full">
                                        Testimonial
                                    </div>
                                </div>
                            </div>                       
                            <p class="text-sm font-[400] tracking-tight text-textGray leading-relaxed mb-8">${testimonial.text}</p>
                            
                            <div class="mt-auto flex items-center gap-4">
                                <div class="relative">
                                    <div class="w-14 h-14 rounded-lg border border-white/5 overflow-hidden">
                                        <img src="${testimonial.src}" alt="${testimonial.author}" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p class="font-[750]  md:text-lg text-white">${testimonial.author}</p>
                                    <p class="text-xs text-textGray font-[400]">${testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        initializeTestimonialsAnimation(contentRef.current, testimonialsData, calculateCardWidth, getSpacing);
    };

    useLayoutEffect(() => {
        if (!container.current || !contentRef.current) return;

        initializeCards();
        setCurrentPosition(0);

        const handleResize = () => {
            initializeCards();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollTestimonials = useCallback((direction: 'left' | 'right') => {
        if (animating.current) return;

        const newPosition = direction === 'right'
            ? (currentPosition + 1) % testimonialsData.length
            : (currentPosition - 1 + testimonialsData.length) % testimonialsData.length;

        scrollTestimonialsAnimation(contentRef.current, direction, animating, calculateCardWidth, getSpacing, testimonialsData);

        setCurrentPosition(newPosition);
        props.onPositionChange?.(newPosition);
    }, [currentPosition, props.onPositionChange]);

    return (
        <div ref={container} className="overflow-hidden">
            <div ref={contentRef} className="flex space-x-4 xl:space-x-8">
            </div>
        </div>
    );
});

Marquee.displayName = 'Marquee';

const Testimonials: React.FC = () => {
    const marqueRef = useRef<any>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);
    const [currentPosition, setCurrentPosition] = useState(0);

    const handleScroll = (direction: 'left' | 'right') => {
        if (marqueRef.current?.scrollTestimonials) {
            marqueRef.current.scrollTestimonials(direction);
        }
    };

    const handleDotClick = (index: number) => {
        if (index === currentPosition) return;

        // Calculate how many steps we need to take
        const stepsNeeded = Math.abs(index - currentPosition);
        const shouldGoRight = index > currentPosition;

        // Create array of steps and execute them sequentially
        Array.from({ length: stepsNeeded }).forEach((_, i) => {
            setTimeout(() => {
                handleScroll(shouldGoRight ? 'right' : 'left');
            }, i * 500); // 500ms matches our animation duration
        });
    };

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current,
            buttonRef2: buttonRef2.current
        });

        return cleanup;
    }, []);

    return (
        <section id="testimonials" className="w-screen text-white px-4 lg:px-24 py-12 lg:py-24 flex flex-col justify-center items-start relative">
            <div
                className="w-full h-full relative bg-white/5 border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                <div className="flex items-start justify-between w-full mb-6 xl:mb-8">
                    <div className="p-2 bg-white/[0.025] border border-white/5 rounded-lg">
                        <UsersRound className="w-8 h-8 text-white"/>
                    </div>
                    <div
                        className="px-3 py-1 font-[400] text-xs text-white bg-white/[0.025] border border-white/5 rounded-full">
                        Testimonials
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 overflow-hidden rounded-custom">
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
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/20 hover:bg-white/40'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <button
                            ref={buttonRef}
                            onClick={() => handleScroll('left')}
                            className="p-2 bg-white/[0.025] border border-white/5 rounded-lg"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-6 h-6"/>
                        </button>
                        <button
                            ref={buttonRef2}
                            onClick={() => handleScroll('right')}
                            className="p-2 bg-white/[0.025] border border-white/5 rounded-lg"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;