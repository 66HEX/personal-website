import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

const BadgeSmall = ({ children, className = '' }: BadgeProps) => {
    return (
        <div className="relative">
            {/* Main card */}
            <div className={`
                relative 
                bg-icon
                rounded-full
                backdrop-blur-sm 
                px-3 py-1 
                font-[500] 
                text-xs 
                text-text-white
                overflow-hidden 
                border
                border-border-outer
                ${className}
            `}>

                {/* Content container */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BadgeSmall;