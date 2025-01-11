"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateAboutMeDetails } from "@/app/animations/aboutPageAnimation";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

export default function AboutMePage() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef2 = useRef<HTMLHeadingElement>(null);
    const subtitleRef3 = useRef<HTMLHeadingElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const bioRef2 = useRef<HTMLParagraphElement>(null);
    const bioRef3 = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        return animateAboutMeDetails({
            titleRef: titleRef.current,
            subtitleRef: subtitleRef.current,
            subtitleRef2: subtitleRef2.current,
            subtitleRef3: subtitleRef3.current,
            bioRef: bioRef.current,
            bioRef2: bioRef2.current,
            bioRef3: bioRef3.current,
            imageRef: imageRef.current,
        });
    }, []);

    return (
        <section className="w-screen text-white relative">
            <BackgroundOverlay/>
            <div className="px-4 lg:px-24 pt-12 mb-24 lg:py-24">
                <div className="flex items-center justify-between w-full mb-8">
                    <h1
                        ref={titleRef}
                        style={{ visibility: "hidden" }}
                        className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none"
                    >
                        About Me
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1">
                        <div className="relative w-full h-auto rounded-custom overflow-hidden border border-white/5">
                            <Image
                                ref={imageRef}
                                src="/images/about-photo.webp"
                                alt="About Me Image"
                                layout="intrinsic"
                                priority={true}
                                width={2000}
                                height={1500}
                                className="object-cover"
                                style={{visibility: "hidden"}}
                            />
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col gap-8">
                        <div className="bg-white/[0.025] border border-white/5 rounded-custom p-6 xl:p-8 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-8">
                                <div
                                    ref={subtitleRef}
                                    style={{visibility: "hidden"}}
                                    className="col-span-1 flex flex-col gap-2"
                                >
                                    <p className="text-xl font-[750] tracking-tight leading-none uppercase">
                                        Name
                                    </p>
                                    <p className="text-sm md:text-xl font-[400] tracking-tight leading-none text-white/50">
                                        Marek Jóźwiak
                                    </p>
                                </div>
                                <div
                                    ref={subtitleRef2}
                                    style={{ visibility: "hidden" }}
                                    className="col-span-1 flex flex-col gap-2"
                                >
                                    <p className="text-xl font-[750] tracking-tight leading-none uppercase ">
                                        Focus Area
                                    </p>
                                    <p className="text-sm md:text-xl font-[400] tracking-tight leading-none text-white/50">
                                        Front-End Development
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.025] border border-white/5 rounded-custom p-6 xl:p-8 backdrop-blur-sm">
                            <h2
                                ref={subtitleRef3}
                                style={{visibility: "hidden"}}
                                className="text-xl font-[750] tracking-tight leading-none uppercase mb-4">
                                Description
                            </h2>
                            <div className="flex flex-col gap-8">
                                <p
                                    ref={bioRef}
                                    style={{visibility: "hidden"}}
                                    className="text-sm md:text-lg font-[400] tracking-tight text-white/50 leading-relaxed"
                                >
                                    I'm an emerging front-end developer with a passion for crafting engaging web experiences.
                                    Over the past 1.5 years, I've immersed myself in modern web development, focusing on
                                    React.js and Next.js ecosystems. My journey in tech is driven by a constant desire to
                                    learn and grow, turning creative concepts into clean, functional, and visually
                                    appealing interfaces.
                                </p>
                                <p
                                    ref={bioRef2}
                                    style={{visibility: "hidden"}}
                                    className="text-sm md:text-lg font-[400] tracking-tight text-white/50 leading-relaxed"
                                >
                                    While my commercial experience spans several successful projects, I approach each new
                                    challenge with enthusiasm and dedication. I've worked with TypeScript, Tailwind CSS,
                                    and various modern development tools, consistently focusing on writing clean,
                                    maintainable code. My rapid growth in the field demonstrates my ability to quickly
                                    adapt to new technologies and deliver quality results in dynamic environments.
                                </p>
                                <p
                                    ref={bioRef3}
                                    style={{visibility: "hidden"}}
                                    className="text-sm md:text-lg font-[400] tracking-tight text-white/50 leading-relaxed"
                                >
                                    I'm deeply committed to expanding my skillset and staying current with frontend
                                    development trends. My dedication to continuous learning drives me to explore new
                                    technologies and best practices, while my attention to detail ensures high-quality
                                    deliverables. I approach each project as an opportunity to both contribute value
                                    and enhance my expertise in creating exceptional web experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}