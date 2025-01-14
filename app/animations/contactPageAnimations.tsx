'use client';

import { RefObject } from "react";
import gsap from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

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