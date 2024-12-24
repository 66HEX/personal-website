"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateAboutMeDetails } from "./animations";
import Services from "@/app/sections/Services/Services";

export default function AboutMePage() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef2 = useRef<HTMLHeadingElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const bioRef2 = useRef<HTMLParagraphElement>(null);
    const bioRef3 = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        return animateAboutMeDetails({
            titleRef: titleRef.current,
            subtitleRef: subtitleRef.current,
            subtitleRef2: subtitleRef2.current,
            bioRef: bioRef.current,
            bioRef2: bioRef2.current,
            bioRef3: bioRef3.current,
            imageRef: imageRef.current,
        });
    }, []);

    return (
        <div className="bg-black text-white">
            <div className="w-full h-[30vh] flex items-end px-4 lg:px-24">
                <div className="grid grid-cols-2 w-full mb-8 gap-8 lg:gap-24">
                    <div className="col-span-2 lg:col-span-1 flex items-end">
                        <h1
                            ref={titleRef}
                            style={{ visibility: "hidden" }}
                            className="text-4xl md:text-7xl font-[750] tracking-tight uppercase"
                        >
                            About Me
                        </h1>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex gap-8 md:grid md:grid-cols-2">
                        <div
                            ref={subtitleRef}
                            style={{visibility: "hidden"}}
                            className="col-span-1 flex flex-col justify-end gap-2"
                        >
                            <p className="text-sm md:text-base font-[750] tracking-tight leading-none uppercase">
                                Name
                            </p>
                            <p className="text-sm md:text-base font-[300] tracking-tight leading-none opacity-50">
                                Marek Jóźwiak
                            </p>
                        </div>
                        <div
                            ref={subtitleRef2}
                            style={{ visibility: "hidden" }}
                            className="col-span-1 flex flex-col justify-end gap-2"
                        >
                            <p className="text-sm md:text-base font-[750] tracking-tight leading-none uppercase">
                                Focus Area
                            </p>
                            <p className="text-sm md:text-base font-[300] tracking-tight leading-none opacity-50">
                                Front-end Development
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 pb-12 md:pb-24">
                <div
                    className="col-span-1 gap-4 lg:gap-8 text-sm leading-tight order-2">
                    <div className="col-span-1 flex flex-col gap-4 lg:gap-8 opacity-50">
                        <p
                            ref={bioRef}
                            style={{visibility: "hidden"}}
                            className="text-sm md:text-xl font-Lausanne300 tracking-tight max-w-prose leading-relaxed"
                        >
                        I'm an emerging frontend developer with a passion for crafting engaging web experiences.
                            Over the past 1.5 years, I've immersed myself in modern web development, focusing on
                            React.js and Next.js ecosystems. My journey in tech is driven by a constant desire to
                            learn and grow, turning creative concepts into clean, functional, and visually
                            appealing interfaces.
                        </p>
                        <p
                            ref={bioRef2}
                            style={{visibility: "hidden"}}
                            className="text-sm md:text-xl font-Lausanne300 tracking-tight max-w-prose leading-relaxed"
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
                            className="text-sm md:text-xl font-Lausanne300 tracking-tight max-w-prose leading-relaxed"
                        >
                            I'm deeply committed to expanding my skillset and staying current with frontend
                            development trends. My dedication to continuous learning drives me to explore new
                            technologies and best practices, while my attention to detail ensures high-quality
                            deliverables. I approach each project as an opportunity to both contribute value
                            and enhance my expertise in creating exceptional web experiences.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 h-auto relative overflow-hidden">
                    <div className="relative w-full h-auto rounded-custom overflow-hidden border border-white/20">
                        <Image
                            ref={imageRef}
                            src="/images/about-photo.png"
                            alt="About Me Image"
                            layout="intrinsic"
                            width={2000}
                            height={1500}
                            className="object-cover"
                            style={{visibility: "hidden"}}
                        />
                    </div>
                </div>
            </div>
            <Services/>
        </div>
    );
}
