import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const IconCard = ({ children, className = '' }: CardProps) => {
    return (
        <div className="relative">
            {/* Main card */}
            <div className={`
                relative 
                bg-icon
                rounded-icon
                p-2
                backdrop-blur-sm 
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

export default IconCard;