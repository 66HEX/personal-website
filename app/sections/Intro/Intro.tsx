import ScrollTriggerBlur from "@/app/components/ScrollTriggerBlur/ScrollTriggerBlur";

export default function Intro() {
    return (
        <div className="w-screen flex justify-center items-center text-offblacktext px-4 py-8 lg:px-24 lg:py-24">
            <h1 className="text-2xl lg:text-5xl font-Lausanne750 uppercase tracking-tight leading-none">
                <ScrollTriggerBlur>
                    As a freelance web designer and developer, I bring a unique combination of creativity and technical
                    expertise to every project. With a keen eye for design and a passion for delivering user-friendly web
                    experiences, I work closely with clients to understand their needs and bring their vision to life.
                </ScrollTriggerBlur>
            </h1>
        </div>
);
}
