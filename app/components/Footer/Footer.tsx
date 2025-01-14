'use client';

import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import Link from "next/link";
import Image from "next/image";

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

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-screen px-4 lg:px-24 py-12 lg:py-24 text-text-white border-t border-text-white/5 bg-white/[0.05] backdrop-blur-sm">
            <div className="w-full h-full relative">
                <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                        <div className="md:col-span-6 lg:col-span-8">
                            <div className="space-y-6">
                                <TransitionLink href={"/"}>
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div
                                            className="p-2 w-fit bg-white/[0.025] border border-text-white/5 rounded-lg ">
                                            <Image
                                                src="/logo/hex-logo.svg"
                                                alt="Logo"
                                                width={32}
                                                height={32}
                                                className="invert"
                                            />
                                        </div>
                                        <h2 className="text-xl font-[750] tracking-tight leading-none text-text-white">
                                            /hexthecoder
                                        </h2>
                                    </div>
                                </TransitionLink>
                                <p className="font-[400] text-sm text-text-gray leading-relaxed max-w-lg">
                                    Creative front-end developer with a passion for pushing web technologies to their
                                    limits. Combining modern frameworks, responsive design principles, and creative
                                    problem-solving
                                    to deliver exceptional user experiences.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8 md:gap-16">
                            <nav aria-label="Main navigation">
                                <div className="text-sm font-[400] w-fit mb-4">
                                    Navigation
                                </div>
                                <div className="flex flex-col gap-2 font-[400]">
                                    {navLinks.map((nav) => (
                                        <TransitionLink
                                            className="text-sm w-fit text-text-gray hover:text-text-white transition-colors"
                                            key={nav.href}
                                            href={nav.href}
                                        >
                                            {nav.label}
                                        </TransitionLink>
                                    ))}
                                </div>
                            </nav>

                            <div aria-label="Social media links">
                                <div className="text-sm font-[400] w-fit mb-4">
                                    Socials
                                </div>
                                <div className="flex flex-col gap-2 font-[400]">
                                    {socialLinks.map((link) => (
                                        <Link
                                            className="text-sm w-fit text-text-gray hover:text-text-white transition-colors"
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-between items-center border-t border-text-white/5 pt-8">
                    <div className="text-xs font-[400]">
                        ©{currentYear} Marek Jóźwiak
                    </div>
                    <div className="text-xs font-[400]">
                        All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}