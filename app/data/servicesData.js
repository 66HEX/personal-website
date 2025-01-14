import { Code2, Palette, Search, Gauge, Wrench } from "lucide-react";

export const services = [
    {
        icon: <Code2 className="w-5 h-5 text-white"/>,
        title: "Front-End Development",
        description: "Building modern web applications using React and Next.js with focus on clean code, performance, and best development practices.",
        shortDescription: "Core Service",
        features: ["React", "Next.js", "TypeScript"]
    },
    {
        icon: <Palette className="w-5 h-5 text-white"/>,
        title: "UI/UX Implementation",
        description: "Pixel-perfect implementation of designs with attention to detail. Utilizing advanced CSS techniques and animations to create engaging interfaces.",
        shortDescription: "Design Focus",
        features: ["Animations", "Tailwind", "GSAP"]
    },
    {
        icon: <Search className="w-5 h-5 text-white"/>,
        title: "SEO Optimization",
        description: "Optimizing websites for search engines through SEO best practices, semantic HTML structure, and proper content organization.",
        shortDescription: "Visibility",
        features: ["Meta Tags", "Performance", "Semantic HTML"]
    },
    {
        icon: <Gauge className="w-5 h-5 text-white"/>,
        title: "Performance Optimization",
        description: "Enhancing application performance through efficient code, lazy loading, and modern web technologies to ensure fast loading times and smooth interactions.",
        shortDescription: "Speed",
        features: ["Core Web Vitals", "Lazy Loading", "Code Splitting"]
    },
    {
        icon: <Wrench className="w-5 h-5 text-white"/>,
        title: "Maintenance & Support",
        description: "Regular updates, performance monitoring, and quick technical issue resolution. Ensuring continuous operation and application development.",
        shortDescription: "Long Term",
        features: ["Updates", "Monitoring", "Quick Fixes"]
    }
];