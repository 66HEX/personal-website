"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/app/utils/gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateProjectImages = (
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

export const animatePageContent = (worksRef: HTMLElement | null) => {
    if (!worksRef) return;

    const elements = gsap.utils.toArray(".project-container");
    const childSplit = new SplitText(worksRef, { type: "lines" });
    new SplitText(worksRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden pt-1",
    });
    const works = childSplit.lines;

    const tl = gsap.timeline();

    tl.fromTo(
        works,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
        elements,
        { opacity: 0, y: 25, visibility: "hidden" },
        {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 0.5,
            ease: "sine.out",
            stagger: 0.1,
        },
        "<"
    );

    return () => {
        tl.kill();
    };
};