"use client";

import { useState, useRef, useEffect } from 'react';
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { navbarAnimation } from '@/app/animations/navbarAnimation';
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/",
        label: "LinkedIn",
        ariaLabel: "Visit LinkedIn profile"
    },
    {
        href: "https://www.instagram.com/hexthecoder/",
        label: "Instagram",
        ariaLabel: "Visit Instagram profile"
    },
    {
        href: "https://github.com/66HEX/",
        label: "Github",
        ariaLabel: "Visit Github profile"
    },
    {
        href: "mailto:hexthecoder@gmail.com",
        label: "Email",
        ariaLabel: "Send an email"
    },
];

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
    const menuItemsContainerRef = useRef(null);
    const socialMenuContainerRef = useRef(null);
    const contactMenuContainerRef = useRef(null);

    const { toggleMenu, initializeAnimation } = navbarAnimation({
        toggleButtonLine1Ref,
        toggleButtonLine2Ref,
        menuRef,
        menuItemsContainerRef,
        socialMenuContainerRef,
        contactMenuContainerRef,
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
                        <div className="p-2 bg-card-outer  border border-card-border rounded-lg backdrop-blur-3xl">
                            <Image
                                src="/logo/hex-logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                        </div>
                    </TransitionLink>

                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center flex-1">
                        <div
                            className="flex items-center gap-8 px-6 py-3 bg-card-outer border border-card-border backdrop-blur-3xl rounded-full"
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
                        className="md:hidden relative h-12 w-12 text-text-gray p-4 bg-card-outer border border-card-border rounded-lg backdrop-blur-3xl z-50"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <div
                            ref={toggleButtonLine1Ref}
                            className="absolute w-6 border-[1.5px] border-text-white top-[40%] left-1/2 transform -translate-x-1/2 rounded-sm origin-center"
                            aria-hidden="true"
                        ></div>
                        <div
                            ref={toggleButtonLine2Ref}
                            className="absolute w-6 border-[1.5px] border-text-white top-[60%] left-1/2 transform -translate-x-1/2 rounded-sm origin-center"
                            aria-hidden="true"
                        ></div>
                    </button>
                </div>
            </nav>

            <div
                ref={menuRef}
                style={{ opacity: 0 }}
                className="fixed right-0 top-0 w-3/5 min-h-svh h-full py-20 px-4 md:hidden backdrop-blur-3xl bg-background/20 z-30 overflow-y-auto"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                id="mobile-menu"
            >
                <div className="flex flex-col gap-4">
                    {/* Navigation Links */}
                    <div
                        ref={menuItemsContainerRef}
                        className="flex flex-col items-start justify-start gap-6 p-4 border border-card-border bg-card-inner backdrop-blur-sm rounded-outer-card"
                        aria-label="Mobile navigation links"
                    >
                        <h3
                            className="ml-auto px-3 py-1 font-[400] text-xs text-text-white bg-card-inner border border-card-border rounded-full">
                            Navigation
                        </h3>
                        <div className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <TransitionLink
                                    key={item.href}
                                    href={item.href}
                                    onTransitionStart={handleTransitionStart}
                                    className="text-lg text-text-white font-[300]"
                                    aria-label={`Navigate to ${item.label} page`}
                                >
                                    {item.label}
                                </TransitionLink>
                            ))}
                        </div>
                    </div>

                    <div
                        ref={socialMenuContainerRef}
                        className="flex flex-col items-start justify-start gap-6 p-4 border bg-card-inner border-card-border backdrop-blur-sm rounded-outer-card">
                        <h3
                            className="ml-auto px-3 py-1 font-[400] text-xs text-text-white bg-card-inner border border-card-border rounded-full">
                            Socials
                        </h3>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-text-white font-[300]"
                                    aria-label={link.ariaLabel}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                    </div>

                    <div
                        ref={contactMenuContainerRef}
                        className="p-4 flex flex-col gap-6 border bg-card-inner border-card-border backdrop-blur-sm rounded-outer-card">
                        <h3
                            className="ml-auto px-3 py-1 font-[400] text-xs text-text-white bg-card-inner border border-card-border rounded-full">
                            Contact
                        </h3>
                        <Link
                            href="mailto:hexthecoder@gmail.com"
                            className="text-sm text-text-gray hover:text-text-white transition-colors"
                        >
                            hexthecoder@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}