"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/app/utils/gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

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

    detailsRefs.forEach((ref, i) => {
        if (i === index && ref) {
            gsap.to(ref, {
                height: isOpen ? 0 : ref.scrollHeight,
                duration: 1,
                ease: "power3.inOut",
            });
        } else if (ref) {
            gsap.to(ref, {
                height: 0,
                duration: 1,
                ease: "power3.inOut",
            });
        }
    });

    arrowRefs.forEach((arrow, i) => {
        if (i === index && arrow) {
            gsap.to(arrow, {
                rotate: isOpen ? 0 : 180,
                duration: 0.5,
                transformOrigin: "center center",
                force3D: true,
                ease: "power3.inOut",
            });
        } else if (arrow) {
            gsap.to(arrow, {
                rotate: 0,
                duration: 0.5,
                transformOrigin: "center center",
                force3D: true,
                ease: "power3.inOut",
            });
        }
    });
};