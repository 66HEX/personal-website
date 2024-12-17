export default function Intro() {
    return (
        <div className="w-screen flex justify-center items-center text-offblacktext px-4 lg:px-8 py-8 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-none uppercase opacity-50">
                        INFO
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="text-sm md:text-xl font-Lausanne300 tracking-tight leading-relaxed">
                        As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.
                    </p>
                </div>
            </div>
        </div>
    );
}
