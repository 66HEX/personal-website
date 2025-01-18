import { ReactNode } from 'react';

type BackgroundVariant = 'default' | 'stronger' | 'subtle' | 'heavy';

interface BackgroundOverlayProps {
    variant?: BackgroundVariant;
    className?: string;
    children?: ReactNode;
}

const BackgroundOverlay = ({
                               variant = 'default',
                               className = '',
                               children
                           }: BackgroundOverlayProps) => {
    const variants = {
        default: {
            top: "from-white/10 to-transparent",
            bottom: "from-white/5 to-transparent",
            sides: "from-white/5 to-transparent",
        },
        stronger: {
            top: "from-white/15 to-transparent",
            bottom: "from-white/8 to-transparent",
            sides: "from-white/8 to-transparent",
        },
        subtle: {
            top: "from-white/[0.05] to-transparent",
            bottom: "from-white/[0.025] to-transparent",
            sides: "from-white/[0.025] to-transparent",
        },
        heavy: {
            top: "from-white/10 via-white/5 to-transparent",
            bottom: "from-white/[0.02] to-transparent",
            sides: "from-white/[0.05] to-transparent",
        }
    };

    const selectedVariant = variants[variant];

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Top gradient */}
            <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${selectedVariant.top}`} />

            {/* Bottom gradient */}
            <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${selectedVariant.bottom}`} />

            {/* Left gradient */}
            <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${selectedVariant.sides}`} />

            {/* Right gradient */}
            <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${selectedVariant.sides}`} />

            {/* Content */}
            <section className="relative z-10">
                {children}
            </section>
        </div>
    );
};

export default BackgroundOverlay;