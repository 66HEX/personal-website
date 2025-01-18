import React from 'react';
import {Code2, Palette, Sparkles, BringToFront, Layers, Box, LucideIcon} from 'lucide-react';

interface SkillCardProps {
    icon: LucideIcon;
    title: string;
    rotation: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, rotation }) => {
    const radius = 35;
    const angle = rotation * (Math.PI / 180);
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    return (
        <div
            className="absolute -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-icon border border-border-outer rounded-icon p-3 flex items-center gap-2"
            style={{
                left: `${x}%`,
                top: `${y}%`,
            }}
        >
            <div className="p-1.5 bg-icon border border-border-outer rounded-icon">
                <Icon className="w-4 h-4 text-text-white" />
            </div>
            <span className="text-sm font-[500] text-text-white whitespace-nowrap">{title}</span>
        </div>
    );
};

const SkillCards = () => {
    const skills = [
        { icon: Code2, title: "React & Next.js" },
        { icon: Palette, title: "UI/UX Design" },
        { icon: BringToFront, title: "Animations" },
        { icon: Sparkles, title: "Clean Code" },
        { icon: Layers, title: "Full Stack" },
        { icon: Box, title: "3D Graphics" }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {skills.map((skill, index) => (
                <SkillCard
                    key={skill.title}
                    icon={skill.icon}
                    title={skill.title}
                    rotation={-90 + (360 / skills.length) * index}
                />
            ))}
        </div>
    );
};

export default SkillCards;