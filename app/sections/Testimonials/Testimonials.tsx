"use client";

import { initializeTestimonialsAnimation, scrollTestimonialsAnimation } from "@/app/animations/testimonialsAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import { useRef, useLayoutEffect, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const Marquee = forwardRef((props, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animating = useRef(false);

    useImperativeHandle(ref, () => ({
        scrollTestimonials: (direction: 'left' | 'right') => {
            scrollTestimonials(direction);
        }
    }));

    const getSpacing = () => window.innerWidth >= 1280 ? 32 : 16;

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
        contentRef.current.innerHTML = items.map((testimonial, index) => `
            <div class="testimonial-card flex-shrink-0 group" style="width: ${calculateCardWidth()}px">
                <div class="relative h-full bg-white/[0.025] border border-white/5 rounded-custom overflow-hidden backdrop-blur-sm">               
                    <div class="relative flex flex-col h-full p-6 xl:p-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mb-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
                        
                        <p class="text-sm md:text-base font-[500] text-white/80 mb-8">"${testimonial.text}"</p>
                        
                        <div class="mt-auto flex items-center gap-4">
                            <div class="relative">
                                <div class="w-14 h-14 rounded-full border border-white/5 overflow-hidden">
                                    <img src="${testimonial.src}" alt="${testimonial.author}" class="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <p class="font-[750] text-base md:text-lg text-white">${testimonial.author}</p>
                                <p class="text-sm text-white/50 font-[500]">${testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        initializeTestimonialsAnimation(contentRef.current, testimonialsData, calculateCardWidth, getSpacing);
    };

    useLayoutEffect(() => {
        if (!container.current || !contentRef.current) return;

        initializeCards();

        const handleResize = () => {
            initializeCards();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollTestimonials = useCallback((direction: 'left' | 'right') => {
        scrollTestimonialsAnimation(contentRef.current, direction, animating, calculateCardWidth, getSpacing, testimonialsData);
    }, []);

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

    const handleScroll = (direction: 'left' | 'right') => {
        if (marqueRef.current?.scrollTestimonials) {
            marqueRef.current.scrollTestimonials(direction);
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
        <section id="testimonials" className="w-screen text-white px-4 lg:px-24 pt-12 mb-24 lg:py-24 flex flex-col justify-center items-start relative">
            <BackgroundOverlay/>
            <div className="flex items-center justify-between w-full mb-8">
                <h1 className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none">
                    Testimonials
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                        ({String(testimonialsData.length ).padStart(2, "0")})
                    </sup>
                </h1>
                <div className="flex gap-2">
                    <button
                        ref={buttonRef}
                        onClick={() => handleScroll('left')}
                        className="p-2 bg-white/[0.025] border border-white/5 rounded-full"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-6 h-6"/>
                    </button>
                    <button
                        ref={buttonRef2}
                        onClick={() => handleScroll('right')}
                        className="p-2 bg-white/[0.025] border border-white/5 rounded-full"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 overflow-hidden">
                <Marquee ref={marqueRef}/>
            </div>
        </section>
    );
};

export default Testimonials;
