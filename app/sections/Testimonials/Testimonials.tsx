'use client';

import { gsap } from "gsap";
import { initializeButtonAnimation } from "./animation";
import {useRef, useLayoutEffect, useCallback, forwardRef, useImperativeHandle, useEffect} from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
    text: string;
    author: string;
    role: string;
    src: string;
};

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

    const createTestimonialCard = (testimonial: Testimonial, index: number) => {
        const cardWidth = calculateCardWidth();
        return `
            <div class="testimonial-card flex-shrink-0 text-white rounded-custom bg-white/5 border border-white/20" 
                 style="width: ${cardWidth}px">
                <div class="relative flex flex-col justify-start items-start h-full p-4 xl:p-8">
                    <div class="text-left mb-auto">
                        <p class="text-sm md:text-xl font-[300] italic opacity-50">"${testimonial.text}"</p>
                    </div>
                    <div class="flex items-center mt-8 md:mt-16">
                        <div class="relative h-[60px] w-[60px] rounded-full overflow-hidden mr-4">
                            <img src="${testimonial.src}" alt="${testimonial.author}" style="object-fit: cover; width: 100%; height: 100%;" />
                        </div>
                        <div>
                            <p class="font-[750] text-sm md:text-xl">${testimonial.author}</p>
                            <p class="font-[300] text-xs opacity-50">${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    const initializeCards = () => {
        if (!contentRef.current) return;

        const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];
        contentRef.current.innerHTML = items.map((testimonial, index) =>
            createTestimonialCard(testimonial, index)
        ).join('');

        const cardWidth = calculateCardWidth() + getSpacing();
        const offset = testimonialsData.length * cardWidth;
        gsap.set(contentRef.current, { x: -offset });
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

    const scrollTestimonials = useCallback(async (direction: 'left' | 'right') => {
        if (!contentRef.current || animating.current) return;

        animating.current = true;
        const cardWidth = calculateCardWidth() + getSpacing();
        const totalWidth = cardWidth * testimonialsData.length;
        const currentX = gsap.getProperty(contentRef.current, "x") as number;

        await gsap.to(contentRef.current, {
            x: currentX + (direction === 'right' ? -cardWidth : cardWidth),
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                const newX = gsap.getProperty(contentRef.current, "x") as number;

                if (direction === 'right' && newX <= -(totalWidth * 2)) {
                    gsap.set(contentRef.current, { x: newX + totalWidth });
                } else if (direction === 'left' && newX >= -totalWidth) {
                    gsap.set(contentRef.current, { x: newX - totalWidth });
                }

                animating.current = false;
            }
        });
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


    const handleScroll = (direction: 'left' | 'right') => {
        if (marqueRef.current?.scrollTestimonials) {
            marqueRef.current.scrollTestimonials(direction);
        }
    };

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return cleanup;
    }, []);

    return (
        <section id="testimonials" className="w-screen bg-black text-white px-4 lg:px-24 py-12 lg:py-24 flex flex-col justify-center items-start">
            <div className="flex items-center justify-between w-full mb-8">
                <h1 className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none">
                    Testimonials
                    <sup className="text-xs md:text-sm tracking-normal align-top opacity-50">
                        ({String(testimonialsData.length / 2).padStart(2, "0")})
                    </sup>
                </h1>
                <div className="flex gap-2">
                    <button
                        ref={buttonRef}
                        onClick={() => handleScroll('left')}
                        className="p-2 bg-white/5 border border-white/20 rounded-full"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-6 h-6"/>
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full transition-colors"
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