'use client';

import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Scene from "@/app/components/Scene/scene";
import OuterCard from "@/app/components/OuterCard/outerCard";
import Badge from "@/app/components/Badge/badge";
import { cn } from "@/app/utils/utils";
import {DotPattern} from "@/app/components/Dot/dotPattern";
import GradientHeader from "@/app/components/GradientHeader/gradientHeader";
import {useEffect, useRef} from "react";
import {initializeButtonAnimation} from "@/app/animations/buttonHoverAnimation";

export default function HeroSection() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonRef3 = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current,
            buttonRef3: buttonRef3.current
        });

        return cleanup;
    }, []);

    return (
        <section className="w-screen px-4 lg:px-24 pb-12 pt-24 lg:py-24 text-text-white relative flex items-center overflow-hidden">
            <DotPattern
                cy={1}
                cr={1}
                cx={1}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="w-full flex flex-col relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <OuterCard className="flex flex-col items-start justify-center">
                        <Badge
                            className="w-fit ml-auto mb-8">
                           <div className="h-1.5 w-1.5 bg-green-600 rounded-full"/>
                            Available for work
                        </Badge>
                        <GradientHeader
                            normalText="Creating modern"
                            gradientText="digital experiences"
                            className="text-4xl md:text-5xl lg:text-6xl font-[750] tracking-tight leading-tight mb-8"
                        />

                        <p className="text-lg font-[500] tracking-tight leading-relaxed text-text-gray mb-12">
                            Specialized in creating engaging web experiences that combine clean design with smooth
                            interactions. Let's transform your vision into reality.
                        </p>

                        <div className="flex flex-row gap-4 mb-12">
                            <TransitionLink
                                href="/works"
                            >
                                <button
                                    ref={buttonRef3} className="inline-flex items-center justify-center px-6 py-3 text-sm font-[500] bg-text-white text-background border border-border-outer rounded-icon">
                                    Explore Work
                                </button>
                            </TransitionLink>

                            <TransitionLink
                                href="/contact"
                            >
                                <button
                                    ref={buttonRef} className="inline-flex items-center justify-center px-6 py-3 text-sm font-[500] bg-icon border border-border-outer rounded-icon">
                                    Contact
                                </button>
                            </TransitionLink>
                        </div>
                    </OuterCard>
                    <div
                        className="relative w-full h-full min-h-[300px]">
                        <Scene/>
                    </div>
                </div>
            </div>
        </section>
    );
}