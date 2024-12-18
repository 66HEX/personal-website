import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";
import {TransitionLink} from "@/app/components/TransitionLink/TransitionLink";

export default function Navbar() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/works", label: "Works" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-2 left-0 text-offwhitetext z-50 w-full px-4 md:px-24">
            <div className="flex justify-between text-sm md:text-xl space-x-4 font-Lausanne250 w-full bg-offblacktext py-4 px-8 rounded-xl overflow-hidden">
                <div className="text-2xl font-Lausanne750 tracking-tight leading-none">
                    <TransitionLink
                        href={"/"}
                    >
                        /hex
                    </TransitionLink>
                </div>
                <div className="flex gap-4">
                    {navLinks.map((link) => (
                        <TransitionLink
                            key={link.href}
                            href={link.href}
                        >
                            <AnimatedLink>
                                {link.label}
                            </AnimatedLink>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
