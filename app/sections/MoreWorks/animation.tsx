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