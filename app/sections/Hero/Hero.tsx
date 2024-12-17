'use client';

import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/app/utils/gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
    const imageRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {
        const childSplit = new SplitText(headerRef.current, { type: "lines" });
        new SplitText(headerRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        const header = childSplit.lines;
        const tl = gsap.timeline();

        tl.fromTo(
            header,
            { y: "100%" },
            { y: "0%", duration: 1, ease: "power3.out" }
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            className="relative w-screen h-[33vh] lg:h-[50vh] bg-offwhitebackground text-offblacktext px-4 md:px-8 flex flex-col items-end justify-end">
            <div className="w-full flex items-end justify-center">
                <h1 ref={headerRef}
                    className="text-4xl md:text-7xl font-Lausanne600 max-w-prose tracking-tight leading-none uppercase">
                    <span>Marek Jóźwiak</span>
                    <span className="opacity-50"> © </span>
                    <span>digital Designer</span>
                </h1>
            </div>
            <div className="w-full my-8 lg:my-16 flex flex-col justify-end text-sm md:text-xl font-Lausanne300 tracking-tight leading-none">
                <p>Branding</p>
                <p>Creating Direction</p>
                <p>UI/UX Design</p>
            </div>
        </div>
    );
}
