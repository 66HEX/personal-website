"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealTextProps {
    children: React.ReactNode;
    className?: string;
}

const ScrollTriggerBlur: React.FC<RevealTextProps> = ({ children, className }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    const originalText = useRef<string>("");

    useEffect(() => {
        if (textRef.current) {
            if (originalText.current === "") {
                originalText.current = textRef.current.innerHTML;
            }

            const split = new SplitText(textRef.current, { type: 'words' });
            const wordElements = split.words;

            gsap.fromTo(
                wordElements,
                {
                    opacity: 0,
                    filter: 'blur(10px)',
                    willChange: 'transform, opacity'
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.in',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top bottom',
                        end: 'bottom center',
                        scrub: true,
                        once: true
                    },
                    onUpdate: function () {
                        wordElements.forEach((char, index) => {
                            const progress = this.progress();
                            if (index > wordElements.length * 0.8) {
                                gsap.to(char, { filter: `blur(${10 * (1 - progress)}px)` });
                            }
                        });
                    },
                }
            );


        }
    }, [children]);

    return (
        <span ref={textRef} className={className}>
            {children}
        </span>
    );
};

export default ScrollTriggerBlur;
