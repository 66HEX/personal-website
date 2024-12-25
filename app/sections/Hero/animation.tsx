'use client';

import { RefObject } from "react";
import gsap from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    headingRef: RefObject<HTMLHeadingElement>;
    subtitleRef: RefObject<HTMLHeadingElement>;
    descriptionRef: RefObject<HTMLParagraphElement>;
}

export const setupHeroAnimation = (
    refs: AnimationRefs,
    component: RefObject<HTMLDivElement>
) => {
    const ctx = gsap.context(() => {
        const heading = new SplitText(refs.headingRef.current, { type: "lines,words,chars" });
        const description = new SplitText(refs.descriptionRef.current, { type: "lines" });
        const subtitle = new SplitText(refs.subtitleRef.current, { type: "lines" });

        [refs.headingRef.current, refs.descriptionRef.current, refs.subtitleRef.current].forEach(ref => {
            if (ref) {
                new SplitText(ref, {
                    type: "lines",
                    linesClass: "line-wrapper overflow-hidden",
                });
            }
        });

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1
            }
        });

        gsap.set([".hero-button", ".scroll-indicator"], {
            opacity: 0,
            y: 50
        });
        gsap.set(heading.chars, {
            opacity: 0,
            y: 50
        });
        gsap.set(description.lines, {
            opacity: 0,
            y: 20
        });
        gsap.set(subtitle.lines, {
            opacity: 0,
            y: 50
        });

        tl.to(heading.chars, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.02
        })
            .to(subtitle.lines, {
                opacity: 0.5,
                y: 0,
            }, "0.3")
            .to(description.lines, {
                opacity: 0.5,
                y: 0,
                stagger: 0.1
            }, "0.5")
            .to(".hero-button", {
                opacity: 1,
                y: 0,
            }, "0.7")
            .to(".scroll-indicator", {
                opacity: 0.5,
                y: 0,
            }, "0.9");
    }, component);

    return ctx;
};