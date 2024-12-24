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

    const navLinks = [
        { index: "1", href: "/", label: "Home" },
        { index: "2", href: "/works", label: "Works" },
        { index: "3",href: "/about", label: "About" },
        { index: "4", href: "/contact", label: "Contact" },
    ];

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

    const openMenu = () => {
        const timeline = gsap.timeline();
        timeline
            .to(menuRef.current, {
                height: "200px",
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

    const closeMenu = () => {
        const timeline = gsap.timeline();
        timeline
            .to(linksRef.current,
                {
                    y: -20,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power3.inOut",
                }
            )
            .to(menuRef.current, {
                height: 0,
                marginBottom: "0rem",
                duration: 0.5,
                ease: "power3.inOut",
            });
    };

    useEffect(() => {
        gsap.set(menuRef.current, { height: 0 });
        gsap.set(linksRef.current, { y: -20, opacity: 0 });
    }, []);

    return (
        <nav className="fixed top-2 left-0 text-white z-50 w-full px-4 md:px-24">
            <div className="flex flex-col bg-white/5 border border-white/5 backdrop-blur-3xl py-4 px-4 lg:px-8 rounded-custom overflow-hidden">
                <div className="flex justify-between items-center w-full">
                    <div className="text-2xl font-Lausanne300 tracking-tight leading-none">
                        <TransitionLink href="/">/hex</TransitionLink>
                    </div>

                    <div className="hidden md:flex gap-4 text-xl font-Lausanne250">
                        {navLinks.map((link) => (
                            <TransitionLink key={link.href} href={link.href}>
                                <AnimatedLink>{link.label}
                                </AnimatedLink>
                            </TransitionLink>
                        ))}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className="md:hidden overflow-hidden flex flex-col justify-end space-y-4 font-Lausanne250"
                >
                    {navLinks.map((link, index) => (
                        <div
                            key={link.href}
                            ref={(el) => (linksRef.current[index] = el)}
                        >
                            <TransitionLink href={link.href}>
                                {link.label}
                            </TransitionLink>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
