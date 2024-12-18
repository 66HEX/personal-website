import Link from "next/link";
import AnimatedLink from "@/app/components/AnimatedLink/AnimatedLink";

export default function Footer() {
    return (

        <div
            className='relative h-[50vh] md:h-[25vh] xl:h-[50vh]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='fixed bottom-0 h-[50vh] md:h-[25vh] xl:h-[50vh] w-full bg-offblacktext text-offwhitetext'>
                <div className='p-4 md:p-24 h-full w-full flex flex-col justify-end'>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
                        <div className="col-span-2 md:col-span-2 h-full">
                            <h1
                                className="text-fluid font-bold font-Lausanne1000 max-w-prose tracking-tight ">
                                hex
                            </h1>
                        </div>
                        <div className="col-span-1 text-sm h-full font-Lausanne500 order-2 md:order-1">
                            <div className="h-full flex flex-col gap-1 w-20">
                                <Link className="overflow-hidden" href="https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/" target="_blank" rel="noopener noreferrer">
                                    <AnimatedLink>
                                        Email
                                    </AnimatedLink>
                                </Link>
                                <Link className="overflow-hidden" href="https://www.linkedin.com/in/marek-j%C3%B3%C5%BAwiak-29958132a/" target="_blank" rel="noopener noreferrer">
                                    <AnimatedLink>
                                        LinkedIn
                                    </AnimatedLink>
                                </Link>
                                <Link className="overflow-hidden" href="https://www.instagram.com/hexthecoder/" target="_blank" rel="noopener noreferrer">
                                    <AnimatedLink>
                                        Instagram
                                    </AnimatedLink>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1 text-sm h-full font-Lausanne500 flex justify-end items-end gap-1 order-1 md:order-2">
                            <p className='text-xs font-Lausanne700'>©2024 Marek Jóźwiak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}