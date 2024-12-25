"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const linksRef = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { index: "01", href: "/", label: "Home" },
        { index: "02", href: "/works", label: "Works" },
        { index: "03", href: "/about", label: "About" },
        { index: "04", href: "/contact", label: "Contact" },
    ];

    useEffect(() => {
        gsap.set(menuRef.current, { height: 0, overflow: "hidden" });
    }, []);

    const closeMenu = () => {
        if (!isOpen) return;

        const timeline = gsap.timeline();
        timeline
            .to(linksRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.inOut",
            })
            .to(menuRef.current, {
                height: 0,
                marginBottom: "0rem",
                duration: 0.5,
                ease: "power3.inOut",
            });

        setIsOpen(false);
    };

    const openMenu = () => {
        const timeline = gsap.timeline();
        timeline
            .to(menuRef.current, {
                height: "auto",
                marginBottom: "1rem",
                duration: 0.5,
                ease: "power3.inOut",
            })
            .fromTo(
                linksRef.current,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.inOut",
                },
            );
    };

    const toggleMenu = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (newState) {
                openMenu();
            } else {
                closeMenu();
            }
            return newState;
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-4 left-0 text-white z-50 w-full px-4 lg:px-24">
            <div
                ref={containerRef}
                className="flex flex-col bg-black/50 border border-white/20 backdrop-blur-3xl rounded-custom overflow-hidden"
            >
                <div className="flex justify-between items-center w-full px-4 md:px-8 py-4">
                    <div className="flex items-center">
                        <TransitionLink
                            href="/"
                            className="text-2xl lg:text-3xl font-[750] tracking-tight leading-none"
                        >
                            /hex
                            <sup className="text-xs tracking-normal align-top opacity-50">
                                dev
                            </sup>
                        </TransitionLink>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <TransitionLink
                                key={link.href}
                                href={link.href}
                                className="group relative"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-[300] opacity-50">{link.index}</span>
                                    <AnimatedLink className="text-base font-[300]">
                                        {link.label}
                                    </AnimatedLink>
                                </div>
                            </TransitionLink>
                        ))}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div
                    ref={menuRef}
                    className="md:hidden overflow-hidden px-4"
                >
                    {navLinks.map((link, index) => (
                        <div
                            key={link.href}
                            ref={(el) => (linksRef.current[index] = el)}
                            className="py-2"
                        >
                            <TransitionLink
                                href={link.href}
                                className="flex items-center gap-2"
                                onClick={(event) => {
                                    closeMenu()}}
                            >
                                <span className="text-xs font-[300] opacity-50">{link.index}</span>
                                <span className="text-sm font-[300]">{link.label}</span>
                            </TransitionLink>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
