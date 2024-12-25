"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "0"
    );

    tl.fromTo(
        elements,
        { opacity: 0, y: 25, visibility: "hidden" },
        {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
        },
        "0.3"
    );

    return () => {
        tl.kill();
    };
};