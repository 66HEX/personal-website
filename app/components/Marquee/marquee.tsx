"use client";

import { useRef, useLayoutEffect, forwardRef, useImperativeHandle, useState } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import horizontalLoop from '@/app/utils/horizontalLoop';
import gsap from 'gsap';
import TestimonialCard from "@/app/components/TestimonialCard/testimonialCard";

const Marquee = forwardRef((props: { onPositionChange?: (position: number) => void }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const loopInstance = useRef<gsap.core.Timeline | null>(null);
    const [cardWidth, setCardWidth] = useState(0);

    useImperativeHandle(ref, () => ({
        scrollTestimonials: (direction: 'left' | 'right') => {
            if (loopInstance.current) {
                const animationConfig = {
                    duration: 0.6,
                    ease: "power2.inOut",
                };

                if (direction === 'right') {
                    loopInstance.current.next(animationConfig);
                } else {
                    loopInstance.current.previous(animationConfig);
                }
            }
        },
        toIndex: (index: number) => {
            if (loopInstance.current) {
                loopInstance.current.toIndex(index, {
                    duration: 0.6,
                    ease: "power2.inOut"
                });
            }
        }
    }));

    const getSpacing = () => (window.innerWidth >= 1280 ? 32 : 16);

    const getVisibleCards = () => {
        if (window.innerWidth >= 1280) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const calculateCardWidth = () => {
        if (!contentRef.current) return 0;
        const containerWidth = contentRef.current.clientWidth;
        const spacing = getSpacing();
        const visibleCards = getVisibleCards();
        const totalSpacing = spacing * (visibleCards - 1);
        return (containerWidth - totalSpacing) / visibleCards;
    };

    useLayoutEffect(() => {
        if (!contentRef.current) return;

        const width = calculateCardWidth();
        setCardWidth(width);

        document.fonts.ready.then(() => {
            if (contentRef.current) {
                const cards = gsap.utils.toArray('.testimonial-card');
                loopInstance.current = horizontalLoop(cards, {
                    paused: true,
                    paddingRight: getSpacing()
                });

                if (loopInstance.current) {
                    loopInstance.current.progress(0);
                }
            }
        });

    }, []);

    const items = [...testimonialsData, ...testimonialsData, ...testimonialsData];

    return (
        <div className="overflow-hidden px-1">
            <div ref={contentRef} className="flex space-x-4 xl:space-x-8">
                {items.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                        width={cardWidth}
                        refId={`card-${index}`}
                    />
                ))}
            </div>
        </div>
    );
});

export default Marquee;

Marquee.displayName = 'Marquee';