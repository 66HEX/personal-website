'use client';

import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";
import Link from "next/link";

const socialLinks = [
    { href: "https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/", label: "LinkedIn" },
    { href: "https://www.instagram.com/hexthecoder/", label: "Instagram" },
    { href: "https://github.com/66HEX/", label: "Github" },
    { href: "mailto:hexthecoder@gmail.com", label: "Email" },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="relative w-screen bg-white/5 text-white">
            <div className="w-full px-4 lg:px-24 py-12 lg:py-24">
                <div className="flex items-center justify-between w-full mb-12">
                    <h1 className="text-2xl lg:text-5xl font-[750] uppercase tracking-tight leading-none">
                        /hex
                        <sup className="text-xs md:text-sm tracking-normal align-top opacity-50 ml-1">
                            dev
                        </sup>
                    </h1>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                    <div className="col-span-2 flex flex-col justify-start">
                        <div>
                            <p className="font-[750] text-sm lg:text-base leading-relaxed opacity-50">
                                Creative Front-end developer with a passion for pushing web technologies to their
                                limits. Combining modern frameworks, responsive design principles, and creative problem-solving
                                to deliver exceptional user experiences that exceed expectations and drive results.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col justify-start items-start gap-4">
                        <div className="w-full">
                            <p className="font-[750] text-sm md:text-xl mb-4">Navigation</p>
                            <div className="flex flex-col gap-2 font-[300]">
                                {navLinks.map((nav) => (
                                    <TransitionLink
                                        className="text-sm"
                                        key={nav.href}
                                        href={nav.href}
                                    >
                                        <AnimatedLink>{nav.label}</AnimatedLink>
                                    </TransitionLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col justify-start items-start gap-4">
                        <div className="w-full">
                            <p className="font-[750] text-sm md:text-xl mb-4">Socials</p>
                            <div className="flex flex-col gap-2 font-[300]">
                                {socialLinks.map((link) => (
                                    <Link
                                        className="text-sm"
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

                <div className="mt-12 pt-8 border-t border-white/20 flex justify-between items-center">
                    <p className="text-xs font-[300] opacity-50">
                        ©2024 Marek Jóźwiak.
                    </p>
                    <p className="text-xs font-[300] opacity-50">
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}