"use client";

import { animateStatusMessage } from "@/app/animations/contactPageAnimations";
import { initializeButtonAnimation } from "@/app/animations/buttonHoverAnimation";
import { useEffect, useRef, useState } from "react";
import {Info, Mail, Send} from "lucide-react";
import Link from "next/link";
import OuterCard from "@/app/components/OuterCard/outerCard";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const statusRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        message: string;
        type: "success" | "error" | "";
    }>({ message: "", type: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const cleanup = initializeButtonAnimation({
            buttonRef: buttonRef.current,
        });

        return cleanup;
    }, []);

    useEffect(() => {
        if (status.message && statusRef.current) {
            const ctx = animateStatusMessage(statusRef, () => {
                setStatus({ message: "", type: "" });
            });

            return () => ctx.revert();
        }
    }, [status.message]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: "", type: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ message: "Message sent successfully!", type: "success" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({
                    message: data.error || "Something went wrong",
                    type: "error",
                });
            }
        } catch (error) {
            setStatus({ message: "Failed to send message", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <OuterCard>
            <div className="flex justify-between items-start mb-8">
                <div className="p-2 bg-icon border border-border-inner rounded-icon w-fit h-fit">
                    <Mail className="w-8 h-8 text-text-white" />
                </div>
                <div className="px-3 py-1 text-xs text-text-white bg-icon border border-border-inner rounded-full">
                    Send Message
                </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-[750] tracking-tight leading-none text-text-gray">
                        Name:
                    </span>
                    <div className="bg-icon border border-border-inner rounded-icon p-3">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            autoComplete="off"
                            required
                            className="w-full text-text-white bg-transparent outline-none text-sm font-[500] tracking-tight"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-sm font-[750] tracking-tight leading-none text-text-gray">
                        Email:
                    </span>
                    <div className="bg-icon border border-border-inner rounded-icon p-3">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            autoComplete="off"
                            required
                            className="w-full text-text-white bg-transparent outline-none text-sm font-[500] tracking-tight"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-sm font-[750] tracking-tight leading-none text-text-gray">
                        Message:
                    </span>
                    <div className="bg-icon border border-border-inner rounded-icon p-3">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            autoComplete="off"
                            required
                            rows={4}
                            className="w-full text-text-white bg-transparent outline-none resize-none text-sm font-[500] tracking-tight"
                        />
                    </div>
                </div>

                <button
                    ref={buttonRef}
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-3 mt-4 w-full p-3 bg-icon border border-border-inner rounded-icon disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="text-sm font-[500] tracking-tight text-text-white">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <Send className="w-5 h-5 text-text-gray" />
                </button>
            </form>

            {status.message && (
                <div
                    ref={statusRef}
                    className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-icon border backdrop-blur-sm 
                    ${
                        status.type === "success"
                            ? "border-green-500/5 text-green-500 bg-green-500/5"
                            : "border-red-500/5 text-red-500 bg-red-500/5"
                    } flex items-center justify-center max-w-[90vw] min-w-[200px] shadow-lg`}
                >
                    {status.message}
                </div>
            )}
        </OuterCard>
    );
};

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