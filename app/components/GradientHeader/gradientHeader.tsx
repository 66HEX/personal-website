import React from 'react';

interface GradientHeaderProps {
    normalText: string;
    gradientText: string;
    className?: string;
}

const GradientHeader = ({
                            normalText,
                            gradientText,
                            className = 'text-3xl sm:text-5xl font-[750] tracking-tight mb-4 lg:mb-6'
                        }: GradientHeaderProps) => {
    return (
        <h2 className={className}>
            {normalText}
            <br />
            <span className="bg-gradient-to-r from-text-white  to-text-gray text-transparent bg-clip-text">
                {gradientText}
            </span>
        </h2>
    );
};

export default GradientHeader;