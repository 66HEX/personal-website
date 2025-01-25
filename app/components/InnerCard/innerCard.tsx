import { Spotlight } from "@/app/utils/spotlight";
import {CSSProperties, ReactNode, forwardRef, Ref} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    id?: string;
    style?: CSSProperties;
    ref?: Ref<HTMLDivElement>;
}

const InnerCard = forwardRef<HTMLDivElement, Omit<CardProps, 'ref'>>((props, ref) => {
    const { children, className = '', id, style } = props;

    return (
        <div
            ref={ref}
            className="relative overflow-hidden rounded-inner-card"
            id={id}
            style={style}
        >
            {/* Main card */}
            <div className={`
                relative 
                bg-black
                mix-blend-lighten
                rounded-inner-card
                overflow-hidden 
                p-[1px]
                ${className}
            `}>
                <Spotlight
                    className='blur-3xl rounded-inner-card hidden md:block'
                    size={450}
                  />
                {/* Content container */}
                <div className="relative z-0 h-full p-4 md:p-8 bg-black overflow-hidden border border-border-inner rounded-inner-card">
                    {/* Top gradient */}
                    <div className="-z-10 absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card-gradient-lighter to-transparent opacity-80"/>
                    {/* Bottom gradient */}
                    <div className="-z-10 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card-gradient-lighter to-transparent opacity-80"/>
                    <div className="z-40">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
});

InnerCard.displayName = 'InnerCard';

export default InnerCard;