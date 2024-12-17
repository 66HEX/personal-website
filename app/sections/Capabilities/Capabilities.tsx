'use client';

import { useState, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
    type TextAndImage = {
        text: string;
        image: string;
    };

    const textsAndImages: TextAndImage[] = [
        { text: "Strategy", image: "/images/1.jpg" },
        { text: "Art Direction", image: "/images/2.jpg" },
        { text: "Branding", image: "/images/3.jpg" },
        { text: "Web Design", image: "/images/1.jpg" },
        { text: "Campaign", image: "/images/2.jpg" },
    ];

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {};

    useGSAP(() => {
        const images = imageRefs.current;
        const elements = textRefs.current;

        elements.forEach((element, index) => {
            if (index === activeIndex) {
                gsap.set(images[index], { zIndex: 30 });
                gsap.set(element, { opacity: 1 });

                gsap.to(images[index], { scale: 1, duration: 1, ease: "power3.out" });
                gsap.to(element, { opacity: 1, duration: 1, ease: "power3.out" });
            } else {
                gsap.set(images[index], { zIndex: 20 });
                gsap.set(element, { opacity: 0.5 });

                gsap.to(images[index], { scale: 1.05, duration: 1, ease: "power3.out" });
                gsap.to(element, { opacity: 0.5, duration: 1, ease: "power3.out" });
            }
        });
    }, [activeIndex]);

    return (
        <div
            className="w-screen bg-offwhitebackground text-offwhitetext py-16 px-4">
            <h1 className="text-4xl md:text-6xl font-Lausanne700 mb-4 text-black">Capabilities</h1>
            <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 py-16 rounded-xl overflow-hidden">
                <div className="col-span-1 w-full h-full z-40"/>
                <div className="col-span-1 w-full h-full z-40"/>
                <div
                    className="col-span-1 w-full h-full order-3 flex flex-col justify-start items-start gap-4 p-4 z-40 mx-4">
                    {textsAndImages.map((item, index) => (
                        <p
                            key={index}
                            ref={(el) => (textRefs.current[index] = el)}
                            className="cursor-pointer text-4xl md:text-6xl font-Lausanne700 max-w-prose tracking-tight"
                            style={{opacity: activeIndex === index ? 1 : 0.5}}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.text}
                        </p>
                    ))}
                </div>

                <div className="absolute inset-0 overflow-hidden image-container  ">
                    {textsAndImages.map((item, index) => (
                        <Image
                            key={index}
                            src={item.image}
                            alt={`Background ${index}`}
                            quality={100}
                            fill
                            ref={(el) => (imageRefs.current[index] = el)}
                            style={{
                                objectFit: "cover",
                                transform: index === activeIndex ? "scale(1)" : "scale(1.05)",
                                zIndex: index === activeIndex ? 30 : 20,
                            }}
                        />
                    ))}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-30"/>
                </div>
            </div>
        </div>
    );
}
