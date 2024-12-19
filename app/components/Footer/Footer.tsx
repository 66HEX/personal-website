import Link from "next/link";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";

const socialLinks = [
    { href: "https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/", label: "LinkedIn" },
    { href: "https://www.instagram.com/hexthecoder/", label: "Instagram" },
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
        <div
            className="relative h-[32rem] md:h-[24rem]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div
                className="fixed bottom-0 h-[32rem] md:h-[24rem] w-full bg-offblacktext text-offwhitetext">
                <div className="w-full px-4 lg:px-24 py-12 font-Lausanne250">
                    <h1 className="text-2xl lg:text-5xl font-Lausanne750 tracking-tight leading-none mb-4 opacity-50">
                        /hex
                    </h1>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-24">
                        {/* Left section */}
                        <div className="col-span-2 flex flex-col justify-start">
                            <p className="text-sm lg:text-base leading-relaxed">
                                Front-end developer with a passion for pushing web technologies to their limits.
                                Combining modern frameworks, responsive design principles, and creative problem-solving
                                to deliver exceptional user experiences that exceed expectations and drive results.
                                <span className="font-Lausanne750 opacity-50"> Always learning, always delivering.</span>
                            </p>
                        </div>

                        <div className="col-span-1 flex flex-col justify-start items-start gap-4 text-sm">
                            <div className="flex flex-col gap-2">
                                <p className="opacity-50 font-Lausanne750">Navigation</p>
                                {navLinks.map((nav) => (
                                    <Link key={nav.href} href={nav.href}>
                                        <AnimatedLink>{nav.label}</AnimatedLink>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col justify-start items-start gap-4 text-sm">
                            <div className="flex flex-col gap-2">
                                <p className="opacity-50 font-Lausanne750">Socials</p>
                                {socialLinks.map((link) => (
                                    <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                        <AnimatedLink>{link.label}</AnimatedLink>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="absolute bottom-4 right-4 lg:right-24 text-xs font-Lausanne750 opacity-50">
                    ©2024 Marek Jóźwiak. All rights reserved.
                </p>

            </div>
        </div>
    );
}
