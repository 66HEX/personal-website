"use client";

import React, { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/app/libs/gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

interface TextWrapperProps {
    children: ReactNode;
    className?: string;
}

const AnimatedLink: React.FC<TextWrapperProps> = ({ children, className }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const copyRef = useRef<HTMLDivElement | null>(null);

    CustomEase.create("customEase", "0.75,0,0.25,1");

    useGSAP(() => {
        const wrapper = wrapperRef.current;
        const textElement = textRef.current;
        const copyElement = copyRef.current;

        if (!textElement || !copyElement) return;

        const text = new SplitText(textElement, {
            type: "lines",
            position: "relative",
        });
        const copy = new SplitText(copyElement, {
            type: "lines",
            position: "relative",
        });

        const timeline = gsap.timeline({ paused: true });

        timeline.fromTo(
            text.lines,
            { y: "0%", opacity: 0.5 },
            { y: "-100%", opacity: 1, duration: 0.35, ease: "customEase" }
        );

        timeline.fromTo(
            copy.lines,
            { y: "0%", opacity: 0.5 },
            { y: "-100%", opacity: 1, duration: 0.35, ease: "customEase" },
            0
        );

        const handleMouseEnter = () => {
            timeline.play();
        };

        const handleMouseLeave = () => {
            timeline.reverse();
        };

        const parentElement = wrapper?.parentElement;
        if (parentElement) {
            parentElement.addEventListener("mouseenter", handleMouseEnter);
            parentElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (parentElement) {
                parentElement.removeEventListener("mouseenter", handleMouseEnter);
                parentElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [children]);

    return (
        <div
            ref={wrapperRef}
            className={`relative inline-flex leading-none overflow-hidden ${className}`}
        >
            <div ref={textRef} className="inline-flex">
                {children}
            </div>
            <div
                ref={copyRef}
                className="absolute top-0 left-0 inline-flex"
                style={{ transform: "translateY(100%)" }}
            >
                {children}
            </div>
        </div>
    );
};

export default AnimatedLink;
