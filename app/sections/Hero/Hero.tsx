'use client';

import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Scene from "@/app/components/Scene/scene";
import HeroOverlay from "@/app/components/HeroOverlay/heroOverlay";

export default function HeroSection() {
    return (
        <section className="w-screen min-h-screen px-4 lg:px-24 py-24 text-white relative flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <HeroOverlay/>
            </div>
            <div className="w-full flex flex-col relative bg-white/5 border border-white/5 rounded-custom p-4 md:p-8 backdrop-blur-sm">
                <div className="flex justify-between">
                    <div className="mb-6 hidden md:block">
                        <div
                            className="px-4 py-1.5 text-sm font-[400] inline-block text-textGray bg-white/[0.025] border border-white/5 rounded-full">
                            Building Digital Products
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex items-center gap-2 px-3 py-1 font-[400] text-xs bg-white/[0.025] border border-white/5 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Available for new projects</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="max-w-2xl order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[750] tracking-tight leading-tight mb-8">
                            Bringing <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40">ideas</span> to
                            life through code
                        </h1>

                        <p className="text-lg text-textGray leading-relaxed mb-12">
                            Specialized in creating engaging web experiences that combine clean design with smooth interactions. Let's transform your vision into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <TransitionLink
                                href="/works"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-[500] bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all duration-200"
                            >
                                Explore Work
                            </TransitionLink>

                            <TransitionLink
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-[500] bg-transparent hover:bg-white/[0.025] border border-white/10 rounded-full transition-all duration-200"
                            >
                                Contact
                            </TransitionLink>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 w-full h-full min-h-[200px] bg-white/[0.025] border border-white/5 rounded-custom">
                        <Scene/>
                    </div>
                </div>
            </div>
        </section>
    );
}