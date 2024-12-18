"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface HoverUnderlineProps {
    children: React.ReactNode;
}

const HoverUnderline: React.FC<HoverUnderlineProps> = ({ children }) => {
    const linkRef = useRef<HTMLHeadingElement | null>(null);
    const underlineRef = useRef<HTMLSpanElement | null>(null);
    const hoverAnimation = useRef<GSAPTween | null>(null); // Instancja animacji

    useEffect(() => {
        const link = linkRef.current;
        const underline = underlineRef.current;

        if (!link || !underline) return;

        const handleMouseLeave = () => {
            hoverAnimation.current?.kill();
            hoverAnimation.current = gsap.fromTo(
                underline,
                { width: "0%", left: "0%" },
                { width: "100%", left: "0%", ease: "power3.out", duration: 0.5 }
            );
        };

        const handleMouseEnter = () => {
            hoverAnimation.current?.kill();
            hoverAnimation.current = gsap.fromTo(
                underline,
                { width: "100%", left: "0%" },
                {
                    width: "0%",
                    left: "0%",
                    duration: 0.5,
                    ease: "power3.in",
                    immediateRender: false,
                }
            );
        };

        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            link.removeEventListener("mouseenter", handleMouseEnter);
            link.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <h2
            ref={linkRef}
            className=""
            style={{ position: "relative", display: "inline-block" }}
        >
            <span style={{ position: "relative" }}>{children}</span>
            <span
                ref={underlineRef}
                style={{
                    display: "block",
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                }}
            ></span>
        </h2>
    );
};

export default HoverUnderline;
