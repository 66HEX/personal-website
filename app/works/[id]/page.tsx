"use client";

import { notFound } from "next/navigation";
import { works } from "@/app/data/worksData";
import Image from "next/image";
import {useRef} from "react";
import MoreWorks from "@/app/sections/MoreWorks/MoreWorks";
import {useGSAP} from "@gsap/react";
import { SplitText } from "@/app/utils/gsap/SplitText";
import {gsap} from "gsap/gsap-core";

gsap.registerPlugin(SplitText);

export default function WorkDetailsPage({ params }: { params: { id: string } }) {
    const project = works.find((work) => work.id === params.id);

    if (!project) {
        notFound();
    }

    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const clientRef = useRef<HTMLHeadingElement>(null);
    const yearRef = useRef<HTMLHeadingElement>(null);
    const typeRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const childSplit1 = new SplitText(titleRef.current, { type: "lines" });
        const childSplit2 = new SplitText(subtitleRef.current, { type: "lines" });
        const childSplit3 = new SplitText(clientRef.current, { type: "lines" });
        const childSplit4 = new SplitText(yearRef.current, { type: "lines" });
        const childSplit5 = new SplitText(typeRef.current, { type: "lines" });

        new SplitText(titleRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden pb-1",
        });
        new SplitText(subtitleRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(clientRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(yearRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        new SplitText(typeRef.current, {
            type: "lines",
            linesClass: "line-wrapper overflow-hidden",
        });
        const title = childSplit1.lines;
        const subtitle = childSplit2.lines;
        const client = childSplit3.lines;
        const year = childSplit4.lines;
        const type = childSplit5.lines;

        const tl = gsap.timeline();

        tl.fromTo(
            title,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible" , duration: 1, ease: "power3.out" }
        );
        tl.fromTo(
            subtitle,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible" , duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            client,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible" , duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            year,
            { y: "100%", visibility: "hidden" },
            { y: "0%", visibility: "visible" , duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            type,
            { y: "100%", visibility: "hidden"  },
            { y: "0%", visibility: "visible" , duration: 1, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.1, visibility: "hidden" },
            { opacity: 1, scale: 1, visibility: "visible" , duration: 1, ease: "power3.out" },
            "<"
        );

    }, []);

    return (
        <div>
            <div className="bg-offwhitebackground text-offblacktext">
                <div className="w-full h-[30vh] flex items-end px-4 lg:px-8">
                    <div className="grid grid-cols-2 w-full mb-8">
                        <div className="col-span-2 lg:col-span-1 flex items-end">
                            <h1 style={{visibility: "hidden"}} ref={titleRef}
                                className="text-4xl md:text-7xl font-Lausanne750 tracking-tight leading-none mb-8 lg:mb-0">
                                {project.title}
                            </h1>
                        </div>
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3">
                            <div ref={clientRef} style={{visibility: "hidden"}} className="col-span-1 flex flex-col justify-end">
                                <p className="text-sm md:text-xl font-Lausanne750 tracking-tight leading-none uppercase">
                                    Client
                                </p>
                                <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none opacity-50">
                                    {project.client}
                                </p>
                            </div>
                            <div ref={typeRef} style={{visibility: "hidden"}} className="col-span-1 flex flex-col justify-end">
                                <p className="text-sm md:text-xl font-Lausanne750 tracking-tight leading-none uppercase">
                                    Services
                                </p>
                                <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none opacity-50">
                                    {project.type.join(" / ")}
                                </p>
                            </div>
                            <div style={{visibility: "hidden"}} ref={yearRef} className="col-span-1 flex flex-col justify-end">
                                <p className="text-sm md:text-xl font-Lausanne750 tracking-tight leading-none uppercase">
                                    Year
                                </p>
                                <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none opacity-50">
                                    {project.year}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen px-4 lg:px-8">
                    <div className="w-full h-full relative overflow-hidden">
                        <div className="relative w-full h-auto">
                            <Image
                                ref={imageRef}
                                src={project.mainImage}
                                alt="Hero Image"
                                layout="intrinsic"
                                width={2000}
                                height={1500}
                                className="object-cover"
                                style={{visibility: "hidden"}}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-8 py-8 lg:py-24 text-sm leading-tight">
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        {project.description.map((desc, index) => (
                            <p className="text-sm md:text-xl font-Lausanne300 tracking-tight max-w-prose leading-relaxed" key={index}>{desc}</p>
                        ))}
                    </div>
                </div>

                <div className="w-screen pb-16 px-4 lg:px-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 w-full h-full relative">
                        <div className="relative w-full h-auto">
                            <Image
                                src={project.images[0]}
                                alt="Hero Image"
                                layout="intrinsic"
                                width={1000}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 w-full h-full relative">
                        <div className="relative w-full h-auto">
                            <Image
                                src={project.images[1]}
                                alt="Hero Image"
                                layout="intrinsic"
                                width={1000}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MoreWorks/>
        </div>
    );
}