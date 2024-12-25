"use client";

import { gsap } from "gsap";

export const initializeTestimonialsAnimation = (
    contentRef: HTMLDivElement | null,
    testimonialsData: any[],
    cardWidthCalculator: () => number,
    spacingCalculator: () => number
) => {
    if (!contentRef) return;

    const cardWidth = cardWidthCalculator() + spacingCalculator();
    const offset = testimonialsData.length * cardWidth;

    gsap.set(contentRef, { x: -offset });
};

export const scrollTestimonialsAnimation = async (
    contentRef: HTMLDivElement | null,
    direction: 'left' | 'right',
    animating: React.MutableRefObject<boolean>,
    cardWidthCalculator: () => number,
    spacingCalculator: () => number,
    testimonialsData: any[]
) => {
    if (!contentRef || animating.current) return;

    animating.current = true;
    const cardWidth = cardWidthCalculator() + spacingCalculator();
    const totalWidth = cardWidth * testimonialsData.length;
    const currentX = gsap.getProperty(contentRef, "x") as number;

    await gsap.to(contentRef, {
        x: currentX + (direction === 'right' ? -cardWidth : cardWidth),
        duration: 0.75,
        ease: "power3.out",
        force3D: true,
        onComplete: () => {
            const newX = gsap.getProperty(contentRef, "x") as number;

            if (direction === 'right' && newX <= -(totalWidth * 2)) {
                gsap.set(contentRef, { x: newX + totalWidth });
            } else if (direction === 'left' && newX >= -totalWidth) {
                gsap.set(contentRef, { x: newX - totalWidth });
            }

            animating.current = false;
        }
    });
};
