"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from "@/app/utils/gsap/SplitText";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealTextProps {
    children: string;
    className?: string;
}

const ScrollTriggerReveal: React.FC<RevealTextProps> = ({ children, className }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        const split = new SplitText(textRef.current, { type: 'lines' });
        new SplitText(textRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        const lineElements = split.lines;

        gsap.fromTo(
            lineElements,
            {  y: '100%', },
            {
                y: '0%',
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                    end: 'bottom 50%',
                    scrub: true,
                },
            }
        );

        return () => {
            
        };
    }, [children]);

    return (
        <span ref={textRef} className={className}>
            {children}
        </span>
    );
};

export default ScrollTriggerReveal;
