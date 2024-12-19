"use client";

import { gsap } from "gsap";
import { SplitText } from "@/app/utils/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    titleRef: HTMLHeadingElement | null;
    subtitleRef: HTMLHeadingElement | null;
    clientRef: HTMLHeadingElement | null;
    yearRef: HTMLHeadingElement | null;
    typeRef: HTMLHeadingElement | null;
    imageRef: HTMLElement | null;
}

export const animateWorkDetails = (refs: AnimationRefs) => {
    const { titleRef, subtitleRef, clientRef, yearRef, typeRef, imageRef } = refs;

    // Create split text instances
    const childSplit1 = new SplitText(titleRef, { type: "lines" });
    const childSplit2 = new SplitText(subtitleRef, { type: "lines" });
    const childSplit3 = new SplitText(clientRef, { type: "lines" });
    const childSplit4 = new SplitText(yearRef, { type: "lines" });
    const childSplit5 = new SplitText(typeRef, { type: "lines" });

    // Apply line wrapper classes
    new SplitText(titleRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden pb-1",
    });
    new SplitText(subtitleRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(clientRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(yearRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(typeRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });

    // Get split lines
    const title = childSplit1.lines;
    const subtitle = childSplit2.lines;
    const client = childSplit3.lines;
    const year = childSplit4.lines;
    const type = childSplit5.lines;

    const tl = gsap.timeline();

    // Animate text elements
    tl.fromTo(
        title,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
        subtitle,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<"
    );
    tl.fromTo(
        client,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<"
    );
    tl.fromTo(
        year,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<"
    );
    tl.fromTo(
        type,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<"
    );
    tl.fromTo(
        imageRef,
        { opacity: 0, scale: 1.1, visibility: "hidden" },
        { opacity: 1, scale: 1, visibility: "visible", duration: 1, ease: "power3.out" },
        "<"
    );

    return () => {
        tl.kill();
    };
};