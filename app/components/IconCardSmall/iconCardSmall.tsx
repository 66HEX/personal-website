import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const IconCardSmall = ({ children, className = '' }: CardProps) => {
    return (
        <div className="relative">
            {/* Main card */}
            <div className={`
                relative 
                bg-icon
                rounded-icon-small
                p-2
                backdrop-blur-sm 
                overflow-hidden 
                border
                border-border-inner
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

export default IconCardSmall;