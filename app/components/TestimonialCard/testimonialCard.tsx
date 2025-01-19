import InnerCard from "@/app/components/InnerCard/innerCard";
import IconCardSmall from "@/app/components/IconCardSmall/iconCardSmall";
import BadgeSmall from "@/app/components/BadgeSmall/badgeSmall";

interface TestimonialCardProps {
    testimonial: {
        text: string;
        src: string;
        author: string;
        role: string;
    };
    width: number;
    refId: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, width, refId }) => {
    return (
        <div
            id={refId}
            className="testimonial-card flex-shrink-0 group overflow-hidden h-full"
            style={{ width: `${width}px` }}
        >
            <InnerCard className="relative h-full overflow-hidden">
                <div className="relative flex flex-col h-full  min-h-[300px]">
                    <div className="flex justify-between items-start mb-6 xl:mb-8">
                        <IconCardSmall>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                            </svg>
                        </IconCardSmall>
                        <div className="flex items-end gap-4">
                            <BadgeSmall>
                                Testimonial
                            </BadgeSmall>
                        </div>
                    </div>
                    <p className="text-sm font-[500] tracking-tight text-text-gray leading-relaxed mb-8">{testimonial.text}</p>
                    <div className="mt-auto flex items-center gap-4">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-icon border border-border-outer overflow-hidden">
                                <img src={testimonial.src} alt={testimonial.author} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="font-[750] md:text-lg text-text-white">{testimonial.author}</p>
                            <p className="text-xs text-text-gray font-[500]">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </InnerCard>
        </div>
    );
};

export default TestimonialCard;