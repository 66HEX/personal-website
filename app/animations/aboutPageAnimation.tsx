"use client";

import { gsap } from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    titleRef: HTMLHeadingElement | null;
    subtitleRef: HTMLHeadingElement | null;
    subtitleRef2: HTMLHeadingElement | null;
    bioRef: HTMLParagraphElement | null;
    bioRef2: HTMLParagraphElement | null;
    bioRef3: HTMLParagraphElement | null;
    imageRef: HTMLElement | null;
}

export const animateAboutMeDetails = (refs: AnimationRefs) => {
    const { titleRef, subtitleRef, subtitleRef2, bioRef, bioRef2, bioRef3, imageRef } = refs;

    const childSplit1 = new SplitText(titleRef, { type: "lines,words,chars" });
    const childSplit2 = new SplitText(subtitleRef, { type: "lines" });
    const childSplit3 = new SplitText(bioRef, { type: "lines" });
    const childSplit4 = new SplitText(bioRef2, { type: "lines" });
    const childSplit5 = new SplitText(bioRef3, { type: "lines" });
    const childSplit6 = new SplitText(subtitleRef2, { type: "lines" });

    [titleRef, subtitleRef, subtitleRef2, bioRef, bioRef2, bioRef3].forEach(ref => {
        if (ref) {
            new SplitText(ref, {
                type: "lines",
                linesClass: "line-wrapper overflow-hidden",
            });
        }
    });

    const title = childSplit1.chars;
    const subtitle = childSplit2.lines;
    const bio = childSplit3.lines;
    const bio2 = childSplit4.lines;
    const bio3 = childSplit5.lines;
    const subtitle2 = childSplit6.lines;

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
            duration: 1,
            ease: "power3.out",
            stagger: 0.02
        },
        "0.3"
    );

    tl.fromTo(
        subtitle,
        { y: "20px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1
        },
        "0.5"
    );

    tl.fromTo(
        subtitle2,
        { y: "20px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1
        },
        "0.7"
    );

    tl.fromTo(
        [bio, bio2, bio3],
        { y: "30px", opacity: 0, visibility: "hidden" },
        {
            y: "0",
            opacity: 1,
            visibility: "visible",
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out"
        },
        "0.9"
    );

    return () => {
        tl.kill();
    };
};