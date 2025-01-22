"use client";

import { useState, useRef, useEffect } from 'react';
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { navbarAnimation } from '@/app/animations/navbarAnimation';
import Image from "next/image";
import IconCard from "@/app/components/IconCard/iconCard";

const menuItems = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const toggleButtonLine1Ref = useRef(null);
    const toggleButtonLine2Ref = useRef(null);

    const { toggleMenu, initializeAnimation } = navbarAnimation({
        toggleButtonLine1Ref,
        toggleButtonLine2Ref,
        menuRef,
        isMenuOpen
    });

    useEffect(() => {
        const timeline = initializeAnimation();
        return () => {
            if (isMenuOpen) {
                document.body.style.overflow = 'visible';
            }
            timeline?.kill();
        };
    }, []);

    const handleToggleMenu = async () => {
        await toggleMenu();
        const newIsMenuOpen = !isMenuOpen;
        setIsMenuOpen(newIsMenuOpen);
        document.body.style.overflow = newIsMenuOpen ? 'hidden' : 'visible';
    };

    const handleTransitionStart = async () => {
        if (isMenuOpen) {
            await toggleMenu();
            setIsMenuOpen(false);
            document.body.style.overflow = 'visible';
        }
    };

    return (
        <header className="fixed top-4 left-0 right-0 w-screen z-50">
            <nav className="absolute inset-0 mx-auto px-4" aria-label="Main navigation">
                <div className="w-full flex items-center justify-between md:justify-start relative">
                    <TransitionLink href={"/"}>
                        <IconCard className="backdrop-blur-3xl z-50">
                            <Image
                                src="/logo/hex-logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                        </IconCard>
                    </TransitionLink>

                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center flex-1">
                        <div
                            className="relative flex items-center gap-8 px-6 py-3 bg-icon border border-border-outer backdrop-blur-xl rounded-icon overflow-hidden"
                            aria-label="Desktop navigation"
                        >
                            {menuItems.map((item) => (
                                <TransitionLink
                                    key={item.href}
                                    href={item.href}
                                    className="text-base text-text-gray hover:text-white transition-colors duration-300 font-[400]"
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
                        className="md:hidden relative h-12 w-12 text-text-gray p-4 bg-icon border border-border-outer rounded-icon backdrop-blur-3xl z-50"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <div
                            ref={toggleButtonLine1Ref}
                            className="absolute w-6 border border-text-white top-[40%] left-1/2 transform -translate-x-1/2 rounded-sm origin-center"
                            aria-hidden="true"
                        ></div>
                        <div
                            ref={toggleButtonLine2Ref}
                            className="absolute w-6 border border-text-white top-[60%] left-1/2 transform -translate-x-1/2 rounded-sm origin-center"
                            aria-hidden="true"
                        ></div>
                    </button>
                </div>
            </nav>

            <div
                ref={menuRef}
                style={{ height: 0, opacity: 0}}
                className="fixed right-2 left-2 top-2 px-4 md:hidden  bg-background/40 border border-transparent rounded-icon z-30 overflow-y-auto"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                id="mobile-menu"
            >
                <div className="flex flex-col gap-4">
                    <div
                        className="flex flex-col items-start justify-start gap-6 pb-12 pt-24 bg-icon relative"
                        aria-label="Mobile navigation links"
                    >
                        <div className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <TransitionLink
                                    key={item.href}
                                    href={item.href}
                                    onTransitionStart={handleTransitionStart}
                                    className="text-sm text-text-gray hover:text-white transition-colors duration-300 font-[400]"
                                    aria-label={`Navigate to ${item.label} page`}
                                >
                                    {item.label}
                                </TransitionLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}