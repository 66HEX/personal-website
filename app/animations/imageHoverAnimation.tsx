"use client";

import { gsap } from "gsap";

export const animateProjectImage = (
    imageRefs: (HTMLImageElement | null)[],
    activeIndex: number | null
) => {
    imageRefs.forEach((image, index) => {
        if (!image) return;

        if (activeIndex === null) {
            gsap.to(image, {
                scale: 1.05,
                duration: 1,
                ease: "power3.out",
                overwrite: true
            });
        } else if (index === activeIndex) {
            gsap.to(image, {
                scale: 1,
                duration: 1,
                ease: "power3.out",
                overwrite: true
            });
        }
    });
};