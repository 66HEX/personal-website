"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useEffect, useCallback, useState, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

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
    const pathname = usePathname();
    const lenis = useLenis();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const mainContentRef = useRef<HTMLElement | null>(null);
    const lastClickedHref = useRef<string>("");

    useEffect(() => {
        setIsTransitioning(false);
        lastClickedHref.current = "";
    }, [pathname]);

    const animateOut = useCallback(async () => {
        const mainContent = document.querySelector('main') as HTMLElement || document.body.children[0] as HTMLElement;
        mainContentRef.current = mainContent;

        return new Promise<void>((resolve) => {
            gsap.to(mainContent, {
                y: "-25vh",
                opacity: 0,
                duration: 0.7,
                ease: "power3.inOut",
                onComplete: resolve
            });
        });
    }, []);

    const animateIn = useCallback(() => {
        const newContent = document.querySelector('main') as HTMLElement || document.body.children[0] as HTMLElement;

        return new Promise<void>((resolve) => {
            gsap.set(newContent, {
                y: "25vh",
                opacity: 0
            });

            setTimeout(() => {
                gsap.to(newContent, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.inOut",
                    onComplete: resolve
                });
            }, 50);
        });
    }, []);

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        if (isTransitioning || lastClickedHref.current === href) {
            return;
        }

        const hrefWithoutHash = href.split('#')[0];
        const isCurrentPage = hrefWithoutHash === pathname;

        if (isCurrentPage && lenis) {
            lenis.scrollTo(0, { immediate: false });
            return;
        }

        setIsTransitioning(true);
        lastClickedHref.current = href;

        try {
            if (onTransitionStart) {
                await onTransitionStart();
            }

            await animateOut();

            const navigationPromise = new Promise<void>((resolve) => {
                router.push(href);

                let attempts = 0;
                const maxAttempts = 5;

                const checkContent = () => {
                    const newContent = document.querySelector('main') as HTMLElement || document.body.children[0] as HTMLElement;

                    if (newContent && newContent !== mainContentRef.current && newContent.children.length > 0) {
                        resolve();
                    } else if (attempts < maxAttempts) {
                        attempts++;
                        setTimeout(checkContent, 50);
                    } else {
                        resolve();
                    }
                };

                checkContent();
            });

            await navigationPromise;
            await animateIn();
        } catch (error) {
            console.error('Transition error:', error);
            const content = document.querySelector('main') as HTMLElement || document.body.children[0] as HTMLElement;
            if (content) {
                gsap.set(content, { clearProps: "all" });
            }
        } finally {
            setIsTransitioning(false);
            lastClickedHref.current = "";
        }
    };

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