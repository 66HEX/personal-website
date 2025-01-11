"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    closeMenu?: () => void;
    ref?: React.RefObject<HTMLAnchorElement>;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
                                                                  children,
                                                                  href,
                                                                  className,
                                                                  closeMenu,
                                                                  ref,
                                                                  ...props
                                                              }) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.zIndex = '9999';
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(5, 1fr)';
        document.body.appendChild(container);

        const stripes = Array.from({ length: 5 }, () => {
            const stripe = document.createElement('div');
            stripe.style.height = '100%';
            stripe.style.backgroundColor = '#171717';
            stripe.style.transformOrigin = 'top';
            stripe.style.transform = 'scaleY(0)';
            container.appendChild(stripe);
            return stripe;
        });

        await gsap.to(stripes, {
            scaleY: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.inOut"
        });

        if (closeMenu) {
            closeMenu();
        }

        router.push(href);

        await gsap.to(stripes, {
            scaleY: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.inOut",
            transformOrigin: 'bottom',
            onComplete: () => {
                container.remove();
            }
        });
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