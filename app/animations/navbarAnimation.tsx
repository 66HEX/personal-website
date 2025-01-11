"use client";

import { RefObject } from 'react';
import gsap from 'gsap';
import { SplitText } from "@/app/libs/gsap/SplitText";

gsap.registerPlugin(SplitText);

interface NavbarAnimationProps {
    toggleButtonLine1Ref: RefObject<HTMLDivElement>;
    toggleButtonLine2Ref: RefObject<HTMLDivElement>;
    menuRef: RefObject<HTMLDivElement>;
    menuItemsContainerRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
}

export const navbarAnimation = ({
                                    toggleButtonLine1Ref,
                                    toggleButtonLine2Ref,
                                    menuRef,
                                    menuItemsContainerRef,
                                    isMenuOpen
                                }: NavbarAnimationProps) => {
    const animateHamburger = (isOpening: boolean) => {
        if (isOpening) {
            gsap.to(toggleButtonLine1Ref.current, {
                duration: 0.25,
                rotate: 45,
                top: "50%",
                left: "50%",
                ease: "power3.inOut",
            });
            gsap.to(toggleButtonLine2Ref.current, {
                duration: 0.25,
                rotate: -45,
                top: "50%",
                left: "50%",
                ease: "power3.inOut",
            });
        } else {
            gsap.to(toggleButtonLine1Ref.current, {
                duration: 0.25,
                rotate: 0,
                top: "35%",
                left: "50%",
                ease: "power3.inOut",
            });
            gsap.to(toggleButtonLine2Ref.current, {
                duration: 0.25,
                rotate: 0,
                top: "65%",
                left: "50%",
                ease: "power3.inOut",
            });
        }
    };

    const closeMenu = () => {
        return new Promise<void>((resolve) => {
            if (!isMenuOpen) {
                resolve();
                return;
            }

            animateHamburger(false);
            const tl = gsap.timeline();

            const menuItems = [
                ...Array.from(menuItemsContainerRef.current?.children || [])
            ].filter(Boolean);

            if (menuItems.length > 0) {
                menuItems.forEach(item => {
                    if (item instanceof HTMLElement) {
                        new SplitText(item, {
                            type: "lines",
                            linesClass: "line-wrapper overflow-hidden"
                        });
                    }
                });

                const splitWords = menuItems.map(item => {
                    if (item instanceof HTMLElement) {
                        return new SplitText(item, { type: "words" }).words;
                    }
                    return [];
                }).flat();

                tl.to(splitWords, {
                    opacity: 0,
                    y: 50,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.in"
                });
            }

            tl.to(menuRef.current, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
                onComplete: resolve
            });
        });
    };

    const openMenu = () => {
        if (!menuRef.current || !menuItemsContainerRef.current) return;

        animateHamburger(true);
        const menuItems = Array.from(menuItemsContainerRef.current.children);

        gsap.fromTo(menuRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }
        );

        menuItems.forEach(item => {
            if (item instanceof HTMLElement) {
                new SplitText(item, {
                    type: "lines",
                    linesClass: "line-wrapper overflow-hidden"
                });
            }
        });

        const splitWords = menuItems.map(item => {
            if (item instanceof HTMLElement) {
                return new SplitText(item, { type: "words" }).words;
            }
            return [];
        }).flat();

        gsap.fromTo(
            splitWords,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out"
            }
        );
    };

    return {
        animateHamburger,
        closeMenu,
        openMenu
    };
};