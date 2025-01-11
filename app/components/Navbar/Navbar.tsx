"use client";

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import { navbarAnimation } from '@/app/animations/navbarAnimation';
import Logo from '@/public/logo/hex-logo.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const toggleButtonLine1Ref = useRef<HTMLDivElement>(null);
    const toggleButtonLine2Ref = useRef<HTMLDivElement>(null);
    const menuItemsContainerRef = useRef<HTMLDivElement>(null);

    // Clean up menu when component unmounts
    useEffect(() => {
        return () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
                document.body.style.overflow = 'visible';
            }
        };
    }, [isMenuOpen]);

    const { closeMenu, openMenu } = navbarAnimation({
        toggleButtonLine1Ref,
        toggleButtonLine2Ref,
        menuRef,
        menuItemsContainerRef,
        isMenuOpen
    });

    const refs = {
        home: useRef(null),
        works: useRef(null),
        about: useRef(null),
        contact: useRef(null),
    };

    const menuItems = [
        { href: "/", label: "Home", ref: refs.home },
        { href: "/works", label: "Works", ref: refs.works },
        { href: "/about", label: "About", ref: refs.about },
        { href: "/contact", label: "Contact", ref: refs.contact },
    ];

    const handleToggleMenu = () => {
        if (isMenuOpen) {
            closeMenu().then(() => {
                setIsMenuOpen(false);
                document.body.style.overflow = 'visible';
            });
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleTransitionStart = async () => {
        if (isMenuOpen) {
            await closeMenu();
            setIsMenuOpen(false);
            document.body.style.overflow = 'visible';
        }
    };

    useGSAP(() => {
        if (isMenuOpen) {
            openMenu();
        }
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 w-screen z-50">
            <nav
                className="absolute inset-0 mx-auto"
                aria-label="Main navigation"
            >
                <div className="w-full mx-auto flex items-center justify-between relative px-4 pt-4 pb-4 md:pb-0">
                    <TransitionLink
                        href="/"
                        className="h-12 w-auto"
                    >
                        <Logo className="h-full w-auto text-white" />
                    </TransitionLink>
                    <div
                        className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-8 px-6 py-3 bg-white/[0.025] border border-white/5 backdrop-blur-3xl rounded-full"
                        aria-label="Desktop navigation"
                    >
                        {menuItems.map((item) => (
                            <TransitionLink
                                key={item.href}
                                href={item.href}
                                className="text-base text-white font-[500]"
                                aria-label={`Navigate to ${item.label} page`}
                                onTransitionStart={handleTransitionStart}
                            >
                                <AnimatedLink>
                                    {item.label}
                                </AnimatedLink>
                            </TransitionLink>
                        ))}
                    </div>

                    <button
                        ref={toggleButtonRef}
                        onClick={handleToggleMenu}
                        className="md:hidden relative h-8 w-8 text-white/50 transition-colors z-50"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <div
                            ref={toggleButtonLine1Ref}
                            className="absolute w-6 border-[1.5px] border-white top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            aria-hidden="true"
                        ></div>
                        <div
                            ref={toggleButtonLine2Ref}
                            className="absolute w-6 border-[1.5px] border-white top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            aria-hidden="true"
                        ></div>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 w-screen min-h-svh h-full md:hidden backdrop-blur-md bg-black/80 z-40"
                    aria-modal="true"
                    aria-label="Mobile navigation menu"
                    id="mobile-menu"
                >
                    <div
                        ref={menuItemsContainerRef}
                        className="flex flex-col items-center justify-center h-full gap-8"
                        aria-label="Mobile navigation links"
                    >
                        {menuItems.map((item) => (
                            <TransitionLink
                                key={item.href}
                                href={item.href}
                                onTransitionStart={handleTransitionStart}
                                className="text-2xl text-white font-[300]"
                                aria-label={`Navigate to ${item.label} page`}
                            >
                                {item.label}
                            </TransitionLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}