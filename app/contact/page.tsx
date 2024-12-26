'use client';

import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { setupContactAnimation, animateStatusMessage  } from "@/app/animations/contactPageAnimations";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

gsap.registerPlugin(CustomEase);

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const statusRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<{
        message: string;
        type: 'success' | 'error' | '';
    }>({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const cleanup = initializeButtonAnimation(buttonRef.current);
        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    useEffect(() => {
        if (status.message && statusRef.current) {
            const ctx = animateStatusMessage(statusRef, () => {
                setStatus({ message: '', type: '' });
            });

            return () => ctx.revert();
        }
    }, [status.message]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ message: 'Message sent successfully!', type: 'success' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ message: data.error || 'Something went wrong', type: 'error' });
            }
        } catch (error) {
            setStatus({ message: 'Failed to send message', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form className="w-full font-[300]" onSubmit={handleSubmit}>
            <div className="border border-white/10 p-4 rounded-custom mb-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    autoComplete="off"
                    required
                    className="w-full opacity-50 bg-transparent outline-none"
                />
            </div>
            <div className="border border-white/10 p-4 rounded-custom transition-all mb-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="off"
                    required
                    className="w-full opacity-50 bg-transparent outline-none [&:-webkit-autofill]:bg-transparent"
                />
            </div>
            <div className="border border-white/10 p-4 rounded-custom transition-all mb-8">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    autoComplete="off"
                    required
                    rows={4}
                    className="w-full opacity-50 bg-transparent outline-none resize-none"
                />
            </div>
            <button
                ref={buttonRef}
                type="submit"
                disabled={isSubmitting}
                className="border border-white/10 w-full bg-white/5 text-white py-4 rounded-custom disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
                <div
                    ref={statusRef}
                    className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-custom border backdrop-blur-sm 
                    ${status.type === 'success'
                        ? 'border-green-500/10 text-green-500 bg-green-500/5'
                        : 'border-red-500/10 text-red-500 bg-red-500/5'
                    } flex items-center justify-center max-w-[90vw] min-w-[200px] shadow-lg`}
                >
                    {status.message}
                </div>
            )}
        </form>
    );
};

export default function Contact() {

    const component = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const emailRef = useRef(null);


    useEffect(() => {
        const ctx = setupContactAnimation({
            titleRef,
            subtitleRef,
            descriptionRef,
            emailRef,
        }, component);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={component} className="px-4 lg:px-24 pb-24 min-h-screen relative text-white">
            <BackgroundOverlay/>
            <div className="w-full flex flex-col justify-center items-start">
                <div className="h-[30vh] py-8 flex items-end">
                    <h1 ref={titleRef} className="text-4xl md:text-7xl font-[750] tracking-tight uppercase">Contact</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-12 md:gap-32 w-full">
                    <div className="col-span-1">
                        <h2 ref={subtitleRef} className="text-3xl font-[750] tracking-tight">Let's talk about your next big idea</h2>
                        <p ref={descriptionRef} className="text-lg font-[300] my-4">
                            Have a project in mind? Get in touch and let's create something extraordinary together.
                            I'm always excited to hear about new ideas and challenges.
                        </p>
                        <Link ref={emailRef} href="mailto:hexthecoder@gmail.com" className="block font-[750] w-fit">
                            hexthecoder@gmail.com
                        </Link>
                    </div>
                    <div className="col-span-1 w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}