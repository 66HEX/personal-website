'use client';

import { useRef, useEffect } from "react";
import { Code, ArrowRight } from "lucide-react";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";
import OuterCard from "@/app/components/OuterCard/outerCard";

export default function Hero() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current,
            buttonRef2: buttonRef2.current
        });

        return cleanup;
    }, []);

    return (
        <section className="w-screen min-h-screen px-4 lg:px-24 py-12 lg:py-24 text-text-white relative flex items-center justify-center">
            <OuterCard>
                <div className="flex items-start justify-between w-full mb-4">
                    <div className="p-2 bg-icon border border-border-inner rounded-icon">
                        <Code className="w-8 h-8 text-text-white"/>
                    </div>
                    <div className="px-3 py-1 font-[500] text-xs text-text-white bg-icon border border-border-inner rounded-full">
                        Frontend Developer
                    </div>
                </div>
                <div className="max-w-4xl mx-auto text-center tracking-tight">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[750] tracking-tight mb-6">
                        Creating modern
                        <br/>
                        <span className="bg-gradient-to-r from-text-white to-text-gray text-transparent bg-clip-text">
                            digital experiences
                        </span>
                    </h1>
                    <p className="text-base lg:text-lg font-[500] tracking-tight text-text-gray leading-relaxed mb-8 lg:mb-12 max-w-2xl mx-auto">
                        Specializing in crafting intuitive and performant web applications
                        with clean code and pixel-perfect design implementation
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <TransitionLink href="/works" className="group">
                            <button
                                ref={buttonRef}
                                className="px-6 py-3 bg-icon border border-border-inner rounded-xl font-[500] flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4"/>
                            </button>
                        </TransitionLink>
                        <TransitionLink href="/contact" className="group">
                            <button
                                ref={buttonRef2}
                                className="px-6 py-3 bg-transparent border border-border-inner rounded-xl font-[500] flex items-center gap-2 w-full sm:w-auto justify-center hover:bg-icon transition-colors"
                            >
                                Get in Touch
                            </button>
                        </TransitionLink>
                    </div>
                    <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-3">
                        {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind'].map((tech, index) => (
                            <div
                                key={index}
                                className="px-3 py-1 text-xs font-[500] bg-icon border border-border-inner rounded-full"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </OuterCard>
        </section>
    );
}