// TransitionLink.tsx
"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
                                                                  children,
                                                                  href,
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
            filter: "blur(10px)",
            ease: "power3.in",
            onComplete: async () => {
                router.push(href);
                await sleep(400);

                gsap.fromTo("#page-transition", { opacity: 0 },
                    {opacity: 1,
                            duration: 1,
                            filter: "blur(0px)",});
            },
        });
    };

    return <Link {...props} href={href} onClick={handleTransition}>{children}</Link>;
};
