import ScrollTriggerBlur from "@/app/components/ScrollTriggerBlur/ScrollTriggerBlur";

export default function Intro() {
    return (
        <div className="w-screen flex justify-center items-center text-white/50 px-4 py-12 lg:px-24 lg:py-24">
            <h1 className="text-2xl lg:text-5xl font-Lausanne750 tracking-tight leading-none text-center">
                <ScrollTriggerBlur>
                    As a <span className="text-white">front-end developer</span>, I bring a unique
                    combination of creativity and technical
                    expertise to every project. With a <span className="text-white">keen eye for design</span> and a <span
                    className="text-white">passion</span> for delivering user-friendly web
                    experiences, I work closely with clients to understand their needs and bring their vision to life.
                </ScrollTriggerBlur>
            </h1>

        </div>
    );
}