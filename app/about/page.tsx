"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SplitText } from "@/app/utils/gsap/SplitText";
import { gsap } from "gsap/gsap-core";
import {works} from "@/app/data/worksData";

gsap.registerPlugin(SplitText);

export default function About() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const bio2Ref = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef(null);


    useGSAP(() => {
        const childSplit1 = new SplitText(titleRef.current, { type: "lines" });
        const childSplit2 = new SplitText(subtitleRef.current, { type: "lines" });
        const childSplit3 = new SplitText(bioRef.current, { type: "lines" });
        const childSplit4 = new SplitText(bio2Ref.current, { type: "lines" });

        new SplitText(titleRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(subtitleRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(bioRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(bio2Ref.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });

        const title = childSplit1.lines;
        const subtitle = childSplit2.lines;
        const bio = childSplit3.lines;
        const bio2 = childSplit4.lines;

        const tl = gsap.timeline();
        tl.fromTo(
            title,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" }
        );
        tl.fromTo(
            subtitle,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            bio,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            bio2,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.1, visibility: "hidden" },
            { opacity: 1, scale: 1, visibility: "visible", duration: 1, ease: "power3.out" },
            "<"
        );
    }, []);

    return (
        <div className="bg-offwhitebackground text-offblacktext px-4 lg:px-8">
            <div className="w-full h-[30vh] flex justify-between items-end">
                <h1
                    className="text-2xl lg:text-5xl font-Lausanne750 uppercase tracking-tight leading-none pb-8 flex">
                    About Me
                </h1>
            </div>
            <hr className="border border-black opacity-10 mb-4 lg:mb-8"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none uppercase opacity-50">
                        Bio
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-relaxed">
                        As a freelance web designer and developer, I bring a unique combination of creativity and
                        technical expertise to every project. With a keen eye for design and a passion for delivering
                        user-friendly web experiences, I work closely with clients to understand their needs and bring
                        their vision to life.
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none uppercase opacity-50">
                        INFO
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-relaxed">
                        As a freelance web designer and developer, I bring a unique combination of creativity and
                        technical expertise to every project. With a keen eye for design and a passion for delivering
                        user-friendly web experiences, I work closely with clients to understand their needs and bring
                        their vision to life.
                    </p>
                </div>
            </div>
        </div>
    );
}
