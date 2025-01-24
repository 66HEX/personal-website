import { Spotlight } from "@/app/utils/spotlight";
import {CSSProperties, ReactNode, forwardRef} from "react";

interface FAQItemProps {
    children: ReactNode;
    className?: string;
    id?: string;
    style?: CSSProperties;
}

const FAQItem = forwardRef<HTMLDivElement, FAQItemProps>(({
    children,
    className = '',
    id,
    style
}, ref) => {
    return (
        <div
            ref={ref}
            className="relative overflow-hidden rounded-card"
            id={id}
            style={style}
        >
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
                    className='blur-3xl rounded-card hidden md:block'
                    size={450}
                  />
                {/* Content container */}
                <div className="relative z-0 h-full bg-black overflow-hidden border border-border-inner rounded-card">
                    {/* Top gradient */}
                    <div className="-z-10 absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card-gradient-lighter to-transparent opacity-70"/>
                    {/* Bottom gradient */}
                    <div className="-z-10 absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card-gradient-lighter to-transparent opacity-70"/>
                    <div className="z-20">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
});

FAQItem.displayName = 'FAQItem';

export default FAQItem;