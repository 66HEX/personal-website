"use client";

import { animateStatusMessage } from "@/app/animations/contactPageAnimations";
import { useEffect, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import OuterCard from "@/app/components/OuterCard/outerCard";
import IconCard from "@/app/components/IconCard/iconCard";
import Badge from "@/app/components/Badge/badge";
import Button, { ButtonVariant } from "@/app/components/Button/button";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
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
        <div className="relative">
            <OuterCard>
                <div className="flex justify-between items-start mb-8">
                    <IconCard className="w-fit h-fit">
                        <Mail className="w-8 h-8 text-text-white" />
                    </IconCard>
                    <Badge>
                        Send Message
                    </Badge>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
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
                        <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
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
                        <span className="text-sm font-[750] tracking-tight leading-none text-text-white">
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

                    <Button
                        variant={ButtonVariant.Contact}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <span className="text-sm font-[500] tracking-tight text-text-white">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <Send className="w-5 h-5 text-text-gray" />
                    </Button>
                </form>
            </OuterCard>

            {status.message && (
                <div
                    ref={statusRef}
                    className={`absolute -bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-icon border backdrop-blur-sm 
                    ${
                        status.type === "success"
                            ? "border-green-500/5 text-green-500 bg-green-500/5"
                            : "border-red-500/5 text-red-500 bg-red-500/5"
                    } flex items-center justify-center max-w-[90vw] min-w-[200px] shadow-lg`}
                >
                    {status.message}
                </div>
            )}
        </div>
    );
};

export default ContactForm;