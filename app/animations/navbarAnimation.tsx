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
                                    isMenuOpen
                                }: NavbarAnimationProps): NavbarAnimationReturn => {
    const menuTimeline = useRef<GSAPTimeline>(
        gsap.timeline({ paused: true }) as GSAPTimeline
    );

    const initializeAnimation = () => {
        if (!menuRef.current ) {
            return undefined;
        }

        gsap.set(menuRef.current, { height: 0, opacity: 0});

        CustomEase.create("customEase", "0.75,0,0.25,1");

        menuTimeline.current.clear();

        menuTimeline.current
            .to(toggleButtonLine1Ref.current, {
                duration: 0.3,
                rotation: 45,
                top: "50%",
                ease: "customEase",
                transformOrigin: "center center"
            }, 0)
            .to(toggleButtonLine2Ref.current, {
                duration: 0.3,
                rotation: -45,
                top: "50%",
                ease: "customEase",
                transformOrigin: "center center"
            }, 0)
            .to(menuRef.current, {
                opacity: 1,
                backdropFilter: "blur(16px)",
                duration: 0.45,
                border: "1px solid rgba(255,255,255,0.1)",
                ease: "customEase"
            }, 0)
            .to(menuRef.current, {
                height: "auto",
                duration: 0.45,
                border: "1px solid rgba(255,255,255,0.1)",
                ease: "customEase"
            }, 0.1);


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