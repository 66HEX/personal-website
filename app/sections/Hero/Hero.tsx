'use client';

import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/app/utils/gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {Scene} from "@/app/components/Scene/Scene";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
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
            className="relative w-screen h-svh bg-offwhitebackground text-offblacktext p-4 md:p-24 flex flex-col items-center justify-center">
            <div className="w-full h-full rounded-custom overflow-hidden">
                <Scene/>
            </div>

        </div>
    );
}
