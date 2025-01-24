"use client";
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, HelpCircle } from 'lucide-react';
import OuterCard from '@/app/components/OuterCard/outerCard';
import IconCard from '@/app/components/IconCard/iconCard';
import Badge from '@/app/components/Badge/badge';
import GradientHeader from '@/app/components/GradientHeader/gradientHeader';
import Button, { ButtonVariant } from "@/app/components/Button/button";
import Faqitem from "@/app/components/FAQItem/faqitem";
import InnerCard from "@/app/components/InnerCard/innerCard";
import { TransitionLink } from "@/app/components/TransitionLink/TransitionLink";
import { faqData } from "@/app/data/faqData";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [faqItems] = useState<FAQItem[]>(faqData);
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(faqData.length).fill(false));
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentHeights = useRef<number[]>([]);

    useEffect(() => {
        const calculateHeights = () => {
            contentHeights.current = contentRefs.current.map(ref =>
                ref ? ref.scrollHeight : 0
            );
        };

        calculateHeights();
        window.addEventListener('resize', calculateHeights);

        return () => {
            window.removeEventListener('resize', calculateHeights);
        };
    }, []);

    const toggleQuestion = (index: number): void => {
        const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power3.inOut" } });

        const previousOpenIndex = openStates.findIndex(isOpen => isOpen);
        const isCurrentlyOpen = openStates[index];

        if (previousOpenIndex !== -1 && previousOpenIndex !== index) {
            const previousContent = contentRefs.current[previousOpenIndex];
            const previousFaq = faqRefs.current[previousOpenIndex];

            if (previousContent) {
                tl.to(previousContent, { height: 0 }, 0);
            }

            if (previousFaq) {
                const previousArrow = previousFaq.querySelector('.arrow');
                if (previousArrow) {
                    tl.to(previousArrow, {
                        rotation: 0,
                        transformOrigin: "center center",
                        force3D: true,
                    }, 0);
                }
            }
        }

        setOpenStates(prevStates =>
            prevStates.map((state, i) => i === index ? !state : false)
        );

        const currentContent = contentRefs.current[index];
        const currentFaq = faqRefs.current[index];

        if (currentContent) {
            tl.to(currentContent, {
                height: isCurrentlyOpen ? 0 : contentHeights.current[index],
            }, 0);
        }

        if (currentFaq) {
            const arrow = currentFaq.querySelector('.arrow');
            if (arrow) {
                tl.to(arrow, {
                    rotation: isCurrentlyOpen ? 0 : 180,
                    transformOrigin: "center center",
                    force3D: true,
                }, 0);
            }
        }
    };

    return (
        <section className="w-screen px-4 lg:px-24 py-12 lg:py-24 text-text-white">
            <OuterCard>
                <div className="flex items-center justify-between w-full mb-6 md:mb-0">
                    <div className="flex w-full justify-between items-start">
                        <IconCard>
                            <HelpCircle className="w-8 h-8 text-text-white"/>
                        </IconCard>
                        <Badge>
                            Frequently Asked Questions
                        </Badge>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <GradientHeader
                        normalText="Frequently asked"
                        gradientText="questions"
                    />
                    <p className="text-base font-[400] tracking-tight text-text-gray leading-relaxed">
                        Find answers to common questions about our services, process, and expertise
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <Faqitem
                            key={index}
                            ref={el => faqRefs.current[index] = el}
                            className="overflow-hidden rounded-card"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full p-6 flex justify-between items-center z-50"
                                aria-expanded={openStates[index]}
                                aria-controls={`faq-content-${index}`}
                            >
                                <span className="text-left font-[750] text-base text-text-white tracking-tight leading-relaxed">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className="w-5 h-5 text-text-white arrow ml-8"
                                    style={{minWidth: '20px', minHeight: '20px'}}
                                />
                            </button>
                            <div
                                ref={el => contentRefs.current[index] = el}
                                className="overflow-hidden"
                                style={{height: 0}}
                                id={`faq-content-${index}`}
                            >
                                <div className="p-6 pt-0 text-text-gray text-sm">
                                    {item.answer}
                                </div>
                            </div>
                        </Faqitem>
                    ))}
                </div>
                <div
                    className="text-center mt-12">
                    <InnerCard
                        className="max-w-2xl mx-auto"
                        ref={(el) => {
                            if (faqRefs.current) {
                                faqRefs.current[faqItems.length] = el;
                            }
                        }}
                    >
                        <h3
                            className="text-xl text-text-white font-[750] mb-2">Still have questions?</h3>
                        <p className="text-text-gray font-[400] mb-6 mx-auto max-w-md text-sm">
                            Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help with any
                            questions you may have.
                        </p>
                        <TransitionLink className="z-30" href="/contact">
                            <Button variant={ButtonVariant.FAQ}>
                                Contact Me
                            </Button>
                        </TransitionLink>
                    </InnerCard>
                </div>
            </OuterCard>
        </section>
    );
}