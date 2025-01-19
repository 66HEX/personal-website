import {gsap} from "gsap";

interface ButtonAnimationRefs {
    buttonRef: HTMLButtonElement | null;
    buttonRef2?: HTMLButtonElement | null;
}

export const initializeButtonAnimation = ({ buttonRef, buttonRef2 }: ButtonAnimationRefs) => {
    const cleanupFunctions: (() => void)[] = [];

    if (buttonRef) {
        const buttonRefEnterHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                duration: 0.25,
                ease: "linear",
            });
        };

        const buttonRefLeaveHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.25,
                ease: "linear",
            });
        };

        buttonRef.addEventListener('mouseenter', buttonRefEnterHandler);
        buttonRef.addEventListener('mouseleave', buttonRefLeaveHandler);

        cleanupFunctions.push(() => {
            buttonRef.removeEventListener('mouseenter', buttonRefEnterHandler);
            buttonRef.removeEventListener('mouseleave', buttonRefLeaveHandler);
        });
    }
    if (buttonRef2) {
        const buttonRef2EnterHandler = () => {
            gsap.to(buttonRef2, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                duration: 0.25,
                ease: "linear",
            });
        };

        const buttonRef2LeaveHandler = () => {
            gsap.to(buttonRef2, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.25,
                ease: "linear",
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