'use client';

import { RefObject } from "react";
import gsap from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

interface ContactAnimationRefs {
    titleRef: RefObject<HTMLHeadingElement>;
    subtitleRef: RefObject<HTMLHeadingElement>;
    descriptionRef: RefObject<HTMLParagraphElement>;
    emailRef: RefObject<HTMLAnchorElement>;
}

export const setupContactAnimation = (
    refs: ContactAnimationRefs,
    component: RefObject<HTMLDivElement>
) => {
    const ctx = gsap.context(() => {
        const title = new SplitText(refs.titleRef.current, { type: "lines,words,chars" });
        const subtitle = new SplitText(refs.subtitleRef.current, { type: "lines" });
        const description = new SplitText(refs.descriptionRef.current, { type: "lines" });

        [refs.titleRef.current, refs.subtitleRef.current, refs.descriptionRef.current].forEach(ref => {
            if (ref) {
                new SplitText(ref, {
                    type: "lines",
                    linesClass: "line-wrapper overflow-hidden",
                });
            }
        });

        gsap.set(title.chars, { opacity: 0, y: 50 });
        gsap.set(subtitle.lines, { opacity: 0, y: 20 });
        gsap.set(description.lines, { opacity: 0, y: 20 });
        gsap.set(refs.emailRef.current, { opacity: 0, y: 20 });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1 }
        });

        tl.to(title.chars, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.02
        })
            .to(subtitle.lines, {
                opacity: 1,
                y: 0,
            }, "0.3")
            .to(description.lines, {
                opacity: 0.5,
                y: 0,
                stagger: 0.1
            }, "0.5")
            .to(refs.emailRef.current, {
                opacity: 1,
                y: 0,
            }, "0.7");
    }, component);

    return ctx;
};

export const animateStatusMessage = (
    statusRef: RefObject<HTMLDivElement>,
    onComplete: () => void
) => {
    const ctx = gsap.context(() => {
        if (!statusRef.current) return;

        gsap.set(statusRef.current, {
            opacity: 0,
            y: 20,
            scale: 0.95
        });

        const tl = gsap.timeline({
            defaults: { ease: CustomEase.create("custom", "0.6, 0.01, 0.05, 0.95") }
        });

        tl.to(statusRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6
        });

        tl.to(statusRef.current, {
            opacity: 1,
            duration: 1.2
        });

        tl.to(statusRef.current, {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: 0.5,
            onComplete
        });
    });

    return ctx;
};