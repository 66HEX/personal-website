import { Quote } from "lucide-react";
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
                            <Quote className="w-5 h-5 text-text-white"/>
                        </IconCardSmall>
                        <div className="flex items-end gap-4">
                            <BadgeSmall>
                                Testimonial
                            </BadgeSmall>
                        </div>
                    </div>
                    <p className="text-sm font-[400] tracking-tight text-text-gray leading-relaxed mb-8">{testimonial.text}</p>
                    <div className="mt-auto flex items-center gap-4">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-icon border border-border-outer overflow-hidden">
                                <img src={testimonial.src} alt={testimonial.author} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="font-[750] md:text-lg text-text-white">{testimonial.author}</p>
                            <p className="text-xs text-text-gray font-[400]">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </InnerCard>
        </div>
    );
};

export default TestimonialCard;