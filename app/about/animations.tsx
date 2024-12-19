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

    // Get the split lines for each element
    const title = childSplit1.lines;
    const subtitle = childSplit2.lines;
    const bio = childSplit3.lines;
    const bio2 = childSplit4.lines;
    const bio3 = childSplit5.lines;
    const subtitle2 = childSplit6.lines;

    // Create a timeline for the animation sequence
    const tl = gsap.timeline();

    // Title Animation (Fades in and slides up)
    tl.fromTo(
        title,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" }
    );

    // Subtitle Animation with slight delay to create sequencing
    tl.fromTo(
        subtitle,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<" // Align with the previous animation
    );

    // Subtitle2 Animation with slight delay to create sequencing
    tl.fromTo(
        subtitle2,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<" // Align with the previous animation
    );

    // Bio Animation (Fades in and slides up after subtitle)
    tl.fromTo(
        bio,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<" // Align with previous animations
    );

    // Bio2 Animation (Fades in and slides up after subtitle)
    tl.fromTo(
        bio2,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<" // Align with previous animations
    );

    // Bio3 Animation (Fades in and slides up after subtitle)
    tl.fromTo(
        bio3,
        { y: "100%", visibility: "hidden" },
        { y: "0%", visibility: "visible", duration: 1, ease: "power3.out" },
        "<" // Align with previous animations
    );
    // Image Animation (Fades in and scales down)
    tl.fromTo(
        imageRef,
        { opacity: 0, scale: 1.1, visibility: "hidden" },
        { opacity: 1, scale: 1, visibility: "visible", duration: 1.5, ease: "power3.out" },
        "<" // Align with previous animations
    );

    return () => {
        tl.kill();
    };
};
