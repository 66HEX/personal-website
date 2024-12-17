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
        <nav className="fixed top-0 left-0 pt-4 bg-offwhitebackground text-offblacktext z-50 w-screen">
            <div className="flex justify-between text-lg space-x-4 font-Lausanne250 w-full px-4 md:px-8">
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
            <hr className="border border-black opacity-10 z-50 mt-4"/>
        </nav>
    );
}
