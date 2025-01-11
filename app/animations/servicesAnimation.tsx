"use client";

import { gsap } from "gsap";

import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    detailsRefs: (HTMLDivElement | null)[];
    arrowRefs: (SVGSVGElement | null)[];
}

export const animateAccordion = (
    index: number,
    isOpen: boolean,
    refs: AnimationRefs
) => {
    const { detailsRefs, arrowRefs } = refs;

    const detailsHeights = detailsRefs.map(ref => ref ? ref.scrollHeight : 0);

    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.inOut" } });

    detailsRefs.forEach((ref, i) => {
        if (ref) {
            const targetHeight = i === index ? (isOpen ? 0 : detailsHeights[i]) : 0;
            tl.to(ref, { height: targetHeight }, 0);
        }
    });

    arrowRefs.forEach((arrow, i) => {
        if (arrow) {
            const rotation = i === index && !isOpen ? 180 : 0;
            if (arrow.style.transform !== `rotate(${rotation}deg)`) {
                tl.to(arrow, { rotate: rotation, transformOrigin: "center center", force3D: true }, 0);
            }
        }
    });
};
