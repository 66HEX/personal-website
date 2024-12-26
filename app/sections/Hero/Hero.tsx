'use client';

import { ChevronDown } from "lucide-react";
import {useEffect, useLayoutEffect, useRef} from "react";
import { setupHeroAnimation } from "@/app/animations/heroAnimation";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

export default function Hero() {
    const component = useRef(null);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);


    useLayoutEffect(() => {
        const ctx = setupHeroAnimation({
            headingRef,
            subtitleRef,
            descriptionRef
        }, component);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    return (
        <div
            ref={component}
            className="relative h-svh w-screen  text-white flex flex-col justify-center items-start px-4 lg:px-24">
            <BackgroundOverlay/>
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
                        className="hero-button group font-[300] flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full"
                    >
                        <TransitionLink className="px-4 py-2 flex items-center gap-2" href={"/contact"}>
                            Let's Talk
                            <ChevronDown className="w-4 h-4" />
                        </TransitionLink>
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