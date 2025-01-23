import { Spotlight } from "@/app/utils/spotlight";
import {CSSProperties, ReactNode} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    id?: string;
    style?: CSSProperties;
}

const InnerCard = ({ children, className = '', id, style }: CardProps) => {
    return (
        <div className="relative overflow-hidden rounded-outer-card" id={id} style={style}>
            {/* Glow effect container */}
            <div className="absolute inset-0 rounded-outer-card">
                <div className="absolute w-full h-1/2 rounded-outer-card opacity-20 blur-md bg-gradient-to-b from-card-gradient-darker to-transparent"/>
            </div>

            {/* Main card */}
            <div className={`
                relative 
                bg-black
                mix-blend-lighten
                rounded-card
                overflow-hidden 
                p-[1px]
                ${className}
            `}>

                <Spotlight
                    className='blur-3xl rounded-card'
                    size={400}
                  />

                {/* Content container */}
                <div className="relative z-10 h-full p-4 md:p-8 bg-black overflow-hidden rounded-card">

                    {/* Top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card-gradient-lighter to-transparent"/>

                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card-gradient-lighter to-transparent"/>

                    {/* Left gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card-gradient-lighter to-transparent opacity-30 overflow-hidden "/>

                    {/* Right gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card-gradient-lighter to-transparent opacity-30 overflow-hidden "/>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default InnerCard;