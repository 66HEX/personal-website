'use client';

import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from 'react';
import Link from "next/link";


gsap.registerPlugin(CustomEase);

const ContactForm = () => {
    const formRef = useRef();


    return (
        <form className="w-full max-w-2xl mx-auto space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="border border-white/10 p-4 rounded-custom transition-all">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full opacity-50 bg-transparent outline-none"
                />
            </div>
            <div className="border border-white/10 p-4 rounded-custom transition-all">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full opacity-50 bg-transparent outline-none"
                />
            </div>
            <div className="border border-white/10 p-4 rounded-custom transition-all">
                <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full opacity-50 bg-transparent outline-none resize-none"
                />
            </div>
            <button className="border border-white w-full bg-black text-white py-4 rounded-custom hover:opacity-90 transition-opacity">
                Send Message
            </button>
        </form>
    );
};

export default function Contact() {
    return (
        <div className="px-4 lg:px-24 py-24 min-h-screen bg-black text-white font-Lausanne300">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl md:text-7xl  font-Lausanne750 tracking-tight uppercase">Contact</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-Lausanne750 tracking-tight">Let's talk about your next big idea</h2>
                        <p className="text-lg font-Lausanne300 opacity-50">
                            Have a project in mind? Get in touch and let's create something extraordinary together.
                            I'm always excited to hear about new ideas and challenges.
                        </p>
                        <div className="space-y-4">
                            <Link href="mailto:hexthecoder@gmail.com" className="block hover:opacity-70 transition-opacity">
                                hexthecoder@gmail.com
                            </Link>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}