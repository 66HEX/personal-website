"use client";

import { gsap } from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    titleRef: HTMLHeadingElement | null;
    subtitleRef: HTMLHeadingElement | null;
    clientRef: HTMLHeadingElement | null;
    yearRef: HTMLHeadingElement | null;
    typeRef: HTMLHeadingElement | null;
    imageRef: HTMLElement | null;
    descriptionRef: (HTMLParagraphElement | null)[];
    buttonRef: HTMLButtonElement | null;
}

export const animateWorkDetails = (refs: AnimationRefs) => {
    const { titleRef, subtitleRef, clientRef, yearRef, typeRef, imageRef, descriptionRef } = refs;

    const childSplit1 = new SplitText(titleRef, { type: "lines" });
    const childSplit2 = new SplitText(subtitleRef, { type: "lines" });
    const childSplit3 = new SplitText(clientRef, { type: "lines" });
    const childSplit4 = new SplitText(yearRef, { type: "lines" });
    const childSplit5 = new SplitText(typeRef, { type: "lines" });
    const childSplit6 = new SplitText(descriptionRef, { type: "lines" });

    new SplitText(titleRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
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
    new SplitText(descriptionRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });

    const title = childSplit1.lines;
    const subtitle = childSplit2.lines;
    const client = childSplit3.lines;
    const year = childSplit4.lines;
    const type = childSplit5.lines;
    const description = childSplit6.lines;

    const tl = gsap.timeline();

    tl.fromTo(
        title,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        subtitle,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        client,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        year,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        type,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        imageRef,
        { opacity: 0, scale: 1.1, visibility: "hidden" },
        { opacity: 1, scale: 1, visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );
    tl.fromTo(
        description,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    return () => {
        tl.kill();
    };
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