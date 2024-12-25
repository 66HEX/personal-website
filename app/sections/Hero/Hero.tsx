'use client';

import { ChevronDown } from "lucide-react";
import {useEffect, useLayoutEffect, useRef} from "react";
import { setupHeroAnimation, initializeButtonAnimation } from "./animation";

export default function Hero() {
    const component = useRef(null);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const chevronRef = useRef(null);


    useLayoutEffect(() => {
        const ctx = setupHeroAnimation({
            headingRef,
            subtitleRef,
            descriptionRef
        }, component);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current, chevronRef.current);
        return cleanup;
    }, []);

    return (
        <div
            ref={component}
            className="relative h-svh w-screen bg-black text-white flex flex-col justify-center items-start px-4 lg:px-24"
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                backgroundSize: '100% 200%',
                backgroundPosition: '50% 0%'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
                <div className="mb-4">
                    <h2
                        ref={subtitleRef}
                        className="text-sm md:text-base font-[300] uppercase tracking-widest"
                    >
                        Creative Developer
                    </h2>
                </div>

                <h1
                    ref={headingRef}
                    className="text-4xl md:text-6xl lg:text-8xl font-[750] tracking-tight leading-none mb-8"
                >
                    Crafting Digital Experiences Through Creative Code
                </h1>

                <p
                    ref={descriptionRef}
                    className="text-base md:text-xl font-[300] mb-8 max-w-2xl"
                >
                    Pushing the boundaries of web development by combining modern technologies
                    with creative design solutions to build immersive digital experiences.
                </p>

                <div className="flex gap-4">
                    <button
                        ref={buttonRef}
                        className="hero-button group font-[300] flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-6 py-3 transition-colors"
                    >
                        Let's Talk
                        <ChevronDown ref={chevronRef} className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="scroll-indicator absolute bottom-8 left-4 lg:left-24 flex items-center gap-4 text-sm">
                <div className="w-8 h-[1px] bg-white/50 font-[300]" />
                <span>Scroll to explore</span>
            </div>
        </div>
    );
}