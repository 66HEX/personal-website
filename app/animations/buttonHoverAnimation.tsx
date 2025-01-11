import {gsap} from "gsap";

export const initializeButtonAnimation = (buttonRef: HTMLButtonElement | null) => {
    if (!buttonRef) return;

    const enterHandler = () => {
        gsap.to(buttonRef, {
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            duration: 0.25,
            ease: "power3.out",
        });
    };

    const leaveHandler = () => {
        gsap.to(buttonRef, {
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.025)',
            duration: 0.25,
            ease: "power3.in",
        });
    };

    buttonRef.addEventListener('mouseenter', enterHandler);
    buttonRef.addEventListener('mouseleave', leaveHandler);

    return () => {
        buttonRef.removeEventListener('mouseenter', enterHandler);
        buttonRef.removeEventListener('mouseleave', leaveHandler);
    };
};