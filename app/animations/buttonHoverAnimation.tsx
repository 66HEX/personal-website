import {gsap} from "gsap";

interface ButtonAnimationRefs {
    buttonRef: HTMLButtonElement | null;
    buttonRef2?: HTMLButtonElement | null; // opcjonalny drugi przycisk
}

export const initializeButtonAnimation = ({ buttonRef, buttonRef2 }: ButtonAnimationRefs) => {
    const cleanupFunctions: (() => void)[] = [];

    // Animacja dla pierwszego przycisku
    if (buttonRef) {
        const buttonRefEnterHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                duration: 0.25,
                ease: "power3.out",
            });
        };

        const buttonRefLeaveHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.25,
                ease: "power3.in",
            });
        };

        buttonRef.addEventListener('mouseenter', buttonRefEnterHandler);
        buttonRef.addEventListener('mouseleave', buttonRefLeaveHandler);

        cleanupFunctions.push(() => {
            buttonRef.removeEventListener('mouseenter', buttonRefEnterHandler);
            buttonRef.removeEventListener('mouseleave', buttonRefLeaveHandler);
        });
    }

    // Animacja dla drugiego przycisku (opcjonalna)
    if (buttonRef2) {
        const buttonRef2EnterHandler = () => {
            gsap.to(buttonRef2, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                duration: 0.25,
                ease: "power3.out",
            });
        };

        const buttonRef2LeaveHandler = () => {
            gsap.to(buttonRef2, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.25,
                ease: "power3.in",
            });
        };

        buttonRef2.addEventListener('mouseenter', buttonRef2EnterHandler);
        buttonRef2.addEventListener('mouseleave', buttonRef2LeaveHandler);

        cleanupFunctions.push(() => {
            buttonRef2.removeEventListener('mouseenter', buttonRef2EnterHandler);
            buttonRef2.removeEventListener('mouseleave', buttonRef2LeaveHandler);
        });
    }

    return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
    };
};