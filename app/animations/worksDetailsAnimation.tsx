"use client";

import { gsap } from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    titleRef: HTMLHeadingElement | null;

    clientRef: HTMLHeadingElement | null;
    typeRef: HTMLHeadingElement | null;
    imageRef: HTMLElement | null;
    descriptionRef: (HTMLParagraphElement | null)[];
    descriptionTitleRef: HTMLHeadingElement | null;
}

export const animateWorkDetails = (refs: AnimationRefs) => {
    const { titleRef, clientRef, typeRef, imageRef, descriptionRef, descriptionTitleRef } = refs;

    const childSplit1 = new SplitText(titleRef, { type: "lines" });
    const childSplit2 = new SplitText(clientRef, { type: "lines" });
    const childSplit4 = new SplitText(typeRef, { type: "lines" });
    const childSplit5 = new SplitText(descriptionRef, { type: "lines" });
    const childSplit6 = new SplitText(descriptionTitleRef, { type: "lines" });

    [titleRef,  clientRef, typeRef, descriptionRef, descriptionTitleRef].forEach(ref => {
        if (ref) {
            new SplitText(ref, {
                type: "lines",
                linesClass: "line-wrapper overflow-hidden",
            });
        }
    });

    const title = childSplit1.lines;
    const client = childSplit2.lines;
    const type = childSplit4.lines;
    const description = childSplit5.lines;
    const descriptionTitle = childSplit6.lines;

    const tl = gsap.timeline();

    tl.fromTo(
        imageRef,
        {
            opacity: 0,
            scale: 1.2,
            visibility: "hidden"
        },
        {
            opacity: 1,
            scale: 1,
            visibility: "visible",
            duration: 1.2,
            ease: "power2.out"
        },
        "0"
    );

    tl.fromTo(
        title,
        { y: "100%", visibility: "hidden" },
        {
            y: "0%",
            visibility: "visible",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1
        },
        "0.3"
    );


    tl.fromTo(
        client,
        { y: "20px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out"
        },
        "0.5"
    );

    tl.fromTo(
        type,
        { y: "20px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out"
        },
        "0.7"
    );

    tl.fromTo(
        descriptionTitle,
        { y: "30px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out"
        },
        "1"
    );

    tl.fromTo(
        description,
        { y: "30px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out"
        },
        "1"
    );

    return () => {
        tl.kill();
    };
};
