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
            backgroundColor: '#000000',
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const leaveHandler = () => {
        gsap.to(buttonRef, {
            color: '#000000',
            backgroundColor: 'transparent',
            duration: 0.5,
            ease: "power3.in",
        });
    };

    buttonRef.addEventListener('mouseenter', enterHandler);
    buttonRef.addEventListener('mouseleave', leaveHandler);

    // Return cleanup function
    return () => {
        buttonRef.removeEventListener('mouseenter', enterHandler);
        buttonRef.removeEventListener('mouseleave', leaveHandler);
    };
};