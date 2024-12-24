'use client';

import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { initializeButtonAnimation } from "./animation";
import {useEffect, useRef} from 'react';
import Link from "next/link";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";


gsap.registerPlugin(CustomEase);

const ContactForm = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return cleanup;
    }, []);


    return (
        <form className="w-full max-w-2xl mx-auto font-[300]" onSubmit={(e) => e.preventDefault()}>
            <div className="border border-white/20 p-4 rounded-custom transition-all mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full opacity-50 bg-transparent outline-none"
                />
            </div>
            <div className="border border-white/20 p-4 rounded-custom transition-all mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full opacity-50 bg-transparent outline-none"
                />
            </div>
            <div className="border border-white/20 p-4 rounded-custom transition-all mb-8">
                <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full opacity-50 bg-transparent outline-none resize-none"
                />
            </div>
            <button
                ref={buttonRef}
                className="border border-white/20 w-full bg-white/5 text-white py-4 rounded-custom hover:opacity-90 transition-opacity">
                Send Message
            </button>
        </form>
    );
};

export default function Contact() {
    return (
        <div className="px-4 lg:px-24 pb-12 lg:pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto flex flex-col justify-center items-start">
                <div className="h-[30vh] py-8 flex items-end">
                    <h1 className="text-4xl md:text-7xl font-[750] tracking-tight uppercase">Contact</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-3xl font-[750] tracking-tight">Let's talk about your next big idea</h2>
                        <p className="text-lg font-[300] opacity-50 my-4">
                            Have a project in mind? Get in touch and let's create something extraordinary together.
                            I'm always excited to hear about new ideas and challenges.
                        </p>
                        <Link href="mailto:hexthecoder@gmail.com" className="block font-[750]">
                            <AnimatedLink>
                                hexthecoder@gmail.com
                            </AnimatedLink>
                        </Link>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}