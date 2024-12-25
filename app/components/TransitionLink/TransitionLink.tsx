"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    closeMenu?: () => void;  // Dodajemy prop do zamykania menu
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
                                                                  children,
                                                                  href,
                                                                  className,
                                                                  closeMenu,  // Destrukturyzujemy closeMenu
                                                                  ...props
                                                              }) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        gsap.to("#page-transition", {
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            onComplete: () => {
                router.push(href);
                gsap.fromTo("#page-transition", { opacity: 0 },
                    { opacity: 1, delay: 0.5, duration: 0.5 });

                // Jeśli przekazano closeMenu, wywołujemy ją po zakończeniu przejścia
                if (closeMenu) {
                    closeMenu();
                }
            },
        });
    };

    return (
        <Link
            {...props}
            href={href}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    );
};

