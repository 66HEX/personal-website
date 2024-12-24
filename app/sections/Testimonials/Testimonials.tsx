'use client';

import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import { testimonialsData } from '@/app/data/testimonialsData';
import horizontalLoop from '@/app/utils/HorizontalLoop';

gsap.registerPlugin(CustomEase, Observer);

type Testimonial = {
    text: string;
    author: string;
    role: string;
    src: string;
};

const Marquee: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const speed = 1;

        if (!container.current) return;

        document.fonts.ready.then(() => {
            const loop = horizontalLoop('.testimonial-card', {
                repeat: -1,
                speed: speed,
                paddingRight: 32,
            });

            let tl: gsap.core.Timeline | null = null;

            Observer.create({
                target: window as any,
                type: 'wheel',
                onChangeY: (self) => {
                    tl && tl.kill();
                    const factor = self.deltaY > 0 ? 1 : -1;
                    tl = gsap.timeline()
                        .to(loop, { timeScale: speed * factor, duration: 0.25 })
                        .to(loop, { timeScale: 1 * factor, duration: 1 });
                },
            });
        });
    }, []);

    return (
        <main>
            <div ref={container} className="testimonial-container flex space-x-4 xl:space-x-8">
                {testimonialsData.map((testimonial: Testimonial, index: number) => (
                    <TestimonialCard
                        key={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </main>
    );
};

const TestimonialCard: React.FC<Testimonial> = ({ text, author, role, src }) => {
    return (
        <div className="testimonial-card w-full md:w-1/2 xl:w-1/3 flex-shrink-0 text-white rounded-custom bg-white/5 border border-white/5">
            <div className="relative flex flex-col justify-start items-start h-full p-8">
                <div className="text-left mb-auto">
                    <p className="text-sm md:text-xl font-Lausanne300Italic opacity-50">"{text}"</p>
                </div>

                <div className="flex items-center mt-16">
                    <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden mr-4">
                        <Image style={{ objectFit: "cover" }} src={src} alt={author} fill />
                    </div>
                    <div>
                        <p className="font-Lausanne750 text-sm md:text-xl">{author}</p>
                        <p className="font-Lausanne300 text-xs opacity-50">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="w-screen bg-black text-white px-4 lg:px-24 py-12 lg:py-24 flex flex-col justify-center items-start">
            <h1 className="text-2xl lg:text-5xl font-Lausanne750 uppercase tracking-tight leading-none mb-8">
                Testimonials
                <sup className="text-xs md:text-sm tracking-normal align-top opacity-50">
                    ({String(testimonialsData.length / 2).padStart(2, "0")})
                </sup>
            </h1>
            <div className="w-full flex flex-col gap-4" style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            }}>
                <Marquee />
            </div>
        </section>
    );
};

export default Testimonials;
