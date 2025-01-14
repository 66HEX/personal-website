"use client";

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { navbarAnimation } from '@/app/animations/navbarAnimation';
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const toggleButtonLine1Ref = useRef<HTMLDivElement>(null);
    const toggleButtonLine2Ref = useRef<HTMLDivElement>(null);
    const menuItemsContainerRef = useRef<HTMLDivElement>(null);

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
        <header className="fixed top-4 left-0 right-0 w-screen z-50">
            <nav className="absolute inset-0 mx-auto px-4" aria-label="Main navigation">
                <div className="w-full flex items-center justify-between md:justify-start relative">
                    <TransitionLink href={"/"}>
                        <div className="p-2 bg-white/5 border border-text-white/5 rounded-lg backdrop-blur-3xl">
                            <Image
                                src="/logo/hex-logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="invert"
                            />
                        </div>
                    </TransitionLink>

                    <div
                        className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center flex-1">
                        <div
                            className="flex items-center gap-8 px-6 py-3 bg-white/5 border border-text-white/5 backdrop-blur-3xl rounded-full"
                            aria-label="Desktop navigation"
                        >
                        {menuItems.map((item) => (
                                <TransitionLink
                                    key={item.href}
                                    href={item.href}
                                    className="text-base text-text-gray font-[500]"
                                    aria-label={`Navigate to ${item.label} page`}
                                    onTransitionStart={handleTransitionStart}
                                >
                                    {item.label}
                                </TransitionLink>
                            ))}
                        </div>
                    </div>

                    <button
                        ref={toggleButtonRef}
                        onClick={handleToggleMenu}
                        className="md:hidden relative h-12 w-12 text-text-gray p-4 bg-white/5 border border-text-white/5 rounded-lg backdrop-blur-3xl z-50"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <div
                            ref={toggleButtonLine1Ref}
                            className="absolute w-6 border-[1.5px] border-text-white top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"
                            aria-hidden="true"
                        ></div>
                        <div
                            ref={toggleButtonLine2Ref}
                            className="absolute w-6 border-[1.5px] border-text-white top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"
                            aria-hidden="true"
                        ></div>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 w-screen min-h-svh h-full md:hidden backdrop-blur-md bg-background/80 z-40"
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
                                className="text-2xl text-text-white font-[300]"
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