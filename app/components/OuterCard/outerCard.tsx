import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const OuterCard = ({ children, className = '' }: CardProps) => {
    return (
        <div className="relative">
            {/* Glow effect container */}
            <div className="absolute inset-0 rounded-outer-card">
                <div className="absolute w-full h-1/2 rounded-outer-card opacity-50 blur-md bg-gradient-to-b from-card-gradient-darker to-transparent" />
            </div>

            {/* Main card */}
            <div className={`
                relative 
                bg-black
                rounded-outer-card 
                backdrop-blur-sm 
                overflow-hidden 
                border
                border-border-outer
                ${className}
            `}>
                {/* Top gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card-gradient-darker to-transparent" />

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card-gradient-lighter to-transparent" />

                {/* Content container */}
                <div className="relative z-10 p-4 md:p-8 ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OuterCard;