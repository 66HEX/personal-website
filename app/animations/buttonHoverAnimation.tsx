import {gsap} from "gsap";

interface ButtonAnimationRefs {
    buttonRef: HTMLButtonElement | null;
    buttonRef2?: HTMLButtonElement | null;
    buttonRef3?: HTMLButtonElement | null;
}

export const initializeButtonAnimation = ({ buttonRef, buttonRef2, buttonRef3 }: ButtonAnimationRefs) => {
    const cleanupFunctions: (() => void)[] = [];

    if (buttonRef) {
        const buttonRefEnterHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.075)',
                duration: 0.2,
                ease: "linear",
            });
        };

        const buttonRefLeaveHandler = () => {
            gsap.to(buttonRef, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.2,
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
                backgroundColor: 'rgba(255, 255, 255, 0.075)',
                duration: 0.2,
                ease: "linear",
            });
        };

        const buttonRef2LeaveHandler = () => {
            gsap.to(buttonRef2, {
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                duration: 0.2,
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

    if (buttonRef3) {
        const buttonRef3EnterHandler = () => {
            gsap.to(buttonRef3, {
                backgroundColor: 'rgba(247,248,248,0.8)',
                duration: 0.2,
                ease: "linear",
            });
        };

        const buttonRef3LeaveHandler = () => {
            gsap.to(buttonRef3, {
                backgroundColor: '#f7f8f8',
                duration: 0.2,
                ease: "linear",
            });
        };

        buttonRef3.addEventListener('mouseenter', buttonRef3EnterHandler);
        buttonRef3.addEventListener('mouseleave', buttonRef3LeaveHandler);

        cleanupFunctions.push(() => {
            buttonRef3.removeEventListener('mouseenter', buttonRef3EnterHandler);
            buttonRef3.removeEventListener('mouseleave', buttonRef3LeaveHandler);
        });
    }

    return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
    };
};