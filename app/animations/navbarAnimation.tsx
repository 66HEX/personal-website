"use client";

import { RefObject, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from "@/app/libs/gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

interface GSAPTimeline {
    clear(): gsap.core.Timeline;
    totalDuration(): number;
    play(): gsap.core.Timeline;
    reverse(): gsap.core.Timeline;
    kill(): void;
    to(
        target: gsap.TweenTarget,
        vars: gsap.TweenVars,
        position?: gsap.Position
    ): gsap.core.Timeline;
    eventCallback(
        type: "onComplete" | "onReverseComplete",
        callback?: () => void
    ): gsap.core.Timeline;
}

interface NavbarAnimationProps {
    toggleButtonLine1Ref: RefObject<HTMLDivElement>;
    toggleButtonLine2Ref: RefObject<HTMLDivElement>;
    menuRef: RefObject<HTMLDivElement>;
    menuItemsContainerRef: RefObject<HTMLDivElement>;
    socialMenuContainerRef: RefObject<HTMLDivElement>;
    contactMenuContainerRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
}

interface NavbarAnimationReturn {
    toggleMenu: () => Promise<void>;
    initializeAnimation: () => GSAPTimeline | undefined;
}

export const navbarAnimation = ({
                                    toggleButtonLine1Ref,
                                    toggleButtonLine2Ref,
                                    menuRef,
                                    menuItemsContainerRef,
                                    socialMenuContainerRef,
                                    contactMenuContainerRef,
                                    isMenuOpen
                                }: NavbarAnimationProps): NavbarAnimationReturn => {
    const menuTimeline = useRef<GSAPTimeline>(
        gsap.timeline({ paused: true }) as GSAPTimeline
    );

    const initializeAnimation = () => {
        if (!menuRef.current || !socialMenuContainerRef.current || !contactMenuContainerRef.current) {
            return undefined;
        }

        gsap.set(menuRef.current, { xPercent: 100, opacity: 1 });
        gsap.set(menuItemsContainerRef.current, { xPercent: 100 });
        gsap.set(socialMenuContainerRef.current, { xPercent: 100 });
        gsap.set(contactMenuContainerRef.current, { xPercent: 100 });

        CustomEase.create("customEase", "0.75,0,0.25,1");

        menuTimeline.current.clear();

        menuTimeline.current
            .to(toggleButtonLine1Ref.current, {
                duration: 0.3,
                rotate: 45,
                top: "50%",
                left: "50%",
                ease: "power3.inOut"
            }, 0)
            .to(toggleButtonLine2Ref.current, {
                duration: 0.3,
                rotate: -45,
                top: "50%",
                left: "50%",
                ease: "power3.inOut"
            }, 0)
            .to(menuRef.current, {
                xPercent: 0,
                duration: 0.6,
                ease: "customEase"
            }, 0)
            .to(menuItemsContainerRef.current, {
                xPercent: 0,
                duration: 0.6,
                ease: "customEase"
            }, ">-0.525")
            .to(socialMenuContainerRef.current, {
                xPercent: 0,
                duration: 0.6,
                ease: "customEase"
            }, ">-0.5125")
            .to(contactMenuContainerRef.current, {
                xPercent: 0,
                duration: 0.6,
                ease: "customEase"
            }, ">-0.5");

        return menuTimeline.current;
    };

    const toggleMenu = () => {
        return new Promise<void>((resolve) => {
            if (!menuTimeline.current.totalDuration()) {
                initializeAnimation();
            }

            if (isMenuOpen) {
                menuTimeline.current.reverse().eventCallback("onReverseComplete", () => {
                    resolve();
                });
            } else {
                menuTimeline.current.play().eventCallback("onComplete", () => {
                    resolve();
                });
            }
        });
    };

    return {
        toggleMenu,
        initializeAnimation
    };
};