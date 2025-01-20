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
        <footer className="w-screen px-4 lg:px-24 py-12 lg:py-24 text-text-white border-t border-line bg-background">
            <div className="w-full h-full relative">
                <div className="relative mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                        <div className="md:col-span-6 lg:col-span-8">
                            <div className="space-y-6 mb-8">
                                <TransitionLink href={"/"}>
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div
                                            className="p-2 w-fit bg-icon border border-border-outer rounded-icon ">
                                            <Image
                                                src="/logo/hex-logo.svg"
                                                alt="Logo"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                        <h2 className="text-xl font-[750] tracking-tight leading-none text-text-white">
                                            /hexthecoder
                                        </h2>
                                    </div>
                                </TransitionLink>
                                <p className="font-[500] text-sm text-text-gray leading-relaxed max-w-lg">
                                    Creative front-end developer with a passion for pushing web technologies to their
                                    limits. Combining modern frameworks, responsive design principles, and creative
                                    problem-solving
                                    to deliver exceptional user experiences.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8 md:gap-16 mb-8">
                            <nav aria-label="Main navigation">
                                <div className="text-sm font-[500] w-fit mb-4">
                                    Navigation
                                </div>
                                <div className="flex flex-col gap-2 font-[500]">
                                    {navLinks.map((nav) => (
                                        <TransitionLink
                                            className="text-sm w-fit text-text-gray hover:text-white transition-colors duration-300"
                                            key={nav.href}
                                            href={nav.href}
                                        >
                                            {nav.label}
                                        </TransitionLink>
                                    ))}
                                </div>
                            </nav>

                            <div aria-label="Social media links">
                                <div className="text-sm font-[500] w-fit mb-4">
                                    Socials
                                </div>
                                <div className="flex flex-col gap-2 font-[500]">
                                    {socialLinks.map((link) => (
                                        <Link
                                            className="text-sm w-fit text-text-gray hover:text-white transition-colors duration-300"
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

                <div className="flex flex-wrap gap-2 justify-between items-center border-t border-line pt-8">
                    <div className="text-xs font-[500]">
                        ©{currentYear} Marek Jóźwiak
                    </div>
                    <div className="text-xs font-[500]">
                        All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}