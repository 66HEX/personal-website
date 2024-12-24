"use client";

import { gsap } from "gsap";

export const initializeButtonAnimation = (buttonRef: HTMLButtonElement | null) => {
    if (!buttonRef) return;

    const enterHandler = () => {
        gsap.to(buttonRef, {
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            duration: 0.25,
            ease: "power3.out",
        });
    };

    const leaveHandler = () => {
        gsap.to(buttonRef, {
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            duration: 0.25,
            ease: "power3.in",
        });
    };

    buttonRef.addEventListener('mouseenter', enterHandler);
    buttonRef.addEventListener('mouseleave', leaveHandler);

    return () => {
        buttonRef.removeEventListener('mouseenter', enterHandler);
        buttonRef.removeEventListener('mouseleave', leaveHandler);
    };
};

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
