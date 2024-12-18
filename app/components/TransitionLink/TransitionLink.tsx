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
            duration: 0.5,
            ease: "power3.in",
            onComplete: async () => {
                router.push(href);
                await sleep(200);
                gsap.fromTo("#page-transition", { opacity: 0 },
                    { opacity: 1, duration: 0.5 });
            },
        });
    };

    return (
        <Link
            {...props}
            href={href}
            onClick={handleTransition}
            className={className}  // Apply className to the Link component
        >
            {children}
        </Link>
    );
};
