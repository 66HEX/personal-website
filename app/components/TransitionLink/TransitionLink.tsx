"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
                                                                  children,
                                                                  href,
                                                                  className,  // Destructure className
                                                                  ...props
                                                              }) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        gsap.to("#page-transition", {
            opacity: 0,
            duration: 1,
            ease: "power3.in",
            onComplete: () => {
                router.push(href);
                gsap.fromTo("#page-transition", { opacity: 0 },
                    { opacity: 1, delay: 0.5, duration: 1 });
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
