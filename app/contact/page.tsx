"use client";

import { Info } from "lucide-react";
import Link from "next/link";
import OuterCard from "@/app/components/OuterCard/outerCard";
import ContactForm from "@/app/components/ContactForm/contactForm";

export default function Contact() {

    return (
        <section className="w-screen text-text-white relative">
            <div className="px-4 lg:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    <div className="col-span-1 md:col-span-8 order-2 md:order-1">
                        <ContactForm/>
                    </div>

                    <div className="col-span-1 md:col-span-4 order-1 md:order-2">
                        <OuterCard>
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-2 bg-icon border border-border-inner rounded-icon w-fit h-fit">
                                    <Info className="w-8 h-8 text-text-white"/>
                                </div>
                                <div
                                    className="px-3 py-1 text-xs text-text-white bg-icon border border-border-inner rounded-full">
                                    Contact Info
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <h2
                                    className="text-xl font-[750] tracking-tight leading-none"
                                >
                                    Let's talk about your next big idea
                                </h2>
                                <div className="flex flex-col gap-4">
                                    <p
                                        className="text-sm font-[500] tracking-tight text-text-gray leading-relaxed"
                                    >
                                        Have a project in mind? Get in touch and let's create something extraordinary
                                        together.
                                        I'm always excited to hear about new ideas and challenges.
                                    </p>
                                    <Link
                                        href="mailto:hexthecoder@gmail.com"
                                        className="text-sm font-[750] tracking-tight"
                                    >
                                        hexthecoder@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </OuterCard>
                    </div>
                </div>
            </div>
        </section>
    );
}