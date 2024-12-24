'use client';

import { ChevronDown } from "lucide-react";

export default function Hero() {

    return (
        <div
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
                    <h2 className="text-sm md:text-base font-[300] uppercase tracking-widest opacity-50">
                        Creative Developer
                    </h2>
                </div>

                <h1
                    className="text-4xl md:text-6xl lg:text-8xl font-[750] tracking-tight leading-none mb-8"
                >
                    Crafting Digital Experiences Through Creative Code
                </h1>

                <p
                    className="text-base md:text-xl font-[300] mb-8 max-w-2xl"
                >
                    Pushing the boundaries of web development by combining modern technologies
                    with creative design solutions to build immersive digital experiences.
                </p>

                <div className="flex gap-4">
                    <button

                        className="group font-[300] flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full px-6 py-3 transition-colors"
                    >
                        Let's Talk
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-4 lg:left-24 flex items-center gap-4 text-sm opacity-50">
                <div className="w-8 h-[1px] bg-white/50 font-[300]" />
                <span>Scroll to explore</span>
            </div>
        </div>
    );
}