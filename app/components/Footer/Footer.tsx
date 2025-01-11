'use client';

import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";
import Link from "next/link";
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/",
        label: "LinkedIn",
        icon: Linkedin,
        ariaLabel: "Visit LinkedIn profile"
    },
    {
        href: "https://www.instagram.com/hexthecoder/",
        label: "Instagram",
        icon: Instagram,
        ariaLabel: "Visit Instagram profile"
    },
    {
        href: "https://github.com/66HEX/",
        label: "Github",
        icon: Github,
        ariaLabel: "Visit Github profile"
    },
    {
        href: "mailto:hexthecoder@gmail.com",
        label: "Email",
        icon: Mail,
        ariaLabel: "Send an email"
    },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative w-full bg-black text-white border-t border-white/5"
            aria-label="Footer"
        >
            <div className="container mx-auto px-4 lg:px-24 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    <div className="md:col-span-6 lg:col-span-6">
                        <div className="space-y-6">
                            <h1 className="text-2xl lg:text-4xl font-[750] tracking-tight leading-none">
                                /hex
                                <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                                    dev
                                </sup>
                            </h1>
                            <p className="font-[500] text-sm lg:text-base text-white/80 leading-relaxed">
                                Creative front-end developer with a passion for pushing web technologies to their
                                limits. Combining modern frameworks, responsive design principles, and creative problem-solving
                                to deliver exceptional user experiences.                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 gap-8 md:gap-16">
                        <nav aria-label="Main navigation">
                            <p className="font-[750] text-sm md:text-xl mb-4">Navigation</p>
                            <div className="flex flex-col gap-2 font-[500]">
                                {navLinks.map((nav) => (
                                    <TransitionLink
                                        className="text-sm w-fit"
                                        key={nav.href}
                                        href={nav.href}
                                    >
                                        <AnimatedLink>{nav.label}</AnimatedLink>
                                    </TransitionLink>
                                ))}
                            </div>
                        </nav>

                        <div aria-label="Social media links">
                            <p className="font-[750] text-sm md:text-xl mb-4">Socials</p>
                            <div className="flex flex-col gap-2 font-[500]">
                                {socialLinks.map((link) => (
                                    <Link
                                        className="text-sm w-fit"
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AnimatedLink>{link.label}</AnimatedLink>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-white/80 font-[500]">
                        ©{currentYear} Marek Jóźwiak
                    </p>
                    <p className="text-sm text-white/80 font-[500]">
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}