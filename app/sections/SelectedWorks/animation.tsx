"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProjectImage = (
    imageRefs: (HTMLImageElement | null)[],
    activeIndex: number | null
) => {
    imageRefs.forEach((image, index) => {
        if (image) {
            if (index === activeIndex) {
                gsap.to(image, {
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                });
            } else {
                gsap.to(image, {
                    scale: 1.05,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        }
    });
};

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