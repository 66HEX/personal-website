import React, { forwardRef, ButtonHTMLAttributes, RefCallback, useEffect, useRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Testimonial = 'testimonial',
    Works = 'works',
    About = 'about',
    Contact = 'contact'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    variant?: ButtonVariant;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    key?: string | number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    'aria-label'?: string;
}

const buttonStyles: Record<ButtonVariant, string> = {
    [ButtonVariant.Primary]: 'inline-flex items-center justify-center px-6 py-3 text-sm font-[400] bg-text-white text-background border border-border-outer rounded-icon',
    [ButtonVariant.Secondary]: 'inline-flex items-center justify-center px-6 py-3 text-sm font-[400] bg-icon border border-border-outer rounded-icon',
    [ButtonVariant.Testimonial]: 'p-2 bg-icon border border-border-inner rounded-icon',
    [ButtonVariant.Works]: 'flex items-center gap-3 p-3 bg-icon border border-border-inner rounded-icon',
    [ButtonVariant.About]: 'flex items-center justify-center gap-3 p-3 bg-icon border border-border-inner rounded-icon',
    [ButtonVariant.Contact]: 'flex items-center justify-center gap-3 mt-4 w-full p-3 bg-icon border border-border-inner rounded-icon disabled:opacity-50 disabled:cursor-not-allowed'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                               children = 'Contact',
                                                               className = '',
                                                               variant = ButtonVariant.Primary,
                                                               type = 'button',
                                                               disabled,
                                                               onClick,
                                                               'aria-label': ariaLabel,
                                                               ...props
                                                           }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);

    // Używamy useImperativeHandle do bezpiecznego przekazania referencji
    useImperativeHandle(ref, () => internalRef.current!, []);

    useEffect(() => {
        const button = internalRef.current;
        if (!button) return;

        let enterAnimation;
        let leaveAnimation;

        if (variant === ButtonVariant.Primary) {
            enterAnimation = () => {
                gsap.to(button, {
                    backgroundColor: 'rgba(247,248,248,0.8)',
                    duration: 0.2,
                    ease: "linear",
                });
            };

            leaveAnimation = () => {
                gsap.to(button, {
                    backgroundColor: '#f7f8f8',
                    duration: 0.2,
                    ease: "linear",
                });
            };
        } else {
            enterAnimation = () => {
                gsap.to(button, {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.075)',
                    duration: 0.2,
                    ease: "linear",
                });
            };

            leaveAnimation = () => {
                gsap.to(button, {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    duration: 0.2,
                    ease: "linear",
                });
            };
        }

        button.addEventListener('mouseenter', enterAnimation);
        button.addEventListener('mouseleave', leaveAnimation);

        return () => {
            button.removeEventListener('mouseenter', enterAnimation);
            button.removeEventListener('mouseleave', leaveAnimation);
        };
    }, [variant]);

    const baseStyles = buttonStyles[variant];

    return (
        <button
            ref={internalRef}
            type={type}
            disabled={disabled}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`${baseStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export type { ButtonProps };
export default Button;