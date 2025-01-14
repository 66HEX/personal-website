"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useEffect, useCallback, useState } from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onTransitionStart?: () => Promise<void>;
    ref?: React.RefObject<HTMLAnchorElement>;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
                                                                  children,
                                                                  href,
                                                                  className,
                                                                  onTransitionStart,
                                                                  ref,
                                                                  ...props
                                                              }) => {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const animateOut = useCallback(async () => {
        const mainContent = document.querySelector('main') || document.body.children[0];
        gsap.set(mainContent, {
            transformOrigin: "center center"
        });

        return gsap.to(mainContent, {
            y: "-25vh",
            opacity: 0,
            duration: 0.7,
            ease: "power3.inOut"
        });
    }, []);

    const animateIn = useCallback(() => {
        const newContent = document.querySelector('main') || document.body.children[0];
        gsap.set(newContent, {
            y: "25vh",
            opacity: 0,
            transformOrigin: "center center"
        });

        return gsap.to(newContent, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.inOut"
        });
    }, []);

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        if (isTransitioning) return;
        setIsTransitioning(true);

        try {
            if (onTransitionStart) {
                await onTransitionStart();
            }

            await animateOut();

            // Tworzymy Promise, który rozwiąże się po załadowaniu nowej strony
            const navigationPromise = new Promise<void>((resolve) => {
                // Ustawiamy timer jako zabezpieczenie
                const timeoutId = setTimeout(() => resolve(), 2000);

                // Funkcja sprawdzająca, czy nowa strona jest załadowana
                const checkForNewContent = () => {
                    const newContent = document.querySelector('main') || document.body.children[0];
                    if (newContent && newContent.children.length > 0) {
                        clearTimeout(timeoutId);
                        resolve();
                    } else {
                        requestAnimationFrame(checkForNewContent);
                    }
                };

                router.push(href);
                requestAnimationFrame(checkForNewContent);
            });

            await navigationPromise;
            await animateIn();
        } finally {
            setIsTransitioning(false);
        }
    };

    // Resetowanie stanu przy odmontowaniu
    useEffect(() => {
        return () => {
            setIsTransitioning(false);
        };
    }, []);

    return (
        <Link
            {...props}
            ref={ref}
            href={href}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    );
};