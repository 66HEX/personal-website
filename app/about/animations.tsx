import { gsap } from "gsap";
import { SplitText } from "@/app/utils/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimationRefs {
    titleRef: HTMLHeadingElement | null;
    subtitleRef: HTMLHeadingElement | null;
    subtitleRef2: HTMLHeadingElement | null;
    bioRef: HTMLParagraphElement | null;
    bioRef2: HTMLParagraphElement | null;
    bioRef3: HTMLParagraphElement | null;
    imageRef: HTMLElement | null;
}

export const animateAboutMeDetails = (refs: AnimationRefs) => {
    const { titleRef, subtitleRef,subtitleRef2, bioRef,bioRef2,bioRef3, imageRef } = refs;


    const childSplit1 = new SplitText(titleRef, { type: "lines" });
    const childSplit2 = new SplitText(subtitleRef, { type: "lines" });
    const childSplit3 = new SplitText(bioRef, { type: "lines" });
    const childSplit4 = new SplitText(bioRef2, { type: "lines" });
    const childSplit5 = new SplitText(bioRef3, { type: "lines" });
    const childSplit6 = new SplitText(subtitleRef2, { type: "lines" });


    new SplitText(titleRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(subtitleRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(subtitleRef2, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(bioRef, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(bioRef2, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });
    new SplitText(bioRef3, {
        type: "lines",
        linesClass: "line-wrapper overflow-hidden",
    });

    const title = childSplit1.lines;
    const subtitle = childSplit2.lines;
    const bio = childSplit3.lines;
    const bio2 = childSplit4.lines;
    const bio3 = childSplit5.lines;
    const subtitle2 = childSplit6.lines;

    const tl = gsap.timeline();

    tl.fromTo(
        title,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        subtitle,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        subtitle2,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        bio,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        bio2,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        bio3,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    tl.fromTo(
        imageRef,
        { opacity: 0, scale: 1.1, visibility: "hidden" },
        { opacity: 1, scale: 1, visibility: "visible", duration: 0.75, ease: "power3.out" },
        "0.5"
    );

    return () => {
        tl.kill();
    };
};
